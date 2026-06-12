function appendOriginIfNeeded(html) {
  return html.replace(
    /(href|src)="(\/content\/dam[^"]*)"/g,
    (match, attr, path) => `${attr}="${origin}${path}"`,
  );
}

function decodeHtml(html) {
  return appendOriginIfNeeded(html).replace(/&lt;/g, '<').replace(/&gt;/g, '>');
}

/**
 * Reads a value from a Franklin-style block HTML structure using a key.
 *
 * The expected block structure is a series of rows where:
 * - The first cell contains the key
 * - The second cell contains the value
 *
 * Optionally enforces an expected value type and falls back to `defaultValue`
 * if the value is missing or cannot be converted.
 *
 * @param {HTMLElement} blockEl
 *   The root block element.
 *
 * @param {string} key
 *   The key to look up (e.g. "title").
 *
 * @param {*} [defaultValue=null]
 *   The value to return if the key is not found or type conversion fails.
 *
 * @param {('string'|'richtext'|'int'|'float'|'boolean'|'json'|null)} [expectedType=null]
 *   Expected type of the value:
 *   - 'string' → always returns a string
 *   - 'int'    → parses using parseInt (base 10)
 *   - 'float'  → parses using parseFloat
 *   - 'boolean'→ parses via direct string comparison, 'true' and 'false', otherwise it will be null
 *   - null     → returns the raw string value
 *
 * @returns {string|number|*}
 *   The resolved value, converted to the expected type when specified,
 *   otherwise the default value.
 */
function getBlockValue(blockEl, key, defaultValue = null, expectedType = null) {
  if (!blockEl) {
    return defaultValue;
  }

  const row = [...blockEl.children].find((row) => {
    const cells = row.children;
    if (cells.length < 2) {
      return false;
    }

    const rowKey = cells[0]?.textContent?.trim();
    return rowKey === key;
  });

  const rawValue = row?.children?.[1]?.textContent?.trim() ?? null;

  if (rawValue == null) {
    return defaultValue;
  }

  switch (expectedType) {
    case 'string':
      return String(rawValue);

    case 'richtext':
      return decodeHtml(row?.children?.[1]?.innerHTML).trim() || defaultValue;

    case 'int': {
      const intVal = parseInt(rawValue, 10);
      return Number.isNaN(intVal) ? defaultValue : intVal;
    }

    case 'float': {
      const floatVal = parseFloat(rawValue);
      return Number.isNaN(floatVal) ? defaultValue : floatVal;
    }

    case 'boolean': {
      // eslint-disable-next-line operator-linebreak
      const boolVal =
        // eslint-disable-next-line no-nested-ternary
        rawValue === 'true' ? true : rawValue === 'false' ? false : null;

      return boolVal === null ? defaultValue : boolVal;
    }

    case 'json': {
      try {
        return JSON.parse(rawValue);
      } catch {
        return defaultValue;
      }
    }

    case 'picture': {
      const img = row?.children?.[1]?.querySelector('img');
      return img?.getAttribute('src') || defaultValue;
    }

    case null:
    default:
      return rawValue;
  }
}

/**
 * Resolves multiple values from a Franklin-style block using a schema definition.
 *
 * @param {HTMLElement} blockEl
 *   The root block element.
 *
 * @param {Object<string, {
 *   key: string,
 *   defaultValue?: *,
 *   expectedType?: ('string'|'int'|'float'|'boolean'|'json'|null)
 * }>} schema
 *   Configuration object describing how to read each value.
 *
 * @returns {Object<string, string|number|*>}
 *   Object containing resolved values keyed by schema keys.
 */
function getBlockData(blockEl, schema = {}) {
  const data = {};

  Object.entries(schema).forEach(([propName, config]) => {
    if (!config || typeof config !== 'object') {
      data[propName] = undefined;
      return;
    }

    const { key, defaultValue = null, expectedType = null } = config;

    data[propName] = getBlockValue(blockEl, key, defaultValue, expectedType);
  });

  return data;
}

/**
 * Counts how many of the given keys exist in a Franklin-style block.
 *
 * @param {HTMLElement} blockEl - The root block element.
 * @param {string[]} propKeys - Array of property key strings to check.
 * @returns {number} - Number of keys found in the block.
 */
function getBlockExistingPropsCnt(blockEl, propKeys = []) {
  if (!blockEl || !propKeys.length) return 0;

  let count = 0;

  [...blockEl.children].forEach((row) => {
    const cells = row.children;
    if (cells.length < 2) return;

    const rowKey = cells[0]?.textContent?.trim();
    if (propKeys.includes(rowKey)) {
      count += 1;
    }
  });

  return count;
}

/**
 * Extracts data from a block element based on an array of schema definitions.
 * Uses index + 1 to map schema items to inner divs of the block.
 *
 * @param {HTMLElement} blockEl - The root block element.
 * @param {Array<{
 *   idKey: string,
 *   defaultValue?: *,
 *   expectedType?: ('string'|'int'|'float'|'picture'|'link'|'boolean'|'json')
 * }>} schemaArray - Array of schema items defining idKey, default value, and expected type.
 *
 * @returns {Object<string, string|number|*>} - Object keyed by schema keys with resolved values.
 */
function getBlockItemData(blockEl, schemaArray = []) {
  if (!blockEl) {
    return {};
  }

  const attributes = Object.fromEntries(
    Array.from(blockEl.attributes, (attr) => [attr.name, attr.value]),
  );

  const data = { attributes };

  schemaArray.forEach((item, idx) => {
    const { idKey, defaultValue = null, expectedType = 'string' } = item;

    const div = blockEl.children[idx];
    if (!div) {
      data[idKey] = defaultValue;
      return;
    }

    let value = defaultValue;

    switch (expectedType) {
      case 'string':
        value = div.textContent?.trim() || defaultValue;
        break;

      case 'int': {
        const intVal = parseInt(div.textContent?.trim(), 10);
        value = Number.isNaN(intVal) ? defaultValue : intVal;
        break;
      }

      case 'float': {
        const floatVal = parseFloat(div.textContent?.trim());
        value = Number.isNaN(floatVal) ? defaultValue : floatVal;
        break;
      }

      case 'link': {
        const anchor = div.querySelector('a');
        value = anchor?.getAttribute('href') || defaultValue;
        break;
      }

      case 'picture': {
        const img = div.querySelector('img');
        value = img?.getAttribute('src') || defaultValue;
        break;
      }

      case 'boolean': {
        const rawValue = div.textContent?.trim();
        // eslint-disable-next-line operator-linebreak
        const boolVal =
          // eslint-disable-next-line no-nested-ternary
          rawValue === 'true' ? true : rawValue === 'false' ? false : null;

        value = boolVal === null ? defaultValue : boolVal;
        break;
      }

      case 'json': {
        try {
          value = JSON.parse(div.textContent?.trim());
        } catch (error) {
          // empty
        }
        break;
      }

      default:
        value = div.textContent?.trim() || defaultValue;
    }

    data[idKey] = value;
  });

  return data;
}

function processBlockItemValueDiv(expectedType, valueDiv, defaultValue) {
  switch (expectedType) {
    case 'string':
      return valueDiv.textContent?.trim() || defaultValue;

    case 'richtext':
      return decodeHtml(valueDiv.innerHTML).trim() || defaultValue;

    case 'int': {
      const intVal = parseInt(valueDiv.textContent?.trim(), 10);
      return Number.isNaN(intVal) ? defaultValue : intVal;
    }

    case 'float': {
      const floatVal = parseFloat(valueDiv.textContent?.trim());
      return Number.isNaN(floatVal) ? defaultValue : floatVal;
    }

    case 'link': {
      const anchor = valueDiv.querySelector('a');
      return anchor?.getAttribute('href') || defaultValue;
    }

    case 'picture': {
      const img = valueDiv.querySelector('img');
      return img?.getAttribute('src') || defaultValue;
    }

    case 'boolean': {
      const rawValue = valueDiv.textContent?.trim();
      // eslint-disable-next-line operator-linebreak
      const boolVal =
        // eslint-disable-next-line no-nested-ternary
        rawValue === 'true' ? true : rawValue === 'false' ? false : null;

      return boolVal === null ? defaultValue : boolVal;
    }

    case 'json': {
      try {
        return JSON.parse(valueDiv.textContent?.trim());
      } catch (error) {
        return defaultValue;
      }
    }

    default:
      return valueDiv.textContent?.trim() || defaultValue;
  }
}

/**
 * Extracts paired key/value data from an item-style Franklin block.
 *
 * Block rules:
 * - blockEl has an odd number of direct child divs
 * - index 0 is a special marker
 * - remaining divs are key/value pairs
 *
 * @param {HTMLElement} blockEl
 *   The root item element.
 *
 * @param {Object<string, {
 *   key: string,
 *   defaultValue?: *,
 *   expectedType?: ('string'|'richtext'|'int'|'float'|'boolean'|'json'|null)
 * }>} schema
 *   Configuration object describing how to read each value.
 *
 * @returns {Object<string, string|number|*>}
 *   Object keyed by schema keys with resolved values.
 */
function getBlockItemDataV2(blockEl, schema = {}) {
  const attributes = Object.fromEntries(
    Array.from(blockEl.attributes, (attr) => [attr.name, attr.value]),
  );

  const result = { attributes };

  if (!blockEl || !blockEl.children?.length) {
    return result;
  }

  const children = [...blockEl.children];

  // Build lookup map from paired divs (skip index 0)
  const pairMap = {};
  for (let i = 1; i < children.length; i += 2) {
    const keyDiv = children[i];
    const valueDiv = children[i + 1];

    if (!keyDiv || !valueDiv) {
      // eslint-disable-next-line no-continue
      continue;
    }

    const keyText = keyDiv.textContent?.trim();
    if (keyText) {
      pairMap[keyText] = valueDiv;
    }
  }

  Object.entries(schema).forEach(([propName, config]) => {
    const { key, expectedType = null, defaultValue = null } = config || {};

    const valueDiv = pairMap[key];

    if (!valueDiv) {
      result[propName] = defaultValue;
      return;
    }

    result[propName] = processBlockItemValueDiv(
      expectedType,
      valueDiv,
      defaultValue,
    );
  });

  return result;
}

/* =====================================================
   AUE META EXTRACTION
===================================================== */

export function extractAueAttributes(node) {
  const attrs = {};
  if (!node || !node.attributes) return attrs;

  Array.from(node.attributes).forEach(attr => {
    if (attr.name.startsWith('data-aue-')) {
      attrs[attr.name] = attr.value;
    }
  });

  return attrs;
}

/* =====================================================
   HR GROUP PAIRING
===================================================== */

function pairGroup(nodes, allowedKeys, context) {
  const obj = {};
  let i = 0;

  const isKnownKeyNode = node => {
    const value = extractValue(node, context);
    return (
      allowedKeys &&
      typeof value === 'string' &&
      allowedKeys.includes(value)
    );
  };

  while (i < nodes.length) {
    const keyNode = nodes[i];
    const key = extractValue(keyNode, context);

    if (!key) {
      i++;
      continue;
    }

    i++;

    // Collect ALL nodes until next known key
    const valueParts = [];

    while (i < nodes.length && !isKnownKeyNode(nodes[i])) {
      valueParts.push(nodes[i]);
      i++;
    }

    if (!valueParts.length) {
      obj[key] = '';
      continue;
    }

    // If only one simple node → use normal extraction
    if (valueParts.length === 1) {
      obj[key] = extractValue(valueParts[0], context);
      continue;
    }

    // Multiple nodes → treat as rich HTML block
    obj[key] = valueParts
      .map(node => node.outerHTML)
      .join('')
      .trim();
  }

  return obj;
}

function parseHrContainer(container, allowedKeys, context) {
  const items = [];
  let group = [];

  Array.from(container.children).forEach(el => {
    if (el.tagName === 'HR') {
      if (group.length) {
        items.push(pairGroup(group, allowedKeys, context));
        group = [];
      }
      return;
    }

    // PUSH EVERYTHING except HR
    group.push(el);
  });

  if (group.length) {
    items.push(pairGroup(group, allowedKeys, context));
  }

  return items;
}

/* =====================================================
   VALUE EXTRACTION
===================================================== */

export function extractValue(node, context = {}) {
  if (!node) return '';

  const { schema } = context;

  /* HR container */
  if (
    schema &&
    Array.isArray(schema) &&
    node.querySelector &&
    node.querySelector(':scope > hr')
  ) {
    return parseHrContainer(node, schema, context);
  }

  /* List as sole child */
  if (
    node.children.length === 1 &&
    (node.firstElementChild.tagName === 'UL' ||
      node.firstElementChild.tagName === 'OL')
  ) {
    return Array.from(
      node.firstElementChild.querySelectorAll('li')
    ).map(li => li.textContent.trim());
  }

  /* Single <p> wrapper */
  if (
    node.children.length === 1 &&
    node.firstElementChild.tagName === 'P'
  ) {
    const p = node.firstElementChild;
    const links = p.querySelectorAll('a[href]');
  
    // pure link → return href
    if (
      links.length === 1 &&
      p.textContent.trim() === links[0].textContent.trim()
    ) {
      return links[0].getAttribute('href');
    }
  
    // richtext if formatting tags exist
    if (p.children.length > 0) {
      return p.innerHTML.trim();
    }
  
    // plain text
    return p.textContent.trim();
  }

  /* Button container */
  const buttonP = node.querySelector('p.button-container');
  if (buttonP) {
    const a = buttonP.querySelector('a[href]');
    if (a) return a.getAttribute('href');
  }

  /* Direct link */
  const directLinks = node.querySelectorAll(':scope > a[href]');
  if (directLinks.length === 1) {
    const a = directLinks[0];
    if (node.textContent.trim() === a.textContent.trim()) {
      return a.getAttribute('href');
    }
  }

  /* Picture */
  const picture = node.querySelector(':scope > picture');
  if (picture) {
    const img = picture.querySelector('img');
    if (img) {
      return {
        src: img.getAttribute('src'),
        alt: img.getAttribute('alt') || '',
        width: img.getAttribute('width'),
        height: img.getAttribute('height'),
      };
    }
  }

  /* Direct img */
  const img = node.querySelector(':scope > img');
  if (img) {
    return {
      src: img.getAttribute('src'),
      alt: img.getAttribute('alt') || '',
      width: img.getAttribute('width'),
      height: img.getAttribute('height'),
    };
  }

  /* Mixed rich HTML */
  if (node.children.length > 0) {
    return node.innerHTML.trim();
  }

  return node.textContent.trim();
}

/* =====================================================
   FIELD PARSER
===================================================== */

function parseField(fieldNode, config) {
  const cells = Array.from(fieldNode.children);
  if (cells.length < 2) return null;

  const fieldKey = extractValue(cells[0], config);
  const fieldSchema = config.schemas?.[fieldKey] || null;

  const context = {
    schema: fieldSchema,
    schemas: config.schemas
  };

  const values = cells.map(cell => extractValue(cell, context));

  const typeIndex = values.indexOf('type');
  if (typeIndex !== -1 && values[typeIndex + 1]) {
    const item = {
      type: values[typeIndex + 1]
    };

    const meta = extractAueAttributes(fieldNode);
    if (Object.keys(meta).length) {
      item._meta = meta;
    }

    let i = typeIndex + 2;

    while (i < cells.length) {
      const key = extractValue(cells[i], config);
      const valueNode = cells[i + 1];

      if (typeof key === 'string' && key !== '') {
        const nestedSchema = config.schemas?.[key] || null;

        const value = extractValue(valueNode, {
          schema: nestedSchema,
          schemas: config.schemas
        });

        item[key] = value ?? '';
        i += 2;
      } else {
        i++;
      }
    }

    return { __item: item };
  }

  /* SCALAR OR GROUP FIELD */
  if (typeof fieldKey === 'string' && fieldKey !== '') {
    const value = values[1] ?? '';
    return { [fieldKey]: value };
  }

  return null;
}

/* =====================================================
   BLOCK → MAP
===================================================== */

function blockToMap(block, config = {}) {
  const result = {};
  const items = [];

  const blockMeta = extractAueAttributes(block);
  if (Object.keys(blockMeta).length) {
    result._meta = blockMeta;
  }

  Array.from(block.children).forEach(field => {
    const parsed = parseField(field, config);
    if (!parsed) return;

    if (parsed.__item) {
      items.push(parsed.__item);
      return;
    }

    const key = Object.keys(parsed)[0];
    result[key] = parsed[key];
  });

  if (items.length) {
    result.items = items;
  }

  return result;
}



function updateQueryParams(encodedUrl, paramMap) {
  if (!encodedUrl || typeof paramMap !== 'object') return encodedUrl;

  const txt = document.createElement('textarea');
  txt.innerHTML = encodedUrl;
  const url = txt.value;

  const [base, query] = url.split('?');
  const params = new URLSearchParams(query || '');

  for (const [key, value] of Object.entries(paramMap)) {
    params.set(key, value);
  }

  return `${base}?${params.toString()}`;
}

export {
  getBlockData,
  getBlockItemData,
  getBlockItemDataV2,
  getBlockExistingPropsCnt,
  blockToMap,
  updateQueryParams,
};
import { jsx as r, jsxs as f } from "react/jsx-runtime";
import * as z from "react";
const X = ({
  text: n = "Button",
  href: c = void 0,
  variant: N = "light",
  // light, dark, light-outlined, dark-outlined, light-no-outline, dark-no-outline, secondary
  size: b = "btn-md",
  // btn-sm , btn-md
  className: p = "",
  disabled: v = !1,
  onClick: w = void 0,
  attributes: x = {},
  ...L
}) => {
  const $ = (i) => {
    switch (i) {
      case "light":
        return "btn-light";
      case "dark":
        return "btn-dark";
      case "light-outlined":
        return "btn-light-outlined";
      case "dark-outlined":
        return "btn-dark-outlined";
      case "light-no-outline":
        return "btn-light-no-outline";
      case "dark-no-outline":
        return "btn-dark-no-outline";
      case "secondary":
        return "btn-primary";
      default:
        return "btn-light";
    }
  }, u = (i) => {
    switch (i) {
      case "btn-sm":
        return "btn-sm";
      case "btn-md":
        return "btn-md";
      default:
        return "btn-md";
    }
  }, y = `btn ${$(N)} ${u(b)} ${p}`.trim();
  return c ? /* @__PURE__ */ r(
    "a",
    {
      href: c,
      className: y,
      onClick: w,
      ...L,
      ...x ?? {},
      children: n
    }
  ) : /* @__PURE__ */ r(
    "button",
    {
      type: L.type || "button",
      className: y,
      disabled: v,
      onClick: w,
      ...L,
      ...x ?? {},
      children: n
    }
  );
};
function J({
  title: n,
  titleId: c,
  ...N
}, b) {
  return /* @__PURE__ */ z.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: b,
    "aria-labelledby": c
  }, N), n ? /* @__PURE__ */ z.createElement("title", {
    id: c
  }, n) : null, /* @__PURE__ */ z.createElement("path", {
    fillRule: "evenodd",
    d: "M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z",
    clipRule: "evenodd"
  }));
}
const Q = /* @__PURE__ */ z.forwardRef(J), Y = "w-full flex items-center gap-10 text-base focus:outline-none focus:ring-1 focus:ring-grey-500 rounded-10 bg-grey-200 border border-grey-200 p-atom-text-inputs-padding-y text-grey-500", K = "block mb-2 text-sm text-grey-950 font-medium", ee = "relative top-[2px] text-body-small text-grey-950", te = 5 * 1024 * 1024, F = ({
  type: n = "text",
  label: c,
  additionalClasses: N = "",
  validation: b = null,
  errorMessage: p = "",
  value: v,
  onChange: w,
  onClick: x,
  options: L = [],
  validationRegex: S,
  onBlur: $,
  disabled: u = !1,
  id: y = "",
  ...i
}) => {
  const R = (e) => (e == null ? void 0 : e.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "")) || "field", E = (e, s) => {
    if (y)
      return y;
    const a = s.name || `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    return `${e}-${R(a)}`;
  }, C = y ? `form-group-${y}` : E(`form-group-${R(c)}`, i), Z = v !== void 0 ? v : "", P = (e) => ({
    email: {
      pattern: "^(?!\\s*$)(?!.*<[^>]+>)[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.\\-]+\\.[a-zA-Z]{2,}$",
      title: "Please enter a valid email address."
    },
    phoneNo: {
      pattern: /^(?:(?:\+44[\s.\-]?)?(?:\(\+44\)[\s.\-]?)?(?:\+44[\s.\-]?\(0\)[\s.\-]?)?)?(?:\(0[1-37]\d{0,4}\)[\s.\-]?|0[1-37][\s.\-]?|[1-37])?(?:\d[\s.\-]?){4,10}\d$/,
      title: "Please enter a valid UK phone number."
    },
    postcode: {
      pattern: /^(?!\s*$)(?!.*<[^>]+>)(GIR ?0AA|[A-Z]{1,2}[0-9][0-9A-Z]? ?[0-9][A-Z]{2})$/i,
      title: "Please enter a valid UK postcode."
    },
    alphabetic: {
      pattern: "^(?!\\s*$)(?!.*<[^>]+>)[A-Za-z\\s\\p{P}\\p{S}]{2,}$",
      title: "Letters, spaces, and symbols are allowed — numbers are not allowed."
    },
    alphanumeric: {
      pattern: /^(?!\s*$)(?=.*[A-Za-z0-9]).{2,}$/s,
      title: "Must be at least 2 characters and include at least one letter or number; symbols and spaces are allowed."
    },
    alphanumeric_atleast1char: {
      pattern: /^(?!\s*$)(?=.*[A-Za-z0-9]).{1,}$/s,
      title: "Must be at least 1 character and include at least one letter or number; symbols and spaces are allowed."
    },
    number: {
      pattern: "^(?!\\s*$)(?!.*<[^>]+>)[0-9 ]+$",
      title: "Numbers and spaces only — no letters or symbols."
    },
    decimal: {
      pattern: "^(?!\\s*$)(?!.*<[^>]+>)[0-9]+(\\.[0-9]{1,2})?$",
      title: "Numbers with up to 2 decimal places — no letters, spaces, or symbols."
    }
  })[e] || {
    pattern: "^(?!\\s*$)(?!.*<[^>]+>).+$",
    title: "Invalid validation type."
  }, V = () => {
    let e = Y;
    return b === "invalid" && (e = `${e} ring-1 ring-red-500 focus:ring-red-500`), u && (e = `${e} cursor-not-allowed opacity-50`), `${e} ${N}`;
  }, _ = () => {
    let e = K;
    return u && (e = `${e} opacity-50 cursor-not-allowed`), e;
  }, D = () => {
    let e = ee;
    return u && (e = `${e} opacity-50 cursor-not-allowed`), e;
  }, k = (e, s) => {
    var l, d, h, t, m, o;
    const a = document.querySelector(`#${C} .validation-invalid-message`);
    console.log(s), s ? (a && (a.style.display = "none"), (l = e.classList) == null || l.remove("ring-1"), (d = e.classList) == null || d.remove("ring-red-500"), (h = e.classList) == null || h.remove("focus:ring-red-500")) : (a && (a.style.display = "block"), (t = e.classList) == null || t.add("ring-1"), (m = e.classList) == null || m.add("ring-red-500"), (o = e.classList) == null || o.add("focus:ring-red-500"));
  }, U = (e) => {
    const { pattern: s, title: a } = P(S), l = new RegExp(s), d = e.value.trim(), h = e.required && d === "", t = d !== "" && !l.test(d);
    return h || t ? (k(e, !1), !1) : l.test(d) || !e.required && !e.value ? (k(e, !0), !0) : (k(e, !1), !1);
  }, q = (e) => {
    w && w(e), S && e.target && U(e.target);
  }, T = (e) => {
    const s = e.target.value.trim(), a = e.target.required && s === "";
    if (e.target.setAttribute("inputLabel", e.target.placeholder), a)
      e.target.setCustomValidity(p), k(e.target, !1);
    else if (e.target.required && !a && !S)
      e.target.setCustomValidity(""), k(e.target, !0);
    else if (S) {
      const { pattern: l, title: d } = P(S), h = new RegExp(l);
      s !== "" && !h.test(s) ? e.target.setCustomValidity(d) : e.target.setCustomValidity("");
    }
    $ == null || $(e);
  }, O = (e, s) => {
    const a = document.querySelector(`span#${s}`), l = e.target.files[0];
    l ? l.size > te ? (alert("File size must not exceed 5MB."), e.target.value = "", a.textContent = "") : a.textContent = l.name : a.textContent = "";
  }, B = (e) => {
    const s = e.target.type === "radio", a = e.target.parentElement.querySelector("div"), l = a == null ? void 0 : a.querySelector("svg");
    if (s) {
      const d = a == null ? void 0 : a.querySelector(".radio-dot");
      e.target.checked ? (d && d.classList.add("opacity-100"), document.querySelectorAll(`input[type="radio"][name="${e.target.name}"]`).forEach((h) => {
        var m;
        if (h === e.target) return;
        const t = h.parentElement.querySelector("div");
        t == null || t.classList.remove("bg-grey-500", "border-grey-500"), t == null || t.classList.add("bg-grey-200", "border-grey-200"), (m = t == null ? void 0 : t.querySelector(".radio-dot")) == null || m.classList.remove("opacity-100");
      })) : d && d.classList.remove("opacity-100");
    }
    e.target.checked ? (a.classList.add("bg-grey-500", "border-grey-500"), a.classList.remove("bg-grey-200", "border-grey-200"), l && l.classList.add("opacity-100")) : (a.classList.remove("bg-grey-500", "border-grey-500"), a.classList.add("bg-grey-200", "border-grey-200"), l && l.classList.remove("opacity-100")), w && w(e), x && x(e);
  }, M = () => {
    const e = y || E("select", i), s = y ? `dropdown-${y}` : E("dropdown", i), a = () => {
      if (v) {
        const t = L.find((m) => (m.value || m) === v);
        return (t == null ? void 0 : t.label) || "";
      }
      return "Please select";
    }, l = (t, m) => {
      const o = document.getElementById(s), g = document.querySelector(`.${s}-arrow`);
      document.querySelectorAll('[id^="dropdown-"]').forEach((I) => {
        I.id !== s && (I.style.display = "none");
      }), o.style.display === "block" ? (o.style.display = "none", g == null || g.classList.remove("rotate-180")) : (o.style.display = "block", g == null || g.classList.add("rotate-180"));
    }, d = (t, m) => {
      var I, j;
      const o = document.getElementById(e);
      o && (o.value = t, o.dispatchEvent(new Event("change", { bubbles: !0 })), o.dispatchEvent(new Event("blur", { bubbles: !0 })));
      const g = (j = (I = document.querySelector(`#${e}`)) == null ? void 0 : I.parentElement) == null ? void 0 : j.querySelector("span");
      g && (g.textContent = m, g.className = "text-grey-700");
      const A = {
        target: {
          value: t,
          name: i.name,
          tagName: "SELECT"
        }
      };
      q(A), $ == null || $(A), x == null || x(A), l(document.querySelector(`#input-${s}`));
    }, h = a() !== "Please select";
    return /* @__PURE__ */ f("div", { className: "relative", id: C, children: [
      /* @__PURE__ */ f(
        "select",
        {
          id: e,
          className: "sr-only",
          defaultValue: v || "",
          name: c,
          onChange: q,
          ...i,
          children: [
            /* @__PURE__ */ r("option", { value: "" }),
            L.map((t, m) => {
              const o = typeof t == "string" ? t : t.value ?? t, g = typeof t == "string" ? t : t.label || o;
              return /* @__PURE__ */ r(
                "option",
                {
                  value: o,
                  ...typeof t == "object" ? t.attributes ?? {} : {},
                  children: g
                },
                m
              );
            })
          ]
        }
      ),
      /* @__PURE__ */ r("label", { htmlFor: e, className: _(), children: c }),
      /* @__PURE__ */ r("div", { className: "relative", children: /* @__PURE__ */ f(
        "div",
        {
          id: `input-${s}`,
          className: `
              ${V()}  flex items-center justify-between
              ${u ? "cursor-not-allowed" : "cursor-pointer"}
            `,
          onClick: (t) => !u && l(t.target),
          children: [
            /* @__PURE__ */ r(
              "span",
              {
                id: `${e}-value`,
                className: `${h ? "text-grey-700" : "text-grey-500"}`,
                children: h ? a() : "Please select"
              }
            ),
            /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(
              "svg",
              {
                className: `${s}-arrow w-[18px] h-[18px] text-grey-500 transition-transform`,
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ r(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M19 9l-7 7-7-7"
                  }
                )
              }
            ) })
          ]
        }
      ) }),
      /* @__PURE__ */ r(
        "div",
        {
          id: s,
          className: "absolute z-20 w-full mt-1 bg-grey-50 border border-grey-500 rounded-[8px] shadow-lg max-h-200 overflow-auto",
          style: { display: "none" },
          children: L.map((t, m) => {
            const o = typeof t == "string" ? t : t.value ?? t, g = typeof t == "string" ? t : t.label || o;
            return /* @__PURE__ */ r(
              "div",
              {
                className: "px-10 py-[7px] text-grey-950 cursor-pointer hover:bg-grey-950/5 hover:text-grey-700 transition-colors first:rounded-t-[8px] last:rounded-b-[8px]",
                onClick: () => d(o, g),
                children: g
              },
              m
            );
          })
        }
      ),
      p && /* @__PURE__ */ r(
        "div",
        {
          className: `mt-1 text-red-500 text-sm validation-invalid-message ${b === "invalid" ? "block" : "hidden"}`,
          children: p
        }
      )
    ] });
  }, G = () => {
    const e = y || E("file", i), s = `${e}-text`;
    return /* @__PURE__ */ f("div", { id: C, children: [
      /* @__PURE__ */ r("label", { htmlFor: e, className: _(), children: c }),
      /* @__PURE__ */ f("div", { className: "flex-col md:flex-row flex md:items-center space-y-2 md:space-y-0 md:space-x-4", children: [
        /* @__PURE__ */ f("label", { className: `btn  px-16 py-8 
            ${b === "invalid" ? "bg-red-600" : "bg-grey-500"}
            ${u ? "cursor-not-allowed bg-grey-200! text-white!" : "btn-dark"}
          `, children: [
          /* @__PURE__ */ r(
            "input",
            {
              id: e,
              type: "file",
              className: "hidden",
              onChange: (a) => O(a, s),
              ...u ? { disabled: !0 } : {}
            }
          ),
          "UPLOAD FILE"
        ] }),
        /* @__PURE__ */ r(
          "span",
          {
            id: s,
            className: `truncate max-w-[150px] ${u ? "text-grey-950/20" : "text-grey-950"}`,
            children: "No file chosen"
          }
        )
      ] }),
      b === "invalid" && p && /* @__PURE__ */ r("div", { className: "mt-1 text-red-500 text-sm validation-invalid-message", children: p })
    ] });
  }, H = () => {
    const e = n === "radio", s = y || E(e ? "radio" : "checkbox", i);
    return /* @__PURE__ */ f("div", { ...i.containerId ? { id: i.containerId } : {}, children: [
      /* @__PURE__ */ f("div", { className: "flex items-start space-x-3", children: [
        /* @__PURE__ */ f("div", { className: "relative", children: [
          /* @__PURE__ */ r(
            "input",
            {
              type: e ? "radio" : "checkbox",
              id: s,
              className: "sr-only",
              placeholder: c,
              defaultChecked: v,
              onChange: B,
              ...u ? { disabled: !0 } : {},
              ...i
            }
          ),
          /* @__PURE__ */ f(
            "div",
            {
              className: `mt-1 w-5 h-5 flex items-center justify-center transition-all focus:ring-1 focus:ring-grey-950 rounded-4 border border-grey-200 bg-grey-200 
              ${e ? "rounded-full" : "rounded-4"}
              ${u ? "cursor-not-allowed opacity-40" : "cursor-pointer opacity-100"} ${N}`,
              onClick: () => {
                if (u) return;
                const a = document.querySelector(`label[for="${s}"]`);
                a == null || a.click();
              },
              children: [
                !e && /* @__PURE__ */ r(Q, { name: "check", className: `w-[15px] h-[15px] text-white transition-opacity ${v ? "opacity-100" : "opacity-0"}` }),
                e && /* @__PURE__ */ r(
                  "div",
                  {
                    className: "w-2.5 h-2.5 rounded-full bg-white opacity-0 radio-dot"
                  }
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ r(
          "label",
          {
            htmlFor: s,
            className: D(),
            dangerouslySetInnerHTML: { __html: c }
          }
        )
      ] }),
      p && /* @__PURE__ */ r(
        "div",
        {
          id: "error",
          className: `mt-1 text-grey-700 text-sm ml-8 ${b === "invalid" ? "block" : "hidden"}`,
          children: p
        }
      )
    ] });
  }, W = () => {
    const e = y || E(n === "textarea" ? "textarea" : "input", i), s = n === "textarea", a = V(), l = s ? `${a} resize-none items-start` : a;
    return /* @__PURE__ */ f("div", { id: C, children: [
      /* @__PURE__ */ r("label", { htmlFor: e, className: _(), children: c }),
      s ? /* @__PURE__ */ r(
        "textarea",
        {
          id: e,
          rows: 3,
          className: l,
          style: { minHeight: "100px" },
          placeholder: c,
          defaultValue: Z,
          onChange: q,
          onBlur: T,
          ...u ? { disabled: !0 } : {},
          ...i
        }
      ) : /* @__PURE__ */ r(
        "input",
        {
          id: e,
          type: n,
          className: a,
          placeholder: c,
          defaultValue: Z,
          onChange: q,
          onBlur: T,
          ...u ? { disabled: !0 } : {},
          ...i
        }
      ),
      p && /* @__PURE__ */ r(
        "div",
        {
          className: `mt-1 text-red-500 text-sm validation-invalid-message ${b === "invalid" ? "block" : "hidden"}`,
          children: p
        }
      )
    ] });
  };
  return n === "select" ? M() : n === "file" ? G() : n === "checkbox" || n === "radio" ? H() : W();
}, re = ({ fieldKey: n = 1 }) => /* @__PURE__ */ f("form", { className: "flex flex-col gap-y-form-spacing-y", children: [
  /* @__PURE__ */ r(
    F,
    {
      type: "text",
      label: "Label",
      name: "singleLabel",
      id: `form-contact-us-${n}-single-label`
    }
  ),
  /* @__PURE__ */ f("div", { className: "grid grid-cols-1 xl:grid-cols-2 gap-y-form-spacing-y xl:gap-section-spacing-x", children: [
    /* @__PURE__ */ r(
      F,
      {
        type: "text",
        label: "Label",
        name: "label1",
        id: `form-contact-us-${n}-label1`
      }
    ),
    /* @__PURE__ */ r(
      F,
      {
        type: "text",
        label: "Label",
        name: "label2",
        id: `form-contact-us-${n}-label2`
      }
    )
  ] }),
  /* @__PURE__ */ r("div", { className: "space-y-10", children: [1, 2, 3, 4, 5].map((c) => /* @__PURE__ */ r(
    F,
    {
      type: "checkbox",
      label: "Checkbox",
      name: `checkbox-${c}`,
      id: `form-contact-us-${n}-checkbox-${c}`
    },
    c
  )) }),
  /* @__PURE__ */ r(
    F,
    {
      type: "textarea",
      label: "Label",
      name: "textarea",
      id: `form-contact-us-${n}-textarea`,
      rows: 4
    }
  ),
  /* @__PURE__ */ r("div", { className: "text-right", children: /* @__PURE__ */ r(X, { text: "Submit", variant: "dark", size: "btn-md", className: "mx-auto! w-fit" }) })
] });
export {
  re as default
};

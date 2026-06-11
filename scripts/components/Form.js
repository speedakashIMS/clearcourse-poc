import { jsx as e, jsxs as S } from "react/jsx-runtime";
import * as x from "react";
import { lazy as ie, Suspense as oe, useState as O, useRef as W, useEffect as U, useCallback as J, forwardRef as ce } from "react";
import de from "lottie-react";
const te = ({
  text: r = "Button",
  href: a = void 0,
  variant: n = "light",
  // light, dark, light-outlined, dark-outlined, light-no-outline, dark-no-outline, secondary
  size: i = "btn-md",
  // btn-sm , btn-md
  className: l = "",
  disabled: c = !1,
  onClick: h = void 0,
  attributes: m = {},
  ...v
}) => {
  const d = (b) => {
    switch (b) {
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
  }, y = (b) => {
    switch (b) {
      case "btn-sm":
        return "btn-sm";
      case "btn-md":
        return "btn-md";
      default:
        return "btn-md";
    }
  }, w = `btn ${d(n)} ${y(i)} ${l}`.trim();
  return a ? /* @__PURE__ */ e(
    "a",
    {
      href: a,
      className: w,
      onClick: h,
      ...v,
      ...m ?? {},
      children: r
    }
  ) : /* @__PURE__ */ e(
    "button",
    {
      type: v.type || "button",
      className: w,
      disabled: c,
      onClick: h,
      ...v,
      ...m ?? {},
      children: r
    }
  );
};
function ue({
  title: r,
  titleId: a,
  ...n
}, i) {
  return /* @__PURE__ */ x.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: i,
    "aria-labelledby": a
  }, n), r ? /* @__PURE__ */ x.createElement("title", {
    id: a
  }, r) : null, /* @__PURE__ */ x.createElement("path", {
    fillRule: "evenodd",
    d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z",
    clipRule: "evenodd"
  }));
}
const me = /* @__PURE__ */ x.forwardRef(ue);
function fe({
  title: r,
  titleId: a,
  ...n
}, i) {
  return /* @__PURE__ */ x.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: i,
    "aria-labelledby": a
  }, n), r ? /* @__PURE__ */ x.createElement("title", {
    id: a
  }, r) : null, /* @__PURE__ */ x.createElement("path", {
    fillRule: "evenodd",
    d: "M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z",
    clipRule: "evenodd"
  }));
}
const he = /* @__PURE__ */ x.forwardRef(fe);
function ge({
  title: r,
  titleId: a,
  ...n
}, i) {
  return /* @__PURE__ */ x.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: i,
    "aria-labelledby": a
  }, n), r ? /* @__PURE__ */ x.createElement("title", {
    id: a
  }, r) : null, /* @__PURE__ */ x.createElement("path", {
    fillRule: "evenodd",
    d: "M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z",
    clipRule: "evenodd"
  }));
}
const X = /* @__PURE__ */ x.forwardRef(ge), pe = "w-full flex items-center gap-10 text-base focus:outline-none focus:ring-1 focus:ring-grey-500 rounded-10 bg-grey-200 border border-grey-200 p-atom-text-inputs-padding-y text-grey-500", ye = "block mb-2 text-sm text-grey-950 font-medium", be = "relative top-[2px] text-body-small text-grey-950", ve = 5 * 1024 * 1024, xe = ({
  type: r = "text",
  label: a,
  additionalClasses: n = "",
  validation: i = null,
  errorMessage: l = "",
  value: c,
  onChange: h,
  onClick: m,
  options: v = [],
  validationRegex: g,
  onBlur: d,
  disabled: y = !1,
  id: w = "",
  ...b
}) => {
  const C = (t) => (t == null ? void 0 : t.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "")) || "field", $ = (t, u) => {
    if (w)
      return w;
    const o = u.name || `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    return `${t}-${C(o)}`;
  }, F = w ? `form-group-${w}` : $(`form-group-${C(a)}`, b), P = c !== void 0 ? c : "", _ = (t) => ({
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
  })[t] || {
    pattern: "^(?!\\s*$)(?!.*<[^>]+>).+$",
    title: "Invalid validation type."
  }, z = () => {
    let t = pe;
    return i === "invalid" && (t = `${t} ring-1 ring-red-500 focus:ring-red-500`), y && (t = `${t} cursor-not-allowed opacity-50`), `${t} ${n}`;
  }, E = () => {
    let t = ye;
    return y && (t = `${t} opacity-50 cursor-not-allowed`), t;
  }, f = () => {
    let t = be;
    return y && (t = `${t} opacity-50 cursor-not-allowed`), t;
  }, p = (t, u) => {
    var L, R, T, s, M, I;
    const o = document.querySelector(`#${F} .validation-invalid-message`);
    console.log(u), u ? (o && (o.style.display = "none"), (L = t.classList) == null || L.remove("ring-1"), (R = t.classList) == null || R.remove("ring-red-500"), (T = t.classList) == null || T.remove("focus:ring-red-500")) : (o && (o.style.display = "block"), (s = t.classList) == null || s.add("ring-1"), (M = t.classList) == null || M.add("ring-red-500"), (I = t.classList) == null || I.add("focus:ring-red-500"));
  }, k = (t) => {
    const { pattern: u, title: o } = _(g), L = new RegExp(u), R = t.value.trim(), T = t.required && R === "", s = R !== "" && !L.test(R);
    return T || s ? (p(t, !1), !1) : L.test(R) || !t.required && !t.value ? (p(t, !0), !0) : (p(t, !1), !1);
  }, N = (t) => {
    h && h(t), g && t.target && k(t.target);
  }, A = (t) => {
    const u = t.target.value.trim(), o = t.target.required && u === "";
    if (t.target.setAttribute("inputLabel", t.target.placeholder), o)
      t.target.setCustomValidity(l), p(t.target, !1);
    else if (t.target.required && !o && !g)
      t.target.setCustomValidity(""), p(t.target, !0);
    else if (g) {
      const { pattern: L, title: R } = _(g), T = new RegExp(L);
      u !== "" && !T.test(u) ? t.target.setCustomValidity(R) : t.target.setCustomValidity("");
    }
    d == null || d(t);
  }, q = (t, u) => {
    const o = document.querySelector(`span#${u}`), L = t.target.files[0];
    L ? L.size > ve ? (alert("File size must not exceed 5MB."), t.target.value = "", o.textContent = "") : o.textContent = L.name : o.textContent = "";
  }, B = (t) => {
    const u = t.target.type === "radio", o = t.target.parentElement.querySelector("div"), L = o == null ? void 0 : o.querySelector("svg");
    if (u) {
      const R = o == null ? void 0 : o.querySelector(".radio-dot");
      t.target.checked ? (R && R.classList.add("opacity-100"), document.querySelectorAll(`input[type="radio"][name="${t.target.name}"]`).forEach((T) => {
        var M;
        if (T === t.target) return;
        const s = T.parentElement.querySelector("div");
        s == null || s.classList.remove("bg-grey-500", "border-grey-500"), s == null || s.classList.add("bg-grey-200", "border-grey-200"), (M = s == null ? void 0 : s.querySelector(".radio-dot")) == null || M.classList.remove("opacity-100");
      })) : R && R.classList.remove("opacity-100");
    }
    t.target.checked ? (o.classList.add("bg-grey-500", "border-grey-500"), o.classList.remove("bg-grey-200", "border-grey-200"), L && L.classList.add("opacity-100")) : (o.classList.remove("bg-grey-500", "border-grey-500"), o.classList.add("bg-grey-200", "border-grey-200"), L && L.classList.remove("opacity-100")), h && h(t), m && m(t);
  }, V = () => {
    const t = w || $("select", b), u = w ? `dropdown-${w}` : $("dropdown", b), o = () => {
      if (c) {
        const s = v.find((M) => (M.value || M) === c);
        return (s == null ? void 0 : s.label) || "";
      }
      return "Please select";
    }, L = (s, M) => {
      const I = document.getElementById(u), j = document.querySelector(`.${u}-arrow`);
      document.querySelectorAll('[id^="dropdown-"]').forEach((D) => {
        D.id !== u && (D.style.display = "none");
      }), I.style.display === "block" ? (I.style.display = "none", j == null || j.classList.remove("rotate-180")) : (I.style.display = "block", j == null || j.classList.add("rotate-180"));
    }, R = (s, M) => {
      var D, Y;
      const I = document.getElementById(t);
      I && (I.value = s, I.dispatchEvent(new Event("change", { bubbles: !0 })), I.dispatchEvent(new Event("blur", { bubbles: !0 })));
      const j = (Y = (D = document.querySelector(`#${t}`)) == null ? void 0 : D.parentElement) == null ? void 0 : Y.querySelector("span");
      j && (j.textContent = M, j.className = "text-grey-700");
      const Z = {
        target: {
          value: s,
          name: b.name,
          tagName: "SELECT"
        }
      };
      N(Z), d == null || d(Z), m == null || m(Z), L(document.querySelector(`#input-${u}`));
    }, T = o() !== "Please select";
    return /* @__PURE__ */ S("div", { className: "relative", id: F, children: [
      /* @__PURE__ */ S(
        "select",
        {
          id: t,
          className: "sr-only",
          defaultValue: c || "",
          name: a,
          onChange: N,
          ...b,
          children: [
            /* @__PURE__ */ e("option", { value: "" }),
            v.map((s, M) => {
              const I = typeof s == "string" ? s : s.value ?? s, j = typeof s == "string" ? s : s.label || I;
              return /* @__PURE__ */ e(
                "option",
                {
                  value: I,
                  ...typeof s == "object" ? s.attributes ?? {} : {},
                  children: j
                },
                M
              );
            })
          ]
        }
      ),
      /* @__PURE__ */ e("label", { htmlFor: t, className: E(), children: a }),
      /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ S(
        "div",
        {
          id: `input-${u}`,
          className: `
              ${z()}  flex items-center justify-between
              ${y ? "cursor-not-allowed" : "cursor-pointer"}
            `,
          onClick: (s) => !y && L(s.target),
          children: [
            /* @__PURE__ */ e(
              "span",
              {
                id: `${t}-value`,
                className: `${T ? "text-grey-700" : "text-grey-500"}`,
                children: T ? o() : "Please select"
              }
            ),
            /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
              "svg",
              {
                className: `${u}-arrow w-[18px] h-[18px] text-grey-500 transition-transform`,
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ e(
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
      /* @__PURE__ */ e(
        "div",
        {
          id: u,
          className: "absolute z-20 w-full mt-1 bg-grey-50 border border-grey-500 rounded-[8px] shadow-lg max-h-200 overflow-auto",
          style: { display: "none" },
          children: v.map((s, M) => {
            const I = typeof s == "string" ? s : s.value ?? s, j = typeof s == "string" ? s : s.label || I;
            return /* @__PURE__ */ e(
              "div",
              {
                className: "px-10 py-[7px] text-grey-950 cursor-pointer hover:bg-grey-950/5 hover:text-grey-700 transition-colors first:rounded-t-[8px] last:rounded-b-[8px]",
                onClick: () => R(I, j),
                children: j
              },
              M
            );
          })
        }
      ),
      l && /* @__PURE__ */ e(
        "div",
        {
          className: `mt-1 text-red-500 text-sm validation-invalid-message ${i === "invalid" ? "block" : "hidden"}`,
          children: l
        }
      )
    ] });
  }, le = () => {
    const t = w || $("file", b), u = `${t}-text`;
    return /* @__PURE__ */ S("div", { id: F, children: [
      /* @__PURE__ */ e("label", { htmlFor: t, className: E(), children: a }),
      /* @__PURE__ */ S("div", { className: "flex-col md:flex-row flex md:items-center space-y-2 md:space-y-0 md:space-x-4", children: [
        /* @__PURE__ */ S("label", { className: `btn  px-16 py-8 
            ${i === "invalid" ? "bg-red-600" : "bg-grey-500"}
            ${y ? "cursor-not-allowed bg-grey-200! text-white!" : "btn-dark"}
          `, children: [
          /* @__PURE__ */ e(
            "input",
            {
              id: t,
              type: "file",
              className: "hidden",
              onChange: (o) => q(o, u),
              ...y ? { disabled: !0 } : {}
            }
          ),
          "UPLOAD FILE"
        ] }),
        /* @__PURE__ */ e(
          "span",
          {
            id: u,
            className: `truncate max-w-[150px] ${y ? "text-grey-950/20" : "text-grey-950"}`,
            children: "No file chosen"
          }
        )
      ] }),
      i === "invalid" && l && /* @__PURE__ */ e("div", { className: "mt-1 text-red-500 text-sm validation-invalid-message", children: l })
    ] });
  }, ne = () => {
    const t = r === "radio", u = w || $(t ? "radio" : "checkbox", b);
    return /* @__PURE__ */ S("div", { ...b.containerId ? { id: b.containerId } : {}, children: [
      /* @__PURE__ */ S("div", { className: "flex items-start space-x-3", children: [
        /* @__PURE__ */ S("div", { className: "relative", children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: t ? "radio" : "checkbox",
              id: u,
              className: "sr-only",
              placeholder: a,
              defaultChecked: c,
              onChange: B,
              ...y ? { disabled: !0 } : {},
              ...b
            }
          ),
          /* @__PURE__ */ S(
            "div",
            {
              className: `mt-1 w-5 h-5 flex items-center justify-center transition-all focus:ring-1 focus:ring-grey-950 rounded-4 border border-grey-200 bg-grey-200 
              ${t ? "rounded-full" : "rounded-4"}
              ${y ? "cursor-not-allowed opacity-40" : "cursor-pointer opacity-100"} ${n}`,
              onClick: () => {
                if (y) return;
                const o = document.querySelector(`label[for="${u}"]`);
                o == null || o.click();
              },
              children: [
                !t && /* @__PURE__ */ e(he, { name: "check", className: `w-[15px] h-[15px] text-white transition-opacity ${c ? "opacity-100" : "opacity-0"}` }),
                t && /* @__PURE__ */ e(
                  "div",
                  {
                    className: "w-2.5 h-2.5 rounded-full bg-white opacity-0 radio-dot"
                  }
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ e(
          "label",
          {
            htmlFor: u,
            className: f(),
            dangerouslySetInnerHTML: { __html: a }
          }
        )
      ] }),
      l && /* @__PURE__ */ e(
        "div",
        {
          id: "error",
          className: `mt-1 text-grey-700 text-sm ml-8 ${i === "invalid" ? "block" : "hidden"}`,
          children: l
        }
      )
    ] });
  }, se = () => {
    const t = w || $(r === "textarea" ? "textarea" : "input", b), u = r === "textarea", o = z(), L = u ? `${o} resize-none items-start` : o;
    return /* @__PURE__ */ S("div", { id: F, children: [
      /* @__PURE__ */ e("label", { htmlFor: t, className: E(), children: a }),
      u ? /* @__PURE__ */ e(
        "textarea",
        {
          id: t,
          rows: 3,
          className: L,
          style: { minHeight: "100px" },
          placeholder: a,
          defaultValue: P,
          onChange: N,
          onBlur: A,
          ...y ? { disabled: !0 } : {},
          ...b
        }
      ) : /* @__PURE__ */ e(
        "input",
        {
          id: t,
          type: r,
          className: o,
          placeholder: a,
          defaultValue: P,
          onChange: N,
          onBlur: A,
          ...y ? { disabled: !0 } : {},
          ...b
        }
      ),
      l && /* @__PURE__ */ e(
        "div",
        {
          className: `mt-1 text-red-500 text-sm validation-invalid-message ${i === "invalid" ? "block" : "hidden"}`,
          children: l
        }
      )
    ] });
  };
  return r === "select" ? V() : r === "file" ? le() : r === "checkbox" || r === "radio" ? ne() : se();
}, we = ({
  variant: r = "form-only",
  form: a,
  content: n,
  formAlignment: i = "left"
}) => {
  const l = ["form-only", "form-media", "form-text", "form-accordion"].includes(r) ? r : "form-only", c = ["left", "right"].includes(i) ? i : "left", h = () => l === "form-only" ? "w-full xl:w-1/2 xl:mx-auto" : "w-full xl:w-1/2", m = () => l === "form-only" ? "w-full" : `
        w-full flex flex-col gap-section-spacing-y xl:flex-row xl:container
        ${l !== "form-media" ? "max-xl:container" : ""}
      `, v = () => l === "form-only" ? "" : `
     max-xl:container 
     ${r !== "form-media" ? "max-xl:px-0!" : ""}
      ${c === "left" ? "order-1" : "order-2"}
    `, g = () => l === "form-only" ? "" : c === "left" ? "order-2" : "order-1", d = m(), y = `${h()} ${v()}`, w = `${h()} ${g()}`;
  return /* @__PURE__ */ S("div", { className: d, children: [
    /* @__PURE__ */ e("div", { className: y, children: a }),
    l !== "form-only" && n && /* @__PURE__ */ e("div", { className: w, children: n })
  ] });
}, $e = ie(() => Promise.resolve().then(() => qe)), re = ({
  media: r = "image",
  // 'image' | 'video' | 'lottie' | 'iframe' | 'flipbook'
  aspect: a = "default",
  // 'default' | 'rectangle' | 'square'
  objectFit: n = "cover",
  // 'cover' | 'contain' — how media fills its box (e.g. framed text+media)
  imageUrl: i,
  videoUrl: l,
  lottieUrl: c,
  lottieData: h,
  iframeUrl: m,
  flipbookUrl: v,
  title: g,
  className: d = ""
}) => {
  var p;
  const y = typeof window < "u" && window.location.origin.indexOf("author") > -1, w = typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, C = `relative w-full h-full ${a === "square" ? "aspect-square" : a === "rectangle" ? "aspect-[4/3]" : r === "video" ? "aspect-video" : ""}`.trim(), $ = a === "default" ? `w-full h-full ${d}`.trim() : `absolute inset-0 w-full h-full ${d}`.trim(), F = "w-full h-full", P = a === "default" ? `${$}`.trim() : $, _ = n === "contain" ? "object-contain" : "object-cover", z = n === "contain" ? "xMidYMid meet" : "xMidYMid slice", E = `relative w-full ${d}`.trim(), f = "w-full min-h-[280px]";
  switch (r) {
    case "image":
      if (i)
        return /* @__PURE__ */ e("div", { className: C, children: /* @__PURE__ */ e(
          "img",
          {
            src: i,
            alt: g || "Media image",
            className: `${_} ${$}`.trim(),
            loading: "lazy"
          }
        ) });
      break;
    case "video":
      if (l) {
        const k = l.includes("youtube.com/watch") || l.includes("youtu.be/");
        let N = l;
        k && (N = `https://www.youtube.com/embed/${l.includes("youtu.be/") ? l.split("youtu.be/")[1].split("?")[0] : (p = l.split("v=")[1]) == null ? void 0 : p.split("&")[0]}`);
        const A = (() => {
          if (!k) return N;
          try {
            const q = new URL(N);
            return q.searchParams.set("autoplay", "0"), q.searchParams.set("mute", "0"), q.searchParams.set("playsinline", "1"), q.searchParams.set("controls", "1"), q.searchParams.set("rel", "0"), q.toString();
          } catch {
            return N.includes("?") ? N.includes("autoplay=") ? N : `${N}&autoplay=0` : `${N}?autoplay=0`;
          }
        })();
        return /* @__PURE__ */ e("div", { className: C, children: k ? /* @__PURE__ */ e(
          "iframe",
          {
            src: A,
            title: g || "Video player",
            frameBorder: "0",
            allow: "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: !0,
            className: `${$} ${_}`.trim()
          }
        ) : /* @__PURE__ */ e(
          "video",
          {
            className: `${$} ${_}`.trim(),
            autoPlay: !1,
            controls: !0,
            playsInline: !0,
            preload: "metadata",
            title: g || "Video player",
            children: /* @__PURE__ */ e("source", { src: l })
          }
        ) });
      }
      break;
    case "lottie":
      if (h)
        return y ? /* @__PURE__ */ e("div", { className: C, role: "img", "aria-label": g || "Animation", children: /* @__PURE__ */ e(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${$}`.trim(),
            children: /* @__PURE__ */ e("div", { className: "text-center", children: "Lottie preview" })
          }
        ) }) : /* @__PURE__ */ e(
          "div",
          {
            className: C,
            role: "img",
            "aria-label": g || "Animation",
            children: /* @__PURE__ */ e("div", { className: `${$} overflow-hidden`.trim(), children: /* @__PURE__ */ e(
              de,
              {
                animationData: h,
                loop: !w,
                autoplay: !w,
                className: F,
                style: { width: "100%", height: "100%" },
                rendererSettings: { preserveAspectRatio: z }
              }
            ) })
          }
        );
      if (c)
        return /* @__PURE__ */ e("div", { className: C, children: /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center text-body-default text-center p-40", children: "Loading Lottie animation..." }) });
      break;
    case "iframe":
      if (m)
        return /* @__PURE__ */ e("div", { className: C, children: /* @__PURE__ */ e(
          "iframe",
          {
            src: m,
            title: g || "Iframe content",
            frameBorder: "0",
            className: `${P} ${_}`.trim()
          }
        ) });
      break;
    case "flipbook":
      if (v)
        return y ? /* @__PURE__ */ e("div", { className: E, role: "img", "aria-label": g || "Flipbook", children: /* @__PURE__ */ e(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${f}`.trim(),
            children: /* @__PURE__ */ e("div", { className: "text-center", children: "Flipbook preview" })
          }
        ) }) : /* @__PURE__ */ e("div", { className: E, children: /* @__PURE__ */ e("div", { className: f, children: /* @__PURE__ */ e(oe, { fallback: /* @__PURE__ */ e("div", { children: "Loading PDF..." }), children: /* @__PURE__ */ e($e, { pdfUrl: v, title: g, className: "w-full" }) }) }) });
      break;
  }
  return /* @__PURE__ */ e("div", { className: C, children: /* @__PURE__ */ e("div", { className: `flex items-center justify-center text-body-default text-center p-40 ${a === "default" ? "" : "absolute inset-0"}`.trim(), children: r ? `${r.charAt(0).toUpperCase() + r.slice(1)} placeholder` : "Image/Video/Lottie/iframe" }) });
};
function Ne({
  title: r,
  titleId: a,
  ...n
}, i) {
  return /* @__PURE__ */ x.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: i,
    "aria-labelledby": a
  }, n), r ? /* @__PURE__ */ x.createElement("title", {
    id: a
  }, r) : null, /* @__PURE__ */ x.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
  }));
}
const Le = /* @__PURE__ */ x.forwardRef(Ne);
function ke({
  title: r,
  titleId: a,
  ...n
}, i) {
  return /* @__PURE__ */ x.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: i,
    "aria-labelledby": a
  }, n), r ? /* @__PURE__ */ x.createElement("title", {
    id: a
  }, r) : null, /* @__PURE__ */ x.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
  }), /* @__PURE__ */ x.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
  }));
}
const Se = /* @__PURE__ */ x.forwardRef(ke);
function Ee({
  title: r,
  titleId: a,
  ...n
}, i) {
  return /* @__PURE__ */ x.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: i,
    "aria-labelledby": a
  }, n), r ? /* @__PURE__ */ x.createElement("title", {
    id: a
  }, r) : null, /* @__PURE__ */ x.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
  }));
}
const Fe = /* @__PURE__ */ x.forwardRef(Ee);
function Ie({
  title: r = "",
  content: a = "",
  media: n = null,
  // (optional) `Media` molecule props { media, imageUrl, videoUrl, etc. }
  /**
   * !!! IGNORE IN COMPONENT. REMOVE THESE FROM REPEATER ITEM SETTINGS.
   * Below are (optional) props when used in an `Accordion` component. 
   * 
   * The main component handles these to make sure items uniform.
   * But if you use this molecule as standalone, you can use the props below.
   */
  colorVariant: i = "dark",
  // 'dark' | 'light'
  className: l = "",
  iconPosition: c = "left",
  // 'left' | 'right'
  hasIcon: h = !0,
  index: m = 0,
  attributes: v = {},
  ...g
}) {
  const [d, y] = O(!1), [w, b] = O(0), C = W(null), $ = W(null), F = g.rotateIcon ?? !0, P = {
    text: i === "dark" ? "grey-950" : "white",
    border: i === "dark" ? "grey-300" : "grey-200"
  }, _ = () => {
    y(!d);
  };
  return U(() => {
    if ($.current)
      if (d) {
        const z = $.current.scrollHeight;
        b(z);
      } else
        b(0);
  }, [d]), /* @__PURE__ */ S(
    "div",
    {
      className: `accordion-item ${l} text-${P.text}`,
      ...v ?? {},
      children: [
        /* @__PURE__ */ S(
          "button",
          {
            id: `accordion-trigger-${m}`,
            className: "flex w-full p-accordion-header--padding justify-between items-center rounded-none cursor-pointer text-left focus:outline-none text-body-large",
            onClick: _,
            "aria-expanded": d,
            "aria-controls": `accordion-content-${m}`,
            children: [
              c === "left" && h && /* @__PURE__ */ e(
                X,
                {
                  className: `w-5 h-5 mr-10 transition-transform duration-200 shrink-0 ${d && F ? "rotate-180" : ""}`
                }
              ),
              /* @__PURE__ */ S("div", { className: "flex items-center gap-10 flex-1 min-w-0", children: [
                n && /* @__PURE__ */ e("div", { className: "max-w-[138px] max-h-[62px] shrink-0", children: /* @__PURE__ */ e(
                  re,
                  {
                    media: n.media || "image",
                    aspect: "default",
                    imageUrl: n.imageUrl,
                    videoUrl: n.videoUrl,
                    lottieUrl: n.lottieUrl,
                    lottieData: n.lottieData,
                    iframeUrl: n.iframeUrl,
                    title: n.title || r,
                    className: "w-full h-full object-cover"
                  }
                ) }),
                /* @__PURE__ */ e("span", { className: "flex-1", children: r })
              ] }),
              c === "right" && h && /* @__PURE__ */ e(
                X,
                {
                  className: `w-5 h-5 ml-10 transition-transform duration-200 shrink-0 ${d && F ? "rotate-180" : ""}`
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ e(
          "div",
          {
            ref: C,
            id: `accordion-content-${m}`,
            role: "region",
            "aria-labelledby": `accordion-trigger-${m}`,
            "aria-hidden": !d,
            className: `text-body-default overflow-hidden transition-[height] duration-300 ease-in-out border-b border-${P.border}`,
            style: {
              height: `${w}px`
            },
            children: /* @__PURE__ */ e(
              "div",
              {
                ref: $,
                className: "accordion-content-inner wysiwyg p-10 min-h-[120px]",
                children: typeof a == "string" ? /* @__PURE__ */ e("div", { dangerouslySetInnerHTML: { __html: a } }) : /* @__PURE__ */ e("div", { children: a })
              }
            )
          }
        )
      ]
    }
  );
}
const Q = {
  primary: "text-grey-950",
  secondary: "text-grey-700",
  tertiary: "text-grey-500"
}, ee = {
  address: Se,
  phone: Fe,
  email: Le
}, Ce = (r) => r && typeof r == "string" && ee[r] ? ee[r] : null, Re = (r) => {
  var i;
  if (!r) return null;
  const a = r.contactItems ?? r.addressItems;
  return /* @__PURE__ */ S("div", { className: "space-y-4 text-grey-950 xl:p-24", children: [
    (() => {
      var l;
      return (l = r.titleItems) != null && l.length ? /* @__PURE__ */ e("h3", { className: "text-headings-h3 font-semibold leading-tight", children: r.titleItems.map((c, h) => {
        const m = c.fontStyle === "accent" ? "font-accent" : "", v = Q[c.color] ?? Q.primary;
        return /* @__PURE__ */ e("span", { className: `${m} ${v}`.trim(), children: c.text }, h);
      }) }) : r.title ? /* @__PURE__ */ e("h3", { className: "text-headings-h3 font-semibold", children: r.title }) : null;
    })(),
    r.text && /* @__PURE__ */ e("div", { className: "text-body-default mt-10", children: r.text }),
    r.description && /* @__PURE__ */ e("p", { className: "text-body-default mt-10", children: r.description }),
    r.html && /* @__PURE__ */ e(
      "div",
      {
        className: "text-body-default mt-10 [&_a]:underline",
        dangerouslySetInnerHTML: { __html: r.html }
      }
    ),
    r.checkItems && /* @__PURE__ */ e("ul", { className: "space-y-10 mt-20", children: r.checkItems.map((l, c) => /* @__PURE__ */ S("li", { className: "flex items-start gap-10 text-body-large", children: [
      /* @__PURE__ */ e(me, { className: "w-5 h-5 text-grey-950 shrink-0 mt-1" }),
      /* @__PURE__ */ e("span", { children: l })
    ] }, c)) }),
    (a == null ? void 0 : a.length) > 0 && /* @__PURE__ */ e("ul", { className: "space-y-10 mt-20", children: a.map((l, c) => {
      const h = Ce(l.icon);
      let m;
      return l.html ? m = l.href ? /* @__PURE__ */ e(
        "a",
        {
          href: l.href,
          className: "text-body-large text-grey-950 underline hover:opacity-80",
          dangerouslySetInnerHTML: { __html: l.html }
        }
      ) : /* @__PURE__ */ e(
        "span",
        {
          className: "text-body-large [&_a]:underline",
          dangerouslySetInnerHTML: { __html: l.html }
        }
      ) : l.href ? m = /* @__PURE__ */ e(
        "a",
        {
          href: l.href,
          className: "text-body-large text-grey-950 underline hover:opacity-80",
          children: l.text
        }
      ) : m = /* @__PURE__ */ e("span", { className: "text-body-large", children: l.text }), /* @__PURE__ */ S("li", { className: "flex items-start gap-10", children: [
        h && /* @__PURE__ */ e(h, { className: "w-5 h-5 text-grey-950 shrink-0 mt-1", "aria-hidden": !0 }),
        /* @__PURE__ */ e("div", { children: m })
      ] }, c);
    }) }),
    ((i = r.button) == null ? void 0 : i.text) && /* @__PURE__ */ e("div", { className: "mt-20", children: /* @__PURE__ */ e(
      te,
      {
        text: r.button.text,
        href: r.button.href,
        variant: r.button.variant ?? "dark",
        size: r.button.size ?? "btn-md",
        className: r.button.className ?? "",
        onClick: r.button.onClick,
        attributes: r.button.attributes ?? {}
      }
    ) })
  ] });
}, Pe = ({
  variant: r = "form-only",
  formAlignment: a = "left",
  media: n,
  accordions: i = [],
  textContent: l,
  form: c = null
}) => {
  const h = ["form-only", "form-media", "form-text", "form-accordion"].includes(r) ? r : "form-only", m = ["left", "right"].includes(a) ? a : "left";
  return /* @__PURE__ */ e(
    we,
    {
      variant: h,
      formAlignment: m,
      form: c,
      content: (() => {
        switch (h) {
          case "form-media":
            return n ? /* @__PURE__ */ e("div", { className: "h-auto", children: /* @__PURE__ */ e(
              re,
              {
                media: n.media || "image",
                aspect: n.aspect || "default",
                imageUrl: n.imageUrl,
                videoUrl: n.videoUrl,
                lottieUrl: n.lottieUrl,
                lottieData: n.lottieData,
                iframeUrl: n.iframeUrl,
                title: n.title
              }
            ) }) : null;
          case "form-text":
            return Re(l);
          case "form-accordion":
            return i.length > 0 ? /* @__PURE__ */ e("div", { children: i.map((g, d) => /* @__PURE__ */ e(
              Ie,
              {
                title: g.title,
                content: g.content,
                index: d,
                iconPosition: "right",
                ...g
              },
              d
            )) }) : null;
          case "form-only":
          default:
            return null;
        }
      })()
    }
  );
}, De = ({
  id: r,
  fields: a = [],
  onSubmit: n,
  submitLabel: i = "Submit",
  submitVariant: l = "dark",
  submitSize: c = "btn-md",
  fieldKey: h = 1,
  formClassName: m = "",
  htmlContent: v = "",
  htmlClassName: g = "",
  scripts: d = [],
  // FormComponent layout props
  variant: y = "form-only",
  formAlignment: w = "left",
  media: b,
  textContent: C,
  accordions: $
}) => {
  U(() => {
    if (!(d != null && d.length)) return;
    const f = [];
    async function p() {
      for (const k of d)
        if (k.src)
          await new Promise((N) => {
            const A = document.createElement("script");
            A.src = k.src, A.async = !0, k.id && (A.id = k.id), A.onload = N, A.onerror = N, document.body.appendChild(A), f.push(A);
          });
        else if (k.code) {
          const N = document.createElement("script");
          N.textContent = k.code, document.body.appendChild(N), f.push(N);
        }
    }
    return p(), () => {
      f.forEach((k) => {
        try {
          k.remove();
        } catch {
        }
      });
    };
  }, [d]);
  const F = [], P = {};
  a.forEach((f) => {
    if (f.row) {
      if (!P[f.row]) {
        const p = { rowKey: f.row, items: [] };
        P[f.row] = p, F.push(p);
      }
      P[f.row].items.push(f);
    } else
      F.push({ rowKey: null, items: [f] });
  });
  const _ = (f) => {
    const { row: p, name: k, label: N, type: A, id: q, ...B } = f, V = q ?? `form-${h}-${k}`;
    return /* @__PURE__ */ e(
      xe,
      {
        id: V,
        type: A,
        name: k,
        label: N,
        ...B
      },
      V
    );
  }, z = !!(v != null && v.trim()), E = /* @__PURE__ */ S("form", { className: `flex flex-col gap-y-form-spacing-y ${m}`, onSubmit: n, children: [
    z ? /* @__PURE__ */ e(
      "div",
      {
        className: `wysiwyg ${g}`.trim(),
        dangerouslySetInnerHTML: { __html: v }
      }
    ) : F.map((f, p) => f.items.length === 1 ? _(f.items[0]) : /* @__PURE__ */ e(
      "div",
      {
        className: "grid grid-cols-1 xl:grid-cols-2 gap-y-form-spacing-y xl:gap-section-spacing-x",
        children: f.items.map(_)
      },
      f.rowKey ?? p
    )),
    i && /* @__PURE__ */ e("div", { className: "text-right", children: /* @__PURE__ */ e(
      te,
      {
        text: i,
        variant: l,
        size: c,
        className: "mx-auto! w-fit",
        attributes: { type: "submit" }
      }
    ) })
  ] });
  return /* @__PURE__ */ e("div", { ...r ? { id: r } : {}, children: /* @__PURE__ */ e(
    Pe,
    {
      variant: y,
      formAlignment: w,
      media: b,
      textContent: C,
      accordions: $,
      form: E
    }
  ) });
};
let K, ae, G, H;
const Me = async () => {
  if (!H) {
    const r = await import("react-pdf");
    H = r.pdfjs, ae = r.Document, G = r.Page, H.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${H.version}/build/pdf.worker.min.mjs`;
  }
}, je = async () => {
  K || (K = (await import("react-pageflip")).default);
}, _e = ce(({ children: r }, a) => /* @__PURE__ */ e("div", { ref: a, className: "w-full h-full overflow-hidden", children: r })), Ae = ({ pdfUrl: r, title: a, width: n = 280, height: i = 280, className: l = "" }) => {
  const [c, h] = O(0), [m, v] = O(null), [g, d] = O(!0), [y, w] = O(i / n), [b, C] = O(0), $ = W(null);
  U(() => {
    Promise.all([Me(), je()]).then(() => d(!1)).catch(() => {
      v("Failed to load flipbook");
    });
  }, []), U(() => {
    const E = $.current;
    if (!E) return;
    const f = new ResizeObserver(([p]) => {
      const k = Math.floor(p.contentRect.width);
      k > 0 && C(k);
    });
    return f.observe(E), () => f.disconnect();
  }, [g]);
  const F = b > 0 ? Math.floor(b / 2) : Math.floor(n / 2), P = Math.round(F * y), _ = J(async (E) => {
    try {
      const p = (await E.getPage(1)).getViewport({ scale: 1 });
      p != null && p.width && (p != null && p.height) && w(p.height / p.width);
    } catch {
    }
    h(E.numPages || 0);
  }, []), z = J((E) => {
    v((E == null ? void 0 : E.message) || "Failed to load PDF");
  }, []);
  return m ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Failed to load flipbook" }) : g ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }) : /* @__PURE__ */ e("div", { ref: $, className: `w-full ${l}`.trim(), children: /* @__PURE__ */ S(
    ae,
    {
      file: r,
      onLoadSuccess: _,
      onLoadError: z,
      loading: /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }),
      children: [
        c === 1 && /* @__PURE__ */ e(
          "div",
          {
            className: `w-full flex justify-center items-center ${l}`.trim(),
            style: { minHeight: `${P}px` },
            children: /* @__PURE__ */ e(G, { pageNumber: 1, width: n, renderTextLayer: !1, renderAnnotationLayer: !1 })
          }
        ),
        c > 1 && /* @__PURE__ */ e(
          K,
          {
            width: F,
            height: P,
            size: "stretch",
            showCover: !0,
            mobileScrollSupport: !1,
            "aria-label": a || "Flipbook",
            children: Array.from({ length: c }, (E, f) => /* @__PURE__ */ e(_e, { children: /* @__PURE__ */ e(G, { pageNumber: f + 1, width: F, renderTextLayer: !1, renderAnnotationLayer: !1 }) }, f))
          },
          `${F}-${P}`
        )
      ]
    }
  ) });
}, qe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ae
}, Symbol.toStringTag, { value: "Module" }));
export {
  De as default
};

var Uy = Object.defineProperty;
var cg = (c) => {
  throw TypeError(c);
};
var zy = (c, t, e) => t in c ? Uy(c, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : c[t] = e;
var N = (c, t, e) => zy(c, typeof t != "symbol" ? t + "" : t, e), ef = (c, t, e) => t.has(c) || cg("Cannot " + e);
var n = (c, t, e) => (ef(c, t, "read from private field"), e ? e.call(c) : t.get(c)), y = (c, t, e) => t.has(c) ? cg("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(c) : t.set(c, e), g = (c, t, e, s) => (ef(c, t, "write to private field"), s ? s.call(c, e) : t.set(c, e), e), w = (c, t, e) => (ef(c, t, "access private method"), e);
var ie = (c, t, e, s) => ({
  set _(i) {
    g(c, t, i, e);
  },
  get _() {
    return n(c, t, s);
  }
});
import { jsx as M, jsxs as Jt } from "react/jsx-runtime";
import * as Mt from "react";
import sh, { lazy as Gy, Suspense as Wy, useState as In, useRef as ze, useEffect as bt, useCallback as Ni, forwardRef as Jg, createContext as Qg, useReducer as jy, useImperativeHandle as tm, useMemo as ni, useContext as em, useLayoutEffect as Vy } from "react";
import qy from "lottie-react";
const sm = ({
  text: c = "Button",
  href: t = void 0,
  variant: e = "light",
  // light, dark, light-outlined, dark-outlined, light-no-outline, dark-no-outline
  size: s = "btn-md",
  // btn-sm , btn-md
  className: i = "",
  disabled: r = !1,
  onClick: a = void 0,
  attributes: o = {},
  ...l
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
      default:
        return "btn-light";
    }
  }, u = (b) => {
    switch (b) {
      case "btn-sm":
        return "btn-sm";
      case "btn-md":
        return "btn-md";
      default:
        return "btn-md";
    }
  }, p = `btn ${d(e)} ${u(s)} ${i}`.trim();
  return t ? /* @__PURE__ */ M(
    "a",
    {
      href: t,
      className: p,
      onClick: a,
      ...l,
      ...o ?? {},
      children: c
    }
  ) : /* @__PURE__ */ M(
    "button",
    {
      type: l.type || "button",
      className: p,
      disabled: r,
      onClick: a,
      ...l,
      ...o ?? {},
      children: c
    }
  );
};
function Xy({
  title: c,
  titleId: t,
  ...e
}, s) {
  return /* @__PURE__ */ Mt.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: s,
    "aria-labelledby": t
  }, e), c ? /* @__PURE__ */ Mt.createElement("title", {
    id: t
  }, c) : null, /* @__PURE__ */ Mt.createElement("path", {
    fillRule: "evenodd",
    d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z",
    clipRule: "evenodd"
  }));
}
const Yy = /* @__PURE__ */ Mt.forwardRef(Xy);
function Ky({
  title: c,
  titleId: t,
  ...e
}, s) {
  return /* @__PURE__ */ Mt.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: s,
    "aria-labelledby": t
  }, e), c ? /* @__PURE__ */ Mt.createElement("title", {
    id: t
  }, c) : null, /* @__PURE__ */ Mt.createElement("path", {
    fillRule: "evenodd",
    d: "M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z",
    clipRule: "evenodd"
  }));
}
const Zy = /* @__PURE__ */ Mt.forwardRef(Ky);
function Jy({
  title: c,
  titleId: t,
  ...e
}, s) {
  return /* @__PURE__ */ Mt.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: s,
    "aria-labelledby": t
  }, e), c ? /* @__PURE__ */ Mt.createElement("title", {
    id: t
  }, c) : null, /* @__PURE__ */ Mt.createElement("path", {
    fillRule: "evenodd",
    d: "M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z",
    clipRule: "evenodd"
  }));
}
const dg = /* @__PURE__ */ Mt.forwardRef(Jy), Qy = "w-full flex items-center gap-10 text-base focus:outline-none focus:ring-1 focus:ring-grey-500 rounded-10 bg-grey-200 border border-grey-200 p-atom-text-inputs-padding-y text-grey-500", t0 = "block mb-2 text-sm text-grey-950 font-medium", e0 = "relative top-[2px] text-body-small text-grey-950", s0 = 5 * 1024 * 1024, i0 = ({
  type: c = "text",
  label: t,
  additionalClasses: e = "",
  validation: s = null,
  errorMessage: i = "",
  value: r,
  onChange: a,
  onClick: o,
  options: l = [],
  validationRegex: h,
  onBlur: d,
  disabled: u = !1,
  id: p = "",
  ...b
}) => {
  const S = (k) => (k == null ? void 0 : k.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "")) || "field", v = (k, I) => {
    if (p)
      return p;
    const B = I.name || `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    return `${k}-${S(B)}`;
  }, E = p ? `form-group-${p}` : v(`form-group-${S(t)}`, b), x = r !== void 0 ? r : "", T = (k) => ({
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
  })[k] || {
    pattern: "^(?!\\s*$)(?!.*<[^>]+>).+$",
    title: "Invalid validation type."
  }, _ = () => {
    let k = Qy;
    return s === "invalid" && (k = `${k} ring-1 ring-red-500 focus:ring-red-500`), u && (k = `${k} cursor-not-allowed opacity-50`), `${k} ${e}`;
  }, f = () => {
    let k = t0;
    return u && (k = `${k} opacity-50 cursor-not-allowed`), k;
  }, m = () => {
    let k = e0;
    return u && (k = `${k} opacity-50 cursor-not-allowed`), k;
  }, A = (k, I) => {
    var q, ot, Pt, H, K, rt;
    const B = document.querySelector(`#${E} .validation-invalid-message`);
    console.log(I), I ? (B && (B.style.display = "none"), (q = k.classList) == null || q.remove("ring-1"), (ot = k.classList) == null || ot.remove("ring-red-500"), (Pt = k.classList) == null || Pt.remove("focus:ring-red-500")) : (B && (B.style.display = "block"), (H = k.classList) == null || H.add("ring-1"), (K = k.classList) == null || K.add("ring-red-500"), (rt = k.classList) == null || rt.add("focus:ring-red-500"));
  }, C = (k) => {
    const { pattern: I, title: B } = T(h), q = new RegExp(I), ot = k.value.trim(), Pt = k.required && ot === "", H = ot !== "" && !q.test(ot);
    return Pt || H ? (A(k, !1), !1) : q.test(ot) || !k.required && !k.value ? (A(k, !0), !0) : (A(k, !1), !1);
  }, P = (k) => {
    a && a(k), h && k.target && C(k.target);
  }, R = (k) => {
    const I = k.target.value.trim(), B = k.target.required && I === "";
    if (k.target.setAttribute("inputLabel", k.target.placeholder), B)
      k.target.setCustomValidity(i), A(k.target, !1);
    else if (k.target.required && !B && !h)
      k.target.setCustomValidity(""), A(k.target, !0);
    else if (h) {
      const { pattern: q, title: ot } = T(h), Pt = new RegExp(q);
      I !== "" && !Pt.test(I) ? k.target.setCustomValidity(ot) : k.target.setCustomValidity("");
    }
    d == null || d(k);
  }, L = (k, I) => {
    const B = document.querySelector(`span#${I}`), q = k.target.files[0];
    q ? q.size > s0 ? (alert("File size must not exceed 5MB."), k.target.value = "", B.textContent = "") : B.textContent = q.name : B.textContent = "";
  }, D = (k) => {
    const I = k.target.type === "radio", B = k.target.parentElement.querySelector("div"), q = B == null ? void 0 : B.querySelector("svg");
    if (I) {
      const ot = B == null ? void 0 : B.querySelector(".radio-dot");
      k.target.checked ? (ot && ot.classList.add("opacity-100"), document.querySelectorAll(`input[type="radio"][name="${k.target.name}"]`).forEach((Pt) => {
        var K;
        if (Pt === k.target) return;
        const H = Pt.parentElement.querySelector("div");
        H == null || H.classList.remove("bg-grey-500", "border-grey-500"), H == null || H.classList.add("bg-grey-200", "border-grey-200"), (K = H == null ? void 0 : H.querySelector(".radio-dot")) == null || K.classList.remove("opacity-100");
      })) : ot && ot.classList.remove("opacity-100");
    }
    k.target.checked ? (B.classList.add("bg-grey-500", "border-grey-500"), B.classList.remove("bg-grey-200", "border-grey-200"), q && q.classList.add("opacity-100")) : (B.classList.remove("bg-grey-500", "border-grey-500"), B.classList.add("bg-grey-200", "border-grey-200"), q && q.classList.remove("opacity-100")), a && a(k), o && o(k);
  }, F = () => {
    const k = p || v("select", b), I = p ? `dropdown-${p}` : v("dropdown", b), B = () => {
      if (r) {
        const H = l.find((K) => (K.value || K) === r);
        return (H == null ? void 0 : H.label) || "";
      }
      return "Please select";
    }, q = (H, K) => {
      const rt = document.getElementById(I), ht = document.querySelector(`.${I}-arrow`);
      document.querySelectorAll('[id^="dropdown-"]').forEach((ct) => {
        ct.id !== I && (ct.style.display = "none");
      }), rt.style.display === "block" ? (rt.style.display = "none", ht == null || ht.classList.remove("rotate-180")) : (rt.style.display = "block", ht == null || ht.classList.add("rotate-180"));
    }, ot = (H, K) => {
      var ct, je;
      const rt = document.getElementById(k);
      rt && (rt.value = H, rt.dispatchEvent(new Event("change", { bubbles: !0 })), rt.dispatchEvent(new Event("blur", { bubbles: !0 })));
      const ht = (je = (ct = document.querySelector(`#${k}`)) == null ? void 0 : ct.parentElement) == null ? void 0 : je.querySelector("span");
      ht && (ht.textContent = K, ht.className = "text-grey-700");
      const Xt = {
        target: {
          value: H,
          name: b.name,
          tagName: "SELECT"
        }
      };
      P(Xt), d == null || d(Xt), o == null || o(Xt), q(document.querySelector(`#input-${I}`));
    }, Pt = B() !== "Please select";
    return /* @__PURE__ */ Jt("div", { className: "relative", id: E, children: [
      /* @__PURE__ */ Jt(
        "select",
        {
          id: k,
          className: "sr-only",
          defaultValue: r || "",
          name: t,
          onChange: P,
          ...b,
          children: [
            /* @__PURE__ */ M("option", { value: "" }),
            l.map((H, K) => {
              const rt = typeof H == "string" ? H : H.value ?? H, ht = typeof H == "string" ? H : H.label || rt;
              return /* @__PURE__ */ M(
                "option",
                {
                  value: rt,
                  ...typeof H == "object" ? H.attributes ?? {} : {},
                  children: ht
                },
                K
              );
            })
          ]
        }
      ),
      /* @__PURE__ */ M("label", { htmlFor: k, className: f(), children: t }),
      /* @__PURE__ */ M("div", { className: "relative", children: /* @__PURE__ */ Jt(
        "div",
        {
          id: `input-${I}`,
          className: `
              ${_()}  flex items-center justify-between
              ${u ? "cursor-not-allowed" : "cursor-pointer"}
            `,
          onClick: (H) => !u && q(H.target),
          children: [
            /* @__PURE__ */ M(
              "span",
              {
                id: `${k}-value`,
                className: `${Pt ? "text-grey-700" : "text-grey-500"}`,
                children: Pt ? B() : "Please select"
              }
            ),
            /* @__PURE__ */ M("div", { children: /* @__PURE__ */ M(
              "svg",
              {
                className: `${I}-arrow w-[18px] h-[18px] text-grey-500 transition-transform`,
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ M(
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
      /* @__PURE__ */ M(
        "div",
        {
          id: I,
          className: "absolute z-20 w-full mt-1 bg-grey-50 border border-grey-500 rounded-[8px] shadow-lg max-h-200 overflow-auto",
          style: { display: "none" },
          children: l.map((H, K) => {
            const rt = typeof H == "string" ? H : H.value ?? H, ht = typeof H == "string" ? H : H.label || rt;
            return /* @__PURE__ */ M(
              "div",
              {
                className: "px-10 py-[7px] text-grey-950 cursor-pointer hover:bg-grey-950/5 hover:text-grey-700 transition-colors first:rounded-t-[8px] last:rounded-b-[8px]",
                onClick: () => ot(rt, ht),
                children: ht
              },
              K
            );
          })
        }
      ),
      i && /* @__PURE__ */ M(
        "div",
        {
          className: `mt-1 text-red-500 text-sm validation-invalid-message ${s === "invalid" ? "block" : "hidden"}`,
          children: i
        }
      )
    ] });
  }, U = () => {
    const k = p || v("file", b), I = `${k}-text`;
    return /* @__PURE__ */ Jt("div", { id: E, children: [
      /* @__PURE__ */ M("label", { htmlFor: k, className: f(), children: t }),
      /* @__PURE__ */ Jt("div", { className: "flex-col md:flex-row flex md:items-center space-y-2 md:space-y-0 md:space-x-4", children: [
        /* @__PURE__ */ Jt("label", { className: `btn  px-16 py-8 
            ${s === "invalid" ? "bg-red-600" : "bg-grey-500"}
            ${u ? "cursor-not-allowed bg-grey-200! text-white!" : "btn-dark"}
          `, children: [
          /* @__PURE__ */ M(
            "input",
            {
              id: k,
              type: "file",
              className: "hidden",
              onChange: (B) => L(B, I),
              ...u ? { disabled: !0 } : {}
            }
          ),
          "UPLOAD FILE"
        ] }),
        /* @__PURE__ */ M(
          "span",
          {
            id: I,
            className: `truncate max-w-[150px] ${u ? "text-grey-950/20" : "text-grey-950"}`,
            children: "No file chosen"
          }
        )
      ] }),
      s === "invalid" && i && /* @__PURE__ */ M("div", { className: "mt-1 text-red-500 text-sm validation-invalid-message", children: i })
    ] });
  }, O = () => {
    const k = c === "radio", I = p || v(k ? "radio" : "checkbox", b);
    return /* @__PURE__ */ Jt("div", { ...b.containerId ? { id: b.containerId } : {}, children: [
      /* @__PURE__ */ Jt("div", { className: "flex items-start space-x-3", children: [
        /* @__PURE__ */ Jt("div", { className: "relative", children: [
          /* @__PURE__ */ M(
            "input",
            {
              type: k ? "radio" : "checkbox",
              id: I,
              className: "sr-only",
              placeholder: t,
              defaultChecked: r,
              onChange: D,
              ...u ? { disabled: !0 } : {},
              ...b
            }
          ),
          /* @__PURE__ */ Jt(
            "div",
            {
              className: `mt-1 w-5 h-5 flex items-center justify-center transition-all focus:ring-1 focus:ring-grey-950 rounded-4 border border-grey-200 bg-grey-200 
              ${k ? "rounded-full" : "rounded-4"}
              ${u ? "cursor-not-allowed opacity-40" : "cursor-pointer opacity-100"} ${e}`,
              onClick: () => {
                if (u) return;
                const B = document.querySelector(`label[for="${I}"]`);
                B == null || B.click();
              },
              children: [
                !k && /* @__PURE__ */ M(Zy, { name: "check", className: `w-[15px] h-[15px] text-white transition-opacity ${r ? "opacity-100" : "opacity-0"}` }),
                k && /* @__PURE__ */ M(
                  "div",
                  {
                    className: "w-2.5 h-2.5 rounded-full bg-white opacity-0 radio-dot"
                  }
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ M(
          "label",
          {
            htmlFor: I,
            className: m(),
            dangerouslySetInnerHTML: { __html: t }
          }
        )
      ] }),
      i && /* @__PURE__ */ M(
        "div",
        {
          id: "error",
          className: `mt-1 text-grey-700 text-sm ml-8 ${s === "invalid" ? "block" : "hidden"}`,
          children: i
        }
      )
    ] });
  }, X = () => {
    const k = p || v(c === "textarea" ? "textarea" : "input", b), I = c === "textarea", B = _(), q = I ? `${B} resize-none items-start` : B;
    return /* @__PURE__ */ Jt("div", { id: E, children: [
      /* @__PURE__ */ M("label", { htmlFor: k, className: f(), children: t }),
      I ? /* @__PURE__ */ M(
        "textarea",
        {
          id: k,
          rows: 3,
          className: q,
          style: { minHeight: "100px" },
          placeholder: t,
          defaultValue: x,
          onChange: P,
          onBlur: R,
          ...u ? { disabled: !0 } : {},
          ...b
        }
      ) : /* @__PURE__ */ M(
        "input",
        {
          id: k,
          type: c,
          className: B,
          placeholder: t,
          defaultValue: x,
          onChange: P,
          onBlur: R,
          ...u ? { disabled: !0 } : {},
          ...b
        }
      ),
      i && /* @__PURE__ */ M(
        "div",
        {
          className: `mt-1 text-red-500 text-sm validation-invalid-message ${s === "invalid" ? "block" : "hidden"}`,
          children: i
        }
      )
    ] });
  };
  return c === "select" ? F() : c === "file" ? U() : c === "checkbox" || c === "radio" ? O() : X();
}, n0 = ({
  variant: c = "form-only",
  form: t,
  content: e,
  formAlignment: s = "left"
}) => {
  const i = ["form-only", "form-media", "form-text", "form-accordion"].includes(c) ? c : "form-only", r = ["left", "right"].includes(s) ? s : "left", a = () => i === "form-only" ? "w-full xl:w-1/2 xl:mx-auto" : "w-full xl:w-1/2", o = () => i === "form-only" ? "w-full" : `
        w-full flex flex-col gap-section-spacing-y xl:flex-row xl:container
        ${i !== "form-media" ? "max-xl:container" : ""}
      `, l = () => i === "form-only" ? "" : `
     max-xl:container 
     ${c !== "form-media" ? "max-xl:px-0!" : ""}
      ${r === "left" ? "order-1" : "order-2"}
    `, h = () => i === "form-only" ? "" : r === "left" ? "order-2" : "order-1", d = o(), u = `${a()} ${l()}`, p = `${a()} ${h()}`;
  return /* @__PURE__ */ Jt("div", { className: d, children: [
    /* @__PURE__ */ M("div", { className: u, children: t }),
    i !== "form-only" && e && /* @__PURE__ */ M("div", { className: p, children: e })
  ] });
}, r0 = Gy(() => Promise.resolve().then(() => A0)), im = ({
  media: c = "image",
  // 'image' | 'video' | 'lottie' | 'iframe' | 'flipbook'
  aspect: t = "default",
  // 'default' | 'rectangle' | 'square'
  objectFit: e = "cover",
  // 'cover' | 'contain' — how media fills its box (e.g. framed text+media)
  imageUrl: s,
  videoUrl: i,
  lottieUrl: r,
  lottieData: a,
  iframeUrl: o,
  flipbookUrl: l,
  title: h,
  className: d = ""
}) => {
  var A;
  const u = typeof window < "u" && window.location.origin.indexOf("author") > -1, p = typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, S = `relative w-full h-full ${t === "square" ? "aspect-square" : t === "rectangle" ? "aspect-[4/3]" : c === "video" ? "aspect-video" : ""}`.trim(), v = t === "default" ? `w-full h-full ${d}`.trim() : `absolute inset-0 w-full h-full ${d}`.trim(), E = "w-full h-full", x = t === "default" ? `${v}`.trim() : v, T = e === "contain" ? "object-contain" : "object-cover", _ = e === "contain" ? "xMidYMid meet" : "xMidYMid slice", f = `relative w-full ${d}`.trim(), m = "w-full min-h-[280px]";
  switch (c) {
    case "image":
      if (s)
        return /* @__PURE__ */ M("div", { className: S, children: /* @__PURE__ */ M(
          "img",
          {
            src: s,
            alt: h || "Media image",
            className: `${T} ${v}`.trim(),
            loading: "lazy"
          }
        ) });
      break;
    case "video":
      if (i) {
        const C = i.includes("youtube.com/watch") || i.includes("youtu.be/");
        let P = i;
        C && (P = `https://www.youtube.com/embed/${i.includes("youtu.be/") ? i.split("youtu.be/")[1].split("?")[0] : (A = i.split("v=")[1]) == null ? void 0 : A.split("&")[0]}`);
        const R = (() => {
          if (!C) return P;
          try {
            const L = new URL(P);
            return L.searchParams.set("autoplay", "0"), L.searchParams.set("mute", "0"), L.searchParams.set("playsinline", "1"), L.searchParams.set("controls", "1"), L.searchParams.set("rel", "0"), L.toString();
          } catch {
            return P.includes("?") ? P.includes("autoplay=") ? P : `${P}&autoplay=0` : `${P}?autoplay=0`;
          }
        })();
        return /* @__PURE__ */ M("div", { className: S, children: C ? /* @__PURE__ */ M(
          "iframe",
          {
            src: R,
            title: h || "Video player",
            frameBorder: "0",
            allow: "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: !0,
            className: `${v} ${T}`.trim()
          }
        ) : /* @__PURE__ */ M(
          "video",
          {
            className: `${v} ${T}`.trim(),
            autoPlay: !1,
            controls: !0,
            playsInline: !0,
            preload: "metadata",
            title: h || "Video player",
            children: /* @__PURE__ */ M("source", { src: i })
          }
        ) });
      }
      break;
    case "lottie":
      if (a)
        return u ? /* @__PURE__ */ M("div", { className: S, role: "img", "aria-label": h || "Animation", children: /* @__PURE__ */ M(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${v}`.trim(),
            children: /* @__PURE__ */ M("div", { className: "text-center", children: "Lottie preview" })
          }
        ) }) : /* @__PURE__ */ M(
          "div",
          {
            className: S,
            role: "img",
            "aria-label": h || "Animation",
            children: /* @__PURE__ */ M("div", { className: `${v} overflow-hidden`.trim(), children: /* @__PURE__ */ M(
              qy,
              {
                animationData: a,
                loop: !p,
                autoplay: !p,
                className: E,
                style: { width: "100%", height: "100%" },
                rendererSettings: { preserveAspectRatio: _ }
              }
            ) })
          }
        );
      if (r)
        return /* @__PURE__ */ M("div", { className: S, children: /* @__PURE__ */ M("div", { className: "absolute inset-0 flex items-center justify-center text-body-default text-center p-40", children: "Loading Lottie animation..." }) });
      break;
    case "iframe":
      if (o)
        return /* @__PURE__ */ M("div", { className: S, children: /* @__PURE__ */ M(
          "iframe",
          {
            src: o,
            title: h || "Iframe content",
            frameBorder: "0",
            className: `${x} ${T}`.trim()
          }
        ) });
      break;
    case "flipbook":
      if (l)
        return u ? /* @__PURE__ */ M("div", { className: f, role: "img", "aria-label": h || "Flipbook", children: /* @__PURE__ */ M(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${m}`.trim(),
            children: /* @__PURE__ */ M("div", { className: "text-center", children: "Flipbook preview" })
          }
        ) }) : /* @__PURE__ */ M("div", { className: f, children: /* @__PURE__ */ M("div", { className: m, children: /* @__PURE__ */ M(Wy, { fallback: /* @__PURE__ */ M("div", { children: "Loading PDF..." }), children: /* @__PURE__ */ M(r0, { pdfUrl: l, title: h, className: "w-full" }) }) }) });
      break;
  }
  return /* @__PURE__ */ M("div", { className: S, children: /* @__PURE__ */ M("div", { className: `flex items-center justify-center text-body-default text-center p-40 ${t === "default" ? "" : "absolute inset-0"}`.trim(), children: c ? `${c.charAt(0).toUpperCase() + c.slice(1)} placeholder` : "Image/Video/Lottie/iframe" }) });
};
function a0({
  title: c,
  titleId: t,
  ...e
}, s) {
  return /* @__PURE__ */ Mt.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: s,
    "aria-labelledby": t
  }, e), c ? /* @__PURE__ */ Mt.createElement("title", {
    id: t
  }, c) : null, /* @__PURE__ */ Mt.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
  }));
}
const o0 = /* @__PURE__ */ Mt.forwardRef(a0);
function l0({
  title: c,
  titleId: t,
  ...e
}, s) {
  return /* @__PURE__ */ Mt.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: s,
    "aria-labelledby": t
  }, e), c ? /* @__PURE__ */ Mt.createElement("title", {
    id: t
  }, c) : null, /* @__PURE__ */ Mt.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
  }), /* @__PURE__ */ Mt.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
  }));
}
const h0 = /* @__PURE__ */ Mt.forwardRef(l0);
function c0({
  title: c,
  titleId: t,
  ...e
}, s) {
  return /* @__PURE__ */ Mt.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: s,
    "aria-labelledby": t
  }, e), c ? /* @__PURE__ */ Mt.createElement("title", {
    id: t
  }, c) : null, /* @__PURE__ */ Mt.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
  }));
}
const d0 = /* @__PURE__ */ Mt.forwardRef(c0);
function u0({
  title: c = "",
  content: t = "",
  media: e = null,
  // (optional) `Media` molecule props { media, imageUrl, videoUrl, etc. }
  /**
   * !!! IGNORE IN COMPONENT. REMOVE THESE FROM REPEATER ITEM SETTINGS.
   * Below are (optional) props when used in an `Accordion` component. 
   * 
   * The main component handles these to make sure items uniform.
   * But if you use this molecule as standalone, you can use the props below.
   */
  colorVariant: s = "dark",
  // 'dark' | 'light'
  className: i = "",
  iconPosition: r = "left",
  // 'left' | 'right'
  hasIcon: a = !0,
  index: o = 0,
  attributes: l = {},
  ...h
}) {
  const [d, u] = In(!1), [p, b] = In(0), S = ze(null), v = ze(null), E = h.rotateIcon ?? !0, x = {
    text: s === "dark" ? "grey-950" : "white",
    border: s === "dark" ? "grey-300" : "grey-200"
  }, T = () => {
    u(!d);
  };
  return bt(() => {
    if (v.current)
      if (d) {
        const _ = v.current.scrollHeight;
        b(_);
      } else
        b(0);
  }, [d]), /* @__PURE__ */ Jt(
    "div",
    {
      className: `accordion-item ${i} text-${x.text}`,
      ...l ?? {},
      children: [
        /* @__PURE__ */ Jt(
          "button",
          {
            id: `accordion-trigger-${o}`,
            className: "flex w-full p-accordion-header--padding justify-between items-center rounded-none cursor-pointer text-left focus:outline-none text-body-large",
            onClick: T,
            "aria-expanded": d,
            "aria-controls": `accordion-content-${o}`,
            children: [
              r === "left" && a && /* @__PURE__ */ M(
                dg,
                {
                  className: `w-5 h-5 mr-10 transition-transform duration-200 shrink-0 ${d && E ? "rotate-180" : ""}`
                }
              ),
              /* @__PURE__ */ Jt("div", { className: "flex items-center gap-10 flex-1 min-w-0", children: [
                e && /* @__PURE__ */ M("div", { className: "max-w-[138px] max-h-[62px] shrink-0", children: /* @__PURE__ */ M(
                  im,
                  {
                    media: e.media || "image",
                    aspect: "default",
                    imageUrl: e.imageUrl,
                    videoUrl: e.videoUrl,
                    lottieUrl: e.lottieUrl,
                    lottieData: e.lottieData,
                    iframeUrl: e.iframeUrl,
                    title: e.title || c,
                    className: "w-full h-full object-cover"
                  }
                ) }),
                /* @__PURE__ */ M("span", { className: "flex-1", children: c })
              ] }),
              r === "right" && a && /* @__PURE__ */ M(
                dg,
                {
                  className: `w-5 h-5 ml-10 transition-transform duration-200 shrink-0 ${d && E ? "rotate-180" : ""}`
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ M(
          "div",
          {
            ref: S,
            id: `accordion-content-${o}`,
            role: "region",
            "aria-labelledby": `accordion-trigger-${o}`,
            "aria-hidden": !d,
            className: `text-body-default overflow-hidden transition-[height] duration-300 ease-in-out border-b border-${x.border}`,
            style: {
              height: `${p}px`
            },
            children: /* @__PURE__ */ M(
              "div",
              {
                ref: v,
                className: "accordion-content-inner wysiwyg p-10 min-h-[120px]",
                children: typeof t == "string" ? /* @__PURE__ */ M("div", { dangerouslySetInnerHTML: { __html: t } }) : /* @__PURE__ */ M("div", { children: t })
              }
            )
          }
        )
      ]
    }
  );
}
const ug = {
  primary: "text-grey-950",
  secondary: "text-grey-700",
  tertiary: "text-grey-500"
}, fg = {
  address: h0,
  phone: d0,
  email: o0
}, f0 = (c) => c && typeof c == "string" && fg[c] ? fg[c] : null, p0 = (c) => {
  var s;
  if (!c) return null;
  const t = c.contactItems ?? c.addressItems;
  return /* @__PURE__ */ Jt("div", { className: "space-y-4 text-grey-950 xl:p-24", children: [
    (() => {
      var i;
      return (i = c.titleItems) != null && i.length ? /* @__PURE__ */ M("h3", { className: "text-headings-h3 font-semibold leading-tight", children: c.titleItems.map((r, a) => {
        const o = r.fontStyle === "accent" ? "font-accent" : "", l = ug[r.color] ?? ug.primary;
        return /* @__PURE__ */ M("span", { className: `${o} ${l}`.trim(), children: r.text }, a);
      }) }) : c.title ? /* @__PURE__ */ M("h3", { className: "text-headings-h3 font-semibold", children: c.title }) : null;
    })(),
    c.text && /* @__PURE__ */ M("div", { className: "text-body-default mt-10", children: c.text }),
    c.description && /* @__PURE__ */ M("p", { className: "text-body-default mt-10", children: c.description }),
    c.html && /* @__PURE__ */ M(
      "div",
      {
        className: "text-body-default mt-10 [&_a]:underline",
        dangerouslySetInnerHTML: { __html: c.html }
      }
    ),
    c.checkItems && /* @__PURE__ */ M("ul", { className: "space-y-10 mt-20", children: c.checkItems.map((i, r) => /* @__PURE__ */ Jt("li", { className: "flex items-start gap-10 text-body-large", children: [
      /* @__PURE__ */ M(Yy, { className: "w-5 h-5 text-grey-950 shrink-0 mt-1" }),
      /* @__PURE__ */ M("span", { children: i })
    ] }, r)) }),
    (t == null ? void 0 : t.length) > 0 && /* @__PURE__ */ M("ul", { className: "space-y-10 mt-20", children: t.map((i, r) => {
      const a = f0(i.icon);
      let o;
      return i.html ? o = i.href ? /* @__PURE__ */ M(
        "a",
        {
          href: i.href,
          className: "text-body-large text-grey-950 underline hover:opacity-80",
          dangerouslySetInnerHTML: { __html: i.html }
        }
      ) : /* @__PURE__ */ M(
        "span",
        {
          className: "text-body-large [&_a]:underline",
          dangerouslySetInnerHTML: { __html: i.html }
        }
      ) : i.href ? o = /* @__PURE__ */ M(
        "a",
        {
          href: i.href,
          className: "text-body-large text-grey-950 underline hover:opacity-80",
          children: i.text
        }
      ) : o = /* @__PURE__ */ M("span", { className: "text-body-large", children: i.text }), /* @__PURE__ */ Jt("li", { className: "flex items-start gap-10", children: [
        a && /* @__PURE__ */ M(a, { className: "w-5 h-5 text-grey-950 shrink-0 mt-1", "aria-hidden": !0 }),
        /* @__PURE__ */ M("div", { children: o })
      ] }, r);
    }) }),
    ((s = c.button) == null ? void 0 : s.text) && /* @__PURE__ */ M("div", { className: "mt-20", children: /* @__PURE__ */ M(
      sm,
      {
        text: c.button.text,
        href: c.button.href,
        variant: c.button.variant ?? "dark",
        size: c.button.size ?? "btn-md",
        className: c.button.className ?? "",
        onClick: c.button.onClick,
        attributes: c.button.attributes ?? {}
      }
    ) })
  ] });
}, g0 = ({
  variant: c = "form-only",
  formAlignment: t = "left",
  media: e,
  accordions: s = [],
  textContent: i,
  form: r = null
}) => {
  const a = ["form-only", "form-media", "form-text", "form-accordion"].includes(c) ? c : "form-only", o = ["left", "right"].includes(t) ? t : "left";
  return /* @__PURE__ */ M(
    n0,
    {
      variant: a,
      formAlignment: o,
      form: r,
      content: (() => {
        switch (a) {
          case "form-media":
            return e ? /* @__PURE__ */ M("div", { className: "h-auto", children: /* @__PURE__ */ M(
              im,
              {
                media: e.media || "image",
                aspect: e.aspect || "default",
                imageUrl: e.imageUrl,
                videoUrl: e.videoUrl,
                lottieUrl: e.lottieUrl,
                lottieData: e.lottieData,
                iframeUrl: e.iframeUrl,
                title: e.title
              }
            ) }) : null;
          case "form-text":
            return p0(i);
          case "form-accordion":
            return s.length > 0 ? /* @__PURE__ */ M("div", { children: s.map((h, d) => /* @__PURE__ */ M(
              u0,
              {
                title: h.title,
                content: h.content,
                index: d,
                iconPosition: "right",
                ...h
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
}, mv = ({
  id: c,
  fields: t = [],
  onSubmit: e,
  submitLabel: s = "Submit",
  submitVariant: i = "dark",
  submitSize: r = "btn-md",
  fieldKey: a = 1,
  formClassName: o = "",
  htmlContent: l = "",
  htmlClassName: h = "",
  scripts: d = [],
  // FormComponent layout props
  variant: u = "form-only",
  formAlignment: p = "left",
  media: b,
  textContent: S,
  accordions: v
}) => {
  bt(() => {
    if (!(d != null && d.length)) return;
    const m = [];
    async function A() {
      for (const C of d)
        if (C.src)
          await new Promise((P) => {
            const R = document.createElement("script");
            R.src = C.src, R.async = !0, C.id && (R.id = C.id), R.onload = P, R.onerror = P, document.body.appendChild(R), m.push(R);
          });
        else if (C.code) {
          const P = document.createElement("script");
          P.textContent = C.code, document.body.appendChild(P), m.push(P);
        }
    }
    return A(), () => {
      m.forEach((C) => {
        try {
          C.remove();
        } catch {
        }
      });
    };
  }, [d]);
  const E = [], x = {};
  t.forEach((m) => {
    if (m.row) {
      if (!x[m.row]) {
        const A = { rowKey: m.row, items: [] };
        x[m.row] = A, E.push(A);
      }
      x[m.row].items.push(m);
    } else
      E.push({ rowKey: null, items: [m] });
  });
  const T = (m) => {
    const { row: A, name: C, label: P, type: R, id: L, ...D } = m, F = L ?? `form-${a}-${C}`;
    return /* @__PURE__ */ M(
      i0,
      {
        id: F,
        type: R,
        name: C,
        label: P,
        ...D
      },
      F
    );
  }, _ = !!(l != null && l.trim()), f = /* @__PURE__ */ Jt("form", { className: `flex flex-col gap-y-form-spacing-y ${o}`, onSubmit: e, children: [
    _ ? /* @__PURE__ */ M(
      "div",
      {
        className: `wysiwyg ${h}`.trim(),
        dangerouslySetInnerHTML: { __html: l }
      }
    ) : E.map((m, A) => m.items.length === 1 ? T(m.items[0]) : /* @__PURE__ */ M(
      "div",
      {
        className: "grid grid-cols-1 xl:grid-cols-2 gap-y-form-spacing-y xl:gap-section-spacing-x",
        children: m.items.map(T)
      },
      m.rowKey ?? A
    )),
    s && /* @__PURE__ */ M("div", { className: "text-right", children: /* @__PURE__ */ M(
      sm,
      {
        text: s,
        variant: i,
        size: r,
        className: "mx-auto! w-fit",
        attributes: { type: "submit" }
      }
    ) })
  ] });
  return /* @__PURE__ */ M("div", { ...c ? { id: c } : {}, children: /* @__PURE__ */ M(
    g0,
    {
      variant: u,
      formAlignment: p,
      media: b,
      textContent: S,
      accordions: v,
      form: f
    }
  ) });
};
let ff, nm, pf, Ed;
const m0 = async () => {
  if (!Ed) {
    const c = await Promise.resolve().then(() => rv);
    Ed = c.pdfjs, nm = c.Document, pf = c.Page, Ed.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${Ed.version}/build/pdf.worker.min.mjs`;
  }
}, b0 = async () => {
  ff || (ff = (await Promise.resolve().then(() => dv)).default);
}, y0 = Jg(({ children: c }, t) => /* @__PURE__ */ M("div", { ref: t, className: "w-full h-full overflow-hidden", children: c })), w0 = ({ pdfUrl: c, title: t, width: e = 280, height: s = 280, className: i = "" }) => {
  const [r, a] = In(0), [o, l] = In(null), [h, d] = In(!0), [u, p] = In(s / e), [b, S] = In(0), v = ze(null);
  bt(() => {
    Promise.all([m0(), b0()]).then(() => d(!1)).catch(() => {
      l("Failed to load flipbook");
    });
  }, []), bt(() => {
    const f = v.current;
    if (!f) return;
    const m = new ResizeObserver(([A]) => {
      const C = Math.floor(A.contentRect.width);
      C > 0 && S(C);
    });
    return m.observe(f), () => m.disconnect();
  }, [h]);
  const E = b > 0 ? Math.floor(b / 2) : Math.floor(e / 2), x = Math.round(E * u), T = Ni(async (f) => {
    try {
      const A = (await f.getPage(1)).getViewport({ scale: 1 });
      A != null && A.width && (A != null && A.height) && p(A.height / A.width);
    } catch {
    }
    a(f.numPages || 0);
  }, []), _ = Ni((f) => {
    l((f == null ? void 0 : f.message) || "Failed to load PDF");
  }, []);
  return o ? /* @__PURE__ */ M("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Failed to load flipbook" }) : h ? /* @__PURE__ */ M("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }) : /* @__PURE__ */ M("div", { ref: v, className: `w-full ${i}`.trim(), children: /* @__PURE__ */ Jt(
    nm,
    {
      file: c,
      onLoadSuccess: T,
      onLoadError: _,
      loading: /* @__PURE__ */ M("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }),
      children: [
        r === 1 && /* @__PURE__ */ M(
          "div",
          {
            className: `w-full flex justify-center items-center ${i}`.trim(),
            style: { minHeight: `${x}px` },
            children: /* @__PURE__ */ M(pf, { pageNumber: 1, width: e, renderTextLayer: !1, renderAnnotationLayer: !1 })
          }
        ),
        r > 1 && /* @__PURE__ */ M(
          ff,
          {
            width: E,
            height: x,
            size: "stretch",
            showCover: !0,
            mobileScrollSupport: !1,
            "aria-label": t || "Flipbook",
            children: Array.from({ length: r }, (f, m) => /* @__PURE__ */ M(y0, { children: /* @__PURE__ */ M(pf, { pageNumber: m + 1, width: E, renderTextLayer: !1, renderAnnotationLayer: !1 }) }, m))
          },
          `${E}-${x}`
        )
      ]
    }
  ) });
}, A0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: w0
}, Symbol.toStringTag, { value: "Module" })), Ue = typeof process == "object" && process + "" == "[object process]" && !process.versions.nw && !(process.versions.electron && process.type && process.type !== "browser"), gf = [1e-3, 0, 0, 1e-3, 0, 0], sf = 1.35, vs = {
  ANY: 1,
  DISPLAY: 2,
  PRINT: 4,
  ANNOTATIONS_FORMS: 16,
  ANNOTATIONS_STORAGE: 32,
  ANNOTATIONS_DISABLE: 64,
  IS_EDITING: 128,
  OPLIST: 256
}, Ii = {
  DISABLE: 0,
  ENABLE: 1,
  ENABLE_FORMS: 2,
  ENABLE_STORAGE: 3
}, Ch = "pdfjs_internal_editor_", Z = {
  DISABLE: -1,
  NONE: 0,
  FREETEXT: 3,
  HIGHLIGHT: 9,
  STAMP: 13,
  INK: 15,
  POPUP: 16,
  SIGNATURE: 101,
  COMMENT: 102
}, at = {
  RESIZE: 1,
  CREATE: 2,
  FREETEXT_SIZE: 11,
  FREETEXT_COLOR: 12,
  FREETEXT_OPACITY: 13,
  INK_COLOR: 21,
  INK_THICKNESS: 22,
  INK_OPACITY: 23,
  HIGHLIGHT_COLOR: 31,
  HIGHLIGHT_THICKNESS: 32,
  HIGHLIGHT_FREE: 33,
  HIGHLIGHT_SHOW_ALL: 34,
  DRAW_STEP: 41
}, rm = {
  PRINT: 4,
  MODIFY_CONTENTS: 8,
  COPY: 16,
  MODIFY_ANNOTATIONS: 32,
  FILL_INTERACTIVE_FORMS: 256,
  COPY_FOR_ACCESSIBILITY: 512,
  ASSEMBLE: 1024,
  PRINT_HIGH_QUALITY: 2048
}, me = {
  FILL: 0,
  STROKE: 1,
  FILL_STROKE: 2,
  INVISIBLE: 3,
  FILL_STROKE_MASK: 3,
  ADD_TO_PATH_FLAG: 4
}, _h = {
  GRAYSCALE_1BPP: 1,
  RGB_24BPP: 2,
  RGBA_32BPP: 3
}, Yt = {
  TEXT: 1,
  LINK: 2,
  FREETEXT: 3,
  LINE: 4,
  SQUARE: 5,
  CIRCLE: 6,
  POLYGON: 7,
  POLYLINE: 8,
  HIGHLIGHT: 9,
  UNDERLINE: 10,
  SQUIGGLY: 11,
  STRIKEOUT: 12,
  STAMP: 13,
  CARET: 14,
  INK: 15,
  POPUP: 16,
  FILEATTACHMENT: 17,
  SOUND: 18,
  MOVIE: 19,
  WIDGET: 20,
  SCREEN: 21,
  PRINTERMARK: 22,
  TRAPNET: 23,
  WATERMARK: 24,
  THREED: 25,
  REDACT: 26
}, no = {
  SOLID: 1,
  DASHED: 2,
  BEVELED: 3,
  INSET: 4,
  UNDERLINE: 5
}, pd = {
  ERRORS: 0,
  WARNINGS: 1,
  INFOS: 5
}, ql = {
  dependency: 1,
  setLineWidth: 2,
  setLineCap: 3,
  setLineJoin: 4,
  setMiterLimit: 5,
  setDash: 6,
  setRenderingIntent: 7,
  setFlatness: 8,
  setGState: 9,
  save: 10,
  restore: 11,
  transform: 12,
  moveTo: 13,
  lineTo: 14,
  curveTo: 15,
  curveTo2: 16,
  curveTo3: 17,
  closePath: 18,
  rectangle: 19,
  stroke: 20,
  closeStroke: 21,
  fill: 22,
  eoFill: 23,
  fillStroke: 24,
  eoFillStroke: 25,
  closeFillStroke: 26,
  closeEOFillStroke: 27,
  endPath: 28,
  clip: 29,
  eoClip: 30,
  beginText: 31,
  endText: 32,
  setCharSpacing: 33,
  setWordSpacing: 34,
  setHScale: 35,
  setLeading: 36,
  setFont: 37,
  setTextRenderingMode: 38,
  setTextRise: 39,
  moveText: 40,
  setLeadingMoveText: 41,
  setTextMatrix: 42,
  nextLine: 43,
  showText: 44,
  showSpacedText: 45,
  nextLineShowText: 46,
  nextLineSetSpacingShowText: 47,
  setCharWidth: 48,
  setCharWidthAndBounds: 49,
  setStrokeColorSpace: 50,
  setFillColorSpace: 51,
  setStrokeColor: 52,
  setStrokeColorN: 53,
  setFillColor: 54,
  setFillColorN: 55,
  setStrokeGray: 56,
  setFillGray: 57,
  setStrokeRGBColor: 58,
  setFillRGBColor: 59,
  setStrokeCMYKColor: 60,
  setFillCMYKColor: 61,
  shadingFill: 62,
  beginInlineImage: 63,
  beginImageData: 64,
  endInlineImage: 65,
  paintXObject: 66,
  markPoint: 67,
  markPointProps: 68,
  beginMarkedContent: 69,
  beginMarkedContentProps: 70,
  endMarkedContent: 71,
  beginCompat: 72,
  endCompat: 73,
  paintFormXObjectBegin: 74,
  paintFormXObjectEnd: 75,
  beginGroup: 76,
  endGroup: 77,
  beginAnnotation: 80,
  endAnnotation: 81,
  paintImageMaskXObject: 83,
  paintImageMaskXObjectGroup: 84,
  paintImageXObject: 85,
  paintInlineImageXObject: 86,
  paintInlineImageXObjectGroup: 87,
  paintImageXObjectRepeat: 88,
  paintImageMaskXObjectRepeat: 89,
  paintSolidColorImageMask: 90,
  constructPath: 91,
  setStrokeTransparent: 92,
  setFillTransparent: 93,
  rawFillPath: 94
}, _d = {
  moveTo: 0,
  lineTo: 1,
  curveTo: 2,
  closePath: 3
}, am = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2
};
let Wu = pd.WARNINGS;
function v0(c) {
  Number.isInteger(c) && (Wu = c);
}
function S0() {
  return Wu;
}
function ju(c) {
  Wu >= pd.INFOS && console.info(`Info: ${c}`);
}
function J(c) {
  Wu >= pd.WARNINGS && console.warn(`Warning: ${c}`);
}
function Tt(c) {
  throw new Error(c);
}
function lt(c, t) {
  c || Tt(t);
}
function x0(c) {
  switch (c == null ? void 0 : c.protocol) {
    case "http:":
    case "https:":
    case "ftp:":
    case "mailto:":
    case "tel:":
      return !0;
    default:
      return !1;
  }
}
function zp(c, t = null, e = null) {
  if (!c)
    return null;
  if (e && typeof c == "string") {
    if (e.addDefaultProtocol && c.startsWith("www.")) {
      const i = c.match(/\./g);
      (i == null ? void 0 : i.length) >= 2 && (c = `http://${c}`);
    }
    if (e.tryConvertEncoding)
      try {
        c = P0(c);
      } catch {
      }
  }
  const s = t ? URL.parse(c, t) : URL.parse(c);
  return x0(s) ? s : null;
}
function Gp(c, t, e = !1) {
  const s = URL.parse(c);
  return s ? (s.hash = t, s.href) : e && zp(c, "http://example.com") ? c.split("#", 1)[0] + `${t ? `#${t}` : ""}` : "";
}
function et(c, t, e, s = !1) {
  return Object.defineProperty(c, t, {
    value: e,
    enumerable: !s,
    configurable: !0,
    writable: !1
  }), e;
}
const to = (function() {
  function t(e, s) {
    this.message = e, this.name = s;
  }
  return t.prototype = new Error(), t.constructor = t, t;
})();
class pg extends to {
  constructor(t, e) {
    super(t, "PasswordException"), this.code = e;
  }
}
class nf extends to {
  constructor(t, e) {
    super(t, "UnknownErrorException"), this.details = e;
  }
}
class fu extends to {
  constructor(t) {
    super(t, "InvalidPDFException");
  }
}
class Th extends to {
  constructor(t, e, s) {
    super(t, "ResponseException"), this.status = e, this.missing = s;
  }
}
class E0 extends to {
  constructor(t) {
    super(t, "FormatError");
  }
}
class Tn extends to {
  constructor(t) {
    super(t, "AbortException");
  }
}
function om(c) {
  (typeof c != "object" || (c == null ? void 0 : c.length) === void 0) && Tt("Invalid argument for bytesToString");
  const t = c.length, e = 8192;
  if (t < e)
    return String.fromCharCode.apply(null, c);
  const s = [];
  for (let i = 0; i < t; i += e) {
    const r = Math.min(i + e, t), a = c.subarray(i, r);
    s.push(String.fromCharCode.apply(null, a));
  }
  return s.join("");
}
function gd(c) {
  typeof c != "string" && Tt("Invalid argument for stringToBytes");
  const t = c.length, e = new Uint8Array(t);
  for (let s = 0; s < t; ++s)
    e[s] = c.charCodeAt(s) & 255;
  return e;
}
function _0(c) {
  return String.fromCharCode(c >> 24 & 255, c >> 16 & 255, c >> 8 & 255, c & 255);
}
function C0() {
  const c = new Uint8Array(4);
  return c[0] = 1, new Uint32Array(c.buffer, 0, 1)[0] === 1;
}
function T0() {
  try {
    return new Function(""), !0;
  } catch {
    return !1;
  }
}
class ge {
  static get isLittleEndian() {
    return et(this, "isLittleEndian", C0());
  }
  static get isEvalSupported() {
    return et(this, "isEvalSupported", T0());
  }
  static get isOffscreenCanvasSupported() {
    return et(this, "isOffscreenCanvasSupported", typeof OffscreenCanvas < "u");
  }
  static get isImageDecoderSupported() {
    return et(this, "isImageDecoderSupported", typeof ImageDecoder < "u");
  }
  static get platform() {
    const {
      platform: t,
      userAgent: e
    } = navigator;
    return et(this, "platform", {
      isAndroid: e.includes("Android"),
      isLinux: t.includes("Linux"),
      isMac: t.includes("Mac"),
      isWindows: t.includes("Win"),
      isFirefox: e.includes("Firefox")
    });
  }
  static get isCSSRoundSupported() {
    var t, e;
    return et(this, "isCSSRoundSupported", (e = (t = globalThis.CSS) == null ? void 0 : t.supports) == null ? void 0 : e.call(t, "width: round(1.5px, 1px)"));
  }
}
const rf = Array.from(Array(256).keys(), (c) => c.toString(16).padStart(2, "0"));
var _n, Fd, mf;
class W {
  static makeHexColor(t, e, s) {
    return `#${rf[t]}${rf[e]}${rf[s]}`;
  }
  static domMatrixToTransform(t) {
    return [t.a, t.b, t.c, t.d, t.e, t.f];
  }
  static scaleMinMax(t, e) {
    let s;
    t[0] ? (t[0] < 0 && (s = e[0], e[0] = e[2], e[2] = s), e[0] *= t[0], e[2] *= t[0], t[3] < 0 && (s = e[1], e[1] = e[3], e[3] = s), e[1] *= t[3], e[3] *= t[3]) : (s = e[0], e[0] = e[1], e[1] = s, s = e[2], e[2] = e[3], e[3] = s, t[1] < 0 && (s = e[1], e[1] = e[3], e[3] = s), e[1] *= t[1], e[3] *= t[1], t[2] < 0 && (s = e[0], e[0] = e[2], e[2] = s), e[0] *= t[2], e[2] *= t[2]), e[0] += t[4], e[1] += t[5], e[2] += t[4], e[3] += t[5];
  }
  static transform(t, e) {
    return [t[0] * e[0] + t[2] * e[1], t[1] * e[0] + t[3] * e[1], t[0] * e[2] + t[2] * e[3], t[1] * e[2] + t[3] * e[3], t[0] * e[4] + t[2] * e[5] + t[4], t[1] * e[4] + t[3] * e[5] + t[5]];
  }
  static multiplyByDOMMatrix(t, e) {
    return [t[0] * e.a + t[2] * e.b, t[1] * e.a + t[3] * e.b, t[0] * e.c + t[2] * e.d, t[1] * e.c + t[3] * e.d, t[0] * e.e + t[2] * e.f + t[4], t[1] * e.e + t[3] * e.f + t[5]];
  }
  static applyTransform(t, e, s = 0) {
    const i = t[s], r = t[s + 1];
    t[s] = i * e[0] + r * e[2] + e[4], t[s + 1] = i * e[1] + r * e[3] + e[5];
  }
  static applyTransformToBezier(t, e, s = 0) {
    const i = e[0], r = e[1], a = e[2], o = e[3], l = e[4], h = e[5];
    for (let d = 0; d < 6; d += 2) {
      const u = t[s + d], p = t[s + d + 1];
      t[s + d] = u * i + p * a + l, t[s + d + 1] = u * r + p * o + h;
    }
  }
  static applyInverseTransform(t, e) {
    const s = t[0], i = t[1], r = e[0] * e[3] - e[1] * e[2];
    t[0] = (s * e[3] - i * e[2] + e[2] * e[5] - e[4] * e[3]) / r, t[1] = (-s * e[1] + i * e[0] + e[4] * e[1] - e[5] * e[0]) / r;
  }
  static axialAlignedBoundingBox(t, e, s) {
    const i = e[0], r = e[1], a = e[2], o = e[3], l = e[4], h = e[5], d = t[0], u = t[1], p = t[2], b = t[3];
    let S = i * d + l, v = S, E = i * p + l, x = E, T = o * u + h, _ = T, f = o * b + h, m = f;
    if (r !== 0 || a !== 0) {
      const A = r * d, C = r * p, P = a * u, R = a * b;
      S += P, x += P, E += R, v += R, T += A, m += A, f += C, _ += C;
    }
    s[0] = Math.min(s[0], S, E, v, x), s[1] = Math.min(s[1], T, f, _, m), s[2] = Math.max(s[2], S, E, v, x), s[3] = Math.max(s[3], T, f, _, m);
  }
  static inverseTransform(t) {
    const e = t[0] * t[3] - t[1] * t[2];
    return [t[3] / e, -t[1] / e, -t[2] / e, t[0] / e, (t[2] * t[5] - t[4] * t[3]) / e, (t[4] * t[1] - t[5] * t[0]) / e];
  }
  static singularValueDecompose2dScale(t, e) {
    const s = t[0], i = t[1], r = t[2], a = t[3], o = s ** 2 + i ** 2, l = s * r + i * a, h = r ** 2 + a ** 2, d = (o + h) / 2, u = Math.sqrt(d ** 2 - (o * h - l ** 2));
    e[0] = Math.sqrt(d + u || 1), e[1] = Math.sqrt(d - u || 1);
  }
  static normalizeRect(t) {
    const e = t.slice(0);
    return t[0] > t[2] && (e[0] = t[2], e[2] = t[0]), t[1] > t[3] && (e[1] = t[3], e[3] = t[1]), e;
  }
  static intersect(t, e) {
    const s = Math.max(Math.min(t[0], t[2]), Math.min(e[0], e[2])), i = Math.min(Math.max(t[0], t[2]), Math.max(e[0], e[2]));
    if (s > i)
      return null;
    const r = Math.max(Math.min(t[1], t[3]), Math.min(e[1], e[3])), a = Math.min(Math.max(t[1], t[3]), Math.max(e[1], e[3]));
    return r > a ? null : [s, r, i, a];
  }
  static pointBoundingBox(t, e, s) {
    s[0] = Math.min(s[0], t), s[1] = Math.min(s[1], e), s[2] = Math.max(s[2], t), s[3] = Math.max(s[3], e);
  }
  static rectBoundingBox(t, e, s, i, r) {
    r[0] = Math.min(r[0], t, s), r[1] = Math.min(r[1], e, i), r[2] = Math.max(r[2], t, s), r[3] = Math.max(r[3], e, i);
  }
  static bezierBoundingBox(t, e, s, i, r, a, o, l, h) {
    h[0] = Math.min(h[0], t, o), h[1] = Math.min(h[1], e, l), h[2] = Math.max(h[2], t, o), h[3] = Math.max(h[3], e, l), w(this, _n, mf).call(this, t, s, r, o, e, i, a, l, 3 * (-t + 3 * (s - r) + o), 6 * (t - 2 * s + r), 3 * (s - t), h), w(this, _n, mf).call(this, t, s, r, o, e, i, a, l, 3 * (-e + 3 * (i - a) + l), 6 * (e - 2 * i + a), 3 * (i - e), h);
  }
}
_n = new WeakSet(), Fd = function(t, e, s, i, r, a, o, l, h, d) {
  if (h <= 0 || h >= 1)
    return;
  const u = 1 - h, p = h * h, b = p * h, S = u * (u * (u * t + 3 * h * e) + 3 * p * s) + b * i, v = u * (u * (u * r + 3 * h * a) + 3 * p * o) + b * l;
  d[0] = Math.min(d[0], S), d[1] = Math.min(d[1], v), d[2] = Math.max(d[2], S), d[3] = Math.max(d[3], v);
}, mf = function(t, e, s, i, r, a, o, l, h, d, u, p) {
  if (Math.abs(h) < 1e-12) {
    Math.abs(d) >= 1e-12 && w(this, _n, Fd).call(this, t, e, s, i, r, a, o, l, -u / d, p);
    return;
  }
  const b = d ** 2 - 4 * u * h;
  if (b < 0)
    return;
  const S = Math.sqrt(b), v = 2 * h;
  w(this, _n, Fd).call(this, t, e, s, i, r, a, o, l, (-d + S) / v, p), w(this, _n, Fd).call(this, t, e, s, i, r, a, o, l, (-d - S) / v, p);
}, y(W, _n);
function P0(c) {
  return decodeURIComponent(escape(c));
}
let af = null, gg = null;
function lm(c) {
  return af || (af = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu, gg = /* @__PURE__ */ new Map([["ﬅ", "ſt"]])), c.replaceAll(af, (t, e, s) => e ? e.normalize("NFKC") : gg.get(s));
}
function Wp() {
  if (typeof crypto.randomUUID == "function")
    return crypto.randomUUID();
  const c = new Uint8Array(32);
  return crypto.getRandomValues(c), om(c);
}
const jp = "pdfjs_internal_id_";
function R0(c, t, e) {
  if (!Array.isArray(e) || e.length < 2)
    return !1;
  const [s, i, ...r] = e;
  if (!c(s) && !Number.isInteger(s) || !t(i))
    return !1;
  const a = r.length;
  let o = !0;
  switch (i.name) {
    case "XYZ":
      if (a < 2 || a > 3)
        return !1;
      break;
    case "Fit":
    case "FitB":
      return a === 0;
    case "FitH":
    case "FitBH":
    case "FitV":
    case "FitBV":
      if (a > 1)
        return !1;
      break;
    case "FitR":
      if (a !== 4)
        return !1;
      o = !1;
      break;
    default:
      return !1;
  }
  for (const l of r)
    if (!(typeof l == "number" || o && l === null))
      return !1;
  return !0;
}
function Me(c, t, e) {
  return Math.min(Math.max(c, t), e);
}
function hm(c) {
  return Uint8Array.prototype.toBase64 ? c.toBase64() : btoa(om(c));
}
function k0(c) {
  return Uint8Array.fromBase64 ? Uint8Array.fromBase64(c) : gd(atob(c));
}
typeof Promise.try != "function" && (Promise.try = function(c, ...t) {
  return new Promise((e) => {
    e(c(...t));
  });
});
typeof Math.sumPrecise != "function" && (Math.sumPrecise = function(c) {
  return c.reduce((t, e) => t + e, 0);
});
class Ph {
  static textContent(t) {
    const e = [], s = {
      items: e,
      styles: /* @__PURE__ */ Object.create(null)
    };
    function i(r) {
      var l;
      if (!r)
        return;
      let a = null;
      const o = r.name;
      if (o === "#text")
        a = r.value;
      else if (Ph.shouldBuildText(o))
        (l = r == null ? void 0 : r.attributes) != null && l.textContent ? a = r.attributes.textContent : r.value && (a = r.value);
      else return;
      if (a !== null && e.push({
        str: a
      }), !!r.children)
        for (const h of r.children)
          i(h);
    }
    return i(t), s;
  }
  static shouldBuildText(t) {
    return !(t === "textarea" || t === "input" || t === "option" || t === "select");
  }
}
class Vp {
  static setupStorage(t, e, s, i, r) {
    const a = i.getValue(e, {
      value: null
    });
    switch (s.name) {
      case "textarea":
        if (a.value !== null && (t.textContent = a.value), r === "print")
          break;
        t.addEventListener("input", (o) => {
          i.setValue(e, {
            value: o.target.value
          });
        });
        break;
      case "input":
        if (s.attributes.type === "radio" || s.attributes.type === "checkbox") {
          if (a.value === s.attributes.xfaOn ? t.setAttribute("checked", !0) : a.value === s.attributes.xfaOff && t.removeAttribute("checked"), r === "print")
            break;
          t.addEventListener("change", (o) => {
            i.setValue(e, {
              value: o.target.checked ? o.target.getAttribute("xfaOn") : o.target.getAttribute("xfaOff")
            });
          });
        } else {
          if (a.value !== null && t.setAttribute("value", a.value), r === "print")
            break;
          t.addEventListener("input", (o) => {
            i.setValue(e, {
              value: o.target.value
            });
          });
        }
        break;
      case "select":
        if (a.value !== null) {
          t.setAttribute("value", a.value);
          for (const o of s.children)
            o.attributes.value === a.value ? o.attributes.selected = !0 : o.attributes.hasOwnProperty("selected") && delete o.attributes.selected;
        }
        t.addEventListener("input", (o) => {
          const l = o.target.options, h = l.selectedIndex === -1 ? "" : l[l.selectedIndex].value;
          i.setValue(e, {
            value: h
          });
        });
        break;
    }
  }
  static setAttributes({
    html: t,
    element: e,
    storage: s = null,
    intent: i,
    linkService: r
  }) {
    const {
      attributes: a
    } = e, o = t instanceof HTMLAnchorElement;
    a.type === "radio" && (a.name = `${a.name}-${i}`);
    for (const [l, h] of Object.entries(a))
      if (h != null)
        switch (l) {
          case "class":
            h.length && t.setAttribute(l, h.join(" "));
            break;
          case "dataId":
            break;
          case "id":
            t.setAttribute("data-element-id", h);
            break;
          case "style":
            Object.assign(t.style, h);
            break;
          case "textContent":
            t.textContent = h;
            break;
          default:
            (!o || l !== "href" && l !== "newWindow") && t.setAttribute(l, h);
        }
    o && r.addLinkAttributes(t, a.href, a.newWindow), s && a.dataId && this.setupStorage(t, a.dataId, e, s);
  }
  static render(t) {
    var u, p;
    const e = t.annotationStorage, s = t.linkService, i = t.xfaHtml, r = t.intent || "display", a = document.createElement(i.name);
    i.attributes && this.setAttributes({
      html: a,
      element: i,
      intent: r,
      linkService: s
    });
    const o = r !== "richText", l = t.div;
    if (l.append(a), t.viewport) {
      const b = `matrix(${t.viewport.transform.join(",")})`;
      l.style.transform = b;
    }
    o && l.setAttribute("class", "xfaLayer xfaFont");
    const h = [];
    if (i.children.length === 0) {
      if (i.value) {
        const b = document.createTextNode(i.value);
        a.append(b), o && Ph.shouldBuildText(i.name) && h.push(b);
      }
      return {
        textDivs: h
      };
    }
    const d = [[i, -1, a]];
    for (; d.length > 0; ) {
      const [b, S, v] = d.at(-1);
      if (S + 1 === b.children.length) {
        d.pop();
        continue;
      }
      const E = b.children[++d.at(-1)[1]];
      if (E === null)
        continue;
      const {
        name: x
      } = E;
      if (x === "#text") {
        const _ = document.createTextNode(E.value);
        h.push(_), v.append(_);
        continue;
      }
      const T = (u = E == null ? void 0 : E.attributes) != null && u.xmlns ? document.createElementNS(E.attributes.xmlns, x) : document.createElement(x);
      if (v.append(T), E.attributes && this.setAttributes({
        html: T,
        element: E,
        storage: e,
        intent: r,
        linkService: s
      }), ((p = E.children) == null ? void 0 : p.length) > 0)
        d.push([E, -1, T]);
      else if (E.value) {
        const _ = document.createTextNode(E.value);
        o && Ph.shouldBuildText(x) && h.push(_), T.append(_);
      }
    }
    for (const b of l.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea"))
      b.setAttribute("readOnly", !0);
    return {
      textDivs: h
    };
  }
  static update(t) {
    const e = `matrix(${t.viewport.transform.join(",")})`;
    t.div.style.transform = e, t.div.hidden = !1;
  }
}
const $i = "http://www.w3.org/2000/svg", Or = class Or {
};
N(Or, "CSS", 96), N(Or, "PDF", 72), N(Or, "PDF_TO_CSS_UNITS", Or.CSS / Or.PDF);
let Pn = Or;
async function Kl(c, t = "text") {
  if (ih(c, document.baseURI)) {
    const e = await fetch(c);
    if (!e.ok)
      throw new Error(e.statusText);
    switch (t) {
      case "arraybuffer":
        return e.arrayBuffer();
      case "blob":
        return e.blob();
      case "json":
        return e.json();
    }
    return e.text();
  }
  return new Promise((e, s) => {
    const i = new XMLHttpRequest();
    i.open("GET", c, !0), i.responseType = t, i.onreadystatechange = () => {
      if (i.readyState === XMLHttpRequest.DONE) {
        if (i.status === 200 || i.status === 0) {
          switch (t) {
            case "arraybuffer":
            case "blob":
            case "json":
              e(i.response);
              return;
          }
          e(i.responseText);
          return;
        }
        s(new Error(i.statusText));
      }
    }, i.send(null);
  });
}
class md {
  constructor({
    viewBox: t,
    userUnit: e,
    scale: s,
    rotation: i,
    offsetX: r = 0,
    offsetY: a = 0,
    dontFlip: o = !1
  }) {
    this.viewBox = t, this.userUnit = e, this.scale = s, this.rotation = i, this.offsetX = r, this.offsetY = a, s *= e;
    const l = (t[2] + t[0]) / 2, h = (t[3] + t[1]) / 2;
    let d, u, p, b;
    switch (i %= 360, i < 0 && (i += 360), i) {
      case 180:
        d = -1, u = 0, p = 0, b = 1;
        break;
      case 90:
        d = 0, u = 1, p = 1, b = 0;
        break;
      case 270:
        d = 0, u = -1, p = -1, b = 0;
        break;
      case 0:
        d = 1, u = 0, p = 0, b = -1;
        break;
      default:
        throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
    }
    o && (p = -p, b = -b);
    let S, v, E, x;
    d === 0 ? (S = Math.abs(h - t[1]) * s + r, v = Math.abs(l - t[0]) * s + a, E = (t[3] - t[1]) * s, x = (t[2] - t[0]) * s) : (S = Math.abs(l - t[0]) * s + r, v = Math.abs(h - t[1]) * s + a, E = (t[2] - t[0]) * s, x = (t[3] - t[1]) * s), this.transform = [d * s, u * s, p * s, b * s, S - d * s * l - p * s * h, v - u * s * l - b * s * h], this.width = E, this.height = x;
  }
  get rawDims() {
    const t = this.viewBox;
    return et(this, "rawDims", {
      pageWidth: t[2] - t[0],
      pageHeight: t[3] - t[1],
      pageX: t[0],
      pageY: t[1]
    });
  }
  clone({
    scale: t = this.scale,
    rotation: e = this.rotation,
    offsetX: s = this.offsetX,
    offsetY: i = this.offsetY,
    dontFlip: r = !1
  } = {}) {
    return new md({
      viewBox: this.viewBox.slice(),
      userUnit: this.userUnit,
      scale: t,
      rotation: e,
      offsetX: s,
      offsetY: i,
      dontFlip: r
    });
  }
  convertToViewportPoint(t, e) {
    const s = [t, e];
    return W.applyTransform(s, this.transform), s;
  }
  convertToViewportRectangle(t) {
    const e = [t[0], t[1]];
    W.applyTransform(e, this.transform);
    const s = [t[2], t[3]];
    return W.applyTransform(s, this.transform), [e[0], e[1], s[0], s[1]];
  }
  convertToPdfPoint(t, e) {
    const s = [t, e];
    return W.applyInverseTransform(s, this.transform), s;
  }
}
class Vu extends to {
  constructor(t, e = 0) {
    super(t, "RenderingCancelledException"), this.extraDelay = e;
  }
}
function bd(c) {
  const t = c.length;
  let e = 0;
  for (; e < t && c[e].trim() === ""; )
    e++;
  return c.substring(e, e + 5).toLowerCase() === "data:";
}
function qu(c) {
  return typeof c == "string" && /\.pdf$/i.test(c);
}
function cm(c) {
  return [c] = c.split(/[#?]/, 1), c.substring(c.lastIndexOf("/") + 1);
}
function dm(c, t = "document.pdf") {
  if (typeof c != "string")
    return t;
  if (bd(c))
    return J('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'), t;
  const s = ((o) => {
    try {
      return new URL(o);
    } catch {
      try {
        return new URL(decodeURIComponent(o));
      } catch {
        try {
          return new URL(o, "https://foo.bar");
        } catch {
          try {
            return new URL(decodeURIComponent(o), "https://foo.bar");
          } catch {
            return null;
          }
        }
      }
    }
  })(c);
  if (!s)
    return t;
  const i = (o) => {
    try {
      let l = decodeURIComponent(o);
      return l.includes("/") ? (l = l.split("/").at(-1), l.test(/^\.pdf$/i) ? l : o) : l;
    } catch {
      return o;
    }
  }, r = /\.pdf$/i, a = s.pathname.split("/").at(-1);
  if (r.test(a))
    return i(a);
  if (s.searchParams.size > 0) {
    const o = Array.from(s.searchParams.values()).reverse();
    for (const h of o)
      if (r.test(h))
        return i(h);
    const l = Array.from(s.searchParams.keys()).reverse();
    for (const h of l)
      if (r.test(h))
        return i(h);
  }
  if (s.hash) {
    const l = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i.exec(s.hash);
    if (l)
      return i(l[0]);
  }
  return t;
}
class mg {
  constructor() {
    N(this, "started", /* @__PURE__ */ Object.create(null));
    N(this, "times", []);
  }
  time(t) {
    t in this.started && J(`Timer is already running for ${t}`), this.started[t] = Date.now();
  }
  timeEnd(t) {
    t in this.started || J(`Timer has not been started for ${t}`), this.times.push({
      name: t,
      start: this.started[t],
      end: Date.now()
    }), delete this.started[t];
  }
  toString() {
    const t = [];
    let e = 0;
    for (const {
      name: s
    } of this.times)
      e = Math.max(s.length, e);
    for (const {
      name: s,
      start: i,
      end: r
    } of this.times)
      t.push(`${s.padEnd(e)} ${r - i}ms
`);
    return t.join("");
  }
}
function ih(c, t) {
  const e = t ? URL.parse(c, t) : URL.parse(c);
  return (e == null ? void 0 : e.protocol) === "http:" || (e == null ? void 0 : e.protocol) === "https:";
}
function _s(c) {
  c.preventDefault();
}
function Ut(c) {
  c.preventDefault(), c.stopPropagation();
}
function L0(c) {
  console.log("Deprecated API usage: " + c);
}
var Ih;
class Rh {
  static toDateObject(t) {
    if (t instanceof Date)
      return t;
    if (!t || typeof t != "string")
      return null;
    n(this, Ih) || g(this, Ih, new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"));
    const e = n(this, Ih).exec(t);
    if (!e)
      return null;
    const s = parseInt(e[1], 10);
    let i = parseInt(e[2], 10);
    i = i >= 1 && i <= 12 ? i - 1 : 0;
    let r = parseInt(e[3], 10);
    r = r >= 1 && r <= 31 ? r : 1;
    let a = parseInt(e[4], 10);
    a = a >= 0 && a <= 23 ? a : 0;
    let o = parseInt(e[5], 10);
    o = o >= 0 && o <= 59 ? o : 0;
    let l = parseInt(e[6], 10);
    l = l >= 0 && l <= 59 ? l : 0;
    const h = e[7] || "Z";
    let d = parseInt(e[8], 10);
    d = d >= 0 && d <= 23 ? d : 0;
    let u = parseInt(e[9], 10) || 0;
    return u = u >= 0 && u <= 59 ? u : 0, h === "-" ? (a += d, o += u) : h === "+" && (a -= d, o -= u), new Date(Date.UTC(s, i, r, a, o, l));
  }
}
Ih = new WeakMap(), y(Rh, Ih);
function um(c, {
  scale: t = 1,
  rotation: e = 0
}) {
  const {
    width: s,
    height: i
  } = c.attributes.style, r = [0, 0, parseInt(s), parseInt(i)];
  return new md({
    viewBox: r,
    userUnit: 1,
    scale: t,
    rotation: e
  });
}
function Zl(c) {
  if (c.startsWith("#")) {
    const t = parseInt(c.slice(1), 16);
    return [(t & 16711680) >> 16, (t & 65280) >> 8, t & 255];
  }
  return c.startsWith("rgb(") ? c.slice(4, -1).split(",").map((t) => parseInt(t)) : c.startsWith("rgba(") ? c.slice(5, -1).split(",").map((t) => parseInt(t)).slice(0, 3) : (J(`Not a valid color format: "${c}"`), [0, 0, 0]);
}
function D0(c) {
  const t = document.createElement("span");
  t.style.visibility = "hidden", t.style.colorScheme = "only light", document.body.append(t);
  for (const e of c.keys()) {
    t.style.color = e;
    const s = window.getComputedStyle(t).color;
    c.set(e, Zl(s));
  }
  t.remove();
}
function Ht(c) {
  const {
    a: t,
    b: e,
    c: s,
    d: i,
    e: r,
    f: a
  } = c.getTransform();
  return [t, e, s, i, r, a];
}
function li(c) {
  const {
    a: t,
    b: e,
    c: s,
    d: i,
    e: r,
    f: a
  } = c.getTransform().invertSelf();
  return [t, e, s, i, r, a];
}
function Rr(c, t, e = !1, s = !0) {
  if (t instanceof md) {
    const {
      pageWidth: i,
      pageHeight: r
    } = t.rawDims, {
      style: a
    } = c, o = ge.isCSSRoundSupported, l = `var(--total-scale-factor) * ${i}px`, h = `var(--total-scale-factor) * ${r}px`, d = o ? `round(down, ${l}, var(--scale-round-x))` : `calc(${l})`, u = o ? `round(down, ${h}, var(--scale-round-y))` : `calc(${h})`;
    !e || t.rotation % 180 === 0 ? (a.width = d, a.height = u) : (a.width = u, a.height = d);
  }
  s && c.setAttribute("data-main-rotation", t.rotation);
}
class ri {
  constructor() {
    const {
      pixelRatio: t
    } = ri;
    this.sx = t, this.sy = t;
  }
  get scaled() {
    return this.sx !== 1 || this.sy !== 1;
  }
  get symmetric() {
    return this.sx === this.sy;
  }
  limitCanvas(t, e, s, i, r = -1) {
    let a = 1 / 0, o = 1 / 0, l = 1 / 0;
    s = ri.capPixels(s, r), s > 0 && (a = Math.sqrt(s / (t * e))), i !== -1 && (o = i / t, l = i / e);
    const h = Math.min(a, o, l);
    return this.sx > h || this.sy > h ? (this.sx = h, this.sy = h, !0) : !1;
  }
  static get pixelRatio() {
    return globalThis.devicePixelRatio || 1;
  }
  static capPixels(t, e) {
    if (e >= 0) {
      const s = Math.ceil(window.screen.availWidth * window.screen.availHeight * this.pixelRatio ** 2 * (1 + e / 100));
      return t > 0 ? Math.min(t, s) : s;
    }
    return t;
  }
}
const pu = ["image/apng", "image/avif", "image/bmp", "image/gif", "image/jpeg", "image/png", "image/svg+xml", "image/webp", "image/x-icon"];
class M0 {
  static get isDarkMode() {
    var t;
    return et(this, "isDarkMode", !!((t = window == null ? void 0 : window.matchMedia) != null && t.call(window, "(prefers-color-scheme: dark)").matches));
  }
}
class fm {
  static get commentForegroundColor() {
    const t = document.createElement("span");
    t.classList.add("comment", "sidebar");
    const {
      style: e
    } = t;
    e.width = e.height = "0", e.display = "none", e.color = "var(--comment-fg-color)", document.body.append(t);
    const {
      color: s
    } = window.getComputedStyle(t);
    return t.remove(), et(this, "commentForegroundColor", Zl(s));
  }
}
function pm(c, t, e, s) {
  s = Math.min(Math.max(s ?? 1, 0), 1);
  const i = 255 * (1 - s);
  return c = Math.round(c * s + i), t = Math.round(t * s + i), e = Math.round(e * s + i), [c, t, e];
}
function bg(c, t) {
  const e = c[0] / 255, s = c[1] / 255, i = c[2] / 255, r = Math.max(e, s, i), a = Math.min(e, s, i), o = (r + a) / 2;
  if (r === a)
    t[0] = t[1] = 0;
  else {
    const l = r - a;
    switch (t[1] = o < 0.5 ? l / (r + a) : l / (2 - r - a), r) {
      case e:
        t[0] = ((s - i) / l + (s < i ? 6 : 0)) * 60;
        break;
      case s:
        t[0] = ((i - e) / l + 2) * 60;
        break;
      case i:
        t[0] = ((e - s) / l + 4) * 60;
        break;
    }
  }
  t[2] = o;
}
function bf(c, t) {
  const e = c[0], s = c[1], i = c[2], r = (1 - Math.abs(2 * i - 1)) * s, a = r * (1 - Math.abs(e / 60 % 2 - 1)), o = i - r / 2;
  switch (Math.floor(e / 60)) {
    case 0:
      t[0] = r + o, t[1] = a + o, t[2] = o;
      break;
    case 1:
      t[0] = a + o, t[1] = r + o, t[2] = o;
      break;
    case 2:
      t[0] = o, t[1] = r + o, t[2] = a + o;
      break;
    case 3:
      t[0] = o, t[1] = a + o, t[2] = r + o;
      break;
    case 4:
      t[0] = a + o, t[1] = o, t[2] = r + o;
      break;
    case 5:
    case 6:
      t[0] = r + o, t[1] = o, t[2] = a + o;
      break;
  }
}
function yg(c) {
  return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
}
function wg(c, t, e) {
  bf(c, e), e.map(yg);
  const s = 0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2];
  bf(t, e), e.map(yg);
  const i = 0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2];
  return s > i ? (s + 0.05) / (i + 0.05) : (i + 0.05) / (s + 0.05);
}
const Ag = /* @__PURE__ */ new Map();
function gm(c, t) {
  const e = c[0] + c[1] * 256 + c[2] * 65536 + t[0] * 16777216 + t[1] * 4294967296 + t[2] * 1099511627776;
  let s = Ag.get(e);
  if (s)
    return s;
  const i = new Float32Array(9), r = i.subarray(0, 3), a = i.subarray(3, 6);
  bg(c, a);
  const o = i.subarray(6, 9);
  bg(t, o);
  const l = o[2] < 0.5, h = l ? 12 : 4.5;
  if (a[2] = l ? Math.sqrt(a[2]) : 1 - Math.sqrt(1 - a[2]), wg(a, o, r) < h) {
    let d, u;
    l ? (d = a[2], u = 1) : (d = 0, u = a[2]);
    const p = 5e-3;
    for (; u - d > p; ) {
      const b = a[2] = (d + u) / 2;
      l === wg(a, o, r) < h ? d = b : u = b;
    }
    a[2] = l ? u : d;
  }
  return bf(a, r), s = W.makeHexColor(Math.round(r[0] * 255), Math.round(r[1] * 255), Math.round(r[2] * 255)), Ag.set(e, s), s;
}
function qp({
  html: c,
  dir: t,
  className: e
}, s) {
  const i = document.createDocumentFragment();
  if (typeof c == "string") {
    const r = document.createElement("p");
    r.dir = t || "auto";
    const a = c.split(/(?:\r\n?|\n)/);
    for (let o = 0, l = a.length; o < l; ++o) {
      const h = a[o];
      r.append(document.createTextNode(h)), o < l - 1 && r.append(document.createElement("br"));
    }
    i.append(r);
  } else
    Vp.render({
      xfaHtml: c,
      div: i,
      intent: "richText"
    });
  i.firstChild.classList.add("richText", e), s.append(i);
}
var Fn, Nn, Ps, Rs, Fh, On, vo, So, Nh, _u, mm, Ee, bm, ym, ro, nh;
const zi = class zi {
  constructor(t) {
    y(this, Ee);
    y(this, Fn, null);
    y(this, Nn, null);
    y(this, Ps);
    y(this, Rs, null);
    y(this, Fh, null);
    y(this, On, null);
    y(this, vo, null);
    y(this, So, null);
    g(this, Ps, t), n(zi, Nh) || g(zi, Nh, Object.freeze({
      freetext: "pdfjs-editor-remove-freetext-button",
      highlight: "pdfjs-editor-remove-highlight-button",
      ink: "pdfjs-editor-remove-ink-button",
      stamp: "pdfjs-editor-remove-stamp-button",
      signature: "pdfjs-editor-remove-signature-button"
    }));
  }
  render() {
    const t = g(this, Fn, document.createElement("div"));
    t.classList.add("editToolbar", "hidden"), t.setAttribute("role", "toolbar");
    const e = n(this, Ps)._uiManager._signal;
    e instanceof AbortSignal && !e.aborted && (t.addEventListener("contextmenu", _s, {
      signal: e
    }), t.addEventListener("pointerdown", w(zi, _u, mm), {
      signal: e
    }));
    const s = g(this, Rs, document.createElement("div"));
    s.className = "buttons", t.append(s);
    const i = n(this, Ps).toolbarPosition;
    if (i) {
      const {
        style: r
      } = t, a = n(this, Ps)._uiManager.direction === "ltr" ? 1 - i[0] : i[0];
      r.insetInlineEnd = `${100 * a}%`, r.top = `calc(${100 * i[1]}% + var(--editor-toolbar-vert-offset))`;
    }
    return t;
  }
  get div() {
    return n(this, Fn);
  }
  hide() {
    var t;
    n(this, Fn).classList.add("hidden"), (t = n(this, Nn)) == null || t.hideDropdown();
  }
  show() {
    var t, e;
    n(this, Fn).classList.remove("hidden"), (t = n(this, Fh)) == null || t.shown(), (e = n(this, On)) == null || e.shown();
  }
  addDeleteButton() {
    const {
      editorType: t,
      _uiManager: e
    } = n(this, Ps), s = document.createElement("button");
    s.classList.add("basic", "deleteButton"), s.tabIndex = 0, s.setAttribute("data-l10n-id", n(zi, Nh)[t]), w(this, Ee, ro).call(this, s) && s.addEventListener("click", (i) => {
      e.delete();
    }, {
      signal: e._signal
    }), n(this, Rs).append(s);
  }
  async addAltText(t) {
    const e = await t.render();
    w(this, Ee, ro).call(this, e), n(this, Rs).append(e, n(this, Ee, nh)), g(this, Fh, t);
  }
  addComment(t, e = null) {
    if (n(this, On))
      return;
    const s = t.renderForToolbar();
    if (!s)
      return;
    w(this, Ee, ro).call(this, s);
    const i = g(this, vo, n(this, Ee, nh));
    e ? (n(this, Rs).insertBefore(s, e), n(this, Rs).insertBefore(i, e)) : n(this, Rs).append(s, i), g(this, On, t), t.toolbar = this;
  }
  addColorPicker(t) {
    if (n(this, Nn))
      return;
    g(this, Nn, t);
    const e = t.renderButton();
    w(this, Ee, ro).call(this, e), n(this, Rs).append(e, n(this, Ee, nh));
  }
  async addEditSignatureButton(t) {
    const e = g(this, So, await t.renderEditButton(n(this, Ps)));
    w(this, Ee, ro).call(this, e), n(this, Rs).append(e, n(this, Ee, nh));
  }
  removeButton(t) {
    var e, s;
    switch (t) {
      case "comment":
        (e = n(this, On)) == null || e.removeToolbarCommentButton(), g(this, On, null), (s = n(this, vo)) == null || s.remove(), g(this, vo, null);
        break;
    }
  }
  async addButton(t, e) {
    switch (t) {
      case "colorPicker":
        this.addColorPicker(e);
        break;
      case "altText":
        await this.addAltText(e);
        break;
      case "editSignature":
        await this.addEditSignatureButton(e);
        break;
      case "delete":
        this.addDeleteButton();
        break;
      case "comment":
        this.addComment(e);
        break;
    }
  }
  async addButtonBefore(t, e, s) {
    const i = n(this, Rs).querySelector(s);
    i && t === "comment" && this.addComment(e, i);
  }
  updateEditSignatureButton(t) {
    n(this, So) && (n(this, So).title = t);
  }
  remove() {
    var t;
    n(this, Fn).remove(), (t = n(this, Nn)) == null || t.destroy(), g(this, Nn, null);
  }
};
Fn = new WeakMap(), Nn = new WeakMap(), Ps = new WeakMap(), Rs = new WeakMap(), Fh = new WeakMap(), On = new WeakMap(), vo = new WeakMap(), So = new WeakMap(), Nh = new WeakMap(), _u = new WeakSet(), mm = function(t) {
  t.stopPropagation();
}, Ee = new WeakSet(), bm = function(t) {
  n(this, Ps)._focusEventsAllowed = !1, Ut(t);
}, ym = function(t) {
  n(this, Ps)._focusEventsAllowed = !0, Ut(t);
}, ro = function(t) {
  const e = n(this, Ps)._uiManager._signal;
  return !(e instanceof AbortSignal) || e.aborted ? !1 : (t.addEventListener("focusin", w(this, Ee, bm).bind(this), {
    capture: !0,
    signal: e
  }), t.addEventListener("focusout", w(this, Ee, ym).bind(this), {
    capture: !0,
    signal: e
  }), t.addEventListener("contextmenu", _s, {
    signal: e
  }), !0);
}, nh = function() {
  const t = document.createElement("div");
  return t.className = "divider", t;
}, y(zi, _u), y(zi, Nh, null);
let yf = zi;
var Oh, Hr, Wi, Rn, wm, Am, wf;
class I0 {
  constructor(t) {
    y(this, Rn);
    y(this, Oh, null);
    y(this, Hr, null);
    y(this, Wi);
    g(this, Wi, t);
  }
  show(t, e, s) {
    const [i, r] = w(this, Rn, Am).call(this, e, s), {
      style: a
    } = n(this, Hr) || g(this, Hr, w(this, Rn, wm).call(this));
    t.append(n(this, Hr)), a.insetInlineEnd = `${100 * i}%`, a.top = `calc(${100 * r}% + var(--editor-toolbar-vert-offset))`;
  }
  hide() {
    n(this, Hr).remove();
  }
}
Oh = new WeakMap(), Hr = new WeakMap(), Wi = new WeakMap(), Rn = new WeakSet(), wm = function() {
  const t = g(this, Hr, document.createElement("div"));
  t.className = "editToolbar", t.setAttribute("role", "toolbar");
  const e = n(this, Wi)._signal;
  e instanceof AbortSignal && !e.aborted && t.addEventListener("contextmenu", _s, {
    signal: e
  });
  const s = g(this, Oh, document.createElement("div"));
  return s.className = "buttons", t.append(s), n(this, Wi).hasCommentManager() && w(this, Rn, wf).call(this, "commentButton", "pdfjs-comment-floating-button", "pdfjs-comment-floating-button-label", () => {
    n(this, Wi).commentSelection("floating_button");
  }), w(this, Rn, wf).call(this, "highlightButton", "pdfjs-highlight-floating-button1", "pdfjs-highlight-floating-button-label", () => {
    n(this, Wi).highlightSelection("floating_button");
  }), t;
}, Am = function(t, e) {
  let s = 0, i = 0;
  for (const r of t) {
    const a = r.y + r.height;
    if (a < s)
      continue;
    const o = r.x + (e ? r.width : 0);
    if (a > s) {
      i = o, s = a;
      continue;
    }
    e ? o > i && (i = o) : o < i && (i = o);
  }
  return [e ? 1 - i : i, s];
}, wf = function(t, e, s, i) {
  const r = document.createElement("button");
  r.classList.add("basic", t), r.tabIndex = 0, r.setAttribute("data-l10n-id", e);
  const a = document.createElement("span");
  r.append(a), a.className = "visuallyHidden", a.setAttribute("data-l10n-id", s);
  const o = n(this, Wi)._signal;
  o instanceof AbortSignal && !o.aborted && (r.addEventListener("contextmenu", _s, {
    signal: o
  }), r.addEventListener("click", i, {
    signal: o
  })), n(this, Oh).append(r);
};
function vm(c, t, e) {
  for (const s of e)
    t.addEventListener(s, c[s].bind(c));
}
var Cu;
class F0 {
  constructor() {
    y(this, Cu, 0);
  }
  get id() {
    return `${Ch}${ie(this, Cu)._++}`;
  }
}
Cu = new WeakMap();
var xo, Bh, Te, Eo, Nd;
const rg = class rg {
  constructor() {
    y(this, Eo);
    y(this, xo, Wp());
    y(this, Bh, 0);
    y(this, Te, null);
  }
  static get _isSVGFittingCanvas() {
    const t = 'data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>', s = new OffscreenCanvas(1, 3).getContext("2d", {
      willReadFrequently: !0
    }), i = new Image();
    i.src = t;
    const r = i.decode().then(() => (s.drawImage(i, 0, 0, 1, 1, 0, 0, 1, 3), new Uint32Array(s.getImageData(0, 0, 1, 1).data.buffer)[0] === 0));
    return et(this, "_isSVGFittingCanvas", r);
  }
  async getFromFile(t) {
    const {
      lastModified: e,
      name: s,
      size: i,
      type: r
    } = t;
    return w(this, Eo, Nd).call(this, `${e}_${s}_${i}_${r}`, t);
  }
  async getFromUrl(t) {
    return w(this, Eo, Nd).call(this, t, t);
  }
  async getFromBlob(t, e) {
    const s = await e;
    return w(this, Eo, Nd).call(this, t, s);
  }
  async getFromId(t) {
    n(this, Te) || g(this, Te, /* @__PURE__ */ new Map());
    const e = n(this, Te).get(t);
    if (!e)
      return null;
    if (e.bitmap)
      return e.refCounter += 1, e;
    if (e.file)
      return this.getFromFile(e.file);
    if (e.blobPromise) {
      const {
        blobPromise: s
      } = e;
      return delete e.blobPromise, this.getFromBlob(e.id, s);
    }
    return this.getFromUrl(e.url);
  }
  getFromCanvas(t, e) {
    n(this, Te) || g(this, Te, /* @__PURE__ */ new Map());
    let s = n(this, Te).get(t);
    if (s != null && s.bitmap)
      return s.refCounter += 1, s;
    const i = new OffscreenCanvas(e.width, e.height);
    return i.getContext("2d").drawImage(e, 0, 0), s = {
      bitmap: i.transferToImageBitmap(),
      id: `image_${n(this, xo)}_${ie(this, Bh)._++}`,
      refCounter: 1,
      isSvg: !1
    }, n(this, Te).set(t, s), n(this, Te).set(s.id, s), s;
  }
  getSvgUrl(t) {
    const e = n(this, Te).get(t);
    return e != null && e.isSvg ? e.svgUrl : null;
  }
  deleteId(t) {
    var i;
    n(this, Te) || g(this, Te, /* @__PURE__ */ new Map());
    const e = n(this, Te).get(t);
    if (!e || (e.refCounter -= 1, e.refCounter !== 0))
      return;
    const {
      bitmap: s
    } = e;
    if (!e.url && !e.file) {
      const r = new OffscreenCanvas(s.width, s.height);
      r.getContext("bitmaprenderer").transferFromImageBitmap(s), e.blobPromise = r.convertToBlob();
    }
    (i = s.close) == null || i.call(s), e.bitmap = null;
  }
  isValidId(t) {
    return t.startsWith(`image_${n(this, xo)}_`);
  }
};
xo = new WeakMap(), Bh = new WeakMap(), Te = new WeakMap(), Eo = new WeakSet(), Nd = async function(t, e) {
  n(this, Te) || g(this, Te, /* @__PURE__ */ new Map());
  let s = n(this, Te).get(t);
  if (s === null)
    return null;
  if (s != null && s.bitmap)
    return s.refCounter += 1, s;
  try {
    s || (s = {
      bitmap: null,
      id: `image_${n(this, xo)}_${ie(this, Bh)._++}`,
      refCounter: 0,
      isSvg: !1
    });
    let i;
    if (typeof e == "string" ? (s.url = e, i = await Kl(e, "blob")) : e instanceof File ? i = s.file = e : e instanceof Blob && (i = e), i.type === "image/svg+xml") {
      const r = rg._isSVGFittingCanvas, a = new FileReader(), o = new Image(), l = new Promise((h, d) => {
        o.onload = () => {
          s.bitmap = o, s.isSvg = !0, h();
        }, a.onload = async () => {
          const u = s.svgUrl = a.result;
          o.src = await r ? `${u}#svgView(preserveAspectRatio(none))` : u;
        }, o.onerror = a.onerror = d;
      });
      a.readAsDataURL(i), await l;
    } else
      s.bitmap = await createImageBitmap(i);
    s.refCounter = 1;
  } catch (i) {
    J(i), s = null;
  }
  return n(this, Te).set(t, s), s && n(this, Te).set(s.id, s), s;
};
let Af = rg;
var Kt, Bn, $h, $t;
class N0 {
  constructor(t = 128) {
    y(this, Kt, []);
    y(this, Bn, !1);
    y(this, $h);
    y(this, $t, -1);
    g(this, $h, t);
  }
  add({
    cmd: t,
    undo: e,
    post: s,
    mustExec: i,
    type: r = NaN,
    overwriteIfSameType: a = !1,
    keepUndo: o = !1
  }) {
    if (i && t(), n(this, Bn))
      return;
    const l = {
      cmd: t,
      undo: e,
      post: s,
      type: r
    };
    if (n(this, $t) === -1) {
      n(this, Kt).length > 0 && (n(this, Kt).length = 0), g(this, $t, 0), n(this, Kt).push(l);
      return;
    }
    if (a && n(this, Kt)[n(this, $t)].type === r) {
      o && (l.undo = n(this, Kt)[n(this, $t)].undo), n(this, Kt)[n(this, $t)] = l;
      return;
    }
    const h = n(this, $t) + 1;
    h === n(this, $h) ? n(this, Kt).splice(0, 1) : (g(this, $t, h), h < n(this, Kt).length && n(this, Kt).splice(h)), n(this, Kt).push(l);
  }
  undo() {
    if (n(this, $t) === -1)
      return;
    g(this, Bn, !0);
    const {
      undo: t,
      post: e
    } = n(this, Kt)[n(this, $t)];
    t(), e == null || e(), g(this, Bn, !1), g(this, $t, n(this, $t) - 1);
  }
  redo() {
    if (n(this, $t) < n(this, Kt).length - 1) {
      g(this, $t, n(this, $t) + 1), g(this, Bn, !0);
      const {
        cmd: t,
        post: e
      } = n(this, Kt)[n(this, $t)];
      t(), e == null || e(), g(this, Bn, !1);
    }
  }
  hasSomethingToUndo() {
    return n(this, $t) !== -1;
  }
  hasSomethingToRedo() {
    return n(this, $t) < n(this, Kt).length - 1;
  }
  cleanType(t) {
    if (n(this, $t) !== -1) {
      for (let e = n(this, $t); e >= 0; e--)
        if (n(this, Kt)[e].type !== t) {
          n(this, Kt).splice(e + 1, n(this, $t) - e), g(this, $t, e);
          return;
        }
      n(this, Kt).length = 0, g(this, $t, -1);
    }
  }
  destroy() {
    g(this, Kt, null);
  }
}
Kt = new WeakMap(), Bn = new WeakMap(), $h = new WeakMap(), $t = new WeakMap();
var Tu, Sm;
class yd {
  constructor(t) {
    y(this, Tu);
    this.buffer = [], this.callbacks = /* @__PURE__ */ new Map(), this.allKeys = /* @__PURE__ */ new Set();
    const {
      isMac: e
    } = ge.platform;
    for (const [s, i, r = {}] of t)
      for (const a of s) {
        const o = a.startsWith("mac+");
        e && o ? (this.callbacks.set(a.slice(4), {
          callback: i,
          options: r
        }), this.allKeys.add(a.split("+").at(-1))) : !e && !o && (this.callbacks.set(a, {
          callback: i,
          options: r
        }), this.allKeys.add(a.split("+").at(-1)));
      }
  }
  exec(t, e) {
    if (!this.allKeys.has(e.key))
      return;
    const s = this.callbacks.get(w(this, Tu, Sm).call(this, e));
    if (!s)
      return;
    const {
      callback: i,
      options: {
        bubbles: r = !1,
        args: a = [],
        checker: o = null
      }
    } = s;
    o && !o(t, e) || (i.bind(t, ...a, e)(), r || Ut(e));
  }
}
Tu = new WeakSet(), Sm = function(t) {
  t.altKey && this.buffer.push("alt"), t.ctrlKey && this.buffer.push("ctrl"), t.metaKey && this.buffer.push("meta"), t.shiftKey && this.buffer.push("shift"), this.buffer.push(t.key);
  const e = this.buffer.join("+");
  return this.buffer.length = 0, e;
};
const Pu = class Pu {
  get _colors() {
    const t = /* @__PURE__ */ new Map([["CanvasText", null], ["Canvas", null]]);
    return D0(t), et(this, "_colors", t);
  }
  convert(t) {
    const e = Zl(t);
    if (!window.matchMedia("(forced-colors: active)").matches)
      return e;
    for (const [s, i] of this._colors)
      if (i.every((r, a) => r === e[a]))
        return Pu._colorsMapping.get(s);
    return e;
  }
  getHexCode(t) {
    const e = this._colors.get(t);
    return e ? W.makeHexColor(...e) : t;
  }
};
N(Pu, "_colorsMapping", /* @__PURE__ */ new Map([["CanvasText", [0, 0, 0]], ["Canvas", [255, 255, 255]]]));
let vf = Pu;
var _o, ns, Co, Gt, re, To, ks, Po, Ls, Pe, $n, Hn, Ro, Un, di, Ds, Ur, Hh, Uh, ko, zh, ui, zn, Lo, Gn, fi, Ru, Wn, Do, Gh, jn, zr, Mo, Vn, Wh, te, gt, ji, qn, Xn, jh, Io, Vh, Yn, pi, Vi, qh, Xh, Ms, $, Od, Sf, xm, Em, rh, _m, Cm, Tm, xf, Pm, Ef, _f, Rm, Ne, Hi, km, Lm, Cf, Dm, ah, Tf;
const po = class po {
  constructor(t, e, s, i, r, a, o, l, h, d, u, p, b, S, v, E) {
    y(this, $);
    y(this, _o, new AbortController());
    y(this, ns, null);
    y(this, Co, null);
    y(this, Gt, /* @__PURE__ */ new Map());
    y(this, re, /* @__PURE__ */ new Map());
    y(this, To, null);
    y(this, ks, null);
    y(this, Po, null);
    y(this, Ls, new N0());
    y(this, Pe, null);
    y(this, $n, null);
    y(this, Hn, null);
    y(this, Ro, 0);
    y(this, Un, /* @__PURE__ */ new Set());
    y(this, di, null);
    y(this, Ds, null);
    y(this, Ur, /* @__PURE__ */ new Set());
    N(this, "_editorUndoBar", null);
    y(this, Hh, !1);
    y(this, Uh, !1);
    y(this, ko, !1);
    y(this, zh, null);
    y(this, ui, null);
    y(this, zn, null);
    y(this, Lo, null);
    y(this, Gn, !1);
    y(this, fi, null);
    y(this, Ru, new F0());
    y(this, Wn, !1);
    y(this, Do, !1);
    y(this, Gh, !1);
    y(this, jn, null);
    y(this, zr, null);
    y(this, Mo, null);
    y(this, Vn, null);
    y(this, Wh, null);
    y(this, te, Z.NONE);
    y(this, gt, /* @__PURE__ */ new Set());
    y(this, ji, null);
    y(this, qn, null);
    y(this, Xn, null);
    y(this, jh, null);
    y(this, Io, null);
    y(this, Vh, {
      isEditing: !1,
      isEmpty: !0,
      hasSomethingToUndo: !1,
      hasSomethingToRedo: !1,
      hasSelectedEditor: !1,
      hasSelectedText: !1
    });
    y(this, Yn, [0, 0]);
    y(this, pi, null);
    y(this, Vi, null);
    y(this, qh, null);
    y(this, Xh, null);
    y(this, Ms, null);
    const x = this._signal = n(this, _o).signal;
    g(this, Vi, t), g(this, qh, e), g(this, Xh, s), g(this, To, i), g(this, Pe, r), g(this, qn, a), g(this, Io, l), this._eventBus = o, o._on("editingaction", this.onEditingAction.bind(this), {
      signal: x
    }), o._on("pagechanging", this.onPageChanging.bind(this), {
      signal: x
    }), o._on("scalechanging", this.onScaleChanging.bind(this), {
      signal: x
    }), o._on("rotationchanging", this.onRotationChanging.bind(this), {
      signal: x
    }), o._on("setpreference", this.onSetPreference.bind(this), {
      signal: x
    }), o._on("switchannotationeditorparams", (T) => this.updateParams(T.type, T.value), {
      signal: x
    }), window.addEventListener("pointerdown", () => {
      g(this, Do, !0);
    }, {
      capture: !0,
      signal: x
    }), window.addEventListener("pointerup", () => {
      g(this, Do, !1);
    }, {
      capture: !0,
      signal: x
    }), w(this, $, _m).call(this), w(this, $, Rm).call(this), w(this, $, xf).call(this), g(this, ks, l.annotationStorage), g(this, zh, l.filterFactory), g(this, Xn, h), g(this, Lo, d || null), g(this, Hh, u), g(this, Uh, p), g(this, ko, b), g(this, Wh, S || null), this.viewParameters = {
      realScale: Pn.PDF_TO_CSS_UNITS,
      rotation: 0
    }, this.isShiftKeyDown = !1, this._editorUndoBar = v || null, this._supportsPinchToZoom = E !== !1, r == null || r.setSidebarUiManager(this);
  }
  static get _keyboardManager() {
    const t = po.prototype, e = (a) => n(a, Vi).contains(document.activeElement) && document.activeElement.tagName !== "BUTTON" && a.hasSomethingToControl(), s = (a, {
      target: o
    }) => {
      if (o instanceof HTMLInputElement) {
        const {
          type: l
        } = o;
        return l !== "text" && l !== "number";
      }
      return !0;
    }, i = this.TRANSLATE_SMALL, r = this.TRANSLATE_BIG;
    return et(this, "_keyboardManager", new yd([[["ctrl+a", "mac+meta+a"], t.selectAll, {
      checker: s
    }], [["ctrl+z", "mac+meta+z"], t.undo, {
      checker: s
    }], [["ctrl+y", "ctrl+shift+z", "mac+meta+shift+z", "ctrl+shift+Z", "mac+meta+shift+Z"], t.redo, {
      checker: s
    }], [["Backspace", "alt+Backspace", "ctrl+Backspace", "shift+Backspace", "mac+Backspace", "mac+alt+Backspace", "mac+ctrl+Backspace", "Delete", "ctrl+Delete", "shift+Delete", "mac+Delete"], t.delete, {
      checker: s
    }], [["Enter", "mac+Enter"], t.addNewEditorFromKeyboard, {
      checker: (a, {
        target: o
      }) => !(o instanceof HTMLButtonElement) && n(a, Vi).contains(o) && !a.isEnterHandled
    }], [[" ", "mac+ "], t.addNewEditorFromKeyboard, {
      checker: (a, {
        target: o
      }) => !(o instanceof HTMLButtonElement) && n(a, Vi).contains(document.activeElement)
    }], [["Escape", "mac+Escape"], t.unselectAll], [["ArrowLeft", "mac+ArrowLeft"], t.translateSelectedEditors, {
      args: [-i, 0],
      checker: e
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t.translateSelectedEditors, {
      args: [-r, 0],
      checker: e
    }], [["ArrowRight", "mac+ArrowRight"], t.translateSelectedEditors, {
      args: [i, 0],
      checker: e
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t.translateSelectedEditors, {
      args: [r, 0],
      checker: e
    }], [["ArrowUp", "mac+ArrowUp"], t.translateSelectedEditors, {
      args: [0, -i],
      checker: e
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t.translateSelectedEditors, {
      args: [0, -r],
      checker: e
    }], [["ArrowDown", "mac+ArrowDown"], t.translateSelectedEditors, {
      args: [0, i],
      checker: e
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t.translateSelectedEditors, {
      args: [0, r],
      checker: e
    }]]));
  }
  destroy() {
    var t, e, s, i, r, a, o, l, h;
    (t = n(this, Ms)) == null || t.resolve(), g(this, Ms, null), (e = n(this, _o)) == null || e.abort(), g(this, _o, null), this._signal = null;
    for (const d of n(this, re).values())
      d.destroy();
    n(this, re).clear(), n(this, Gt).clear(), n(this, Ur).clear(), (s = n(this, Vn)) == null || s.clear(), g(this, ns, null), n(this, gt).clear(), n(this, Ls).destroy(), (i = n(this, To)) == null || i.destroy(), (r = n(this, Pe)) == null || r.destroy(), (a = n(this, qn)) == null || a.destroy(), (o = n(this, fi)) == null || o.hide(), g(this, fi, null), (l = n(this, Mo)) == null || l.destroy(), g(this, Mo, null), g(this, Co, null), n(this, ui) && (clearTimeout(n(this, ui)), g(this, ui, null)), n(this, pi) && (clearTimeout(n(this, pi)), g(this, pi, null)), (h = this._editorUndoBar) == null || h.destroy(), g(this, Io, null);
  }
  combinedSignal(t) {
    return AbortSignal.any([this._signal, t.signal]);
  }
  get mlManager() {
    return n(this, Wh);
  }
  get useNewAltTextFlow() {
    return n(this, Uh);
  }
  get useNewAltTextWhenAddingImage() {
    return n(this, ko);
  }
  get hcmFilter() {
    return et(this, "hcmFilter", n(this, Xn) ? n(this, zh).addHCMFilter(n(this, Xn).foreground, n(this, Xn).background) : "none");
  }
  get direction() {
    return et(this, "direction", getComputedStyle(n(this, Vi)).direction);
  }
  get _highlightColors() {
    return et(this, "_highlightColors", n(this, Lo) ? new Map(n(this, Lo).split(",").map((t) => (t = t.split("=").map((e) => e.trim()), t[1] = t[1].toUpperCase(), t))) : null);
  }
  get highlightColors() {
    const {
      _highlightColors: t
    } = this;
    if (!t)
      return et(this, "highlightColors", null);
    const e = /* @__PURE__ */ new Map(), s = !!n(this, Xn);
    for (const [i, r] of t) {
      const a = i.endsWith("_HCM");
      if (s && a) {
        e.set(i.replace("_HCM", ""), r);
        continue;
      }
      !s && !a && e.set(i, r);
    }
    return et(this, "highlightColors", e);
  }
  get highlightColorNames() {
    return et(this, "highlightColorNames", this.highlightColors ? new Map(Array.from(this.highlightColors, (t) => t.reverse())) : null);
  }
  getNonHCMColor(t) {
    if (!this._highlightColors)
      return t;
    const e = this.highlightColorNames.get(t);
    return this._highlightColors.get(e) || t;
  }
  getNonHCMColorName(t) {
    return this.highlightColorNames.get(t) || t;
  }
  setCurrentDrawingSession(t) {
    t ? (this.unselectAll(), this.disableUserSelect(!0)) : this.disableUserSelect(!1), g(this, Hn, t);
  }
  setMainHighlightColorPicker(t) {
    g(this, Mo, t);
  }
  editAltText(t, e = !1) {
    var s;
    (s = n(this, To)) == null || s.editAltText(this, t, e);
  }
  hasCommentManager() {
    return !!n(this, Pe);
  }
  editComment(t, e, s, i) {
    var r;
    (r = n(this, Pe)) == null || r.showDialog(this, t, e, s, i);
  }
  selectComment(t, e) {
    const s = n(this, re).get(t), i = s == null ? void 0 : s.getEditorByUID(e);
    i == null || i.toggleComment(!0, !0);
  }
  updateComment(t) {
    var e;
    (e = n(this, Pe)) == null || e.updateComment(t.getData());
  }
  updatePopupColor(t) {
    var e;
    (e = n(this, Pe)) == null || e.updatePopupColor(t);
  }
  removeComment(t) {
    var e;
    (e = n(this, Pe)) == null || e.removeComments([t.uid]);
  }
  toggleComment(t, e, s = void 0) {
    var i;
    (i = n(this, Pe)) == null || i.toggleCommentPopup(t, e, s);
  }
  makeCommentColor(t, e) {
    var s;
    return t && ((s = n(this, Pe)) == null ? void 0 : s.makeCommentColor(t, e)) || null;
  }
  getCommentDialogElement() {
    var t;
    return ((t = n(this, Pe)) == null ? void 0 : t.dialogElement) || null;
  }
  async waitForEditorsRendered(t) {
    if (n(this, re).has(t - 1))
      return;
    const {
      resolve: e,
      promise: s
    } = Promise.withResolvers(), i = (r) => {
      r.pageNumber === t && (this._eventBus._off("editorsrendered", i), e());
    };
    this._eventBus.on("editorsrendered", i), await s;
  }
  getSignature(t) {
    var e;
    (e = n(this, qn)) == null || e.getSignature({
      uiManager: this,
      editor: t
    });
  }
  get signatureManager() {
    return n(this, qn);
  }
  switchToMode(t, e) {
    this._eventBus.on("annotationeditormodechanged", e, {
      once: !0,
      signal: this._signal
    }), this._eventBus.dispatch("showannotationeditorui", {
      source: this,
      mode: t
    });
  }
  setPreference(t, e) {
    this._eventBus.dispatch("setpreference", {
      source: this,
      name: t,
      value: e
    });
  }
  onSetPreference({
    name: t,
    value: e
  }) {
    switch (t) {
      case "enableNewAltTextWhenAddingImage":
        g(this, ko, e);
        break;
    }
  }
  onPageChanging({
    pageNumber: t
  }) {
    g(this, Ro, t - 1);
  }
  focusMainContainer() {
    n(this, Vi).focus();
  }
  findParent(t, e) {
    for (const s of n(this, re).values()) {
      const {
        x: i,
        y: r,
        width: a,
        height: o
      } = s.div.getBoundingClientRect();
      if (t >= i && t <= i + a && e >= r && e <= r + o)
        return s;
    }
    return null;
  }
  disableUserSelect(t = !1) {
    n(this, qh).classList.toggle("noUserSelect", t);
  }
  addShouldRescale(t) {
    n(this, Ur).add(t);
  }
  removeShouldRescale(t) {
    n(this, Ur).delete(t);
  }
  onScaleChanging({
    scale: t
  }) {
    var e;
    this.commitOrRemove(), this.viewParameters.realScale = t * Pn.PDF_TO_CSS_UNITS;
    for (const s of n(this, Ur))
      s.onScaleChanging();
    (e = n(this, Hn)) == null || e.onScaleChanging();
  }
  onRotationChanging({
    pagesRotation: t
  }) {
    this.commitOrRemove(), this.viewParameters.rotation = t;
  }
  highlightSelection(t = "", e = !1) {
    const s = document.getSelection();
    if (!s || s.isCollapsed)
      return;
    const {
      anchorNode: i,
      anchorOffset: r,
      focusNode: a,
      focusOffset: o
    } = s, l = s.toString(), d = w(this, $, Od).call(this, s).closest(".textLayer"), u = this.getSelectionBoxes(d);
    if (!u)
      return;
    s.empty();
    const p = w(this, $, Sf).call(this, d), b = n(this, te) === Z.NONE, S = () => {
      const v = p == null ? void 0 : p.createAndAddNewEditor({
        x: 0,
        y: 0
      }, !1, {
        methodOfCreation: t,
        boxes: u,
        anchorNode: i,
        anchorOffset: r,
        focusNode: a,
        focusOffset: o,
        text: l
      });
      b && this.showAllEditors("highlight", !0, !0), e && (v == null || v.editComment());
    };
    if (b) {
      this.switchToMode(Z.HIGHLIGHT, S);
      return;
    }
    S();
  }
  commentSelection(t = "") {
    this.highlightSelection(t, !0);
  }
  getAndRemoveDataFromAnnotationStorage(t) {
    if (!n(this, ks))
      return null;
    const e = `${Ch}${t}`, s = n(this, ks).getRawValue(e);
    return s && n(this, ks).remove(e), s;
  }
  addToAnnotationStorage(t) {
    !t.isEmpty() && n(this, ks) && !n(this, ks).has(t.id) && n(this, ks).setValue(t.id, t);
  }
  a11yAlert(t, e = null) {
    const s = n(this, Xh);
    s && (s.setAttribute("data-l10n-id", t), e ? s.setAttribute("data-l10n-args", JSON.stringify(e)) : s.removeAttribute("data-l10n-args"));
  }
  blur() {
    if (this.isShiftKeyDown = !1, n(this, Gn) && (g(this, Gn, !1), w(this, $, rh).call(this, "main_toolbar")), !this.hasSelection)
      return;
    const {
      activeElement: t
    } = document;
    for (const e of n(this, gt))
      if (e.div.contains(t)) {
        g(this, zr, [e, t]), e._focusEventsAllowed = !1;
        break;
      }
  }
  focus() {
    if (!n(this, zr))
      return;
    const [t, e] = n(this, zr);
    g(this, zr, null), e.addEventListener("focusin", () => {
      t._focusEventsAllowed = !0;
    }, {
      once: !0,
      signal: this._signal
    }), e.focus();
  }
  addEditListeners() {
    w(this, $, xf).call(this), w(this, $, Ef).call(this);
  }
  removeEditListeners() {
    w(this, $, Pm).call(this), w(this, $, _f).call(this);
  }
  dragOver(t) {
    for (const {
      type: e
    } of t.dataTransfer.items)
      for (const s of n(this, Ds))
        if (s.isHandlingMimeForPasting(e)) {
          t.dataTransfer.dropEffect = "copy", t.preventDefault();
          return;
        }
  }
  drop(t) {
    for (const e of t.dataTransfer.items)
      for (const s of n(this, Ds))
        if (s.isHandlingMimeForPasting(e.type)) {
          s.paste(e, this.currentLayer), t.preventDefault();
          return;
        }
  }
  copy(t) {
    var s;
    if (t.preventDefault(), (s = n(this, ns)) == null || s.commitOrRemove(), !this.hasSelection)
      return;
    const e = [];
    for (const i of n(this, gt)) {
      const r = i.serialize(!0);
      r && e.push(r);
    }
    e.length !== 0 && t.clipboardData.setData("application/pdfjs", JSON.stringify(e));
  }
  cut(t) {
    this.copy(t), this.delete();
  }
  async paste(t) {
    t.preventDefault();
    const {
      clipboardData: e
    } = t;
    for (const r of e.items)
      for (const a of n(this, Ds))
        if (a.isHandlingMimeForPasting(r.type)) {
          a.paste(r, this.currentLayer);
          return;
        }
    let s = e.getData("application/pdfjs");
    if (!s)
      return;
    try {
      s = JSON.parse(s);
    } catch (r) {
      J(`paste: "${r.message}".`);
      return;
    }
    if (!Array.isArray(s))
      return;
    this.unselectAll();
    const i = this.currentLayer;
    try {
      const r = [];
      for (const l of s) {
        const h = await i.deserialize(l);
        if (!h)
          return;
        r.push(h);
      }
      const a = () => {
        for (const l of r)
          w(this, $, Cf).call(this, l);
        w(this, $, Tf).call(this, r);
      }, o = () => {
        for (const l of r)
          l.remove();
      };
      this.addCommands({
        cmd: a,
        undo: o,
        mustExec: !0
      });
    } catch (r) {
      J(`paste: "${r.message}".`);
    }
  }
  keydown(t) {
    !this.isShiftKeyDown && t.key === "Shift" && (this.isShiftKeyDown = !0), n(this, te) !== Z.NONE && !this.isEditorHandlingKeyboard && po._keyboardManager.exec(this, t);
  }
  keyup(t) {
    this.isShiftKeyDown && t.key === "Shift" && (this.isShiftKeyDown = !1, n(this, Gn) && (g(this, Gn, !1), w(this, $, rh).call(this, "main_toolbar")));
  }
  onEditingAction({
    name: t
  }) {
    switch (t) {
      case "undo":
      case "redo":
      case "delete":
      case "selectAll":
        this[t]();
        break;
      case "highlightSelection":
        this.highlightSelection("context_menu");
        break;
      case "commentSelection":
        this.commentSelection("context_menu");
        break;
    }
  }
  setEditingState(t) {
    t ? (w(this, $, Cm).call(this), w(this, $, Ef).call(this), w(this, $, Ne).call(this, {
      isEditing: n(this, te) !== Z.NONE,
      isEmpty: w(this, $, ah).call(this),
      hasSomethingToUndo: n(this, Ls).hasSomethingToUndo(),
      hasSomethingToRedo: n(this, Ls).hasSomethingToRedo(),
      hasSelectedEditor: !1
    })) : (w(this, $, Tm).call(this), w(this, $, _f).call(this), w(this, $, Ne).call(this, {
      isEditing: !1
    }), this.disableUserSelect(!1));
  }
  registerEditorTypes(t) {
    if (!n(this, Ds)) {
      g(this, Ds, t);
      for (const e of n(this, Ds))
        w(this, $, Hi).call(this, e.defaultPropertiesToUpdate);
    }
  }
  getId() {
    return n(this, Ru).id;
  }
  get currentLayer() {
    return n(this, re).get(n(this, Ro));
  }
  getLayer(t) {
    return n(this, re).get(t);
  }
  get currentPageIndex() {
    return n(this, Ro);
  }
  addLayer(t) {
    n(this, re).set(t.pageIndex, t), n(this, Wn) ? t.enable() : t.disable();
  }
  removeLayer(t) {
    n(this, re).delete(t.pageIndex);
  }
  async updateMode(t, e = null, s = !1, i = !1, r = !1) {
    var a, o, l, h, d, u;
    if (n(this, te) !== t && !(n(this, Ms) && (await n(this, Ms).promise, !n(this, Ms)))) {
      if (g(this, Ms, Promise.withResolvers()), (a = n(this, Hn)) == null || a.commitOrRemove(), n(this, te) === Z.POPUP && ((o = n(this, Pe)) == null || o.hideSidebar()), (l = n(this, Pe)) == null || l.destroyPopup(), g(this, te, t), t === Z.NONE) {
        this.setEditingState(!1), w(this, $, Lm).call(this);
        for (const p of n(this, Gt).values())
          p.hideStandaloneCommentButton();
        (h = this._editorUndoBar) == null || h.hide(), this.toggleComment(null), n(this, Ms).resolve();
        return;
      }
      for (const p of n(this, Gt).values())
        p.addStandaloneCommentButton();
      t === Z.SIGNATURE && await ((d = n(this, qn)) == null ? void 0 : d.loadSignatures()), this.setEditingState(!0), await w(this, $, km).call(this), this.unselectAll();
      for (const p of n(this, re).values())
        p.updateMode(t);
      if (t === Z.POPUP) {
        n(this, Co) || g(this, Co, await n(this, Io).getAnnotationsByType(new Set(n(this, Ds).map((S) => S._editorType))));
        const p = /* @__PURE__ */ new Set(), b = [];
        for (const S of n(this, Gt).values()) {
          const {
            annotationElementId: v,
            hasComment: E,
            deleted: x
          } = S;
          v && p.add(v), E && !x && b.push(S.getData());
        }
        for (const S of n(this, Co)) {
          const {
            id: v,
            popupRef: E,
            contentsObj: x
          } = S;
          E && (x != null && x.str) && !p.has(v) && !n(this, Un).has(v) && b.push(S);
        }
        (u = n(this, Pe)) == null || u.showSidebar(b);
      }
      if (!e) {
        s && this.addNewEditorFromKeyboard(), n(this, Ms).resolve();
        return;
      }
      for (const p of n(this, Gt).values())
        p.uid === e ? (this.setSelected(p), r ? p.editComment() : i ? p.enterInEditMode() : p.focus()) : p.unselect();
      n(this, Ms).resolve();
    }
  }
  addNewEditorFromKeyboard() {
    this.currentLayer.canCreateNewEmptyEditor() && this.currentLayer.addNewEditor();
  }
  updateToolbar(t) {
    t.mode !== n(this, te) && this._eventBus.dispatch("switchannotationeditormode", {
      source: this,
      ...t
    });
  }
  updateParams(t, e) {
    if (n(this, Ds)) {
      switch (t) {
        case at.CREATE:
          this.currentLayer.addNewEditor(e);
          return;
        case at.HIGHLIGHT_SHOW_ALL:
          this._eventBus.dispatch("reporttelemetry", {
            source: this,
            details: {
              type: "editing",
              data: {
                type: "highlight",
                action: "toggle_visibility"
              }
            }
          }), (n(this, jh) || g(this, jh, /* @__PURE__ */ new Map())).set(t, e), this.showAllEditors("highlight", e);
          break;
      }
      if (this.hasSelection)
        for (const s of n(this, gt))
          s.updateParams(t, e);
      else
        for (const s of n(this, Ds))
          s.updateDefaultParams(t, e);
    }
  }
  showAllEditors(t, e, s = !1) {
    var r;
    for (const a of n(this, Gt).values())
      a.editorType === t && a.show(e);
    (((r = n(this, jh)) == null ? void 0 : r.get(at.HIGHLIGHT_SHOW_ALL)) ?? !0) !== e && w(this, $, Hi).call(this, [[at.HIGHLIGHT_SHOW_ALL, e]]);
  }
  enableWaiting(t = !1) {
    if (n(this, Gh) !== t) {
      g(this, Gh, t);
      for (const e of n(this, re).values())
        t ? e.disableClick() : e.enableClick(), e.div.classList.toggle("waiting", t);
    }
  }
  *getEditors(t) {
    for (const e of n(this, Gt).values())
      e.pageIndex === t && (yield e);
  }
  getEditor(t) {
    return n(this, Gt).get(t);
  }
  addEditor(t) {
    n(this, Gt).set(t.id, t);
  }
  removeEditor(t) {
    var e, s;
    t.div.contains(document.activeElement) && (n(this, ui) && clearTimeout(n(this, ui)), g(this, ui, setTimeout(() => {
      this.focusMainContainer(), g(this, ui, null);
    }, 0))), n(this, Gt).delete(t.id), t.annotationElementId && ((e = n(this, Vn)) == null || e.delete(t.annotationElementId)), this.unselect(t), (!t.annotationElementId || !n(this, Un).has(t.annotationElementId)) && ((s = n(this, ks)) == null || s.remove(t.id));
  }
  addDeletedAnnotationElement(t) {
    n(this, Un).add(t.annotationElementId), this.addChangedExistingAnnotation(t), t.deleted = !0;
  }
  isDeletedAnnotationElement(t) {
    return n(this, Un).has(t);
  }
  removeDeletedAnnotationElement(t) {
    n(this, Un).delete(t.annotationElementId), this.removeChangedExistingAnnotation(t), t.deleted = !1;
  }
  setActiveEditor(t) {
    n(this, ns) !== t && (g(this, ns, t), t && w(this, $, Hi).call(this, t.propertiesToUpdate));
  }
  updateUI(t) {
    n(this, $, Dm) === t && w(this, $, Hi).call(this, t.propertiesToUpdate);
  }
  updateUIForDefaultProperties(t) {
    w(this, $, Hi).call(this, t.defaultPropertiesToUpdate);
  }
  toggleSelected(t) {
    if (n(this, gt).has(t)) {
      n(this, gt).delete(t), t.unselect(), w(this, $, Ne).call(this, {
        hasSelectedEditor: this.hasSelection
      });
      return;
    }
    n(this, gt).add(t), t.select(), w(this, $, Hi).call(this, t.propertiesToUpdate), w(this, $, Ne).call(this, {
      hasSelectedEditor: !0
    });
  }
  setSelected(t) {
    var e;
    this.updateToolbar({
      mode: t.mode,
      editId: t.id
    }), (e = n(this, Hn)) == null || e.commitOrRemove();
    for (const s of n(this, gt))
      s !== t && s.unselect();
    n(this, gt).clear(), n(this, gt).add(t), t.select(), w(this, $, Hi).call(this, t.propertiesToUpdate), w(this, $, Ne).call(this, {
      hasSelectedEditor: !0
    });
  }
  isSelected(t) {
    return n(this, gt).has(t);
  }
  get firstSelectedEditor() {
    return n(this, gt).values().next().value;
  }
  unselect(t) {
    t.unselect(), n(this, gt).delete(t), w(this, $, Ne).call(this, {
      hasSelectedEditor: this.hasSelection
    });
  }
  get hasSelection() {
    return n(this, gt).size !== 0;
  }
  get isEnterHandled() {
    return n(this, gt).size === 1 && this.firstSelectedEditor.isEnterHandled;
  }
  undo() {
    var t;
    n(this, Ls).undo(), w(this, $, Ne).call(this, {
      hasSomethingToUndo: n(this, Ls).hasSomethingToUndo(),
      hasSomethingToRedo: !0,
      isEmpty: w(this, $, ah).call(this)
    }), (t = this._editorUndoBar) == null || t.hide();
  }
  redo() {
    n(this, Ls).redo(), w(this, $, Ne).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: n(this, Ls).hasSomethingToRedo(),
      isEmpty: w(this, $, ah).call(this)
    });
  }
  addCommands(t) {
    n(this, Ls).add(t), w(this, $, Ne).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: !1,
      isEmpty: w(this, $, ah).call(this)
    });
  }
  cleanUndoStack(t) {
    n(this, Ls).cleanType(t);
  }
  delete() {
    var r;
    this.commitOrRemove();
    const t = (r = this.currentLayer) == null ? void 0 : r.endDrawingSession(!0);
    if (!this.hasSelection && !t)
      return;
    const e = t ? [t] : [...n(this, gt)], s = () => {
      var a;
      (a = this._editorUndoBar) == null || a.show(i, e.length === 1 ? e[0].editorType : e.length);
      for (const o of e)
        o.remove();
    }, i = () => {
      for (const a of e)
        w(this, $, Cf).call(this, a);
    };
    this.addCommands({
      cmd: s,
      undo: i,
      mustExec: !0
    });
  }
  commitOrRemove() {
    var t;
    (t = n(this, ns)) == null || t.commitOrRemove();
  }
  hasSomethingToControl() {
    return n(this, ns) || this.hasSelection;
  }
  selectAll() {
    for (const t of n(this, gt))
      t.commit();
    w(this, $, Tf).call(this, n(this, Gt).values());
  }
  unselectAll() {
    var t;
    if (!(n(this, ns) && (n(this, ns).commitOrRemove(), n(this, te) !== Z.NONE)) && !((t = n(this, Hn)) != null && t.commitOrRemove()) && this.hasSelection) {
      for (const e of n(this, gt))
        e.unselect();
      n(this, gt).clear(), w(this, $, Ne).call(this, {
        hasSelectedEditor: !1
      });
    }
  }
  translateSelectedEditors(t, e, s = !1) {
    if (s || this.commitOrRemove(), !this.hasSelection)
      return;
    n(this, Yn)[0] += t, n(this, Yn)[1] += e;
    const [i, r] = n(this, Yn), a = [...n(this, gt)], o = 1e3;
    n(this, pi) && clearTimeout(n(this, pi)), g(this, pi, setTimeout(() => {
      g(this, pi, null), n(this, Yn)[0] = n(this, Yn)[1] = 0, this.addCommands({
        cmd: () => {
          for (const l of a)
            n(this, Gt).has(l.id) && (l.translateInPage(i, r), l.translationDone());
        },
        undo: () => {
          for (const l of a)
            n(this, Gt).has(l.id) && (l.translateInPage(-i, -r), l.translationDone());
        },
        mustExec: !1
      });
    }, o));
    for (const l of a)
      l.translateInPage(t, e), l.translationDone();
  }
  setUpDragSession() {
    if (this.hasSelection) {
      this.disableUserSelect(!0), g(this, di, /* @__PURE__ */ new Map());
      for (const t of n(this, gt))
        n(this, di).set(t, {
          savedX: t.x,
          savedY: t.y,
          savedPageIndex: t.pageIndex,
          newX: 0,
          newY: 0,
          newPageIndex: -1
        });
    }
  }
  endDragSession() {
    if (!n(this, di))
      return !1;
    this.disableUserSelect(!1);
    const t = n(this, di);
    g(this, di, null);
    let e = !1;
    for (const [{
      x: i,
      y: r,
      pageIndex: a
    }, o] of t)
      o.newX = i, o.newY = r, o.newPageIndex = a, e || (e = i !== o.savedX || r !== o.savedY || a !== o.savedPageIndex);
    if (!e)
      return !1;
    const s = (i, r, a, o) => {
      if (n(this, Gt).has(i.id)) {
        const l = n(this, re).get(o);
        l ? i._setParentAndPosition(l, r, a) : (i.pageIndex = o, i.x = r, i.y = a);
      }
    };
    return this.addCommands({
      cmd: () => {
        for (const [i, {
          newX: r,
          newY: a,
          newPageIndex: o
        }] of t)
          s(i, r, a, o);
      },
      undo: () => {
        for (const [i, {
          savedX: r,
          savedY: a,
          savedPageIndex: o
        }] of t)
          s(i, r, a, o);
      },
      mustExec: !0
    }), !0;
  }
  dragSelectedEditors(t, e) {
    if (n(this, di))
      for (const s of n(this, di).keys())
        s.drag(t, e);
  }
  rebuild(t) {
    if (t.parent === null) {
      const e = this.getLayer(t.pageIndex);
      e ? (e.changeParent(t), e.addOrRebuild(t)) : (this.addEditor(t), this.addToAnnotationStorage(t), t.rebuild());
    } else
      t.parent.addOrRebuild(t);
  }
  get isEditorHandlingKeyboard() {
    var t;
    return ((t = this.getActive()) == null ? void 0 : t.shouldGetKeyboardEvents()) || n(this, gt).size === 1 && this.firstSelectedEditor.shouldGetKeyboardEvents();
  }
  isActive(t) {
    return n(this, ns) === t;
  }
  getActive() {
    return n(this, ns);
  }
  getMode() {
    return n(this, te);
  }
  isEditingMode() {
    return n(this, te) !== Z.NONE;
  }
  get imageManager() {
    return et(this, "imageManager", new Af());
  }
  getSelectionBoxes(t) {
    if (!t)
      return null;
    const e = document.getSelection();
    for (let h = 0, d = e.rangeCount; h < d; h++)
      if (!t.contains(e.getRangeAt(h).commonAncestorContainer))
        return null;
    const {
      x: s,
      y: i,
      width: r,
      height: a
    } = t.getBoundingClientRect();
    let o;
    switch (t.getAttribute("data-main-rotation")) {
      case "90":
        o = (h, d, u, p) => ({
          x: (d - i) / a,
          y: 1 - (h + u - s) / r,
          width: p / a,
          height: u / r
        });
        break;
      case "180":
        o = (h, d, u, p) => ({
          x: 1 - (h + u - s) / r,
          y: 1 - (d + p - i) / a,
          width: u / r,
          height: p / a
        });
        break;
      case "270":
        o = (h, d, u, p) => ({
          x: 1 - (d + p - i) / a,
          y: (h - s) / r,
          width: p / a,
          height: u / r
        });
        break;
      default:
        o = (h, d, u, p) => ({
          x: (h - s) / r,
          y: (d - i) / a,
          width: u / r,
          height: p / a
        });
        break;
    }
    const l = [];
    for (let h = 0, d = e.rangeCount; h < d; h++) {
      const u = e.getRangeAt(h);
      if (!u.collapsed)
        for (const {
          x: p,
          y: b,
          width: S,
          height: v
        } of u.getClientRects())
          S === 0 || v === 0 || l.push(o(p, b, S, v));
    }
    return l.length === 0 ? null : l;
  }
  addChangedExistingAnnotation({
    annotationElementId: t,
    id: e
  }) {
    (n(this, Po) || g(this, Po, /* @__PURE__ */ new Map())).set(t, e);
  }
  removeChangedExistingAnnotation({
    annotationElementId: t
  }) {
    var e;
    (e = n(this, Po)) == null || e.delete(t);
  }
  renderAnnotationElement(t) {
    var i;
    const e = (i = n(this, Po)) == null ? void 0 : i.get(t.data.id);
    if (!e)
      return;
    const s = n(this, ks).getRawValue(e);
    s && (n(this, te) === Z.NONE && !s.hasBeenModified || s.renderAnnotationElement(t));
  }
  setMissingCanvas(t, e, s) {
    var r;
    const i = (r = n(this, Vn)) == null ? void 0 : r.get(t);
    i && (i.setCanvas(e, s), n(this, Vn).delete(t));
  }
  addMissingCanvas(t, e) {
    (n(this, Vn) || g(this, Vn, /* @__PURE__ */ new Map())).set(t, e);
  }
};
_o = new WeakMap(), ns = new WeakMap(), Co = new WeakMap(), Gt = new WeakMap(), re = new WeakMap(), To = new WeakMap(), ks = new WeakMap(), Po = new WeakMap(), Ls = new WeakMap(), Pe = new WeakMap(), $n = new WeakMap(), Hn = new WeakMap(), Ro = new WeakMap(), Un = new WeakMap(), di = new WeakMap(), Ds = new WeakMap(), Ur = new WeakMap(), Hh = new WeakMap(), Uh = new WeakMap(), ko = new WeakMap(), zh = new WeakMap(), ui = new WeakMap(), zn = new WeakMap(), Lo = new WeakMap(), Gn = new WeakMap(), fi = new WeakMap(), Ru = new WeakMap(), Wn = new WeakMap(), Do = new WeakMap(), Gh = new WeakMap(), jn = new WeakMap(), zr = new WeakMap(), Mo = new WeakMap(), Vn = new WeakMap(), Wh = new WeakMap(), te = new WeakMap(), gt = new WeakMap(), ji = new WeakMap(), qn = new WeakMap(), Xn = new WeakMap(), jh = new WeakMap(), Io = new WeakMap(), Vh = new WeakMap(), Yn = new WeakMap(), pi = new WeakMap(), Vi = new WeakMap(), qh = new WeakMap(), Xh = new WeakMap(), Ms = new WeakMap(), $ = new WeakSet(), Od = function({
  anchorNode: t
}) {
  return t.nodeType === Node.TEXT_NODE ? t.parentElement : t;
}, Sf = function(t) {
  const {
    currentLayer: e
  } = this;
  if (e.hasTextLayer(t))
    return e;
  for (const s of n(this, re).values())
    if (s.hasTextLayer(t))
      return s;
  return null;
}, xm = function() {
  const t = document.getSelection();
  if (!t || t.isCollapsed)
    return;
  const s = w(this, $, Od).call(this, t).closest(".textLayer"), i = this.getSelectionBoxes(s);
  i && (n(this, fi) || g(this, fi, new I0(this)), n(this, fi).show(s, i, this.direction === "ltr"));
}, Em = function() {
  var r, a, o;
  const t = document.getSelection();
  if (!t || t.isCollapsed) {
    n(this, ji) && ((r = n(this, fi)) == null || r.hide(), g(this, ji, null), w(this, $, Ne).call(this, {
      hasSelectedText: !1
    }));
    return;
  }
  const {
    anchorNode: e
  } = t;
  if (e === n(this, ji))
    return;
  const i = w(this, $, Od).call(this, t).closest(".textLayer");
  if (!i) {
    n(this, ji) && ((a = n(this, fi)) == null || a.hide(), g(this, ji, null), w(this, $, Ne).call(this, {
      hasSelectedText: !1
    }));
    return;
  }
  if ((o = n(this, fi)) == null || o.hide(), g(this, ji, e), w(this, $, Ne).call(this, {
    hasSelectedText: !0
  }), !(n(this, te) !== Z.HIGHLIGHT && n(this, te) !== Z.NONE) && (n(this, te) === Z.HIGHLIGHT && this.showAllEditors("highlight", !0, !0), g(this, Gn, this.isShiftKeyDown), !this.isShiftKeyDown)) {
    const l = n(this, te) === Z.HIGHLIGHT ? w(this, $, Sf).call(this, i) : null;
    if (l == null || l.toggleDrawing(), n(this, Do)) {
      const h = new AbortController(), d = this.combinedSignal(h), u = (p) => {
        p.type === "pointerup" && p.button !== 0 || (h.abort(), l == null || l.toggleDrawing(!0), p.type === "pointerup" && w(this, $, rh).call(this, "main_toolbar"));
      };
      window.addEventListener("pointerup", u, {
        signal: d
      }), window.addEventListener("blur", u, {
        signal: d
      });
    } else
      l == null || l.toggleDrawing(!0), w(this, $, rh).call(this, "main_toolbar");
  }
}, rh = function(t = "") {
  n(this, te) === Z.HIGHLIGHT ? this.highlightSelection(t) : n(this, Hh) && w(this, $, xm).call(this);
}, _m = function() {
  document.addEventListener("selectionchange", w(this, $, Em).bind(this), {
    signal: this._signal
  });
}, Cm = function() {
  if (n(this, zn))
    return;
  g(this, zn, new AbortController());
  const t = this.combinedSignal(n(this, zn));
  window.addEventListener("focus", this.focus.bind(this), {
    signal: t
  }), window.addEventListener("blur", this.blur.bind(this), {
    signal: t
  });
}, Tm = function() {
  var t;
  (t = n(this, zn)) == null || t.abort(), g(this, zn, null);
}, xf = function() {
  if (n(this, jn))
    return;
  g(this, jn, new AbortController());
  const t = this.combinedSignal(n(this, jn));
  window.addEventListener("keydown", this.keydown.bind(this), {
    signal: t
  }), window.addEventListener("keyup", this.keyup.bind(this), {
    signal: t
  });
}, Pm = function() {
  var t;
  (t = n(this, jn)) == null || t.abort(), g(this, jn, null);
}, Ef = function() {
  if (n(this, $n))
    return;
  g(this, $n, new AbortController());
  const t = this.combinedSignal(n(this, $n));
  document.addEventListener("copy", this.copy.bind(this), {
    signal: t
  }), document.addEventListener("cut", this.cut.bind(this), {
    signal: t
  }), document.addEventListener("paste", this.paste.bind(this), {
    signal: t
  });
}, _f = function() {
  var t;
  (t = n(this, $n)) == null || t.abort(), g(this, $n, null);
}, Rm = function() {
  const t = this._signal;
  document.addEventListener("dragover", this.dragOver.bind(this), {
    signal: t
  }), document.addEventListener("drop", this.drop.bind(this), {
    signal: t
  });
}, Ne = function(t) {
  Object.entries(t).some(([s, i]) => n(this, Vh)[s] !== i) && (this._eventBus.dispatch("annotationeditorstateschanged", {
    source: this,
    details: Object.assign(n(this, Vh), t)
  }), n(this, te) === Z.HIGHLIGHT && t.hasSelectedEditor === !1 && w(this, $, Hi).call(this, [[at.HIGHLIGHT_FREE, !0]]));
}, Hi = function(t) {
  this._eventBus.dispatch("annotationeditorparamschanged", {
    source: this,
    details: t
  });
}, km = async function() {
  if (!n(this, Wn)) {
    g(this, Wn, !0);
    const t = [];
    for (const e of n(this, re).values())
      t.push(e.enable());
    await Promise.all(t);
    for (const e of n(this, Gt).values())
      e.enable();
  }
}, Lm = function() {
  if (this.unselectAll(), n(this, Wn)) {
    g(this, Wn, !1);
    for (const t of n(this, re).values())
      t.disable();
    for (const t of n(this, Gt).values())
      t.disable();
  }
}, Cf = function(t) {
  const e = n(this, re).get(t.pageIndex);
  e ? e.addOrRebuild(t) : (this.addEditor(t), this.addToAnnotationStorage(t));
}, Dm = function() {
  let t = null;
  for (t of n(this, gt))
    ;
  return t;
}, ah = function() {
  if (n(this, Gt).size === 0)
    return !0;
  if (n(this, Gt).size === 1)
    for (const t of n(this, Gt).values())
      return t.isEmpty();
  return !1;
}, Tf = function(t) {
  for (const e of n(this, gt))
    e.unselect();
  n(this, gt).clear();
  for (const e of t)
    e.isEmpty() || (n(this, gt).add(e), e.select());
  w(this, $, Ne).call(this, {
    hasSelectedEditor: this.hasSelection
  });
}, N(po, "TRANSLATE_SMALL", 1), N(po, "TRANSLATE_BIG", 10);
let kr = po;
var le, gi, Ws, Fo, mi, rs, No, bi, Xe, qi, Gr, yi, Kn, ii, oh, Bd;
const Oe = class Oe {
  constructor(t) {
    y(this, ii);
    y(this, le, null);
    y(this, gi, !1);
    y(this, Ws, null);
    y(this, Fo, null);
    y(this, mi, null);
    y(this, rs, null);
    y(this, No, !1);
    y(this, bi, null);
    y(this, Xe, null);
    y(this, qi, null);
    y(this, Gr, null);
    y(this, yi, !1);
    g(this, Xe, t), g(this, yi, t._uiManager.useNewAltTextFlow), n(Oe, Kn) || g(Oe, Kn, Object.freeze({
      added: "pdfjs-editor-new-alt-text-added-button",
      "added-label": "pdfjs-editor-new-alt-text-added-button-label",
      missing: "pdfjs-editor-new-alt-text-missing-button",
      "missing-label": "pdfjs-editor-new-alt-text-missing-button-label",
      review: "pdfjs-editor-new-alt-text-to-review-button",
      "review-label": "pdfjs-editor-new-alt-text-to-review-button-label"
    }));
  }
  static initialize(t) {
    Oe._l10n ?? (Oe._l10n = t);
  }
  async render() {
    const t = g(this, Ws, document.createElement("button"));
    t.className = "altText", t.tabIndex = "0";
    const e = g(this, Fo, document.createElement("span"));
    t.append(e), n(this, yi) ? (t.classList.add("new"), t.setAttribute("data-l10n-id", n(Oe, Kn).missing), e.setAttribute("data-l10n-id", n(Oe, Kn)["missing-label"])) : (t.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button"), e.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button-label"));
    const s = n(this, Xe)._uiManager._signal;
    t.addEventListener("contextmenu", _s, {
      signal: s
    }), t.addEventListener("pointerdown", (r) => r.stopPropagation(), {
      signal: s
    });
    const i = (r) => {
      r.preventDefault(), n(this, Xe)._uiManager.editAltText(n(this, Xe)), n(this, yi) && n(this, Xe)._reportTelemetry({
        action: "pdfjs.image.alt_text.image_status_label_clicked",
        data: {
          label: n(this, ii, oh)
        }
      });
    };
    return t.addEventListener("click", i, {
      capture: !0,
      signal: s
    }), t.addEventListener("keydown", (r) => {
      r.target === t && r.key === "Enter" && (g(this, No, !0), i(r));
    }, {
      signal: s
    }), await w(this, ii, Bd).call(this), t;
  }
  finish() {
    n(this, Ws) && (n(this, Ws).focus({
      focusVisible: n(this, No)
    }), g(this, No, !1));
  }
  isEmpty() {
    return n(this, yi) ? n(this, le) === null : !n(this, le) && !n(this, gi);
  }
  hasData() {
    return n(this, yi) ? n(this, le) !== null || !!n(this, qi) : this.isEmpty();
  }
  get guessedText() {
    return n(this, qi);
  }
  async setGuessedText(t) {
    n(this, le) === null && (g(this, qi, t), g(this, Gr, await Oe._l10n.get("pdfjs-editor-new-alt-text-generated-alt-text-with-disclaimer", {
      generatedAltText: t
    })), w(this, ii, Bd).call(this));
  }
  toggleAltTextBadge(t = !1) {
    var e;
    if (!n(this, yi) || n(this, le)) {
      (e = n(this, bi)) == null || e.remove(), g(this, bi, null);
      return;
    }
    if (!n(this, bi)) {
      const s = g(this, bi, document.createElement("div"));
      s.className = "noAltTextBadge", n(this, Xe).div.append(s);
    }
    n(this, bi).classList.toggle("hidden", !t);
  }
  serialize(t) {
    let e = n(this, le);
    return !t && n(this, qi) === e && (e = n(this, Gr)), {
      altText: e,
      decorative: n(this, gi),
      guessedText: n(this, qi),
      textWithDisclaimer: n(this, Gr)
    };
  }
  get data() {
    return {
      altText: n(this, le),
      decorative: n(this, gi)
    };
  }
  set data({
    altText: t,
    decorative: e,
    guessedText: s,
    textWithDisclaimer: i,
    cancel: r = !1
  }) {
    s && (g(this, qi, s), g(this, Gr, i)), !(n(this, le) === t && n(this, gi) === e) && (r || (g(this, le, t), g(this, gi, e)), w(this, ii, Bd).call(this));
  }
  toggle(t = !1) {
    n(this, Ws) && (!t && n(this, rs) && (clearTimeout(n(this, rs)), g(this, rs, null)), n(this, Ws).disabled = !t);
  }
  shown() {
    n(this, Xe)._reportTelemetry({
      action: "pdfjs.image.alt_text.image_status_label_displayed",
      data: {
        label: n(this, ii, oh)
      }
    });
  }
  destroy() {
    var t, e;
    (t = n(this, Ws)) == null || t.remove(), g(this, Ws, null), g(this, Fo, null), g(this, mi, null), (e = n(this, bi)) == null || e.remove(), g(this, bi, null);
  }
};
le = new WeakMap(), gi = new WeakMap(), Ws = new WeakMap(), Fo = new WeakMap(), mi = new WeakMap(), rs = new WeakMap(), No = new WeakMap(), bi = new WeakMap(), Xe = new WeakMap(), qi = new WeakMap(), Gr = new WeakMap(), yi = new WeakMap(), Kn = new WeakMap(), ii = new WeakSet(), oh = function() {
  return n(this, le) && "added" || n(this, le) === null && this.guessedText && "review" || "missing";
}, Bd = async function() {
  var i, r, a;
  const t = n(this, Ws);
  if (!t)
    return;
  if (n(this, yi)) {
    if (t.classList.toggle("done", !!n(this, le)), t.setAttribute("data-l10n-id", n(Oe, Kn)[n(this, ii, oh)]), (i = n(this, Fo)) == null || i.setAttribute("data-l10n-id", n(Oe, Kn)[`${n(this, ii, oh)}-label`]), !n(this, le)) {
      (r = n(this, mi)) == null || r.remove();
      return;
    }
  } else {
    if (!n(this, le) && !n(this, gi)) {
      t.classList.remove("done"), (a = n(this, mi)) == null || a.remove();
      return;
    }
    t.classList.add("done"), t.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-edit-button");
  }
  let e = n(this, mi);
  if (!e) {
    g(this, mi, e = document.createElement("span")), e.className = "tooltip", e.setAttribute("role", "tooltip"), e.id = `alt-text-tooltip-${n(this, Xe).id}`;
    const o = 100, l = n(this, Xe)._uiManager._signal;
    l.addEventListener("abort", () => {
      clearTimeout(n(this, rs)), g(this, rs, null);
    }, {
      once: !0
    }), t.addEventListener("mouseenter", () => {
      g(this, rs, setTimeout(() => {
        g(this, rs, null), n(this, mi).classList.add("show"), n(this, Xe)._reportTelemetry({
          action: "alt_text_tooltip"
        });
      }, o));
    }, {
      signal: l
    }), t.addEventListener("mouseleave", () => {
      var h;
      n(this, rs) && (clearTimeout(n(this, rs)), g(this, rs, null)), (h = n(this, mi)) == null || h.classList.remove("show");
    }, {
      signal: l
    });
  }
  n(this, gi) ? e.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-decorative-tooltip") : (e.removeAttribute("data-l10n-id"), e.textContent = n(this, le)), e.parentNode || t.append(e);
  const s = n(this, Xe).getElementForAltText();
  s == null || s.setAttribute("aria-describedby", e.id);
}, y(Oe, Kn, null), N(Oe, "_l10n", null);
let gu = Oe;
var be, Is, Wr, Rt, Yh, jr, js, Vr, qr, Xr, Kh, Pf;
class Cd {
  constructor(t) {
    y(this, Kh);
    y(this, be, null);
    y(this, Is, null);
    y(this, Wr, !1);
    y(this, Rt, null);
    y(this, Yh, null);
    y(this, jr, null);
    y(this, js, null);
    y(this, Vr, null);
    y(this, qr, !1);
    y(this, Xr, null);
    g(this, Rt, t);
  }
  renderForToolbar() {
    const t = g(this, Is, document.createElement("button"));
    return t.className = "comment", w(this, Kh, Pf).call(this, t, !1);
  }
  renderForStandalone() {
    const t = g(this, be, document.createElement("button"));
    t.className = "annotationCommentButton";
    const e = n(this, Rt).commentButtonPosition;
    if (e) {
      const {
        style: s
      } = t;
      s.insetInlineEnd = `calc(${100 * (n(this, Rt)._uiManager.direction === "ltr" ? 1 - e[0] : e[0])}% - var(--comment-button-dim))`, s.top = `calc(${100 * e[1]}% - var(--comment-button-dim))`;
      const i = n(this, Rt).commentButtonColor;
      i && (s.backgroundColor = i);
    }
    return w(this, Kh, Pf).call(this, t, !0);
  }
  focusButton() {
    setTimeout(() => {
      var t;
      (t = n(this, be) ?? n(this, Is)) == null || t.focus();
    }, 0);
  }
  onUpdatedColor() {
    if (!n(this, be))
      return;
    const t = n(this, Rt).commentButtonColor;
    t && (n(this, be).style.backgroundColor = t), n(this, Rt)._uiManager.updatePopupColor(n(this, Rt));
  }
  get commentButtonWidth() {
    var t;
    return (((t = n(this, be)) == null ? void 0 : t.getBoundingClientRect().width) ?? 0) / n(this, Rt).parent.boundingClientRect.width;
  }
  get commentPopupPositionInLayer() {
    if (n(this, Xr))
      return n(this, Xr);
    if (!n(this, be))
      return null;
    const {
      x: t,
      y: e,
      height: s
    } = n(this, be).getBoundingClientRect(), {
      x: i,
      y: r,
      width: a,
      height: o
    } = n(this, Rt).parent.boundingClientRect;
    return [(t - i) / a, (e + s - r) / o];
  }
  set commentPopupPositionInLayer(t) {
    g(this, Xr, t);
  }
  hasDefaultPopupPosition() {
    return n(this, Xr) === null;
  }
  removeStandaloneCommentButton() {
    var t;
    (t = n(this, be)) == null || t.remove(), g(this, be, null);
  }
  removeToolbarCommentButton() {
    var t;
    (t = n(this, Is)) == null || t.remove(), g(this, Is, null);
  }
  setCommentButtonStates({
    selected: t,
    hasPopup: e
  }) {
    n(this, be) && (n(this, be).classList.toggle("selected", t), n(this, be).ariaExpanded = e);
  }
  edit(t) {
    const e = this.commentPopupPositionInLayer;
    let s, i;
    if (e)
      [s, i] = e;
    else {
      [s, i] = n(this, Rt).commentButtonPosition;
      const {
        width: d,
        height: u,
        x: p,
        y: b
      } = n(this, Rt);
      s = p + s * d, i = b + i * u;
    }
    const r = n(this, Rt).parent.boundingClientRect, {
      x: a,
      y: o,
      width: l,
      height: h
    } = r;
    n(this, Rt)._uiManager.editComment(n(this, Rt), a + s * l, o + i * h, {
      ...t,
      parentDimensions: r
    });
  }
  finish() {
    n(this, Is) && (n(this, Is).focus({
      focusVisible: n(this, Wr)
    }), g(this, Wr, !1));
  }
  isDeleted() {
    return n(this, qr) || n(this, js) === "";
  }
  isEmpty() {
    return n(this, js) === null;
  }
  hasBeenEdited() {
    return this.isDeleted() || n(this, js) !== n(this, Yh);
  }
  serialize() {
    return this.data;
  }
  get data() {
    return {
      text: n(this, js),
      richText: n(this, jr),
      date: n(this, Vr),
      deleted: this.isDeleted()
    };
  }
  set data(t) {
    if (t !== n(this, js) && g(this, jr, null), t === null) {
      g(this, js, ""), g(this, qr, !0);
      return;
    }
    g(this, js, t), g(this, Vr, /* @__PURE__ */ new Date()), g(this, qr, !1);
  }
  setInitialText(t, e = null) {
    g(this, Yh, t), this.data = t, g(this, Vr, null), g(this, jr, e);
  }
  shown() {
  }
  destroy() {
    var t, e;
    (t = n(this, Is)) == null || t.remove(), g(this, Is, null), (e = n(this, be)) == null || e.remove(), g(this, be, null), g(this, js, ""), g(this, jr, null), g(this, Vr, null), g(this, Rt, null), g(this, Wr, !1), g(this, qr, !1);
  }
}
be = new WeakMap(), Is = new WeakMap(), Wr = new WeakMap(), Rt = new WeakMap(), Yh = new WeakMap(), jr = new WeakMap(), js = new WeakMap(), Vr = new WeakMap(), qr = new WeakMap(), Xr = new WeakMap(), Kh = new WeakSet(), Pf = function(t, e) {
  if (!n(this, Rt)._uiManager.hasCommentManager())
    return null;
  t.tabIndex = "0", t.ariaHasPopup = "dialog", e ? (t.ariaControls = "commentPopup", t.setAttribute("data-l10n-id", "pdfjs-show-comment-button")) : (t.ariaControlsElements = [n(this, Rt)._uiManager.getCommentDialogElement()], t.setAttribute("data-l10n-id", "pdfjs-editor-edit-comment-button"));
  const s = n(this, Rt)._uiManager._signal;
  if (!(s instanceof AbortSignal) || s.aborted)
    return t;
  t.addEventListener("contextmenu", _s, {
    signal: s
  }), e && (t.addEventListener("focusin", (r) => {
    n(this, Rt)._focusEventsAllowed = !1, Ut(r);
  }, {
    capture: !0,
    signal: s
  }), t.addEventListener("focusout", (r) => {
    n(this, Rt)._focusEventsAllowed = !0, Ut(r);
  }, {
    capture: !0,
    signal: s
  })), t.addEventListener("pointerdown", (r) => r.stopPropagation(), {
    signal: s
  });
  const i = (r) => {
    r.preventDefault(), t === n(this, Is) ? this.edit() : n(this, Rt).toggleComment(!0);
  };
  return t.addEventListener("click", i, {
    capture: !0,
    signal: s
  }), t.addEventListener("keydown", (r) => {
    r.target === t && r.key === "Enter" && (g(this, Wr, !0), i(r));
  }, {
    signal: s
  }), t.addEventListener("pointerenter", () => {
    n(this, Rt).toggleComment(!1, !0);
  }, {
    signal: s
  }), t.addEventListener("pointerleave", () => {
    n(this, Rt).toggleComment(!1, !1);
  }, {
    signal: s
  }), t;
};
var Oo, Yr, Zh, Jh, Qh, tc, ec, Xi, Kr, Yi, Zr, Ki, Lr, Mm, Im, Fm;
const ag = class ag {
  constructor({
    container: t,
    isPinchingDisabled: e = null,
    isPinchingStopped: s = null,
    onPinchStart: i = null,
    onPinching: r = null,
    onPinchEnd: a = null,
    signal: o
  }) {
    y(this, Lr);
    y(this, Oo);
    y(this, Yr, !1);
    y(this, Zh, null);
    y(this, Jh);
    y(this, Qh);
    y(this, tc);
    y(this, ec);
    y(this, Xi, null);
    y(this, Kr);
    y(this, Yi, null);
    y(this, Zr);
    y(this, Ki, null);
    g(this, Oo, t), g(this, Zh, s), g(this, Jh, e), g(this, Qh, i), g(this, tc, r), g(this, ec, a), g(this, Zr, new AbortController()), g(this, Kr, AbortSignal.any([o, n(this, Zr).signal])), t.addEventListener("touchstart", w(this, Lr, Mm).bind(this), {
      passive: !1,
      signal: n(this, Kr)
    });
  }
  get MIN_TOUCH_DISTANCE_TO_PINCH() {
    return 35 / ri.pixelRatio;
  }
  destroy() {
    var t, e;
    (t = n(this, Zr)) == null || t.abort(), g(this, Zr, null), (e = n(this, Xi)) == null || e.abort(), g(this, Xi, null);
  }
};
Oo = new WeakMap(), Yr = new WeakMap(), Zh = new WeakMap(), Jh = new WeakMap(), Qh = new WeakMap(), tc = new WeakMap(), ec = new WeakMap(), Xi = new WeakMap(), Kr = new WeakMap(), Yi = new WeakMap(), Zr = new WeakMap(), Ki = new WeakMap(), Lr = new WeakSet(), Mm = function(t) {
  var i, r, a;
  if ((i = n(this, Jh)) != null && i.call(this))
    return;
  if (t.touches.length === 1) {
    if (n(this, Xi))
      return;
    const o = g(this, Xi, new AbortController()), l = AbortSignal.any([n(this, Kr), o.signal]), h = n(this, Oo), d = {
      capture: !0,
      signal: l,
      passive: !1
    }, u = (p) => {
      var b;
      p.pointerType === "touch" && ((b = n(this, Xi)) == null || b.abort(), g(this, Xi, null));
    };
    h.addEventListener("pointerdown", (p) => {
      p.pointerType === "touch" && (Ut(p), u(p));
    }, d), h.addEventListener("pointerup", u, d), h.addEventListener("pointercancel", u, d);
    return;
  }
  if (!n(this, Ki)) {
    g(this, Ki, new AbortController());
    const o = AbortSignal.any([n(this, Kr), n(this, Ki).signal]), l = n(this, Oo), h = {
      signal: o,
      capture: !1,
      passive: !1
    };
    l.addEventListener("touchmove", w(this, Lr, Im).bind(this), h);
    const d = w(this, Lr, Fm).bind(this);
    l.addEventListener("touchend", d, h), l.addEventListener("touchcancel", d, h), h.capture = !0, l.addEventListener("pointerdown", Ut, h), l.addEventListener("pointermove", Ut, h), l.addEventListener("pointercancel", Ut, h), l.addEventListener("pointerup", Ut, h), (r = n(this, Qh)) == null || r.call(this);
  }
  if (Ut(t), t.touches.length !== 2 || (a = n(this, Zh)) != null && a.call(this)) {
    g(this, Yi, null);
    return;
  }
  let [e, s] = t.touches;
  e.identifier > s.identifier && ([e, s] = [s, e]), g(this, Yi, {
    touch0X: e.screenX,
    touch0Y: e.screenY,
    touch1X: s.screenX,
    touch1Y: s.screenY
  });
}, Im = function(t) {
  var f;
  if (!n(this, Yi) || t.touches.length !== 2)
    return;
  Ut(t);
  let [e, s] = t.touches;
  e.identifier > s.identifier && ([e, s] = [s, e]);
  const {
    screenX: i,
    screenY: r
  } = e, {
    screenX: a,
    screenY: o
  } = s, l = n(this, Yi), {
    touch0X: h,
    touch0Y: d,
    touch1X: u,
    touch1Y: p
  } = l, b = u - h, S = p - d, v = a - i, E = o - r, x = Math.hypot(v, E) || 1, T = Math.hypot(b, S) || 1;
  if (!n(this, Yr) && Math.abs(T - x) <= ag.MIN_TOUCH_DISTANCE_TO_PINCH)
    return;
  if (l.touch0X = i, l.touch0Y = r, l.touch1X = a, l.touch1Y = o, !n(this, Yr)) {
    g(this, Yr, !0);
    return;
  }
  const _ = [(i + a) / 2, (r + o) / 2];
  (f = n(this, tc)) == null || f.call(this, _, T, x);
}, Fm = function(t) {
  var e;
  t.touches.length >= 2 || (n(this, Ki) && (n(this, Ki).abort(), g(this, Ki, null), (e = n(this, ec)) == null || e.call(this)), n(this, Yi) && (Ut(t), g(this, Yi, null), g(this, Yr, !1)));
};
let kh = ag;
var Jr, Vs, Nt, xt, Zi, Bo, Zn, sc, ye, Qr, Ji, wi, Jn, ic, ta, as, nc, ea, Qi, Ai, $o, Ho, Fs, sa, rc, ku, Y, Rf, ac, kf, $d, Nm, Om, Lf, Hd, Df, Bm, $m, Hm, Mf, Um, If, zm, Gm, Wm, Ff, lh;
const Q = class Q {
  constructor(t) {
    y(this, Y);
    y(this, Jr, null);
    y(this, Vs, null);
    y(this, Nt, null);
    y(this, xt, null);
    y(this, Zi, null);
    y(this, Bo, !1);
    y(this, Zn, null);
    y(this, sc, "");
    y(this, ye, null);
    y(this, Qr, null);
    y(this, Ji, null);
    y(this, wi, null);
    y(this, Jn, null);
    y(this, ic, "");
    y(this, ta, !1);
    y(this, as, null);
    y(this, nc, !1);
    y(this, ea, !1);
    y(this, Qi, !1);
    y(this, Ai, null);
    y(this, $o, 0);
    y(this, Ho, 0);
    y(this, Fs, null);
    y(this, sa, null);
    N(this, "isSelected", !1);
    N(this, "_isCopy", !1);
    N(this, "_editToolbar", null);
    N(this, "_initialOptions", /* @__PURE__ */ Object.create(null));
    N(this, "_initialData", null);
    N(this, "_isVisible", !0);
    N(this, "_uiManager", null);
    N(this, "_focusEventsAllowed", !0);
    y(this, rc, !1);
    y(this, ku, Q._zIndex++);
    this.parent = t.parent, this.id = t.id, this.width = this.height = null, this.pageIndex = t.parent.pageIndex, this.name = t.name, this.div = null, this._uiManager = t.uiManager, this.annotationElementId = null, this._willKeepAspectRatio = !1, this._initialOptions.isCentered = t.isCentered, this._structTreeParentId = null, this.annotationElementId = t.annotationElementId || null, this.creationDate = t.creationDate || /* @__PURE__ */ new Date(), this.modificationDate = t.modificationDate || null;
    const {
      rotation: e,
      rawDims: {
        pageWidth: s,
        pageHeight: i,
        pageX: r,
        pageY: a
      }
    } = this.parent.viewport;
    this.rotation = e, this.pageRotation = (360 + e - this._uiManager.viewParameters.rotation) % 360, this.pageDimensions = [s, i], this.pageTranslation = [r, a];
    const [o, l] = this.parentDimensions;
    this.x = t.x / o, this.y = t.y / l, this.isAttachedToDOM = !1, this.deleted = !1;
  }
  static get _resizerKeyboardManager() {
    const t = Q.prototype._resizeWithKeyboard, e = kr.TRANSLATE_SMALL, s = kr.TRANSLATE_BIG;
    return et(this, "_resizerKeyboardManager", new yd([[["ArrowLeft", "mac+ArrowLeft"], t, {
      args: [-e, 0]
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t, {
      args: [-s, 0]
    }], [["ArrowRight", "mac+ArrowRight"], t, {
      args: [e, 0]
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t, {
      args: [s, 0]
    }], [["ArrowUp", "mac+ArrowUp"], t, {
      args: [0, -e]
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t, {
      args: [0, -s]
    }], [["ArrowDown", "mac+ArrowDown"], t, {
      args: [0, e]
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t, {
      args: [0, s]
    }], [["Escape", "mac+Escape"], Q.prototype._stopResizingWithKeyboard]]));
  }
  get editorType() {
    return Object.getPrototypeOf(this).constructor._type;
  }
  get mode() {
    return Object.getPrototypeOf(this).constructor._editorType;
  }
  static get isDrawer() {
    return !1;
  }
  static get _defaultLineColor() {
    return et(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
  }
  static deleteAnnotationElement(t) {
    const e = new O0({
      id: t.parent.getNextId(),
      parent: t.parent,
      uiManager: t._uiManager
    });
    e.annotationElementId = t.annotationElementId, e.deleted = !0, e._uiManager.addToAnnotationStorage(e);
  }
  static initialize(t, e) {
    if (Q._l10n ?? (Q._l10n = t), Q._l10nResizer || (Q._l10nResizer = Object.freeze({
      topLeft: "pdfjs-editor-resizer-top-left",
      topMiddle: "pdfjs-editor-resizer-top-middle",
      topRight: "pdfjs-editor-resizer-top-right",
      middleRight: "pdfjs-editor-resizer-middle-right",
      bottomRight: "pdfjs-editor-resizer-bottom-right",
      bottomMiddle: "pdfjs-editor-resizer-bottom-middle",
      bottomLeft: "pdfjs-editor-resizer-bottom-left",
      middleLeft: "pdfjs-editor-resizer-middle-left"
    })), Q._borderLineWidth !== -1)
      return;
    const s = getComputedStyle(document.documentElement);
    Q._borderLineWidth = parseFloat(s.getPropertyValue("--outline-width")) || 0;
  }
  static updateDefaultParams(t, e) {
  }
  static get defaultPropertiesToUpdate() {
    return [];
  }
  static isHandlingMimeForPasting(t) {
    return !1;
  }
  static paste(t, e) {
    Tt("Not implemented");
  }
  get propertiesToUpdate() {
    return [];
  }
  get _isDraggable() {
    return n(this, rc);
  }
  set _isDraggable(t) {
    var e;
    g(this, rc, t), (e = this.div) == null || e.classList.toggle("draggable", t);
  }
  get uid() {
    return this.annotationElementId || this.id;
  }
  get isEnterHandled() {
    return !0;
  }
  center() {
    const [t, e] = this.pageDimensions;
    switch (this.parentRotation) {
      case 90:
        this.x -= this.height * e / (t * 2), this.y += this.width * t / (e * 2);
        break;
      case 180:
        this.x += this.width / 2, this.y += this.height / 2;
        break;
      case 270:
        this.x += this.height * e / (t * 2), this.y -= this.width * t / (e * 2);
        break;
      default:
        this.x -= this.width / 2, this.y -= this.height / 2;
        break;
    }
    this.fixAndSetPosition();
  }
  addCommands(t) {
    this._uiManager.addCommands(t);
  }
  get currentLayer() {
    return this._uiManager.currentLayer;
  }
  setInBackground() {
    this.div.style.zIndex = 0;
  }
  setInForeground() {
    this.div.style.zIndex = n(this, ku);
  }
  setParent(t) {
    var e;
    t !== null ? (this.pageIndex = t.pageIndex, this.pageDimensions = t.pageDimensions) : (w(this, Y, lh).call(this), (e = n(this, wi)) == null || e.remove(), g(this, wi, null)), this.parent = t;
  }
  focusin(t) {
    this._focusEventsAllowed && (n(this, ta) ? g(this, ta, !1) : this.parent.setSelected(this));
  }
  focusout(t) {
    var s;
    if (!this._focusEventsAllowed || !this.isAttachedToDOM)
      return;
    const e = t.relatedTarget;
    e != null && e.closest(`#${this.id}`) || (t.preventDefault(), (s = this.parent) != null && s.isMultipleSelection || this.commitOrRemove());
  }
  commitOrRemove() {
    this.isEmpty() ? this.remove() : this.commit();
  }
  commit() {
    this.isInEditMode() && this.addToAnnotationStorage();
  }
  addToAnnotationStorage() {
    this._uiManager.addToAnnotationStorage(this);
  }
  setAt(t, e, s, i) {
    const [r, a] = this.parentDimensions;
    [s, i] = this.screenToPageTranslation(s, i), this.x = (t + s) / r, this.y = (e + i) / a, this.fixAndSetPosition();
  }
  _moveAfterPaste(t, e) {
    const [s, i] = this.parentDimensions;
    this.setAt(t * s, e * i, this.width * s, this.height * i), this._onTranslated();
  }
  translate(t, e) {
    w(this, Y, Rf).call(this, this.parentDimensions, t, e);
  }
  translateInPage(t, e) {
    n(this, as) || g(this, as, [this.x, this.y, this.width, this.height]), w(this, Y, Rf).call(this, this.pageDimensions, t, e), this.div.scrollIntoView({
      block: "nearest"
    });
  }
  translationDone() {
    this._onTranslated(this.x, this.y);
  }
  drag(t, e) {
    n(this, as) || g(this, as, [this.x, this.y, this.width, this.height]);
    const {
      div: s,
      parentDimensions: [i, r]
    } = this;
    if (this.x += t / i, this.y += e / r, this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1)) {
      const {
        x: u,
        y: p
      } = this.div.getBoundingClientRect();
      this.parent.findNewParent(this, u, p) && (this.x -= Math.floor(this.x), this.y -= Math.floor(this.y));
    }
    let {
      x: a,
      y: o
    } = this;
    const [l, h] = this.getBaseTranslation();
    a += l, o += h;
    const {
      style: d
    } = s;
    d.left = `${(100 * a).toFixed(2)}%`, d.top = `${(100 * o).toFixed(2)}%`, this._onTranslating(a, o), s.scrollIntoView({
      block: "nearest"
    });
  }
  _onTranslating(t, e) {
  }
  _onTranslated(t, e) {
  }
  get _hasBeenMoved() {
    return !!n(this, as) && (n(this, as)[0] !== this.x || n(this, as)[1] !== this.y);
  }
  get _hasBeenResized() {
    return !!n(this, as) && (n(this, as)[2] !== this.width || n(this, as)[3] !== this.height);
  }
  getBaseTranslation() {
    const [t, e] = this.parentDimensions, {
      _borderLineWidth: s
    } = Q, i = s / t, r = s / e;
    switch (this.rotation) {
      case 90:
        return [-i, r];
      case 180:
        return [i, r];
      case 270:
        return [i, -r];
      default:
        return [-i, -r];
    }
  }
  get _mustFixPosition() {
    return !0;
  }
  fixAndSetPosition(t = this.rotation) {
    const {
      div: {
        style: e
      },
      pageDimensions: [s, i]
    } = this;
    let {
      x: r,
      y: a,
      width: o,
      height: l
    } = this;
    if (o *= s, l *= i, r *= s, a *= i, this._mustFixPosition)
      switch (t) {
        case 0:
          r = Me(r, 0, s - o), a = Me(a, 0, i - l);
          break;
        case 90:
          r = Me(r, 0, s - l), a = Me(a, o, i);
          break;
        case 180:
          r = Me(r, o, s), a = Me(a, l, i);
          break;
        case 270:
          r = Me(r, l, s), a = Me(a, 0, i - o);
          break;
      }
    this.x = r /= s, this.y = a /= i;
    const [h, d] = this.getBaseTranslation();
    r += h, a += d, e.left = `${(100 * r).toFixed(2)}%`, e.top = `${(100 * a).toFixed(2)}%`, this.moveInDOM();
  }
  screenToPageTranslation(t, e) {
    var s;
    return w(s = Q, ac, kf).call(s, t, e, this.parentRotation);
  }
  pageTranslationToScreen(t, e) {
    var s;
    return w(s = Q, ac, kf).call(s, t, e, 360 - this.parentRotation);
  }
  get parentScale() {
    return this._uiManager.viewParameters.realScale;
  }
  get parentRotation() {
    return (this._uiManager.viewParameters.rotation + this.pageRotation) % 360;
  }
  get parentDimensions() {
    const {
      parentScale: t,
      pageDimensions: [e, s]
    } = this;
    return [e * t, s * t];
  }
  setDims() {
    const {
      div: {
        style: t
      },
      width: e,
      height: s
    } = this;
    t.width = `${(100 * e).toFixed(2)}%`, t.height = `${(100 * s).toFixed(2)}%`;
  }
  getInitialTranslation() {
    return [0, 0];
  }
  _onResized() {
  }
  static _round(t) {
    return Math.round(t * 1e4) / 1e4;
  }
  _onResizing() {
  }
  altTextFinish() {
    var t;
    (t = n(this, Nt)) == null || t.finish();
  }
  get toolbarButtons() {
    return null;
  }
  async addEditToolbar() {
    if (this._editToolbar || n(this, ea))
      return this._editToolbar;
    this._editToolbar = new yf(this), this.div.append(this._editToolbar.render());
    const {
      toolbarButtons: t
    } = this;
    if (t)
      for (const [e, s] of t)
        await this._editToolbar.addButton(e, s);
    return this.hasComment || this._editToolbar.addButton("comment", this.addCommentButton()), this._editToolbar.addButton("delete"), this._editToolbar;
  }
  addCommentButtonInToolbar() {
    var t;
    (t = this._editToolbar) == null || t.addButtonBefore("comment", this.addCommentButton(), ".deleteButton");
  }
  removeCommentButtonFromToolbar() {
    var t;
    (t = this._editToolbar) == null || t.removeButton("comment");
  }
  removeEditToolbar() {
    var t, e;
    (t = this._editToolbar) == null || t.remove(), this._editToolbar = null, (e = n(this, Nt)) == null || e.destroy();
  }
  addContainer(t) {
    var s;
    const e = (s = this._editToolbar) == null ? void 0 : s.div;
    e ? e.before(t) : this.div.append(t);
  }
  getClientDimensions() {
    return this.div.getBoundingClientRect();
  }
  createAltText() {
    return n(this, Nt) || (gu.initialize(Q._l10n), g(this, Nt, new gu(this)), n(this, Jr) && (n(this, Nt).data = n(this, Jr), g(this, Jr, null))), n(this, Nt);
  }
  get altTextData() {
    var t;
    return (t = n(this, Nt)) == null ? void 0 : t.data;
  }
  set altTextData(t) {
    n(this, Nt) && (n(this, Nt).data = t);
  }
  get guessedAltText() {
    var t;
    return (t = n(this, Nt)) == null ? void 0 : t.guessedText;
  }
  async setGuessedAltText(t) {
    var e;
    await ((e = n(this, Nt)) == null ? void 0 : e.setGuessedText(t));
  }
  serializeAltText(t) {
    var e;
    return (e = n(this, Nt)) == null ? void 0 : e.serialize(t);
  }
  hasAltText() {
    return !!n(this, Nt) && !n(this, Nt).isEmpty();
  }
  hasAltTextData() {
    var t;
    return ((t = n(this, Nt)) == null ? void 0 : t.hasData()) ?? !1;
  }
  focusCommentButton() {
    var t;
    (t = n(this, xt)) == null || t.focusButton();
  }
  addCommentButton() {
    return n(this, xt) || g(this, xt, new Cd(this));
  }
  addStandaloneCommentButton() {
    if (n(this, Zi)) {
      this._uiManager.isEditingMode() && n(this, Zi).classList.remove("hidden");
      return;
    }
    this.hasComment && (g(this, Zi, n(this, xt).renderForStandalone()), this.div.append(n(this, Zi)));
  }
  removeStandaloneCommentButton() {
    n(this, xt).removeStandaloneCommentButton(), g(this, Zi, null);
  }
  hideStandaloneCommentButton() {
    var t;
    (t = n(this, Zi)) == null || t.classList.add("hidden");
  }
  get comment() {
    const {
      data: {
        richText: t,
        text: e,
        date: s,
        deleted: i
      }
    } = n(this, xt);
    return {
      text: e,
      richText: t,
      date: s,
      deleted: i,
      color: this.getNonHCMColor(),
      opacity: this.opacity ?? 1
    };
  }
  set comment(t) {
    n(this, xt) || g(this, xt, new Cd(this)), n(this, xt).data = t, this.hasComment ? (this.removeCommentButtonFromToolbar(), this.addStandaloneCommentButton(), this._uiManager.updateComment(this)) : (this.addCommentButtonInToolbar(), this.removeStandaloneCommentButton(), this._uiManager.removeComment(this));
  }
  setCommentData({
    comment: t,
    popupRef: e,
    richText: s
  }) {
    if (!e || (n(this, xt) || g(this, xt, new Cd(this)), n(this, xt).setInitialText(t, s), !this.annotationElementId))
      return;
    const i = this._uiManager.getAndRemoveDataFromAnnotationStorage(this.annotationElementId);
    i && this.updateFromAnnotationLayer(i);
  }
  get hasEditedComment() {
    var t;
    return (t = n(this, xt)) == null ? void 0 : t.hasBeenEdited();
  }
  get hasDeletedComment() {
    var t;
    return (t = n(this, xt)) == null ? void 0 : t.isDeleted();
  }
  get hasComment() {
    return !!n(this, xt) && !n(this, xt).isEmpty() && !n(this, xt).isDeleted();
  }
  async editComment(t) {
    n(this, xt) || g(this, xt, new Cd(this)), n(this, xt).edit(t);
  }
  toggleComment(t, e = void 0) {
    this.hasComment && this._uiManager.toggleComment(this, t, e);
  }
  setSelectedCommentButton(t) {
    n(this, xt).setSelectedButton(t);
  }
  addComment(t) {
    if (this.hasEditedComment) {
      const [, , , i] = t.rect, [r] = this.pageDimensions, [a] = this.pageTranslation, o = a + r + 1, l = i - 100, h = o + 180;
      t.popup = {
        contents: this.comment.text,
        deleted: this.comment.deleted,
        rect: [o, l, h, i]
      };
    }
  }
  updateFromAnnotationLayer({
    popup: {
      contents: t,
      deleted: e
    }
  }) {
    n(this, xt).data = e ? null : t;
  }
  get parentBoundingClientRect() {
    return this.parent.boundingClientRect;
  }
  render() {
    var a;
    const t = this.div = document.createElement("div");
    t.setAttribute("data-editor-rotation", (360 - this.rotation) % 360), t.className = this.name, t.setAttribute("id", this.id), t.tabIndex = n(this, Bo) ? -1 : 0, t.setAttribute("role", "application"), this.defaultL10nId && t.setAttribute("data-l10n-id", this.defaultL10nId), this._isVisible || t.classList.add("hidden"), this.setInForeground(), w(this, Y, If).call(this);
    const [e, s] = this.parentDimensions;
    this.parentRotation % 180 !== 0 && (t.style.maxWidth = `${(100 * s / e).toFixed(2)}%`, t.style.maxHeight = `${(100 * e / s).toFixed(2)}%`);
    const [i, r] = this.getInitialTranslation();
    return this.translate(i, r), vm(this, t, ["keydown", "pointerdown", "dblclick"]), this.isResizable && this._uiManager._supportsPinchToZoom && (n(this, sa) || g(this, sa, new kh({
      container: t,
      isPinchingDisabled: () => !this.isSelected,
      onPinchStart: w(this, Y, Bm).bind(this),
      onPinching: w(this, Y, $m).bind(this),
      onPinchEnd: w(this, Y, Hm).bind(this),
      signal: this._uiManager._signal
    }))), this.addStandaloneCommentButton(), (a = this._uiManager._editorUndoBar) == null || a.hide(), t;
  }
  pointerdown(t) {
    const {
      isMac: e
    } = ge.platform;
    if (t.button !== 0 || t.ctrlKey && e) {
      t.preventDefault();
      return;
    }
    if (g(this, ta, !0), this._isDraggable) {
      w(this, Y, Um).call(this, t);
      return;
    }
    w(this, Y, Mf).call(this, t);
  }
  _onStartDragging() {
  }
  _onStopDragging() {
  }
  moveInDOM() {
    n(this, Ai) && clearTimeout(n(this, Ai)), g(this, Ai, setTimeout(() => {
      var t;
      g(this, Ai, null), (t = this.parent) == null || t.moveEditorInDOM(this);
    }, 0));
  }
  _setParentAndPosition(t, e, s) {
    t.changeParent(this), this.x = e, this.y = s, this.fixAndSetPosition(), this._onTranslated();
  }
  getRect(t, e, s = this.rotation) {
    const i = this.parentScale, [r, a] = this.pageDimensions, [o, l] = this.pageTranslation, h = t / i, d = e / i, u = this.x * r, p = this.y * a, b = this.width * r, S = this.height * a;
    switch (s) {
      case 0:
        return [u + h + o, a - p - d - S + l, u + h + b + o, a - p - d + l];
      case 90:
        return [u + d + o, a - p + h + l, u + d + S + o, a - p + h + b + l];
      case 180:
        return [u - h - b + o, a - p + d + l, u - h + o, a - p + d + S + l];
      case 270:
        return [u - d - S + o, a - p - h - b + l, u - d + o, a - p - h + l];
      default:
        throw new Error("Invalid rotation");
    }
  }
  getRectInCurrentCoords(t, e) {
    const [s, i, r, a] = t, o = r - s, l = a - i;
    switch (this.rotation) {
      case 0:
        return [s, e - a, o, l];
      case 90:
        return [s, e - i, l, o];
      case 180:
        return [r, e - i, o, l];
      case 270:
        return [r, e - a, l, o];
      default:
        throw new Error("Invalid rotation");
    }
  }
  getPDFRect() {
    return this.getRect(0, 0);
  }
  getNonHCMColor() {
    return this.color && Q._colorManager.convert(this._uiManager.getNonHCMColor(this.color));
  }
  onUpdatedColor() {
    var t;
    (t = n(this, xt)) == null || t.onUpdatedColor();
  }
  getData() {
    const {
      comment: {
        text: t,
        color: e,
        date: s,
        opacity: i,
        deleted: r,
        richText: a
      },
      uid: o,
      pageIndex: l,
      creationDate: h,
      modificationDate: d
    } = this;
    return {
      id: o,
      pageIndex: l,
      rect: this.getPDFRect(),
      richText: a,
      contentsObj: {
        str: t
      },
      creationDate: h,
      modificationDate: s || d,
      popupRef: !r,
      color: e,
      opacity: i
    };
  }
  onceAdded(t) {
  }
  isEmpty() {
    return !1;
  }
  enableEditMode() {
    return this.isInEditMode() ? !1 : (this.parent.setEditingState(!1), g(this, ea, !0), !0);
  }
  disableEditMode() {
    return this.isInEditMode() ? (this.parent.setEditingState(!0), g(this, ea, !1), !0) : !1;
  }
  isInEditMode() {
    return n(this, ea);
  }
  shouldGetKeyboardEvents() {
    return n(this, Qi);
  }
  needsToBeRebuilt() {
    return this.div && !this.isAttachedToDOM;
  }
  get isOnScreen() {
    const {
      top: t,
      left: e,
      bottom: s,
      right: i
    } = this.getClientDimensions(), {
      innerHeight: r,
      innerWidth: a
    } = window;
    return e < a && i > 0 && t < r && s > 0;
  }
  rebuild() {
    w(this, Y, If).call(this);
  }
  rotate(t) {
  }
  resize() {
  }
  serializeDeleted() {
    var t;
    return {
      id: this.annotationElementId,
      deleted: !0,
      pageIndex: this.pageIndex,
      popupRef: ((t = this._initialData) == null ? void 0 : t.popupRef) || ""
    };
  }
  serialize(t = !1, e = null) {
    var s;
    return {
      annotationType: this.mode,
      pageIndex: this.pageIndex,
      rect: this.getPDFRect(),
      rotation: this.rotation,
      structTreeParentId: this._structTreeParentId,
      popupRef: ((s = this._initialData) == null ? void 0 : s.popupRef) || ""
    };
  }
  static async deserialize(t, e, s) {
    const i = new this.prototype.constructor({
      parent: e,
      id: e.getNextId(),
      uiManager: s,
      annotationElementId: t.annotationElementId,
      creationDate: t.creationDate,
      modificationDate: t.modificationDate
    });
    i.rotation = t.rotation, g(i, Jr, t.accessibilityData), i._isCopy = t.isCopy || !1;
    const [r, a] = i.pageDimensions, [o, l, h, d] = i.getRectInCurrentCoords(t.rect, a);
    return i.x = o / r, i.y = l / a, i.width = h / r, i.height = d / a, i;
  }
  get hasBeenModified() {
    return !!this.annotationElementId && (this.deleted || this.serialize() !== null);
  }
  remove() {
    var t, e;
    if ((t = n(this, Jn)) == null || t.abort(), g(this, Jn, null), this.isEmpty() || this.commit(), this.parent ? this.parent.remove(this) : this._uiManager.removeEditor(this), n(this, Ai) && (clearTimeout(n(this, Ai)), g(this, Ai, null)), w(this, Y, lh).call(this), this.removeEditToolbar(), n(this, Fs)) {
      for (const s of n(this, Fs).values())
        clearTimeout(s);
      g(this, Fs, null);
    }
    this.parent = null, (e = n(this, sa)) == null || e.destroy(), g(this, sa, null);
  }
  get isResizable() {
    return !1;
  }
  makeResizable() {
    this.isResizable && (w(this, Y, Nm).call(this), n(this, ye).classList.remove("hidden"));
  }
  get toolbarPosition() {
    return null;
  }
  get commentButtonPosition() {
    return this._uiManager.direction === "ltr" ? [1, 0] : [0, 0];
  }
  get commentButtonPositionInPage() {
    const {
      commentButtonPosition: [t, e]
    } = this, [s, i, r, a] = this.getPDFRect();
    return [Q._round(s + (r - s) * t), Q._round(i + (a - i) * (1 - e))];
  }
  get commentButtonColor() {
    return this._uiManager.makeCommentColor(this.getNonHCMColor(), this.opacity);
  }
  get commentPopupPosition() {
    return n(this, xt).commentPopupPositionInLayer;
  }
  set commentPopupPosition(t) {
    n(this, xt).commentPopupPositionInLayer = t;
  }
  hasDefaultPopupPosition() {
    return n(this, xt).hasDefaultPopupPosition();
  }
  get commentButtonWidth() {
    return n(this, xt).commentButtonWidth;
  }
  get elementBeforePopup() {
    return this.div;
  }
  setCommentButtonStates(t) {
    n(this, xt).setCommentButtonStates(t);
  }
  keydown(t) {
    if (!this.isResizable || t.target !== this.div || t.key !== "Enter")
      return;
    this._uiManager.setSelected(this), g(this, Ji, {
      savedX: this.x,
      savedY: this.y,
      savedWidth: this.width,
      savedHeight: this.height
    });
    const e = n(this, ye).children;
    if (!n(this, Vs)) {
      g(this, Vs, Array.from(e));
      const a = w(this, Y, zm).bind(this), o = w(this, Y, Gm).bind(this), l = this._uiManager._signal;
      for (const h of n(this, Vs)) {
        const d = h.getAttribute("data-resizer-name");
        h.setAttribute("role", "spinbutton"), h.addEventListener("keydown", a, {
          signal: l
        }), h.addEventListener("blur", o, {
          signal: l
        }), h.addEventListener("focus", w(this, Y, Wm).bind(this, d), {
          signal: l
        }), h.setAttribute("data-l10n-id", Q._l10nResizer[d]);
      }
    }
    const s = n(this, Vs)[0];
    let i = 0;
    for (const a of e) {
      if (a === s)
        break;
      i++;
    }
    const r = (360 - this.rotation + this.parentRotation) % 360 / 90 * (n(this, Vs).length / 4);
    if (r !== i) {
      if (r < i)
        for (let o = 0; o < i - r; o++)
          n(this, ye).append(n(this, ye).firstChild);
      else if (r > i)
        for (let o = 0; o < r - i; o++)
          n(this, ye).firstChild.before(n(this, ye).lastChild);
      let a = 0;
      for (const o of e) {
        const h = n(this, Vs)[a++].getAttribute("data-resizer-name");
        o.setAttribute("data-l10n-id", Q._l10nResizer[h]);
      }
    }
    w(this, Y, Ff).call(this, 0), g(this, Qi, !0), n(this, ye).firstChild.focus({
      focusVisible: !0
    }), t.preventDefault(), t.stopImmediatePropagation();
  }
  _resizeWithKeyboard(t, e) {
    n(this, Qi) && w(this, Y, Df).call(this, n(this, ic), {
      deltaX: t,
      deltaY: e,
      fromKeyboard: !0
    });
  }
  _stopResizingWithKeyboard() {
    w(this, Y, lh).call(this), this.div.focus();
  }
  select() {
    var t, e, s;
    if (this.isSelected && this._editToolbar) {
      this._editToolbar.show();
      return;
    }
    if (this.isSelected = !0, this.makeResizable(), (t = this.div) == null || t.classList.add("selectedEditor"), !this._editToolbar) {
      this.addEditToolbar().then(() => {
        var i, r;
        (i = this.div) != null && i.classList.contains("selectedEditor") && ((r = this._editToolbar) == null || r.show());
      });
      return;
    }
    (e = this._editToolbar) == null || e.show(), (s = n(this, Nt)) == null || s.toggleAltTextBadge(!1);
  }
  focus() {
    this.div && !this.div.contains(document.activeElement) && setTimeout(() => {
      var t;
      return (t = this.div) == null ? void 0 : t.focus({
        preventScroll: !0
      });
    }, 0);
  }
  unselect() {
    var t, e, s, i, r;
    this.isSelected && (this.isSelected = !1, (t = n(this, ye)) == null || t.classList.add("hidden"), (e = this.div) == null || e.classList.remove("selectedEditor"), (s = this.div) != null && s.contains(document.activeElement) && this._uiManager.currentLayer.div.focus({
      preventScroll: !0
    }), (i = this._editToolbar) == null || i.hide(), (r = n(this, Nt)) == null || r.toggleAltTextBadge(!0), this.hasComment && this._uiManager.toggleComment(this, !1, !1));
  }
  updateParams(t, e) {
  }
  disableEditing() {
  }
  enableEditing() {
  }
  get canChangeContent() {
    return !1;
  }
  enterInEditMode() {
    this.canChangeContent && (this.enableEditMode(), this.div.focus());
  }
  dblclick(t) {
    t.target.nodeName !== "BUTTON" && (this.enterInEditMode(), this.parent.updateToolbar({
      mode: this.constructor._editorType,
      editId: this.id
    }));
  }
  getElementForAltText() {
    return this.div;
  }
  get contentDiv() {
    return this.div;
  }
  get isEditing() {
    return n(this, nc);
  }
  set isEditing(t) {
    g(this, nc, t), this.parent && (t ? (this.parent.setSelected(this), this.parent.setActiveEditor(this)) : this.parent.setActiveEditor(null));
  }
  static get MIN_SIZE() {
    return 16;
  }
  static canCreateNewEmptyEditor() {
    return !0;
  }
  get telemetryInitialData() {
    return {
      action: "added"
    };
  }
  get telemetryFinalData() {
    return null;
  }
  _reportTelemetry(t, e = !1) {
    if (e) {
      n(this, Fs) || g(this, Fs, /* @__PURE__ */ new Map());
      const {
        action: s
      } = t;
      let i = n(this, Fs).get(s);
      i && clearTimeout(i), i = setTimeout(() => {
        this._reportTelemetry(t), n(this, Fs).delete(s), n(this, Fs).size === 0 && g(this, Fs, null);
      }, Q._telemetryTimeout), n(this, Fs).set(s, i);
      return;
    }
    t.type || (t.type = this.editorType), this._uiManager._eventBus.dispatch("reporttelemetry", {
      source: this,
      details: {
        type: "editing",
        data: t
      }
    });
  }
  show(t = this._isVisible) {
    this.div.classList.toggle("hidden", !t), this._isVisible = t;
  }
  enable() {
    this.div && (this.div.tabIndex = 0), g(this, Bo, !1);
  }
  disable() {
    this.div && (this.div.tabIndex = -1), g(this, Bo, !0);
  }
  updateFakeAnnotationElement(t) {
    if (!n(this, wi) && !this.deleted) {
      g(this, wi, t.addFakeAnnotation(this));
      return;
    }
    if (this.deleted) {
      n(this, wi).remove(), g(this, wi, null);
      return;
    }
    (this.hasEditedComment || this._hasBeenMoved || this._hasBeenResized) && n(this, wi).updateEdited({
      rect: this.getPDFRect(),
      popup: this.comment
    });
  }
  renderAnnotationElement(t) {
    if (this.deleted)
      return t.hide(), null;
    let e = t.container.querySelector(".annotationContent");
    if (!e)
      e = document.createElement("div"), e.classList.add("annotationContent", this.editorType), t.container.prepend(e);
    else if (e.nodeName === "CANVAS") {
      const s = e;
      e = document.createElement("div"), e.classList.add("annotationContent", this.editorType), s.before(e);
    }
    return e;
  }
  resetAnnotationElement(t) {
    const {
      firstChild: e
    } = t.container;
    (e == null ? void 0 : e.nodeName) === "DIV" && e.classList.contains("annotationContent") && e.remove();
  }
};
Jr = new WeakMap(), Vs = new WeakMap(), Nt = new WeakMap(), xt = new WeakMap(), Zi = new WeakMap(), Bo = new WeakMap(), Zn = new WeakMap(), sc = new WeakMap(), ye = new WeakMap(), Qr = new WeakMap(), Ji = new WeakMap(), wi = new WeakMap(), Jn = new WeakMap(), ic = new WeakMap(), ta = new WeakMap(), as = new WeakMap(), nc = new WeakMap(), ea = new WeakMap(), Qi = new WeakMap(), Ai = new WeakMap(), $o = new WeakMap(), Ho = new WeakMap(), Fs = new WeakMap(), sa = new WeakMap(), rc = new WeakMap(), ku = new WeakMap(), Y = new WeakSet(), Rf = function([t, e], s, i) {
  [s, i] = this.screenToPageTranslation(s, i), this.x += s / t, this.y += i / e, this._onTranslating(this.x, this.y), this.fixAndSetPosition();
}, ac = new WeakSet(), kf = function(t, e, s) {
  switch (s) {
    case 90:
      return [e, -t];
    case 180:
      return [-t, -e];
    case 270:
      return [-e, t];
    default:
      return [t, e];
  }
}, $d = function(t) {
  switch (t) {
    case 90: {
      const [e, s] = this.pageDimensions;
      return [0, -e / s, s / e, 0];
    }
    case 180:
      return [-1, 0, 0, -1];
    case 270: {
      const [e, s] = this.pageDimensions;
      return [0, e / s, -s / e, 0];
    }
    default:
      return [1, 0, 0, 1];
  }
}, Nm = function() {
  if (n(this, ye))
    return;
  g(this, ye, document.createElement("div")), n(this, ye).classList.add("resizers");
  const t = this._willKeepAspectRatio ? ["topLeft", "topRight", "bottomRight", "bottomLeft"] : ["topLeft", "topMiddle", "topRight", "middleRight", "bottomRight", "bottomMiddle", "bottomLeft", "middleLeft"], e = this._uiManager._signal;
  for (const s of t) {
    const i = document.createElement("div");
    n(this, ye).append(i), i.classList.add("resizer", s), i.setAttribute("data-resizer-name", s), i.addEventListener("pointerdown", w(this, Y, Om).bind(this, s), {
      signal: e
    }), i.addEventListener("contextmenu", _s, {
      signal: e
    }), i.tabIndex = -1;
  }
  this.div.prepend(n(this, ye));
}, Om = function(t, e) {
  var d;
  e.preventDefault();
  const {
    isMac: s
  } = ge.platform;
  if (e.button !== 0 || e.ctrlKey && s)
    return;
  (d = n(this, Nt)) == null || d.toggle(!1);
  const i = this._isDraggable;
  this._isDraggable = !1, g(this, Qr, [e.screenX, e.screenY]);
  const r = new AbortController(), a = this._uiManager.combinedSignal(r);
  this.parent.togglePointerEvents(!1), window.addEventListener("pointermove", w(this, Y, Df).bind(this, t), {
    passive: !0,
    capture: !0,
    signal: a
  }), window.addEventListener("touchmove", Ut, {
    passive: !1,
    signal: a
  }), window.addEventListener("contextmenu", _s, {
    signal: a
  }), g(this, Ji, {
    savedX: this.x,
    savedY: this.y,
    savedWidth: this.width,
    savedHeight: this.height
  });
  const o = this.parent.div.style.cursor, l = this.div.style.cursor;
  this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(e.target).cursor;
  const h = () => {
    var u;
    r.abort(), this.parent.togglePointerEvents(!0), (u = n(this, Nt)) == null || u.toggle(!0), this._isDraggable = i, this.parent.div.style.cursor = o, this.div.style.cursor = l, w(this, Y, Hd).call(this);
  };
  window.addEventListener("pointerup", h, {
    signal: a
  }), window.addEventListener("blur", h, {
    signal: a
  });
}, Lf = function(t, e, s, i) {
  this.width = s, this.height = i, this.x = t, this.y = e, this.setDims(), this.fixAndSetPosition(), this._onResized();
}, Hd = function() {
  if (!n(this, Ji))
    return;
  const {
    savedX: t,
    savedY: e,
    savedWidth: s,
    savedHeight: i
  } = n(this, Ji);
  g(this, Ji, null);
  const r = this.x, a = this.y, o = this.width, l = this.height;
  r === t && a === e && o === s && l === i || this.addCommands({
    cmd: w(this, Y, Lf).bind(this, r, a, o, l),
    undo: w(this, Y, Lf).bind(this, t, e, s, i),
    mustExec: !0
  });
}, Df = function(t, e) {
  const [s, i] = this.parentDimensions, r = this.x, a = this.y, o = this.width, l = this.height, h = Q.MIN_SIZE / s, d = Q.MIN_SIZE / i, u = w(this, Y, $d).call(this, this.rotation), p = (k, I) => [u[0] * k + u[2] * I, u[1] * k + u[3] * I], b = w(this, Y, $d).call(this, 360 - this.rotation), S = (k, I) => [b[0] * k + b[2] * I, b[1] * k + b[3] * I];
  let v, E, x = !1, T = !1;
  switch (t) {
    case "topLeft":
      x = !0, v = (k, I) => [0, 0], E = (k, I) => [k, I];
      break;
    case "topMiddle":
      v = (k, I) => [k / 2, 0], E = (k, I) => [k / 2, I];
      break;
    case "topRight":
      x = !0, v = (k, I) => [k, 0], E = (k, I) => [0, I];
      break;
    case "middleRight":
      T = !0, v = (k, I) => [k, I / 2], E = (k, I) => [0, I / 2];
      break;
    case "bottomRight":
      x = !0, v = (k, I) => [k, I], E = (k, I) => [0, 0];
      break;
    case "bottomMiddle":
      v = (k, I) => [k / 2, I], E = (k, I) => [k / 2, 0];
      break;
    case "bottomLeft":
      x = !0, v = (k, I) => [0, I], E = (k, I) => [k, 0];
      break;
    case "middleLeft":
      T = !0, v = (k, I) => [0, I / 2], E = (k, I) => [k, I / 2];
      break;
  }
  const _ = v(o, l), f = E(o, l);
  let m = p(...f);
  const A = Q._round(r + m[0]), C = Q._round(a + m[1]);
  let P = 1, R = 1, L, D;
  if (e.fromKeyboard)
    ({
      deltaX: L,
      deltaY: D
    } = e);
  else {
    const {
      screenX: k,
      screenY: I
    } = e, [B, q] = n(this, Qr);
    [L, D] = this.screenToPageTranslation(k - B, I - q), n(this, Qr)[0] = k, n(this, Qr)[1] = I;
  }
  if ([L, D] = S(L / s, D / i), x) {
    const k = Math.hypot(o, l);
    P = R = Math.max(Math.min(Math.hypot(f[0] - _[0] - L, f[1] - _[1] - D) / k, 1 / o, 1 / l), h / o, d / l);
  } else T ? P = Me(Math.abs(f[0] - _[0] - L), h, 1) / o : R = Me(Math.abs(f[1] - _[1] - D), d, 1) / l;
  const F = Q._round(o * P), U = Q._round(l * R);
  m = p(...E(F, U));
  const O = A - m[0], X = C - m[1];
  n(this, as) || g(this, as, [this.x, this.y, this.width, this.height]), this.width = F, this.height = U, this.x = O, this.y = X, this.setDims(), this.fixAndSetPosition(), this._onResizing();
}, Bm = function() {
  var t;
  g(this, Ji, {
    savedX: this.x,
    savedY: this.y,
    savedWidth: this.width,
    savedHeight: this.height
  }), (t = n(this, Nt)) == null || t.toggle(!1), this.parent.togglePointerEvents(!1);
}, $m = function(t, e, s) {
  let r = 0.7 * (s / e) + 1 - 0.7;
  if (r === 1)
    return;
  const a = w(this, Y, $d).call(this, this.rotation), o = (A, C) => [a[0] * A + a[2] * C, a[1] * A + a[3] * C], [l, h] = this.parentDimensions, d = this.x, u = this.y, p = this.width, b = this.height, S = Q.MIN_SIZE / l, v = Q.MIN_SIZE / h;
  r = Math.max(Math.min(r, 1 / p, 1 / b), S / p, v / b);
  const E = Q._round(p * r), x = Q._round(b * r);
  if (E === p && x === b)
    return;
  n(this, as) || g(this, as, [d, u, p, b]);
  const T = o(p / 2, b / 2), _ = Q._round(d + T[0]), f = Q._round(u + T[1]), m = o(E / 2, x / 2);
  this.x = _ - m[0], this.y = f - m[1], this.width = E, this.height = x, this.setDims(), this.fixAndSetPosition(), this._onResizing();
}, Hm = function() {
  var t;
  (t = n(this, Nt)) == null || t.toggle(!0), this.parent.togglePointerEvents(!0), w(this, Y, Hd).call(this);
}, Mf = function(t) {
  const {
    isMac: e
  } = ge.platform;
  t.ctrlKey && !e || t.shiftKey || t.metaKey && e ? this.parent.toggleSelected(this) : this.parent.setSelected(this);
}, Um = function(t) {
  const {
    isSelected: e
  } = this;
  this._uiManager.setUpDragSession();
  let s = !1;
  const i = new AbortController(), r = this._uiManager.combinedSignal(i), a = {
    capture: !0,
    passive: !1,
    signal: r
  }, o = (h) => {
    i.abort(), g(this, Zn, null), g(this, ta, !1), this._uiManager.endDragSession() || w(this, Y, Mf).call(this, h), s && this._onStopDragging();
  };
  e && (g(this, $o, t.clientX), g(this, Ho, t.clientY), g(this, Zn, t.pointerId), g(this, sc, t.pointerType), window.addEventListener("pointermove", (h) => {
    s || (s = !0, this._uiManager.toggleComment(this, !0, !1), this._onStartDragging());
    const {
      clientX: d,
      clientY: u,
      pointerId: p
    } = h;
    if (p !== n(this, Zn)) {
      Ut(h);
      return;
    }
    const [b, S] = this.screenToPageTranslation(d - n(this, $o), u - n(this, Ho));
    g(this, $o, d), g(this, Ho, u), this._uiManager.dragSelectedEditors(b, S);
  }, a), window.addEventListener("touchmove", Ut, a), window.addEventListener("pointerdown", (h) => {
    h.pointerType === n(this, sc) && (n(this, sa) || h.isPrimary) && o(h), Ut(h);
  }, a));
  const l = (h) => {
    if (!n(this, Zn) || n(this, Zn) === h.pointerId) {
      o(h);
      return;
    }
    Ut(h);
  };
  window.addEventListener("pointerup", l, {
    signal: r
  }), window.addEventListener("blur", l, {
    signal: r
  });
}, If = function() {
  if (n(this, Jn) || !this.div)
    return;
  g(this, Jn, new AbortController());
  const t = this._uiManager.combinedSignal(n(this, Jn));
  this.div.addEventListener("focusin", this.focusin.bind(this), {
    signal: t
  }), this.div.addEventListener("focusout", this.focusout.bind(this), {
    signal: t
  });
}, zm = function(t) {
  Q._resizerKeyboardManager.exec(this, t);
}, Gm = function(t) {
  var e;
  n(this, Qi) && ((e = t.relatedTarget) == null ? void 0 : e.parentNode) !== n(this, ye) && w(this, Y, lh).call(this);
}, Wm = function(t) {
  g(this, ic, n(this, Qi) ? t : "");
}, Ff = function(t) {
  if (n(this, Vs))
    for (const e of n(this, Vs))
      e.tabIndex = t;
}, lh = function() {
  g(this, Qi, !1), w(this, Y, Ff).call(this, -1), w(this, Y, Hd).call(this);
}, y(Q, ac), N(Q, "_l10n", null), N(Q, "_l10nResizer", null), N(Q, "_borderLineWidth", -1), N(Q, "_colorManager", new vf()), N(Q, "_zIndex", 1), N(Q, "_telemetryTimeout", 1e3);
let kt = Q;
class O0 extends kt {
  constructor(t) {
    super(t), this.annotationElementId = t.annotationElementId, this.deleted = !0;
  }
  serialize() {
    return this.serializeDeleted();
  }
}
const vg = 3285377520, Cs = 4294901760, hi = 65535;
class jm {
  constructor(t) {
    this.h1 = t ? t & 4294967295 : vg, this.h2 = t ? t & 4294967295 : vg;
  }
  update(t) {
    let e, s;
    if (typeof t == "string") {
      e = new Uint8Array(t.length * 2), s = 0;
      for (let v = 0, E = t.length; v < E; v++) {
        const x = t.charCodeAt(v);
        x <= 255 ? e[s++] = x : (e[s++] = x >>> 8, e[s++] = x & 255);
      }
    } else if (ArrayBuffer.isView(t))
      e = t.slice(), s = e.byteLength;
    else
      throw new Error("Invalid data format, must be a string or TypedArray.");
    const i = s >> 2, r = s - i * 4, a = new Uint32Array(e.buffer, 0, i);
    let o = 0, l = 0, h = this.h1, d = this.h2;
    const u = 3432918353, p = 461845907, b = u & hi, S = p & hi;
    for (let v = 0; v < i; v++)
      v & 1 ? (o = a[v], o = o * u & Cs | o * b & hi, o = o << 15 | o >>> 17, o = o * p & Cs | o * S & hi, h ^= o, h = h << 13 | h >>> 19, h = h * 5 + 3864292196) : (l = a[v], l = l * u & Cs | l * b & hi, l = l << 15 | l >>> 17, l = l * p & Cs | l * S & hi, d ^= l, d = d << 13 | d >>> 19, d = d * 5 + 3864292196);
    switch (o = 0, r) {
      case 3:
        o ^= e[i * 4 + 2] << 16;
      case 2:
        o ^= e[i * 4 + 1] << 8;
      case 1:
        o ^= e[i * 4], o = o * u & Cs | o * b & hi, o = o << 15 | o >>> 17, o = o * p & Cs | o * S & hi, i & 1 ? h ^= o : d ^= o;
    }
    this.h1 = h, this.h2 = d;
  }
  hexdigest() {
    let t = this.h1, e = this.h2;
    return t ^= e >>> 1, t = t * 3981806797 & Cs | t * 36045 & hi, e = e * 4283543511 & Cs | ((e << 16 | t >>> 16) * 2950163797 & Cs) >>> 16, t ^= e >>> 1, t = t * 444984403 & Cs | t * 60499 & hi, e = e * 3301882366 & Cs | ((e << 16 | t >>> 16) * 3120437893 & Cs) >>> 16, t ^= e >>> 1, (t >>> 0).toString(16).padStart(8, "0") + (e >>> 0).toString(16).padStart(8, "0");
  }
}
const Nf = Object.freeze({
  map: null,
  hash: "",
  transfer: void 0
});
var ia, na, tn, we, Lu, Vm;
class Xp {
  constructor() {
    y(this, Lu);
    y(this, ia, !1);
    y(this, na, null);
    y(this, tn, null);
    y(this, we, /* @__PURE__ */ new Map());
    this.onSetModified = null, this.onResetModified = null, this.onAnnotationEditor = null;
  }
  getValue(t, e) {
    const s = n(this, we).get(t);
    return s === void 0 ? e : Object.assign(e, s);
  }
  getRawValue(t) {
    return n(this, we).get(t);
  }
  remove(t) {
    const e = n(this, we).get(t);
    if (e !== void 0 && (e instanceof kt && n(this, tn).delete(e.annotationElementId), n(this, we).delete(t), n(this, we).size === 0 && this.resetModified(), typeof this.onAnnotationEditor == "function")) {
      for (const s of n(this, we).values())
        if (s instanceof kt)
          return;
      this.onAnnotationEditor(null);
    }
  }
  setValue(t, e) {
    const s = n(this, we).get(t);
    let i = !1;
    if (s !== void 0)
      for (const [r, a] of Object.entries(e))
        s[r] !== a && (i = !0, s[r] = a);
    else
      i = !0, n(this, we).set(t, e);
    i && w(this, Lu, Vm).call(this), e instanceof kt && ((n(this, tn) || g(this, tn, /* @__PURE__ */ new Map())).set(e.annotationElementId, e), typeof this.onAnnotationEditor == "function" && this.onAnnotationEditor(e.constructor._type));
  }
  has(t) {
    return n(this, we).has(t);
  }
  get size() {
    return n(this, we).size;
  }
  resetModified() {
    n(this, ia) && (g(this, ia, !1), typeof this.onResetModified == "function" && this.onResetModified());
  }
  get print() {
    return new qm(this);
  }
  get serializable() {
    if (n(this, we).size === 0)
      return Nf;
    const t = /* @__PURE__ */ new Map(), e = new jm(), s = [], i = /* @__PURE__ */ Object.create(null);
    let r = !1;
    for (const [a, o] of n(this, we)) {
      const l = o instanceof kt ? o.serialize(!1, i) : o;
      l && (t.set(a, l), e.update(`${a}:${JSON.stringify(l)}`), r || (r = !!l.bitmap));
    }
    if (r)
      for (const a of t.values())
        a.bitmap && s.push(a.bitmap);
    return t.size > 0 ? {
      map: t,
      hash: e.hexdigest(),
      transfer: s
    } : Nf;
  }
  get editorStats() {
    let t = null;
    const e = /* @__PURE__ */ new Map();
    let s = 0, i = 0;
    for (const r of n(this, we).values()) {
      if (!(r instanceof kt)) {
        r.popup && (r.popup.deleted ? i += 1 : s += 1);
        continue;
      }
      r.isCommentDeleted ? i += 1 : r.hasEditedComment && (s += 1);
      const a = r.telemetryFinalData;
      if (!a)
        continue;
      const {
        type: o
      } = a;
      e.has(o) || e.set(o, Object.getPrototypeOf(r).constructor), t || (t = /* @__PURE__ */ Object.create(null));
      const l = t[o] || (t[o] = /* @__PURE__ */ new Map());
      for (const [h, d] of Object.entries(a)) {
        if (h === "type")
          continue;
        let u = l.get(h);
        u || (u = /* @__PURE__ */ new Map(), l.set(h, u));
        const p = u.get(d) ?? 0;
        u.set(d, p + 1);
      }
    }
    if ((i > 0 || s > 0) && (t || (t = /* @__PURE__ */ Object.create(null)), t.comments = {
      deleted: i,
      edited: s
    }), !t)
      return null;
    for (const [r, a] of e)
      t[r] = a.computeTelemetryFinalData(t[r]);
    return t;
  }
  resetModifiedIds() {
    g(this, na, null);
  }
  updateEditor(t, e) {
    var i;
    const s = (i = n(this, tn)) == null ? void 0 : i.get(t);
    return s ? (s.updateFromAnnotationLayer(e), !0) : !1;
  }
  getEditor(t) {
    var e;
    return ((e = n(this, tn)) == null ? void 0 : e.get(t)) || null;
  }
  get modifiedIds() {
    if (n(this, na))
      return n(this, na);
    const t = [];
    if (n(this, tn))
      for (const e of n(this, tn).values())
        e.serialize() && t.push(e.annotationElementId);
    return g(this, na, {
      ids: new Set(t),
      hash: t.join(",")
    });
  }
  [Symbol.iterator]() {
    return n(this, we).entries();
  }
}
ia = new WeakMap(), na = new WeakMap(), tn = new WeakMap(), we = new WeakMap(), Lu = new WeakSet(), Vm = function() {
  n(this, ia) || (g(this, ia, !0), typeof this.onSetModified == "function" && this.onSetModified());
};
var oc;
class qm extends Xp {
  constructor(e) {
    super();
    y(this, oc);
    const {
      map: s,
      hash: i,
      transfer: r
    } = e.serializable, a = structuredClone(s, r ? {
      transfer: r
    } : null);
    g(this, oc, {
      map: a,
      hash: i,
      transfer: r
    });
  }
  get print() {
    Tt("Should not call PrintAnnotationStorage.print");
  }
  get serializable() {
    return n(this, oc);
  }
  get modifiedIds() {
    return et(this, "modifiedIds", {
      ids: /* @__PURE__ */ new Set(),
      hash: ""
    });
  }
}
oc = new WeakMap();
var Uo;
class B0 {
  constructor({
    ownerDocument: t = globalThis.document,
    styleElement: e = null
  }) {
    y(this, Uo, /* @__PURE__ */ new Set());
    this._document = t, this.nativeFontFaces = /* @__PURE__ */ new Set(), this.styleElement = null, this.loadingRequests = [], this.loadTestFontId = 0;
  }
  addNativeFontFace(t) {
    this.nativeFontFaces.add(t), this._document.fonts.add(t);
  }
  removeNativeFontFace(t) {
    this.nativeFontFaces.delete(t), this._document.fonts.delete(t);
  }
  insertRule(t) {
    this.styleElement || (this.styleElement = this._document.createElement("style"), this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement));
    const e = this.styleElement.sheet;
    e.insertRule(t, e.cssRules.length);
  }
  clear() {
    for (const t of this.nativeFontFaces)
      this._document.fonts.delete(t);
    this.nativeFontFaces.clear(), n(this, Uo).clear(), this.styleElement && (this.styleElement.remove(), this.styleElement = null);
  }
  async loadSystemFont({
    systemFontInfo: t,
    disableFontFace: e,
    _inspectFont: s
  }) {
    if (!(!t || n(this, Uo).has(t.loadedName))) {
      if (lt(!e, "loadSystemFont shouldn't be called when `disableFontFace` is set."), this.isFontLoadingAPISupported) {
        const {
          loadedName: i,
          src: r,
          style: a
        } = t, o = new FontFace(i, r, a);
        this.addNativeFontFace(o);
        try {
          await o.load(), n(this, Uo).add(i), s == null || s(t);
        } catch {
          J(`Cannot load system font: ${t.baseFontName}, installing it could help to improve PDF rendering.`), this.removeNativeFontFace(o);
        }
        return;
      }
      Tt("Not implemented: loadSystemFont without the Font Loading API.");
    }
  }
  async bind(t) {
    if (t.attached || t.missingFile && !t.systemFontInfo)
      return;
    if (t.attached = !0, t.systemFontInfo) {
      await this.loadSystemFont(t);
      return;
    }
    if (this.isFontLoadingAPISupported) {
      const s = t.createNativeFontFace();
      if (s) {
        this.addNativeFontFace(s);
        try {
          await s.loaded;
        } catch (i) {
          throw J(`Failed to load font '${s.family}': '${i}'.`), t.disableFontFace = !0, i;
        }
      }
      return;
    }
    const e = t.createFontFaceRule();
    if (e) {
      if (this.insertRule(e), this.isSyncFontLoadingSupported)
        return;
      await new Promise((s) => {
        const i = this._queueLoadingCallback(s);
        this._prepareFontLoadEvent(t, i);
      });
    }
  }
  get isFontLoadingAPISupported() {
    var e;
    const t = !!((e = this._document) != null && e.fonts);
    return et(this, "isFontLoadingAPISupported", t);
  }
  get isSyncFontLoadingSupported() {
    return et(this, "isSyncFontLoadingSupported", Ue || ge.platform.isFirefox);
  }
  _queueLoadingCallback(t) {
    function e() {
      for (lt(!i.done, "completeRequest() cannot be called twice."), i.done = !0; s.length > 0 && s[0].done; ) {
        const r = s.shift();
        setTimeout(r.callback, 0);
      }
    }
    const {
      loadingRequests: s
    } = this, i = {
      done: !1,
      complete: e,
      callback: t
    };
    return s.push(i), i;
  }
  get _loadTestFont() {
    const t = atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==");
    return et(this, "_loadTestFont", t);
  }
  _prepareFontLoadEvent(t, e) {
    function s(f, m) {
      return f.charCodeAt(m) << 24 | f.charCodeAt(m + 1) << 16 | f.charCodeAt(m + 2) << 8 | f.charCodeAt(m + 3) & 255;
    }
    function i(f, m, A, C) {
      const P = f.substring(0, m), R = f.substring(m + A);
      return P + C + R;
    }
    let r, a;
    const o = this._document.createElement("canvas");
    o.width = 1, o.height = 1;
    const l = o.getContext("2d");
    let h = 0;
    function d(f, m) {
      if (++h > 30) {
        J("Load test font never loaded."), m();
        return;
      }
      if (l.font = "30px " + f, l.fillText(".", 0, 20), l.getImageData(0, 0, 1, 1).data[3] > 0) {
        m();
        return;
      }
      setTimeout(d.bind(null, f, m));
    }
    const u = `lt${Date.now()}${this.loadTestFontId++}`;
    let p = this._loadTestFont;
    p = i(p, 976, u.length, u);
    const S = 16, v = 1482184792;
    let E = s(p, S);
    for (r = 0, a = u.length - 3; r < a; r += 4)
      E = E - v + s(u, r) | 0;
    r < u.length && (E = E - v + s(u + "XXX", r) | 0), p = i(p, S, 4, _0(E));
    const x = `url(data:font/opentype;base64,${btoa(p)});`, T = `@font-face {font-family:"${u}";src:${x}}`;
    this.insertRule(T);
    const _ = this._document.createElement("div");
    _.style.visibility = "hidden", _.style.width = _.style.height = "10px", _.style.position = "absolute", _.style.top = _.style.left = "0px";
    for (const f of [t.loadedName, u]) {
      const m = this._document.createElement("span");
      m.textContent = "Hi", m.style.fontFamily = f, _.append(m);
    }
    this._document.body.append(_), d(u, () => {
      _.remove(), e.complete();
    });
  }
}
Uo = new WeakMap();
var yt;
class $0 {
  constructor(t, e = null, s, i) {
    y(this, yt);
    this.compiledGlyphs = /* @__PURE__ */ Object.create(null), g(this, yt, t), this._inspectFont = e, s && Object.assign(this, s), i && (this.charProcOperatorList = i);
  }
  createNativeFontFace() {
    var e;
    if (!this.data || this.disableFontFace)
      return null;
    let t;
    if (!this.cssFontInfo)
      t = new FontFace(this.loadedName, this.data, {});
    else {
      const s = {
        weight: this.cssFontInfo.fontWeight
      };
      this.cssFontInfo.italicAngle && (s.style = `oblique ${this.cssFontInfo.italicAngle}deg`), t = new FontFace(this.cssFontInfo.fontFamily, this.data, s);
    }
    return (e = this._inspectFont) == null || e.call(this, this), t;
  }
  createFontFaceRule() {
    var s;
    if (!this.data || this.disableFontFace)
      return null;
    const t = `url(data:${this.mimetype};base64,${hm(this.data)});`;
    let e;
    if (!this.cssFontInfo)
      e = `@font-face {font-family:"${this.loadedName}";src:${t}}`;
    else {
      let i = `font-weight: ${this.cssFontInfo.fontWeight};`;
      this.cssFontInfo.italicAngle && (i += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`), e = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${i}src:${t}}`;
    }
    return (s = this._inspectFont) == null || s.call(this, this, t), e;
  }
  getPathGenerator(t, e) {
    if (this.compiledGlyphs[e] !== void 0)
      return this.compiledGlyphs[e];
    const s = this.loadedName + "_path_" + e;
    let i;
    try {
      i = t.get(s);
    } catch (a) {
      J(`getPathGenerator - ignoring character: "${a}".`);
    }
    const r = new Path2D(i || "");
    return this.fontExtraProperties || t.delete(s), this.compiledGlyphs[e] = r;
  }
  get black() {
    return n(this, yt).black;
  }
  get bold() {
    return n(this, yt).bold;
  }
  get disableFontFace() {
    return n(this, yt).disableFontFace ?? !1;
  }
  get fontExtraProperties() {
    return n(this, yt).fontExtraProperties ?? !1;
  }
  get isInvalidPDFjsFont() {
    return n(this, yt).isInvalidPDFjsFont;
  }
  get isType3Font() {
    return n(this, yt).isType3Font;
  }
  get italic() {
    return n(this, yt).italic;
  }
  get missingFile() {
    return n(this, yt).missingFile;
  }
  get remeasure() {
    return n(this, yt).remeasure;
  }
  get vertical() {
    return n(this, yt).vertical;
  }
  get ascent() {
    return n(this, yt).ascent;
  }
  get defaultWidth() {
    return n(this, yt).defaultWidth;
  }
  get descent() {
    return n(this, yt).descent;
  }
  get bbox() {
    return n(this, yt).bbox;
  }
  get fontMatrix() {
    return n(this, yt).fontMatrix;
  }
  get fallbackName() {
    return n(this, yt).fallbackName;
  }
  get loadedName() {
    return n(this, yt).loadedName;
  }
  get mimetype() {
    return n(this, yt).mimetype;
  }
  get name() {
    return n(this, yt).name;
  }
  get data() {
    return n(this, yt).data;
  }
  clearData() {
    n(this, yt).clearData();
  }
  get cssFontInfo() {
    return n(this, yt).cssFontInfo;
  }
  get systemFontInfo() {
    return n(this, yt).systemFontInfo;
  }
  get defaultVMetrics() {
    return n(this, yt).defaultVMetrics;
  }
}
yt = new WeakMap();
function H0(c) {
  if (c instanceof URL)
    return c.href;
  if (typeof c == "string") {
    if (Ue)
      return c;
    const t = URL.parse(c, window.location);
    if (t)
      return t.href;
  }
  throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
}
function U0(c) {
  if (Ue && typeof Buffer < "u" && c instanceof Buffer)
    throw new Error("Please provide binary data as `Uint8Array`, rather than `Buffer`.");
  if (c instanceof Uint8Array && c.byteLength === c.buffer.byteLength)
    return c;
  if (typeof c == "string")
    return gd(c);
  if (c instanceof ArrayBuffer || ArrayBuffer.isView(c) || typeof c == "object" && !isNaN(c == null ? void 0 : c.length))
    return new Uint8Array(c);
  throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.");
}
function Td(c) {
  if (typeof c != "string")
    return null;
  if (c.endsWith("/"))
    return c;
  throw new Error(`Invalid factory url: "${c}" must include trailing slash.`);
}
const Of = (c) => typeof c == "object" && Number.isInteger(c == null ? void 0 : c.num) && c.num >= 0 && Number.isInteger(c == null ? void 0 : c.gen) && c.gen >= 0, z0 = (c) => typeof c == "object" && typeof (c == null ? void 0 : c.name) == "string", Xm = R0.bind(null, Of, z0);
var en, Du;
class G0 {
  constructor() {
    y(this, en, /* @__PURE__ */ new Map());
    y(this, Du, Promise.resolve());
  }
  postMessage(t, e) {
    const s = {
      data: structuredClone(t, e ? {
        transfer: e
      } : null)
    };
    n(this, Du).then(() => {
      for (const [i] of n(this, en))
        i.call(this, s);
    });
  }
  addEventListener(t, e, s = null) {
    let i = null;
    if ((s == null ? void 0 : s.signal) instanceof AbortSignal) {
      const {
        signal: r
      } = s;
      if (r.aborted) {
        J("LoopbackPort - cannot use an `aborted` signal.");
        return;
      }
      const a = () => this.removeEventListener(t, e);
      i = () => r.removeEventListener("abort", a), r.addEventListener("abort", a);
    }
    n(this, en).set(e, i);
  }
  removeEventListener(t, e) {
    const s = n(this, en).get(e);
    s == null || s(), n(this, en).delete(e);
  }
  terminate() {
    for (const [, t] of n(this, en))
      t == null || t();
    n(this, en).clear();
  }
}
en = new WeakMap(), Du = new WeakMap();
const Pd = {
  DATA: 1,
  ERROR: 2
}, Qt = {
  CANCEL: 1,
  CANCEL_COMPLETE: 2,
  CLOSE: 3,
  ENQUEUE: 4,
  ERROR: 5,
  PULL: 6,
  PULL_COMPLETE: 7,
  START_COMPLETE: 8
};
function Sg() {
}
function Ve(c) {
  if (c instanceof Tn || c instanceof fu || c instanceof pg || c instanceof Th || c instanceof nf)
    return c;
  switch (c instanceof Error || typeof c == "object" && c !== null || Tt('wrapReason: Expected "reason" to be a (possibly cloned) Error.'), c.name) {
    case "AbortException":
      return new Tn(c.message);
    case "InvalidPDFException":
      return new fu(c.message);
    case "PasswordException":
      return new pg(c.message, c.code);
    case "ResponseException":
      return new Th(c.message, c.status, c.missing);
    case "UnknownErrorException":
      return new nf(c.message, c.details);
  }
  return new nf(c.message, c.toString());
}
var zo, Hs, Ym, Km, Zm, Ud;
class hh {
  constructor(t, e, s) {
    y(this, Hs);
    y(this, zo, new AbortController());
    this.sourceName = t, this.targetName = e, this.comObj = s, this.callbackId = 1, this.streamId = 1, this.streamSinks = /* @__PURE__ */ Object.create(null), this.streamControllers = /* @__PURE__ */ Object.create(null), this.callbackCapabilities = /* @__PURE__ */ Object.create(null), this.actionHandler = /* @__PURE__ */ Object.create(null), s.addEventListener("message", w(this, Hs, Ym).bind(this), {
      signal: n(this, zo).signal
    });
  }
  on(t, e) {
    const s = this.actionHandler;
    if (s[t])
      throw new Error(`There is already an actionName called "${t}"`);
    s[t] = e;
  }
  send(t, e, s) {
    this.comObj.postMessage({
      sourceName: this.sourceName,
      targetName: this.targetName,
      action: t,
      data: e
    }, s);
  }
  sendWithPromise(t, e, s) {
    const i = this.callbackId++, r = Promise.withResolvers();
    this.callbackCapabilities[i] = r;
    try {
      this.comObj.postMessage({
        sourceName: this.sourceName,
        targetName: this.targetName,
        action: t,
        callbackId: i,
        data: e
      }, s);
    } catch (a) {
      r.reject(a);
    }
    return r.promise;
  }
  sendWithStream(t, e, s, i) {
    const r = this.streamId++, a = this.sourceName, o = this.targetName, l = this.comObj;
    return new ReadableStream({
      start: (h) => {
        const d = Promise.withResolvers();
        return this.streamControllers[r] = {
          controller: h,
          startCall: d,
          pullCall: null,
          cancelCall: null,
          isClosed: !1
        }, l.postMessage({
          sourceName: a,
          targetName: o,
          action: t,
          streamId: r,
          data: e,
          desiredSize: h.desiredSize
        }, i), d.promise;
      },
      pull: (h) => {
        const d = Promise.withResolvers();
        return this.streamControllers[r].pullCall = d, l.postMessage({
          sourceName: a,
          targetName: o,
          stream: Qt.PULL,
          streamId: r,
          desiredSize: h.desiredSize
        }), d.promise;
      },
      cancel: (h) => {
        lt(h instanceof Error, "cancel must have a valid reason");
        const d = Promise.withResolvers();
        return this.streamControllers[r].cancelCall = d, this.streamControllers[r].isClosed = !0, l.postMessage({
          sourceName: a,
          targetName: o,
          stream: Qt.CANCEL,
          streamId: r,
          reason: Ve(h)
        }), d.promise;
      }
    }, s);
  }
  destroy() {
    var t;
    (t = n(this, zo)) == null || t.abort(), g(this, zo, null);
  }
}
zo = new WeakMap(), Hs = new WeakSet(), Ym = function({
  data: t
}) {
  if (t.targetName !== this.sourceName)
    return;
  if (t.stream) {
    w(this, Hs, Zm).call(this, t);
    return;
  }
  if (t.callback) {
    const s = t.callbackId, i = this.callbackCapabilities[s];
    if (!i)
      throw new Error(`Cannot resolve callback ${s}`);
    if (delete this.callbackCapabilities[s], t.callback === Pd.DATA)
      i.resolve(t.data);
    else if (t.callback === Pd.ERROR)
      i.reject(Ve(t.reason));
    else
      throw new Error("Unexpected callback case");
    return;
  }
  const e = this.actionHandler[t.action];
  if (!e)
    throw new Error(`Unknown action from worker: ${t.action}`);
  if (t.callbackId) {
    const s = this.sourceName, i = t.sourceName, r = this.comObj;
    Promise.try(e, t.data).then(function(a) {
      r.postMessage({
        sourceName: s,
        targetName: i,
        callback: Pd.DATA,
        callbackId: t.callbackId,
        data: a
      });
    }, function(a) {
      r.postMessage({
        sourceName: s,
        targetName: i,
        callback: Pd.ERROR,
        callbackId: t.callbackId,
        reason: Ve(a)
      });
    });
    return;
  }
  if (t.streamId) {
    w(this, Hs, Km).call(this, t);
    return;
  }
  e(t.data);
}, Km = function(t) {
  const e = t.streamId, s = this.sourceName, i = t.sourceName, r = this.comObj, a = this, o = this.actionHandler[t.action], l = {
    enqueue(h, d = 1, u) {
      if (this.isCancelled)
        return;
      const p = this.desiredSize;
      this.desiredSize -= d, p > 0 && this.desiredSize <= 0 && (this.sinkCapability = Promise.withResolvers(), this.ready = this.sinkCapability.promise), r.postMessage({
        sourceName: s,
        targetName: i,
        stream: Qt.ENQUEUE,
        streamId: e,
        chunk: h
      }, u);
    },
    close() {
      this.isCancelled || (this.isCancelled = !0, r.postMessage({
        sourceName: s,
        targetName: i,
        stream: Qt.CLOSE,
        streamId: e
      }), delete a.streamSinks[e]);
    },
    error(h) {
      lt(h instanceof Error, "error must have a valid reason"), !this.isCancelled && (this.isCancelled = !0, r.postMessage({
        sourceName: s,
        targetName: i,
        stream: Qt.ERROR,
        streamId: e,
        reason: Ve(h)
      }));
    },
    sinkCapability: Promise.withResolvers(),
    onPull: null,
    onCancel: null,
    isCancelled: !1,
    desiredSize: t.desiredSize,
    ready: null
  };
  l.sinkCapability.resolve(), l.ready = l.sinkCapability.promise, this.streamSinks[e] = l, Promise.try(o, t.data, l).then(function() {
    r.postMessage({
      sourceName: s,
      targetName: i,
      stream: Qt.START_COMPLETE,
      streamId: e,
      success: !0
    });
  }, function(h) {
    r.postMessage({
      sourceName: s,
      targetName: i,
      stream: Qt.START_COMPLETE,
      streamId: e,
      reason: Ve(h)
    });
  });
}, Zm = function(t) {
  const e = t.streamId, s = this.sourceName, i = t.sourceName, r = this.comObj, a = this.streamControllers[e], o = this.streamSinks[e];
  switch (t.stream) {
    case Qt.START_COMPLETE:
      t.success ? a.startCall.resolve() : a.startCall.reject(Ve(t.reason));
      break;
    case Qt.PULL_COMPLETE:
      t.success ? a.pullCall.resolve() : a.pullCall.reject(Ve(t.reason));
      break;
    case Qt.PULL:
      if (!o) {
        r.postMessage({
          sourceName: s,
          targetName: i,
          stream: Qt.PULL_COMPLETE,
          streamId: e,
          success: !0
        });
        break;
      }
      o.desiredSize <= 0 && t.desiredSize > 0 && o.sinkCapability.resolve(), o.desiredSize = t.desiredSize, Promise.try(o.onPull || Sg).then(function() {
        r.postMessage({
          sourceName: s,
          targetName: i,
          stream: Qt.PULL_COMPLETE,
          streamId: e,
          success: !0
        });
      }, function(h) {
        r.postMessage({
          sourceName: s,
          targetName: i,
          stream: Qt.PULL_COMPLETE,
          streamId: e,
          reason: Ve(h)
        });
      });
      break;
    case Qt.ENQUEUE:
      if (lt(a, "enqueue should have stream controller"), a.isClosed)
        break;
      a.controller.enqueue(t.chunk);
      break;
    case Qt.CLOSE:
      if (lt(a, "close should have stream controller"), a.isClosed)
        break;
      a.isClosed = !0, a.controller.close(), w(this, Hs, Ud).call(this, a, e);
      break;
    case Qt.ERROR:
      lt(a, "error should have stream controller"), a.controller.error(Ve(t.reason)), w(this, Hs, Ud).call(this, a, e);
      break;
    case Qt.CANCEL_COMPLETE:
      t.success ? a.cancelCall.resolve() : a.cancelCall.reject(Ve(t.reason)), w(this, Hs, Ud).call(this, a, e);
      break;
    case Qt.CANCEL:
      if (!o)
        break;
      const l = Ve(t.reason);
      Promise.try(o.onCancel || Sg, l).then(function() {
        r.postMessage({
          sourceName: s,
          targetName: i,
          stream: Qt.CANCEL_COMPLETE,
          streamId: e,
          success: !0
        });
      }, function(h) {
        r.postMessage({
          sourceName: s,
          targetName: i,
          stream: Qt.CANCEL_COMPLETE,
          streamId: e,
          reason: Ve(h)
        });
      }), o.sinkCapability.reject(l), o.isCancelled = !0, delete this.streamSinks[e];
      break;
    default:
      throw new Error("Unexpected stream case");
  }
}, Ud = async function(t, e) {
  var s, i, r;
  await Promise.allSettled([(s = t.startCall) == null ? void 0 : s.promise, (i = t.pullCall) == null ? void 0 : i.promise, (r = t.cancelCall) == null ? void 0 : r.promise]), delete this.streamControllers[e];
};
var lc;
class Jm {
  constructor({
    enableHWA: t = !1
  }) {
    y(this, lc, !1);
    g(this, lc, t);
  }
  create(t, e) {
    if (t <= 0 || e <= 0)
      throw new Error("Invalid canvas size");
    const s = this._createCanvas(t, e);
    return {
      canvas: s,
      context: s.getContext("2d", {
        willReadFrequently: !n(this, lc)
      })
    };
  }
  reset(t, e, s) {
    if (!t.canvas)
      throw new Error("Canvas is not specified");
    if (e <= 0 || s <= 0)
      throw new Error("Invalid canvas size");
    t.canvas.width = e, t.canvas.height = s;
  }
  destroy(t) {
    if (!t.canvas)
      throw new Error("Canvas is not specified");
    t.canvas.width = 0, t.canvas.height = 0, t.canvas = null, t.context = null;
  }
  _createCanvas(t, e) {
    Tt("Abstract method `_createCanvas` called.");
  }
}
lc = new WeakMap();
class W0 extends Jm {
  constructor({
    ownerDocument: t = globalThis.document,
    enableHWA: e = !1
  }) {
    super({
      enableHWA: e
    }), this._document = t;
  }
  _createCanvas(t, e) {
    const s = this._document.createElement("canvas");
    return s.width = t, s.height = e, s;
  }
}
class Qm {
  constructor({
    baseUrl: t = null,
    isCompressed: e = !0
  }) {
    this.baseUrl = t, this.isCompressed = e;
  }
  async fetch({
    name: t
  }) {
    if (!this.baseUrl)
      throw new Error("Ensure that the `cMapUrl` and `cMapPacked` API parameters are provided.");
    if (!t)
      throw new Error("CMap name must be specified.");
    const e = this.baseUrl + t + (this.isCompressed ? ".bcmap" : "");
    return this._fetch(e).then((s) => ({
      cMapData: s,
      isCompressed: this.isCompressed
    })).catch((s) => {
      throw new Error(`Unable to load ${this.isCompressed ? "binary " : ""}CMap at: ${e}`);
    });
  }
  async _fetch(t) {
    Tt("Abstract method `_fetch` called.");
  }
}
class xg extends Qm {
  async _fetch(t) {
    const e = await Kl(t, this.isCompressed ? "arraybuffer" : "text");
    return e instanceof ArrayBuffer ? new Uint8Array(e) : gd(e);
  }
}
class tb {
  addFilter(t) {
    return "none";
  }
  addHCMFilter(t, e) {
    return "none";
  }
  addAlphaFilter(t) {
    return "none";
  }
  addLuminosityFilter(t) {
    return "none";
  }
  addHighlightHCMFilter(t, e, s, i, r) {
    return "none";
  }
  destroy(t = !1) {
  }
}
var ra, Go, sn, nn, Re, aa, oa, z, Ce, ch, ao, zd, oo, eb, Bf, lo, dh, uh, $f, fh;
class j0 extends tb {
  constructor({
    docId: e,
    ownerDocument: s = globalThis.document
  }) {
    super();
    y(this, z);
    y(this, ra);
    y(this, Go);
    y(this, sn);
    y(this, nn);
    y(this, Re);
    y(this, aa);
    y(this, oa, 0);
    g(this, nn, e), g(this, Re, s);
  }
  addFilter(e) {
    if (!e)
      return "none";
    let s = n(this, z, Ce).get(e);
    if (s)
      return s;
    const [i, r, a] = w(this, z, zd).call(this, e), o = e.length === 1 ? i : `${i}${r}${a}`;
    if (s = n(this, z, Ce).get(o), s)
      return n(this, z, Ce).set(e, s), s;
    const l = `g_${n(this, nn)}_transfer_map_${ie(this, oa)._++}`, h = w(this, z, oo).call(this, l);
    n(this, z, Ce).set(e, h), n(this, z, Ce).set(o, h);
    const d = w(this, z, lo).call(this, l);
    return w(this, z, uh).call(this, i, r, a, d), h;
  }
  addHCMFilter(e, s) {
    var S;
    const i = `${e}-${s}`, r = "base";
    let a = n(this, z, ch).get(r);
    if ((a == null ? void 0 : a.key) === i || (a ? ((S = a.filter) == null || S.remove(), a.key = i, a.url = "none", a.filter = null) : (a = {
      key: i,
      url: "none",
      filter: null
    }, n(this, z, ch).set(r, a)), !e || !s))
      return a.url;
    const o = w(this, z, fh).call(this, e);
    e = W.makeHexColor(...o);
    const l = w(this, z, fh).call(this, s);
    if (s = W.makeHexColor(...l), n(this, z, ao).style.color = "", e === "#000000" && s === "#ffffff" || e === s)
      return a.url;
    const h = new Array(256);
    for (let v = 0; v <= 255; v++) {
      const E = v / 255;
      h[v] = E <= 0.03928 ? E / 12.92 : ((E + 0.055) / 1.055) ** 2.4;
    }
    const d = h.join(","), u = `g_${n(this, nn)}_hcm_filter`, p = a.filter = w(this, z, lo).call(this, u);
    w(this, z, uh).call(this, d, d, d, p), w(this, z, Bf).call(this, p);
    const b = (v, E) => {
      const x = o[v] / 255, T = l[v] / 255, _ = new Array(E + 1);
      for (let f = 0; f <= E; f++)
        _[f] = x + f / E * (T - x);
      return _.join(",");
    };
    return w(this, z, uh).call(this, b(0, 5), b(1, 5), b(2, 5), p), a.url = w(this, z, oo).call(this, u), a.url;
  }
  addAlphaFilter(e) {
    let s = n(this, z, Ce).get(e);
    if (s)
      return s;
    const [i] = w(this, z, zd).call(this, [e]), r = `alpha_${i}`;
    if (s = n(this, z, Ce).get(r), s)
      return n(this, z, Ce).set(e, s), s;
    const a = `g_${n(this, nn)}_alpha_map_${ie(this, oa)._++}`, o = w(this, z, oo).call(this, a);
    n(this, z, Ce).set(e, o), n(this, z, Ce).set(r, o);
    const l = w(this, z, lo).call(this, a);
    return w(this, z, $f).call(this, i, l), o;
  }
  addLuminosityFilter(e) {
    let s = n(this, z, Ce).get(e || "luminosity");
    if (s)
      return s;
    let i, r;
    if (e ? ([i] = w(this, z, zd).call(this, [e]), r = `luminosity_${i}`) : r = "luminosity", s = n(this, z, Ce).get(r), s)
      return n(this, z, Ce).set(e, s), s;
    const a = `g_${n(this, nn)}_luminosity_map_${ie(this, oa)._++}`, o = w(this, z, oo).call(this, a);
    n(this, z, Ce).set(e, o), n(this, z, Ce).set(r, o);
    const l = w(this, z, lo).call(this, a);
    return w(this, z, eb).call(this, l), e && w(this, z, $f).call(this, i, l), o;
  }
  addHighlightHCMFilter(e, s, i, r, a) {
    var T;
    const o = `${s}-${i}-${r}-${a}`;
    let l = n(this, z, ch).get(e);
    if ((l == null ? void 0 : l.key) === o || (l ? ((T = l.filter) == null || T.remove(), l.key = o, l.url = "none", l.filter = null) : (l = {
      key: o,
      url: "none",
      filter: null
    }, n(this, z, ch).set(e, l)), !s || !i))
      return l.url;
    const [h, d] = [s, i].map(w(this, z, fh).bind(this));
    let u = Math.round(0.2126 * h[0] + 0.7152 * h[1] + 0.0722 * h[2]), p = Math.round(0.2126 * d[0] + 0.7152 * d[1] + 0.0722 * d[2]), [b, S] = [r, a].map(w(this, z, fh).bind(this));
    p < u && ([u, p, b, S] = [p, u, S, b]), n(this, z, ao).style.color = "";
    const v = (_, f, m) => {
      const A = new Array(256), C = (p - u) / m, P = _ / 255, R = (f - _) / (255 * m);
      let L = 0;
      for (let D = 0; D <= m; D++) {
        const F = Math.round(u + D * C), U = P + D * R;
        for (let O = L; O <= F; O++)
          A[O] = U;
        L = F + 1;
      }
      for (let D = L; D < 256; D++)
        A[D] = A[L - 1];
      return A.join(",");
    }, E = `g_${n(this, nn)}_hcm_${e}_filter`, x = l.filter = w(this, z, lo).call(this, E);
    return w(this, z, Bf).call(this, x), w(this, z, uh).call(this, v(b[0], S[0], 5), v(b[1], S[1], 5), v(b[2], S[2], 5), x), l.url = w(this, z, oo).call(this, E), l.url;
  }
  destroy(e = !1) {
    var s, i, r, a;
    e && ((s = n(this, aa)) != null && s.size) || ((i = n(this, sn)) == null || i.parentNode.parentNode.remove(), g(this, sn, null), (r = n(this, Go)) == null || r.clear(), g(this, Go, null), (a = n(this, aa)) == null || a.clear(), g(this, aa, null), g(this, oa, 0));
  }
}
ra = new WeakMap(), Go = new WeakMap(), sn = new WeakMap(), nn = new WeakMap(), Re = new WeakMap(), aa = new WeakMap(), oa = new WeakMap(), z = new WeakSet(), Ce = function() {
  return n(this, Go) || g(this, Go, /* @__PURE__ */ new Map());
}, ch = function() {
  return n(this, aa) || g(this, aa, /* @__PURE__ */ new Map());
}, ao = function() {
  if (!n(this, sn)) {
    const e = n(this, Re).createElement("div"), {
      style: s
    } = e;
    s.visibility = "hidden", s.contain = "strict", s.width = s.height = 0, s.position = "absolute", s.top = s.left = 0, s.zIndex = -1;
    const i = n(this, Re).createElementNS($i, "svg");
    i.setAttribute("width", 0), i.setAttribute("height", 0), g(this, sn, n(this, Re).createElementNS($i, "defs")), e.append(i), i.append(n(this, sn)), n(this, Re).body.append(e);
  }
  return n(this, sn);
}, zd = function(e) {
  if (e.length === 1) {
    const h = e[0], d = new Array(256);
    for (let p = 0; p < 256; p++)
      d[p] = h[p] / 255;
    const u = d.join(",");
    return [u, u, u];
  }
  const [s, i, r] = e, a = new Array(256), o = new Array(256), l = new Array(256);
  for (let h = 0; h < 256; h++)
    a[h] = s[h] / 255, o[h] = i[h] / 255, l[h] = r[h] / 255;
  return [a.join(","), o.join(","), l.join(",")];
}, oo = function(e) {
  if (n(this, ra) === void 0) {
    g(this, ra, "");
    const s = n(this, Re).URL;
    s !== n(this, Re).baseURI && (bd(s) ? J('#createUrl: ignore "data:"-URL for performance reasons.') : g(this, ra, Gp(s, "")));
  }
  return `url(${n(this, ra)}#${e})`;
}, eb = function(e) {
  const s = n(this, Re).createElementNS($i, "feColorMatrix");
  s.setAttribute("type", "matrix"), s.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.59 0.11 0 0"), e.append(s);
}, Bf = function(e) {
  const s = n(this, Re).createElementNS($i, "feColorMatrix");
  s.setAttribute("type", "matrix"), s.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"), e.append(s);
}, lo = function(e) {
  const s = n(this, Re).createElementNS($i, "filter");
  return s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("id", e), n(this, z, ao).append(s), s;
}, dh = function(e, s, i) {
  const r = n(this, Re).createElementNS($i, s);
  r.setAttribute("type", "discrete"), r.setAttribute("tableValues", i), e.append(r);
}, uh = function(e, s, i, r) {
  const a = n(this, Re).createElementNS($i, "feComponentTransfer");
  r.append(a), w(this, z, dh).call(this, a, "feFuncR", e), w(this, z, dh).call(this, a, "feFuncG", s), w(this, z, dh).call(this, a, "feFuncB", i);
}, $f = function(e, s) {
  const i = n(this, Re).createElementNS($i, "feComponentTransfer");
  s.append(i), w(this, z, dh).call(this, i, "feFuncA", e);
}, fh = function(e) {
  return n(this, z, ao).style.color = e, Zl(getComputedStyle(n(this, z, ao)).getPropertyValue("color"));
};
class sb {
  constructor({
    baseUrl: t = null
  }) {
    this.baseUrl = t;
  }
  async fetch({
    filename: t
  }) {
    if (!this.baseUrl)
      throw new Error("Ensure that the `standardFontDataUrl` API parameter is provided.");
    if (!t)
      throw new Error("Font filename must be specified.");
    const e = `${this.baseUrl}${t}`;
    return this._fetch(e).catch((s) => {
      throw new Error(`Unable to load font data at: ${e}`);
    });
  }
  async _fetch(t) {
    Tt("Abstract method `_fetch` called.");
  }
}
class Eg extends sb {
  async _fetch(t) {
    const e = await Kl(t, "arraybuffer");
    return new Uint8Array(e);
  }
}
class ib {
  constructor({
    baseUrl: t = null
  }) {
    this.baseUrl = t;
  }
  async fetch({
    filename: t
  }) {
    if (!this.baseUrl)
      throw new Error("Ensure that the `wasmUrl` API parameter is provided.");
    if (!t)
      throw new Error("Wasm filename must be specified.");
    const e = `${this.baseUrl}${t}`;
    return this._fetch(e).catch((s) => {
      throw new Error(`Unable to load wasm data at: ${e}`);
    });
  }
  async _fetch(t) {
    Tt("Abstract method `_fetch` called.");
  }
}
class _g extends ib {
  async _fetch(t) {
    const e = await Kl(t, "arraybuffer");
    return new Uint8Array(e);
  }
}
Ue && J("Please use the `legacy` build in Node.js environments.");
async function Yp(c) {
  const e = await process.getBuiltinModule("fs").promises.readFile(c);
  return new Uint8Array(e);
}
class V0 extends tb {
}
class q0 extends Jm {
  _createCanvas(t, e) {
    return process.getBuiltinModule("module").createRequire(import.meta.url)("@napi-rs/canvas").createCanvas(t, e);
  }
}
class X0 extends Qm {
  async _fetch(t) {
    return Yp(t);
  }
}
class Y0 extends sb {
  async _fetch(t) {
    return Yp(t);
  }
}
class K0 extends ib {
  async _fetch(t) {
    return Yp(t);
  }
}
const io = "__forcedDependency", {
  floor: Cg,
  ceil: Tg
} = Math;
function Rd(c, t, e, s, i, r) {
  c[t * 4 + 0] = Math.min(c[t * 4 + 0], e), c[t * 4 + 1] = Math.min(c[t * 4 + 1], s), c[t * 4 + 2] = Math.max(c[t * 4 + 2], i), c[t * 4 + 3] = Math.max(c[t * 4 + 3], r);
}
const Hf = new Uint32Array(new Uint8Array([255, 255, 0, 0]).buffer)[0];
var Wo, Qn;
class Z0 {
  constructor(t, e) {
    y(this, Wo);
    y(this, Qn);
    g(this, Wo, t), g(this, Qn, e);
  }
  get length() {
    return n(this, Wo).length;
  }
  isEmpty(t) {
    return n(this, Wo)[t] === Hf;
  }
  minX(t) {
    return n(this, Qn)[t * 4 + 0] / 256;
  }
  minY(t) {
    return n(this, Qn)[t * 4 + 1] / 256;
  }
  maxX(t) {
    return (n(this, Qn)[t * 4 + 2] + 1) / 256;
  }
  maxY(t) {
    return (n(this, Qn)[t * 4 + 3] + 1) / 256;
  }
}
Wo = new WeakMap(), Qn = new WeakMap();
const kd = (c, t) => {
  if (!c)
    return;
  let e = c.get(t);
  return e || (e = {
    dependencies: /* @__PURE__ */ new Set(),
    isRenderingOperation: !1
  }, c.set(t, e)), e;
};
var Ye, Ke, la, qs, ha, rn, mt, wt, an, Ze, hc, jo, ca, da, on, ke, vi, cc, Uf;
class J0 {
  constructor(t, e, s = !1) {
    y(this, cc);
    y(this, Ye, {
      __proto__: null
    });
    y(this, Ke, {
      __proto__: null,
      transform: [],
      moveText: [],
      sameLineText: [],
      [io]: []
    });
    y(this, la, /* @__PURE__ */ new Map());
    y(this, qs, []);
    y(this, ha, []);
    y(this, rn, [[1, 0, 0, 1, 0, 0]]);
    y(this, mt, [-1 / 0, -1 / 0, 1 / 0, 1 / 0]);
    y(this, wt, new Float64Array([1 / 0, 1 / 0, -1 / 0, -1 / 0]));
    y(this, an, -1);
    y(this, Ze, /* @__PURE__ */ new Set());
    y(this, hc, /* @__PURE__ */ new Map());
    y(this, jo, /* @__PURE__ */ new Map());
    y(this, ca);
    y(this, da);
    y(this, on);
    y(this, ke);
    y(this, vi);
    g(this, ca, t.width), g(this, da, t.height), w(this, cc, Uf).call(this, e), s && g(this, vi, /* @__PURE__ */ new Map());
  }
  growOperationsCount(t) {
    t >= n(this, ke).length && w(this, cc, Uf).call(this, t, n(this, ke));
  }
  save(t) {
    return g(this, Ye, {
      __proto__: n(this, Ye)
    }), g(this, Ke, {
      __proto__: n(this, Ke),
      transform: {
        __proto__: n(this, Ke).transform
      },
      moveText: {
        __proto__: n(this, Ke).moveText
      },
      sameLineText: {
        __proto__: n(this, Ke).sameLineText
      },
      [io]: {
        __proto__: n(this, Ke)[io]
      }
    }), g(this, mt, {
      __proto__: n(this, mt)
    }), n(this, qs).push(t), this;
  }
  restore(t) {
    var i;
    const e = Object.getPrototypeOf(n(this, Ye));
    if (e === null)
      return this;
    g(this, Ye, e), g(this, Ke, Object.getPrototypeOf(n(this, Ke))), g(this, mt, Object.getPrototypeOf(n(this, mt)));
    const s = n(this, qs).pop();
    return s !== void 0 && ((i = kd(n(this, vi), t)) == null || i.dependencies.add(s), n(this, ke)[t] = n(this, ke)[s]), this;
  }
  recordOpenMarker(t) {
    return n(this, qs).push(t), this;
  }
  getOpenMarker() {
    return n(this, qs).length === 0 ? null : n(this, qs).at(-1);
  }
  recordCloseMarker(t) {
    var s;
    const e = n(this, qs).pop();
    return e !== void 0 && ((s = kd(n(this, vi), t)) == null || s.dependencies.add(e), n(this, ke)[t] = n(this, ke)[e]), this;
  }
  beginMarkedContent(t) {
    return n(this, ha).push(t), this;
  }
  endMarkedContent(t) {
    var s;
    const e = n(this, ha).pop();
    return e !== void 0 && ((s = kd(n(this, vi), t)) == null || s.dependencies.add(e), n(this, ke)[t] = n(this, ke)[e]), this;
  }
  pushBaseTransform(t) {
    return n(this, rn).push(W.multiplyByDOMMatrix(n(this, rn).at(-1), t.getTransform())), this;
  }
  popBaseTransform() {
    return n(this, rn).length > 1 && n(this, rn).pop(), this;
  }
  recordSimpleData(t, e) {
    return n(this, Ye)[t] = e, this;
  }
  recordIncrementalData(t, e) {
    return n(this, Ke)[t].push(e), this;
  }
  resetIncrementalData(t, e) {
    return n(this, Ke)[t].length = 0, this;
  }
  recordNamedData(t, e) {
    return n(this, la).set(t, e), this;
  }
  recordSimpleDataFromNamed(t, e, s) {
    n(this, Ye)[t] = n(this, la).get(e) ?? s;
  }
  recordFutureForcedDependency(t, e) {
    return this.recordIncrementalData(io, e), this;
  }
  inheritSimpleDataAsFutureForcedDependencies(t) {
    for (const e of t)
      e in n(this, Ye) && this.recordFutureForcedDependency(e, n(this, Ye)[e]);
    return this;
  }
  inheritPendingDependenciesAsFutureForcedDependencies() {
    for (const t of n(this, Ze))
      this.recordFutureForcedDependency(io, t);
    return this;
  }
  resetBBox(t) {
    return n(this, an) !== t && (g(this, an, t), n(this, wt)[0] = 1 / 0, n(this, wt)[1] = 1 / 0, n(this, wt)[2] = -1 / 0, n(this, wt)[3] = -1 / 0), this;
  }
  recordClipBox(t, e, s, i, r, a) {
    const o = W.multiplyByDOMMatrix(n(this, rn).at(-1), e.getTransform()), l = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
    W.axialAlignedBoundingBox([s, r, i, a], o, l);
    const h = W.intersect(n(this, mt), l);
    return h ? (n(this, mt)[0] = h[0], n(this, mt)[1] = h[1], n(this, mt)[2] = h[2], n(this, mt)[3] = h[3]) : (n(this, mt)[0] = n(this, mt)[1] = 1 / 0, n(this, mt)[2] = n(this, mt)[3] = -1 / 0), this;
  }
  recordBBox(t, e, s, i, r, a) {
    const o = n(this, mt);
    if (o[0] === 1 / 0)
      return this;
    const l = W.multiplyByDOMMatrix(n(this, rn).at(-1), e.getTransform());
    if (o[0] === -1 / 0)
      return W.axialAlignedBoundingBox([s, r, i, a], l, n(this, wt)), this;
    const h = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
    return W.axialAlignedBoundingBox([s, r, i, a], l, h), n(this, wt)[0] = Math.min(n(this, wt)[0], Math.max(h[0], o[0])), n(this, wt)[1] = Math.min(n(this, wt)[1], Math.max(h[1], o[1])), n(this, wt)[2] = Math.max(n(this, wt)[2], Math.min(h[2], o[2])), n(this, wt)[3] = Math.max(n(this, wt)[3], Math.min(h[3], o[3])), this;
  }
  recordCharacterBBox(t, e, s, i = 1, r = 0, a = 0, o) {
    const l = s.bbox;
    let h, d;
    if (l && (h = l[2] !== l[0] && l[3] !== l[1] && n(this, jo).get(s), h !== !1 && (d = [0, 0, 0, 0], W.axialAlignedBoundingBox(l, s.fontMatrix, d), (i !== 1 || r !== 0 || a !== 0) && W.scaleMinMax([i, 0, 0, -i, r, a], d), h)))
      return this.recordBBox(t, e, d[0], d[2], d[1], d[3]);
    if (!o)
      return this.recordFullPageBBox(t);
    const u = o();
    return l && d && h === void 0 && (h = d[0] <= r - u.actualBoundingBoxLeft && d[2] >= r + u.actualBoundingBoxRight && d[1] <= a - u.actualBoundingBoxAscent && d[3] >= a + u.actualBoundingBoxDescent, n(this, jo).set(s, h), h) ? this.recordBBox(t, e, d[0], d[2], d[1], d[3]) : this.recordBBox(t, e, r - u.actualBoundingBoxLeft, r + u.actualBoundingBoxRight, a - u.actualBoundingBoxAscent, a + u.actualBoundingBoxDescent);
  }
  recordFullPageBBox(t) {
    return n(this, wt)[0] = Math.max(0, n(this, mt)[0]), n(this, wt)[1] = Math.max(0, n(this, mt)[1]), n(this, wt)[2] = Math.min(n(this, ca), n(this, mt)[2]), n(this, wt)[3] = Math.min(n(this, da), n(this, mt)[3]), this;
  }
  getSimpleIndex(t) {
    return n(this, Ye)[t];
  }
  recordDependencies(t, e) {
    const s = n(this, Ze), i = n(this, Ye), r = n(this, Ke);
    for (const a of e)
      a in n(this, Ye) ? s.add(i[a]) : a in r && r[a].forEach(s.add, s);
    return this;
  }
  recordNamedDependency(t, e) {
    return n(this, la).has(e) && n(this, Ze).add(n(this, la).get(e)), this;
  }
  recordOperation(t, e = !1) {
    if (this.recordDependencies(t, [io]), n(this, vi)) {
      const s = kd(n(this, vi), t), {
        dependencies: i
      } = s;
      n(this, Ze).forEach(i.add, i), n(this, qs).forEach(i.add, i), n(this, ha).forEach(i.add, i), i.delete(t), s.isRenderingOperation = !0;
    }
    if (n(this, an) === t) {
      const s = Cg(n(this, wt)[0] * 256 / n(this, ca)), i = Cg(n(this, wt)[1] * 256 / n(this, da)), r = Tg(n(this, wt)[2] * 256 / n(this, ca)), a = Tg(n(this, wt)[3] * 256 / n(this, da));
      Rd(n(this, on), t, s, i, r, a);
      for (const o of n(this, Ze))
        o !== t && Rd(n(this, on), o, s, i, r, a);
      for (const o of n(this, qs))
        o !== t && Rd(n(this, on), o, s, i, r, a);
      for (const o of n(this, ha))
        o !== t && Rd(n(this, on), o, s, i, r, a);
      e || (n(this, Ze).clear(), g(this, an, -1));
    }
    return this;
  }
  recordShowTextOperation(t, e = !1) {
    const s = Array.from(n(this, Ze));
    this.recordOperation(t, e), this.recordIncrementalData("sameLineText", t);
    for (const i of s)
      this.recordIncrementalData("sameLineText", i);
    return this;
  }
  bboxToClipBoxDropOperation(t, e = !1) {
    return n(this, an) === t && (g(this, an, -1), n(this, mt)[0] = Math.max(n(this, mt)[0], n(this, wt)[0]), n(this, mt)[1] = Math.max(n(this, mt)[1], n(this, wt)[1]), n(this, mt)[2] = Math.min(n(this, mt)[2], n(this, wt)[2]), n(this, mt)[3] = Math.min(n(this, mt)[3], n(this, wt)[3]), e || n(this, Ze).clear()), this;
  }
  _takePendingDependencies() {
    const t = n(this, Ze);
    return g(this, Ze, /* @__PURE__ */ new Set()), t;
  }
  _extractOperation(t) {
    const e = n(this, hc).get(t);
    return n(this, hc).delete(t), e;
  }
  _pushPendingDependencies(t) {
    for (const e of t)
      n(this, Ze).add(e);
  }
  take() {
    return n(this, jo).clear(), new Z0(n(this, ke), n(this, on));
  }
  takeDebugMetadata() {
    return n(this, vi);
  }
}
Ye = new WeakMap(), Ke = new WeakMap(), la = new WeakMap(), qs = new WeakMap(), ha = new WeakMap(), rn = new WeakMap(), mt = new WeakMap(), wt = new WeakMap(), an = new WeakMap(), Ze = new WeakMap(), hc = new WeakMap(), jo = new WeakMap(), ca = new WeakMap(), da = new WeakMap(), on = new WeakMap(), ke = new WeakMap(), vi = new WeakMap(), cc = new WeakSet(), Uf = function(t, e) {
  const s = new ArrayBuffer(t * 4);
  g(this, on, new Uint8ClampedArray(s)), g(this, ke, new Uint32Array(s)), e && e.length > 0 ? (n(this, ke).set(e), n(this, ke).fill(Hf, e.length)) : n(this, ke).fill(Hf);
};
var Et, Wt, Xs, Vo, qo;
const og = class og {
  constructor(t, e, s) {
    y(this, Et);
    y(this, Wt);
    y(this, Xs);
    y(this, Vo, 0);
    y(this, qo, 0);
    if (t instanceof og && n(t, Xs) === !!s)
      return t;
    g(this, Et, t), g(this, Wt, e), g(this, Xs, !!s);
  }
  growOperationsCount() {
    throw new Error("Unreachable");
  }
  save(t) {
    return ie(this, qo)._++, n(this, Et).save(n(this, Wt)), this;
  }
  restore(t) {
    return n(this, qo) > 0 && (n(this, Et).restore(n(this, Wt)), ie(this, qo)._--), this;
  }
  recordOpenMarker(t) {
    return ie(this, Vo)._++, this;
  }
  getOpenMarker() {
    return n(this, Vo) > 0 ? n(this, Wt) : n(this, Et).getOpenMarker();
  }
  recordCloseMarker(t) {
    return ie(this, Vo)._--, this;
  }
  beginMarkedContent(t) {
    return this;
  }
  endMarkedContent(t) {
    return this;
  }
  pushBaseTransform(t) {
    return n(this, Et).pushBaseTransform(t), this;
  }
  popBaseTransform() {
    return n(this, Et).popBaseTransform(), this;
  }
  recordSimpleData(t, e) {
    return n(this, Et).recordSimpleData(t, n(this, Wt)), this;
  }
  recordIncrementalData(t, e) {
    return n(this, Et).recordIncrementalData(t, n(this, Wt)), this;
  }
  resetIncrementalData(t, e) {
    return n(this, Et).resetIncrementalData(t, n(this, Wt)), this;
  }
  recordNamedData(t, e) {
    return this;
  }
  recordSimpleDataFromNamed(t, e, s) {
    return n(this, Et).recordSimpleDataFromNamed(t, e, n(this, Wt)), this;
  }
  recordFutureForcedDependency(t, e) {
    return n(this, Et).recordFutureForcedDependency(t, n(this, Wt)), this;
  }
  inheritSimpleDataAsFutureForcedDependencies(t) {
    return n(this, Et).inheritSimpleDataAsFutureForcedDependencies(t), this;
  }
  inheritPendingDependenciesAsFutureForcedDependencies() {
    return n(this, Et).inheritPendingDependenciesAsFutureForcedDependencies(), this;
  }
  resetBBox(t) {
    return n(this, Xs) || n(this, Et).resetBBox(n(this, Wt)), this;
  }
  recordClipBox(t, e, s, i, r, a) {
    return n(this, Xs) || n(this, Et).recordClipBox(n(this, Wt), e, s, i, r, a), this;
  }
  recordBBox(t, e, s, i, r, a) {
    return n(this, Xs) || n(this, Et).recordBBox(n(this, Wt), e, s, i, r, a), this;
  }
  recordCharacterBBox(t, e, s, i, r, a, o) {
    return n(this, Xs) || n(this, Et).recordCharacterBBox(n(this, Wt), e, s, i, r, a, o), this;
  }
  recordFullPageBBox(t) {
    return n(this, Xs) || n(this, Et).recordFullPageBBox(n(this, Wt)), this;
  }
  getSimpleIndex(t) {
    return n(this, Et).getSimpleIndex(t);
  }
  recordDependencies(t, e) {
    return n(this, Et).recordDependencies(n(this, Wt), e), this;
  }
  recordNamedDependency(t, e) {
    return n(this, Et).recordNamedDependency(n(this, Wt), e), this;
  }
  recordOperation(t) {
    return n(this, Et).recordOperation(n(this, Wt), !0), this;
  }
  recordShowTextOperation(t) {
    return n(this, Et).recordShowTextOperation(n(this, Wt), !0), this;
  }
  bboxToClipBoxDropOperation(t) {
    return n(this, Xs) || n(this, Et).bboxToClipBoxDropOperation(n(this, Wt), !0), this;
  }
  take() {
    throw new Error("Unreachable");
  }
  takeDebugMetadata() {
    throw new Error("Unreachable");
  }
};
Et = new WeakMap(), Wt = new WeakMap(), Xs = new WeakMap(), Vo = new WeakMap(), qo = new WeakMap();
let mu = og;
const Ts = {
  stroke: ["path", "transform", "filter", "strokeColor", "strokeAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "dash"],
  fill: ["path", "transform", "filter", "fillColor", "fillAlpha", "globalCompositeOperation", "SMask"],
  imageXObject: ["transform", "SMask", "filter", "fillAlpha", "strokeAlpha", "globalCompositeOperation"],
  rawFillPath: ["filter", "fillColor", "fillAlpha"],
  showText: ["transform", "leading", "charSpacing", "wordSpacing", "hScale", "textRise", "moveText", "textMatrix", "font", "fontObj", "filter", "fillColor", "textRenderingMode", "SMask", "fillAlpha", "strokeAlpha", "globalCompositeOperation", "sameLineText"],
  transform: ["transform"],
  transformAndFill: ["transform", "fillColor"]
}, Se = {
  FILL: "Fill",
  STROKE: "Stroke",
  SHADING: "Shading"
};
function zf(c, t) {
  if (!t)
    return;
  const e = t[2] - t[0], s = t[3] - t[1], i = new Path2D();
  i.rect(t[0], t[1], e, s), c.clip(i);
}
class Kp {
  isModifyingCurrentTransform() {
    return !1;
  }
  getPattern() {
    Tt("Abstract method `getPattern` called.");
  }
}
class Q0 extends Kp {
  constructor(t) {
    super(), this._type = t[1], this._bbox = t[2], this._colorStops = t[3], this._p0 = t[4], this._p1 = t[5], this._r0 = t[6], this._r1 = t[7], this.matrix = null;
  }
  _createGradient(t) {
    let e;
    this._type === "axial" ? e = t.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]) : this._type === "radial" && (e = t.createRadialGradient(this._p0[0], this._p0[1], this._r0, this._p1[0], this._p1[1], this._r1));
    for (const s of this._colorStops)
      e.addColorStop(s[0], s[1]);
    return e;
  }
  getPattern(t, e, s, i) {
    let r;
    if (i === Se.STROKE || i === Se.FILL) {
      const a = e.current.getClippedPathBoundingBox(i, Ht(t)) || [0, 0, 0, 0], o = Math.ceil(a[2] - a[0]) || 1, l = Math.ceil(a[3] - a[1]) || 1, h = e.cachedCanvases.getCanvas("pattern", o, l), d = h.context;
      d.clearRect(0, 0, d.canvas.width, d.canvas.height), d.beginPath(), d.rect(0, 0, d.canvas.width, d.canvas.height), d.translate(-a[0], -a[1]), s = W.transform(s, [1, 0, 0, 1, a[0], a[1]]), d.transform(...e.baseTransform), this.matrix && d.transform(...this.matrix), zf(d, this._bbox), d.fillStyle = this._createGradient(d), d.fill(), r = t.createPattern(h.canvas, "no-repeat");
      const u = new DOMMatrix(s);
      r.setTransform(u);
    } else
      zf(t, this._bbox), r = this._createGradient(t);
    return r;
  }
}
function of(c, t, e, s, i, r, a, o) {
  const l = t.coords, h = t.colors, d = c.data, u = c.width * 4;
  let p;
  l[e + 1] > l[s + 1] && (p = e, e = s, s = p, p = r, r = a, a = p), l[s + 1] > l[i + 1] && (p = s, s = i, i = p, p = a, a = o, o = p), l[e + 1] > l[s + 1] && (p = e, e = s, s = p, p = r, r = a, a = p);
  const b = (l[e] + t.offsetX) * t.scaleX, S = (l[e + 1] + t.offsetY) * t.scaleY, v = (l[s] + t.offsetX) * t.scaleX, E = (l[s + 1] + t.offsetY) * t.scaleY, x = (l[i] + t.offsetX) * t.scaleX, T = (l[i + 1] + t.offsetY) * t.scaleY;
  if (S >= T)
    return;
  const _ = h[r], f = h[r + 1], m = h[r + 2], A = h[a], C = h[a + 1], P = h[a + 2], R = h[o], L = h[o + 1], D = h[o + 2], F = Math.round(S), U = Math.round(T);
  let O, X, k, I, B, q, ot, Pt;
  for (let H = F; H <= U; H++) {
    if (H < E) {
      const ct = H < S ? 0 : (S - H) / (S - E);
      O = b - (b - v) * ct, X = _ - (_ - A) * ct, k = f - (f - C) * ct, I = m - (m - P) * ct;
    } else {
      let ct;
      H > T ? ct = 1 : E === T ? ct = 0 : ct = (E - H) / (E - T), O = v - (v - x) * ct, X = A - (A - R) * ct, k = C - (C - L) * ct, I = P - (P - D) * ct;
    }
    let K;
    H < S ? K = 0 : H > T ? K = 1 : K = (S - H) / (S - T), B = b - (b - x) * K, q = _ - (_ - R) * K, ot = f - (f - L) * K, Pt = m - (m - D) * K;
    const rt = Math.round(Math.min(O, B)), ht = Math.round(Math.max(O, B));
    let Xt = u * H + rt * 4;
    for (let ct = rt; ct <= ht; ct++)
      K = (O - ct) / (O - B), K < 0 ? K = 0 : K > 1 && (K = 1), d[Xt++] = X - (X - q) * K | 0, d[Xt++] = k - (k - ot) * K | 0, d[Xt++] = I - (I - Pt) * K | 0, d[Xt++] = 255;
  }
}
function tw(c, t, e) {
  const s = t.coords, i = t.colors;
  let r, a;
  switch (t.type) {
    case "lattice":
      const o = t.verticesPerRow, l = Math.floor(s.length / o) - 1, h = o - 1;
      for (r = 0; r < l; r++) {
        let d = r * o;
        for (let u = 0; u < h; u++, d++)
          of(c, e, s[d], s[d + 1], s[d + o], i[d], i[d + 1], i[d + o]), of(c, e, s[d + o + 1], s[d + 1], s[d + o], i[d + o + 1], i[d + 1], i[d + o]);
      }
      break;
    case "triangles":
      for (r = 0, a = s.length; r < a; r += 3)
        of(c, e, s[r], s[r + 1], s[r + 2], i[r], i[r + 1], i[r + 2]);
      break;
    default:
      throw new Error("illegal figure");
  }
}
class ew extends Kp {
  constructor(t) {
    super(), this._coords = t[2], this._colors = t[3], this._figures = t[4], this._bounds = t[5], this._bbox = t[6], this._background = t[7], this.matrix = null;
  }
  _createMeshCanvas(t, e, s) {
    const o = Math.floor(this._bounds[0]), l = Math.floor(this._bounds[1]), h = Math.ceil(this._bounds[2]) - o, d = Math.ceil(this._bounds[3]) - l, u = Math.min(Math.ceil(Math.abs(h * t[0] * 1.1)), 3e3), p = Math.min(Math.ceil(Math.abs(d * t[1] * 1.1)), 3e3), b = h / u, S = d / p, v = {
      coords: this._coords,
      colors: this._colors,
      offsetX: -o,
      offsetY: -l,
      scaleX: 1 / b,
      scaleY: 1 / S
    }, E = u + 4, x = p + 4, T = s.getCanvas("mesh", E, x), _ = T.context, f = _.createImageData(u, p);
    if (e) {
      const A = f.data;
      for (let C = 0, P = A.length; C < P; C += 4)
        A[C] = e[0], A[C + 1] = e[1], A[C + 2] = e[2], A[C + 3] = 255;
    }
    for (const A of this._figures)
      tw(f, A, v);
    return _.putImageData(f, 2, 2), {
      canvas: T.canvas,
      offsetX: o - 2 * b,
      offsetY: l - 2 * S,
      scaleX: b,
      scaleY: S
    };
  }
  isModifyingCurrentTransform() {
    return !0;
  }
  getPattern(t, e, s, i) {
    zf(t, this._bbox);
    const r = new Float32Array(2);
    if (i === Se.SHADING)
      W.singularValueDecompose2dScale(Ht(t), r);
    else if (this.matrix) {
      W.singularValueDecompose2dScale(this.matrix, r);
      const [o, l] = r;
      W.singularValueDecompose2dScale(e.baseTransform, r), r[0] *= o, r[1] *= l;
    } else
      W.singularValueDecompose2dScale(e.baseTransform, r);
    const a = this._createMeshCanvas(r, i === Se.SHADING ? null : this._background, e.cachedCanvases);
    return i !== Se.SHADING && (t.setTransform(...e.baseTransform), this.matrix && t.transform(...this.matrix)), t.translate(a.offsetX, a.offsetY), t.scale(a.scaleX, a.scaleY), t.createPattern(a.canvas, "no-repeat");
  }
}
class sw extends Kp {
  getPattern() {
    return "hotpink";
  }
}
function iw(c) {
  switch (c[0]) {
    case "RadialAxial":
      return new Q0(c);
    case "Mesh":
      return new ew(c);
    case "Dummy":
      return new sw();
  }
  throw new Error(`Unknown IR type: ${c[0]}`);
}
const Pg = {
  COLORED: 1,
  UNCOLORED: 2
}, Mu = class Mu {
  constructor(t, e, s, i) {
    this.color = t[1], this.operatorList = t[2], this.matrix = t[3], this.bbox = t[4], this.xstep = t[5], this.ystep = t[6], this.paintType = t[7], this.tilingType = t[8], this.ctx = e, this.canvasGraphicsFactory = s, this.baseTransform = i;
  }
  createPatternCanvas(t, e) {
    var q, ot;
    const {
      bbox: s,
      operatorList: i,
      paintType: r,
      tilingType: a,
      color: o,
      canvasGraphicsFactory: l
    } = this;
    let {
      xstep: h,
      ystep: d
    } = this;
    h = Math.abs(h), d = Math.abs(d), ju("TilingType: " + a);
    const u = s[0], p = s[1], b = s[2], S = s[3], v = b - u, E = S - p, x = new Float32Array(2);
    W.singularValueDecompose2dScale(this.matrix, x);
    const [T, _] = x;
    W.singularValueDecompose2dScale(this.baseTransform, x);
    const f = T * x[0], m = _ * x[1];
    let A = v, C = E, P = !1, R = !1;
    const L = Math.ceil(h * f), D = Math.ceil(d * m), F = Math.ceil(v * f), U = Math.ceil(E * m);
    L >= F ? A = h : P = !0, D >= U ? C = d : R = !0;
    const O = this.getSizeAndScale(A, this.ctx.canvas.width, f), X = this.getSizeAndScale(C, this.ctx.canvas.height, m), k = t.cachedCanvases.getCanvas("pattern", O.size, X.size), I = k.context, B = l.createCanvasGraphics(I, e);
    if (B.groupLevel = t.groupLevel, this.setFillAndStrokeStyleToContext(B, r, o), I.translate(-O.scale * u, -X.scale * p), B.transform(0, O.scale, 0, 0, X.scale, 0, 0), I.save(), (q = B.dependencyTracker) == null || q.save(), this.clipBbox(B, u, p, b, S), B.baseTransform = Ht(B.ctx), B.executeOperatorList(i), B.endDrawing(), (ot = B.dependencyTracker) == null || ot.restore(), I.restore(), P || R) {
      const Pt = k.canvas;
      P && (A = h), R && (C = d);
      const H = this.getSizeAndScale(A, this.ctx.canvas.width, f), K = this.getSizeAndScale(C, this.ctx.canvas.height, m), rt = H.size, ht = K.size, Xt = t.cachedCanvases.getCanvas("pattern-workaround", rt, ht), ct = Xt.context, je = P ? Math.floor(v / h) : 0, oi = R ? Math.floor(E / d) : 0;
      for (let Bi = 0; Bi <= je; Bi++)
        for (let Fe = 0; Fe <= oi; Fe++)
          ct.drawImage(Pt, rt * Bi, ht * Fe, rt, ht, 0, 0, rt, ht);
      return {
        canvas: Xt.canvas,
        scaleX: H.scale,
        scaleY: K.scale,
        offsetX: u,
        offsetY: p
      };
    }
    return {
      canvas: k.canvas,
      scaleX: O.scale,
      scaleY: X.scale,
      offsetX: u,
      offsetY: p
    };
  }
  getSizeAndScale(t, e, s) {
    const i = Math.max(Mu.MAX_PATTERN_SIZE, e);
    let r = Math.ceil(t * s);
    return r >= i ? r = i : s = r / t, {
      scale: s,
      size: r
    };
  }
  clipBbox(t, e, s, i, r) {
    const a = i - e, o = r - s;
    t.ctx.rect(e, s, a, o), W.axialAlignedBoundingBox([e, s, i, r], Ht(t.ctx), t.current.minMax), t.clip(), t.endPath();
  }
  setFillAndStrokeStyleToContext(t, e, s) {
    const i = t.ctx, r = t.current;
    switch (e) {
      case Pg.COLORED:
        const {
          fillStyle: a,
          strokeStyle: o
        } = this.ctx;
        i.fillStyle = r.fillColor = a, i.strokeStyle = r.strokeColor = o;
        break;
      case Pg.UNCOLORED:
        i.fillStyle = i.strokeStyle = s, r.fillColor = r.strokeColor = s;
        break;
      default:
        throw new E0(`Unsupported paint type: ${e}`);
    }
  }
  isModifyingCurrentTransform() {
    return !1;
  }
  getPattern(t, e, s, i, r) {
    let a = s;
    i !== Se.SHADING && (a = W.transform(a, e.baseTransform), this.matrix && (a = W.transform(a, this.matrix)));
    const o = this.createPatternCanvas(e, r);
    let l = new DOMMatrix(a);
    l = l.translate(o.offsetX, o.offsetY), l = l.scale(1 / o.scaleX, 1 / o.scaleY);
    const h = t.createPattern(o.canvas, "repeat");
    return h.setTransform(l), h;
  }
};
N(Mu, "MAX_PATTERN_SIZE", 3e3);
let Gf = Mu;
function nw({
  src: c,
  srcPos: t = 0,
  dest: e,
  width: s,
  height: i,
  nonBlackColor: r = 4294967295,
  inverseDecode: a = !1
}) {
  const o = ge.isLittleEndian ? 4278190080 : 255, [l, h] = a ? [r, o] : [o, r], d = s >> 3, u = s & 7, p = c.length;
  e = new Uint32Array(e.buffer);
  let b = 0;
  for (let S = 0; S < i; S++) {
    for (const E = t + d; t < E; t++) {
      const x = t < p ? c[t] : 255;
      e[b++] = x & 128 ? h : l, e[b++] = x & 64 ? h : l, e[b++] = x & 32 ? h : l, e[b++] = x & 16 ? h : l, e[b++] = x & 8 ? h : l, e[b++] = x & 4 ? h : l, e[b++] = x & 2 ? h : l, e[b++] = x & 1 ? h : l;
    }
    if (u === 0)
      continue;
    const v = t < p ? c[t++] : 255;
    for (let E = 0; E < u; E++)
      e[b++] = v & 1 << 7 - E ? h : l;
  }
  return {
    srcPos: t,
    destPos: b
  };
}
const Rg = 16, kg = 100, rw = 15, Lg = 10, es = 16, lf = new DOMMatrix(), Ss = new Float32Array(2), fo = new Float32Array([1 / 0, 1 / 0, -1 / 0, -1 / 0]);
function aw(c, t) {
  if (c._removeMirroring)
    throw new Error("Context is already forwarding operations.");
  c.__originalSave = c.save, c.__originalRestore = c.restore, c.__originalRotate = c.rotate, c.__originalScale = c.scale, c.__originalTranslate = c.translate, c.__originalTransform = c.transform, c.__originalSetTransform = c.setTransform, c.__originalResetTransform = c.resetTransform, c.__originalClip = c.clip, c.__originalMoveTo = c.moveTo, c.__originalLineTo = c.lineTo, c.__originalBezierCurveTo = c.bezierCurveTo, c.__originalRect = c.rect, c.__originalClosePath = c.closePath, c.__originalBeginPath = c.beginPath, c._removeMirroring = () => {
    c.save = c.__originalSave, c.restore = c.__originalRestore, c.rotate = c.__originalRotate, c.scale = c.__originalScale, c.translate = c.__originalTranslate, c.transform = c.__originalTransform, c.setTransform = c.__originalSetTransform, c.resetTransform = c.__originalResetTransform, c.clip = c.__originalClip, c.moveTo = c.__originalMoveTo, c.lineTo = c.__originalLineTo, c.bezierCurveTo = c.__originalBezierCurveTo, c.rect = c.__originalRect, c.closePath = c.__originalClosePath, c.beginPath = c.__originalBeginPath, delete c._removeMirroring;
  }, c.save = function() {
    t.save(), this.__originalSave();
  }, c.restore = function() {
    t.restore(), this.__originalRestore();
  }, c.translate = function(e, s) {
    t.translate(e, s), this.__originalTranslate(e, s);
  }, c.scale = function(e, s) {
    t.scale(e, s), this.__originalScale(e, s);
  }, c.transform = function(e, s, i, r, a, o) {
    t.transform(e, s, i, r, a, o), this.__originalTransform(e, s, i, r, a, o);
  }, c.setTransform = function(e, s, i, r, a, o) {
    t.setTransform(e, s, i, r, a, o), this.__originalSetTransform(e, s, i, r, a, o);
  }, c.resetTransform = function() {
    t.resetTransform(), this.__originalResetTransform();
  }, c.rotate = function(e) {
    t.rotate(e), this.__originalRotate(e);
  }, c.clip = function(e) {
    t.clip(e), this.__originalClip(e);
  }, c.moveTo = function(e, s) {
    t.moveTo(e, s), this.__originalMoveTo(e, s);
  }, c.lineTo = function(e, s) {
    t.lineTo(e, s), this.__originalLineTo(e, s);
  }, c.bezierCurveTo = function(e, s, i, r, a, o) {
    t.bezierCurveTo(e, s, i, r, a, o), this.__originalBezierCurveTo(e, s, i, r, a, o);
  }, c.rect = function(e, s, i, r) {
    t.rect(e, s, i, r), this.__originalRect(e, s, i, r);
  }, c.closePath = function() {
    t.closePath(), this.__originalClosePath();
  }, c.beginPath = function() {
    t.beginPath(), this.__originalBeginPath();
  };
}
class ow {
  constructor(t) {
    this.canvasFactory = t, this.cache = /* @__PURE__ */ Object.create(null);
  }
  getCanvas(t, e, s) {
    let i;
    return this.cache[t] !== void 0 ? (i = this.cache[t], this.canvasFactory.reset(i, e, s)) : (i = this.canvasFactory.create(e, s), this.cache[t] = i), i;
  }
  delete(t) {
    delete this.cache[t];
  }
  clear() {
    for (const t in this.cache) {
      const e = this.cache[t];
      this.canvasFactory.destroy(e), delete this.cache[t];
    }
  }
}
function Ld(c, t, e, s, i, r, a, o, l, h) {
  const [d, u, p, b, S, v] = Ht(c);
  if (u === 0 && p === 0) {
    const T = a * d + S, _ = Math.round(T), f = o * b + v, m = Math.round(f), A = (a + l) * d + S, C = Math.abs(Math.round(A) - _) || 1, P = (o + h) * b + v, R = Math.abs(Math.round(P) - m) || 1;
    return c.setTransform(Math.sign(d), 0, 0, Math.sign(b), _, m), c.drawImage(t, e, s, i, r, 0, 0, C, R), c.setTransform(d, u, p, b, S, v), [C, R];
  }
  if (d === 0 && b === 0) {
    const T = o * p + S, _ = Math.round(T), f = a * u + v, m = Math.round(f), A = (o + h) * p + S, C = Math.abs(Math.round(A) - _) || 1, P = (a + l) * u + v, R = Math.abs(Math.round(P) - m) || 1;
    return c.setTransform(0, Math.sign(u), Math.sign(p), 0, _, m), c.drawImage(t, e, s, i, r, 0, 0, R, C), c.setTransform(d, u, p, b, S, v), [R, C];
  }
  c.drawImage(t, e, s, i, r, a, o, l, h);
  const E = Math.hypot(d, u), x = Math.hypot(p, b);
  return [E * l, x * h];
}
class Dg {
  constructor(t, e, s) {
    N(this, "alphaIsShape", !1);
    N(this, "fontSize", 0);
    N(this, "fontSizeScale", 1);
    N(this, "textMatrix", null);
    N(this, "textMatrixScale", 1);
    N(this, "fontMatrix", gf);
    N(this, "leading", 0);
    N(this, "x", 0);
    N(this, "y", 0);
    N(this, "lineX", 0);
    N(this, "lineY", 0);
    N(this, "charSpacing", 0);
    N(this, "wordSpacing", 0);
    N(this, "textHScale", 1);
    N(this, "textRenderingMode", me.FILL);
    N(this, "textRise", 0);
    N(this, "fillColor", "#000000");
    N(this, "strokeColor", "#000000");
    N(this, "patternFill", !1);
    N(this, "patternStroke", !1);
    N(this, "fillAlpha", 1);
    N(this, "strokeAlpha", 1);
    N(this, "lineWidth", 1);
    N(this, "activeSMask", null);
    N(this, "transferMaps", "none");
    s == null || s(this), this.clipBox = new Float32Array([0, 0, t, e]), this.minMax = fo.slice();
  }
  clone() {
    const t = Object.create(this);
    return t.clipBox = this.clipBox.slice(), t.minMax = this.minMax.slice(), t;
  }
  getPathBoundingBox(t = Se.FILL, e = null) {
    const s = this.minMax.slice();
    if (t === Se.STROKE) {
      e || Tt("Stroke bounding box must include transform."), W.singularValueDecompose2dScale(e, Ss);
      const i = Ss[0] * this.lineWidth / 2, r = Ss[1] * this.lineWidth / 2;
      s[0] -= i, s[1] -= r, s[2] += i, s[3] += r;
    }
    return s;
  }
  updateClipFromPath() {
    const t = W.intersect(this.clipBox, this.getPathBoundingBox());
    this.startNewPathAndClipBox(t || [0, 0, 0, 0]);
  }
  isEmptyClip() {
    return this.minMax[0] === 1 / 0;
  }
  startNewPathAndClipBox(t) {
    this.clipBox.set(t, 0), this.minMax.set(fo, 0);
  }
  getClippedPathBoundingBox(t = Se.FILL, e = null) {
    return W.intersect(this.clipBox, this.getPathBoundingBox(t, e));
  }
}
function Mg(c, t) {
  if (t instanceof ImageData) {
    c.putImageData(t, 0, 0);
    return;
  }
  const e = t.height, s = t.width, i = e % es, r = (e - i) / es, a = i === 0 ? r : r + 1, o = c.createImageData(s, es);
  let l = 0, h;
  const d = t.data, u = o.data;
  let p, b, S, v;
  if (t.kind === _h.GRAYSCALE_1BPP) {
    const E = d.byteLength, x = new Uint32Array(u.buffer, 0, u.byteLength >> 2), T = x.length, _ = s + 7 >> 3, f = 4294967295, m = ge.isLittleEndian ? 4278190080 : 255;
    for (p = 0; p < a; p++) {
      for (S = p < r ? es : i, h = 0, b = 0; b < S; b++) {
        const A = E - l;
        let C = 0;
        const P = A > _ ? s : A * 8 - 7, R = P & -8;
        let L = 0, D = 0;
        for (; C < R; C += 8)
          D = d[l++], x[h++] = D & 128 ? f : m, x[h++] = D & 64 ? f : m, x[h++] = D & 32 ? f : m, x[h++] = D & 16 ? f : m, x[h++] = D & 8 ? f : m, x[h++] = D & 4 ? f : m, x[h++] = D & 2 ? f : m, x[h++] = D & 1 ? f : m;
        for (; C < P; C++)
          L === 0 && (D = d[l++], L = 128), x[h++] = D & L ? f : m, L >>= 1;
      }
      for (; h < T; )
        x[h++] = 0;
      c.putImageData(o, 0, p * es);
    }
  } else if (t.kind === _h.RGBA_32BPP) {
    for (b = 0, v = s * es * 4, p = 0; p < r; p++)
      u.set(d.subarray(l, l + v)), l += v, c.putImageData(o, 0, b), b += es;
    p < a && (v = s * i * 4, u.set(d.subarray(l, l + v)), c.putImageData(o, 0, b));
  } else if (t.kind === _h.RGB_24BPP)
    for (S = es, v = s * S, p = 0; p < a; p++) {
      for (p >= r && (S = i, v = s * S), h = 0, b = v; b--; )
        u[h++] = d[l++], u[h++] = d[l++], u[h++] = d[l++], u[h++] = 255;
      c.putImageData(o, 0, p * es);
    }
  else
    throw new Error(`bad image kind: ${t.kind}`);
}
function Ig(c, t) {
  if (t.bitmap) {
    c.drawImage(t.bitmap, 0, 0);
    return;
  }
  const e = t.height, s = t.width, i = e % es, r = (e - i) / es, a = i === 0 ? r : r + 1, o = c.createImageData(s, es);
  let l = 0;
  const h = t.data, d = o.data;
  for (let u = 0; u < a; u++) {
    const p = u < r ? es : i;
    ({
      srcPos: l
    } = nw({
      src: h,
      srcPos: l,
      dest: d,
      width: s,
      height: p,
      nonBlackColor: 0
    })), c.putImageData(o, 0, u * es);
  }
}
function Jl(c, t) {
  const e = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font", "filter"];
  for (const s of e)
    c[s] !== void 0 && (t[s] = c[s]);
  c.setLineDash !== void 0 && (t.setLineDash(c.getLineDash()), t.lineDashOffset = c.lineDashOffset);
}
function Dd(c) {
  c.strokeStyle = c.fillStyle = "#000000", c.fillRule = "nonzero", c.globalAlpha = 1, c.lineWidth = 1, c.lineCap = "butt", c.lineJoin = "miter", c.miterLimit = 10, c.globalCompositeOperation = "source-over", c.font = "10px sans-serif", c.setLineDash !== void 0 && (c.setLineDash([]), c.lineDashOffset = 0);
  const {
    filter: t
  } = c;
  t !== "none" && t !== "" && (c.filter = "none");
}
function Fg(c, t) {
  if (t)
    return !0;
  W.singularValueDecompose2dScale(c, Ss);
  const e = Math.fround(ri.pixelRatio * Pn.PDF_TO_CSS_UNITS);
  return Ss[0] <= e && Ss[1] <= e;
}
const lw = ["butt", "round", "square"], hw = ["miter", "round", "bevel"], cw = {}, Ng = {};
var ai, Wf, jf, Vf;
const lg = class lg {
  constructor(t, e, s, i, r, {
    optionalContentConfig: a,
    markedContentStack: o = null
  }, l, h, d) {
    y(this, ai);
    this.ctx = t, this.current = new Dg(this.ctx.canvas.width, this.ctx.canvas.height), this.stateStack = [], this.pendingClip = null, this.pendingEOFill = !1, this.res = null, this.xobjs = null, this.commonObjs = e, this.objs = s, this.canvasFactory = i, this.filterFactory = r, this.groupStack = [], this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.smaskCounter = 0, this.tempSMask = null, this.suspendedCtx = null, this.contentVisible = !0, this.markedContentStack = o || [], this.optionalContentConfig = a, this.cachedCanvases = new ow(this.canvasFactory), this.cachedPatterns = /* @__PURE__ */ new Map(), this.annotationCanvasMap = l, this.viewportScale = 1, this.outputScaleX = 1, this.outputScaleY = 1, this.pageColors = h, this._cachedScaleForStroking = [-1, 0], this._cachedGetSinglePixelWidth = null, this._cachedBitmapsMap = /* @__PURE__ */ new Map(), this.dependencyTracker = d ?? null;
  }
  getObject(t, e, s = null) {
    var i;
    return typeof e == "string" ? ((i = this.dependencyTracker) == null || i.recordNamedDependency(t, e), e.startsWith("g_") ? this.commonObjs.get(e) : this.objs.get(e)) : s;
  }
  beginDrawing({
    transform: t,
    viewport: e,
    transparency: s = !1,
    background: i = null
  }) {
    const r = this.ctx.canvas.width, a = this.ctx.canvas.height, o = this.ctx.fillStyle;
    if (this.ctx.fillStyle = i || "#ffffff", this.ctx.fillRect(0, 0, r, a), this.ctx.fillStyle = o, s) {
      const l = this.cachedCanvases.getCanvas("transparent", r, a);
      this.compositeCtx = this.ctx, this.transparentCanvas = l.canvas, this.ctx = l.context, this.ctx.save(), this.ctx.transform(...Ht(this.compositeCtx));
    }
    this.ctx.save(), Dd(this.ctx), t && (this.ctx.transform(...t), this.outputScaleX = t[0], this.outputScaleY = t[0]), this.ctx.transform(...e.transform), this.viewportScale = e.scale, this.baseTransform = Ht(this.ctx);
  }
  executeOperatorList(t, e, s, i, r) {
    var x;
    const a = t.argsArray, o = t.fnArray;
    let l = e || 0;
    const h = a.length;
    if (h === l)
      return l;
    const d = h - l > Lg && typeof s == "function", u = d ? Date.now() + rw : 0;
    let p = 0;
    const b = this.commonObjs, S = this.objs;
    let v, E;
    for (; ; ) {
      if (i !== void 0 && l === i.nextBreakPoint)
        return i.breakIt(l, s), l;
      if (!r || r(l))
        if (v = o[l], E = a[l] ?? null, v !== ql.dependency)
          E === null ? this[v](l) : this[v](l, ...E);
        else
          for (const T of E) {
            (x = this.dependencyTracker) == null || x.recordNamedData(T, l);
            const _ = T.startsWith("g_") ? b : S;
            if (!_.has(T))
              return _.get(T, s), l;
          }
      if (l++, l === h)
        return l;
      if (d && ++p > Lg) {
        if (Date.now() > u)
          return s(), l;
        p = 0;
      }
    }
  }
  endDrawing() {
    w(this, ai, Wf).call(this), this.cachedCanvases.clear(), this.cachedPatterns.clear();
    for (const t of this._cachedBitmapsMap.values()) {
      for (const e of t.values())
        typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement && (e.width = e.height = 0);
      t.clear();
    }
    this._cachedBitmapsMap.clear(), w(this, ai, jf).call(this);
  }
  _scaleImage(t, e) {
    const s = t.width ?? t.displayWidth, i = t.height ?? t.displayHeight;
    let r = Math.max(Math.hypot(e[0], e[1]), 1), a = Math.max(Math.hypot(e[2], e[3]), 1), o = s, l = i, h = "prescale1", d, u;
    for (; r > 2 && o > 1 || a > 2 && l > 1; ) {
      let p = o, b = l;
      r > 2 && o > 1 && (p = o >= 16384 ? Math.floor(o / 2) - 1 || 1 : Math.ceil(o / 2), r /= o / p), a > 2 && l > 1 && (b = l >= 16384 ? Math.floor(l / 2) - 1 || 1 : Math.ceil(l) / 2, a /= l / b), d = this.cachedCanvases.getCanvas(h, p, b), u = d.context, u.clearRect(0, 0, p, b), u.drawImage(t, 0, 0, o, l, 0, 0, p, b), t = d.canvas, o = p, l = b, h = h === "prescale1" ? "prescale2" : "prescale1";
    }
    return {
      img: t,
      paintWidth: o,
      paintHeight: l
    };
  }
  _createMaskCanvas(t, e) {
    var L, D;
    const s = this.ctx, {
      width: i,
      height: r
    } = e, a = this.current.fillColor, o = this.current.patternFill, l = Ht(s);
    let h, d, u, p;
    if ((e.bitmap || e.data) && e.count > 1) {
      const F = e.bitmap || e.data.buffer;
      d = JSON.stringify(o ? l : [l.slice(0, 4), a]), h = this._cachedBitmapsMap.get(F), h || (h = /* @__PURE__ */ new Map(), this._cachedBitmapsMap.set(F, h));
      const U = h.get(d);
      if (U && !o) {
        const O = Math.round(Math.min(l[0], l[2]) + l[4]), X = Math.round(Math.min(l[1], l[3]) + l[5]);
        return (L = this.dependencyTracker) == null || L.recordDependencies(t, Ts.transformAndFill), {
          canvas: U,
          offsetX: O,
          offsetY: X
        };
      }
      u = U;
    }
    u || (p = this.cachedCanvases.getCanvas("maskCanvas", i, r), Ig(p.context, e));
    let b = W.transform(l, [1 / i, 0, 0, -1 / r, 0, 0]);
    b = W.transform(b, [1, 0, 0, 1, 0, -r]);
    const S = fo.slice();
    W.axialAlignedBoundingBox([0, 0, i, r], b, S);
    const [v, E, x, T] = S, _ = Math.round(x - v) || 1, f = Math.round(T - E) || 1, m = this.cachedCanvases.getCanvas("fillCanvas", _, f), A = m.context, C = v, P = E;
    A.translate(-C, -P), A.transform(...b), u || (u = this._scaleImage(p.canvas, li(A)), u = u.img, h && o && h.set(d, u)), A.imageSmoothingEnabled = Fg(Ht(A), e.interpolate), Ld(A, u, 0, 0, u.width, u.height, 0, 0, i, r), A.globalCompositeOperation = "source-in";
    const R = W.transform(li(A), [1, 0, 0, 1, -C, -P]);
    return A.fillStyle = o ? a.getPattern(s, this, R, Se.FILL, t) : a, A.fillRect(0, 0, i, r), h && !o && (this.cachedCanvases.delete("fillCanvas"), h.set(d, m.canvas)), (D = this.dependencyTracker) == null || D.recordDependencies(t, Ts.transformAndFill), {
      canvas: m.canvas,
      offsetX: Math.round(C),
      offsetY: Math.round(P)
    };
  }
  setLineWidth(t, e) {
    var s;
    (s = this.dependencyTracker) == null || s.recordSimpleData("lineWidth", t), e !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1), this.current.lineWidth = e, this.ctx.lineWidth = e;
  }
  setLineCap(t, e) {
    var s;
    (s = this.dependencyTracker) == null || s.recordSimpleData("lineCap", t), this.ctx.lineCap = lw[e];
  }
  setLineJoin(t, e) {
    var s;
    (s = this.dependencyTracker) == null || s.recordSimpleData("lineJoin", t), this.ctx.lineJoin = hw[e];
  }
  setMiterLimit(t, e) {
    var s;
    (s = this.dependencyTracker) == null || s.recordSimpleData("miterLimit", t), this.ctx.miterLimit = e;
  }
  setDash(t, e, s) {
    var r;
    (r = this.dependencyTracker) == null || r.recordSimpleData("dash", t);
    const i = this.ctx;
    i.setLineDash !== void 0 && (i.setLineDash(e), i.lineDashOffset = s);
  }
  setRenderingIntent(t, e) {
  }
  setFlatness(t, e) {
  }
  setGState(t, e) {
    var s, i, r, a, o;
    for (const [l, h] of e)
      switch (l) {
        case "LW":
          this.setLineWidth(t, h);
          break;
        case "LC":
          this.setLineCap(t, h);
          break;
        case "LJ":
          this.setLineJoin(t, h);
          break;
        case "ML":
          this.setMiterLimit(t, h);
          break;
        case "D":
          this.setDash(t, h[0], h[1]);
          break;
        case "RI":
          this.setRenderingIntent(t, h);
          break;
        case "FL":
          this.setFlatness(t, h);
          break;
        case "Font":
          this.setFont(t, h[0], h[1]);
          break;
        case "CA":
          (s = this.dependencyTracker) == null || s.recordSimpleData("strokeAlpha", t), this.current.strokeAlpha = h;
          break;
        case "ca":
          (i = this.dependencyTracker) == null || i.recordSimpleData("fillAlpha", t), this.ctx.globalAlpha = this.current.fillAlpha = h;
          break;
        case "BM":
          (r = this.dependencyTracker) == null || r.recordSimpleData("globalCompositeOperation", t), this.ctx.globalCompositeOperation = h;
          break;
        case "SMask":
          (a = this.dependencyTracker) == null || a.recordSimpleData("SMask", t), this.current.activeSMask = h ? this.tempSMask : null, this.tempSMask = null, this.checkSMaskState();
          break;
        case "TR":
          (o = this.dependencyTracker) == null || o.recordSimpleData("filter", t), this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(h);
          break;
      }
  }
  get inSMaskMode() {
    return !!this.suspendedCtx;
  }
  checkSMaskState() {
    const t = this.inSMaskMode;
    this.current.activeSMask && !t ? this.beginSMaskMode() : !this.current.activeSMask && t && this.endSMaskMode();
  }
  beginSMaskMode(t) {
    if (this.inSMaskMode)
      throw new Error("beginSMaskMode called while already in smask mode");
    const e = this.ctx.canvas.width, s = this.ctx.canvas.height, i = "smaskGroupAt" + this.groupLevel, r = this.cachedCanvases.getCanvas(i, e, s);
    this.suspendedCtx = this.ctx;
    const a = this.ctx = r.context;
    a.setTransform(this.suspendedCtx.getTransform()), Jl(this.suspendedCtx, a), aw(a, this.suspendedCtx), this.setGState(t, [["BM", "source-over"]]);
  }
  endSMaskMode() {
    if (!this.inSMaskMode)
      throw new Error("endSMaskMode called while not in smask mode");
    this.ctx._removeMirroring(), Jl(this.ctx, this.suspendedCtx), this.ctx = this.suspendedCtx, this.suspendedCtx = null;
  }
  compose(t) {
    if (!this.current.activeSMask)
      return;
    t ? (t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.ceil(t[2]), t[3] = Math.ceil(t[3])) : t = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height];
    const e = this.current.activeSMask, s = this.suspendedCtx;
    this.composeSMask(s, e, this.ctx, t), this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height), this.ctx.restore();
  }
  composeSMask(t, e, s, i) {
    const r = i[0], a = i[1], o = i[2] - r, l = i[3] - a;
    o === 0 || l === 0 || (this.genericComposeSMask(e.context, s, o, l, e.subtype, e.backdrop, e.transferMap, r, a, e.offsetX, e.offsetY), t.save(), t.globalAlpha = 1, t.globalCompositeOperation = "source-over", t.setTransform(1, 0, 0, 1, 0, 0), t.drawImage(s.canvas, 0, 0), t.restore());
  }
  genericComposeSMask(t, e, s, i, r, a, o, l, h, d, u) {
    let p = t.canvas, b = l - d, S = h - u;
    if (a)
      if (b < 0 || S < 0 || b + s > p.width || S + i > p.height) {
        const E = this.cachedCanvases.getCanvas("maskExtension", s, i), x = E.context;
        x.drawImage(p, -b, -S), x.globalCompositeOperation = "destination-atop", x.fillStyle = a, x.fillRect(0, 0, s, i), x.globalCompositeOperation = "source-over", p = E.canvas, b = S = 0;
      } else {
        t.save(), t.globalAlpha = 1, t.setTransform(1, 0, 0, 1, 0, 0);
        const E = new Path2D();
        E.rect(b, S, s, i), t.clip(E), t.globalCompositeOperation = "destination-atop", t.fillStyle = a, t.fillRect(b, S, s, i), t.restore();
      }
    e.save(), e.globalAlpha = 1, e.setTransform(1, 0, 0, 1, 0, 0), r === "Alpha" && o ? e.filter = this.filterFactory.addAlphaFilter(o) : r === "Luminosity" && (e.filter = this.filterFactory.addLuminosityFilter(o));
    const v = new Path2D();
    v.rect(l, h, s, i), e.clip(v), e.globalCompositeOperation = "destination-in", e.drawImage(p, b, S, s, i, l, h, s, i), e.restore();
  }
  save(t) {
    var s;
    this.inSMaskMode && Jl(this.ctx, this.suspendedCtx), this.ctx.save();
    const e = this.current;
    this.stateStack.push(e), this.current = e.clone(), (s = this.dependencyTracker) == null || s.save(t);
  }
  restore(t) {
    var e;
    if ((e = this.dependencyTracker) == null || e.restore(t), this.stateStack.length === 0) {
      this.inSMaskMode && this.endSMaskMode();
      return;
    }
    this.current = this.stateStack.pop(), this.ctx.restore(), this.inSMaskMode && Jl(this.suspendedCtx, this.ctx), this.checkSMaskState(), this.pendingClip = null, this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
  }
  transform(t, e, s, i, r, a, o) {
    var l;
    (l = this.dependencyTracker) == null || l.recordIncrementalData("transform", t), this.ctx.transform(e, s, i, r, a, o), this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
  }
  constructPath(t, e, s, i) {
    let [r] = s;
    if (!i) {
      r || (r = s[0] = new Path2D()), this[e](t, r);
      return;
    }
    if (this.dependencyTracker !== null) {
      const a = e === ql.stroke ? this.current.lineWidth / 2 : 0;
      this.dependencyTracker.resetBBox(t).recordBBox(t, this.ctx, i[0] - a, i[2] + a, i[1] - a, i[3] + a).recordDependencies(t, ["transform"]);
    }
    if (!(r instanceof Path2D)) {
      const a = s[0] = new Path2D();
      for (let o = 0, l = r.length; o < l; )
        switch (r[o++]) {
          case _d.moveTo:
            a.moveTo(r[o++], r[o++]);
            break;
          case _d.lineTo:
            a.lineTo(r[o++], r[o++]);
            break;
          case _d.curveTo:
            a.bezierCurveTo(r[o++], r[o++], r[o++], r[o++], r[o++], r[o++]);
            break;
          case _d.closePath:
            a.closePath();
            break;
          default:
            J(`Unrecognized drawing path operator: ${r[o - 1]}`);
            break;
        }
      r = a;
    }
    W.axialAlignedBoundingBox(i, Ht(this.ctx), this.current.minMax), this[e](t, r), this._pathStartIdx = t;
  }
  closePath(t) {
    this.ctx.closePath();
  }
  stroke(t, e, s = !0) {
    var a;
    const i = this.ctx, r = this.current.strokeColor;
    if (i.globalAlpha = this.current.strokeAlpha, this.contentVisible)
      if (typeof r == "object" && (r != null && r.getPattern)) {
        const o = r.isModifyingCurrentTransform() ? i.getTransform() : null;
        if (i.save(), i.strokeStyle = r.getPattern(i, this, li(i), Se.STROKE, t), o) {
          const l = new Path2D();
          l.addPath(e, i.getTransform().invertSelf().multiplySelf(o)), e = l;
        }
        this.rescaleAndStroke(e, !1), i.restore();
      } else
        this.rescaleAndStroke(e, !0);
    (a = this.dependencyTracker) == null || a.recordDependencies(t, Ts.stroke), s && this.consumePath(t, e, this.current.getClippedPathBoundingBox(Se.STROKE, Ht(this.ctx))), i.globalAlpha = this.current.fillAlpha;
  }
  closeStroke(t, e) {
    this.stroke(t, e);
  }
  fill(t, e, s = !0) {
    var h, d, u;
    const i = this.ctx, r = this.current.fillColor, a = this.current.patternFill;
    let o = !1;
    if (a) {
      const p = r.isModifyingCurrentTransform() ? i.getTransform() : null;
      if ((h = this.dependencyTracker) == null || h.save(t), i.save(), i.fillStyle = r.getPattern(i, this, li(i), Se.FILL, t), p) {
        const b = new Path2D();
        b.addPath(e, i.getTransform().invertSelf().multiplySelf(p)), e = b;
      }
      o = !0;
    }
    const l = this.current.getClippedPathBoundingBox();
    this.contentVisible && l !== null && (this.pendingEOFill ? (i.fill(e, "evenodd"), this.pendingEOFill = !1) : i.fill(e)), (d = this.dependencyTracker) == null || d.recordDependencies(t, Ts.fill), o && (i.restore(), (u = this.dependencyTracker) == null || u.restore(t)), s && this.consumePath(t, e, l);
  }
  eoFill(t, e) {
    this.pendingEOFill = !0, this.fill(t, e);
  }
  fillStroke(t, e) {
    this.fill(t, e, !1), this.stroke(t, e, !1), this.consumePath(t, e);
  }
  eoFillStroke(t, e) {
    this.pendingEOFill = !0, this.fillStroke(t, e);
  }
  closeFillStroke(t, e) {
    this.fillStroke(t, e);
  }
  closeEOFillStroke(t, e) {
    this.pendingEOFill = !0, this.fillStroke(t, e);
  }
  endPath(t, e) {
    this.consumePath(t, e);
  }
  rawFillPath(t, e) {
    var s;
    this.ctx.fill(e), (s = this.dependencyTracker) == null || s.recordDependencies(t, Ts.rawFillPath).recordOperation(t);
  }
  clip(t) {
    var e;
    (e = this.dependencyTracker) == null || e.recordFutureForcedDependency("clipMode", t), this.pendingClip = cw;
  }
  eoClip(t) {
    var e;
    (e = this.dependencyTracker) == null || e.recordFutureForcedDependency("clipMode", t), this.pendingClip = Ng;
  }
  beginText(t) {
    var e;
    this.current.textMatrix = null, this.current.textMatrixScale = 1, this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0, (e = this.dependencyTracker) == null || e.recordOpenMarker(t).resetIncrementalData("sameLineText").resetIncrementalData("moveText", t);
  }
  endText(t) {
    const e = this.pendingTextPaths, s = this.ctx;
    if (this.dependencyTracker) {
      const {
        dependencyTracker: i
      } = this;
      e !== void 0 && i.recordFutureForcedDependency("textClip", i.getOpenMarker()).recordFutureForcedDependency("textClip", t), i.recordCloseMarker(t);
    }
    if (e !== void 0) {
      const i = new Path2D(), r = s.getTransform().invertSelf();
      for (const {
        transform: a,
        x: o,
        y: l,
        fontSize: h,
        path: d
      } of e)
        d && i.addPath(d, new DOMMatrix(a).preMultiplySelf(r).translate(o, l).scale(h, -h));
      s.clip(i);
    }
    delete this.pendingTextPaths;
  }
  setCharSpacing(t, e) {
    var s;
    (s = this.dependencyTracker) == null || s.recordSimpleData("charSpacing", t), this.current.charSpacing = e;
  }
  setWordSpacing(t, e) {
    var s;
    (s = this.dependencyTracker) == null || s.recordSimpleData("wordSpacing", t), this.current.wordSpacing = e;
  }
  setHScale(t, e) {
    var s;
    (s = this.dependencyTracker) == null || s.recordSimpleData("hScale", t), this.current.textHScale = e / 100;
  }
  setLeading(t, e) {
    var s;
    (s = this.dependencyTracker) == null || s.recordSimpleData("leading", t), this.current.leading = -e;
  }
  setFont(t, e, s) {
    var u, p;
    (u = this.dependencyTracker) == null || u.recordSimpleData("font", t).recordSimpleDataFromNamed("fontObj", e, t);
    const i = this.commonObjs.get(e), r = this.current;
    if (!i)
      throw new Error(`Can't find font for ${e}`);
    if (r.fontMatrix = i.fontMatrix || gf, (r.fontMatrix[0] === 0 || r.fontMatrix[3] === 0) && J("Invalid font matrix for font " + e), s < 0 ? (s = -s, r.fontDirection = -1) : r.fontDirection = 1, this.current.font = i, this.current.fontSize = s, i.isType3Font)
      return;
    const a = i.loadedName || "sans-serif", o = ((p = i.systemFontInfo) == null ? void 0 : p.css) || `"${a}", ${i.fallbackName}`;
    let l = "normal";
    i.black ? l = "900" : i.bold && (l = "bold");
    const h = i.italic ? "italic" : "normal";
    let d = s;
    s < Rg ? d = Rg : s > kg && (d = kg), this.current.fontSizeScale = s / d, this.ctx.font = `${h} ${l} ${d}px ${o}`;
  }
  setTextRenderingMode(t, e) {
    var s;
    (s = this.dependencyTracker) == null || s.recordSimpleData("textRenderingMode", t), this.current.textRenderingMode = e;
  }
  setTextRise(t, e) {
    var s;
    (s = this.dependencyTracker) == null || s.recordSimpleData("textRise", t), this.current.textRise = e;
  }
  moveText(t, e, s) {
    var i;
    (i = this.dependencyTracker) == null || i.resetIncrementalData("sameLineText").recordIncrementalData("moveText", t), this.current.x = this.current.lineX += e, this.current.y = this.current.lineY += s;
  }
  setLeadingMoveText(t, e, s) {
    this.setLeading(t, -s), this.moveText(t, e, s);
  }
  setTextMatrix(t, e) {
    var i;
    (i = this.dependencyTracker) == null || i.recordSimpleData("textMatrix", t);
    const {
      current: s
    } = this;
    s.textMatrix = e, s.textMatrixScale = Math.hypot(e[0], e[1]), s.x = s.lineX = 0, s.y = s.lineY = 0;
  }
  nextLine(t) {
    var e;
    this.moveText(t, 0, this.current.leading), (e = this.dependencyTracker) == null || e.recordIncrementalData("moveText", this.dependencyTracker.getSimpleIndex("leading") ?? t);
  }
  paintChar(t, e, s, i, r, a) {
    var x, T, _, f;
    const o = this.ctx, l = this.current, h = l.font, d = l.textRenderingMode, u = l.fontSize / l.fontSizeScale, p = d & me.FILL_STROKE_MASK, b = !!(d & me.ADD_TO_PATH_FLAG), S = l.patternFill && !h.missingFile, v = l.patternStroke && !h.missingFile;
    let E;
    if ((h.disableFontFace || b || S || v) && !h.missingFile && (E = h.getPathGenerator(this.commonObjs, e)), E && (h.disableFontFace || S || v)) {
      o.save(), o.translate(s, i), o.scale(u, -u), (x = this.dependencyTracker) == null || x.recordCharacterBBox(t, o, h);
      let m;
      if (p === me.FILL || p === me.FILL_STROKE)
        if (r) {
          m = o.getTransform(), o.setTransform(...r);
          const A = w(this, ai, Vf).call(this, E, m, r);
          o.fill(A);
        } else
          o.fill(E);
      if (p === me.STROKE || p === me.FILL_STROKE)
        if (a) {
          m || (m = o.getTransform()), o.setTransform(...a);
          const {
            a: A,
            b: C,
            c: P,
            d: R
          } = m, L = W.inverseTransform(a), D = W.transform([A, C, P, R, 0, 0], L);
          W.singularValueDecompose2dScale(D, Ss), o.lineWidth *= Math.max(Ss[0], Ss[1]) / u, o.stroke(w(this, ai, Vf).call(this, E, m, a));
        } else
          o.lineWidth /= u, o.stroke(E);
      o.restore();
    } else
      (p === me.FILL || p === me.FILL_STROKE) && (o.fillText(e, s, i), (T = this.dependencyTracker) == null || T.recordCharacterBBox(t, o, h, u, s, i, () => o.measureText(e))), (p === me.STROKE || p === me.FILL_STROKE) && (this.dependencyTracker && ((_ = this.dependencyTracker) == null || _.recordCharacterBBox(t, o, h, u, s, i, () => o.measureText(e)).recordDependencies(t, Ts.stroke)), o.strokeText(e, s, i));
    b && ((this.pendingTextPaths || (this.pendingTextPaths = [])).push({
      transform: Ht(o),
      x: s,
      y: i,
      fontSize: u,
      path: E
    }), (f = this.dependencyTracker) == null || f.recordCharacterBBox(t, o, h, u, s, i));
  }
  get isFontSubpixelAAEnabled() {
    const {
      context: t
    } = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10);
    t.scale(1.5, 1), t.fillText("I", 0, 10);
    const e = t.getImageData(0, 0, 10, 10).data;
    let s = !1;
    for (let i = 3; i < e.length; i += 4)
      if (e[i] > 0 && e[i] < 255) {
        s = !0;
        break;
      }
    return et(this, "isFontSubpixelAAEnabled", s);
  }
  showText(t, e) {
    var P, R, L, D;
    this.dependencyTracker && (this.dependencyTracker.recordDependencies(t, Ts.showText).resetBBox(t), this.current.textRenderingMode & me.ADD_TO_PATH_FLAG && this.dependencyTracker.recordFutureForcedDependency("textClip", t).inheritPendingDependenciesAsFutureForcedDependencies());
    const s = this.current, i = s.font;
    if (i.isType3Font) {
      this.showType3Text(t, e), (P = this.dependencyTracker) == null || P.recordShowTextOperation(t);
      return;
    }
    const r = s.fontSize;
    if (r === 0) {
      (R = this.dependencyTracker) == null || R.recordOperation(t);
      return;
    }
    const a = this.ctx, o = s.fontSizeScale, l = s.charSpacing, h = s.wordSpacing, d = s.fontDirection, u = s.textHScale * d, p = e.length, b = i.vertical, S = b ? 1 : -1, v = i.defaultVMetrics, E = r * s.fontMatrix[0], x = s.textRenderingMode === me.FILL && !i.disableFontFace && !s.patternFill;
    a.save(), s.textMatrix && a.transform(...s.textMatrix), a.translate(s.x, s.y + s.textRise), d > 0 ? a.scale(u, -1) : a.scale(u, 1);
    let T, _;
    if (s.patternFill) {
      a.save();
      const F = s.fillColor.getPattern(a, this, li(a), Se.FILL, t);
      T = Ht(a), a.restore(), a.fillStyle = F;
    }
    if (s.patternStroke) {
      a.save();
      const F = s.strokeColor.getPattern(a, this, li(a), Se.STROKE, t);
      _ = Ht(a), a.restore(), a.strokeStyle = F;
    }
    let f = s.lineWidth;
    const m = s.textMatrixScale;
    if (m === 0 || f === 0) {
      const F = s.textRenderingMode & me.FILL_STROKE_MASK;
      (F === me.STROKE || F === me.FILL_STROKE) && (f = this.getSinglePixelWidth());
    } else
      f /= m;
    if (o !== 1 && (a.scale(o, o), f /= o), a.lineWidth = f, i.isInvalidPDFjsFont) {
      const F = [];
      let U = 0;
      for (const X of e)
        F.push(X.unicode), U += X.width;
      const O = F.join("");
      if (a.fillText(O, 0, 0), this.dependencyTracker !== null) {
        const X = a.measureText(O);
        this.dependencyTracker.recordBBox(t, this.ctx, -X.actualBoundingBoxLeft, X.actualBoundingBoxRight, -X.actualBoundingBoxAscent, X.actualBoundingBoxDescent).recordShowTextOperation(t);
      }
      s.x += U * E * u, a.restore(), this.compose();
      return;
    }
    let A = 0, C;
    for (C = 0; C < p; ++C) {
      const F = e[C];
      if (typeof F == "number") {
        A += S * F * r / 1e3;
        continue;
      }
      let U = !1;
      const O = (F.isSpace ? h : 0) + l, X = F.fontChar, k = F.accent;
      let I, B, q = F.width;
      if (b) {
        const H = F.vmetric || v, K = -(F.vmetric ? H[1] : q * 0.5) * E, rt = H[2] * E;
        q = H ? -H[0] : q, I = K / o, B = (A + rt) / o;
      } else
        I = A / o, B = 0;
      let ot;
      if (i.remeasure && q > 0) {
        ot = a.measureText(X);
        const H = ot.width * 1e3 / r * o;
        if (q < H && this.isFontSubpixelAAEnabled) {
          const K = q / H;
          U = !0, a.save(), a.scale(K, 1), I /= K;
        } else q !== H && (I += (q - H) / 2e3 * r / o);
      }
      if (this.contentVisible && (F.isInFont || i.missingFile)) {
        if (x && !k)
          a.fillText(X, I, B), (L = this.dependencyTracker) == null || L.recordCharacterBBox(t, a, ot ? {
            bbox: null
          } : i, r / o, I, B, () => ot ?? a.measureText(X));
        else if (this.paintChar(t, X, I, B, T, _), k) {
          const H = I + r * k.offset.x / o, K = B - r * k.offset.y / o;
          this.paintChar(t, k.fontChar, H, K, T, _);
        }
      }
      const Pt = b ? q * E - O * d : q * E + O * d;
      A += Pt, U && a.restore();
    }
    b ? s.y -= A : s.x += A * u, a.restore(), this.compose(), (D = this.dependencyTracker) == null || D.recordShowTextOperation(t);
  }
  showType3Text(t, e) {
    const s = this.ctx, i = this.current, r = i.font, a = i.fontSize, o = i.fontDirection, l = r.vertical ? 1 : -1, h = i.charSpacing, d = i.wordSpacing, u = i.textHScale * o, p = i.fontMatrix || gf, b = e.length, S = i.textRenderingMode === me.INVISIBLE;
    let v, E, x, T;
    if (S || a === 0)
      return;
    this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null, s.save(), i.textMatrix && s.transform(...i.textMatrix), s.translate(i.x, i.y + i.textRise), s.scale(u, o);
    const _ = this.dependencyTracker;
    for (this.dependencyTracker = _ ? new mu(_, t) : null, v = 0; v < b; ++v) {
      if (E = e[v], typeof E == "number") {
        T = l * E * a / 1e3, this.ctx.translate(T, 0), i.x += T * u;
        continue;
      }
      const f = (E.isSpace ? d : 0) + h, m = r.charProcOperatorList[E.operatorListId];
      m ? this.contentVisible && (this.save(), s.scale(a, a), s.transform(...p), this.executeOperatorList(m), this.restore()) : J(`Type3 character "${E.operatorListId}" is not available.`);
      const A = [E.width, 0];
      W.applyTransform(A, p), x = A[0] * a + f, s.translate(x, 0), i.x += x * u;
    }
    s.restore(), _ && (this.dependencyTracker = _);
  }
  setCharWidth(t, e, s) {
  }
  setCharWidthAndBounds(t, e, s, i, r, a, o) {
    var h;
    const l = new Path2D();
    l.rect(i, r, a - i, o - r), this.ctx.clip(l), (h = this.dependencyTracker) == null || h.recordBBox(t, this.ctx, i, a, r, o).recordClipBox(t, this.ctx, i, a, r, o), this.endPath(t);
  }
  getColorN_Pattern(t, e) {
    let s;
    if (e[0] === "TilingPattern") {
      const i = this.baseTransform || Ht(this.ctx), r = {
        createCanvasGraphics: (a, o) => new lg(a, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
          optionalContentConfig: this.optionalContentConfig,
          markedContentStack: this.markedContentStack
        }, void 0, void 0, this.dependencyTracker ? new mu(this.dependencyTracker, o, !0) : null)
      };
      s = new Gf(e, this.ctx, r, i);
    } else
      s = this._getPattern(t, e[1], e[2]);
    return s;
  }
  setStrokeColorN(t, ...e) {
    var s;
    (s = this.dependencyTracker) == null || s.recordSimpleData("strokeColor", t), this.current.strokeColor = this.getColorN_Pattern(t, e), this.current.patternStroke = !0;
  }
  setFillColorN(t, ...e) {
    var s;
    (s = this.dependencyTracker) == null || s.recordSimpleData("fillColor", t), this.current.fillColor = this.getColorN_Pattern(t, e), this.current.patternFill = !0;
  }
  setStrokeRGBColor(t, e) {
    var s;
    (s = this.dependencyTracker) == null || s.recordSimpleData("strokeColor", t), this.ctx.strokeStyle = this.current.strokeColor = e, this.current.patternStroke = !1;
  }
  setStrokeTransparent(t) {
    var e;
    (e = this.dependencyTracker) == null || e.recordSimpleData("strokeColor", t), this.ctx.strokeStyle = this.current.strokeColor = "transparent", this.current.patternStroke = !1;
  }
  setFillRGBColor(t, e) {
    var s;
    (s = this.dependencyTracker) == null || s.recordSimpleData("fillColor", t), this.ctx.fillStyle = this.current.fillColor = e, this.current.patternFill = !1;
  }
  setFillTransparent(t) {
    var e;
    (e = this.dependencyTracker) == null || e.recordSimpleData("fillColor", t), this.ctx.fillStyle = this.current.fillColor = "transparent", this.current.patternFill = !1;
  }
  _getPattern(t, e, s = null) {
    let i;
    return this.cachedPatterns.has(e) ? i = this.cachedPatterns.get(e) : (i = iw(this.getObject(t, e)), this.cachedPatterns.set(e, i)), s && (i.matrix = s), i;
  }
  shadingFill(t, e) {
    var a;
    if (!this.contentVisible)
      return;
    const s = this.ctx;
    this.save(t);
    const i = this._getPattern(t, e);
    s.fillStyle = i.getPattern(s, this, li(s), Se.SHADING, t);
    const r = li(s);
    if (r) {
      const {
        width: o,
        height: l
      } = s.canvas, h = fo.slice();
      W.axialAlignedBoundingBox([0, 0, o, l], r, h);
      const [d, u, p, b] = h;
      this.ctx.fillRect(d, u, p - d, b - u);
    } else
      this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
    (a = this.dependencyTracker) == null || a.resetBBox(t).recordFullPageBBox(t).recordDependencies(t, Ts.transform).recordDependencies(t, Ts.fill).recordOperation(t), this.compose(this.current.getClippedPathBoundingBox()), this.restore(t);
  }
  beginInlineImage() {
    Tt("Should not call beginInlineImage");
  }
  beginImageData() {
    Tt("Should not call beginImageData");
  }
  paintFormXObjectBegin(t, e, s) {
    var i;
    if (this.contentVisible && (this.save(t), this.baseTransformStack.push(this.baseTransform), e && this.transform(t, ...e), this.baseTransform = Ht(this.ctx), s)) {
      W.axialAlignedBoundingBox(s, this.baseTransform, this.current.minMax);
      const [r, a, o, l] = s, h = new Path2D();
      h.rect(r, a, o - r, l - a), this.ctx.clip(h), (i = this.dependencyTracker) == null || i.recordClipBox(t, this.ctx, r, o, a, l), this.endPath(t);
    }
  }
  paintFormXObjectEnd(t) {
    this.contentVisible && (this.restore(t), this.baseTransform = this.baseTransformStack.pop());
  }
  beginGroup(t, e) {
    var _;
    if (!this.contentVisible)
      return;
    this.save(t), this.inSMaskMode && (this.endSMaskMode(), this.current.activeSMask = null);
    const s = this.ctx;
    e.isolated || ju("TODO: Support non-isolated groups."), e.knockout && J("Knockout groups not supported.");
    const i = Ht(s);
    if (e.matrix && s.transform(...e.matrix), !e.bbox)
      throw new Error("Bounding box is required.");
    let r = fo.slice();
    W.axialAlignedBoundingBox(e.bbox, Ht(s), r);
    const a = [0, 0, s.canvas.width, s.canvas.height];
    r = W.intersect(r, a) || [0, 0, 0, 0];
    const o = Math.floor(r[0]), l = Math.floor(r[1]), h = Math.max(Math.ceil(r[2]) - o, 1), d = Math.max(Math.ceil(r[3]) - l, 1);
    this.current.startNewPathAndClipBox([0, 0, h, d]);
    let u = "groupAt" + this.groupLevel;
    e.smask && (u += "_smask_" + this.smaskCounter++ % 2);
    const p = this.cachedCanvases.getCanvas(u, h, d), b = p.context;
    b.translate(-o, -l), b.transform(...i);
    let S = new Path2D();
    const [v, E, x, T] = e.bbox;
    if (S.rect(v, E, x - v, T - E), e.matrix) {
      const f = new Path2D();
      f.addPath(S, new DOMMatrix(e.matrix)), S = f;
    }
    b.clip(S), e.smask && this.smaskStack.push({
      canvas: p.canvas,
      context: b,
      offsetX: o,
      offsetY: l,
      subtype: e.smask.subtype,
      backdrop: e.smask.backdrop,
      transferMap: e.smask.transferMap || null,
      startTransformInverse: null
    }), (!e.smask || this.dependencyTracker) && (s.setTransform(1, 0, 0, 1, 0, 0), s.translate(o, l), s.save()), Jl(s, b), this.ctx = b, (_ = this.dependencyTracker) == null || _.inheritSimpleDataAsFutureForcedDependencies(["fillAlpha", "strokeAlpha", "globalCompositeOperation"]).pushBaseTransform(s), this.setGState(t, [["BM", "source-over"], ["ca", 1], ["CA", 1]]), this.groupStack.push(s), this.groupLevel++;
  }
  endGroup(t, e) {
    var r;
    if (!this.contentVisible)
      return;
    this.groupLevel--;
    const s = this.ctx, i = this.groupStack.pop();
    if (this.ctx = i, this.ctx.imageSmoothingEnabled = !1, (r = this.dependencyTracker) == null || r.popBaseTransform(), e.smask)
      this.tempSMask = this.smaskStack.pop(), this.restore(t), this.dependencyTracker && this.ctx.restore();
    else {
      this.ctx.restore();
      const a = Ht(this.ctx);
      this.restore(t), this.ctx.save(), this.ctx.setTransform(...a);
      const o = fo.slice();
      W.axialAlignedBoundingBox([0, 0, s.canvas.width, s.canvas.height], a, o), this.ctx.drawImage(s.canvas, 0, 0), this.ctx.restore(), this.compose(o);
    }
  }
  beginAnnotation(t, e, s, i, r, a) {
    if (w(this, ai, Wf).call(this), Dd(this.ctx), this.ctx.save(), this.save(t), this.baseTransform && this.ctx.setTransform(...this.baseTransform), s) {
      const o = s[2] - s[0], l = s[3] - s[1];
      if (a && this.annotationCanvasMap) {
        i = i.slice(), i[4] -= s[0], i[5] -= s[1], s = s.slice(), s[0] = s[1] = 0, s[2] = o, s[3] = l, W.singularValueDecompose2dScale(Ht(this.ctx), Ss);
        const {
          viewportScale: h
        } = this, d = Math.ceil(o * this.outputScaleX * h), u = Math.ceil(l * this.outputScaleY * h);
        this.annotationCanvas = this.canvasFactory.create(d, u);
        const {
          canvas: p,
          context: b
        } = this.annotationCanvas;
        this.annotationCanvasMap.set(e, p), this.annotationCanvas.savedCtx = this.ctx, this.ctx = b, this.ctx.save(), this.ctx.setTransform(Ss[0], 0, 0, -Ss[1], 0, l * Ss[1]), Dd(this.ctx);
      } else {
        Dd(this.ctx), this.endPath(t);
        const h = new Path2D();
        h.rect(s[0], s[1], o, l), this.ctx.clip(h);
      }
    }
    this.current = new Dg(this.ctx.canvas.width, this.ctx.canvas.height), this.transform(t, ...i), this.transform(t, ...r);
  }
  endAnnotation(t) {
    this.annotationCanvas && (this.ctx.restore(), w(this, ai, jf).call(this), this.ctx = this.annotationCanvas.savedCtx, delete this.annotationCanvas.savedCtx, delete this.annotationCanvas);
  }
  paintImageMaskXObject(t, e) {
    var o;
    if (!this.contentVisible)
      return;
    const s = e.count;
    e = this.getObject(t, e.data, e), e.count = s;
    const i = this.ctx, r = this._createMaskCanvas(t, e), a = r.canvas;
    i.save(), i.setTransform(1, 0, 0, 1, 0, 0), i.drawImage(a, r.offsetX, r.offsetY), (o = this.dependencyTracker) == null || o.resetBBox(t).recordBBox(t, this.ctx, r.offsetX, r.offsetX + a.width, r.offsetY, r.offsetY + a.height).recordOperation(t), i.restore(), this.compose();
  }
  paintImageMaskXObjectRepeat(t, e, s, i = 0, r = 0, a, o) {
    var u, p, b;
    if (!this.contentVisible)
      return;
    e = this.getObject(t, e.data, e);
    const l = this.ctx;
    l.save();
    const h = Ht(l);
    l.transform(s, i, r, a, 0, 0);
    const d = this._createMaskCanvas(t, e);
    l.setTransform(1, 0, 0, 1, d.offsetX - h[4], d.offsetY - h[5]), (u = this.dependencyTracker) == null || u.resetBBox(t);
    for (let S = 0, v = o.length; S < v; S += 2) {
      const E = W.transform(h, [s, i, r, a, o[S], o[S + 1]]);
      l.drawImage(d.canvas, E[4], E[5]), (p = this.dependencyTracker) == null || p.recordBBox(t, this.ctx, E[4], E[4] + d.canvas.width, E[5], E[5] + d.canvas.height);
    }
    l.restore(), this.compose(), (b = this.dependencyTracker) == null || b.recordOperation(t);
  }
  paintImageMaskXObjectGroup(t, e) {
    var a, o, l;
    if (!this.contentVisible)
      return;
    const s = this.ctx, i = this.current.fillColor, r = this.current.patternFill;
    (a = this.dependencyTracker) == null || a.resetBBox(t).recordDependencies(t, Ts.transformAndFill);
    for (const h of e) {
      const {
        data: d,
        width: u,
        height: p,
        transform: b
      } = h, S = this.cachedCanvases.getCanvas("maskCanvas", u, p), v = S.context;
      v.save();
      const E = this.getObject(t, d, h);
      Ig(v, E), v.globalCompositeOperation = "source-in", v.fillStyle = r ? i.getPattern(v, this, li(s), Se.FILL, t) : i, v.fillRect(0, 0, u, p), v.restore(), s.save(), s.transform(...b), s.scale(1, -1), Ld(s, S.canvas, 0, 0, u, p, 0, -1, 1, 1), (o = this.dependencyTracker) == null || o.recordBBox(t, s, 0, u, 0, p), s.restore();
    }
    this.compose(), (l = this.dependencyTracker) == null || l.recordOperation(t);
  }
  paintImageXObject(t, e) {
    if (!this.contentVisible)
      return;
    const s = this.getObject(t, e);
    if (!s) {
      J("Dependent image isn't ready yet");
      return;
    }
    this.paintInlineImageXObject(t, s);
  }
  paintImageXObjectRepeat(t, e, s, i, r) {
    if (!this.contentVisible)
      return;
    const a = this.getObject(t, e);
    if (!a) {
      J("Dependent image isn't ready yet");
      return;
    }
    const o = a.width, l = a.height, h = [];
    for (let d = 0, u = r.length; d < u; d += 2)
      h.push({
        transform: [s, 0, 0, i, r[d], r[d + 1]],
        x: 0,
        y: 0,
        w: o,
        h: l
      });
    this.paintInlineImageXObjectGroup(t, a, h);
  }
  applyTransferMapsToCanvas(t) {
    return this.current.transferMaps !== "none" && (t.filter = this.current.transferMaps, t.drawImage(t.canvas, 0, 0), t.filter = "none"), t.canvas;
  }
  applyTransferMapsToBitmap(t) {
    if (this.current.transferMaps === "none")
      return t.bitmap;
    const {
      bitmap: e,
      width: s,
      height: i
    } = t, r = this.cachedCanvases.getCanvas("inlineImage", s, i), a = r.context;
    return a.filter = this.current.transferMaps, a.drawImage(e, 0, 0), a.filter = "none", r.canvas;
  }
  paintInlineImageXObject(t, e) {
    var h;
    if (!this.contentVisible)
      return;
    const s = e.width, i = e.height, r = this.ctx;
    this.save(t);
    const {
      filter: a
    } = r;
    a !== "none" && a !== "" && (r.filter = "none"), r.scale(1 / s, -1 / i);
    let o;
    if (e.bitmap)
      o = this.applyTransferMapsToBitmap(e);
    else if (typeof HTMLElement == "function" && e instanceof HTMLElement || !e.data)
      o = e;
    else {
      const u = this.cachedCanvases.getCanvas("inlineImage", s, i).context;
      Mg(u, e), o = this.applyTransferMapsToCanvas(u);
    }
    const l = this._scaleImage(o, li(r));
    r.imageSmoothingEnabled = Fg(Ht(r), e.interpolate), (h = this.dependencyTracker) == null || h.resetBBox(t).recordBBox(t, r, 0, s, -i, 0).recordDependencies(t, Ts.imageXObject).recordOperation(t), Ld(r, l.img, 0, 0, l.paintWidth, l.paintHeight, 0, -i, s, i), this.compose(), this.restore(t);
  }
  paintInlineImageXObjectGroup(t, e, s) {
    var a, o, l;
    if (!this.contentVisible)
      return;
    const i = this.ctx;
    let r;
    if (e.bitmap)
      r = e.bitmap;
    else {
      const h = e.width, d = e.height, p = this.cachedCanvases.getCanvas("inlineImage", h, d).context;
      Mg(p, e), r = this.applyTransferMapsToCanvas(p);
    }
    (a = this.dependencyTracker) == null || a.resetBBox(t);
    for (const h of s)
      i.save(), i.transform(...h.transform), i.scale(1, -1), Ld(i, r, h.x, h.y, h.w, h.h, 0, -1, 1, 1), (o = this.dependencyTracker) == null || o.recordBBox(t, i, 0, 1, -1, 0), i.restore();
    (l = this.dependencyTracker) == null || l.recordOperation(t), this.compose();
  }
  paintSolidColorImageMask(t) {
    var e;
    this.contentVisible && ((e = this.dependencyTracker) == null || e.resetBBox(t).recordBBox(t, this.ctx, 0, 1, 0, 1).recordDependencies(t, Ts.fill).recordOperation(t), this.ctx.fillRect(0, 0, 1, 1), this.compose());
  }
  markPoint(t, e) {
  }
  markPointProps(t, e, s) {
  }
  beginMarkedContent(t, e) {
    var s;
    (s = this.dependencyTracker) == null || s.beginMarkedContent(t), this.markedContentStack.push({
      visible: !0
    });
  }
  beginMarkedContentProps(t, e, s) {
    var i;
    (i = this.dependencyTracker) == null || i.beginMarkedContent(t), e === "OC" ? this.markedContentStack.push({
      visible: this.optionalContentConfig.isVisible(s)
    }) : this.markedContentStack.push({
      visible: !0
    }), this.contentVisible = this.isContentVisible();
  }
  endMarkedContent(t) {
    var e;
    (e = this.dependencyTracker) == null || e.endMarkedContent(t), this.markedContentStack.pop(), this.contentVisible = this.isContentVisible();
  }
  beginCompat(t) {
  }
  endCompat(t) {
  }
  consumePath(t, e, s) {
    var a, o;
    const i = this.current.isEmptyClip();
    this.pendingClip && this.current.updateClipFromPath(), this.pendingClip || this.compose(s);
    const r = this.ctx;
    this.pendingClip ? (i || (this.pendingClip === Ng ? r.clip(e, "evenodd") : r.clip(e)), this.pendingClip = null, (a = this.dependencyTracker) == null || a.bboxToClipBoxDropOperation(t).recordFutureForcedDependency("clipPath", t)) : (o = this.dependencyTracker) == null || o.recordOperation(t), this.current.startNewPathAndClipBox(this.current.clipBox);
  }
  getSinglePixelWidth() {
    if (!this._cachedGetSinglePixelWidth) {
      const t = Ht(this.ctx);
      if (t[1] === 0 && t[2] === 0)
        this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(t[0]), Math.abs(t[3]));
      else {
        const e = Math.abs(t[0] * t[3] - t[2] * t[1]), s = Math.hypot(t[0], t[2]), i = Math.hypot(t[1], t[3]);
        this._cachedGetSinglePixelWidth = Math.max(s, i) / e;
      }
    }
    return this._cachedGetSinglePixelWidth;
  }
  getScaleForStroking() {
    if (this._cachedScaleForStroking[0] === -1) {
      const {
        lineWidth: t
      } = this.current, {
        a: e,
        b: s,
        c: i,
        d: r
      } = this.ctx.getTransform();
      let a, o;
      if (s === 0 && i === 0) {
        const l = Math.abs(e), h = Math.abs(r);
        if (l === h)
          if (t === 0)
            a = o = 1 / l;
          else {
            const d = l * t;
            a = o = d < 1 ? 1 / d : 1;
          }
        else if (t === 0)
          a = 1 / l, o = 1 / h;
        else {
          const d = l * t, u = h * t;
          a = d < 1 ? 1 / d : 1, o = u < 1 ? 1 / u : 1;
        }
      } else {
        const l = Math.abs(e * r - s * i), h = Math.hypot(e, s), d = Math.hypot(i, r);
        if (t === 0)
          a = d / l, o = h / l;
        else {
          const u = t * l;
          a = d > u ? d / u : 1, o = h > u ? h / u : 1;
        }
      }
      this._cachedScaleForStroking[0] = a, this._cachedScaleForStroking[1] = o;
    }
    return this._cachedScaleForStroking;
  }
  rescaleAndStroke(t, e) {
    const {
      ctx: s,
      current: {
        lineWidth: i
      }
    } = this, [r, a] = this.getScaleForStroking();
    if (r === a) {
      s.lineWidth = (i || 1) * r, s.stroke(t);
      return;
    }
    const o = s.getLineDash();
    e && s.save(), s.scale(r, a), lf.a = 1 / r, lf.d = 1 / a;
    const l = new Path2D();
    if (l.addPath(t, lf), o.length > 0) {
      const h = Math.max(r, a);
      s.setLineDash(o.map((d) => d / h)), s.lineDashOffset /= h;
    }
    s.lineWidth = i || 1, s.stroke(l), e && s.restore();
  }
  isContentVisible() {
    for (let t = this.markedContentStack.length - 1; t >= 0; t--)
      if (!this.markedContentStack[t].visible)
        return !1;
    return !0;
  }
};
ai = new WeakSet(), Wf = function() {
  for (; this.stateStack.length || this.inSMaskMode; )
    this.restore();
  this.current.activeSMask = null, this.ctx.restore(), this.transparentCanvas && (this.ctx = this.compositeCtx, this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.drawImage(this.transparentCanvas, 0, 0), this.ctx.restore(), this.transparentCanvas = null);
}, jf = function() {
  if (this.pageColors) {
    const t = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
    if (t !== "none") {
      const e = this.ctx.filter;
      this.ctx.filter = t, this.ctx.drawImage(this.ctx.canvas, 0, 0), this.ctx.filter = e;
    }
  }
}, Vf = function(t, e, s) {
  const i = new Path2D();
  return i.addPath(t, new DOMMatrix(s).invertSelf().multiplySelf(e)), i;
};
let yo = lg;
for (const c in ql)
  yo.prototype[c] !== void 0 && (yo.prototype[ql[c]] = yo.prototype[c]);
var Xo, Yo, dc, Ko, Gd;
const go = class go {
  constructor(t) {
    y(this, Ko);
    y(this, Xo);
    y(this, Yo);
    y(this, dc);
    g(this, Xo, t), g(this, Yo, new DataView(n(this, Xo))), g(this, dc, new TextDecoder());
  }
  static write(t) {
    const e = new TextEncoder(), s = {};
    let i = 0;
    for (const h of go.strings) {
      const d = e.encode(t[h]);
      s[h] = d, i += 4 + d.length;
    }
    const r = new ArrayBuffer(i), a = new Uint8Array(r), o = new DataView(r);
    let l = 0;
    for (const h of go.strings) {
      const d = s[h], u = d.length;
      o.setUint32(l, u), a.set(d, l + 4), l += 4 + u;
    }
    return lt(l === r.byteLength, "CssFontInfo.write: Buffer overflow"), r;
  }
  get fontFamily() {
    return w(this, Ko, Gd).call(this, 0);
  }
  get fontWeight() {
    return w(this, Ko, Gd).call(this, 1);
  }
  get italicAngle() {
    return w(this, Ko, Gd).call(this, 2);
  }
};
Xo = new WeakMap(), Yo = new WeakMap(), dc = new WeakMap(), Ko = new WeakSet(), Gd = function(t) {
  lt(t < go.strings.length, "Invalid string index");
  let e = 0;
  for (let i = 0; i < t; i++)
    e += n(this, Yo).getUint32(e) + 4;
  const s = n(this, Yo).getUint32(e);
  return n(this, dc).decode(new Uint8Array(n(this, Xo), e + 4, s));
}, N(go, "strings", ["fontFamily", "fontWeight", "italicAngle"]);
let bu = go;
var tr, Si, ua, fa, ph;
const mo = class mo {
  constructor(t) {
    y(this, fa);
    y(this, tr);
    y(this, Si);
    y(this, ua);
    g(this, tr, t), g(this, Si, new DataView(n(this, tr))), g(this, ua, new TextDecoder());
  }
  static write(t) {
    const e = new TextEncoder(), s = {};
    let i = 0;
    for (const p of mo.strings) {
      const b = e.encode(t[p]);
      s[p] = b, i += 4 + b.length;
    }
    i += 4;
    let r, a, o = 1 + i;
    t.style && (r = e.encode(t.style.style), a = e.encode(t.style.weight), o += 4 + r.length + 4 + a.length);
    const l = new ArrayBuffer(o), h = new Uint8Array(l), d = new DataView(l);
    let u = 0;
    d.setUint8(u++, t.guessFallback ? 1 : 0), d.setUint32(u, 0), u += 4, i = 0;
    for (const p of mo.strings) {
      const b = s[p], S = b.length;
      i += 4 + S, d.setUint32(u, S), h.set(b, u + 4), u += 4 + S;
    }
    return d.setUint32(u - i - 4, i), t.style && (d.setUint32(u, r.length), h.set(r, u + 4), u += 4 + r.length, d.setUint32(u, a.length), h.set(a, u + 4), u += 4 + a.length), lt(u <= l.byteLength, "SubstitionInfo.write: Buffer overflow"), l.transferToFixedLength(u);
  }
  get guessFallback() {
    return n(this, Si).getUint8(0) !== 0;
  }
  get css() {
    return w(this, fa, ph).call(this, 0);
  }
  get loadedName() {
    return w(this, fa, ph).call(this, 1);
  }
  get baseFontName() {
    return w(this, fa, ph).call(this, 2);
  }
  get src() {
    return w(this, fa, ph).call(this, 3);
  }
  get style() {
    let t = 1;
    t += 4 + n(this, Si).getUint32(t);
    const e = n(this, Si).getUint32(t), s = n(this, ua).decode(new Uint8Array(n(this, tr), t + 4, e));
    t += 4 + e;
    const i = n(this, Si).getUint32(t), r = n(this, ua).decode(new Uint8Array(n(this, tr), t + 4, i));
    return {
      style: s,
      weight: r
    };
  }
};
tr = new WeakMap(), Si = new WeakMap(), ua = new WeakMap(), fa = new WeakSet(), ph = function(t) {
  lt(t < mo.strings.length, "Invalid string index");
  let e = 5;
  for (let i = 0; i < t; i++)
    e += n(this, Si).getUint32(e) + 4;
  const s = n(this, Si).getUint32(e);
  return n(this, ua).decode(new Uint8Array(n(this, tr), e + 4, s));
}, N(mo, "strings", ["css", "loadedName", "baseFontName", "src"]);
let yu = mo;
var Zo, Jo, Qo, tl, os, xi, uc, At, qt, zs, Wd, gh;
const tt = class tt {
  constructor({
    data: t,
    extra: e
  }) {
    y(this, qt);
    y(this, xi);
    y(this, uc);
    y(this, At);
    g(this, xi, t), g(this, uc, new TextDecoder()), g(this, At, new DataView(n(this, xi))), e && Object.assign(this, e);
  }
  get black() {
    return w(this, qt, zs).call(this, 0);
  }
  get bold() {
    return w(this, qt, zs).call(this, 1);
  }
  get disableFontFace() {
    return w(this, qt, zs).call(this, 2);
  }
  get fontExtraProperties() {
    return w(this, qt, zs).call(this, 3);
  }
  get isInvalidPDFjsFont() {
    return w(this, qt, zs).call(this, 4);
  }
  get isType3Font() {
    return w(this, qt, zs).call(this, 5);
  }
  get italic() {
    return w(this, qt, zs).call(this, 6);
  }
  get missingFile() {
    return w(this, qt, zs).call(this, 7);
  }
  get remeasure() {
    return w(this, qt, zs).call(this, 8);
  }
  get vertical() {
    return w(this, qt, zs).call(this, 9);
  }
  get ascent() {
    return w(this, qt, Wd).call(this, 0);
  }
  get defaultWidth() {
    return w(this, qt, Wd).call(this, 1);
  }
  get descent() {
    return w(this, qt, Wd).call(this, 2);
  }
  get bbox() {
    let t = n(tt, Jo);
    if (n(this, At).getUint8(t) === 0)
      return;
    t += 1;
    const s = [];
    for (let i = 0; i < 4; i++)
      s.push(n(this, At).getInt16(t, !0)), t += 2;
    return s;
  }
  get fontMatrix() {
    let t = n(tt, Qo);
    if (n(this, At).getUint8(t) === 0)
      return;
    t += 1;
    const s = [];
    for (let i = 0; i < 6; i++)
      s.push(n(this, At).getFloat64(t, !0)), t += 8;
    return s;
  }
  get defaultVMetrics() {
    let t = n(tt, tl);
    if (n(this, At).getUint8(t) === 0)
      return;
    t += 1;
    const s = [];
    for (let i = 0; i < 3; i++)
      s.push(n(this, At).getInt16(t, !0)), t += 2;
    return s;
  }
  get fallbackName() {
    return w(this, qt, gh).call(this, 0);
  }
  get loadedName() {
    return w(this, qt, gh).call(this, 1);
  }
  get mimetype() {
    return w(this, qt, gh).call(this, 2);
  }
  get name() {
    return w(this, qt, gh).call(this, 3);
  }
  get data() {
    let t = n(tt, os);
    const e = n(this, At).getUint32(t);
    t += 4 + e;
    const s = n(this, At).getUint32(t);
    t += 4 + s;
    const i = n(this, At).getUint32(t);
    t += 4 + i;
    const r = n(this, At).getUint32(t);
    if (r !== 0)
      return new Uint8Array(n(this, xi), t + 4, r);
  }
  clearData() {
    let t = n(tt, os);
    const e = n(this, At).getUint32(t);
    t += 4 + e;
    const s = n(this, At).getUint32(t);
    t += 4 + s;
    const i = n(this, At).getUint32(t);
    t += 4 + i;
    const r = n(this, At).getUint32(t);
    new Uint8Array(n(this, xi), t + 4, r).fill(0), n(this, At).setUint32(t, 0);
  }
  get cssFontInfo() {
    let t = n(tt, os);
    const e = n(this, At).getUint32(t);
    t += 4 + e;
    const s = n(this, At).getUint32(t);
    t += 4 + s;
    const i = n(this, At).getUint32(t);
    if (i === 0)
      return null;
    const r = new Uint8Array(i);
    return r.set(new Uint8Array(n(this, xi), t + 4, i)), new bu(r.buffer);
  }
  get systemFontInfo() {
    let t = n(tt, os);
    const e = n(this, At).getUint32(t);
    t += 4 + e;
    const s = n(this, At).getUint32(t);
    if (s === 0)
      return null;
    const i = new Uint8Array(s);
    return i.set(new Uint8Array(n(this, xi), t + 4, s)), new yu(i.buffer);
  }
  static write(t) {
    const e = t.systemFontInfo ? yu.write(t.systemFontInfo) : null, s = t.cssFontInfo ? bu.write(t.cssFontInfo) : null, i = new TextEncoder(), r = {};
    let a = 0;
    for (const v of tt.strings)
      r[v] = i.encode(t[v]), a += 4 + r[v].length;
    const o = n(tt, os) + 4 + a + 4 + (e ? e.byteLength : 0) + 4 + (s ? s.byteLength : 0) + 4 + (t.data ? t.data.length : 0), l = new ArrayBuffer(o), h = new Uint8Array(l), d = new DataView(l);
    let u = 0;
    const p = tt.bools.length;
    let b = 0, S = 0;
    for (let v = 0; v < p; v++) {
      const E = t[tt.bools[v]];
      b |= (E === void 0 ? 0 : E ? 2 : 1) << S, S += 2, (S === 8 || v === p - 1) && (d.setUint8(u++, b), b = 0, S = 0);
    }
    lt(u === n(tt, Zo), "FontInfo.write: Boolean properties offset mismatch");
    for (const v of tt.numbers)
      d.setFloat64(u, t[v]), u += 8;
    if (lt(u === n(tt, Jo), "FontInfo.write: Number properties offset mismatch"), t.bbox) {
      d.setUint8(u++, 4);
      for (const v of t.bbox)
        d.setInt16(u, v, !0), u += 2;
    } else
      d.setUint8(u++, 0), u += 8;
    if (lt(u === n(tt, Qo), "FontInfo.write: BBox properties offset mismatch"), t.fontMatrix) {
      d.setUint8(u++, 6);
      for (const v of t.fontMatrix)
        d.setFloat64(u, v, !0), u += 8;
    } else
      d.setUint8(u++, 0), u += 48;
    if (lt(u === n(tt, tl), "FontInfo.write: FontMatrix properties offset mismatch"), t.defaultVMetrics) {
      d.setUint8(u++, 1);
      for (const v of t.defaultVMetrics)
        d.setInt16(u, v, !0), u += 2;
    } else
      d.setUint8(u++, 0), u += 6;
    lt(u === n(tt, os), "FontInfo.write: DefaultVMetrics properties offset mismatch"), d.setUint32(n(tt, os), 0), u += 4;
    for (const v of tt.strings) {
      const E = r[v], x = E.length;
      d.setUint32(u, x), h.set(E, u + 4), u += 4 + x;
    }
    if (d.setUint32(n(tt, os), u - n(tt, os) - 4), !e)
      d.setUint32(u, 0), u += 4;
    else {
      const v = e.byteLength;
      d.setUint32(u, v), lt(u + 4 + v <= l.byteLength, "FontInfo.write: Buffer overflow at systemFontInfo"), h.set(new Uint8Array(e), u + 4), u += 4 + v;
    }
    if (!s)
      d.setUint32(u, 0), u += 4;
    else {
      const v = s.byteLength;
      d.setUint32(u, v), lt(u + 4 + v <= l.byteLength, "FontInfo.write: Buffer overflow at cssFontInfo"), h.set(new Uint8Array(s), u + 4), u += 4 + v;
    }
    return t.data === void 0 ? (d.setUint32(u, 0), u += 4) : (d.setUint32(u, t.data.length), h.set(t.data, u + 4), u += 4 + t.data.length), lt(u <= l.byteLength, "FontInfo.write: Buffer overflow"), l.transferToFixedLength(u);
  }
};
Zo = new WeakMap(), Jo = new WeakMap(), Qo = new WeakMap(), tl = new WeakMap(), os = new WeakMap(), xi = new WeakMap(), uc = new WeakMap(), At = new WeakMap(), qt = new WeakSet(), zs = function(t) {
  lt(t < tt.bools.length, "Invalid boolean index");
  const e = Math.floor(t / 4), s = t * 2 % 8, i = n(this, At).getUint8(e) >> s & 3;
  return i === 0 ? void 0 : i === 2;
}, Wd = function(t) {
  return lt(t < tt.numbers.length, "Invalid number index"), n(this, At).getFloat64(n(tt, Zo) + t * 8);
}, gh = function(t) {
  lt(t < tt.strings.length, "Invalid string index");
  let e = n(tt, os) + 4;
  for (let r = 0; r < t; r++)
    e += n(this, At).getUint32(e) + 4;
  const s = n(this, At).getUint32(e), i = new Uint8Array(s);
  return i.set(new Uint8Array(n(this, xi), e + 4, s)), n(this, uc).decode(i);
}, N(tt, "bools", ["black", "bold", "disableFontFace", "fontExtraProperties", "isInvalidPDFjsFont", "isType3Font", "italic", "missingFile", "remeasure", "vertical"]), N(tt, "numbers", ["ascent", "defaultWidth", "descent"]), N(tt, "strings", ["fallbackName", "loadedName", "mimetype", "name"]), y(tt, Zo, Math.ceil(tt.bools.length * 2 / 8)), y(tt, Jo, n(tt, Zo) + tt.numbers.length * 8), y(tt, Qo, n(tt, Jo) + 1 + 8), y(tt, tl, n(tt, Qo) + 1 + 48), y(tt, os, n(tt, tl) + 1 + 6);
let qf = tt;
var fc, pc;
class si {
  static get workerPort() {
    return n(this, fc);
  }
  static set workerPort(t) {
    if (!(typeof Worker < "u" && t instanceof Worker) && t !== null)
      throw new Error("Invalid `workerPort` type.");
    g(this, fc, t);
  }
  static get workerSrc() {
    return n(this, pc);
  }
  static set workerSrc(t) {
    if (typeof t != "string")
      throw new Error("Invalid `workerSrc` type.");
    g(this, pc, t);
  }
}
fc = new WeakMap(), pc = new WeakMap(), y(si, fc, null), y(si, pc, "");
var el, gc;
class dw {
  constructor({
    parsedData: t,
    rawData: e
  }) {
    y(this, el);
    y(this, gc);
    g(this, el, t), g(this, gc, e);
  }
  getRaw() {
    return n(this, gc);
  }
  get(t) {
    return n(this, el).get(t) ?? null;
  }
  [Symbol.iterator]() {
    return n(this, el).entries();
  }
}
el = new WeakMap(), gc = new WeakMap();
const ho = Symbol("INTERNAL");
var mc, bc, yc, sl;
class uw {
  constructor(t, {
    name: e,
    intent: s,
    usage: i,
    rbGroups: r
  }) {
    y(this, mc, !1);
    y(this, bc, !1);
    y(this, yc, !1);
    y(this, sl, !0);
    g(this, mc, !!(t & vs.DISPLAY)), g(this, bc, !!(t & vs.PRINT)), this.name = e, this.intent = s, this.usage = i, this.rbGroups = r;
  }
  get visible() {
    if (n(this, yc))
      return n(this, sl);
    if (!n(this, sl))
      return !1;
    const {
      print: t,
      view: e
    } = this.usage;
    return n(this, mc) ? (e == null ? void 0 : e.viewState) !== "OFF" : n(this, bc) ? (t == null ? void 0 : t.printState) !== "OFF" : !0;
  }
  _setVisible(t, e, s = !1) {
    t !== ho && Tt("Internal method `_setVisible` called."), g(this, yc, s), g(this, sl, e);
  }
}
mc = new WeakMap(), bc = new WeakMap(), yc = new WeakMap(), sl = new WeakMap();
var er, vt, il, nl, wc, Xf;
class fw {
  constructor(t, e = vs.DISPLAY) {
    y(this, wc);
    y(this, er, null);
    y(this, vt, /* @__PURE__ */ new Map());
    y(this, il, null);
    y(this, nl, null);
    if (this.renderingIntent = e, this.name = null, this.creator = null, t !== null) {
      this.name = t.name, this.creator = t.creator, g(this, nl, t.order);
      for (const s of t.groups)
        n(this, vt).set(s.id, new uw(e, s));
      if (t.baseState === "OFF")
        for (const s of n(this, vt).values())
          s._setVisible(ho, !1);
      for (const s of t.on)
        n(this, vt).get(s)._setVisible(ho, !0);
      for (const s of t.off)
        n(this, vt).get(s)._setVisible(ho, !1);
      g(this, il, this.getHash());
    }
  }
  isVisible(t) {
    if (n(this, vt).size === 0)
      return !0;
    if (!t)
      return ju("Optional content group not defined."), !0;
    if (t.type === "OCG")
      return n(this, vt).has(t.id) ? n(this, vt).get(t.id).visible : (J(`Optional content group not found: ${t.id}`), !0);
    if (t.type === "OCMD") {
      if (t.expression)
        return w(this, wc, Xf).call(this, t.expression);
      if (!t.policy || t.policy === "AnyOn") {
        for (const e of t.ids) {
          if (!n(this, vt).has(e))
            return J(`Optional content group not found: ${e}`), !0;
          if (n(this, vt).get(e).visible)
            return !0;
        }
        return !1;
      } else if (t.policy === "AllOn") {
        for (const e of t.ids) {
          if (!n(this, vt).has(e))
            return J(`Optional content group not found: ${e}`), !0;
          if (!n(this, vt).get(e).visible)
            return !1;
        }
        return !0;
      } else if (t.policy === "AnyOff") {
        for (const e of t.ids) {
          if (!n(this, vt).has(e))
            return J(`Optional content group not found: ${e}`), !0;
          if (!n(this, vt).get(e).visible)
            return !0;
        }
        return !1;
      } else if (t.policy === "AllOff") {
        for (const e of t.ids) {
          if (!n(this, vt).has(e))
            return J(`Optional content group not found: ${e}`), !0;
          if (n(this, vt).get(e).visible)
            return !1;
        }
        return !0;
      }
      return J(`Unknown optional content policy ${t.policy}.`), !0;
    }
    return J(`Unknown group type ${t.type}.`), !0;
  }
  setVisibility(t, e = !0, s = !0) {
    var r;
    const i = n(this, vt).get(t);
    if (!i) {
      J(`Optional content group not found: ${t}`);
      return;
    }
    if (s && e && i.rbGroups.length)
      for (const a of i.rbGroups)
        for (const o of a)
          o !== t && ((r = n(this, vt).get(o)) == null || r._setVisible(ho, !1, !0));
    i._setVisible(ho, !!e, !0), g(this, er, null);
  }
  setOCGState({
    state: t,
    preserveRB: e
  }) {
    let s;
    for (const i of t) {
      switch (i) {
        case "ON":
        case "OFF":
        case "Toggle":
          s = i;
          continue;
      }
      const r = n(this, vt).get(i);
      if (r)
        switch (s) {
          case "ON":
            this.setVisibility(i, !0, e);
            break;
          case "OFF":
            this.setVisibility(i, !1, e);
            break;
          case "Toggle":
            this.setVisibility(i, !r.visible, e);
            break;
        }
    }
    g(this, er, null);
  }
  get hasInitialVisibility() {
    return n(this, il) === null || this.getHash() === n(this, il);
  }
  getOrder() {
    return n(this, vt).size ? n(this, nl) ? n(this, nl).slice() : [...n(this, vt).keys()] : null;
  }
  getGroup(t) {
    return n(this, vt).get(t) || null;
  }
  getHash() {
    if (n(this, er) !== null)
      return n(this, er);
    const t = new jm();
    for (const [e, s] of n(this, vt))
      t.update(`${e}:${s.visible}`);
    return g(this, er, t.hexdigest());
  }
  [Symbol.iterator]() {
    return n(this, vt).entries();
  }
}
er = new WeakMap(), vt = new WeakMap(), il = new WeakMap(), nl = new WeakMap(), wc = new WeakSet(), Xf = function(t) {
  const e = t.length;
  if (e < 2)
    return !0;
  const s = t[0];
  for (let i = 1; i < e; i++) {
    const r = t[i];
    let a;
    if (Array.isArray(r))
      a = w(this, wc, Xf).call(this, r);
    else if (n(this, vt).has(r))
      a = n(this, vt).get(r).visible;
    else
      return J(`Optional content group not found: ${r}`), !0;
    switch (s) {
      case "And":
        if (!a)
          return !1;
        break;
      case "Or":
        if (a)
          return !0;
        break;
      case "Not":
        return !a;
      default:
        return !0;
    }
  }
  return s === "And";
};
class pw {
  constructor(t, {
    disableRange: e = !1,
    disableStream: s = !1
  }) {
    lt(t, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.');
    const {
      length: i,
      initialData: r,
      progressiveDone: a,
      contentDispositionFilename: o
    } = t;
    if (this._queuedChunks = [], this._progressiveDone = a, this._contentDispositionFilename = o, (r == null ? void 0 : r.length) > 0) {
      const l = r instanceof Uint8Array && r.byteLength === r.buffer.byteLength ? r.buffer : new Uint8Array(r).buffer;
      this._queuedChunks.push(l);
    }
    this._pdfDataRangeTransport = t, this._isStreamingSupported = !s, this._isRangeSupported = !e, this._contentLength = i, this._fullRequestReader = null, this._rangeReaders = [], t.addRangeListener((l, h) => {
      this._onReceiveData({
        begin: l,
        chunk: h
      });
    }), t.addProgressListener((l, h) => {
      this._onProgress({
        loaded: l,
        total: h
      });
    }), t.addProgressiveReadListener((l) => {
      this._onReceiveData({
        chunk: l
      });
    }), t.addProgressiveDoneListener(() => {
      this._onProgressiveDone();
    }), t.transportReady();
  }
  _onReceiveData({
    begin: t,
    chunk: e
  }) {
    const s = e instanceof Uint8Array && e.byteLength === e.buffer.byteLength ? e.buffer : new Uint8Array(e).buffer;
    if (t === void 0)
      this._fullRequestReader ? this._fullRequestReader._enqueue(s) : this._queuedChunks.push(s);
    else {
      const i = this._rangeReaders.some(function(r) {
        return r._begin !== t ? !1 : (r._enqueue(s), !0);
      });
      lt(i, "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
    }
  }
  get _progressiveDataLength() {
    var t;
    return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
  }
  _onProgress(t) {
    var e, s, i, r;
    t.total === void 0 ? (s = (e = this._rangeReaders[0]) == null ? void 0 : e.onProgress) == null || s.call(e, {
      loaded: t.loaded
    }) : (r = (i = this._fullRequestReader) == null ? void 0 : i.onProgress) == null || r.call(i, {
      loaded: t.loaded,
      total: t.total
    });
  }
  _onProgressiveDone() {
    var t;
    (t = this._fullRequestReader) == null || t.progressiveDone(), this._progressiveDone = !0;
  }
  _removeRangeReader(t) {
    const e = this._rangeReaders.indexOf(t);
    e >= 0 && this._rangeReaders.splice(e, 1);
  }
  getFullReader() {
    lt(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
    const t = this._queuedChunks;
    return this._queuedChunks = null, new gw(this, t, this._progressiveDone, this._contentDispositionFilename);
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength)
      return null;
    const s = new mw(this, t, e);
    return this._pdfDataRangeTransport.requestDataRange(t, e), this._rangeReaders.push(s), s;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const s of this._rangeReaders.slice(0))
      s.cancel(t);
    this._pdfDataRangeTransport.abort();
  }
}
class gw {
  constructor(t, e, s = !1, i = null) {
    this._stream = t, this._done = s || !1, this._filename = qu(i) ? i : null, this._queuedChunks = e || [], this._loaded = 0;
    for (const r of this._queuedChunks)
      this._loaded += r.byteLength;
    this._requests = [], this._headersReady = Promise.resolve(), t._fullRequestReader = this, this.onProgress = null;
  }
  _enqueue(t) {
    this._done || (this._requests.length > 0 ? this._requests.shift().resolve({
      value: t,
      done: !1
    }) : this._queuedChunks.push(t), this._loaded += t.byteLength);
  }
  get headersReady() {
    return this._headersReady;
  }
  get filename() {
    return this._filename;
  }
  get isRangeSupported() {
    return this._stream._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._stream._isStreamingSupported;
  }
  get contentLength() {
    return this._stream._contentLength;
  }
  async read() {
    if (this._queuedChunks.length > 0)
      return {
        value: this._queuedChunks.shift(),
        done: !1
      };
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }
  cancel(t) {
    this._done = !0;
    for (const e of this._requests)
      e.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0;
  }
  progressiveDone() {
    this._done || (this._done = !0);
  }
}
class mw {
  constructor(t, e, s) {
    this._stream = t, this._begin = e, this._end = s, this._queuedChunk = null, this._requests = [], this._done = !1, this.onProgress = null;
  }
  _enqueue(t) {
    if (!this._done) {
      if (this._requests.length === 0)
        this._queuedChunk = t;
      else {
        this._requests.shift().resolve({
          value: t,
          done: !1
        });
        for (const s of this._requests)
          s.resolve({
            value: void 0,
            done: !0
          });
        this._requests.length = 0;
      }
      this._done = !0, this._stream._removeRangeReader(this);
    }
  }
  get isStreamingSupported() {
    return !1;
  }
  async read() {
    if (this._queuedChunk) {
      const e = this._queuedChunk;
      return this._queuedChunk = null, {
        value: e,
        done: !1
      };
    }
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }
  cancel(t) {
    this._done = !0;
    for (const e of this._requests)
      e.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._stream._removeRangeReader(this);
  }
}
function bw(c) {
  let t = !0, e = s("filename\\*", "i").exec(c);
  if (e) {
    e = e[1];
    let d = o(e);
    return d = unescape(d), d = l(d), d = h(d), r(d);
  }
  if (e = a(c), e) {
    const d = h(e);
    return r(d);
  }
  if (e = s("filename", "i").exec(c), e) {
    e = e[1];
    let d = o(e);
    return d = h(d), r(d);
  }
  function s(d, u) {
    return new RegExp("(?:^|;)\\s*" + d + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', u);
  }
  function i(d, u) {
    if (d) {
      if (!/^[\x00-\xFF]+$/.test(u))
        return u;
      try {
        const p = new TextDecoder(d, {
          fatal: !0
        }), b = gd(u);
        u = p.decode(b), t = !1;
      } catch {
      }
    }
    return u;
  }
  function r(d) {
    return t && /[\x80-\xff]/.test(d) && (d = i("utf-8", d), t && (d = i("iso-8859-1", d))), d;
  }
  function a(d) {
    const u = [];
    let p;
    const b = s("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
    for (; (p = b.exec(d)) !== null; ) {
      let [, v, E, x] = p;
      if (v = parseInt(v, 10), v in u) {
        if (v === 0)
          break;
        continue;
      }
      u[v] = [E, x];
    }
    const S = [];
    for (let v = 0; v < u.length && v in u; ++v) {
      let [E, x] = u[v];
      x = o(x), E && (x = unescape(x), v === 0 && (x = l(x))), S.push(x);
    }
    return S.join("");
  }
  function o(d) {
    if (d.startsWith('"')) {
      const u = d.slice(1).split('\\"');
      for (let p = 0; p < u.length; ++p) {
        const b = u[p].indexOf('"');
        b !== -1 && (u[p] = u[p].slice(0, b), u.length = p + 1), u[p] = u[p].replaceAll(/\\(.)/g, "$1");
      }
      d = u.join('"');
    }
    return d;
  }
  function l(d) {
    const u = d.indexOf("'");
    if (u === -1)
      return d;
    const p = d.slice(0, u), S = d.slice(u + 1).replace(/^[^']*'/, "");
    return i(p, S);
  }
  function h(d) {
    return !d.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(d) ? d : d.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function(u, p, b, S) {
      if (b === "q" || b === "Q")
        return S = S.replaceAll("_", " "), S = S.replaceAll(/=([0-9a-fA-F]{2})/g, function(v, E) {
          return String.fromCharCode(parseInt(E, 16));
        }), i(p, S);
      try {
        S = atob(S);
      } catch {
      }
      return i(p, S);
    });
  }
  return "";
}
function nb(c, t) {
  const e = new Headers();
  if (!c || !t || typeof t != "object")
    return e;
  for (const s in t) {
    const i = t[s];
    i !== void 0 && e.append(s, i);
  }
  return e;
}
function Xu(c) {
  var t;
  return ((t = URL.parse(c)) == null ? void 0 : t.origin) ?? null;
}
function rb({
  responseHeaders: c,
  isHttp: t,
  rangeChunkSize: e,
  disableRange: s
}) {
  const i = {
    allowRangeRequests: !1,
    suggestedLength: void 0
  }, r = parseInt(c.get("Content-Length"), 10);
  return !Number.isInteger(r) || (i.suggestedLength = r, r <= 2 * e) || s || !t || c.get("Accept-Ranges") !== "bytes" || (c.get("Content-Encoding") || "identity") !== "identity" || (i.allowRangeRequests = !0), i;
}
function ab(c) {
  const t = c.get("Content-Disposition");
  if (t) {
    let e = bw(t);
    if (e.includes("%"))
      try {
        e = decodeURIComponent(e);
      } catch {
      }
    if (qu(e))
      return e;
  }
  return null;
}
function wd(c, t) {
  return new Th(`Unexpected server response (${c}) while retrieving PDF "${t}".`, c, c === 404 || c === 0 && t.startsWith("file:"));
}
function ob(c) {
  return c === 200 || c === 206;
}
function lb(c, t, e) {
  return {
    method: "GET",
    headers: c,
    signal: e.signal,
    mode: "cors",
    credentials: t ? "include" : "same-origin",
    redirect: "follow"
  };
}
function hb(c) {
  return c instanceof Uint8Array ? c.buffer : c instanceof ArrayBuffer ? c : (J(`getArrayBuffer - unexpected data format: ${c}`), new Uint8Array(c).buffer);
}
class yw {
  constructor(t) {
    N(this, "_responseOrigin", null);
    this.source = t, this.isHttp = /^https?:/i.test(t.url), this.headers = nb(this.isHttp, t.httpHeaders), this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    var t;
    return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
  }
  getFullReader() {
    return lt(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once."), this._fullRequestReader = new ww(this), this._fullRequestReader;
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength)
      return null;
    const s = new Aw(this, t, e);
    return this._rangeRequestReaders.push(s), s;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const s of this._rangeRequestReaders.slice(0))
      s.cancel(t);
  }
}
class ww {
  constructor(t) {
    this._stream = t, this._reader = null, this._loaded = 0, this._filename = null;
    const e = t.source;
    this._withCredentials = e.withCredentials || !1, this._contentLength = e.length, this._headersCapability = Promise.withResolvers(), this._disableRange = e.disableRange || !1, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._abortController = new AbortController(), this._isStreamingSupported = !e.disableStream, this._isRangeSupported = !e.disableRange;
    const s = new Headers(t.headers), i = e.url;
    fetch(i, lb(s, this._withCredentials, this._abortController)).then((r) => {
      if (t._responseOrigin = Xu(r.url), !ob(r.status))
        throw wd(r.status, i);
      this._reader = r.body.getReader(), this._headersCapability.resolve();
      const a = r.headers, {
        allowRangeRequests: o,
        suggestedLength: l
      } = rb({
        responseHeaders: a,
        isHttp: t.isHttp,
        rangeChunkSize: this._rangeChunkSize,
        disableRange: this._disableRange
      });
      this._isRangeSupported = o, this._contentLength = l || this._contentLength, this._filename = ab(a), !this._isStreamingSupported && this._isRangeSupported && this.cancel(new Tn("Streaming is disabled."));
    }).catch(this._headersCapability.reject), this.onProgress = null;
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  get filename() {
    return this._filename;
  }
  get contentLength() {
    return this._contentLength;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var s;
    await this._headersCapability.promise;
    const {
      value: t,
      done: e
    } = await this._reader.read();
    return e ? {
      value: t,
      done: e
    } : (this._loaded += t.byteLength, (s = this.onProgress) == null || s.call(this, {
      loaded: this._loaded,
      total: this._contentLength
    }), {
      value: hb(t),
      done: !1
    });
  }
  cancel(t) {
    var e;
    (e = this._reader) == null || e.cancel(t), this._abortController.abort();
  }
}
class Aw {
  constructor(t, e, s) {
    this._stream = t, this._reader = null, this._loaded = 0;
    const i = t.source;
    this._withCredentials = i.withCredentials || !1, this._readCapability = Promise.withResolvers(), this._isStreamingSupported = !i.disableStream, this._abortController = new AbortController();
    const r = new Headers(t.headers);
    r.append("Range", `bytes=${e}-${s - 1}`);
    const a = i.url;
    fetch(a, lb(r, this._withCredentials, this._abortController)).then((o) => {
      const l = Xu(o.url);
      if (l !== t._responseOrigin)
        throw new Error(`Expected range response-origin "${l}" to match "${t._responseOrigin}".`);
      if (!ob(o.status))
        throw wd(o.status, a);
      this._readCapability.resolve(), this._reader = o.body.getReader();
    }).catch(this._readCapability.reject), this.onProgress = null;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var s;
    await this._readCapability.promise;
    const {
      value: t,
      done: e
    } = await this._reader.read();
    return e ? {
      value: t,
      done: e
    } : (this._loaded += t.byteLength, (s = this.onProgress) == null || s.call(this, {
      loaded: this._loaded
    }), {
      value: hb(t),
      done: !1
    });
  }
  cancel(t) {
    var e;
    (e = this._reader) == null || e.cancel(t), this._abortController.abort();
  }
}
const hf = 200, cf = 206;
function vw(c) {
  const t = c.response;
  return typeof t != "string" ? t : gd(t).buffer;
}
class Sw {
  constructor({
    url: t,
    httpHeaders: e,
    withCredentials: s
  }) {
    N(this, "_responseOrigin", null);
    this.url = t, this.isHttp = /^https?:/i.test(t), this.headers = nb(this.isHttp, e), this.withCredentials = s || !1, this.currXhrId = 0, this.pendingRequests = /* @__PURE__ */ Object.create(null);
  }
  request(t) {
    const e = new XMLHttpRequest(), s = this.currXhrId++, i = this.pendingRequests[s] = {
      xhr: e
    };
    e.open("GET", this.url), e.withCredentials = this.withCredentials;
    for (const [r, a] of this.headers)
      e.setRequestHeader(r, a);
    return this.isHttp && "begin" in t && "end" in t ? (e.setRequestHeader("Range", `bytes=${t.begin}-${t.end - 1}`), i.expectedStatus = cf) : i.expectedStatus = hf, e.responseType = "arraybuffer", lt(t.onError, "Expected `onError` callback to be provided."), e.onerror = () => {
      t.onError(e.status);
    }, e.onreadystatechange = this.onStateChange.bind(this, s), e.onprogress = this.onProgress.bind(this, s), i.onHeadersReceived = t.onHeadersReceived, i.onDone = t.onDone, i.onError = t.onError, i.onProgress = t.onProgress, e.send(null), s;
  }
  onProgress(t, e) {
    var i;
    const s = this.pendingRequests[t];
    s && ((i = s.onProgress) == null || i.call(s, e));
  }
  onStateChange(t, e) {
    const s = this.pendingRequests[t];
    if (!s)
      return;
    const i = s.xhr;
    if (i.readyState >= 2 && s.onHeadersReceived && (s.onHeadersReceived(), delete s.onHeadersReceived), i.readyState !== 4 || !(t in this.pendingRequests))
      return;
    if (delete this.pendingRequests[t], i.status === 0 && this.isHttp) {
      s.onError(i.status);
      return;
    }
    const r = i.status || hf;
    if (!(r === hf && s.expectedStatus === cf) && r !== s.expectedStatus) {
      s.onError(i.status);
      return;
    }
    const o = vw(i);
    if (r === cf) {
      const l = i.getResponseHeader("Content-Range"), h = /bytes (\d+)-(\d+)\/(\d+)/.exec(l);
      h ? s.onDone({
        begin: parseInt(h[1], 10),
        chunk: o
      }) : (J('Missing or invalid "Content-Range" header.'), s.onError(0));
    } else o ? s.onDone({
      begin: 0,
      chunk: o
    }) : s.onError(i.status);
  }
  getRequestXhr(t) {
    return this.pendingRequests[t].xhr;
  }
  isPendingRequest(t) {
    return t in this.pendingRequests;
  }
  abortRequest(t) {
    const e = this.pendingRequests[t].xhr;
    delete this.pendingRequests[t], e.abort();
  }
}
class xw {
  constructor(t) {
    this._source = t, this._manager = new Sw(t), this._rangeChunkSize = t.rangeChunkSize, this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  _onRangeRequestReaderClosed(t) {
    const e = this._rangeRequestReaders.indexOf(t);
    e >= 0 && this._rangeRequestReaders.splice(e, 1);
  }
  getFullReader() {
    return lt(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once."), this._fullRequestReader = new Ew(this._manager, this._source), this._fullRequestReader;
  }
  getRangeReader(t, e) {
    const s = new _w(this._manager, t, e);
    return s.onClosed = this._onRangeRequestReaderClosed.bind(this), this._rangeRequestReaders.push(s), s;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const s of this._rangeRequestReaders.slice(0))
      s.cancel(t);
  }
}
class Ew {
  constructor(t, e) {
    this._manager = t, this._url = e.url, this._fullRequestId = t.request({
      onHeadersReceived: this._onHeadersReceived.bind(this),
      onDone: this._onDone.bind(this),
      onError: this._onError.bind(this),
      onProgress: this._onProgress.bind(this)
    }), this._headersCapability = Promise.withResolvers(), this._disableRange = e.disableRange || !1, this._contentLength = e.length, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._isStreamingSupported = !1, this._isRangeSupported = !1, this._cachedChunks = [], this._requests = [], this._done = !1, this._storedError = void 0, this._filename = null, this.onProgress = null;
  }
  _onHeadersReceived() {
    const t = this._fullRequestId, e = this._manager.getRequestXhr(t);
    this._manager._responseOrigin = Xu(e.responseURL);
    const s = e.getAllResponseHeaders(), i = new Headers(s ? s.trimStart().replace(/[^\S ]+$/, "").split(/[\r\n]+/).map((o) => {
      const [l, ...h] = o.split(": ");
      return [l, h.join(": ")];
    }) : []), {
      allowRangeRequests: r,
      suggestedLength: a
    } = rb({
      responseHeaders: i,
      isHttp: this._manager.isHttp,
      rangeChunkSize: this._rangeChunkSize,
      disableRange: this._disableRange
    });
    r && (this._isRangeSupported = !0), this._contentLength = a || this._contentLength, this._filename = ab(i), this._isRangeSupported && this._manager.abortRequest(t), this._headersCapability.resolve();
  }
  _onDone(t) {
    if (t && (this._requests.length > 0 ? this._requests.shift().resolve({
      value: t.chunk,
      done: !1
    }) : this._cachedChunks.push(t.chunk)), this._done = !0, !(this._cachedChunks.length > 0)) {
      for (const e of this._requests)
        e.resolve({
          value: void 0,
          done: !0
        });
      this._requests.length = 0;
    }
  }
  _onError(t) {
    this._storedError = wd(t, this._url), this._headersCapability.reject(this._storedError);
    for (const e of this._requests)
      e.reject(this._storedError);
    this._requests.length = 0, this._cachedChunks.length = 0;
  }
  _onProgress(t) {
    var e;
    (e = this.onProgress) == null || e.call(this, {
      loaded: t.loaded,
      total: t.lengthComputable ? t.total : this._contentLength
    });
  }
  get filename() {
    return this._filename;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  get contentLength() {
    return this._contentLength;
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  async read() {
    if (await this._headersCapability.promise, this._storedError)
      throw this._storedError;
    if (this._cachedChunks.length > 0)
      return {
        value: this._cachedChunks.shift(),
        done: !1
      };
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }
  cancel(t) {
    this._done = !0, this._headersCapability.reject(t);
    for (const e of this._requests)
      e.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._manager.isPendingRequest(this._fullRequestId) && this._manager.abortRequest(this._fullRequestId), this._fullRequestReader = null;
  }
}
class _w {
  constructor(t, e, s) {
    this._manager = t, this._url = t.url, this._requestId = t.request({
      begin: e,
      end: s,
      onHeadersReceived: this._onHeadersReceived.bind(this),
      onDone: this._onDone.bind(this),
      onError: this._onError.bind(this),
      onProgress: this._onProgress.bind(this)
    }), this._requests = [], this._queuedChunk = null, this._done = !1, this._storedError = void 0, this.onProgress = null, this.onClosed = null;
  }
  _onHeadersReceived() {
    var e;
    const t = Xu((e = this._manager.getRequestXhr(this._requestId)) == null ? void 0 : e.responseURL);
    t !== this._manager._responseOrigin && (this._storedError = new Error(`Expected range response-origin "${t}" to match "${this._manager._responseOrigin}".`), this._onError(0));
  }
  _close() {
    var t;
    (t = this.onClosed) == null || t.call(this, this);
  }
  _onDone(t) {
    const e = t.chunk;
    this._requests.length > 0 ? this._requests.shift().resolve({
      value: e,
      done: !1
    }) : this._queuedChunk = e, this._done = !0;
    for (const s of this._requests)
      s.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._close();
  }
  _onError(t) {
    this._storedError ?? (this._storedError = wd(t, this._url));
    for (const e of this._requests)
      e.reject(this._storedError);
    this._requests.length = 0, this._queuedChunk = null;
  }
  _onProgress(t) {
    var e;
    this.isStreamingSupported || (e = this.onProgress) == null || e.call(this, {
      loaded: t.loaded
    });
  }
  get isStreamingSupported() {
    return !1;
  }
  async read() {
    if (this._storedError)
      throw this._storedError;
    if (this._queuedChunk !== null) {
      const e = this._queuedChunk;
      return this._queuedChunk = null, {
        value: e,
        done: !1
      };
    }
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }
  cancel(t) {
    this._done = !0;
    for (const e of this._requests)
      e.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._manager.isPendingRequest(this._requestId) && this._manager.abortRequest(this._requestId), this._close();
  }
}
const Cw = /^[a-z][a-z0-9\-+.]+:/i;
function Tw(c) {
  if (Cw.test(c))
    return new URL(c);
  const t = process.getBuiltinModule("url");
  return new URL(t.pathToFileURL(c));
}
class Pw {
  constructor(t) {
    this.source = t, this.url = Tw(t.url), lt(this.url.protocol === "file:", "PDFNodeStream only supports file:// URLs."), this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    var t;
    return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
  }
  getFullReader() {
    return lt(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once."), this._fullRequestReader = new Rw(this), this._fullRequestReader;
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength)
      return null;
    const s = new kw(this, t, e);
    return this._rangeRequestReaders.push(s), s;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const s of this._rangeRequestReaders.slice(0))
      s.cancel(t);
  }
}
class Rw {
  constructor(t) {
    this._url = t.url, this._done = !1, this._storedError = null, this.onProgress = null;
    const e = t.source;
    this._contentLength = e.length, this._loaded = 0, this._filename = null, this._disableRange = e.disableRange || !1, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._isStreamingSupported = !e.disableStream, this._isRangeSupported = !e.disableRange, this._readableStream = null, this._readCapability = Promise.withResolvers(), this._headersCapability = Promise.withResolvers();
    const s = process.getBuiltinModule("fs");
    s.promises.lstat(this._url).then((i) => {
      this._contentLength = i.size, this._setReadableStream(s.createReadStream(this._url)), this._headersCapability.resolve();
    }, (i) => {
      i.code === "ENOENT" && (i = wd(0, this._url.href)), this._storedError = i, this._headersCapability.reject(i);
    });
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  get filename() {
    return this._filename;
  }
  get contentLength() {
    return this._contentLength;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var s;
    if (await this._readCapability.promise, this._done)
      return {
        value: void 0,
        done: !0
      };
    if (this._storedError)
      throw this._storedError;
    const t = this._readableStream.read();
    return t === null ? (this._readCapability = Promise.withResolvers(), this.read()) : (this._loaded += t.length, (s = this.onProgress) == null || s.call(this, {
      loaded: this._loaded,
      total: this._contentLength
    }), {
      value: new Uint8Array(t).buffer,
      done: !1
    });
  }
  cancel(t) {
    if (!this._readableStream) {
      this._error(t);
      return;
    }
    this._readableStream.destroy(t);
  }
  _error(t) {
    this._storedError = t, this._readCapability.resolve();
  }
  _setReadableStream(t) {
    this._readableStream = t, t.on("readable", () => {
      this._readCapability.resolve();
    }), t.on("end", () => {
      t.destroy(), this._done = !0, this._readCapability.resolve();
    }), t.on("error", (e) => {
      this._error(e);
    }), !this._isStreamingSupported && this._isRangeSupported && this._error(new Tn("streaming is disabled")), this._storedError && this._readableStream.destroy(this._storedError);
  }
}
class kw {
  constructor(t, e, s) {
    this._url = t.url, this._done = !1, this._storedError = null, this.onProgress = null, this._loaded = 0, this._readableStream = null, this._readCapability = Promise.withResolvers();
    const i = t.source;
    this._isStreamingSupported = !i.disableStream;
    const r = process.getBuiltinModule("fs");
    this._setReadableStream(r.createReadStream(this._url, {
      start: e,
      end: s - 1
    }));
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var s;
    if (await this._readCapability.promise, this._done)
      return {
        value: void 0,
        done: !0
      };
    if (this._storedError)
      throw this._storedError;
    const t = this._readableStream.read();
    return t === null ? (this._readCapability = Promise.withResolvers(), this.read()) : (this._loaded += t.length, (s = this.onProgress) == null || s.call(this, {
      loaded: this._loaded
    }), {
      value: new Uint8Array(t).buffer,
      done: !1
    });
  }
  cancel(t) {
    if (!this._readableStream) {
      this._error(t);
      return;
    }
    this._readableStream.destroy(t);
  }
  _error(t) {
    this._storedError = t, this._readCapability.resolve();
  }
  _setReadableStream(t) {
    this._readableStream = t, t.on("readable", () => {
      this._readCapability.resolve();
    }), t.on("end", () => {
      t.destroy(), this._done = !0, this._readCapability.resolve();
    }), t.on("error", (e) => {
      this._error(e);
    }), this._storedError && this._readableStream.destroy(this._storedError);
  }
}
const Ql = Symbol("INITIAL_DATA");
var ls, Ac, Yf;
class cb {
  constructor() {
    y(this, Ac);
    y(this, ls, /* @__PURE__ */ Object.create(null));
  }
  get(t, e = null) {
    if (e) {
      const i = w(this, Ac, Yf).call(this, t);
      return i.promise.then(() => e(i.data)), null;
    }
    const s = n(this, ls)[t];
    if (!s || s.data === Ql)
      throw new Error(`Requesting object that isn't resolved yet ${t}.`);
    return s.data;
  }
  has(t) {
    const e = n(this, ls)[t];
    return !!e && e.data !== Ql;
  }
  delete(t) {
    const e = n(this, ls)[t];
    return !e || e.data === Ql ? !1 : (delete n(this, ls)[t], !0);
  }
  resolve(t, e = null) {
    const s = w(this, Ac, Yf).call(this, t);
    s.data = e, s.resolve();
  }
  clear() {
    var t;
    for (const e in n(this, ls)) {
      const {
        data: s
      } = n(this, ls)[e];
      (t = s == null ? void 0 : s.bitmap) == null || t.close();
    }
    g(this, ls, /* @__PURE__ */ Object.create(null));
  }
  *[Symbol.iterator]() {
    for (const t in n(this, ls)) {
      const {
        data: e
      } = n(this, ls)[t];
      e !== Ql && (yield [t, e]);
    }
  }
}
ls = new WeakMap(), Ac = new WeakSet(), Yf = function(t) {
  var e;
  return (e = n(this, ls))[t] || (e[t] = {
    ...Promise.withResolvers(),
    data: Ql
  });
};
const Lw = 1e5, Og = 30;
var Kg, sr, Je, vc, Sc, pa, ln, xc, Ec, ga, rl, al, ir, ol, _c, ll, ma, Cc, Tc, Vt, hl, ba, Pc, nr, cl, kn, db, ub, Kf, Es, jd, Zf, fb, pb;
let Lh = (Vt = class {
  constructor({
    textContentSource: t,
    container: e,
    viewport: s
  }) {
    y(this, kn);
    y(this, sr, Promise.withResolvers());
    y(this, Je, null);
    y(this, vc, !1);
    y(this, Sc, !!((Kg = globalThis.FontInspector) != null && Kg.enabled));
    y(this, pa, null);
    y(this, ln, null);
    y(this, xc, 0);
    y(this, Ec, 0);
    y(this, ga, null);
    y(this, rl, null);
    y(this, al, 0);
    y(this, ir, 0);
    y(this, ol, /* @__PURE__ */ Object.create(null));
    y(this, _c, []);
    y(this, ll, null);
    y(this, ma, []);
    y(this, Cc, /* @__PURE__ */ new WeakMap());
    y(this, Tc, null);
    var l;
    if (t instanceof ReadableStream)
      g(this, ll, t);
    else if (typeof t == "object")
      g(this, ll, new ReadableStream({
        start(h) {
          h.enqueue(t), h.close();
        }
      }));
    else
      throw new Error('No "textContentSource" parameter specified.');
    g(this, Je, g(this, rl, e)), g(this, ir, s.scale * ri.pixelRatio), g(this, al, s.rotation), g(this, ln, {
      div: null,
      properties: null,
      ctx: null
    });
    const {
      pageWidth: i,
      pageHeight: r,
      pageX: a,
      pageY: o
    } = s.rawDims;
    g(this, Tc, [1, 0, 0, -1, -a, o + r]), g(this, Ec, i), g(this, xc, r), w(l = Vt, Es, fb).call(l), Rr(e, s), n(this, sr).promise.finally(() => {
      n(Vt, cl).delete(this), g(this, ln, null), g(this, ol, null);
    }).catch(() => {
    });
  }
  static get fontFamilyMap() {
    const {
      isWindows: t,
      isFirefox: e
    } = ge.platform;
    return et(this, "fontFamilyMap", /* @__PURE__ */ new Map([["sans-serif", `${t && e ? "Calibri, " : ""}sans-serif`], ["monospace", `${t && e ? "Lucida Console, " : ""}monospace`]]));
  }
  render() {
    const t = () => {
      n(this, ga).read().then(({
        value: e,
        done: s
      }) => {
        if (s) {
          n(this, sr).resolve();
          return;
        }
        n(this, pa) ?? g(this, pa, e.lang), Object.assign(n(this, ol), e.styles), w(this, kn, db).call(this, e.items), t();
      }, n(this, sr).reject);
    };
    return g(this, ga, n(this, ll).getReader()), n(Vt, cl).add(this), t(), n(this, sr).promise;
  }
  update({
    viewport: t,
    onBefore: e = null
  }) {
    var r;
    const s = t.scale * ri.pixelRatio, i = t.rotation;
    if (i !== n(this, al) && (e == null || e(), g(this, al, i), Rr(n(this, rl), {
      rotation: i
    })), s !== n(this, ir)) {
      e == null || e(), g(this, ir, s);
      const a = {
        div: null,
        properties: null,
        ctx: w(r = Vt, Es, jd).call(r, n(this, pa))
      };
      for (const o of n(this, ma))
        a.properties = n(this, Cc).get(o), a.div = o, w(this, kn, Kf).call(this, a);
    }
  }
  cancel() {
    var e;
    const t = new Tn("TextLayer task cancelled.");
    (e = n(this, ga)) == null || e.cancel(t).catch(() => {
    }), g(this, ga, null), n(this, sr).reject(t);
  }
  get textDivs() {
    return n(this, ma);
  }
  get textContentItemsStr() {
    return n(this, _c);
  }
  static cleanup() {
    if (!(n(this, cl).size > 0)) {
      n(this, hl).clear();
      for (const {
        canvas: t
      } of n(this, ba).values())
        t.remove();
      n(this, ba).clear();
    }
  }
}, sr = new WeakMap(), Je = new WeakMap(), vc = new WeakMap(), Sc = new WeakMap(), pa = new WeakMap(), ln = new WeakMap(), xc = new WeakMap(), Ec = new WeakMap(), ga = new WeakMap(), rl = new WeakMap(), al = new WeakMap(), ir = new WeakMap(), ol = new WeakMap(), _c = new WeakMap(), ll = new WeakMap(), ma = new WeakMap(), Cc = new WeakMap(), Tc = new WeakMap(), hl = new WeakMap(), ba = new WeakMap(), Pc = new WeakMap(), nr = new WeakMap(), cl = new WeakMap(), kn = new WeakSet(), db = function(t) {
  var i, r;
  if (n(this, vc))
    return;
  (r = n(this, ln)).ctx ?? (r.ctx = w(i = Vt, Es, jd).call(i, n(this, pa)));
  const e = n(this, ma), s = n(this, _c);
  for (const a of t) {
    if (e.length > Lw) {
      J("Ignoring additional textDivs for performance reasons."), g(this, vc, !0);
      return;
    }
    if (a.str === void 0) {
      if (a.type === "beginMarkedContentProps" || a.type === "beginMarkedContent") {
        const o = n(this, Je);
        g(this, Je, document.createElement("span")), n(this, Je).classList.add("markedContent"), a.id && n(this, Je).setAttribute("id", `${a.id}`), o.append(n(this, Je));
      } else a.type === "endMarkedContent" && g(this, Je, n(this, Je).parentNode);
      continue;
    }
    s.push(a.str), w(this, kn, ub).call(this, a);
  }
}, ub = function(t) {
  var v;
  const e = document.createElement("span"), s = {
    angle: 0,
    canvasWidth: 0,
    hasText: t.str !== "",
    hasEOL: t.hasEOL,
    fontSize: 0
  };
  n(this, ma).push(e);
  const i = W.transform(n(this, Tc), t.transform);
  let r = Math.atan2(i[1], i[0]);
  const a = n(this, ol)[t.fontName];
  a.vertical && (r += Math.PI / 2);
  let o = n(this, Sc) && a.fontSubstitution || a.fontFamily;
  o = Vt.fontFamilyMap.get(o) || o;
  const l = Math.hypot(i[2], i[3]), h = l * w(v = Vt, Es, pb).call(v, o, a, n(this, pa));
  let d, u;
  r === 0 ? (d = i[4], u = i[5] - h) : (d = i[4] + h * Math.sin(r), u = i[5] - h * Math.cos(r));
  const p = "calc(var(--total-scale-factor) *", b = e.style;
  n(this, Je) === n(this, rl) ? (b.left = `${(100 * d / n(this, Ec)).toFixed(2)}%`, b.top = `${(100 * u / n(this, xc)).toFixed(2)}%`) : (b.left = `${p}${d.toFixed(2)}px)`, b.top = `${p}${u.toFixed(2)}px)`), b.fontSize = `${p}${(n(Vt, nr) * l).toFixed(2)}px)`, b.fontFamily = o, s.fontSize = l, e.setAttribute("role", "presentation"), e.textContent = t.str, e.dir = t.dir, n(this, Sc) && (e.dataset.fontName = a.fontSubstitutionLoadedName || t.fontName), r !== 0 && (s.angle = r * (180 / Math.PI));
  let S = !1;
  if (t.str.length > 1)
    S = !0;
  else if (t.str !== " " && t.transform[0] !== t.transform[3]) {
    const E = Math.abs(t.transform[0]), x = Math.abs(t.transform[3]);
    E !== x && Math.max(E, x) / Math.min(E, x) > 1.5 && (S = !0);
  }
  if (S && (s.canvasWidth = a.vertical ? t.height : t.width), n(this, Cc).set(e, s), n(this, ln).div = e, n(this, ln).properties = s, w(this, kn, Kf).call(this, n(this, ln)), s.hasText && n(this, Je).append(e), s.hasEOL) {
    const E = document.createElement("br");
    E.setAttribute("role", "presentation"), n(this, Je).append(E);
  }
}, Kf = function(t) {
  var o;
  const {
    div: e,
    properties: s,
    ctx: i
  } = t, {
    style: r
  } = e;
  let a = "";
  if (n(Vt, nr) > 1 && (a = `scale(${1 / n(Vt, nr)})`), s.canvasWidth !== 0 && s.hasText) {
    const {
      fontFamily: l
    } = r, {
      canvasWidth: h,
      fontSize: d
    } = s;
    w(o = Vt, Es, Zf).call(o, i, d * n(this, ir), l);
    const {
      width: u
    } = i.measureText(e.textContent);
    u > 0 && (a = `scaleX(${h * n(this, ir) / u}) ${a}`);
  }
  s.angle !== 0 && (a = `rotate(${s.angle}deg) ${a}`), a.length > 0 && (r.transform = a);
}, Es = new WeakSet(), jd = function(t = null) {
  let e = n(this, ba).get(t || (t = ""));
  if (!e) {
    const s = document.createElement("canvas");
    s.className = "hiddenCanvasElement", s.lang = t, document.body.append(s), e = s.getContext("2d", {
      alpha: !1,
      willReadFrequently: !0
    }), n(this, ba).set(t, e), n(this, Pc).set(e, {
      size: 0,
      family: ""
    });
  }
  return e;
}, Zf = function(t, e, s) {
  const i = n(this, Pc).get(t);
  e === i.size && s === i.family || (t.font = `${e}px ${s}`, i.size = e, i.family = s);
}, fb = function() {
  if (n(this, nr) !== null)
    return;
  const t = document.createElement("div");
  t.style.opacity = 0, t.style.lineHeight = 1, t.style.fontSize = "1px", t.style.position = "absolute", t.textContent = "X", document.body.append(t), g(this, nr, t.getBoundingClientRect().height), t.remove();
}, pb = function(t, e, s) {
  const i = n(this, hl).get(t);
  if (i)
    return i;
  const r = w(this, Es, jd).call(this, s);
  r.canvas.width = r.canvas.height = Og, w(this, Es, Zf).call(this, r, Og, t);
  const a = r.measureText(""), o = a.fontBoundingBoxAscent, l = Math.abs(a.fontBoundingBoxDescent);
  r.canvas.width = r.canvas.height = 0;
  let h = 0.8;
  return o ? h = o / (o + l) : (ge.platform.isFirefox && J("Enable the `dom.textMetrics.fontBoundingBox.enabled` preference in `about:config` to improve TextLayer rendering."), e.ascent ? h = e.ascent : e.descent && (h = 1 + e.descent)), n(this, hl).set(t, h), h;
}, y(Vt, Es), y(Vt, hl, /* @__PURE__ */ new Map()), y(Vt, ba, /* @__PURE__ */ new Map()), y(Vt, Pc, /* @__PURE__ */ new WeakMap()), y(Vt, nr, null), y(Vt, cl, /* @__PURE__ */ new Set()), Vt);
const Dw = 100;
function Zp(c = {}) {
  typeof c == "string" || c instanceof URL ? c = {
    url: c
  } : (c instanceof ArrayBuffer || ArrayBuffer.isView(c)) && (c = {
    data: c
  });
  const t = new Jf(), {
    docId: e
  } = t, s = c.url ? H0(c.url) : null, i = c.data ? U0(c.data) : null, r = c.httpHeaders || null, a = c.withCredentials === !0, o = c.password ?? null, l = c.range instanceof Jp ? c.range : null, h = Number.isInteger(c.rangeChunkSize) && c.rangeChunkSize > 0 ? c.rangeChunkSize : 2 ** 16;
  let d = c.worker instanceof Xl ? c.worker : null;
  const u = c.verbosity, p = typeof c.docBaseUrl == "string" && !bd(c.docBaseUrl) ? c.docBaseUrl : null, b = Td(c.cMapUrl), S = c.cMapPacked !== !1, v = c.CMapReaderFactory || (Ue ? X0 : xg), E = Td(c.iccUrl), x = Td(c.standardFontDataUrl), T = c.StandardFontDataFactory || (Ue ? Y0 : Eg), _ = Td(c.wasmUrl), f = c.WasmFactory || (Ue ? K0 : _g), m = c.stopAtErrors !== !0, A = Number.isInteger(c.maxImageSize) && c.maxImageSize > -1 ? c.maxImageSize : -1, C = c.isEvalSupported !== !1, P = typeof c.isOffscreenCanvasSupported == "boolean" ? c.isOffscreenCanvasSupported : !Ue, R = typeof c.isImageDecoderSupported == "boolean" ? c.isImageDecoderSupported : !Ue && (ge.platform.isFirefox || !globalThis.chrome), L = Number.isInteger(c.canvasMaxAreaInBytes) ? c.canvasMaxAreaInBytes : -1, D = typeof c.disableFontFace == "boolean" ? c.disableFontFace : Ue, F = c.fontExtraProperties === !0, U = c.enableXfa === !0, O = c.ownerDocument || globalThis.document, X = c.disableRange === !0, k = c.disableStream === !0, I = c.disableAutoFetch === !0, B = c.pdfBug === !0, q = c.CanvasFactory || (Ue ? q0 : W0), ot = c.FilterFactory || (Ue ? V0 : j0), Pt = c.enableHWA === !0, H = c.useWasm !== !1, K = l ? l.length : c.length ?? NaN, rt = typeof c.useSystemFonts == "boolean" ? c.useSystemFonts : !Ue && !D, ht = typeof c.useWorkerFetch == "boolean" ? c.useWorkerFetch : !!(v === xg && T === Eg && f === _g && b && x && _ && ih(b, document.baseURI) && ih(x, document.baseURI) && ih(_, document.baseURI)), Xt = null;
  v0(u);
  const ct = {
    canvasFactory: new q({
      ownerDocument: O,
      enableHWA: Pt
    }),
    filterFactory: new ot({
      docId: e,
      ownerDocument: O
    }),
    cMapReaderFactory: ht ? null : new v({
      baseUrl: b,
      isCompressed: S
    }),
    standardFontDataFactory: ht ? null : new T({
      baseUrl: x
    }),
    wasmFactory: ht ? null : new f({
      baseUrl: _
    })
  };
  d || (d = Xl.create({
    verbosity: u,
    port: si.workerPort
  }), t._worker = d);
  const je = {
    docId: e,
    apiVersion: "5.4.296",
    data: i,
    password: o,
    disableAutoFetch: I,
    rangeChunkSize: h,
    length: K,
    docBaseUrl: p,
    enableXfa: U,
    evaluatorOptions: {
      maxImageSize: A,
      disableFontFace: D,
      ignoreErrors: m,
      isEvalSupported: C,
      isOffscreenCanvasSupported: P,
      isImageDecoderSupported: R,
      canvasMaxAreaInBytes: L,
      fontExtraProperties: F,
      useSystemFonts: rt,
      useWasm: H,
      useWorkerFetch: ht,
      cMapUrl: b,
      iccUrl: E,
      standardFontDataUrl: x,
      wasmUrl: _
    }
  }, oi = {
    ownerDocument: O,
    pdfBug: B,
    styleElement: Xt,
    loadingParams: {
      disableAutoFetch: I,
      enableXfa: U
    }
  };
  return d.promise.then(function() {
    if (t.destroyed)
      throw new Error("Loading aborted");
    if (d.destroyed)
      throw new Error("Worker was destroyed");
    const Bi = d.messageHandler.sendWithPromise("GetDocRequest", je, i ? [i.buffer] : null);
    let Fe;
    if (l)
      Fe = new pw(l, {
        disableRange: X,
        disableStream: k
      });
    else if (!i) {
      if (!s)
        throw new Error("getDocument - no `url` parameter provided.");
      const Lt = ih(s) ? yw : Ue ? Pw : xw;
      Fe = new Lt({
        url: s,
        length: K,
        httpHeaders: r,
        withCredentials: a,
        rangeChunkSize: h,
        disableRange: X,
        disableStream: k
      });
    }
    return Bi.then((Lt) => {
      if (t.destroyed)
        throw new Error("Loading aborted");
      if (d.destroyed)
        throw new Error("Worker was destroyed");
      const It = new hh(e, Lt, d.port), se = new Fw(It, t, Fe, oi, ct, Pt);
      t._transport = se, It.send("Ready", null);
    });
  }).catch(t._capability.reject), t;
}
var Iu;
const Fu = class Fu {
  constructor() {
    N(this, "_capability", Promise.withResolvers());
    N(this, "_transport", null);
    N(this, "_worker", null);
    N(this, "docId", `d${ie(Fu, Iu)._++}`);
    N(this, "destroyed", !1);
    N(this, "onPassword", null);
    N(this, "onProgress", null);
  }
  get promise() {
    return this._capability.promise;
  }
  async destroy() {
    var t, e, s, i;
    this.destroyed = !0;
    try {
      (t = this._worker) != null && t.port && (this._worker._pendingDestroy = !0), await ((e = this._transport) == null ? void 0 : e.destroy());
    } catch (r) {
      throw (s = this._worker) != null && s.port && delete this._worker._pendingDestroy, r;
    }
    this._transport = null, (i = this._worker) == null || i.destroy(), this._worker = null;
  }
  async getData() {
    return this._transport.getData();
  }
};
Iu = new WeakMap(), y(Fu, Iu, 0);
let Jf = Fu;
var ya, Rc, kc, Lc, Dc, Zg;
let Jp = (Zg = class {
  constructor(t, e, s = !1, i = null) {
    y(this, ya, Promise.withResolvers());
    y(this, Rc, []);
    y(this, kc, []);
    y(this, Lc, []);
    y(this, Dc, []);
    this.length = t, this.initialData = e, this.progressiveDone = s, this.contentDispositionFilename = i;
  }
  addRangeListener(t) {
    n(this, Dc).push(t);
  }
  addProgressListener(t) {
    n(this, Lc).push(t);
  }
  addProgressiveReadListener(t) {
    n(this, kc).push(t);
  }
  addProgressiveDoneListener(t) {
    n(this, Rc).push(t);
  }
  onDataRange(t, e) {
    for (const s of n(this, Dc))
      s(t, e);
  }
  onDataProgress(t, e) {
    n(this, ya).promise.then(() => {
      for (const s of n(this, Lc))
        s(t, e);
    });
  }
  onDataProgressiveRead(t) {
    n(this, ya).promise.then(() => {
      for (const e of n(this, kc))
        e(t);
    });
  }
  onDataProgressiveDone() {
    n(this, ya).promise.then(() => {
      for (const t of n(this, Rc))
        t();
    });
  }
  transportReady() {
    n(this, ya).resolve();
  }
  requestDataRange(t, e) {
    Tt("Abstract method PDFDataRangeTransport.requestDataRange");
  }
  abort() {
  }
}, ya = new WeakMap(), Rc = new WeakMap(), kc = new WeakMap(), Lc = new WeakMap(), Dc = new WeakMap(), Zg);
class Mw {
  constructor(t, e) {
    this._pdfInfo = t, this._transport = e;
  }
  get annotationStorage() {
    return this._transport.annotationStorage;
  }
  get canvasFactory() {
    return this._transport.canvasFactory;
  }
  get filterFactory() {
    return this._transport.filterFactory;
  }
  get numPages() {
    return this._pdfInfo.numPages;
  }
  get fingerprints() {
    return this._pdfInfo.fingerprints;
  }
  get isPureXfa() {
    return et(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  get allXfaHtml() {
    return this._transport._htmlForXfa;
  }
  getPage(t) {
    return this._transport.getPage(t);
  }
  getPageIndex(t) {
    return this._transport.getPageIndex(t);
  }
  getDestinations() {
    return this._transport.getDestinations();
  }
  getDestination(t) {
    return this._transport.getDestination(t);
  }
  getPageLabels() {
    return this._transport.getPageLabels();
  }
  getPageLayout() {
    return this._transport.getPageLayout();
  }
  getPageMode() {
    return this._transport.getPageMode();
  }
  getViewerPreferences() {
    return this._transport.getViewerPreferences();
  }
  getOpenAction() {
    return this._transport.getOpenAction();
  }
  getAttachments() {
    return this._transport.getAttachments();
  }
  getAnnotationsByType(t, e) {
    return this._transport.getAnnotationsByType(t, e);
  }
  getJSActions() {
    return this._transport.getDocJSActions();
  }
  getOutline() {
    return this._transport.getOutline();
  }
  getOptionalContentConfig({
    intent: t = "display"
  } = {}) {
    const {
      renderingIntent: e
    } = this._transport.getRenderingIntent(t);
    return this._transport.getOptionalContentConfig(e);
  }
  getPermissions() {
    return this._transport.getPermissions();
  }
  getMetadata() {
    return this._transport.getMetadata();
  }
  getMarkInfo() {
    return this._transport.getMarkInfo();
  }
  getData() {
    return this._transport.getData();
  }
  saveDocument() {
    return this._transport.saveDocument();
  }
  getDownloadInfo() {
    return this._transport.downloadInfoCapability.promise;
  }
  cleanup(t = !1) {
    return this._transport.startCleanup(t || this.isPureXfa);
  }
  destroy() {
    return this.loadingTask.destroy();
  }
  cachedPageNumber(t) {
    return this._transport.cachedPageNumber(t);
  }
  get loadingParams() {
    return this._transport.loadingParams;
  }
  get loadingTask() {
    return this._transport.loadingTask;
  }
  getFieldObjects() {
    return this._transport.getFieldObjects();
  }
  hasJSActions() {
    return this._transport.hasJSActions();
  }
  getCalculationOrderIds() {
    return this._transport.getCalculationOrderIds();
  }
}
var hn, wa, mh;
class Iw {
  constructor(t, e, s, i = !1) {
    y(this, wa);
    y(this, hn, !1);
    this._pageIndex = t, this._pageInfo = e, this._transport = s, this._stats = i ? new mg() : null, this._pdfBug = i, this.commonObjs = s.commonObjs, this.objs = new cb(), this._intentStates = /* @__PURE__ */ new Map(), this.destroyed = !1, this.recordedBBoxes = null;
  }
  get pageNumber() {
    return this._pageIndex + 1;
  }
  get rotate() {
    return this._pageInfo.rotate;
  }
  get ref() {
    return this._pageInfo.ref;
  }
  get userUnit() {
    return this._pageInfo.userUnit;
  }
  get view() {
    return this._pageInfo.view;
  }
  getViewport({
    scale: t,
    rotation: e = this.rotate,
    offsetX: s = 0,
    offsetY: i = 0,
    dontFlip: r = !1
  } = {}) {
    return new md({
      viewBox: this.view,
      userUnit: this.userUnit,
      scale: t,
      rotation: e,
      offsetX: s,
      offsetY: i,
      dontFlip: r
    });
  }
  getAnnotations({
    intent: t = "display"
  } = {}) {
    const {
      renderingIntent: e
    } = this._transport.getRenderingIntent(t);
    return this._transport.getAnnotations(this._pageIndex, e);
  }
  getJSActions() {
    return this._transport.getPageJSActions(this._pageIndex);
  }
  get filterFactory() {
    return this._transport.filterFactory;
  }
  get isPureXfa() {
    return et(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  async getXfa() {
    var t;
    return ((t = this._transport._htmlForXfa) == null ? void 0 : t.children[this._pageIndex]) || null;
  }
  render({
    canvasContext: t,
    canvas: e = t.canvas,
    viewport: s,
    intent: i = "display",
    annotationMode: r = Ii.ENABLE,
    transform: a = null,
    background: o = null,
    optionalContentConfigPromise: l = null,
    annotationCanvasMap: h = null,
    pageColors: d = null,
    printAnnotationStorage: u = null,
    isEditing: p = !1,
    recordOperations: b = !1,
    operationsFilter: S = null
  }) {
    var R, L, D;
    (R = this._stats) == null || R.time("Overall");
    const v = this._transport.getRenderingIntent(i, r, u, p), {
      renderingIntent: E,
      cacheKey: x
    } = v;
    g(this, hn, !1), l || (l = this._transport.getOptionalContentConfig(E));
    let T = this._intentStates.get(x);
    T || (T = /* @__PURE__ */ Object.create(null), this._intentStates.set(x, T)), T.streamReaderCancelTimeout && (clearTimeout(T.streamReaderCancelTimeout), T.streamReaderCancelTimeout = null);
    const _ = !!(E & vs.PRINT);
    T.displayReadyCapability || (T.displayReadyCapability = Promise.withResolvers(), T.operatorList = {
      fnArray: [],
      argsArray: [],
      lastChunk: !1,
      separateAnnots: null
    }, (L = this._stats) == null || L.time("Page Request"), this._pumpOperatorList(v));
    const f = !!(this._pdfBug && ((D = globalThis.StepperManager) != null && D.enabled)), m = !this.recordedBBoxes && (b || f), A = (F) => {
      var U, O;
      if (T.renderTasks.delete(C), m) {
        const X = (U = C.gfx) == null ? void 0 : U.dependencyTracker.take();
        X && (C.stepper && C.stepper.setOperatorBBoxes(X, C.gfx.dependencyTracker.takeDebugMetadata()), b && (this.recordedBBoxes = X));
      }
      _ && g(this, hn, !0), w(this, wa, mh).call(this), F ? (C.capability.reject(F), this._abortOperatorList({
        intentState: T,
        reason: F instanceof Error ? F : new Error(F)
      })) : C.capability.resolve(), this._stats && (this._stats.timeEnd("Rendering"), this._stats.timeEnd("Overall"), (O = globalThis.Stats) != null && O.enabled && globalThis.Stats.add(this.pageNumber, this._stats));
    }, C = new Qf({
      callback: A,
      params: {
        canvas: e,
        canvasContext: t,
        dependencyTracker: m ? new J0(e, T.operatorList.length, f) : null,
        viewport: s,
        transform: a,
        background: o
      },
      objs: this.objs,
      commonObjs: this.commonObjs,
      annotationCanvasMap: h,
      operatorList: T.operatorList,
      pageIndex: this._pageIndex,
      canvasFactory: this._transport.canvasFactory,
      filterFactory: this._transport.filterFactory,
      useRequestAnimationFrame: !_,
      pdfBug: this._pdfBug,
      pageColors: d,
      enableHWA: this._transport.enableHWA,
      operationsFilter: S
    });
    (T.renderTasks || (T.renderTasks = /* @__PURE__ */ new Set())).add(C);
    const P = C.task;
    return Promise.all([T.displayReadyCapability.promise, l]).then(([F, U]) => {
      var O;
      if (this.destroyed) {
        A();
        return;
      }
      if ((O = this._stats) == null || O.time("Rendering"), !(U.renderingIntent & E))
        throw new Error("Must use the same `intent`-argument when calling the `PDFPageProxy.render` and `PDFDocumentProxy.getOptionalContentConfig` methods.");
      C.initializeGraphics({
        transparency: F,
        optionalContentConfig: U
      }), C.operatorListChanged();
    }).catch(A), P;
  }
  getOperatorList({
    intent: t = "display",
    annotationMode: e = Ii.ENABLE,
    printAnnotationStorage: s = null,
    isEditing: i = !1
  } = {}) {
    var h;
    function r() {
      o.operatorList.lastChunk && (o.opListReadCapability.resolve(o.operatorList), o.renderTasks.delete(l));
    }
    const a = this._transport.getRenderingIntent(t, e, s, i, !0);
    let o = this._intentStates.get(a.cacheKey);
    o || (o = /* @__PURE__ */ Object.create(null), this._intentStates.set(a.cacheKey, o));
    let l;
    return o.opListReadCapability || (l = /* @__PURE__ */ Object.create(null), l.operatorListChanged = r, o.opListReadCapability = Promise.withResolvers(), (o.renderTasks || (o.renderTasks = /* @__PURE__ */ new Set())).add(l), o.operatorList = {
      fnArray: [],
      argsArray: [],
      lastChunk: !1,
      separateAnnots: null
    }, (h = this._stats) == null || h.time("Page Request"), this._pumpOperatorList(a)), o.opListReadCapability.promise;
  }
  streamTextContent({
    includeMarkedContent: t = !1,
    disableNormalization: e = !1
  } = {}) {
    return this._transport.messageHandler.sendWithStream("GetTextContent", {
      pageIndex: this._pageIndex,
      includeMarkedContent: t === !0,
      disableNormalization: e === !0
    }, {
      highWaterMark: 100,
      size(i) {
        return i.items.length;
      }
    });
  }
  getTextContent(t = {}) {
    if (this._transport._htmlForXfa)
      return this.getXfa().then((s) => Ph.textContent(s));
    const e = this.streamTextContent(t);
    return new Promise(function(s, i) {
      function r() {
        a.read().then(function({
          value: l,
          done: h
        }) {
          if (h) {
            s(o);
            return;
          }
          o.lang ?? (o.lang = l.lang), Object.assign(o.styles, l.styles), o.items.push(...l.items), r();
        }, i);
      }
      const a = e.getReader(), o = {
        items: [],
        styles: /* @__PURE__ */ Object.create(null),
        lang: null
      };
      r();
    });
  }
  getStructTree() {
    return this._transport.getStructTree(this._pageIndex);
  }
  _destroy() {
    this.destroyed = !0;
    const t = [];
    for (const e of this._intentStates.values())
      if (this._abortOperatorList({
        intentState: e,
        reason: new Error("Page was destroyed."),
        force: !0
      }), !e.opListReadCapability)
        for (const s of e.renderTasks)
          t.push(s.completed), s.cancel();
    return this.objs.clear(), g(this, hn, !1), Promise.all(t);
  }
  cleanup(t = !1) {
    g(this, hn, !0);
    const e = w(this, wa, mh).call(this);
    return t && e && this._stats && (this._stats = new mg()), e;
  }
  _startRenderPage(t, e) {
    var i, r;
    const s = this._intentStates.get(e);
    s && ((i = this._stats) == null || i.timeEnd("Page Request"), (r = s.displayReadyCapability) == null || r.resolve(t));
  }
  _renderPageChunk(t, e) {
    for (let s = 0, i = t.length; s < i; s++)
      e.operatorList.fnArray.push(t.fnArray[s]), e.operatorList.argsArray.push(t.argsArray[s]);
    e.operatorList.lastChunk = t.lastChunk, e.operatorList.separateAnnots = t.separateAnnots;
    for (const s of e.renderTasks)
      s.operatorListChanged();
    t.lastChunk && w(this, wa, mh).call(this);
  }
  _pumpOperatorList({
    renderingIntent: t,
    cacheKey: e,
    annotationStorageSerializable: s,
    modifiedIds: i
  }) {
    const {
      map: r,
      transfer: a
    } = s, l = this._transport.messageHandler.sendWithStream("GetOperatorList", {
      pageIndex: this._pageIndex,
      intent: t,
      cacheKey: e,
      annotationStorage: r,
      modifiedIds: i
    }, a).getReader(), h = this._intentStates.get(e);
    h.streamReader = l;
    const d = () => {
      l.read().then(({
        value: u,
        done: p
      }) => {
        if (p) {
          h.streamReader = null;
          return;
        }
        this._transport.destroyed || (this._renderPageChunk(u, h), d());
      }, (u) => {
        if (h.streamReader = null, !this._transport.destroyed) {
          if (h.operatorList) {
            h.operatorList.lastChunk = !0;
            for (const p of h.renderTasks)
              p.operatorListChanged();
            w(this, wa, mh).call(this);
          }
          if (h.displayReadyCapability)
            h.displayReadyCapability.reject(u);
          else if (h.opListReadCapability)
            h.opListReadCapability.reject(u);
          else
            throw u;
        }
      });
    };
    d();
  }
  _abortOperatorList({
    intentState: t,
    reason: e,
    force: s = !1
  }) {
    if (t.streamReader) {
      if (t.streamReaderCancelTimeout && (clearTimeout(t.streamReaderCancelTimeout), t.streamReaderCancelTimeout = null), !s) {
        if (t.renderTasks.size > 0)
          return;
        if (e instanceof Vu) {
          let i = Dw;
          e.extraDelay > 0 && e.extraDelay < 1e3 && (i += e.extraDelay), t.streamReaderCancelTimeout = setTimeout(() => {
            t.streamReaderCancelTimeout = null, this._abortOperatorList({
              intentState: t,
              reason: e,
              force: !0
            });
          }, i);
          return;
        }
      }
      if (t.streamReader.cancel(new Tn(e.message)).catch(() => {
      }), t.streamReader = null, !this._transport.destroyed) {
        for (const [i, r] of this._intentStates)
          if (r === t) {
            this._intentStates.delete(i);
            break;
          }
        this.cleanup();
      }
    }
  }
  get stats() {
    return this._stats;
  }
}
hn = new WeakMap(), wa = new WeakSet(), mh = function() {
  if (!n(this, hn) || this.destroyed)
    return !1;
  for (const {
    renderTasks: t,
    operatorList: e
  } of this._intentStates.values())
    if (t.size > 0 || !e.lastChunk)
      return !1;
  return this._intentStates.clear(), this.objs.clear(), g(this, hn, !1), !0;
};
var rr, Ys, cn, Aa, Nu, va, Sa, Ge, Vd, gb, mb, bh, dl, qd;
const Ft = class Ft {
  constructor({
    name: t = null,
    port: e = null,
    verbosity: s = S0()
  } = {}) {
    y(this, Ge);
    y(this, rr, Promise.withResolvers());
    y(this, Ys, null);
    y(this, cn, null);
    y(this, Aa, null);
    if (this.name = t, this.destroyed = !1, this.verbosity = s, e) {
      if (n(Ft, Sa).has(e))
        throw new Error("Cannot use more than one PDFWorker per port.");
      n(Ft, Sa).set(e, this), w(this, Ge, gb).call(this, e);
    } else
      w(this, Ge, mb).call(this);
  }
  get promise() {
    return n(this, rr).promise;
  }
  get port() {
    return n(this, cn);
  }
  get messageHandler() {
    return n(this, Ys);
  }
  destroy() {
    var t, e;
    this.destroyed = !0, (t = n(this, Aa)) == null || t.terminate(), g(this, Aa, null), n(Ft, Sa).delete(n(this, cn)), g(this, cn, null), (e = n(this, Ys)) == null || e.destroy(), g(this, Ys, null);
  }
  static create(t) {
    const e = n(this, Sa).get(t == null ? void 0 : t.port);
    if (e) {
      if (e._pendingDestroy)
        throw new Error("PDFWorker.create - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.");
      return e;
    }
    return new Ft(t);
  }
  static get workerSrc() {
    if (si.workerSrc)
      return si.workerSrc;
    throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
  }
  static get _setupFakeWorkerGlobal() {
    return et(this, "_setupFakeWorkerGlobal", (async () => n(this, dl, qd) ? n(this, dl, qd) : (await import(
      /*webpackIgnore: true*/
      /*@vite-ignore*/
      this.workerSrc
    )).WorkerMessageHandler)());
  }
};
rr = new WeakMap(), Ys = new WeakMap(), cn = new WeakMap(), Aa = new WeakMap(), Nu = new WeakMap(), va = new WeakMap(), Sa = new WeakMap(), Ge = new WeakSet(), Vd = function() {
  n(this, rr).resolve(), n(this, Ys).send("configure", {
    verbosity: this.verbosity
  });
}, gb = function(t) {
  g(this, cn, t), g(this, Ys, new hh("main", "worker", t)), n(this, Ys).on("ready", () => {
  }), w(this, Ge, Vd).call(this);
}, mb = function() {
  if (n(Ft, va) || n(Ft, dl, qd)) {
    w(this, Ge, bh).call(this);
    return;
  }
  let {
    workerSrc: t
  } = Ft;
  try {
    Ft._isSameOrigin(window.location, t) || (t = Ft._createCDNWrapper(new URL(t, window.location).href));
    const e = new Worker(t, {
      type: "module"
    }), s = new hh("main", "worker", e), i = () => {
      r.abort(), s.destroy(), e.terminate(), this.destroyed ? n(this, rr).reject(new Error("Worker was destroyed")) : w(this, Ge, bh).call(this);
    }, r = new AbortController();
    e.addEventListener("error", () => {
      n(this, Aa) || i();
    }, {
      signal: r.signal
    }), s.on("test", (o) => {
      if (r.abort(), this.destroyed || !o) {
        i();
        return;
      }
      g(this, Ys, s), g(this, cn, e), g(this, Aa, e), w(this, Ge, Vd).call(this);
    }), s.on("ready", (o) => {
      if (r.abort(), this.destroyed) {
        i();
        return;
      }
      try {
        a();
      } catch {
        w(this, Ge, bh).call(this);
      }
    });
    const a = () => {
      const o = new Uint8Array();
      s.send("test", o, [o.buffer]);
    };
    a();
    return;
  } catch {
    ju("The worker has been disabled.");
  }
  w(this, Ge, bh).call(this);
}, bh = function() {
  n(Ft, va) || (J("Setting up fake worker."), g(Ft, va, !0)), Ft._setupFakeWorkerGlobal.then((t) => {
    if (this.destroyed) {
      n(this, rr).reject(new Error("Worker was destroyed"));
      return;
    }
    const e = new G0();
    g(this, cn, e);
    const s = `fake${ie(Ft, Nu)._++}`, i = new hh(s + "_worker", s, e);
    t.setup(i, e), g(this, Ys, new hh(s, s + "_worker", e)), w(this, Ge, Vd).call(this);
  }).catch((t) => {
    n(this, rr).reject(new Error(`Setting up fake worker failed: "${t.message}".`));
  });
}, dl = new WeakSet(), qd = function() {
  var t;
  try {
    return ((t = globalThis.pdfjsWorker) == null ? void 0 : t.WorkerMessageHandler) || null;
  } catch {
    return null;
  }
}, y(Ft, dl), y(Ft, Nu, 0), y(Ft, va, !1), y(Ft, Sa, /* @__PURE__ */ new WeakMap()), Ue && (g(Ft, va, !0), si.workerSrc || (si.workerSrc = "./pdf.worker.mjs")), Ft._isSameOrigin = (t, e) => {
  const s = URL.parse(t);
  if (!(s != null && s.origin) || s.origin === "null")
    return !1;
  const i = new URL(e, s);
  return s.origin === i.origin;
}, Ft._createCDNWrapper = (t) => {
  const e = `await import("${t}");`;
  return URL.createObjectURL(new Blob([e], {
    type: "text/javascript"
  }));
}, Ft.fromPort = (t) => {
  if (L0("`PDFWorker.fromPort` - please use `PDFWorker.create` instead."), !(t != null && t.port))
    throw new Error("PDFWorker.fromPort - invalid method signature.");
  return Ft.create(t);
};
let Xl = Ft;
var dn, Ei, ul, fl, un, xa, yh;
class Fw {
  constructor(t, e, s, i, r, a) {
    y(this, xa);
    y(this, dn, /* @__PURE__ */ new Map());
    y(this, Ei, /* @__PURE__ */ new Map());
    y(this, ul, /* @__PURE__ */ new Map());
    y(this, fl, /* @__PURE__ */ new Map());
    y(this, un, null);
    this.messageHandler = t, this.loadingTask = e, this.commonObjs = new cb(), this.fontLoader = new B0({
      ownerDocument: i.ownerDocument,
      styleElement: i.styleElement
    }), this.loadingParams = i.loadingParams, this._params = i, this.canvasFactory = r.canvasFactory, this.filterFactory = r.filterFactory, this.cMapReaderFactory = r.cMapReaderFactory, this.standardFontDataFactory = r.standardFontDataFactory, this.wasmFactory = r.wasmFactory, this.destroyed = !1, this.destroyCapability = null, this._networkStream = s, this._fullReader = null, this._lastProgress = null, this.downloadInfoCapability = Promise.withResolvers(), this.enableHWA = a, this.setupMessageHandler();
  }
  get annotationStorage() {
    return et(this, "annotationStorage", new Xp());
  }
  getRenderingIntent(t, e = Ii.ENABLE, s = null, i = !1, r = !1) {
    let a = vs.DISPLAY, o = Nf;
    switch (t) {
      case "any":
        a = vs.ANY;
        break;
      case "display":
        break;
      case "print":
        a = vs.PRINT;
        break;
      default:
        J(`getRenderingIntent - invalid intent: ${t}`);
    }
    const l = a & vs.PRINT && s instanceof qm ? s : this.annotationStorage;
    switch (e) {
      case Ii.DISABLE:
        a += vs.ANNOTATIONS_DISABLE;
        break;
      case Ii.ENABLE:
        break;
      case Ii.ENABLE_FORMS:
        a += vs.ANNOTATIONS_FORMS;
        break;
      case Ii.ENABLE_STORAGE:
        a += vs.ANNOTATIONS_STORAGE, o = l.serializable;
        break;
      default:
        J(`getRenderingIntent - invalid annotationMode: ${e}`);
    }
    i && (a += vs.IS_EDITING), r && (a += vs.OPLIST);
    const {
      ids: h,
      hash: d
    } = l.modifiedIds, u = [a, o.hash, d];
    return {
      renderingIntent: a,
      cacheKey: u.join("_"),
      annotationStorageSerializable: o,
      modifiedIds: h
    };
  }
  destroy() {
    var s;
    if (this.destroyCapability)
      return this.destroyCapability.promise;
    this.destroyed = !0, this.destroyCapability = Promise.withResolvers(), (s = n(this, un)) == null || s.reject(new Error("Worker was destroyed during onPassword callback"));
    const t = [];
    for (const i of n(this, Ei).values())
      t.push(i._destroy());
    n(this, Ei).clear(), n(this, ul).clear(), n(this, fl).clear(), this.hasOwnProperty("annotationStorage") && this.annotationStorage.resetModified();
    const e = this.messageHandler.sendWithPromise("Terminate", null);
    return t.push(e), Promise.all(t).then(() => {
      var i, r;
      this.commonObjs.clear(), this.fontLoader.clear(), n(this, dn).clear(), this.filterFactory.destroy(), Lh.cleanup(), (i = this._networkStream) == null || i.cancelAllRequests(new Tn("Worker was terminated.")), (r = this.messageHandler) == null || r.destroy(), this.messageHandler = null, this.destroyCapability.resolve();
    }, this.destroyCapability.reject), this.destroyCapability.promise;
  }
  setupMessageHandler() {
    const {
      messageHandler: t,
      loadingTask: e
    } = this;
    t.on("GetReader", (s, i) => {
      lt(this._networkStream, "GetReader - no `IPDFStream` instance available."), this._fullReader = this._networkStream.getFullReader(), this._fullReader.onProgress = (r) => {
        this._lastProgress = {
          loaded: r.loaded,
          total: r.total
        };
      }, i.onPull = () => {
        this._fullReader.read().then(function({
          value: r,
          done: a
        }) {
          if (a) {
            i.close();
            return;
          }
          lt(r instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer."), i.enqueue(new Uint8Array(r), 1, [r]);
        }).catch((r) => {
          i.error(r);
        });
      }, i.onCancel = (r) => {
        this._fullReader.cancel(r), i.ready.catch((a) => {
          if (!this.destroyed)
            throw a;
        });
      };
    }), t.on("ReaderHeadersReady", async (s) => {
      var o;
      await this._fullReader.headersReady;
      const {
        isStreamingSupported: i,
        isRangeSupported: r,
        contentLength: a
      } = this._fullReader;
      return (!i || !r) && (this._lastProgress && ((o = e.onProgress) == null || o.call(e, this._lastProgress)), this._fullReader.onProgress = (l) => {
        var h;
        (h = e.onProgress) == null || h.call(e, {
          loaded: l.loaded,
          total: l.total
        });
      }), {
        isStreamingSupported: i,
        isRangeSupported: r,
        contentLength: a
      };
    }), t.on("GetRangeReader", (s, i) => {
      lt(this._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
      const r = this._networkStream.getRangeReader(s.begin, s.end);
      if (!r) {
        i.close();
        return;
      }
      i.onPull = () => {
        r.read().then(function({
          value: a,
          done: o
        }) {
          if (o) {
            i.close();
            return;
          }
          lt(a instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer."), i.enqueue(new Uint8Array(a), 1, [a]);
        }).catch((a) => {
          i.error(a);
        });
      }, i.onCancel = (a) => {
        r.cancel(a), i.ready.catch((o) => {
          if (!this.destroyed)
            throw o;
        });
      };
    }), t.on("GetDoc", ({
      pdfInfo: s
    }) => {
      this._numPages = s.numPages, this._htmlForXfa = s.htmlForXfa, delete s.htmlForXfa, e._capability.resolve(new Mw(s, this));
    }), t.on("DocException", (s) => {
      e._capability.reject(Ve(s));
    }), t.on("PasswordRequest", (s) => {
      g(this, un, Promise.withResolvers());
      try {
        if (!e.onPassword)
          throw Ve(s);
        const i = (r) => {
          r instanceof Error ? n(this, un).reject(r) : n(this, un).resolve({
            password: r
          });
        };
        e.onPassword(i, s.code);
      } catch (i) {
        n(this, un).reject(i);
      }
      return n(this, un).promise;
    }), t.on("DataLoaded", (s) => {
      var i;
      (i = e.onProgress) == null || i.call(e, {
        loaded: s.length,
        total: s.length
      }), this.downloadInfoCapability.resolve(s);
    }), t.on("StartRenderPage", (s) => {
      if (this.destroyed)
        return;
      n(this, Ei).get(s.pageIndex)._startRenderPage(s.transparency, s.cacheKey);
    }), t.on("commonobj", ([s, i, r]) => {
      var a;
      if (this.destroyed || this.commonObjs.has(s))
        return null;
      switch (i) {
        case "Font":
          if ("error" in r) {
            const u = r.error;
            J(`Error during font loading: ${u}`), this.commonObjs.resolve(s, u);
            break;
          }
          const o = new qf(r), l = this._params.pdfBug && ((a = globalThis.FontInspector) != null && a.enabled) ? (u, p) => globalThis.FontInspector.fontAdded(u, p) : null, h = new $0(o, l, r.extra, r.charProcOperatorList);
          this.fontLoader.bind(h).catch(() => t.sendWithPromise("FontFallback", {
            id: s
          })).finally(() => {
            !h.fontExtraProperties && h.data && h.clearData(), this.commonObjs.resolve(s, h);
          });
          break;
        case "CopyLocalImage":
          const {
            imageRef: d
          } = r;
          lt(d, "The imageRef must be defined.");
          for (const u of n(this, Ei).values())
            for (const [, p] of u.objs)
              if ((p == null ? void 0 : p.ref) === d)
                return p.dataLen ? (this.commonObjs.resolve(s, structuredClone(p)), p.dataLen) : null;
          break;
        case "FontPath":
        case "Image":
        case "Pattern":
          this.commonObjs.resolve(s, r);
          break;
        default:
          throw new Error(`Got unknown common object type ${i}`);
      }
      return null;
    }), t.on("obj", ([s, i, r, a]) => {
      var l;
      if (this.destroyed)
        return;
      const o = n(this, Ei).get(i);
      if (!o.objs.has(s)) {
        if (o._intentStates.size === 0) {
          (l = a == null ? void 0 : a.bitmap) == null || l.close();
          return;
        }
        switch (r) {
          case "Image":
          case "Pattern":
            o.objs.resolve(s, a);
            break;
          default:
            throw new Error(`Got unknown object type ${r}`);
        }
      }
    }), t.on("DocProgress", (s) => {
      var i;
      this.destroyed || (i = e.onProgress) == null || i.call(e, {
        loaded: s.loaded,
        total: s.total
      });
    }), t.on("FetchBinaryData", async (s) => {
      if (this.destroyed)
        throw new Error("Worker was destroyed.");
      const i = this[s.type];
      if (!i)
        throw new Error(`${s.type} not initialized, see the \`useWorkerFetch\` parameter.`);
      return i.fetch(s);
    });
  }
  getData() {
    return this.messageHandler.sendWithPromise("GetData", null);
  }
  saveDocument() {
    var s;
    this.annotationStorage.size <= 0 && J("saveDocument called while `annotationStorage` is empty, please use the getData-method instead.");
    const {
      map: t,
      transfer: e
    } = this.annotationStorage.serializable;
    return this.messageHandler.sendWithPromise("SaveDocument", {
      isPureXfa: !!this._htmlForXfa,
      numPages: this._numPages,
      annotationStorage: t,
      filename: ((s = this._fullReader) == null ? void 0 : s.filename) ?? null
    }, e).finally(() => {
      this.annotationStorage.resetModified();
    });
  }
  getPage(t) {
    if (!Number.isInteger(t) || t <= 0 || t > this._numPages)
      return Promise.reject(new Error("Invalid page request."));
    const e = t - 1, s = n(this, ul).get(e);
    if (s)
      return s;
    const i = this.messageHandler.sendWithPromise("GetPage", {
      pageIndex: e
    }).then((r) => {
      if (this.destroyed)
        throw new Error("Transport destroyed");
      r.refStr && n(this, fl).set(r.refStr, t);
      const a = new Iw(e, r, this, this._params.pdfBug);
      return n(this, Ei).set(e, a), a;
    });
    return n(this, ul).set(e, i), i;
  }
  getPageIndex(t) {
    return Of(t) ? this.messageHandler.sendWithPromise("GetPageIndex", {
      num: t.num,
      gen: t.gen
    }) : Promise.reject(new Error("Invalid pageIndex request."));
  }
  getAnnotations(t, e) {
    return this.messageHandler.sendWithPromise("GetAnnotations", {
      pageIndex: t,
      intent: e
    });
  }
  getFieldObjects() {
    return w(this, xa, yh).call(this, "GetFieldObjects");
  }
  hasJSActions() {
    return w(this, xa, yh).call(this, "HasJSActions");
  }
  getCalculationOrderIds() {
    return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
  }
  getDestinations() {
    return this.messageHandler.sendWithPromise("GetDestinations", null);
  }
  getDestination(t) {
    return typeof t != "string" ? Promise.reject(new Error("Invalid destination request.")) : this.messageHandler.sendWithPromise("GetDestination", {
      id: t
    });
  }
  getPageLabels() {
    return this.messageHandler.sendWithPromise("GetPageLabels", null);
  }
  getPageLayout() {
    return this.messageHandler.sendWithPromise("GetPageLayout", null);
  }
  getPageMode() {
    return this.messageHandler.sendWithPromise("GetPageMode", null);
  }
  getViewerPreferences() {
    return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
  }
  getOpenAction() {
    return this.messageHandler.sendWithPromise("GetOpenAction", null);
  }
  getAttachments() {
    return this.messageHandler.sendWithPromise("GetAttachments", null);
  }
  getAnnotationsByType(t, e) {
    return this.messageHandler.sendWithPromise("GetAnnotationsByType", {
      types: t,
      pageIndexesToSkip: e
    });
  }
  getDocJSActions() {
    return w(this, xa, yh).call(this, "GetDocJSActions");
  }
  getPageJSActions(t) {
    return this.messageHandler.sendWithPromise("GetPageJSActions", {
      pageIndex: t
    });
  }
  getStructTree(t) {
    return this.messageHandler.sendWithPromise("GetStructTree", {
      pageIndex: t
    });
  }
  getOutline() {
    return this.messageHandler.sendWithPromise("GetOutline", null);
  }
  getOptionalContentConfig(t) {
    return w(this, xa, yh).call(this, "GetOptionalContentConfig").then((e) => new fw(e, t));
  }
  getPermissions() {
    return this.messageHandler.sendWithPromise("GetPermissions", null);
  }
  getMetadata() {
    const t = "GetMetadata", e = n(this, dn).get(t);
    if (e)
      return e;
    const s = this.messageHandler.sendWithPromise(t, null).then((i) => {
      var r, a;
      return {
        info: i[0],
        metadata: i[1] ? new dw(i[1]) : null,
        contentDispositionFilename: ((r = this._fullReader) == null ? void 0 : r.filename) ?? null,
        contentLength: ((a = this._fullReader) == null ? void 0 : a.contentLength) ?? null
      };
    });
    return n(this, dn).set(t, s), s;
  }
  getMarkInfo() {
    return this.messageHandler.sendWithPromise("GetMarkInfo", null);
  }
  async startCleanup(t = !1) {
    if (!this.destroyed) {
      await this.messageHandler.sendWithPromise("Cleanup", null);
      for (const e of n(this, Ei).values())
        if (!e.cleanup())
          throw new Error(`startCleanup: Page ${e.pageNumber} is currently rendering.`);
      this.commonObjs.clear(), t || this.fontLoader.clear(), n(this, dn).clear(), this.filterFactory.destroy(!0), Lh.cleanup();
    }
  }
  cachedPageNumber(t) {
    if (!Of(t))
      return null;
    const e = t.gen === 0 ? `${t.num}R` : `${t.num}R${t.gen}`;
    return n(this, fl).get(e) ?? null;
  }
}
dn = new WeakMap(), Ei = new WeakMap(), ul = new WeakMap(), fl = new WeakMap(), un = new WeakMap(), xa = new WeakSet(), yh = function(t, e = null) {
  const s = n(this, dn).get(t);
  if (s)
    return s;
  const i = this.messageHandler.sendWithPromise(t, e);
  return n(this, dn).set(t, i), i;
};
var ar;
class Nw {
  constructor(t) {
    y(this, ar, null);
    N(this, "onContinue", null);
    N(this, "onError", null);
    g(this, ar, t);
  }
  get promise() {
    return n(this, ar).capability.promise;
  }
  cancel(t = 0) {
    n(this, ar).cancel(null, t);
  }
  get separateAnnots() {
    const {
      separateAnnots: t
    } = n(this, ar).operatorList;
    if (!t)
      return !1;
    const {
      annotationCanvasMap: e
    } = n(this, ar);
    return t.form || t.canvas && (e == null ? void 0 : e.size) > 0;
  }
}
ar = new WeakMap();
var or, Ea;
const Br = class Br {
  constructor({
    callback: t,
    params: e,
    objs: s,
    commonObjs: i,
    annotationCanvasMap: r,
    operatorList: a,
    pageIndex: o,
    canvasFactory: l,
    filterFactory: h,
    useRequestAnimationFrame: d = !1,
    pdfBug: u = !1,
    pageColors: p = null,
    enableHWA: b = !1,
    operationsFilter: S = null
  }) {
    y(this, or, null);
    this.callback = t, this.params = e, this.objs = s, this.commonObjs = i, this.annotationCanvasMap = r, this.operatorListIdx = null, this.operatorList = a, this._pageIndex = o, this.canvasFactory = l, this.filterFactory = h, this._pdfBug = u, this.pageColors = p, this.running = !1, this.graphicsReadyCallback = null, this.graphicsReady = !1, this._useRequestAnimationFrame = d === !0 && typeof window < "u", this.cancelled = !1, this.capability = Promise.withResolvers(), this.task = new Nw(this), this._cancelBound = this.cancel.bind(this), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this), this._canvas = e.canvas, this._canvasContext = e.canvas ? null : e.canvasContext, this._enableHWA = b, this._dependencyTracker = e.dependencyTracker, this._operationsFilter = S;
  }
  get completed() {
    return this.capability.promise.catch(function() {
    });
  }
  initializeGraphics({
    transparency: t = !1,
    optionalContentConfig: e
  }) {
    var l, h;
    if (this.cancelled)
      return;
    if (this._canvas) {
      if (n(Br, Ea).has(this._canvas))
        throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
      n(Br, Ea).add(this._canvas);
    }
    this._pdfBug && ((l = globalThis.StepperManager) != null && l.enabled) && (this.stepper = globalThis.StepperManager.create(this._pageIndex), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
    const {
      viewport: s,
      transform: i,
      background: r,
      dependencyTracker: a
    } = this.params, o = this._canvasContext || this._canvas.getContext("2d", {
      alpha: !1,
      willReadFrequently: !this._enableHWA
    });
    this.gfx = new yo(o, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
      optionalContentConfig: e
    }, this.annotationCanvasMap, this.pageColors, a), this.gfx.beginDrawing({
      transform: i,
      viewport: s,
      transparency: t,
      background: r
    }), this.operatorListIdx = 0, this.graphicsReady = !0, (h = this.graphicsReadyCallback) == null || h.call(this);
  }
  cancel(t = null, e = 0) {
    var s, i, r;
    this.running = !1, this.cancelled = !0, (s = this.gfx) == null || s.endDrawing(), n(this, or) && (window.cancelAnimationFrame(n(this, or)), g(this, or, null)), n(Br, Ea).delete(this._canvas), t || (t = new Vu(`Rendering cancelled, page ${this._pageIndex + 1}`, e)), this.callback(t), (r = (i = this.task).onError) == null || r.call(i, t);
  }
  operatorListChanged() {
    var t, e;
    if (!this.graphicsReady) {
      this.graphicsReadyCallback || (this.graphicsReadyCallback = this._continueBound);
      return;
    }
    (t = this.gfx.dependencyTracker) == null || t.growOperationsCount(this.operatorList.fnArray.length), (e = this.stepper) == null || e.updateOperatorList(this.operatorList), !this.running && this._continue();
  }
  _continue() {
    this.running = !0, !this.cancelled && (this.task.onContinue ? this.task.onContinue(this._scheduleNextBound) : this._scheduleNext());
  }
  _scheduleNext() {
    this._useRequestAnimationFrame ? g(this, or, window.requestAnimationFrame(() => {
      g(this, or, null), this._nextBound().catch(this._cancelBound);
    })) : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
  }
  async _next() {
    this.cancelled || (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper, this._operationsFilter), this.operatorListIdx === this.operatorList.argsArray.length && (this.running = !1, this.operatorList.lastChunk && (this.gfx.endDrawing(), n(Br, Ea).delete(this._canvas), this.callback())));
  }
};
or = new WeakMap(), Ea = new WeakMap(), y(Br, Ea, /* @__PURE__ */ new WeakSet());
let Qf = Br;
const bb = "5.4.296", yb = "f56dc8601";
var hs, _a, pl, ae, Mc, gl, fn, Ic, lr, Ks, Fc, St, tp, ep, sp, Ir, wb, Mn;
const qe = class qe {
  constructor({
    editor: t = null,
    uiManager: e = null
  }) {
    y(this, St);
    y(this, hs, null);
    y(this, _a, null);
    y(this, pl);
    y(this, ae, null);
    y(this, Mc, !1);
    y(this, gl, !1);
    y(this, fn, null);
    y(this, Ic);
    y(this, lr, null);
    y(this, Ks, null);
    var s, i;
    t ? (g(this, gl, !1), g(this, fn, t)) : g(this, gl, !0), g(this, Ks, (t == null ? void 0 : t._uiManager) || e), g(this, Ic, n(this, Ks)._eventBus), g(this, pl, ((s = t == null ? void 0 : t.color) == null ? void 0 : s.toUpperCase()) || ((i = n(this, Ks)) == null ? void 0 : i.highlightColors.values().next().value) || "#FFFF98"), n(qe, Fc) || g(qe, Fc, Object.freeze({
      blue: "pdfjs-editor-colorpicker-blue",
      green: "pdfjs-editor-colorpicker-green",
      pink: "pdfjs-editor-colorpicker-pink",
      red: "pdfjs-editor-colorpicker-red",
      yellow: "pdfjs-editor-colorpicker-yellow"
    }));
  }
  static get _keyboardManager() {
    return et(this, "_keyboardManager", new yd([[["Escape", "mac+Escape"], qe.prototype._hideDropdownFromKeyboard], [[" ", "mac+ "], qe.prototype._colorSelectFromKeyboard], [["ArrowDown", "ArrowRight", "mac+ArrowDown", "mac+ArrowRight"], qe.prototype._moveToNext], [["ArrowUp", "ArrowLeft", "mac+ArrowUp", "mac+ArrowLeft"], qe.prototype._moveToPrevious], [["Home", "mac+Home"], qe.prototype._moveToBeginning], [["End", "mac+End"], qe.prototype._moveToEnd]]));
  }
  renderButton() {
    const t = g(this, hs, document.createElement("button"));
    t.className = "colorPicker", t.tabIndex = "0", t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-button"), t.ariaHasPopup = "true", n(this, fn) && (t.ariaControls = `${n(this, fn).id}_colorpicker_dropdown`);
    const e = n(this, Ks)._signal;
    t.addEventListener("click", w(this, St, Ir).bind(this), {
      signal: e
    }), t.addEventListener("keydown", w(this, St, sp).bind(this), {
      signal: e
    });
    const s = g(this, _a, document.createElement("span"));
    return s.className = "swatch", s.ariaHidden = "true", s.style.backgroundColor = n(this, pl), t.append(s), t;
  }
  renderMainDropdown() {
    const t = g(this, ae, w(this, St, tp).call(this));
    return t.ariaOrientation = "horizontal", t.ariaLabelledBy = "highlightColorPickerLabel", t;
  }
  _colorSelectFromKeyboard(t) {
    if (t.target === n(this, hs)) {
      w(this, St, Ir).call(this, t);
      return;
    }
    const e = t.target.getAttribute("data-color");
    e && w(this, St, ep).call(this, e, t);
  }
  _moveToNext(t) {
    var e, s;
    if (!n(this, St, Mn)) {
      w(this, St, Ir).call(this, t);
      return;
    }
    if (t.target === n(this, hs)) {
      (e = n(this, ae).firstChild) == null || e.focus();
      return;
    }
    (s = t.target.nextSibling) == null || s.focus();
  }
  _moveToPrevious(t) {
    var e, s;
    if (t.target === ((e = n(this, ae)) == null ? void 0 : e.firstChild) || t.target === n(this, hs)) {
      n(this, St, Mn) && this._hideDropdownFromKeyboard();
      return;
    }
    n(this, St, Mn) || w(this, St, Ir).call(this, t), (s = t.target.previousSibling) == null || s.focus();
  }
  _moveToBeginning(t) {
    var e;
    if (!n(this, St, Mn)) {
      w(this, St, Ir).call(this, t);
      return;
    }
    (e = n(this, ae).firstChild) == null || e.focus();
  }
  _moveToEnd(t) {
    var e;
    if (!n(this, St, Mn)) {
      w(this, St, Ir).call(this, t);
      return;
    }
    (e = n(this, ae).lastChild) == null || e.focus();
  }
  hideDropdown() {
    var t, e;
    (t = n(this, ae)) == null || t.classList.add("hidden"), n(this, hs).ariaExpanded = "false", (e = n(this, lr)) == null || e.abort(), g(this, lr, null);
  }
  _hideDropdownFromKeyboard() {
    var t;
    if (!n(this, gl)) {
      if (!n(this, St, Mn)) {
        (t = n(this, fn)) == null || t.unselect();
        return;
      }
      this.hideDropdown(), n(this, hs).focus({
        preventScroll: !0,
        focusVisible: n(this, Mc)
      });
    }
  }
  updateColor(t) {
    if (n(this, _a) && (n(this, _a).style.backgroundColor = t), !n(this, ae))
      return;
    const e = n(this, Ks).highlightColors.values();
    for (const s of n(this, ae).children)
      s.ariaSelected = e.next().value === t.toUpperCase();
  }
  destroy() {
    var t, e;
    (t = n(this, hs)) == null || t.remove(), g(this, hs, null), g(this, _a, null), (e = n(this, ae)) == null || e.remove(), g(this, ae, null);
  }
};
hs = new WeakMap(), _a = new WeakMap(), pl = new WeakMap(), ae = new WeakMap(), Mc = new WeakMap(), gl = new WeakMap(), fn = new WeakMap(), Ic = new WeakMap(), lr = new WeakMap(), Ks = new WeakMap(), Fc = new WeakMap(), St = new WeakSet(), tp = function() {
  const t = document.createElement("div"), e = n(this, Ks)._signal;
  t.addEventListener("contextmenu", _s, {
    signal: e
  }), t.className = "dropdown", t.role = "listbox", t.ariaMultiSelectable = "false", t.ariaOrientation = "vertical", t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-dropdown"), n(this, fn) && (t.id = `${n(this, fn).id}_colorpicker_dropdown`);
  for (const [s, i] of n(this, Ks).highlightColors) {
    const r = document.createElement("button");
    r.tabIndex = "0", r.role = "option", r.setAttribute("data-color", i), r.title = s, r.setAttribute("data-l10n-id", n(qe, Fc)[s]);
    const a = document.createElement("span");
    r.append(a), a.className = "swatch", a.style.backgroundColor = i, r.ariaSelected = i === n(this, pl), r.addEventListener("click", w(this, St, ep).bind(this, i), {
      signal: e
    }), t.append(r);
  }
  return t.addEventListener("keydown", w(this, St, sp).bind(this), {
    signal: e
  }), t;
}, ep = function(t, e) {
  e.stopPropagation(), n(this, Ic).dispatch("switchannotationeditorparams", {
    source: this,
    type: at.HIGHLIGHT_COLOR,
    value: t
  }), this.updateColor(t);
}, sp = function(t) {
  qe._keyboardManager.exec(this, t);
}, Ir = function(t) {
  if (n(this, St, Mn)) {
    this.hideDropdown();
    return;
  }
  if (g(this, Mc, t.detail === 0), n(this, lr) || (g(this, lr, new AbortController()), window.addEventListener("pointerdown", w(this, St, wb).bind(this), {
    signal: n(this, Ks).combinedSignal(n(this, lr))
  })), n(this, hs).ariaExpanded = "true", n(this, ae)) {
    n(this, ae).classList.remove("hidden");
    return;
  }
  const e = g(this, ae, w(this, St, tp).call(this));
  n(this, hs).append(e);
}, wb = function(t) {
  var e;
  (e = n(this, ae)) != null && e.contains(t.target) || this.hideDropdown();
}, Mn = function() {
  return n(this, ae) && !n(this, ae).classList.contains("hidden");
}, y(qe, Fc, null);
let Dh = qe;
var _i, Nc, ml, Oc;
const $r = class $r {
  constructor(t) {
    y(this, _i, null);
    y(this, Nc, null);
    y(this, ml, null);
    g(this, Nc, t), g(this, ml, t._uiManager), n($r, Oc) || g($r, Oc, Object.freeze({
      freetext: "pdfjs-editor-color-picker-free-text-input",
      ink: "pdfjs-editor-color-picker-ink-input"
    }));
  }
  renderButton() {
    if (n(this, _i))
      return n(this, _i);
    const {
      editorType: t,
      colorType: e,
      colorValue: s
    } = n(this, Nc), i = g(this, _i, document.createElement("input"));
    return i.type = "color", i.value = s || "#000000", i.className = "basicColorPicker", i.tabIndex = 0, i.setAttribute("data-l10n-id", n($r, Oc)[t]), i.addEventListener("input", () => {
      n(this, ml).updateParams(e, i.value);
    }, {
      signal: n(this, ml)._signal
    }), i;
  }
  update(t) {
    n(this, _i) && (n(this, _i).value = t);
  }
  destroy() {
    var t;
    (t = n(this, _i)) == null || t.remove(), g(this, _i, null);
  }
  hideDropdown() {
  }
};
_i = new WeakMap(), Nc = new WeakMap(), ml = new WeakMap(), Oc = new WeakMap(), y($r, Oc, null);
let wu = $r;
function Bg(c) {
  return Math.floor(Math.max(0, Math.min(1, c)) * 255).toString(16).padStart(2, "0");
}
function th(c) {
  return Math.max(0, Math.min(255, 255 * c));
}
class $g {
  static CMYK_G([t, e, s, i]) {
    return ["G", 1 - Math.min(1, 0.3 * t + 0.59 * s + 0.11 * e + i)];
  }
  static G_CMYK([t]) {
    return ["CMYK", 0, 0, 0, 1 - t];
  }
  static G_RGB([t]) {
    return ["RGB", t, t, t];
  }
  static G_rgb([t]) {
    return t = th(t), [t, t, t];
  }
  static G_HTML([t]) {
    const e = Bg(t);
    return `#${e}${e}${e}`;
  }
  static RGB_G([t, e, s]) {
    return ["G", 0.3 * t + 0.59 * e + 0.11 * s];
  }
  static RGB_rgb(t) {
    return t.map(th);
  }
  static RGB_HTML(t) {
    return `#${t.map(Bg).join("")}`;
  }
  static T_HTML() {
    return "#00000000";
  }
  static T_rgb() {
    return [null];
  }
  static CMYK_RGB([t, e, s, i]) {
    return ["RGB", 1 - Math.min(1, t + i), 1 - Math.min(1, s + i), 1 - Math.min(1, e + i)];
  }
  static CMYK_rgb([t, e, s, i]) {
    return [th(1 - Math.min(1, t + i)), th(1 - Math.min(1, s + i)), th(1 - Math.min(1, e + i))];
  }
  static CMYK_HTML(t) {
    const e = this.CMYK_RGB(t).slice(1);
    return this.RGB_HTML(e);
  }
  static RGB_CMYK([t, e, s]) {
    const i = 1 - t, r = 1 - e, a = 1 - s, o = Math.min(i, r, a);
    return ["CMYK", i, r, a, o];
  }
}
class Ow {
  create(t, e, s = !1) {
    if (t <= 0 || e <= 0)
      throw new Error("Invalid SVG dimensions");
    const i = this._createSVG("svg:svg");
    return i.setAttribute("version", "1.1"), s || (i.setAttribute("width", `${t}px`), i.setAttribute("height", `${e}px`)), i.setAttribute("preserveAspectRatio", "none"), i.setAttribute("viewBox", `0 0 ${t} ${e}`), i;
  }
  createElement(t) {
    if (typeof t != "string")
      throw new Error("Invalid SVG element type");
    return this._createSVG(t);
  }
  _createSVG(t) {
    Tt("Abstract method `_createSVG` called.");
  }
}
class Mh extends Ow {
  _createSVG(t) {
    return document.createElementNS($i, t);
  }
}
const Bw = 9, Ja = /* @__PURE__ */ new WeakSet(), $w = (/* @__PURE__ */ new Date()).getTimezoneOffset() * 60 * 1e3;
class Hg {
  static create(t) {
    switch (t.data.annotationType) {
      case Yt.LINK:
        return new Qp(t);
      case Yt.TEXT:
        return new Uw(t);
      case Yt.WIDGET:
        switch (t.data.fieldType) {
          case "Tx":
            return new zw(t);
          case "Btn":
            return t.data.radioButton ? new Sb(t) : t.data.checkBox ? new Ww(t) : new jw(t);
          case "Ch":
            return new Vw(t);
          case "Sig":
            return new Gw(t);
        }
        return new eo(t);
      case Yt.POPUP:
        return new np(t);
      case Yt.FREETEXT:
        return new Tb(t);
      case Yt.LINE:
        return new Xw(t);
      case Yt.SQUARE:
        return new Yw(t);
      case Yt.CIRCLE:
        return new Kw(t);
      case Yt.POLYLINE:
        return new Pb(t);
      case Yt.CARET:
        return new Jw(t);
      case Yt.INK:
        return new tg(t);
      case Yt.POLYGON:
        return new Zw(t);
      case Yt.HIGHLIGHT:
        return new Rb(t);
      case Yt.UNDERLINE:
        return new Qw(t);
      case Yt.SQUIGGLY:
        return new tA(t);
      case Yt.STRIKEOUT:
        return new eA(t);
      case Yt.STAMP:
        return new kb(t);
      case Yt.FILEATTACHMENT:
        return new sA(t);
      default:
        return new zt(t);
    }
  }
}
var Ca, bl, Ns, Bc, ip;
const hg = class hg {
  constructor(t, {
    isRenderable: e = !1,
    ignoreBorder: s = !1,
    createQuadrilaterals: i = !1
  } = {}) {
    y(this, Bc);
    y(this, Ca, null);
    y(this, bl, !1);
    y(this, Ns, null);
    this.isRenderable = e, this.data = t.data, this.layer = t.layer, this.linkService = t.linkService, this.downloadManager = t.downloadManager, this.imageResourcesPath = t.imageResourcesPath, this.renderForms = t.renderForms, this.svgFactory = t.svgFactory, this.annotationStorage = t.annotationStorage, this.enableComment = t.enableComment, this.enableScripting = t.enableScripting, this.hasJSActions = t.hasJSActions, this._fieldObjects = t.fieldObjects, this.parent = t.parent, e && (this.container = this._createContainer(s)), i && this._createQuadrilaterals();
  }
  static _hasPopupData({
    contentsObj: t,
    richText: e
  }) {
    return !!(t != null && t.str || e != null && e.str);
  }
  get _isEditable() {
    return this.data.isEditable;
  }
  get hasPopupData() {
    return hg._hasPopupData(this.data) || this.enableComment && !!this.commentText;
  }
  get commentData() {
    var s;
    const {
      data: t
    } = this, e = (s = this.annotationStorage) == null ? void 0 : s.getEditor(t.id);
    return e ? e.getData() : t;
  }
  get hasCommentButton() {
    return this.enableComment && this.hasPopupElement;
  }
  get commentButtonPosition() {
    var o;
    const t = (o = this.annotationStorage) == null ? void 0 : o.getEditor(this.data.id);
    if (t)
      return t.commentButtonPositionInPage;
    const {
      quadPoints: e,
      inkLists: s,
      rect: i
    } = this.data;
    let r = -1 / 0, a = -1 / 0;
    if ((e == null ? void 0 : e.length) >= 8) {
      for (let l = 0; l < e.length; l += 8)
        e[l + 1] > a ? (a = e[l + 1], r = e[l + 2]) : e[l + 1] === a && (r = Math.max(r, e[l + 2]));
      return [r, a];
    }
    if ((s == null ? void 0 : s.length) >= 1) {
      for (const l of s)
        for (let h = 0, d = l.length; h < d; h += 2)
          l[h + 1] > a ? (a = l[h + 1], r = l[h]) : l[h + 1] === a && (r = Math.max(r, l[h]));
      if (r !== 1 / 0)
        return [r, a];
    }
    return i ? [i[2], i[3]] : null;
  }
  _normalizePoint(t) {
    const {
      page: {
        view: e
      },
      viewport: {
        rawDims: {
          pageWidth: s,
          pageHeight: i,
          pageX: r,
          pageY: a
        }
      }
    } = this.parent;
    return t[1] = e[3] - t[1] + e[1], t[0] = 100 * (t[0] - r) / s, t[1] = 100 * (t[1] - a) / i, t;
  }
  get commentText() {
    var e, s, i;
    const {
      data: t
    } = this;
    return ((s = (e = this.annotationStorage.getRawValue(`${Ch}${t.id}`)) == null ? void 0 : e.popup) == null ? void 0 : s.contents) || ((i = t.contentsObj) == null ? void 0 : i.str) || "";
  }
  set commentText(t) {
    const {
      data: e
    } = this, s = {
      deleted: !t,
      contents: t || ""
    };
    this.annotationStorage.updateEditor(e.id, {
      popup: s
    }) || this.annotationStorage.setValue(`${Ch}${e.id}`, {
      id: e.id,
      annotationType: e.annotationType,
      pageIndex: this.parent.page._pageIndex,
      popup: s,
      popupRef: e.popupRef,
      modificationDate: /* @__PURE__ */ new Date()
    }), t || this.removePopup();
  }
  removePopup() {
    var t, e;
    (e = ((t = n(this, Ns)) == null ? void 0 : t.popup) || this.popup) == null || e.remove(), g(this, Ns, this.popup = null);
  }
  updateEdited(t) {
    var r;
    if (!this.container)
      return;
    t.rect && (n(this, Ca) || g(this, Ca, {
      rect: this.data.rect.slice(0)
    }));
    const {
      rect: e,
      popup: s
    } = t;
    e && w(this, Bc, ip).call(this, e);
    let i = ((r = n(this, Ns)) == null ? void 0 : r.popup) || this.popup;
    !i && (s != null && s.text) && (this._createPopup(s), i = n(this, Ns).popup), i && (i.updateEdited(t), s != null && s.deleted && (i.remove(), g(this, Ns, null), this.popup = null));
  }
  resetEdited() {
    var t;
    n(this, Ca) && (w(this, Bc, ip).call(this, n(this, Ca).rect), (t = n(this, Ns)) == null || t.popup.resetEdited(), g(this, Ca, null));
  }
  _createContainer(t) {
    const {
      data: e,
      parent: {
        page: s,
        viewport: i
      }
    } = this, r = document.createElement("section");
    r.setAttribute("data-annotation-id", e.id), !(this instanceof eo) && !(this instanceof Qp) && (r.tabIndex = 0);
    const {
      style: a
    } = r;
    if (a.zIndex = this.parent.zIndex, this.parent.zIndex += 2, e.alternativeText && (r.title = e.alternativeText), e.noRotate && r.classList.add("norotate"), !e.rect || this instanceof np) {
      const {
        rotation: v
      } = e;
      return !e.hasOwnCanvas && v !== 0 && this.setRotation(v, r), r;
    }
    const {
      width: o,
      height: l
    } = this;
    if (!t && e.borderStyle.width > 0) {
      a.borderWidth = `${e.borderStyle.width}px`;
      const v = e.borderStyle.horizontalCornerRadius, E = e.borderStyle.verticalCornerRadius;
      if (v > 0 || E > 0) {
        const T = `calc(${v}px * var(--total-scale-factor)) / calc(${E}px * var(--total-scale-factor))`;
        a.borderRadius = T;
      } else if (this instanceof Sb) {
        const T = `calc(${o}px * var(--total-scale-factor)) / calc(${l}px * var(--total-scale-factor))`;
        a.borderRadius = T;
      }
      switch (e.borderStyle.style) {
        case no.SOLID:
          a.borderStyle = "solid";
          break;
        case no.DASHED:
          a.borderStyle = "dashed";
          break;
        case no.BEVELED:
          J("Unimplemented border style: beveled");
          break;
        case no.INSET:
          J("Unimplemented border style: inset");
          break;
        case no.UNDERLINE:
          a.borderBottomStyle = "solid";
          break;
      }
      const x = e.borderColor || null;
      x ? (g(this, bl, !0), a.borderColor = W.makeHexColor(x[0] | 0, x[1] | 0, x[2] | 0)) : a.borderWidth = 0;
    }
    const h = W.normalizeRect([e.rect[0], s.view[3] - e.rect[1] + s.view[1], e.rect[2], s.view[3] - e.rect[3] + s.view[1]]), {
      pageWidth: d,
      pageHeight: u,
      pageX: p,
      pageY: b
    } = i.rawDims;
    a.left = `${100 * (h[0] - p) / d}%`, a.top = `${100 * (h[1] - b) / u}%`;
    const {
      rotation: S
    } = e;
    return e.hasOwnCanvas || S === 0 ? (a.width = `${100 * o / d}%`, a.height = `${100 * l / u}%`) : this.setRotation(S, r), r;
  }
  setRotation(t, e = this.container) {
    if (!this.data.rect)
      return;
    const {
      pageWidth: s,
      pageHeight: i
    } = this.parent.viewport.rawDims;
    let {
      width: r,
      height: a
    } = this;
    t % 180 !== 0 && ([r, a] = [a, r]), e.style.width = `${100 * r / s}%`, e.style.height = `${100 * a / i}%`, e.setAttribute("data-main-rotation", (360 - t) % 360);
  }
  get _commonActions() {
    const t = (e, s, i) => {
      const r = i.detail[e], a = r[0], o = r.slice(1);
      i.target.style[s] = $g[`${a}_HTML`](o), this.annotationStorage.setValue(this.data.id, {
        [s]: $g[`${a}_rgb`](o)
      });
    };
    return et(this, "_commonActions", {
      display: (e) => {
        const {
          display: s
        } = e.detail, i = s % 2 === 1;
        this.container.style.visibility = i ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
          noView: i,
          noPrint: s === 1 || s === 2
        });
      },
      print: (e) => {
        this.annotationStorage.setValue(this.data.id, {
          noPrint: !e.detail.print
        });
      },
      hidden: (e) => {
        const {
          hidden: s
        } = e.detail;
        this.container.style.visibility = s ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
          noPrint: s,
          noView: s
        });
      },
      focus: (e) => {
        setTimeout(() => e.target.focus({
          preventScroll: !1
        }), 0);
      },
      userName: (e) => {
        e.target.title = e.detail.userName;
      },
      readonly: (e) => {
        e.target.disabled = e.detail.readonly;
      },
      required: (e) => {
        this._setRequired(e.target, e.detail.required);
      },
      bgColor: (e) => {
        t("bgColor", "backgroundColor", e);
      },
      fillColor: (e) => {
        t("fillColor", "backgroundColor", e);
      },
      fgColor: (e) => {
        t("fgColor", "color", e);
      },
      textColor: (e) => {
        t("textColor", "color", e);
      },
      borderColor: (e) => {
        t("borderColor", "borderColor", e);
      },
      strokeColor: (e) => {
        t("strokeColor", "borderColor", e);
      },
      rotation: (e) => {
        const s = e.detail.rotation;
        this.setRotation(s), this.annotationStorage.setValue(this.data.id, {
          rotation: s
        });
      }
    });
  }
  _dispatchEventFromSandbox(t, e) {
    const s = this._commonActions;
    for (const i of Object.keys(e.detail)) {
      const r = t[i] || s[i];
      r == null || r(e);
    }
  }
  _setDefaultPropertiesFromJS(t) {
    if (!this.enableScripting)
      return;
    const e = this.annotationStorage.getRawValue(this.data.id);
    if (!e)
      return;
    const s = this._commonActions;
    for (const [i, r] of Object.entries(e)) {
      const a = s[i];
      if (a) {
        const o = {
          detail: {
            [i]: r
          },
          target: t
        };
        a(o), delete e[i];
      }
    }
  }
  _createQuadrilaterals() {
    if (!this.container)
      return;
    const {
      quadPoints: t
    } = this.data;
    if (!t)
      return;
    const [e, s, i, r] = this.data.rect.map((v) => Math.fround(v));
    if (t.length === 8) {
      const [v, E, x, T] = t.subarray(2, 6);
      if (i === v && r === E && e === x && s === T)
        return;
    }
    const {
      style: a
    } = this.container;
    let o;
    if (n(this, bl)) {
      const {
        borderColor: v,
        borderWidth: E
      } = a;
      a.borderWidth = 0, o = ["url('data:image/svg+xml;utf8,", '<svg xmlns="http://www.w3.org/2000/svg"', ' preserveAspectRatio="none" viewBox="0 0 1 1">', `<g fill="transparent" stroke="${v}" stroke-width="${E}">`], this.container.classList.add("hasBorder");
    }
    const l = i - e, h = r - s, {
      svgFactory: d
    } = this, u = d.createElement("svg");
    u.classList.add("quadrilateralsContainer"), u.setAttribute("width", 0), u.setAttribute("height", 0), u.role = "none";
    const p = d.createElement("defs");
    u.append(p);
    const b = d.createElement("clipPath"), S = `clippath_${this.data.id}`;
    b.setAttribute("id", S), b.setAttribute("clipPathUnits", "objectBoundingBox"), p.append(b);
    for (let v = 2, E = t.length; v < E; v += 8) {
      const x = t[v], T = t[v + 1], _ = t[v + 2], f = t[v + 3], m = d.createElement("rect"), A = (_ - e) / l, C = (r - T) / h, P = (x - _) / l, R = (T - f) / h;
      m.setAttribute("x", A), m.setAttribute("y", C), m.setAttribute("width", P), m.setAttribute("height", R), b.append(m), o == null || o.push(`<rect vector-effect="non-scaling-stroke" x="${A}" y="${C}" width="${P}" height="${R}"/>`);
    }
    n(this, bl) && (o.push("</g></svg>')"), a.backgroundImage = o.join("")), this.container.append(u), this.container.style.clipPath = `url(#${S})`;
  }
  _createPopup(t = null) {
    const {
      data: e
    } = this;
    let s, i;
    t ? (s = {
      str: t.text
    }, i = t.date) : (s = e.contentsObj, i = e.modificationDate);
    const r = g(this, Ns, new np({
      data: {
        color: e.color,
        titleObj: e.titleObj,
        modificationDate: i,
        contentsObj: s,
        richText: e.richText,
        parentRect: e.rect,
        borderStyle: 0,
        id: `popup_${e.id}`,
        rotation: e.rotation,
        noRotate: !0
      },
      linkService: this.linkService,
      parent: this.parent,
      elements: [this]
    }));
    this.parent._commentManager || this.parent.div.append(r.render());
  }
  get hasPopupElement() {
    return !!(n(this, Ns) || this.popup || this.data.popupRef);
  }
  get extraPopupElement() {
    return n(this, Ns);
  }
  render() {
    Tt("Abstract method `AnnotationElement.render` called");
  }
  _getElementsByName(t, e = null) {
    const s = [];
    if (this._fieldObjects) {
      const i = this._fieldObjects[t];
      if (i)
        for (const {
          page: r,
          id: a,
          exportValues: o
        } of i) {
          if (r === -1 || a === e)
            continue;
          const l = typeof o == "string" ? o : null, h = document.querySelector(`[data-element-id="${a}"]`);
          if (h && !Ja.has(h)) {
            J(`_getElementsByName - element not allowed: ${a}`);
            continue;
          }
          s.push({
            id: a,
            exportValue: l,
            domElement: h
          });
        }
      return s;
    }
    for (const i of document.getElementsByName(t)) {
      const {
        exportValue: r
      } = i, a = i.getAttribute("data-element-id");
      a !== e && Ja.has(i) && s.push({
        id: a,
        exportValue: r,
        domElement: i
      });
    }
    return s;
  }
  show() {
    var t;
    this.container && (this.container.hidden = !1), (t = this.popup) == null || t.maybeShow();
  }
  hide() {
    var t;
    this.container && (this.container.hidden = !0), (t = this.popup) == null || t.forceHide();
  }
  getElementsToTriggerPopup() {
    return this.container;
  }
  addHighlightArea() {
    const t = this.getElementsToTriggerPopup();
    if (Array.isArray(t))
      for (const e of t)
        e.classList.add("highlightArea");
    else
      t.classList.add("highlightArea");
  }
  _editOnDoubleClick() {
    if (!this._isEditable)
      return;
    const {
      annotationEditorType: t,
      data: {
        id: e
      }
    } = this;
    this.container.addEventListener("dblclick", () => {
      var s;
      (s = this.linkService.eventBus) == null || s.dispatch("switchannotationeditormode", {
        source: this,
        mode: t,
        editId: e,
        mustEnterInEditMode: !0
      });
    });
  }
  get width() {
    return this.data.rect[2] - this.data.rect[0];
  }
  get height() {
    return this.data.rect[3] - this.data.rect[1];
  }
};
Ca = new WeakMap(), bl = new WeakMap(), Ns = new WeakMap(), Bc = new WeakSet(), ip = function(t) {
  const {
    container: {
      style: e
    },
    data: {
      rect: s,
      rotation: i
    },
    parent: {
      viewport: {
        rawDims: {
          pageWidth: r,
          pageHeight: a,
          pageX: o,
          pageY: l
        }
      }
    }
  } = this;
  s == null || s.splice(0, 4, ...t), e.left = `${100 * (t[0] - o) / r}%`, e.top = `${100 * (a - t[3] + l) / a}%`, i === 0 ? (e.width = `${100 * (t[2] - t[0]) / r}%`, e.height = `${100 * (t[3] - t[1]) / a}%`) : this.setRotation(i);
};
let zt = hg;
class Hw extends zt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    }), this.editor = t.editor;
  }
  render() {
    return this.container.className = "editorAnnotation", this.container;
  }
  createOrUpdatePopup() {
    const {
      editor: t
    } = this;
    t.hasComment && (this._createPopup(t.comment), this.extraPopupElement.popup.renderCommentButton());
  }
  get hasCommentButton() {
    return this.enableComment && this.editor.hasComment;
  }
  get commentButtonPosition() {
    return this.editor.commentButtonPositionInPage;
  }
  get commentText() {
    return this.editor.comment.text;
  }
  set commentText(t) {
    this.editor.comment = t, t || this.removePopup();
  }
  get commentData() {
    return this.editor.getData();
  }
  remove() {
    this.container.remove(), this.container = null, this.removePopup();
  }
}
var xs, Fr, Ab, vb;
class Qp extends zt {
  constructor(e, s = null) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !!(s != null && s.ignoreBorder),
      createQuadrilaterals: !0
    });
    y(this, xs);
    this.isTooltipOnly = e.data.isTooltipOnly;
  }
  render() {
    const {
      data: e,
      linkService: s
    } = this, i = document.createElement("a");
    i.setAttribute("data-element-id", e.id);
    let r = !1;
    return e.url ? (s.addLinkAttributes(i, e.url, e.newWindow), r = !0) : e.action ? (this._bindNamedAction(i, e.action, e.overlaidText), r = !0) : e.attachment ? (w(this, xs, Ab).call(this, i, e.attachment, e.overlaidText, e.attachmentDest), r = !0) : e.setOCGState ? (w(this, xs, vb).call(this, i, e.setOCGState, e.overlaidText), r = !0) : e.dest ? (this._bindLink(i, e.dest, e.overlaidText), r = !0) : (e.actions && (e.actions.Action || e.actions["Mouse Up"] || e.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions && (this._bindJSAction(i, e), r = !0), e.resetForm ? (this._bindResetFormAction(i, e.resetForm), r = !0) : this.isTooltipOnly && !r && (this._bindLink(i, ""), r = !0)), this.container.classList.add("linkAnnotation"), r && this.container.append(i), this.container;
  }
  _bindLink(e, s, i = "") {
    e.href = this.linkService.getDestinationHash(s), e.onclick = () => (s && this.linkService.goToDestination(s), !1), (s || s === "") && w(this, xs, Fr).call(this), i && (e.title = i);
  }
  _bindNamedAction(e, s, i = "") {
    e.href = this.linkService.getAnchorUrl(""), e.onclick = () => (this.linkService.executeNamedAction(s), !1), i && (e.title = i), w(this, xs, Fr).call(this);
  }
  _bindJSAction(e, s) {
    e.href = this.linkService.getAnchorUrl("");
    const i = /* @__PURE__ */ new Map([["Action", "onclick"], ["Mouse Up", "onmouseup"], ["Mouse Down", "onmousedown"]]);
    for (const r of Object.keys(s.actions)) {
      const a = i.get(r);
      a && (e[a] = () => {
        var o;
        return (o = this.linkService.eventBus) == null || o.dispatch("dispatcheventinsandbox", {
          source: this,
          detail: {
            id: s.id,
            name: r
          }
        }), !1;
      });
    }
    s.overlaidText && (e.title = s.overlaidText), e.onclick || (e.onclick = () => !1), w(this, xs, Fr).call(this);
  }
  _bindResetFormAction(e, s) {
    const i = e.onclick;
    if (i || (e.href = this.linkService.getAnchorUrl("")), w(this, xs, Fr).call(this), !this._fieldObjects) {
      J('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'), i || (e.onclick = () => !1);
      return;
    }
    e.onclick = () => {
      var u;
      i == null || i();
      const {
        fields: r,
        refs: a,
        include: o
      } = s, l = [];
      if (r.length !== 0 || a.length !== 0) {
        const p = new Set(a);
        for (const b of r) {
          const S = this._fieldObjects[b] || [];
          for (const {
            id: v
          } of S)
            p.add(v);
        }
        for (const b of Object.values(this._fieldObjects))
          for (const S of b)
            p.has(S.id) === o && l.push(S);
      } else
        for (const p of Object.values(this._fieldObjects))
          l.push(...p);
      const h = this.annotationStorage, d = [];
      for (const p of l) {
        const {
          id: b
        } = p;
        switch (d.push(b), p.type) {
          case "text": {
            const v = p.defaultValue || "";
            h.setValue(b, {
              value: v
            });
            break;
          }
          case "checkbox":
          case "radiobutton": {
            const v = p.defaultValue === p.exportValues;
            h.setValue(b, {
              value: v
            });
            break;
          }
          case "combobox":
          case "listbox": {
            const v = p.defaultValue || "";
            h.setValue(b, {
              value: v
            });
            break;
          }
          default:
            continue;
        }
        const S = document.querySelector(`[data-element-id="${b}"]`);
        if (S) {
          if (!Ja.has(S)) {
            J(`_bindResetFormAction - element not allowed: ${b}`);
            continue;
          }
        } else continue;
        S.dispatchEvent(new Event("resetform"));
      }
      return this.enableScripting && ((u = this.linkService.eventBus) == null || u.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: "app",
          ids: d,
          name: "ResetForm"
        }
      })), !1;
    };
  }
}
xs = new WeakSet(), Fr = function() {
  this.container.setAttribute("data-internal-link", "");
}, Ab = function(e, s, i = "", r = null) {
  e.href = this.linkService.getAnchorUrl(""), s.description ? e.title = s.description : i && (e.title = i), e.onclick = () => {
    var a;
    return (a = this.downloadManager) == null || a.openOrDownloadData(s.content, s.filename, r), !1;
  }, w(this, xs, Fr).call(this);
}, vb = function(e, s, i = "") {
  e.href = this.linkService.getAnchorUrl(""), e.onclick = () => (this.linkService.executeSetOCGState(s), !1), i && (e.title = i), w(this, xs, Fr).call(this);
};
class Uw extends zt {
  constructor(t) {
    super(t, {
      isRenderable: !0
    });
  }
  render() {
    this.container.classList.add("textAnnotation");
    const t = document.createElement("img");
    return t.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg", t.setAttribute("data-l10n-id", "pdfjs-text-annotation-type"), t.setAttribute("data-l10n-args", JSON.stringify({
      type: this.data.name
    })), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.append(t), this.container;
  }
}
class eo extends zt {
  render() {
    return this.container;
  }
  showElementAndHideCanvas(t) {
    var e;
    this.data.hasOwnCanvas && (((e = t.previousSibling) == null ? void 0 : e.nodeName) === "CANVAS" && (t.previousSibling.hidden = !0), t.hidden = !1);
  }
  _getKeyModifier(t) {
    return ge.platform.isMac ? t.metaKey : t.ctrlKey;
  }
  _setEventListener(t, e, s, i, r) {
    s.includes("mouse") ? t.addEventListener(s, (a) => {
      var o;
      (o = this.linkService.eventBus) == null || o.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: this.data.id,
          name: i,
          value: r(a),
          shift: a.shiftKey,
          modifier: this._getKeyModifier(a)
        }
      });
    }) : t.addEventListener(s, (a) => {
      var o;
      if (s === "blur") {
        if (!e.focused || !a.relatedTarget)
          return;
        e.focused = !1;
      } else if (s === "focus") {
        if (e.focused)
          return;
        e.focused = !0;
      }
      r && ((o = this.linkService.eventBus) == null || o.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: this.data.id,
          name: i,
          value: r(a)
        }
      }));
    });
  }
  _setEventListeners(t, e, s, i) {
    var r, a, o;
    for (const [l, h] of s)
      (h === "Action" || (r = this.data.actions) != null && r[h]) && ((h === "Focus" || h === "Blur") && (e || (e = {
        focused: !1
      })), this._setEventListener(t, e, l, h, i), h === "Focus" && !((a = this.data.actions) != null && a.Blur) ? this._setEventListener(t, e, "blur", "Blur", null) : h === "Blur" && !((o = this.data.actions) != null && o.Focus) && this._setEventListener(t, e, "focus", "Focus", null));
  }
  _setBackgroundColor(t) {
    const e = this.data.backgroundColor || null;
    t.style.backgroundColor = e === null ? "transparent" : W.makeHexColor(e[0], e[1], e[2]);
  }
  _setTextStyle(t) {
    const e = ["left", "center", "right"], {
      fontColor: s
    } = this.data.defaultAppearanceData, i = this.data.defaultAppearanceData.fontSize || Bw, r = t.style;
    let a;
    const o = 2, l = (h) => Math.round(10 * h) / 10;
    if (this.data.multiLine) {
      const h = Math.abs(this.data.rect[3] - this.data.rect[1] - o), d = Math.round(h / (sf * i)) || 1, u = h / d;
      a = Math.min(i, l(u / sf));
    } else {
      const h = Math.abs(this.data.rect[3] - this.data.rect[1] - o);
      a = Math.min(i, l(h / sf));
    }
    r.fontSize = `calc(${a}px * var(--total-scale-factor))`, r.color = W.makeHexColor(s[0], s[1], s[2]), this.data.textAlignment !== null && (r.textAlign = e[this.data.textAlignment]);
  }
  _setRequired(t, e) {
    e ? t.setAttribute("required", !0) : t.removeAttribute("required"), t.setAttribute("aria-required", e);
  }
}
class zw extends eo {
  constructor(t) {
    const e = t.renderForms || t.data.hasOwnCanvas || !t.data.hasAppearance && !!t.data.fieldValue;
    super(t, {
      isRenderable: e
    });
  }
  setPropertyOnSiblings(t, e, s, i) {
    const r = this.annotationStorage;
    for (const a of this._getElementsByName(t.name, t.id))
      a.domElement && (a.domElement[e] = s), r.setValue(a.id, {
        [i]: s
      });
  }
  render() {
    var i, r;
    const t = this.annotationStorage, e = this.data.id;
    this.container.classList.add("textWidgetAnnotation");
    let s = null;
    if (this.renderForms) {
      const a = t.getValue(e, {
        value: this.data.fieldValue
      });
      let o = a.value || "";
      const l = t.getValue(e, {
        charLimit: this.data.maxLen
      }).charLimit;
      l && o.length > l && (o = o.slice(0, l));
      let h = a.formattedValue || ((i = this.data.textContent) == null ? void 0 : i.join(`
`)) || null;
      h && this.data.comb && (h = h.replaceAll(/\s+/g, ""));
      const d = {
        userValue: o,
        formattedValue: h,
        lastCommittedValue: null,
        commitKey: 1,
        focused: !1
      };
      this.data.multiLine ? (s = document.createElement("textarea"), s.textContent = h ?? o, this.data.doNotScroll && (s.style.overflowY = "hidden")) : (s = document.createElement("input"), s.type = this.data.password ? "password" : "text", s.setAttribute("value", h ?? o), this.data.doNotScroll && (s.style.overflowX = "hidden")), this.data.hasOwnCanvas && (s.hidden = !0), Ja.add(s), s.setAttribute("data-element-id", e), s.disabled = this.data.readOnly, s.name = this.data.fieldName, s.tabIndex = 0;
      const {
        datetimeFormat: u,
        datetimeType: p,
        timeStep: b
      } = this.data, S = !!p && this.enableScripting;
      u && (s.title = u), this._setRequired(s, this.data.required), l && (s.maxLength = l), s.addEventListener("input", (E) => {
        t.setValue(e, {
          value: E.target.value
        }), this.setPropertyOnSiblings(s, "value", E.target.value, "value"), d.formattedValue = null;
      }), s.addEventListener("resetform", (E) => {
        const x = this.data.defaultFieldValue ?? "";
        s.value = d.userValue = x, d.formattedValue = null;
      });
      let v = (E) => {
        const {
          formattedValue: x
        } = d;
        x != null && (E.target.value = x), E.target.scrollLeft = 0;
      };
      if (this.enableScripting && this.hasJSActions) {
        s.addEventListener("focus", (x) => {
          var _;
          if (d.focused)
            return;
          const {
            target: T
          } = x;
          if (S && (T.type = p, b && (T.step = b)), d.userValue) {
            const f = d.userValue;
            if (S)
              if (p === "time") {
                const m = new Date(f), A = [m.getHours(), m.getMinutes(), m.getSeconds()];
                T.value = A.map((C) => C.toString().padStart(2, "0")).join(":");
              } else
                T.value = new Date(f - $w).toISOString().split(p === "date" ? "T" : ".", 1)[0];
            else
              T.value = f;
          }
          d.lastCommittedValue = T.value, d.commitKey = 1, (_ = this.data.actions) != null && _.Focus || (d.focused = !0);
        }), s.addEventListener("updatefromsandbox", (x) => {
          this.showElementAndHideCanvas(x.target);
          const T = {
            value(_) {
              d.userValue = _.detail.value ?? "", S || t.setValue(e, {
                value: d.userValue.toString()
              }), _.target.value = d.userValue;
            },
            formattedValue(_) {
              const {
                formattedValue: f
              } = _.detail;
              d.formattedValue = f, f != null && _.target !== document.activeElement && (_.target.value = f);
              const m = {
                formattedValue: f
              };
              S && (m.value = f), t.setValue(e, m);
            },
            selRange(_) {
              _.target.setSelectionRange(..._.detail.selRange);
            },
            charLimit: (_) => {
              var C;
              const {
                charLimit: f
              } = _.detail, {
                target: m
              } = _;
              if (f === 0) {
                m.removeAttribute("maxLength");
                return;
              }
              m.setAttribute("maxLength", f);
              let A = d.userValue;
              !A || A.length <= f || (A = A.slice(0, f), m.value = d.userValue = A, t.setValue(e, {
                value: A
              }), (C = this.linkService.eventBus) == null || C.dispatch("dispatcheventinsandbox", {
                source: this,
                detail: {
                  id: e,
                  name: "Keystroke",
                  value: A,
                  willCommit: !0,
                  commitKey: 1,
                  selStart: m.selectionStart,
                  selEnd: m.selectionEnd
                }
              }));
            }
          };
          this._dispatchEventFromSandbox(T, x);
        }), s.addEventListener("keydown", (x) => {
          var f;
          d.commitKey = 1;
          let T = -1;
          if (x.key === "Escape" ? T = 0 : x.key === "Enter" && !this.data.multiLine ? T = 2 : x.key === "Tab" && (d.commitKey = 3), T === -1)
            return;
          const {
            value: _
          } = x.target;
          d.lastCommittedValue !== _ && (d.lastCommittedValue = _, d.userValue = _, (f = this.linkService.eventBus) == null || f.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e,
              name: "Keystroke",
              value: _,
              willCommit: !0,
              commitKey: T,
              selStart: x.target.selectionStart,
              selEnd: x.target.selectionEnd
            }
          }));
        });
        const E = v;
        v = null, s.addEventListener("blur", (x) => {
          var f, m;
          if (!d.focused || !x.relatedTarget)
            return;
          (f = this.data.actions) != null && f.Blur || (d.focused = !1);
          const {
            target: T
          } = x;
          let {
            value: _
          } = T;
          if (S) {
            if (_ && p === "time") {
              const A = _.split(":").map((C) => parseInt(C, 10));
              _ = new Date(2e3, 0, 1, A[0], A[1], A[2] || 0).valueOf(), T.step = "";
            } else
              _.includes("T") || (_ = `${_}T00:00`), _ = new Date(_).valueOf();
            T.type = "text";
          }
          d.userValue = _, d.lastCommittedValue !== _ && ((m = this.linkService.eventBus) == null || m.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e,
              name: "Keystroke",
              value: _,
              willCommit: !0,
              commitKey: d.commitKey,
              selStart: x.target.selectionStart,
              selEnd: x.target.selectionEnd
            }
          })), E(x);
        }), (r = this.data.actions) != null && r.Keystroke && s.addEventListener("beforeinput", (x) => {
          var R;
          d.lastCommittedValue = null;
          const {
            data: T,
            target: _
          } = x, {
            value: f,
            selectionStart: m,
            selectionEnd: A
          } = _;
          let C = m, P = A;
          switch (x.inputType) {
            case "deleteWordBackward": {
              const L = f.substring(0, m).match(/\w*[^\w]*$/);
              L && (C -= L[0].length);
              break;
            }
            case "deleteWordForward": {
              const L = f.substring(m).match(/^[^\w]*\w*/);
              L && (P += L[0].length);
              break;
            }
            case "deleteContentBackward":
              m === A && (C -= 1);
              break;
            case "deleteContentForward":
              m === A && (P += 1);
              break;
          }
          x.preventDefault(), (R = this.linkService.eventBus) == null || R.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e,
              name: "Keystroke",
              value: f,
              change: T || "",
              willCommit: !1,
              selStart: C,
              selEnd: P
            }
          });
        }), this._setEventListeners(s, d, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (x) => x.target.value);
      }
      if (v && s.addEventListener("blur", v), this.data.comb) {
        const x = (this.data.rect[2] - this.data.rect[0]) / l;
        s.classList.add("comb"), s.style.letterSpacing = `calc(${x}px * var(--total-scale-factor) - 1ch)`;
      }
    } else
      s = document.createElement("div"), s.textContent = this.data.fieldValue, s.style.verticalAlign = "middle", s.style.display = "table-cell", this.data.hasOwnCanvas && (s.hidden = !0);
    return this._setTextStyle(s), this._setBackgroundColor(s), this._setDefaultPropertiesFromJS(s), this.container.append(s), this.container;
  }
}
class Gw extends eo {
  constructor(t) {
    super(t, {
      isRenderable: !!t.data.hasOwnCanvas
    });
  }
}
class Ww extends eo {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms
    });
  }
  render() {
    const t = this.annotationStorage, e = this.data, s = e.id;
    let i = t.getValue(s, {
      value: e.exportValue === e.fieldValue
    }).value;
    typeof i == "string" && (i = i !== "Off", t.setValue(s, {
      value: i
    })), this.container.classList.add("buttonWidgetAnnotation", "checkBox");
    const r = document.createElement("input");
    return Ja.add(r), r.setAttribute("data-element-id", s), r.disabled = e.readOnly, this._setRequired(r, this.data.required), r.type = "checkbox", r.name = e.fieldName, i && r.setAttribute("checked", !0), r.setAttribute("exportValue", e.exportValue), r.tabIndex = 0, r.addEventListener("change", (a) => {
      const {
        name: o,
        checked: l
      } = a.target;
      for (const h of this._getElementsByName(o, s)) {
        const d = l && h.exportValue === e.exportValue;
        h.domElement && (h.domElement.checked = d), t.setValue(h.id, {
          value: d
        });
      }
      t.setValue(s, {
        value: l
      });
    }), r.addEventListener("resetform", (a) => {
      const o = e.defaultFieldValue || "Off";
      a.target.checked = o === e.exportValue;
    }), this.enableScripting && this.hasJSActions && (r.addEventListener("updatefromsandbox", (a) => {
      const o = {
        value(l) {
          l.target.checked = l.detail.value !== "Off", t.setValue(s, {
            value: l.target.checked
          });
        }
      };
      this._dispatchEventFromSandbox(o, a);
    }), this._setEventListeners(r, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (a) => a.target.checked)), this._setBackgroundColor(r), this._setDefaultPropertiesFromJS(r), this.container.append(r), this.container;
  }
}
class Sb extends eo {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms
    });
  }
  render() {
    this.container.classList.add("buttonWidgetAnnotation", "radioButton");
    const t = this.annotationStorage, e = this.data, s = e.id;
    let i = t.getValue(s, {
      value: e.fieldValue === e.buttonValue
    }).value;
    if (typeof i == "string" && (i = i !== e.buttonValue, t.setValue(s, {
      value: i
    })), i)
      for (const a of this._getElementsByName(e.fieldName, s))
        t.setValue(a.id, {
          value: !1
        });
    const r = document.createElement("input");
    if (Ja.add(r), r.setAttribute("data-element-id", s), r.disabled = e.readOnly, this._setRequired(r, this.data.required), r.type = "radio", r.name = e.fieldName, i && r.setAttribute("checked", !0), r.tabIndex = 0, r.addEventListener("change", (a) => {
      const {
        name: o,
        checked: l
      } = a.target;
      for (const h of this._getElementsByName(o, s))
        t.setValue(h.id, {
          value: !1
        });
      t.setValue(s, {
        value: l
      });
    }), r.addEventListener("resetform", (a) => {
      const o = e.defaultFieldValue;
      a.target.checked = o != null && o === e.buttonValue;
    }), this.enableScripting && this.hasJSActions) {
      const a = e.buttonValue;
      r.addEventListener("updatefromsandbox", (o) => {
        const l = {
          value: (h) => {
            const d = a === h.detail.value;
            for (const u of this._getElementsByName(h.target.name)) {
              const p = d && u.id === s;
              u.domElement && (u.domElement.checked = p), t.setValue(u.id, {
                value: p
              });
            }
          }
        };
        this._dispatchEventFromSandbox(l, o);
      }), this._setEventListeners(r, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (o) => o.target.checked);
    }
    return this._setBackgroundColor(r), this._setDefaultPropertiesFromJS(r), this.container.append(r), this.container;
  }
}
class jw extends Qp {
  constructor(t) {
    super(t, {
      ignoreBorder: t.data.hasAppearance
    });
  }
  render() {
    const t = super.render();
    t.classList.add("buttonWidgetAnnotation", "pushButton");
    const e = t.lastChild;
    return this.enableScripting && this.hasJSActions && e && (this._setDefaultPropertiesFromJS(e), e.addEventListener("updatefromsandbox", (s) => {
      this._dispatchEventFromSandbox({}, s);
    })), t;
  }
}
class Vw extends eo {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms
    });
  }
  render() {
    this.container.classList.add("choiceWidgetAnnotation");
    const t = this.annotationStorage, e = this.data.id, s = t.getValue(e, {
      value: this.data.fieldValue
    }), i = document.createElement("select");
    Ja.add(i), i.setAttribute("data-element-id", e), i.disabled = this.data.readOnly, this._setRequired(i, this.data.required), i.name = this.data.fieldName, i.tabIndex = 0;
    let r = this.data.combo && this.data.options.length > 0;
    this.data.combo || (i.size = this.data.options.length, this.data.multiSelect && (i.multiple = !0)), i.addEventListener("resetform", (d) => {
      const u = this.data.defaultFieldValue;
      for (const p of i.options)
        p.selected = p.value === u;
    });
    for (const d of this.data.options) {
      const u = document.createElement("option");
      u.textContent = d.displayValue, u.value = d.exportValue, s.value.includes(d.exportValue) && (u.setAttribute("selected", !0), r = !1), i.append(u);
    }
    let a = null;
    if (r) {
      const d = document.createElement("option");
      d.value = " ", d.setAttribute("hidden", !0), d.setAttribute("selected", !0), i.prepend(d), a = () => {
        d.remove(), i.removeEventListener("input", a), a = null;
      }, i.addEventListener("input", a);
    }
    const o = (d) => {
      const u = d ? "value" : "textContent", {
        options: p,
        multiple: b
      } = i;
      return b ? Array.prototype.filter.call(p, (S) => S.selected).map((S) => S[u]) : p.selectedIndex === -1 ? null : p[p.selectedIndex][u];
    };
    let l = o(!1);
    const h = (d) => {
      const u = d.target.options;
      return Array.prototype.map.call(u, (p) => ({
        displayValue: p.textContent,
        exportValue: p.value
      }));
    };
    return this.enableScripting && this.hasJSActions ? (i.addEventListener("updatefromsandbox", (d) => {
      const u = {
        value(p) {
          a == null || a();
          const b = p.detail.value, S = new Set(Array.isArray(b) ? b : [b]);
          for (const v of i.options)
            v.selected = S.has(v.value);
          t.setValue(e, {
            value: o(!0)
          }), l = o(!1);
        },
        multipleSelection(p) {
          i.multiple = !0;
        },
        remove(p) {
          const b = i.options, S = p.detail.remove;
          b[S].selected = !1, i.remove(S), b.length > 0 && Array.prototype.findIndex.call(b, (E) => E.selected) === -1 && (b[0].selected = !0), t.setValue(e, {
            value: o(!0),
            items: h(p)
          }), l = o(!1);
        },
        clear(p) {
          for (; i.length !== 0; )
            i.remove(0);
          t.setValue(e, {
            value: null,
            items: []
          }), l = o(!1);
        },
        insert(p) {
          const {
            index: b,
            displayValue: S,
            exportValue: v
          } = p.detail.insert, E = i.children[b], x = document.createElement("option");
          x.textContent = S, x.value = v, E ? E.before(x) : i.append(x), t.setValue(e, {
            value: o(!0),
            items: h(p)
          }), l = o(!1);
        },
        items(p) {
          const {
            items: b
          } = p.detail;
          for (; i.length !== 0; )
            i.remove(0);
          for (const S of b) {
            const {
              displayValue: v,
              exportValue: E
            } = S, x = document.createElement("option");
            x.textContent = v, x.value = E, i.append(x);
          }
          i.options.length > 0 && (i.options[0].selected = !0), t.setValue(e, {
            value: o(!0),
            items: h(p)
          }), l = o(!1);
        },
        indices(p) {
          const b = new Set(p.detail.indices);
          for (const S of p.target.options)
            S.selected = b.has(S.index);
          t.setValue(e, {
            value: o(!0)
          }), l = o(!1);
        },
        editable(p) {
          p.target.disabled = !p.detail.editable;
        }
      };
      this._dispatchEventFromSandbox(u, d);
    }), i.addEventListener("input", (d) => {
      var b;
      const u = o(!0), p = o(!1);
      t.setValue(e, {
        value: u
      }), d.preventDefault(), (b = this.linkService.eventBus) == null || b.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: e,
          name: "Keystroke",
          value: l,
          change: p,
          changeEx: u,
          willCommit: !1,
          commitKey: 1,
          keyDown: !1
        }
      });
    }), this._setEventListeners(i, null, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"], ["input", "Action"], ["input", "Validate"]], (d) => d.target.value)) : i.addEventListener("input", function(d) {
      t.setValue(e, {
        value: o(!0)
      });
    }), this.data.combo && this._setTextStyle(i), this._setBackgroundColor(i), this._setDefaultPropertiesFromJS(i), this.container.append(i), this.container;
  }
}
var $c, rp;
class np extends zt {
  constructor(e) {
    const {
      data: s,
      elements: i,
      parent: r
    } = e, a = !!r._commentManager;
    super(e, {
      isRenderable: !a && zt._hasPopupData(s)
    });
    y(this, $c);
    if (this.elements = i, a && zt._hasPopupData(s)) {
      const o = this.popup = w(this, $c, rp).call(this);
      for (const l of i)
        l.popup = o;
    } else
      this.popup = null;
  }
  render() {
    const {
      container: e
    } = this;
    e.classList.add("popupAnnotation"), e.role = "comment";
    const s = this.popup = w(this, $c, rp).call(this), i = [];
    for (const r of this.elements)
      r.popup = s, r.container.ariaHasPopup = "dialog", i.push(r.data.id), r.addHighlightArea();
    return this.container.setAttribute("aria-controls", i.map((r) => `${jp}${r}`).join(",")), this.container;
  }
}
$c = new WeakSet(), rp = function() {
  return new qw({
    container: this.container,
    color: this.data.color,
    titleObj: this.data.titleObj,
    modificationDate: this.data.modificationDate || this.data.creationDate,
    contentsObj: this.data.contentsObj,
    richText: this.data.richText,
    rect: this.data.rect,
    parentRect: this.data.parentRect || null,
    parent: this.parent,
    elements: this.elements,
    open: this.data.open,
    commentManager: this.parent._commentManager
  });
};
var cs, hr, Ou, Bu, yl, wl, jt, Ci, cr, Ta, Al, vl, Ti, ds, pn, gn, he, mn, dr, Hc, bn, Sl, Pa, ur, Le, fr, it, Xd, ap, op, lp, Yd, hp, xb, Eb, _b, Cb, Kd, Zd, cp;
class qw {
  constructor({
    container: t,
    color: e,
    elements: s,
    titleObj: i,
    modificationDate: r,
    contentsObj: a,
    richText: o,
    parent: l,
    rect: h,
    parentRect: d,
    open: u,
    commentManager: p = null
  }) {
    y(this, it);
    y(this, cs, null);
    y(this, hr, w(this, it, _b).bind(this));
    y(this, Ou, w(this, it, cp).bind(this));
    y(this, Bu, w(this, it, Zd).bind(this));
    y(this, yl, w(this, it, Kd).bind(this));
    y(this, wl, null);
    y(this, jt, null);
    y(this, Ci, null);
    y(this, cr, null);
    y(this, Ta, null);
    y(this, Al, null);
    y(this, vl, null);
    y(this, Ti, !1);
    y(this, ds, null);
    y(this, pn, null);
    y(this, gn, null);
    y(this, he, null);
    y(this, mn, null);
    y(this, dr, null);
    y(this, Hc, null);
    y(this, bn, null);
    y(this, Sl, null);
    y(this, Pa, null);
    y(this, ur, !1);
    y(this, Le, null);
    y(this, fr, null);
    g(this, jt, t), g(this, Sl, i), g(this, Ci, a), g(this, bn, o), g(this, Al, l), g(this, wl, e), g(this, Hc, h), g(this, vl, d), g(this, Ta, s), g(this, cs, p), g(this, Le, s[0]), g(this, cr, Rh.toDateObject(r)), this.trigger = s.flatMap((b) => b.getElementsToTriggerPopup()), p ? this.renderCommentButton() : (w(this, it, Xd).call(this), n(this, jt).hidden = !0, u && w(this, it, Kd).call(this));
  }
  renderCommentButton() {
    if (n(this, he) || (n(this, mn) || w(this, it, ap).call(this), !n(this, mn)))
      return;
    const {
      signal: t
    } = g(this, pn, new AbortController()), e = !!n(this, Le).extraPopupElement, s = () => {
      n(this, cs).toggleCommentPopup(this, !0, void 0, !e);
    }, i = () => {
      n(this, cs).toggleCommentPopup(this, !1, !0, !e);
    }, r = () => {
      n(this, cs).toggleCommentPopup(this, !1, !1);
    };
    if (e) {
      g(this, he, n(this, Le).container);
      for (const a of this.trigger)
        a.ariaHasPopup = "dialog", a.ariaControls = "commentPopup", a.addEventListener("keydown", n(this, hr), {
          signal: t
        }), a.addEventListener("click", s, {
          signal: t
        }), a.addEventListener("pointerenter", i, {
          signal: t
        }), a.addEventListener("pointerleave", r, {
          signal: t
        }), a.classList.add("popupTriggerArea");
    } else {
      const a = g(this, he, document.createElement("button"));
      a.className = "annotationCommentButton";
      const o = n(this, Le).container;
      a.style.zIndex = o.style.zIndex + 1, a.tabIndex = 0, a.ariaHasPopup = "dialog", a.ariaControls = "commentPopup", a.setAttribute("data-l10n-id", "pdfjs-show-comment-button"), w(this, it, lp).call(this), w(this, it, op).call(this), a.addEventListener("keydown", n(this, hr), {
        signal: t
      }), a.addEventListener("click", s, {
        signal: t
      }), a.addEventListener("pointerenter", i, {
        signal: t
      }), a.addEventListener("pointerleave", r, {
        signal: t
      }), o.after(a);
    }
  }
  get commentButtonColor() {
    const {
      color: t,
      opacity: e
    } = n(this, Le).commentData;
    return t ? n(this, Al)._commentManager.makeCommentColor(t, e) : null;
  }
  focusCommentButton() {
    setTimeout(() => {
      var t;
      (t = n(this, he)) == null || t.focus();
    }, 0);
  }
  getData() {
    const {
      richText: t,
      color: e,
      opacity: s,
      creationDate: i,
      modificationDate: r
    } = n(this, Le).commentData;
    return {
      contentsObj: {
        str: this.comment
      },
      richText: t,
      color: e,
      opacity: s,
      creationDate: i,
      modificationDate: r
    };
  }
  get elementBeforePopup() {
    return n(this, he);
  }
  get comment() {
    return n(this, fr) || g(this, fr, n(this, Le).commentText), n(this, fr);
  }
  set comment(t) {
    t !== this.comment && (n(this, Le).commentText = g(this, fr, t));
  }
  get parentBoundingClientRect() {
    return n(this, Le).layer.getBoundingClientRect();
  }
  setCommentButtonStates({
    selected: t,
    hasPopup: e
  }) {
    n(this, he) && (n(this, he).classList.toggle("selected", t), n(this, he).ariaExpanded = e);
  }
  setSelectedCommentButton(t) {
    n(this, he).classList.toggle("selected", t);
  }
  get commentPopupPosition() {
    if (n(this, dr))
      return n(this, dr);
    const {
      x: t,
      y: e,
      height: s
    } = n(this, he).getBoundingClientRect(), {
      x: i,
      y: r,
      width: a,
      height: o
    } = n(this, Le).layer.getBoundingClientRect();
    return [(t - i) / a, (e + s - r) / o];
  }
  set commentPopupPosition(t) {
    g(this, dr, t);
  }
  hasDefaultPopupPosition() {
    return n(this, dr) === null;
  }
  get commentButtonPosition() {
    return n(this, mn);
  }
  get commentButtonWidth() {
    return n(this, he).getBoundingClientRect().width / this.parentBoundingClientRect.width;
  }
  editComment(t) {
    const [e, s] = n(this, dr) || this.commentButtonPosition.map((h) => h / 100), i = this.parentBoundingClientRect, {
      x: r,
      y: a,
      width: o,
      height: l
    } = i;
    n(this, cs).showDialog(null, this, r + e * o, a + s * l, {
      ...t,
      parentDimensions: i
    });
  }
  render() {
    var s, i;
    if (n(this, ds))
      return;
    const t = g(this, ds, document.createElement("div"));
    if (t.className = "popup", n(this, wl)) {
      const r = t.style.outlineColor = W.makeHexColor(...n(this, wl));
      t.style.backgroundColor = `color-mix(in srgb, ${r} 30%, white)`;
    }
    const e = document.createElement("span");
    if (e.className = "header", (s = n(this, Sl)) != null && s.str) {
      const r = document.createElement("span");
      r.className = "title", e.append(r), {
        dir: r.dir,
        str: r.textContent
      } = n(this, Sl);
    }
    if (t.append(e), n(this, cr)) {
      const r = document.createElement("time");
      r.className = "popupDate", r.setAttribute("data-l10n-id", "pdfjs-annotation-date-time-string"), r.setAttribute("data-l10n-args", JSON.stringify({
        dateObj: n(this, cr).valueOf()
      })), r.dateTime = n(this, cr).toISOString(), e.append(r);
    }
    qp({
      html: n(this, it, Yd) || n(this, Ci).str,
      dir: (i = n(this, Ci)) == null ? void 0 : i.dir,
      className: "popupContent"
    }, t), n(this, jt).append(t);
  }
  updateEdited({
    rect: t,
    popup: e,
    deleted: s
  }) {
    var i;
    if (n(this, cs)) {
      s ? (this.remove(), g(this, fr, null)) : e && (e.deleted ? this.remove() : (w(this, it, lp).call(this), g(this, fr, e.text))), t && (g(this, mn, null), w(this, it, ap).call(this), w(this, it, op).call(this));
      return;
    }
    if (s || e != null && e.deleted) {
      this.remove();
      return;
    }
    w(this, it, Xd).call(this), n(this, Pa) || g(this, Pa, {
      contentsObj: n(this, Ci),
      richText: n(this, bn)
    }), t && g(this, gn, null), e && e.text && (g(this, bn, w(this, it, Eb).call(this, e.text)), g(this, cr, Rh.toDateObject(e.date)), g(this, Ci, null)), (i = n(this, ds)) == null || i.remove(), g(this, ds, null);
  }
  resetEdited() {
    var t;
    n(this, Pa) && ({
      contentsObj: ie(this, Ci)._,
      richText: ie(this, bn)._
    } = n(this, Pa), g(this, Pa, null), (t = n(this, ds)) == null || t.remove(), g(this, ds, null), g(this, gn, null));
  }
  remove() {
    var t, e, s;
    if ((t = n(this, pn)) == null || t.abort(), g(this, pn, null), (e = n(this, ds)) == null || e.remove(), g(this, ds, null), g(this, ur, !1), g(this, Ti, !1), (s = n(this, he)) == null || s.remove(), g(this, he, null), this.trigger)
      for (const i of this.trigger)
        i.classList.remove("popupTriggerArea");
  }
  forceHide() {
    g(this, ur, this.isVisible), n(this, ur) && (n(this, jt).hidden = !0);
  }
  maybeShow() {
    n(this, cs) || (w(this, it, Xd).call(this), n(this, ur) && (n(this, ds) || w(this, it, Zd).call(this), g(this, ur, !1), n(this, jt).hidden = !1));
  }
  get isVisible() {
    return n(this, cs) ? !1 : n(this, jt).hidden === !1;
  }
}
cs = new WeakMap(), hr = new WeakMap(), Ou = new WeakMap(), Bu = new WeakMap(), yl = new WeakMap(), wl = new WeakMap(), jt = new WeakMap(), Ci = new WeakMap(), cr = new WeakMap(), Ta = new WeakMap(), Al = new WeakMap(), vl = new WeakMap(), Ti = new WeakMap(), ds = new WeakMap(), pn = new WeakMap(), gn = new WeakMap(), he = new WeakMap(), mn = new WeakMap(), dr = new WeakMap(), Hc = new WeakMap(), bn = new WeakMap(), Sl = new WeakMap(), Pa = new WeakMap(), ur = new WeakMap(), Le = new WeakMap(), fr = new WeakMap(), it = new WeakSet(), Xd = function() {
  var e;
  if (n(this, pn))
    return;
  g(this, pn, new AbortController());
  const {
    signal: t
  } = n(this, pn);
  for (const s of this.trigger)
    s.addEventListener("click", n(this, yl), {
      signal: t
    }), s.addEventListener("pointerenter", n(this, Bu), {
      signal: t
    }), s.addEventListener("pointerleave", n(this, Ou), {
      signal: t
    }), s.classList.add("popupTriggerArea");
  for (const s of n(this, Ta))
    (e = s.container) == null || e.addEventListener("keydown", n(this, hr), {
      signal: t
    });
}, ap = function() {
  const t = n(this, Ta).find((e) => e.hasCommentButton);
  t && g(this, mn, t._normalizePoint(t.commentButtonPosition));
}, op = function() {
  if (n(this, Le).extraPopupElement && !n(this, Le).editor)
    return;
  this.renderCommentButton();
  const [t, e] = n(this, mn), {
    style: s
  } = n(this, he);
  s.left = `calc(${t}%)`, s.top = `calc(${e}% - var(--comment-button-dim))`;
}, lp = function() {
  n(this, Le).extraPopupElement || (this.renderCommentButton(), n(this, he).style.backgroundColor = this.commentButtonColor || "");
}, Yd = function() {
  const t = n(this, bn), e = n(this, Ci);
  return t != null && t.str && (!(e != null && e.str) || e.str === t.str) && n(this, bn).html || null;
}, hp = function() {
  var t, e, s;
  return ((s = (e = (t = n(this, it, Yd)) == null ? void 0 : t.attributes) == null ? void 0 : e.style) == null ? void 0 : s.fontSize) || 0;
}, xb = function() {
  var t, e, s;
  return ((s = (e = (t = n(this, it, Yd)) == null ? void 0 : t.attributes) == null ? void 0 : e.style) == null ? void 0 : s.color) || null;
}, Eb = function(t) {
  const e = [], s = {
    str: t,
    html: {
      name: "div",
      attributes: {
        dir: "auto"
      },
      children: [{
        name: "p",
        children: e
      }]
    }
  }, i = {
    style: {
      color: n(this, it, xb),
      fontSize: n(this, it, hp) ? `calc(${n(this, it, hp)}px * var(--total-scale-factor))` : ""
    }
  };
  for (const r of t.split(`
`))
    e.push({
      name: "span",
      value: r,
      attributes: i
    });
  return s;
}, _b = function(t) {
  t.altKey || t.shiftKey || t.ctrlKey || t.metaKey || (t.key === "Enter" || t.key === "Escape" && n(this, Ti)) && w(this, it, Kd).call(this);
}, Cb = function() {
  if (n(this, gn) !== null)
    return;
  const {
    page: {
      view: t
    },
    viewport: {
      rawDims: {
        pageWidth: e,
        pageHeight: s,
        pageX: i,
        pageY: r
      }
    }
  } = n(this, Al);
  let a = !!n(this, vl), o = a ? n(this, vl) : n(this, Hc);
  for (const S of n(this, Ta))
    if (!o || W.intersect(S.data.rect, o) !== null) {
      o = S.data.rect, a = !0;
      break;
    }
  const l = W.normalizeRect([o[0], t[3] - o[1] + t[1], o[2], t[3] - o[3] + t[1]]), d = a ? o[2] - o[0] + 5 : 0, u = l[0] + d, p = l[1];
  g(this, gn, [100 * (u - i) / e, 100 * (p - r) / s]);
  const {
    style: b
  } = n(this, jt);
  b.left = `${n(this, gn)[0]}%`, b.top = `${n(this, gn)[1]}%`;
}, Kd = function() {
  if (n(this, cs)) {
    n(this, cs).toggleCommentPopup(this, !1);
    return;
  }
  g(this, Ti, !n(this, Ti)), n(this, Ti) ? (w(this, it, Zd).call(this), n(this, jt).addEventListener("click", n(this, yl)), n(this, jt).addEventListener("keydown", n(this, hr))) : (w(this, it, cp).call(this), n(this, jt).removeEventListener("click", n(this, yl)), n(this, jt).removeEventListener("keydown", n(this, hr)));
}, Zd = function() {
  n(this, ds) || this.render(), this.isVisible ? n(this, Ti) && n(this, jt).classList.add("focused") : (w(this, it, Cb).call(this), n(this, jt).hidden = !1, n(this, jt).style.zIndex = parseInt(n(this, jt).style.zIndex) + 1e3);
}, cp = function() {
  n(this, jt).classList.remove("focused"), !(n(this, Ti) || !this.isVisible) && (n(this, jt).hidden = !0, n(this, jt).style.zIndex = parseInt(n(this, jt).style.zIndex) - 1e3);
};
class Tb extends zt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    }), this.textContent = t.data.textContent, this.textPosition = t.data.textPosition, this.annotationEditorType = Z.FREETEXT;
  }
  render() {
    if (this.container.classList.add("freeTextAnnotation"), this.textContent) {
      const t = document.createElement("div");
      t.classList.add("annotationTextContent"), t.setAttribute("role", "comment");
      for (const e of this.textContent) {
        const s = document.createElement("span");
        s.textContent = e, t.append(s);
      }
      this.container.append(t);
    }
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this._editOnDoubleClick(), this.container;
  }
}
var Uc;
class Xw extends zt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    y(this, Uc, null);
  }
  render() {
    this.container.classList.add("lineAnnotation");
    const {
      data: e,
      width: s,
      height: i
    } = this, r = this.svgFactory.create(s, i, !0), a = g(this, Uc, this.svgFactory.createElement("svg:line"));
    return a.setAttribute("x1", e.rect[2] - e.lineCoordinates[0]), a.setAttribute("y1", e.rect[3] - e.lineCoordinates[1]), a.setAttribute("x2", e.rect[2] - e.lineCoordinates[2]), a.setAttribute("y2", e.rect[3] - e.lineCoordinates[3]), a.setAttribute("stroke-width", e.borderStyle.width || 1), a.setAttribute("stroke", "transparent"), a.setAttribute("fill", "transparent"), r.append(a), this.container.append(r), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return n(this, Uc);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
Uc = new WeakMap();
var zc;
class Yw extends zt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    y(this, zc, null);
  }
  render() {
    this.container.classList.add("squareAnnotation");
    const {
      data: e,
      width: s,
      height: i
    } = this, r = this.svgFactory.create(s, i, !0), a = e.borderStyle.width, o = g(this, zc, this.svgFactory.createElement("svg:rect"));
    return o.setAttribute("x", a / 2), o.setAttribute("y", a / 2), o.setAttribute("width", s - a), o.setAttribute("height", i - a), o.setAttribute("stroke-width", a || 1), o.setAttribute("stroke", "transparent"), o.setAttribute("fill", "transparent"), r.append(o), this.container.append(r), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return n(this, zc);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
zc = new WeakMap();
var Gc;
class Kw extends zt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    y(this, Gc, null);
  }
  render() {
    this.container.classList.add("circleAnnotation");
    const {
      data: e,
      width: s,
      height: i
    } = this, r = this.svgFactory.create(s, i, !0), a = e.borderStyle.width, o = g(this, Gc, this.svgFactory.createElement("svg:ellipse"));
    return o.setAttribute("cx", s / 2), o.setAttribute("cy", i / 2), o.setAttribute("rx", s / 2 - a / 2), o.setAttribute("ry", i / 2 - a / 2), o.setAttribute("stroke-width", a || 1), o.setAttribute("stroke", "transparent"), o.setAttribute("fill", "transparent"), r.append(o), this.container.append(r), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return n(this, Gc);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
Gc = new WeakMap();
var Wc;
class Pb extends zt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    y(this, Wc, null);
    this.containerClassName = "polylineAnnotation", this.svgElementName = "svg:polyline";
  }
  render() {
    this.container.classList.add(this.containerClassName);
    const {
      data: {
        rect: e,
        vertices: s,
        borderStyle: i,
        popupRef: r
      },
      width: a,
      height: o
    } = this;
    if (!s)
      return this.container;
    const l = this.svgFactory.create(a, o, !0);
    let h = [];
    for (let u = 0, p = s.length; u < p; u += 2) {
      const b = s[u] - e[0], S = e[3] - s[u + 1];
      h.push(`${b},${S}`);
    }
    h = h.join(" ");
    const d = g(this, Wc, this.svgFactory.createElement(this.svgElementName));
    return d.setAttribute("points", h), d.setAttribute("stroke-width", i.width || 1), d.setAttribute("stroke", "transparent"), d.setAttribute("fill", "transparent"), l.append(d), this.container.append(l), !r && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return n(this, Wc);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
Wc = new WeakMap();
class Zw extends Pb {
  constructor(t) {
    super(t), this.containerClassName = "polygonAnnotation", this.svgElementName = "svg:polygon";
  }
}
class Jw extends zt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    });
  }
  render() {
    return this.container.classList.add("caretAnnotation"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
}
var jc, Ra, Vc, dp;
class tg extends zt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    y(this, Vc);
    y(this, jc, null);
    y(this, Ra, []);
    this.containerClassName = "inkAnnotation", this.svgElementName = "svg:polyline", this.annotationEditorType = this.data.it === "InkHighlight" ? Z.HIGHLIGHT : Z.INK;
  }
  render() {
    this.container.classList.add(this.containerClassName);
    const {
      data: {
        rect: e,
        rotation: s,
        inkLists: i,
        borderStyle: r,
        popupRef: a
      }
    } = this, {
      transform: o,
      width: l,
      height: h
    } = w(this, Vc, dp).call(this, s, e), d = this.svgFactory.create(l, h, !0), u = g(this, jc, this.svgFactory.createElement("svg:g"));
    d.append(u), u.setAttribute("stroke-width", r.width || 1), u.setAttribute("stroke-linecap", "round"), u.setAttribute("stroke-linejoin", "round"), u.setAttribute("stroke-miterlimit", 10), u.setAttribute("stroke", "transparent"), u.setAttribute("fill", "transparent"), u.setAttribute("transform", o);
    for (let p = 0, b = i.length; p < b; p++) {
      const S = this.svgFactory.createElement(this.svgElementName);
      n(this, Ra).push(S), S.setAttribute("points", i[p].join(",")), u.append(S);
    }
    return !a && this.hasPopupData && this._createPopup(), this.container.append(d), this._editOnDoubleClick(), this.container;
  }
  updateEdited(e) {
    super.updateEdited(e);
    const {
      thickness: s,
      points: i,
      rect: r
    } = e, a = n(this, jc);
    if (s >= 0 && a.setAttribute("stroke-width", s || 1), i)
      for (let o = 0, l = n(this, Ra).length; o < l; o++)
        n(this, Ra)[o].setAttribute("points", i[o].join(","));
    if (r) {
      const {
        transform: o,
        width: l,
        height: h
      } = w(this, Vc, dp).call(this, this.data.rotation, r);
      a.parentElement.setAttribute("viewBox", `0 0 ${l} ${h}`), a.setAttribute("transform", o);
    }
  }
  getElementsToTriggerPopup() {
    return n(this, Ra);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
jc = new WeakMap(), Ra = new WeakMap(), Vc = new WeakSet(), dp = function(e, s) {
  switch (e) {
    case 90:
      return {
        transform: `rotate(90) translate(${-s[0]},${s[1]}) scale(1,-1)`,
        width: s[3] - s[1],
        height: s[2] - s[0]
      };
    case 180:
      return {
        transform: `rotate(180) translate(${-s[2]},${s[1]}) scale(1,-1)`,
        width: s[2] - s[0],
        height: s[3] - s[1]
      };
    case 270:
      return {
        transform: `rotate(270) translate(${-s[2]},${s[3]}) scale(1,-1)`,
        width: s[3] - s[1],
        height: s[2] - s[0]
      };
    default:
      return {
        transform: `translate(${-s[0]},${s[3]}) scale(1,-1)`,
        width: s[2] - s[0],
        height: s[3] - s[1]
      };
  }
};
class Rb extends zt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    }), this.annotationEditorType = Z.HIGHLIGHT;
  }
  render() {
    const {
      data: {
        overlaidText: t,
        popupRef: e
      }
    } = this;
    if (!e && this.hasPopupData && this._createPopup(), this.container.classList.add("highlightAnnotation"), this._editOnDoubleClick(), t) {
      const s = document.createElement("mark");
      s.classList.add("overlaidText"), s.textContent = t, this.container.append(s);
    }
    return this.container;
  }
}
class Qw extends zt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    const {
      data: {
        overlaidText: t,
        popupRef: e
      }
    } = this;
    if (!e && this.hasPopupData && this._createPopup(), this.container.classList.add("underlineAnnotation"), t) {
      const s = document.createElement("u");
      s.classList.add("overlaidText"), s.textContent = t, this.container.append(s);
    }
    return this.container;
  }
}
class tA extends zt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    const {
      data: {
        overlaidText: t,
        popupRef: e
      }
    } = this;
    if (!e && this.hasPopupData && this._createPopup(), this.container.classList.add("squigglyAnnotation"), t) {
      const s = document.createElement("u");
      s.classList.add("overlaidText"), s.textContent = t, this.container.append(s);
    }
    return this.container;
  }
}
class eA extends zt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    const {
      data: {
        overlaidText: t,
        popupRef: e
      }
    } = this;
    if (!e && this.hasPopupData && this._createPopup(), this.container.classList.add("strikeoutAnnotation"), t) {
      const s = document.createElement("s");
      s.classList.add("overlaidText"), s.textContent = t, this.container.append(s);
    }
    return this.container;
  }
}
class kb extends zt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    }), this.annotationEditorType = Z.STAMP;
  }
  render() {
    return this.container.classList.add("stampAnnotation"), this.container.setAttribute("role", "img"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this._editOnDoubleClick(), this.container;
  }
}
var qc, Xc, up;
class sA extends zt {
  constructor(e) {
    var i;
    super(e, {
      isRenderable: !0
    });
    y(this, Xc);
    y(this, qc, null);
    const {
      file: s
    } = this.data;
    this.filename = s.filename, this.content = s.content, (i = this.linkService.eventBus) == null || i.dispatch("fileattachmentannotation", {
      source: this,
      ...s
    });
  }
  render() {
    this.container.classList.add("fileAttachmentAnnotation");
    const {
      container: e,
      data: s
    } = this;
    let i;
    s.hasAppearance || s.fillAlpha === 0 ? i = document.createElement("div") : (i = document.createElement("img"), i.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(s.name) ? "paperclip" : "pushpin"}.svg`, s.fillAlpha && s.fillAlpha < 1 && (i.style = `filter: opacity(${Math.round(s.fillAlpha * 100)}%);`)), i.addEventListener("dblclick", w(this, Xc, up).bind(this)), g(this, qc, i);
    const {
      isMac: r
    } = ge.platform;
    return e.addEventListener("keydown", (a) => {
      a.key === "Enter" && (r ? a.metaKey : a.ctrlKey) && w(this, Xc, up).call(this);
    }), !s.popupRef && this.hasPopupData ? this._createPopup() : i.classList.add("popupTriggerArea"), e.append(i), e;
  }
  getElementsToTriggerPopup() {
    return n(this, qc);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
qc = new WeakMap(), Xc = new WeakSet(), up = function() {
  var e;
  (e = this.downloadManager) == null || e.openOrDownloadData(this.content, this.filename);
};
var xl, ka, El, pr, Yc, La, Dr, fp, pp, _l;
let eg = (_l = class {
  constructor({
    div: t,
    accessibilityManager: e,
    annotationCanvasMap: s,
    annotationEditorUIManager: i,
    page: r,
    viewport: a,
    structTreeLayer: o,
    commentManager: l,
    linkService: h,
    annotationStorage: d
  }) {
    y(this, Dr);
    y(this, xl, null);
    y(this, ka, null);
    y(this, El, null);
    y(this, pr, /* @__PURE__ */ new Map());
    y(this, Yc, null);
    y(this, La, null);
    this.div = t, g(this, xl, e), g(this, ka, s), g(this, Yc, o || null), g(this, La, h || null), g(this, El, d || new Xp()), this.page = r, this.viewport = a, this.zIndex = 0, this._annotationEditorUIManager = i, this._commentManager = l || null;
  }
  hasEditableAnnotations() {
    return n(this, pr).size > 0;
  }
  async render(t) {
    var a, o, l;
    const {
      annotations: e
    } = t, s = this.div;
    Rr(s, this.viewport);
    const i = /* @__PURE__ */ new Map(), r = {
      data: null,
      layer: s,
      linkService: n(this, La),
      downloadManager: t.downloadManager,
      imageResourcesPath: t.imageResourcesPath || "",
      renderForms: t.renderForms !== !1,
      svgFactory: new Mh(),
      annotationStorage: n(this, El),
      enableComment: t.enableComment === !0,
      enableScripting: t.enableScripting === !0,
      hasJSActions: t.hasJSActions,
      fieldObjects: t.fieldObjects,
      parent: this,
      elements: null
    };
    for (const h of e) {
      if (h.noHTML)
        continue;
      const d = h.annotationType === Yt.POPUP;
      if (d) {
        const b = i.get(h.id);
        if (!b)
          continue;
        r.elements = b;
      } else if (h.rect[2] === h.rect[0] || h.rect[3] === h.rect[1])
        continue;
      r.data = h;
      const u = Hg.create(r);
      if (!u.isRenderable)
        continue;
      if (!d && h.popupRef) {
        const b = i.get(h.popupRef);
        b ? b.push(u) : i.set(h.popupRef, [u]);
      }
      const p = u.render();
      h.hidden && (p.style.visibility = "hidden"), await w(this, Dr, fp).call(this, p, h.id, r.elements), (o = (a = u.extraPopupElement) == null ? void 0 : a.popup) == null || o.renderCommentButton(), u._isEditable && (n(this, pr).set(u.data.id, u), (l = this._annotationEditorUIManager) == null || l.renderAnnotationElement(u));
    }
    w(this, Dr, pp).call(this);
  }
  async addLinkAnnotations(t) {
    const e = {
      data: null,
      layer: this.div,
      linkService: n(this, La),
      svgFactory: new Mh(),
      parent: this
    };
    for (const s of t) {
      s.borderStyle || (s.borderStyle = _l._defaultBorderStyle), e.data = s;
      const i = Hg.create(e);
      if (!i.isRenderable)
        continue;
      const r = i.render();
      await w(this, Dr, fp).call(this, r, s.id, null);
    }
  }
  update({
    viewport: t
  }) {
    const e = this.div;
    this.viewport = t, Rr(e, {
      rotation: t.rotation
    }), w(this, Dr, pp).call(this), e.hidden = !1;
  }
  getEditableAnnotations() {
    return Array.from(n(this, pr).values());
  }
  getEditableAnnotation(t) {
    return n(this, pr).get(t);
  }
  addFakeAnnotation(t) {
    var o;
    const {
      div: e
    } = this, {
      id: s,
      rotation: i
    } = t, r = new Hw({
      data: {
        id: s,
        rect: t.getPDFRect(),
        rotation: i
      },
      editor: t,
      layer: e,
      parent: this,
      enableComment: !!this._commentManager,
      linkService: n(this, La),
      annotationStorage: n(this, El)
    }), a = r.render();
    return e.append(a), (o = n(this, xl)) == null || o.moveElementInDOM(e, a, a, !1), r.createOrUpdatePopup(), r;
  }
  static get _defaultBorderStyle() {
    return et(this, "_defaultBorderStyle", Object.freeze({
      width: 1,
      rawWidth: 1,
      style: no.SOLID,
      dashArray: [3],
      horizontalCornerRadius: 0,
      verticalCornerRadius: 0
    }));
  }
}, xl = new WeakMap(), ka = new WeakMap(), El = new WeakMap(), pr = new WeakMap(), Yc = new WeakMap(), La = new WeakMap(), Dr = new WeakSet(), fp = async function(t, e, s) {
  var o, l;
  const i = t.firstChild || t, r = i.id = `${jp}${e}`, a = await ((o = n(this, Yc)) == null ? void 0 : o.getAriaAttributes(r));
  if (a)
    for (const [h, d] of a)
      i.setAttribute(h, d);
  s ? s.at(-1).container.after(t) : (this.div.append(t), (l = n(this, xl)) == null || l.moveElementInDOM(this.div, t, i, !1));
}, pp = function() {
  var e;
  if (!n(this, ka))
    return;
  const t = this.div;
  for (const [s, i] of n(this, ka)) {
    const r = t.querySelector(`[data-annotation-id="${s}"]`);
    if (!r)
      continue;
    i.className = "annotationContent";
    const {
      firstChild: a
    } = r;
    a ? a.nodeName === "CANVAS" ? a.replaceWith(i) : a.classList.contains("annotationContent") ? a.after(i) : a.before(i) : r.append(i);
    const o = n(this, pr).get(s);
    o && (o._hasNoCanvas ? ((e = this._annotationEditorUIManager) == null || e.setMissingCanvas(s, r.id, i), o._hasNoCanvas = !1) : o.canvas = i);
  }
  n(this, ka).clear();
}, _l);
const Md = /\r\n?|\n/g;
var us, Kc, Da, fs, ee, Lb, Db, Mb, Jd, Cn, Qd, tu, Ib, mp, Fb;
const Dt = class Dt extends kt {
  constructor(e) {
    super({
      ...e,
      name: "freeTextEditor"
    });
    y(this, ee);
    y(this, us, "");
    y(this, Kc, `${this.id}-editor`);
    y(this, Da, null);
    y(this, fs);
    N(this, "_colorPicker", null);
    this.color = e.color || Dt._defaultColor || kt._defaultLineColor, g(this, fs, e.fontSize || Dt._defaultFontSize), this.annotationElementId || this._uiManager.a11yAlert("pdfjs-editor-freetext-added-alert");
  }
  static get _keyboardManager() {
    const e = Dt.prototype, s = (a) => a.isEmpty(), i = kr.TRANSLATE_SMALL, r = kr.TRANSLATE_BIG;
    return et(this, "_keyboardManager", new yd([[["ctrl+s", "mac+meta+s", "ctrl+p", "mac+meta+p"], e.commitOrRemove, {
      bubbles: !0
    }], [["ctrl+Enter", "mac+meta+Enter", "Escape", "mac+Escape"], e.commitOrRemove], [["ArrowLeft", "mac+ArrowLeft"], e._translateEmpty, {
      args: [-i, 0],
      checker: s
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], e._translateEmpty, {
      args: [-r, 0],
      checker: s
    }], [["ArrowRight", "mac+ArrowRight"], e._translateEmpty, {
      args: [i, 0],
      checker: s
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], e._translateEmpty, {
      args: [r, 0],
      checker: s
    }], [["ArrowUp", "mac+ArrowUp"], e._translateEmpty, {
      args: [0, -i],
      checker: s
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], e._translateEmpty, {
      args: [0, -r],
      checker: s
    }], [["ArrowDown", "mac+ArrowDown"], e._translateEmpty, {
      args: [0, i],
      checker: s
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], e._translateEmpty, {
      args: [0, r],
      checker: s
    }]]));
  }
  static initialize(e, s) {
    kt.initialize(e, s);
    const i = getComputedStyle(document.documentElement);
    this._internalPadding = parseFloat(i.getPropertyValue("--freetext-padding"));
  }
  static updateDefaultParams(e, s) {
    switch (e) {
      case at.FREETEXT_SIZE:
        Dt._defaultFontSize = s;
        break;
      case at.FREETEXT_COLOR:
        Dt._defaultColor = s;
        break;
    }
  }
  updateParams(e, s) {
    switch (e) {
      case at.FREETEXT_SIZE:
        w(this, ee, Lb).call(this, s);
        break;
      case at.FREETEXT_COLOR:
        w(this, ee, Db).call(this, s);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[at.FREETEXT_SIZE, Dt._defaultFontSize], [at.FREETEXT_COLOR, Dt._defaultColor || kt._defaultLineColor]];
  }
  get propertiesToUpdate() {
    return [[at.FREETEXT_SIZE, n(this, fs)], [at.FREETEXT_COLOR, this.color]];
  }
  get toolbarButtons() {
    return this._colorPicker || (this._colorPicker = new wu(this)), [["colorPicker", this._colorPicker]];
  }
  get colorType() {
    return at.FREETEXT_COLOR;
  }
  onUpdatedColor() {
    var e;
    this.editorDiv.style.color = this.color, (e = this._colorPicker) == null || e.update(this.color), super.onUpdatedColor();
  }
  _translateEmpty(e, s) {
    this._uiManager.translateSelectedEditors(e, s, !0);
  }
  getInitialTranslation() {
    const e = this.parentScale;
    return [-Dt._internalPadding * e, -(Dt._internalPadding + n(this, fs)) * e];
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (this.isAttachedToDOM || this.parent.add(this)));
  }
  enableEditMode() {
    if (!super.enableEditMode())
      return !1;
    this.overlayDiv.classList.remove("enabled"), this.editorDiv.contentEditable = !0, this._isDraggable = !1, this.div.removeAttribute("aria-activedescendant"), g(this, Da, new AbortController());
    const e = this._uiManager.combinedSignal(n(this, Da));
    return this.editorDiv.addEventListener("keydown", this.editorDivKeydown.bind(this), {
      signal: e
    }), this.editorDiv.addEventListener("focus", this.editorDivFocus.bind(this), {
      signal: e
    }), this.editorDiv.addEventListener("blur", this.editorDivBlur.bind(this), {
      signal: e
    }), this.editorDiv.addEventListener("input", this.editorDivInput.bind(this), {
      signal: e
    }), this.editorDiv.addEventListener("paste", this.editorDivPaste.bind(this), {
      signal: e
    }), !0;
  }
  disableEditMode() {
    var e;
    return super.disableEditMode() ? (this.overlayDiv.classList.add("enabled"), this.editorDiv.contentEditable = !1, this.div.setAttribute("aria-activedescendant", n(this, Kc)), this._isDraggable = !0, (e = n(this, Da)) == null || e.abort(), g(this, Da, null), this.div.focus({
      preventScroll: !0
    }), this.isEditing = !1, this.parent.div.classList.add("freetextEditing"), !0) : !1;
  }
  focusin(e) {
    this._focusEventsAllowed && (super.focusin(e), e.target !== this.editorDiv && this.editorDiv.focus());
  }
  onceAdded(e) {
    var s;
    this.width || (this.enableEditMode(), e && this.editorDiv.focus(), (s = this._initialOptions) != null && s.isCentered && this.center(), this._initialOptions = null);
  }
  isEmpty() {
    return !this.editorDiv || this.editorDiv.innerText.trim() === "";
  }
  remove() {
    this.isEditing = !1, this.parent && (this.parent.setEditingState(!0), this.parent.div.classList.add("freetextEditing")), super.remove();
  }
  commit() {
    if (!this.isInEditMode())
      return;
    super.commit(), this.disableEditMode();
    const e = n(this, us), s = g(this, us, w(this, ee, Mb).call(this).trimEnd());
    if (e === s)
      return;
    const i = (r) => {
      if (g(this, us, r), !r) {
        this.remove();
        return;
      }
      w(this, ee, tu).call(this), this._uiManager.rebuild(this), w(this, ee, Jd).call(this);
    };
    this.addCommands({
      cmd: () => {
        i(s);
      },
      undo: () => {
        i(e);
      },
      mustExec: !1
    }), w(this, ee, Jd).call(this);
  }
  shouldGetKeyboardEvents() {
    return this.isInEditMode();
  }
  enterInEditMode() {
    this.enableEditMode(), this.editorDiv.focus();
  }
  keydown(e) {
    e.target === this.div && e.key === "Enter" && (this.enterInEditMode(), e.preventDefault());
  }
  editorDivKeydown(e) {
    Dt._keyboardManager.exec(this, e);
  }
  editorDivFocus(e) {
    this.isEditing = !0;
  }
  editorDivBlur(e) {
    this.isEditing = !1;
  }
  editorDivInput(e) {
    this.parent.div.classList.toggle("freetextEditing", this.isEmpty());
  }
  disableEditing() {
    this.editorDiv.setAttribute("role", "comment"), this.editorDiv.removeAttribute("aria-multiline");
  }
  enableEditing() {
    this.editorDiv.setAttribute("role", "textbox"), this.editorDiv.setAttribute("aria-multiline", !0);
  }
  get canChangeContent() {
    return !0;
  }
  render() {
    if (this.div)
      return this.div;
    let e, s;
    (this._isCopy || this.annotationElementId) && (e = this.x, s = this.y), super.render(), this.editorDiv = document.createElement("div"), this.editorDiv.className = "internal", this.editorDiv.setAttribute("id", n(this, Kc)), this.editorDiv.setAttribute("data-l10n-id", "pdfjs-free-text2"), this.editorDiv.setAttribute("data-l10n-attrs", "default-content"), this.enableEditing(), this.editorDiv.contentEditable = !0;
    const {
      style: i
    } = this.editorDiv;
    if (i.fontSize = `calc(${n(this, fs)}px * var(--total-scale-factor))`, i.color = this.color, this.div.append(this.editorDiv), this.overlayDiv = document.createElement("div"), this.overlayDiv.classList.add("overlay", "enabled"), this.div.append(this.overlayDiv), this._isCopy || this.annotationElementId) {
      const [r, a] = this.parentDimensions;
      if (this.annotationElementId) {
        const {
          position: o
        } = this._initialData;
        let [l, h] = this.getInitialTranslation();
        [l, h] = this.pageTranslationToScreen(l, h);
        const [d, u] = this.pageDimensions, [p, b] = this.pageTranslation;
        let S, v;
        switch (this.rotation) {
          case 0:
            S = e + (o[0] - p) / d, v = s + this.height - (o[1] - b) / u;
            break;
          case 90:
            S = e + (o[0] - p) / d, v = s - (o[1] - b) / u, [l, h] = [h, -l];
            break;
          case 180:
            S = e - this.width + (o[0] - p) / d, v = s - (o[1] - b) / u, [l, h] = [-l, -h];
            break;
          case 270:
            S = e + (o[0] - p - this.height * u) / d, v = s + (o[1] - b - this.width * d) / u, [l, h] = [-h, l];
            break;
        }
        this.setAt(S * r, v * a, l, h);
      } else
        this._moveAfterPaste(e, s);
      w(this, ee, tu).call(this), this._isDraggable = !0, this.editorDiv.contentEditable = !1;
    } else
      this._isDraggable = !1, this.editorDiv.contentEditable = !0;
    return this.div;
  }
  editorDivPaste(e) {
    var S, v, E;
    const s = e.clipboardData || window.clipboardData, {
      types: i
    } = s;
    if (i.length === 1 && i[0] === "text/plain")
      return;
    e.preventDefault();
    const r = w(S = Dt, Cn, mp).call(S, s.getData("text") || "").replaceAll(Md, `
`);
    if (!r)
      return;
    const a = window.getSelection();
    if (!a.rangeCount)
      return;
    this.editorDiv.normalize(), a.deleteFromDocument();
    const o = a.getRangeAt(0);
    if (!r.includes(`
`)) {
      o.insertNode(document.createTextNode(r)), this.editorDiv.normalize(), a.collapseToStart();
      return;
    }
    const {
      startContainer: l,
      startOffset: h
    } = o, d = [], u = [];
    if (l.nodeType === Node.TEXT_NODE) {
      const x = l.parentElement;
      if (u.push(l.nodeValue.slice(h).replaceAll(Md, "")), x !== this.editorDiv) {
        let T = d;
        for (const _ of this.editorDiv.childNodes) {
          if (_ === x) {
            T = u;
            continue;
          }
          T.push(w(v = Dt, Cn, Qd).call(v, _));
        }
      }
      d.push(l.nodeValue.slice(0, h).replaceAll(Md, ""));
    } else if (l === this.editorDiv) {
      let x = d, T = 0;
      for (const _ of this.editorDiv.childNodes)
        T++ === h && (x = u), x.push(w(E = Dt, Cn, Qd).call(E, _));
    }
    g(this, us, `${d.join(`
`)}${r}${u.join(`
`)}`), w(this, ee, tu).call(this);
    const p = new Range();
    let b = Math.sumPrecise(d.map((x) => x.length));
    for (const {
      firstChild: x
    } of this.editorDiv.childNodes)
      if (x.nodeType === Node.TEXT_NODE) {
        const T = x.nodeValue.length;
        if (b <= T) {
          p.setStart(x, b), p.setEnd(x, b);
          break;
        }
        b -= T;
      }
    a.removeAllRanges(), a.addRange(p);
  }
  get contentDiv() {
    return this.editorDiv;
  }
  getPDFRect() {
    const e = Dt._internalPadding * this.parentScale;
    return this.getRect(e, e);
  }
  static async deserialize(e, s, i) {
    var o;
    let r = null;
    if (e instanceof Tb) {
      const {
        data: {
          defaultAppearanceData: {
            fontSize: l,
            fontColor: h
          },
          rect: d,
          rotation: u,
          id: p,
          popupRef: b,
          richText: S,
          contentsObj: v,
          creationDate: E,
          modificationDate: x
        },
        textContent: T,
        textPosition: _,
        parent: {
          page: {
            pageNumber: f
          }
        }
      } = e;
      if (!T || T.length === 0)
        return null;
      r = e = {
        annotationType: Z.FREETEXT,
        color: Array.from(h),
        fontSize: l,
        value: T.join(`
`),
        position: _,
        pageIndex: f - 1,
        rect: d.slice(0),
        rotation: u,
        annotationElementId: p,
        id: p,
        deleted: !1,
        popupRef: b,
        comment: (v == null ? void 0 : v.str) || null,
        richText: S,
        creationDate: E,
        modificationDate: x
      };
    }
    const a = await super.deserialize(e, s, i);
    return g(a, fs, e.fontSize), a.color = W.makeHexColor(...e.color), g(a, us, w(o = Dt, Cn, mp).call(o, e.value)), a._initialData = r, e.comment && a.setCommentData(e), a;
  }
  serialize(e = !1) {
    if (this.isEmpty())
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const s = kt._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : this.color), i = Object.assign(super.serialize(e), {
      color: s,
      fontSize: n(this, fs),
      value: w(this, ee, Ib).call(this)
    });
    return this.addComment(i), e ? (i.isCopy = !0, i) : this.annotationElementId && !w(this, ee, Fb).call(this, i) ? null : (i.id = this.annotationElementId, i);
  }
  renderAnnotationElement(e) {
    const s = super.renderAnnotationElement(e);
    if (!s)
      return null;
    const {
      style: i
    } = s;
    i.fontSize = `calc(${n(this, fs)}px * var(--total-scale-factor))`, i.color = this.color, s.replaceChildren();
    for (const r of n(this, us).split(`
`)) {
      const a = document.createElement("div");
      a.append(r ? document.createTextNode(r) : document.createElement("br")), s.append(a);
    }
    return e.updateEdited({
      rect: this.getPDFRect(),
      popup: this._uiManager.hasCommentManager() || this.hasEditedComment ? this.comment : {
        text: n(this, us)
      }
    }), s;
  }
  resetAnnotationElement(e) {
    super.resetAnnotationElement(e), e.resetEdited();
  }
};
us = new WeakMap(), Kc = new WeakMap(), Da = new WeakMap(), fs = new WeakMap(), ee = new WeakSet(), Lb = function(e) {
  const s = (r) => {
    this.editorDiv.style.fontSize = `calc(${r}px * var(--total-scale-factor))`, this.translate(0, -(r - n(this, fs)) * this.parentScale), g(this, fs, r), w(this, ee, Jd).call(this);
  }, i = n(this, fs);
  this.addCommands({
    cmd: s.bind(this, e),
    undo: s.bind(this, i),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: at.FREETEXT_SIZE,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, Db = function(e) {
  const s = (r) => {
    this.color = r, this.onUpdatedColor();
  }, i = this.color;
  this.addCommands({
    cmd: s.bind(this, e),
    undo: s.bind(this, i),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: at.FREETEXT_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, Mb = function() {
  var i;
  const e = [];
  this.editorDiv.normalize();
  let s = null;
  for (const r of this.editorDiv.childNodes)
    (s == null ? void 0 : s.nodeType) === Node.TEXT_NODE && r.nodeName === "BR" || (e.push(w(i = Dt, Cn, Qd).call(i, r)), s = r);
  return e.join(`
`);
}, Jd = function() {
  const [e, s] = this.parentDimensions;
  let i;
  if (this.isAttachedToDOM)
    i = this.div.getBoundingClientRect();
  else {
    const {
      currentLayer: r,
      div: a
    } = this, o = a.style.display, l = a.classList.contains("hidden");
    a.classList.remove("hidden"), a.style.display = "hidden", r.div.append(this.div), i = a.getBoundingClientRect(), a.remove(), a.style.display = o, a.classList.toggle("hidden", l);
  }
  this.rotation % 180 === this.parentRotation % 180 ? (this.width = i.width / e, this.height = i.height / s) : (this.width = i.height / e, this.height = i.width / s), this.fixAndSetPosition();
}, Cn = new WeakSet(), Qd = function(e) {
  return (e.nodeType === Node.TEXT_NODE ? e.nodeValue : e.innerText).replaceAll(Md, "");
}, tu = function() {
  if (this.editorDiv.replaceChildren(), !!n(this, us))
    for (const e of n(this, us).split(`
`)) {
      const s = document.createElement("div");
      s.append(e ? document.createTextNode(e) : document.createElement("br")), this.editorDiv.append(s);
    }
}, Ib = function() {
  return n(this, us).replaceAll(" ", " ");
}, mp = function(e) {
  return e.replaceAll(" ", " ");
}, Fb = function(e) {
  const {
    value: s,
    fontSize: i,
    color: r,
    pageIndex: a
  } = this._initialData;
  return this.hasEditedComment || this._hasBeenMoved || e.value !== s || e.fontSize !== i || e.color.some((o, l) => o !== r[l]) || e.pageIndex !== a;
}, y(Dt, Cn), N(Dt, "_freeTextDefaultContent", ""), N(Dt, "_internalPadding", 0), N(Dt, "_defaultColor", null), N(Dt, "_defaultFontSize", 10), N(Dt, "_type", "freetext"), N(Dt, "_editorType", Z.FREETEXT);
let gp = Dt;
class G {
  toSVGPath() {
    Tt("Abstract method `toSVGPath` must be implemented.");
  }
  get box() {
    Tt("Abstract getter `box` must be implemented.");
  }
  serialize(t, e) {
    Tt("Abstract method `serialize` must be implemented.");
  }
  static _rescale(t, e, s, i, r, a) {
    a || (a = new Float32Array(t.length));
    for (let o = 0, l = t.length; o < l; o += 2)
      a[o] = e + t[o] * i, a[o + 1] = s + t[o + 1] * r;
    return a;
  }
  static _rescaleAndSwap(t, e, s, i, r, a) {
    a || (a = new Float32Array(t.length));
    for (let o = 0, l = t.length; o < l; o += 2)
      a[o] = e + t[o + 1] * i, a[o + 1] = s + t[o] * r;
    return a;
  }
  static _translate(t, e, s, i) {
    i || (i = new Float32Array(t.length));
    for (let r = 0, a = t.length; r < a; r += 2)
      i[r] = e + t[r], i[r + 1] = s + t[r + 1];
    return i;
  }
  static svgRound(t) {
    return Math.round(t * 1e4);
  }
  static _normalizePoint(t, e, s, i, r) {
    switch (r) {
      case 90:
        return [1 - e / s, t / i];
      case 180:
        return [1 - t / s, 1 - e / i];
      case 270:
        return [e / s, 1 - t / i];
      default:
        return [t / s, e / i];
    }
  }
  static _normalizePagePoint(t, e, s) {
    switch (s) {
      case 90:
        return [1 - e, t];
      case 180:
        return [1 - t, 1 - e];
      case 270:
        return [e, 1 - t];
      default:
        return [t, e];
    }
  }
  static createBezierPoints(t, e, s, i, r, a) {
    return [(t + 5 * s) / 6, (e + 5 * i) / 6, (5 * s + r) / 6, (5 * i + a) / 6, (s + r) / 2, (i + a) / 2];
  }
}
N(G, "PRECISION", 1e-4);
var ps, Zs, Cl, Tl, Pi, nt, Ma, Ia, Zc, Jc, Pl, Rl, gr, Qc, $u, Hu, oe, wh, Nb, Ob, Bb, $b, Hb, Ub;
const Gi = class Gi {
  constructor({
    x: t,
    y: e
  }, s, i, r, a, o = 0) {
    y(this, oe);
    y(this, ps);
    y(this, Zs, []);
    y(this, Cl);
    y(this, Tl);
    y(this, Pi, []);
    y(this, nt, new Float32Array(18));
    y(this, Ma);
    y(this, Ia);
    y(this, Zc);
    y(this, Jc);
    y(this, Pl);
    y(this, Rl);
    y(this, gr, []);
    g(this, ps, s), g(this, Rl, r * i), g(this, Tl, a), n(this, nt).set([NaN, NaN, NaN, NaN, t, e], 6), g(this, Cl, o), g(this, Jc, n(Gi, Qc) * i), g(this, Zc, n(Gi, Hu) * i), g(this, Pl, i), n(this, gr).push(t, e);
  }
  isEmpty() {
    return isNaN(n(this, nt)[8]);
  }
  add({
    x: t,
    y: e
  }) {
    var R;
    g(this, Ma, t), g(this, Ia, e);
    const [s, i, r, a] = n(this, ps);
    let [o, l, h, d] = n(this, nt).subarray(8, 12);
    const u = t - h, p = e - d, b = Math.hypot(u, p);
    if (b < n(this, Zc))
      return !1;
    const S = b - n(this, Jc), v = S / b, E = v * u, x = v * p;
    let T = o, _ = l;
    o = h, l = d, h += E, d += x, (R = n(this, gr)) == null || R.push(t, e);
    const f = -x / S, m = E / S, A = f * n(this, Rl), C = m * n(this, Rl);
    return n(this, nt).set(n(this, nt).subarray(2, 8), 0), n(this, nt).set([h + A, d + C], 4), n(this, nt).set(n(this, nt).subarray(14, 18), 12), n(this, nt).set([h - A, d - C], 16), isNaN(n(this, nt)[6]) ? (n(this, Pi).length === 0 && (n(this, nt).set([o + A, l + C], 2), n(this, Pi).push(NaN, NaN, NaN, NaN, (o + A - s) / r, (l + C - i) / a), n(this, nt).set([o - A, l - C], 14), n(this, Zs).push(NaN, NaN, NaN, NaN, (o - A - s) / r, (l - C - i) / a)), n(this, nt).set([T, _, o, l, h, d], 6), !this.isEmpty()) : (n(this, nt).set([T, _, o, l, h, d], 6), Math.abs(Math.atan2(_ - l, T - o) - Math.atan2(x, E)) < Math.PI / 2 ? ([o, l, h, d] = n(this, nt).subarray(2, 6), n(this, Pi).push(NaN, NaN, NaN, NaN, ((o + h) / 2 - s) / r, ((l + d) / 2 - i) / a), [o, l, T, _] = n(this, nt).subarray(14, 18), n(this, Zs).push(NaN, NaN, NaN, NaN, ((T + o) / 2 - s) / r, ((_ + l) / 2 - i) / a), !0) : ([T, _, o, l, h, d] = n(this, nt).subarray(0, 6), n(this, Pi).push(((T + 5 * o) / 6 - s) / r, ((_ + 5 * l) / 6 - i) / a, ((5 * o + h) / 6 - s) / r, ((5 * l + d) / 6 - i) / a, ((o + h) / 2 - s) / r, ((l + d) / 2 - i) / a), [h, d, o, l, T, _] = n(this, nt).subarray(12, 18), n(this, Zs).push(((T + 5 * o) / 6 - s) / r, ((_ + 5 * l) / 6 - i) / a, ((5 * o + h) / 6 - s) / r, ((5 * l + d) / 6 - i) / a, ((o + h) / 2 - s) / r, ((l + d) / 2 - i) / a), !0));
  }
  toSVGPath() {
    if (this.isEmpty())
      return "";
    const t = n(this, Pi), e = n(this, Zs);
    if (isNaN(n(this, nt)[6]) && !this.isEmpty())
      return w(this, oe, Nb).call(this);
    const s = [];
    s.push(`M${t[4]} ${t[5]}`);
    for (let i = 6; i < t.length; i += 6)
      isNaN(t[i]) ? s.push(`L${t[i + 4]} ${t[i + 5]}`) : s.push(`C${t[i]} ${t[i + 1]} ${t[i + 2]} ${t[i + 3]} ${t[i + 4]} ${t[i + 5]}`);
    w(this, oe, Bb).call(this, s);
    for (let i = e.length - 6; i >= 6; i -= 6)
      isNaN(e[i]) ? s.push(`L${e[i + 4]} ${e[i + 5]}`) : s.push(`C${e[i]} ${e[i + 1]} ${e[i + 2]} ${e[i + 3]} ${e[i + 4]} ${e[i + 5]}`);
    return w(this, oe, Ob).call(this, s), s.join(" ");
  }
  newFreeDrawOutline(t, e, s, i, r, a) {
    return new zb(t, e, s, i, r, a);
  }
  getOutlines() {
    var u;
    const t = n(this, Pi), e = n(this, Zs), s = n(this, nt), [i, r, a, o] = n(this, ps), l = new Float32Array((((u = n(this, gr)) == null ? void 0 : u.length) ?? 0) + 2);
    for (let p = 0, b = l.length - 2; p < b; p += 2)
      l[p] = (n(this, gr)[p] - i) / a, l[p + 1] = (n(this, gr)[p + 1] - r) / o;
    if (l[l.length - 2] = (n(this, Ma) - i) / a, l[l.length - 1] = (n(this, Ia) - r) / o, isNaN(s[6]) && !this.isEmpty())
      return w(this, oe, $b).call(this, l);
    const h = new Float32Array(n(this, Pi).length + 24 + n(this, Zs).length);
    let d = t.length;
    for (let p = 0; p < d; p += 2) {
      if (isNaN(t[p])) {
        h[p] = h[p + 1] = NaN;
        continue;
      }
      h[p] = t[p], h[p + 1] = t[p + 1];
    }
    d = w(this, oe, Ub).call(this, h, d);
    for (let p = e.length - 6; p >= 6; p -= 6)
      for (let b = 0; b < 6; b += 2) {
        if (isNaN(e[p + b])) {
          h[d] = h[d + 1] = NaN, d += 2;
          continue;
        }
        h[d] = e[p + b], h[d + 1] = e[p + b + 1], d += 2;
      }
    return w(this, oe, Hb).call(this, h, d), this.newFreeDrawOutline(h, l, n(this, ps), n(this, Pl), n(this, Cl), n(this, Tl));
  }
};
ps = new WeakMap(), Zs = new WeakMap(), Cl = new WeakMap(), Tl = new WeakMap(), Pi = new WeakMap(), nt = new WeakMap(), Ma = new WeakMap(), Ia = new WeakMap(), Zc = new WeakMap(), Jc = new WeakMap(), Pl = new WeakMap(), Rl = new WeakMap(), gr = new WeakMap(), Qc = new WeakMap(), $u = new WeakMap(), Hu = new WeakMap(), oe = new WeakSet(), wh = function() {
  const t = n(this, nt).subarray(4, 6), e = n(this, nt).subarray(16, 18), [s, i, r, a] = n(this, ps);
  return [(n(this, Ma) + (t[0] - e[0]) / 2 - s) / r, (n(this, Ia) + (t[1] - e[1]) / 2 - i) / a, (n(this, Ma) + (e[0] - t[0]) / 2 - s) / r, (n(this, Ia) + (e[1] - t[1]) / 2 - i) / a];
}, Nb = function() {
  const [t, e, s, i] = n(this, ps), [r, a, o, l] = w(this, oe, wh).call(this);
  return `M${(n(this, nt)[2] - t) / s} ${(n(this, nt)[3] - e) / i} L${(n(this, nt)[4] - t) / s} ${(n(this, nt)[5] - e) / i} L${r} ${a} L${o} ${l} L${(n(this, nt)[16] - t) / s} ${(n(this, nt)[17] - e) / i} L${(n(this, nt)[14] - t) / s} ${(n(this, nt)[15] - e) / i} Z`;
}, Ob = function(t) {
  const e = n(this, Zs);
  t.push(`L${e[4]} ${e[5]} Z`);
}, Bb = function(t) {
  const [e, s, i, r] = n(this, ps), a = n(this, nt).subarray(4, 6), o = n(this, nt).subarray(16, 18), [l, h, d, u] = w(this, oe, wh).call(this);
  t.push(`L${(a[0] - e) / i} ${(a[1] - s) / r} L${l} ${h} L${d} ${u} L${(o[0] - e) / i} ${(o[1] - s) / r}`);
}, $b = function(t) {
  const e = n(this, nt), [s, i, r, a] = n(this, ps), [o, l, h, d] = w(this, oe, wh).call(this), u = new Float32Array(36);
  return u.set([NaN, NaN, NaN, NaN, (e[2] - s) / r, (e[3] - i) / a, NaN, NaN, NaN, NaN, (e[4] - s) / r, (e[5] - i) / a, NaN, NaN, NaN, NaN, o, l, NaN, NaN, NaN, NaN, h, d, NaN, NaN, NaN, NaN, (e[16] - s) / r, (e[17] - i) / a, NaN, NaN, NaN, NaN, (e[14] - s) / r, (e[15] - i) / a], 0), this.newFreeDrawOutline(u, t, n(this, ps), n(this, Pl), n(this, Cl), n(this, Tl));
}, Hb = function(t, e) {
  const s = n(this, Zs);
  return t.set([NaN, NaN, NaN, NaN, s[4], s[5]], e), e += 6;
}, Ub = function(t, e) {
  const s = n(this, nt).subarray(4, 6), i = n(this, nt).subarray(16, 18), [r, a, o, l] = n(this, ps), [h, d, u, p] = w(this, oe, wh).call(this);
  return t.set([NaN, NaN, NaN, NaN, (s[0] - r) / o, (s[1] - a) / l, NaN, NaN, NaN, NaN, h, d, NaN, NaN, NaN, NaN, u, p, NaN, NaN, NaN, NaN, (i[0] - r) / o, (i[1] - a) / l], e), e += 24;
}, y(Gi, Qc, 8), y(Gi, $u, 2), y(Gi, Hu, n(Gi, Qc) + n(Gi, $u));
let Au = Gi;
var kl, Fa, yn, td, gs, ed, Zt, Uu, Gb;
class zb extends G {
  constructor(e, s, i, r, a, o) {
    super();
    y(this, Uu);
    y(this, kl);
    y(this, Fa, new Float32Array(4));
    y(this, yn);
    y(this, td);
    y(this, gs);
    y(this, ed);
    y(this, Zt);
    g(this, Zt, e), g(this, gs, s), g(this, kl, i), g(this, ed, r), g(this, yn, a), g(this, td, o), this.firstPoint = [NaN, NaN], this.lastPoint = [NaN, NaN], w(this, Uu, Gb).call(this, o);
    const [l, h, d, u] = n(this, Fa);
    for (let p = 0, b = e.length; p < b; p += 2)
      e[p] = (e[p] - l) / d, e[p + 1] = (e[p + 1] - h) / u;
    for (let p = 0, b = s.length; p < b; p += 2)
      s[p] = (s[p] - l) / d, s[p + 1] = (s[p + 1] - h) / u;
  }
  toSVGPath() {
    const e = [`M${n(this, Zt)[4]} ${n(this, Zt)[5]}`];
    for (let s = 6, i = n(this, Zt).length; s < i; s += 6) {
      if (isNaN(n(this, Zt)[s])) {
        e.push(`L${n(this, Zt)[s + 4]} ${n(this, Zt)[s + 5]}`);
        continue;
      }
      e.push(`C${n(this, Zt)[s]} ${n(this, Zt)[s + 1]} ${n(this, Zt)[s + 2]} ${n(this, Zt)[s + 3]} ${n(this, Zt)[s + 4]} ${n(this, Zt)[s + 5]}`);
    }
    return e.push("Z"), e.join(" ");
  }
  serialize([e, s, i, r], a) {
    const o = i - e, l = r - s;
    let h, d;
    switch (a) {
      case 0:
        h = G._rescale(n(this, Zt), e, r, o, -l), d = G._rescale(n(this, gs), e, r, o, -l);
        break;
      case 90:
        h = G._rescaleAndSwap(n(this, Zt), e, s, o, l), d = G._rescaleAndSwap(n(this, gs), e, s, o, l);
        break;
      case 180:
        h = G._rescale(n(this, Zt), i, s, -o, l), d = G._rescale(n(this, gs), i, s, -o, l);
        break;
      case 270:
        h = G._rescaleAndSwap(n(this, Zt), i, r, -o, -l), d = G._rescaleAndSwap(n(this, gs), i, r, -o, -l);
        break;
    }
    return {
      outline: Array.from(h),
      points: [Array.from(d)]
    };
  }
  get box() {
    return n(this, Fa);
  }
  newOutliner(e, s, i, r, a, o = 0) {
    return new Au(e, s, i, r, a, o);
  }
  getNewOutline(e, s) {
    const [i, r, a, o] = n(this, Fa), [l, h, d, u] = n(this, kl), p = a * d, b = o * u, S = i * d + l, v = r * u + h, E = this.newOutliner({
      x: n(this, gs)[0] * p + S,
      y: n(this, gs)[1] * b + v
    }, n(this, kl), n(this, ed), e, n(this, td), s ?? n(this, yn));
    for (let x = 2; x < n(this, gs).length; x += 2)
      E.add({
        x: n(this, gs)[x] * p + S,
        y: n(this, gs)[x + 1] * b + v
      });
    return E.getOutlines();
  }
}
kl = new WeakMap(), Fa = new WeakMap(), yn = new WeakMap(), td = new WeakMap(), gs = new WeakMap(), ed = new WeakMap(), Zt = new WeakMap(), Uu = new WeakSet(), Gb = function(e) {
  const s = n(this, Zt);
  let i = s[4], r = s[5];
  const a = [i, r, i, r];
  let o = i, l = r, h = i, d = r;
  const u = e ? Math.max : Math.min, p = new Float32Array(4);
  for (let S = 6, v = s.length; S < v; S += 6) {
    const E = s[S + 4], x = s[S + 5];
    isNaN(s[S]) ? (W.pointBoundingBox(E, x, a), l > x ? (o = E, l = x) : l === x && (o = u(o, E)), d < x ? (h = E, d = x) : d === x && (h = u(h, E))) : (p[0] = p[1] = 1 / 0, p[2] = p[3] = -1 / 0, W.bezierBoundingBox(i, r, ...s.slice(S, S + 6), p), W.rectBoundingBox(p[0], p[1], p[2], p[3], a), l > p[1] ? (o = p[0], l = p[1]) : l === p[1] && (o = u(o, p[0])), d < p[3] ? (h = p[2], d = p[3]) : d === p[3] && (h = u(h, p[2]))), i = E, r = x;
  }
  const b = n(this, Fa);
  b[0] = a[0] - n(this, yn), b[1] = a[1] - n(this, yn), b[2] = a[2] - a[0] + 2 * n(this, yn), b[3] = a[3] - a[1] + 2 * n(this, yn), this.firstPoint = [o, l], this.lastPoint = [h, d];
};
var sd, id, nd, mr, Js, We, Wb, eu, jb, Vb, yp;
class bp {
  constructor(t, e = 0, s = 0, i = !0) {
    y(this, We);
    y(this, sd);
    y(this, id);
    y(this, nd);
    y(this, mr, []);
    y(this, Js, []);
    const r = [1 / 0, 1 / 0, -1 / 0, -1 / 0], a = 10 ** -4;
    for (const {
      x: v,
      y: E,
      width: x,
      height: T
    } of t) {
      const _ = Math.floor((v - e) / a) * a, f = Math.ceil((v + x + e) / a) * a, m = Math.floor((E - e) / a) * a, A = Math.ceil((E + T + e) / a) * a, C = [_, m, A, !0], P = [f, m, A, !1];
      n(this, mr).push(C, P), W.rectBoundingBox(_, m, f, A, r);
    }
    const o = r[2] - r[0] + 2 * s, l = r[3] - r[1] + 2 * s, h = r[0] - s, d = r[1] - s;
    let u = i ? -1 / 0 : 1 / 0, p = 1 / 0;
    const b = n(this, mr).at(i ? -1 : -2), S = [b[0], b[2]];
    for (const v of n(this, mr)) {
      const [E, x, T, _] = v;
      !_ && i ? x < p ? (p = x, u = E) : x === p && (u = Math.max(u, E)) : _ && !i && (x < p ? (p = x, u = E) : x === p && (u = Math.min(u, E))), v[0] = (E - h) / o, v[1] = (x - d) / l, v[2] = (T - d) / l;
    }
    g(this, sd, new Float32Array([h, d, o, l])), g(this, id, [u, p]), g(this, nd, S);
  }
  getOutlines() {
    n(this, mr).sort((e, s) => e[0] - s[0] || e[1] - s[1] || e[2] - s[2]);
    const t = [];
    for (const e of n(this, mr))
      e[3] ? (t.push(...w(this, We, yp).call(this, e)), w(this, We, jb).call(this, e)) : (w(this, We, Vb).call(this, e), t.push(...w(this, We, yp).call(this, e)));
    return w(this, We, Wb).call(this, t);
  }
}
sd = new WeakMap(), id = new WeakMap(), nd = new WeakMap(), mr = new WeakMap(), Js = new WeakMap(), We = new WeakSet(), Wb = function(t) {
  const e = [], s = /* @__PURE__ */ new Set();
  for (const a of t) {
    const [o, l, h] = a;
    e.push([o, l, a], [o, h, a]);
  }
  e.sort((a, o) => a[1] - o[1] || a[0] - o[0]);
  for (let a = 0, o = e.length; a < o; a += 2) {
    const l = e[a][2], h = e[a + 1][2];
    l.push(h), h.push(l), s.add(l), s.add(h);
  }
  const i = [];
  let r;
  for (; s.size > 0; ) {
    const a = s.values().next().value;
    let [o, l, h, d, u] = a;
    s.delete(a);
    let p = o, b = l;
    for (r = [o, h], i.push(r); ; ) {
      let S;
      if (s.has(d))
        S = d;
      else if (s.has(u))
        S = u;
      else
        break;
      s.delete(S), [o, l, h, d, u] = S, p !== o && (r.push(p, b, o, b === l ? l : h), p = o), b = b === l ? h : l;
    }
    r.push(p, b);
  }
  return new iA(i, n(this, sd), n(this, id), n(this, nd));
}, eu = function(t) {
  const e = n(this, Js);
  let s = 0, i = e.length - 1;
  for (; s <= i; ) {
    const r = s + i >> 1, a = e[r][0];
    if (a === t)
      return r;
    a < t ? s = r + 1 : i = r - 1;
  }
  return i + 1;
}, jb = function([, t, e]) {
  const s = w(this, We, eu).call(this, t);
  n(this, Js).splice(s, 0, [t, e]);
}, Vb = function([, t, e]) {
  const s = w(this, We, eu).call(this, t);
  for (let i = s; i < n(this, Js).length; i++) {
    const [r, a] = n(this, Js)[i];
    if (r !== t)
      break;
    if (r === t && a === e) {
      n(this, Js).splice(i, 1);
      return;
    }
  }
  for (let i = s - 1; i >= 0; i--) {
    const [r, a] = n(this, Js)[i];
    if (r !== t)
      break;
    if (r === t && a === e) {
      n(this, Js).splice(i, 1);
      return;
    }
  }
}, yp = function(t) {
  const [e, s, i] = t, r = [[e, s, i]], a = w(this, We, eu).call(this, i);
  for (let o = 0; o < a; o++) {
    const [l, h] = n(this, Js)[o];
    for (let d = 0, u = r.length; d < u; d++) {
      const [, p, b] = r[d];
      if (!(h <= p || b <= l)) {
        if (p >= l) {
          if (b > h)
            r[d][1] = h;
          else {
            if (u === 1)
              return [];
            r.splice(d, 1), d--, u--;
          }
          continue;
        }
        r[d][2] = l, b > h && r.push([e, h, b]);
      }
    }
  }
  return r;
};
var rd, Ll;
class iA extends G {
  constructor(e, s, i, r) {
    super();
    y(this, rd);
    y(this, Ll);
    g(this, Ll, e), g(this, rd, s), this.firstPoint = i, this.lastPoint = r;
  }
  toSVGPath() {
    const e = [];
    for (const s of n(this, Ll)) {
      let [i, r] = s;
      e.push(`M${i} ${r}`);
      for (let a = 2; a < s.length; a += 2) {
        const o = s[a], l = s[a + 1];
        o === i ? (e.push(`V${l}`), r = l) : l === r && (e.push(`H${o}`), i = o);
      }
      e.push("Z");
    }
    return e.join(" ");
  }
  serialize([e, s, i, r], a) {
    const o = [], l = i - e, h = r - s;
    for (const d of n(this, Ll)) {
      const u = new Array(d.length);
      for (let p = 0; p < d.length; p += 2)
        u[p] = e + d[p] * l, u[p + 1] = r - d[p + 1] * h;
      o.push(u);
    }
    return o;
  }
  get box() {
    return n(this, rd);
  }
  get classNamesForOutlining() {
    return ["highlightOutline"];
  }
}
rd = new WeakMap(), Ll = new WeakMap();
class wp extends Au {
  newFreeDrawOutline(t, e, s, i, r, a) {
    return new nA(t, e, s, i, r, a);
  }
}
class nA extends zb {
  newOutliner(t, e, s, i, r, a = 0) {
    return new wp(t, e, s, i, r, a);
  }
}
var Dl, ad, wn, Na, od, Qe, ld, hd, Oa, ms, bs, Ae, Ml, Il, De, Fl, Os, cd, st, Ap, su, qb, Xb, Yb, vp, Nr, $s, co, Kb, iu, nu, Zb, Jb, Qb, ty, ey;
const ft = class ft extends kt {
  constructor(e) {
    super({
      ...e,
      name: "highlightEditor"
    });
    y(this, st);
    y(this, Dl, null);
    y(this, ad, 0);
    y(this, wn);
    y(this, Na, null);
    y(this, od, null);
    y(this, Qe, null);
    y(this, ld, null);
    y(this, hd, 0);
    y(this, Oa, null);
    y(this, ms, null);
    y(this, bs, null);
    y(this, Ae, !1);
    y(this, Ml, null);
    y(this, Il, null);
    y(this, De, null);
    y(this, Fl, "");
    y(this, Os);
    y(this, cd, "");
    this.color = e.color || ft._defaultColor, g(this, Os, e.thickness || ft._defaultThickness), this.opacity = e.opacity || ft._defaultOpacity, g(this, wn, e.boxes || null), g(this, cd, e.methodOfCreation || ""), g(this, Fl, e.text || ""), this._isDraggable = !1, this.defaultL10nId = "pdfjs-editor-highlight-editor", e.highlightId > -1 ? (g(this, Ae, !0), w(this, st, su).call(this, e), w(this, st, Nr).call(this)) : n(this, wn) && (g(this, Dl, e.anchorNode), g(this, ad, e.anchorOffset), g(this, ld, e.focusNode), g(this, hd, e.focusOffset), w(this, st, Ap).call(this), w(this, st, Nr).call(this), this.rotate(this.rotation)), this.annotationElementId || this._uiManager.a11yAlert("pdfjs-editor-highlight-added-alert");
  }
  static get _keyboardManager() {
    const e = ft.prototype;
    return et(this, "_keyboardManager", new yd([[["ArrowLeft", "mac+ArrowLeft"], e._moveCaret, {
      args: [0]
    }], [["ArrowRight", "mac+ArrowRight"], e._moveCaret, {
      args: [1]
    }], [["ArrowUp", "mac+ArrowUp"], e._moveCaret, {
      args: [2]
    }], [["ArrowDown", "mac+ArrowDown"], e._moveCaret, {
      args: [3]
    }]]));
  }
  get telemetryInitialData() {
    return {
      action: "added",
      type: n(this, Ae) ? "free_highlight" : "highlight",
      color: this._uiManager.getNonHCMColorName(this.color),
      thickness: n(this, Os),
      methodOfCreation: n(this, cd)
    };
  }
  get telemetryFinalData() {
    return {
      type: "highlight",
      color: this._uiManager.getNonHCMColorName(this.color)
    };
  }
  static computeTelemetryFinalData(e) {
    return {
      numberOfColors: e.get("color").size
    };
  }
  static initialize(e, s) {
    var i;
    kt.initialize(e, s), ft._defaultColor || (ft._defaultColor = ((i = s.highlightColors) == null ? void 0 : i.values().next().value) || "#fff066");
  }
  static updateDefaultParams(e, s) {
    switch (e) {
      case at.HIGHLIGHT_COLOR:
        ft._defaultColor = s;
        break;
      case at.HIGHLIGHT_THICKNESS:
        ft._defaultThickness = s;
        break;
    }
  }
  translateInPage(e, s) {
  }
  get toolbarPosition() {
    return n(this, Il);
  }
  get commentButtonPosition() {
    return n(this, Ml);
  }
  updateParams(e, s) {
    switch (e) {
      case at.HIGHLIGHT_COLOR:
        w(this, st, qb).call(this, s);
        break;
      case at.HIGHLIGHT_THICKNESS:
        w(this, st, Xb).call(this, s);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[at.HIGHLIGHT_COLOR, ft._defaultColor], [at.HIGHLIGHT_THICKNESS, ft._defaultThickness]];
  }
  get propertiesToUpdate() {
    return [[at.HIGHLIGHT_COLOR, this.color || ft._defaultColor], [at.HIGHLIGHT_THICKNESS, n(this, Os) || ft._defaultThickness], [at.HIGHLIGHT_FREE, n(this, Ae)]];
  }
  onUpdatedColor() {
    var e, s;
    (e = this.parent) == null || e.drawLayer.updateProperties(n(this, bs), {
      root: {
        fill: this.color,
        "fill-opacity": this.opacity
      }
    }), (s = n(this, od)) == null || s.updateColor(this.color), super.onUpdatedColor();
  }
  get toolbarButtons() {
    return this._uiManager.highlightColors ? [["colorPicker", g(this, od, new Dh({
      editor: this
    }))]] : super.toolbarButtons;
  }
  disableEditing() {
    super.disableEditing(), this.div.classList.toggle("disabled", !0);
  }
  enableEditing() {
    super.enableEditing(), this.div.classList.toggle("disabled", !1);
  }
  fixAndSetPosition() {
    return super.fixAndSetPosition(w(this, st, nu).call(this));
  }
  getBaseTranslation() {
    return [0, 0];
  }
  getRect(e, s) {
    return super.getRect(e, s, w(this, st, nu).call(this));
  }
  onceAdded(e) {
    this.annotationElementId || this.parent.addUndoableEditor(this), e && this.div.focus();
  }
  remove() {
    w(this, st, vp).call(this), this._reportTelemetry({
      action: "deleted"
    }), super.remove();
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (w(this, st, Nr).call(this), this.isAttachedToDOM || this.parent.add(this)));
  }
  setParent(e) {
    var i;
    let s = !1;
    this.parent && !e ? w(this, st, vp).call(this) : e && (w(this, st, Nr).call(this, e), s = !this.parent && ((i = this.div) == null ? void 0 : i.classList.contains("selectedEditor"))), super.setParent(e), this.show(this._isVisible), s && this.select();
  }
  rotate(e) {
    var r, a, o;
    const {
      drawLayer: s
    } = this.parent;
    let i;
    n(this, Ae) ? (e = (e - this.rotation + 360) % 360, i = w(r = ft, $s, co).call(r, n(this, ms).box, e)) : i = w(a = ft, $s, co).call(a, [this.x, this.y, this.width, this.height], e), s.updateProperties(n(this, bs), {
      bbox: i,
      root: {
        "data-main-rotation": e
      }
    }), s.updateProperties(n(this, De), {
      bbox: w(o = ft, $s, co).call(o, n(this, Qe).box, e),
      root: {
        "data-main-rotation": e
      }
    });
  }
  render() {
    if (this.div)
      return this.div;
    const e = super.render();
    n(this, Fl) && (e.setAttribute("aria-label", n(this, Fl)), e.setAttribute("role", "mark")), n(this, Ae) ? e.classList.add("free") : this.div.addEventListener("keydown", w(this, st, Kb).bind(this), {
      signal: this._uiManager._signal
    });
    const s = g(this, Oa, document.createElement("div"));
    return e.append(s), s.setAttribute("aria-hidden", "true"), s.className = "internal", s.style.clipPath = n(this, Na), this.setDims(this.width, this.height), vm(this, n(this, Oa), ["pointerover", "pointerleave"]), this.enableEditing(), e;
  }
  pointerover() {
    var e;
    this.isSelected || (e = this.parent) == null || e.drawLayer.updateProperties(n(this, De), {
      rootClass: {
        hovered: !0
      }
    });
  }
  pointerleave() {
    var e;
    this.isSelected || (e = this.parent) == null || e.drawLayer.updateProperties(n(this, De), {
      rootClass: {
        hovered: !1
      }
    });
  }
  _moveCaret(e) {
    switch (this.parent.unselect(this), e) {
      case 0:
      case 2:
        w(this, st, iu).call(this, !0);
        break;
      case 1:
      case 3:
        w(this, st, iu).call(this, !1);
        break;
    }
  }
  select() {
    var e;
    super.select(), n(this, De) && ((e = this.parent) == null || e.drawLayer.updateProperties(n(this, De), {
      rootClass: {
        hovered: !1,
        selected: !0
      }
    }));
  }
  unselect() {
    var e;
    super.unselect(), n(this, De) && ((e = this.parent) == null || e.drawLayer.updateProperties(n(this, De), {
      rootClass: {
        selected: !1
      }
    }), n(this, Ae) || w(this, st, iu).call(this, !1));
  }
  get _mustFixPosition() {
    return !n(this, Ae);
  }
  show(e = this._isVisible) {
    super.show(e), this.parent && (this.parent.drawLayer.updateProperties(n(this, bs), {
      rootClass: {
        hidden: !e
      }
    }), this.parent.drawLayer.updateProperties(n(this, De), {
      rootClass: {
        hidden: !e
      }
    }));
  }
  static startHighlighting(e, s, {
    target: i,
    x: r,
    y: a
  }) {
    const {
      x: o,
      y: l,
      width: h,
      height: d
    } = i.getBoundingClientRect(), u = new AbortController(), p = e.combinedSignal(u), b = (S) => {
      u.abort(), w(this, $s, ty).call(this, e, S);
    };
    window.addEventListener("blur", b, {
      signal: p
    }), window.addEventListener("pointerup", b, {
      signal: p
    }), window.addEventListener("pointerdown", Ut, {
      capture: !0,
      passive: !1,
      signal: p
    }), window.addEventListener("contextmenu", _s, {
      signal: p
    }), i.addEventListener("pointermove", w(this, $s, Qb).bind(this, e), {
      signal: p
    }), this._freeHighlight = new wp({
      x: r,
      y: a
    }, [o, l, h, d], e.scale, this._defaultThickness / 2, s, 1e-3), {
      id: this._freeHighlightId,
      clipPathId: this._freeHighlightClipId
    } = e.drawLayer.draw({
      bbox: [0, 0, 1, 1],
      root: {
        viewBox: "0 0 1 1",
        fill: this._defaultColor,
        "fill-opacity": this._defaultOpacity
      },
      rootClass: {
        highlight: !0,
        free: !0
      },
      path: {
        d: this._freeHighlight.toSVGPath()
      }
    }, !0, !0);
  }
  static async deserialize(e, s, i) {
    var v, E, x, T;
    let r = null;
    if (e instanceof Rb) {
      const {
        data: {
          quadPoints: _,
          rect: f,
          rotation: m,
          id: A,
          color: C,
          opacity: P,
          popupRef: R,
          richText: L,
          contentsObj: D,
          creationDate: F,
          modificationDate: U
        },
        parent: {
          page: {
            pageNumber: O
          }
        }
      } = e;
      r = e = {
        annotationType: Z.HIGHLIGHT,
        color: Array.from(C),
        opacity: P,
        quadPoints: _,
        boxes: null,
        pageIndex: O - 1,
        rect: f.slice(0),
        rotation: m,
        annotationElementId: A,
        id: A,
        deleted: !1,
        popupRef: R,
        richText: L,
        comment: (D == null ? void 0 : D.str) || null,
        creationDate: F,
        modificationDate: U
      };
    } else if (e instanceof tg) {
      const {
        data: {
          inkLists: _,
          rect: f,
          rotation: m,
          id: A,
          color: C,
          borderStyle: {
            rawWidth: P
          },
          popupRef: R,
          richText: L,
          contentsObj: D,
          creationDate: F,
          modificationDate: U
        },
        parent: {
          page: {
            pageNumber: O
          }
        }
      } = e;
      r = e = {
        annotationType: Z.HIGHLIGHT,
        color: Array.from(C),
        thickness: P,
        inkLists: _,
        boxes: null,
        pageIndex: O - 1,
        rect: f.slice(0),
        rotation: m,
        annotationElementId: A,
        id: A,
        deleted: !1,
        popupRef: R,
        richText: L,
        comment: (D == null ? void 0 : D.str) || null,
        creationDate: F,
        modificationDate: U
      };
    }
    const {
      color: a,
      quadPoints: o,
      inkLists: l,
      opacity: h
    } = e, d = await super.deserialize(e, s, i);
    d.color = W.makeHexColor(...a), d.opacity = h || 1, l && g(d, Os, e.thickness), d._initialData = r, e.comment && d.setCommentData(e);
    const [u, p] = d.pageDimensions, [b, S] = d.pageTranslation;
    if (o) {
      const _ = g(d, wn, []);
      for (let f = 0; f < o.length; f += 8)
        _.push({
          x: (o[f] - b) / u,
          y: 1 - (o[f + 1] - S) / p,
          width: (o[f + 2] - o[f]) / u,
          height: (o[f + 1] - o[f + 5]) / p
        });
      w(v = d, st, Ap).call(v), w(E = d, st, Nr).call(E), d.rotate(d.rotation);
    } else if (l) {
      g(d, Ae, !0);
      const _ = l[0], f = {
        x: _[0] - b,
        y: p - (_[1] - S)
      }, m = new wp(f, [0, 0, u, p], 1, n(d, Os) / 2, !0, 1e-3);
      for (let P = 0, R = _.length; P < R; P += 2)
        f.x = _[P] - b, f.y = p - (_[P + 1] - S), m.add(f);
      const {
        id: A,
        clipPathId: C
      } = s.drawLayer.draw({
        bbox: [0, 0, 1, 1],
        root: {
          viewBox: "0 0 1 1",
          fill: d.color,
          "fill-opacity": d._defaultOpacity
        },
        rootClass: {
          highlight: !0,
          free: !0
        },
        path: {
          d: m.toSVGPath()
        }
      }, !0, !0);
      w(x = d, st, su).call(x, {
        highlightOutlines: m.getOutlines(),
        highlightId: A,
        clipPathId: C
      }), w(T = d, st, Nr).call(T), d.rotate(d.parentRotation);
    }
    return d;
  }
  serialize(e = !1) {
    if (this.isEmpty() || e)
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const s = kt._colorManager.convert(this._uiManager.getNonHCMColor(this.color)), i = super.serialize(e);
    return Object.assign(i, {
      color: s,
      opacity: this.opacity,
      thickness: n(this, Os),
      quadPoints: w(this, st, Zb).call(this),
      outlines: w(this, st, Jb).call(this, i.rect)
    }), this.addComment(i), this.annotationElementId && !w(this, st, ey).call(this, i) ? null : (i.id = this.annotationElementId, i);
  }
  renderAnnotationElement(e) {
    return this.deleted ? (e.hide(), null) : (e.updateEdited({
      rect: this.getPDFRect(),
      popup: this.comment
    }), null);
  }
  static canCreateNewEmptyEditor() {
    return !1;
  }
};
Dl = new WeakMap(), ad = new WeakMap(), wn = new WeakMap(), Na = new WeakMap(), od = new WeakMap(), Qe = new WeakMap(), ld = new WeakMap(), hd = new WeakMap(), Oa = new WeakMap(), ms = new WeakMap(), bs = new WeakMap(), Ae = new WeakMap(), Ml = new WeakMap(), Il = new WeakMap(), De = new WeakMap(), Fl = new WeakMap(), Os = new WeakMap(), cd = new WeakMap(), st = new WeakSet(), Ap = function() {
  const e = new bp(n(this, wn), 1e-3);
  g(this, ms, e.getOutlines()), [this.x, this.y, this.width, this.height] = n(this, ms).box;
  const s = new bp(n(this, wn), 25e-4, 1e-3, this._uiManager.direction === "ltr");
  g(this, Qe, s.getOutlines());
  const {
    firstPoint: i
  } = n(this, ms);
  g(this, Ml, [(i[0] - this.x) / this.width, (i[1] - this.y) / this.height]);
  const {
    lastPoint: r
  } = n(this, Qe);
  g(this, Il, [(r[0] - this.x) / this.width, (r[1] - this.y) / this.height]);
}, su = function({
  highlightOutlines: e,
  highlightId: s,
  clipPathId: i
}) {
  var p, b;
  if (g(this, ms, e), g(this, Qe, e.getNewOutline(n(this, Os) / 2 + 1.5, 25e-4)), s >= 0)
    g(this, bs, s), g(this, Na, i), this.parent.drawLayer.finalizeDraw(s, {
      bbox: e.box,
      path: {
        d: e.toSVGPath()
      }
    }), g(this, De, this.parent.drawLayer.drawOutline({
      rootClass: {
        highlightOutline: !0,
        free: !0
      },
      bbox: n(this, Qe).box,
      path: {
        d: n(this, Qe).toSVGPath()
      }
    }, !0));
  else if (this.parent) {
    const S = this.parent.viewport.rotation;
    this.parent.drawLayer.updateProperties(n(this, bs), {
      bbox: w(p = ft, $s, co).call(p, n(this, ms).box, (S - this.rotation + 360) % 360),
      path: {
        d: e.toSVGPath()
      }
    }), this.parent.drawLayer.updateProperties(n(this, De), {
      bbox: w(b = ft, $s, co).call(b, n(this, Qe).box, S),
      path: {
        d: n(this, Qe).toSVGPath()
      }
    });
  }
  const [a, o, l, h] = e.box;
  switch (this.rotation) {
    case 0:
      this.x = a, this.y = o, this.width = l, this.height = h;
      break;
    case 90: {
      const [S, v] = this.parentDimensions;
      this.x = o, this.y = 1 - a, this.width = l * v / S, this.height = h * S / v;
      break;
    }
    case 180:
      this.x = 1 - a, this.y = 1 - o, this.width = l, this.height = h;
      break;
    case 270: {
      const [S, v] = this.parentDimensions;
      this.x = 1 - o, this.y = a, this.width = l * v / S, this.height = h * S / v;
      break;
    }
  }
  const {
    firstPoint: d
  } = e;
  g(this, Ml, [(d[0] - a) / l, (d[1] - o) / h]);
  const {
    lastPoint: u
  } = n(this, Qe);
  g(this, Il, [(u[0] - a) / l, (u[1] - o) / h]);
}, qb = function(e) {
  const s = (a, o) => {
    this.color = a, this.opacity = o, this.onUpdatedColor();
  }, i = this.color, r = this.opacity;
  this.addCommands({
    cmd: s.bind(this, e, ft._defaultOpacity),
    undo: s.bind(this, i, r),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: at.HIGHLIGHT_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0
  }), this._reportTelemetry({
    action: "color_changed",
    color: this._uiManager.getNonHCMColorName(e)
  }, !0);
}, Xb = function(e) {
  const s = n(this, Os), i = (r) => {
    g(this, Os, r), w(this, st, Yb).call(this, r);
  };
  this.addCommands({
    cmd: i.bind(this, e),
    undo: i.bind(this, s),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: at.INK_THICKNESS,
    overwriteIfSameType: !0,
    keepUndo: !0
  }), this._reportTelemetry({
    action: "thickness_changed",
    thickness: e
  }, !0);
}, Yb = function(e) {
  n(this, Ae) && (w(this, st, su).call(this, {
    highlightOutlines: n(this, ms).getNewOutline(e / 2)
  }), this.fixAndSetPosition(), this.setDims(this.width, this.height));
}, vp = function() {
  n(this, bs) === null || !this.parent || (this.parent.drawLayer.remove(n(this, bs)), g(this, bs, null), this.parent.drawLayer.remove(n(this, De)), g(this, De, null));
}, Nr = function(e = this.parent) {
  n(this, bs) === null && ({
    id: ie(this, bs)._,
    clipPathId: ie(this, Na)._
  } = e.drawLayer.draw({
    bbox: n(this, ms).box,
    root: {
      viewBox: "0 0 1 1",
      fill: this.color,
      "fill-opacity": this.opacity
    },
    rootClass: {
      highlight: !0,
      free: n(this, Ae)
    },
    path: {
      d: n(this, ms).toSVGPath()
    }
  }, !1, !0), g(this, De, e.drawLayer.drawOutline({
    rootClass: {
      highlightOutline: !0,
      free: n(this, Ae)
    },
    bbox: n(this, Qe).box,
    path: {
      d: n(this, Qe).toSVGPath()
    }
  }, n(this, Ae))), n(this, Oa) && (n(this, Oa).style.clipPath = n(this, Na)));
}, $s = new WeakSet(), co = function([e, s, i, r], a) {
  switch (a) {
    case 90:
      return [1 - s - r, e, r, i];
    case 180:
      return [1 - e - i, 1 - s - r, i, r];
    case 270:
      return [s, 1 - e - i, r, i];
  }
  return [e, s, i, r];
}, Kb = function(e) {
  ft._keyboardManager.exec(this, e);
}, iu = function(e) {
  if (!n(this, Dl))
    return;
  const s = window.getSelection();
  e ? s.setPosition(n(this, Dl), n(this, ad)) : s.setPosition(n(this, ld), n(this, hd));
}, nu = function() {
  return n(this, Ae) ? this.rotation : 0;
}, Zb = function() {
  if (n(this, Ae))
    return null;
  const [e, s] = this.pageDimensions, [i, r] = this.pageTranslation, a = n(this, wn), o = new Float32Array(a.length * 8);
  let l = 0;
  for (const {
    x: h,
    y: d,
    width: u,
    height: p
  } of a) {
    const b = h * e + i, S = (1 - d) * s + r;
    o[l] = o[l + 4] = b, o[l + 1] = o[l + 3] = S, o[l + 2] = o[l + 6] = b + u * e, o[l + 5] = o[l + 7] = S - p * s, l += 8;
  }
  return o;
}, Jb = function(e) {
  return n(this, ms).serialize(e, w(this, st, nu).call(this));
}, Qb = function(e, s) {
  this._freeHighlight.add(s) && e.drawLayer.updateProperties(this._freeHighlightId, {
    path: {
      d: this._freeHighlight.toSVGPath()
    }
  });
}, ty = function(e, s) {
  this._freeHighlight.isEmpty() ? e.drawLayer.remove(this._freeHighlightId) : e.createAndAddNewEditor(s, !1, {
    highlightId: this._freeHighlightId,
    highlightOutlines: this._freeHighlight.getOutlines(),
    clipPathId: this._freeHighlightClipId,
    methodOfCreation: "main_toolbar"
  }), this._freeHighlightId = -1, this._freeHighlight = null, this._freeHighlightClipId = "";
}, ey = function(e) {
  const {
    color: s
  } = this._initialData;
  return this.hasEditedComment || e.color.some((i, r) => i !== s[r]);
}, y(ft, $s), N(ft, "_defaultColor", null), N(ft, "_defaultOpacity", 1), N(ft, "_defaultThickness", 12), N(ft, "_type", "highlight"), N(ft, "_editorType", Z.HIGHLIGHT), N(ft, "_freeHighlightId", -1), N(ft, "_freeHighlight", null), N(ft, "_freeHighlightClipId", "");
let vu = ft;
var Ba;
class sy {
  constructor() {
    y(this, Ba, /* @__PURE__ */ Object.create(null));
  }
  updateProperty(t, e) {
    this[t] = e, this.updateSVGProperty(t, e);
  }
  updateProperties(t) {
    if (t)
      for (const [e, s] of Object.entries(t))
        e.startsWith("_") || this.updateProperty(e, s);
  }
  updateSVGProperty(t, e) {
    n(this, Ba)[t] = e;
  }
  toSVGProperties() {
    const t = n(this, Ba);
    return g(this, Ba, /* @__PURE__ */ Object.create(null)), {
      root: t
    };
  }
  reset() {
    g(this, Ba, /* @__PURE__ */ Object.create(null));
  }
  updateAll(t = this) {
    this.updateProperties(t);
  }
  clone() {
    Tt("Not implemented");
  }
}
Ba = new WeakMap();
var ys, Nl, ce, $a, Ha, br, yr, wr, Ua, dt, Sp, xp, Ep, Ah, iy, ru, vh, uo;
const j = class j extends kt {
  constructor(e) {
    super(e);
    y(this, dt);
    y(this, ys, null);
    y(this, Nl);
    N(this, "_colorPicker", null);
    N(this, "_drawId", null);
    g(this, Nl, e.mustBeCommitted || !1), this._addOutlines(e);
  }
  onUpdatedColor() {
    var e;
    (e = this._colorPicker) == null || e.update(this.color), super.onUpdatedColor();
  }
  _addOutlines(e) {
    e.drawOutlines && (w(this, dt, Sp).call(this, e), w(this, dt, Ah).call(this));
  }
  static _mergeSVGProperties(e, s) {
    const i = new Set(Object.keys(e));
    for (const [r, a] of Object.entries(s))
      i.has(r) ? Object.assign(e[r], a) : e[r] = a;
    return e;
  }
  static getDefaultDrawingOptions(e) {
    Tt("Not implemented");
  }
  static get typesMap() {
    Tt("Not implemented");
  }
  static get isDrawer() {
    return !0;
  }
  static get supportMultipleDrawings() {
    return !1;
  }
  static updateDefaultParams(e, s) {
    const i = this.typesMap.get(e);
    i && this._defaultDrawingOptions.updateProperty(i, s), this._currentParent && (n(j, ce).updateProperty(i, s), this._currentParent.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties()));
  }
  updateParams(e, s) {
    const i = this.constructor.typesMap.get(e);
    i && this._updateProperty(e, i, s);
  }
  static get defaultPropertiesToUpdate() {
    const e = [], s = this._defaultDrawingOptions;
    for (const [i, r] of this.typesMap)
      e.push([i, s[r]]);
    return e;
  }
  get propertiesToUpdate() {
    const e = [], {
      _drawingOptions: s
    } = this;
    for (const [i, r] of this.constructor.typesMap)
      e.push([i, s[r]]);
    return e;
  }
  _updateProperty(e, s, i) {
    const r = this._drawingOptions, a = r[s], o = (l) => {
      var d;
      r.updateProperty(s, l);
      const h = n(this, ys).updateProperty(s, l);
      h && w(this, dt, vh).call(this, h), (d = this.parent) == null || d.drawLayer.updateProperties(this._drawId, r.toSVGProperties()), e === this.colorType && this.onUpdatedColor();
    };
    this.addCommands({
      cmd: o.bind(this, i),
      undo: o.bind(this, a),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: !0,
      type: e,
      overwriteIfSameType: !0,
      keepUndo: !0
    });
  }
  _onResizing() {
    var e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, j._mergeSVGProperties(n(this, ys).getPathResizingSVGProperties(w(this, dt, ru).call(this)), {
      bbox: w(this, dt, uo).call(this)
    }));
  }
  _onResized() {
    var e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, j._mergeSVGProperties(n(this, ys).getPathResizedSVGProperties(w(this, dt, ru).call(this)), {
      bbox: w(this, dt, uo).call(this)
    }));
  }
  _onTranslating(e, s) {
    var i;
    (i = this.parent) == null || i.drawLayer.updateProperties(this._drawId, {
      bbox: w(this, dt, uo).call(this)
    });
  }
  _onTranslated() {
    var e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, j._mergeSVGProperties(n(this, ys).getPathTranslatedSVGProperties(w(this, dt, ru).call(this), this.parentDimensions), {
      bbox: w(this, dt, uo).call(this)
    }));
  }
  _onStartDragging() {
    var e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, {
      rootClass: {
        moving: !0
      }
    });
  }
  _onStopDragging() {
    var e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, {
      rootClass: {
        moving: !1
      }
    });
  }
  commit() {
    super.commit(), this.disableEditMode(), this.disableEditing();
  }
  disableEditing() {
    super.disableEditing(), this.div.classList.toggle("disabled", !0);
  }
  enableEditing() {
    super.enableEditing(), this.div.classList.toggle("disabled", !1);
  }
  getBaseTranslation() {
    return [0, 0];
  }
  get isResizable() {
    return !0;
  }
  onceAdded(e) {
    this.annotationElementId || this.parent.addUndoableEditor(this), this._isDraggable = !0, n(this, Nl) && (g(this, Nl, !1), this.commit(), this.parent.setSelected(this), e && this.isOnScreen && this.div.focus());
  }
  remove() {
    w(this, dt, Ep).call(this), super.remove();
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (w(this, dt, Ah).call(this), w(this, dt, vh).call(this, n(this, ys).box), this.isAttachedToDOM || this.parent.add(this)));
  }
  setParent(e) {
    var i;
    let s = !1;
    this.parent && !e ? (this._uiManager.removeShouldRescale(this), w(this, dt, Ep).call(this)) : e && (this._uiManager.addShouldRescale(this), w(this, dt, Ah).call(this, e), s = !this.parent && ((i = this.div) == null ? void 0 : i.classList.contains("selectedEditor"))), super.setParent(e), s && this.select();
  }
  rotate() {
    this.parent && this.parent.drawLayer.updateProperties(this._drawId, j._mergeSVGProperties({
      bbox: w(this, dt, uo).call(this)
    }, n(this, ys).updateRotation((this.parentRotation - this.rotation + 360) % 360)));
  }
  onScaleChanging() {
    this.parent && w(this, dt, vh).call(this, n(this, ys).updateParentDimensions(this.parentDimensions, this.parent.scale));
  }
  static onScaleChangingWhenDrawing() {
  }
  render() {
    if (this.div)
      return this.div;
    let e, s;
    this._isCopy && (e = this.x, s = this.y);
    const i = super.render();
    i.classList.add("draw");
    const r = document.createElement("div");
    return i.append(r), r.setAttribute("aria-hidden", "true"), r.className = "internal", this.setDims(), this._uiManager.addShouldRescale(this), this.disableEditing(), this._isCopy && this._moveAfterPaste(e, s), i;
  }
  static createDrawerInstance(e, s, i, r, a) {
    Tt("Not implemented");
  }
  static startDrawing(e, s, i, r) {
    var E;
    const {
      target: a,
      offsetX: o,
      offsetY: l,
      pointerId: h,
      pointerType: d
    } = r;
    if (n(j, yr) && n(j, yr) !== d)
      return;
    const {
      viewport: {
        rotation: u
      }
    } = e, {
      width: p,
      height: b
    } = a.getBoundingClientRect(), S = g(j, $a, new AbortController()), v = e.combinedSignal(S);
    if (n(j, br) || g(j, br, h), n(j, yr) ?? g(j, yr, d), window.addEventListener("pointerup", (x) => {
      var T;
      n(j, br) === x.pointerId ? this._endDraw(x) : (T = n(j, wr)) == null || T.delete(x.pointerId);
    }, {
      signal: v
    }), window.addEventListener("pointercancel", (x) => {
      var T;
      n(j, br) === x.pointerId ? this._currentParent.endDrawingSession() : (T = n(j, wr)) == null || T.delete(x.pointerId);
    }, {
      signal: v
    }), window.addEventListener("pointerdown", (x) => {
      n(j, yr) === x.pointerType && ((n(j, wr) || g(j, wr, /* @__PURE__ */ new Set())).add(x.pointerId), n(j, ce).isCancellable() && (n(j, ce).removeLastElement(), n(j, ce).isEmpty() ? this._currentParent.endDrawingSession(!0) : this._endDraw(null)));
    }, {
      capture: !0,
      passive: !1,
      signal: v
    }), window.addEventListener("contextmenu", _s, {
      signal: v
    }), a.addEventListener("pointermove", this._drawMove.bind(this), {
      signal: v
    }), a.addEventListener("touchmove", (x) => {
      x.timeStamp === n(j, Ua) && Ut(x);
    }, {
      signal: v
    }), e.toggleDrawing(), (E = s._editorUndoBar) == null || E.hide(), n(j, ce)) {
      e.drawLayer.updateProperties(this._currentDrawId, n(j, ce).startNew(o, l, p, b, u));
      return;
    }
    s.updateUIForDefaultProperties(this), g(j, ce, this.createDrawerInstance(o, l, p, b, u)), g(j, Ha, this.getDefaultDrawingOptions()), this._currentParent = e, {
      id: this._currentDrawId
    } = e.drawLayer.draw(this._mergeSVGProperties(n(j, Ha).toSVGProperties(), n(j, ce).defaultSVGProperties), !0, !1);
  }
  static _drawMove(e) {
    var a;
    if (g(j, Ua, -1), !n(j, ce))
      return;
    const {
      offsetX: s,
      offsetY: i,
      pointerId: r
    } = e;
    if (n(j, br) === r) {
      if (((a = n(j, wr)) == null ? void 0 : a.size) >= 1) {
        this._endDraw(e);
        return;
      }
      this._currentParent.drawLayer.updateProperties(this._currentDrawId, n(j, ce).add(s, i)), g(j, Ua, e.timeStamp), Ut(e);
    }
  }
  static _cleanup(e) {
    e && (this._currentDrawId = -1, this._currentParent = null, g(j, ce, null), g(j, Ha, null), g(j, yr, null), g(j, Ua, NaN)), n(j, $a) && (n(j, $a).abort(), g(j, $a, null), g(j, br, NaN), g(j, wr, null));
  }
  static _endDraw(e) {
    const s = this._currentParent;
    if (s) {
      if (s.toggleDrawing(!0), this._cleanup(!1), (e == null ? void 0 : e.target) === s.div && s.drawLayer.updateProperties(this._currentDrawId, n(j, ce).end(e.offsetX, e.offsetY)), this.supportMultipleDrawings) {
        const i = n(j, ce), r = this._currentDrawId, a = i.getLastElement();
        s.addCommands({
          cmd: () => {
            s.drawLayer.updateProperties(r, i.setLastElement(a));
          },
          undo: () => {
            s.drawLayer.updateProperties(r, i.removeLastElement());
          },
          mustExec: !1,
          type: at.DRAW_STEP
        });
        return;
      }
      this.endDrawing(!1);
    }
  }
  static endDrawing(e) {
    const s = this._currentParent;
    if (!s)
      return null;
    if (s.toggleDrawing(!0), s.cleanUndoStack(at.DRAW_STEP), !n(j, ce).isEmpty()) {
      const {
        pageDimensions: [i, r],
        scale: a
      } = s, o = s.createAndAddNewEditor({
        offsetX: 0,
        offsetY: 0
      }, !1, {
        drawId: this._currentDrawId,
        drawOutlines: n(j, ce).getOutlines(i * a, r * a, a, this._INNER_MARGIN),
        drawingOptions: n(j, Ha),
        mustBeCommitted: !e
      });
      return this._cleanup(!0), o;
    }
    return s.drawLayer.remove(this._currentDrawId), this._cleanup(!0), null;
  }
  createDrawingOptions(e) {
  }
  static deserializeDraw(e, s, i, r, a, o) {
    Tt("Not implemented");
  }
  static async deserialize(e, s, i) {
    var u, p;
    const {
      rawDims: {
        pageWidth: r,
        pageHeight: a,
        pageX: o,
        pageY: l
      }
    } = s.viewport, h = this.deserializeDraw(o, l, r, a, this._INNER_MARGIN, e), d = await super.deserialize(e, s, i);
    return d.createDrawingOptions(e), w(u = d, dt, Sp).call(u, {
      drawOutlines: h
    }), w(p = d, dt, Ah).call(p), d.onScaleChanging(), d.rotate(), d;
  }
  serializeDraw(e) {
    const [s, i] = this.pageTranslation, [r, a] = this.pageDimensions;
    return n(this, ys).serialize([s, i, r, a], e);
  }
  renderAnnotationElement(e) {
    return e.updateEdited({
      rect: this.getPDFRect()
    }), null;
  }
  static canCreateNewEmptyEditor() {
    return !1;
  }
};
ys = new WeakMap(), Nl = new WeakMap(), ce = new WeakMap(), $a = new WeakMap(), Ha = new WeakMap(), br = new WeakMap(), yr = new WeakMap(), wr = new WeakMap(), Ua = new WeakMap(), dt = new WeakSet(), Sp = function({
  drawOutlines: e,
  drawId: s,
  drawingOptions: i
}) {
  g(this, ys, e), this._drawingOptions || (this._drawingOptions = i), this.annotationElementId || this._uiManager.a11yAlert(`pdfjs-editor-${this.editorType}-added-alert`), s >= 0 ? (this._drawId = s, this.parent.drawLayer.finalizeDraw(s, e.defaultProperties)) : this._drawId = w(this, dt, xp).call(this, e, this.parent), w(this, dt, vh).call(this, e.box);
}, xp = function(e, s) {
  const {
    id: i
  } = s.drawLayer.draw(j._mergeSVGProperties(this._drawingOptions.toSVGProperties(), e.defaultSVGProperties), !1, !1);
  return i;
}, Ep = function() {
  this._drawId === null || !this.parent || (this.parent.drawLayer.remove(this._drawId), this._drawId = null, this._drawingOptions.reset());
}, Ah = function(e = this.parent) {
  if (!(this._drawId !== null && this.parent === e)) {
    if (this._drawId !== null) {
      this.parent.drawLayer.updateParent(this._drawId, e.drawLayer);
      return;
    }
    this._drawingOptions.updateAll(), this._drawId = w(this, dt, xp).call(this, n(this, ys), e);
  }
}, iy = function([e, s, i, r]) {
  const {
    parentDimensions: [a, o],
    rotation: l
  } = this;
  switch (l) {
    case 90:
      return [s, 1 - e, i * (o / a), r * (a / o)];
    case 180:
      return [1 - e, 1 - s, i, r];
    case 270:
      return [1 - s, e, i * (o / a), r * (a / o)];
    default:
      return [e, s, i, r];
  }
}, ru = function() {
  const {
    x: e,
    y: s,
    width: i,
    height: r,
    parentDimensions: [a, o],
    rotation: l
  } = this;
  switch (l) {
    case 90:
      return [1 - s, e, i * (a / o), r * (o / a)];
    case 180:
      return [1 - e, 1 - s, i, r];
    case 270:
      return [s, 1 - e, i * (a / o), r * (o / a)];
    default:
      return [e, s, i, r];
  }
}, vh = function(e) {
  [this.x, this.y, this.width, this.height] = w(this, dt, iy).call(this, e), this.div && (this.fixAndSetPosition(), this.setDims()), this._onResized();
}, uo = function() {
  const {
    x: e,
    y: s,
    width: i,
    height: r,
    rotation: a,
    parentRotation: o,
    parentDimensions: [l, h]
  } = this;
  switch ((a * 4 + o) / 90) {
    case 1:
      return [1 - s - r, e, r, i];
    case 2:
      return [1 - e - i, 1 - s - r, i, r];
    case 3:
      return [s, 1 - e - i, r, i];
    case 4:
      return [e, s - i * (l / h), r * (h / l), i * (l / h)];
    case 5:
      return [1 - s, e, i * (l / h), r * (h / l)];
    case 6:
      return [1 - e - r * (h / l), 1 - s, r * (h / l), i * (l / h)];
    case 7:
      return [s - i * (l / h), 1 - e - r * (h / l), i * (l / h), r * (h / l)];
    case 8:
      return [e - i, s - r, i, r];
    case 9:
      return [1 - s, e - i, r, i];
    case 10:
      return [1 - e, 1 - s, i, r];
    case 11:
      return [s - r, 1 - e, r, i];
    case 12:
      return [e - r * (h / l), s, r * (h / l), i * (l / h)];
    case 13:
      return [1 - s - i * (l / h), e - r * (h / l), i * (l / h), r * (h / l)];
    case 14:
      return [1 - e, 1 - s - i * (l / h), r * (h / l), i * (l / h)];
    case 15:
      return [s, 1 - e, i * (l / h), r * (h / l)];
    default:
      return [e, s, i, r];
  }
}, N(j, "_currentDrawId", -1), N(j, "_currentParent", null), y(j, ce, null), y(j, $a, null), y(j, Ha, null), y(j, br, NaN), y(j, yr, null), y(j, wr, null), y(j, Ua, NaN), N(j, "_INNER_MARGIN", 3);
let Su = j;
var Ri, de, ue, za, Ol, Be, ve, Bs, Ga, Wa, ja, Bl, au;
class rA {
  constructor(t, e, s, i, r, a) {
    y(this, Bl);
    y(this, Ri, new Float64Array(6));
    y(this, de);
    y(this, ue);
    y(this, za);
    y(this, Ol);
    y(this, Be);
    y(this, ve, "");
    y(this, Bs, 0);
    y(this, Ga, new Ad());
    y(this, Wa);
    y(this, ja);
    g(this, Wa, s), g(this, ja, i), g(this, za, r), g(this, Ol, a), [t, e] = w(this, Bl, au).call(this, t, e);
    const o = g(this, de, [NaN, NaN, NaN, NaN, t, e]);
    g(this, Be, [t, e]), g(this, ue, [{
      line: o,
      points: n(this, Be)
    }]), n(this, Ri).set(o, 0);
  }
  updateProperty(t, e) {
    t === "stroke-width" && g(this, Ol, e);
  }
  isEmpty() {
    return !n(this, ue) || n(this, ue).length === 0;
  }
  isCancellable() {
    return n(this, Be).length <= 10;
  }
  add(t, e) {
    [t, e] = w(this, Bl, au).call(this, t, e);
    const [s, i, r, a] = n(this, Ri).subarray(2, 6), o = t - r, l = e - a;
    return Math.hypot(n(this, Wa) * o, n(this, ja) * l) <= 2 ? null : (n(this, Be).push(t, e), isNaN(s) ? (n(this, Ri).set([r, a, t, e], 2), n(this, de).push(NaN, NaN, NaN, NaN, t, e), {
      path: {
        d: this.toSVGPath()
      }
    }) : (isNaN(n(this, Ri)[0]) && n(this, de).splice(6, 6), n(this, Ri).set([s, i, r, a, t, e], 0), n(this, de).push(...G.createBezierPoints(s, i, r, a, t, e)), {
      path: {
        d: this.toSVGPath()
      }
    }));
  }
  end(t, e) {
    const s = this.add(t, e);
    return s || (n(this, Be).length === 2 ? {
      path: {
        d: this.toSVGPath()
      }
    } : null);
  }
  startNew(t, e, s, i, r) {
    g(this, Wa, s), g(this, ja, i), g(this, za, r), [t, e] = w(this, Bl, au).call(this, t, e);
    const a = g(this, de, [NaN, NaN, NaN, NaN, t, e]);
    g(this, Be, [t, e]);
    const o = n(this, ue).at(-1);
    return o && (o.line = new Float32Array(o.line), o.points = new Float32Array(o.points)), n(this, ue).push({
      line: a,
      points: n(this, Be)
    }), n(this, Ri).set(a, 0), g(this, Bs, 0), this.toSVGPath(), null;
  }
  getLastElement() {
    return n(this, ue).at(-1);
  }
  setLastElement(t) {
    return n(this, ue) ? (n(this, ue).push(t), g(this, de, t.line), g(this, Be, t.points), g(this, Bs, 0), {
      path: {
        d: this.toSVGPath()
      }
    }) : n(this, Ga).setLastElement(t);
  }
  removeLastElement() {
    if (!n(this, ue))
      return n(this, Ga).removeLastElement();
    n(this, ue).pop(), g(this, ve, "");
    for (let t = 0, e = n(this, ue).length; t < e; t++) {
      const {
        line: s,
        points: i
      } = n(this, ue)[t];
      g(this, de, s), g(this, Be, i), g(this, Bs, 0), this.toSVGPath();
    }
    return {
      path: {
        d: n(this, ve)
      }
    };
  }
  toSVGPath() {
    const t = G.svgRound(n(this, de)[4]), e = G.svgRound(n(this, de)[5]);
    if (n(this, Be).length === 2)
      return g(this, ve, `${n(this, ve)} M ${t} ${e} Z`), n(this, ve);
    if (n(this, Be).length <= 6) {
      const i = n(this, ve).lastIndexOf("M");
      g(this, ve, `${n(this, ve).slice(0, i)} M ${t} ${e}`), g(this, Bs, 6);
    }
    if (n(this, Be).length === 4) {
      const i = G.svgRound(n(this, de)[10]), r = G.svgRound(n(this, de)[11]);
      return g(this, ve, `${n(this, ve)} L ${i} ${r}`), g(this, Bs, 12), n(this, ve);
    }
    const s = [];
    n(this, Bs) === 0 && (s.push(`M ${t} ${e}`), g(this, Bs, 6));
    for (let i = n(this, Bs), r = n(this, de).length; i < r; i += 6) {
      const [a, o, l, h, d, u] = n(this, de).slice(i, i + 6).map(G.svgRound);
      s.push(`C${a} ${o} ${l} ${h} ${d} ${u}`);
    }
    return g(this, ve, n(this, ve) + s.join(" ")), g(this, Bs, n(this, de).length), n(this, ve);
  }
  getOutlines(t, e, s, i) {
    const r = n(this, ue).at(-1);
    return r.line = new Float32Array(r.line), r.points = new Float32Array(r.points), n(this, Ga).build(n(this, ue), t, e, s, n(this, za), n(this, Ol), i), g(this, Ri, null), g(this, de, null), g(this, ue, null), g(this, ve, null), n(this, Ga);
  }
  get defaultSVGProperties() {
    return {
      root: {
        viewBox: "0 0 10000 10000"
      },
      rootClass: {
        draw: !0
      },
      bbox: [0, 0, 1, 1]
    };
  }
}
Ri = new WeakMap(), de = new WeakMap(), ue = new WeakMap(), za = new WeakMap(), Ol = new WeakMap(), Be = new WeakMap(), ve = new WeakMap(), Bs = new WeakMap(), Ga = new WeakMap(), Wa = new WeakMap(), ja = new WeakMap(), Bl = new WeakSet(), au = function(t, e) {
  return G._normalizePoint(t, e, n(this, Wa), n(this, ja), n(this, za));
};
var $e, dd, ud, ws, ki, Li, $l, Hl, Va, xe, Ui, ny, ry, ay;
class Ad extends G {
  constructor() {
    super(...arguments);
    y(this, xe);
    y(this, $e);
    y(this, dd, 0);
    y(this, ud);
    y(this, ws);
    y(this, ki);
    y(this, Li);
    y(this, $l);
    y(this, Hl);
    y(this, Va);
  }
  build(e, s, i, r, a, o, l) {
    g(this, ki, s), g(this, Li, i), g(this, $l, r), g(this, Hl, a), g(this, Va, o), g(this, ud, l ?? 0), g(this, ws, e), w(this, xe, ry).call(this);
  }
  get thickness() {
    return n(this, Va);
  }
  setLastElement(e) {
    return n(this, ws).push(e), {
      path: {
        d: this.toSVGPath()
      }
    };
  }
  removeLastElement() {
    return n(this, ws).pop(), {
      path: {
        d: this.toSVGPath()
      }
    };
  }
  toSVGPath() {
    const e = [];
    for (const {
      line: s
    } of n(this, ws)) {
      if (e.push(`M${G.svgRound(s[4])} ${G.svgRound(s[5])}`), s.length === 6) {
        e.push("Z");
        continue;
      }
      if (s.length === 12 && isNaN(s[6])) {
        e.push(`L${G.svgRound(s[10])} ${G.svgRound(s[11])}`);
        continue;
      }
      for (let i = 6, r = s.length; i < r; i += 6) {
        const [a, o, l, h, d, u] = s.subarray(i, i + 6).map(G.svgRound);
        e.push(`C${a} ${o} ${l} ${h} ${d} ${u}`);
      }
    }
    return e.join("");
  }
  serialize([e, s, i, r], a) {
    const o = [], l = [], [h, d, u, p] = w(this, xe, ny).call(this);
    let b, S, v, E, x, T, _, f, m;
    switch (n(this, Hl)) {
      case 0:
        m = G._rescale, b = e, S = s + r, v = i, E = -r, x = e + h * i, T = s + (1 - d - p) * r, _ = e + (h + u) * i, f = s + (1 - d) * r;
        break;
      case 90:
        m = G._rescaleAndSwap, b = e, S = s, v = i, E = r, x = e + d * i, T = s + h * r, _ = e + (d + p) * i, f = s + (h + u) * r;
        break;
      case 180:
        m = G._rescale, b = e + i, S = s, v = -i, E = r, x = e + (1 - h - u) * i, T = s + d * r, _ = e + (1 - h) * i, f = s + (d + p) * r;
        break;
      case 270:
        m = G._rescaleAndSwap, b = e + i, S = s + r, v = -i, E = -r, x = e + (1 - d - p) * i, T = s + (1 - h - u) * r, _ = e + (1 - d) * i, f = s + (1 - h) * r;
        break;
    }
    for (const {
      line: A,
      points: C
    } of n(this, ws))
      o.push(m(A, b, S, v, E, a ? new Array(A.length) : null)), l.push(m(C, b, S, v, E, a ? new Array(C.length) : null));
    return {
      lines: o,
      points: l,
      rect: [x, T, _, f]
    };
  }
  static deserialize(e, s, i, r, a, {
    paths: {
      lines: o,
      points: l
    },
    rotation: h,
    thickness: d
  }) {
    const u = [];
    let p, b, S, v, E;
    switch (h) {
      case 0:
        E = G._rescale, p = -e / i, b = s / r + 1, S = 1 / i, v = -1 / r;
        break;
      case 90:
        E = G._rescaleAndSwap, p = -s / r, b = -e / i, S = 1 / r, v = 1 / i;
        break;
      case 180:
        E = G._rescale, p = e / i + 1, b = -s / r, S = -1 / i, v = 1 / r;
        break;
      case 270:
        E = G._rescaleAndSwap, p = s / r + 1, b = e / i + 1, S = -1 / r, v = -1 / i;
        break;
    }
    if (!o) {
      o = [];
      for (const T of l) {
        const _ = T.length;
        if (_ === 2) {
          o.push(new Float32Array([NaN, NaN, NaN, NaN, T[0], T[1]]));
          continue;
        }
        if (_ === 4) {
          o.push(new Float32Array([NaN, NaN, NaN, NaN, T[0], T[1], NaN, NaN, NaN, NaN, T[2], T[3]]));
          continue;
        }
        const f = new Float32Array(3 * (_ - 2));
        o.push(f);
        let [m, A, C, P] = T.subarray(0, 4);
        f.set([NaN, NaN, NaN, NaN, m, A], 0);
        for (let R = 4; R < _; R += 2) {
          const L = T[R], D = T[R + 1];
          f.set(G.createBezierPoints(m, A, C, P, L, D), (R - 2) * 3), [m, A, C, P] = [C, P, L, D];
        }
      }
    }
    for (let T = 0, _ = o.length; T < _; T++)
      u.push({
        line: E(o[T].map((f) => f ?? NaN), p, b, S, v),
        points: E(l[T].map((f) => f ?? NaN), p, b, S, v)
      });
    const x = new this.prototype.constructor();
    return x.build(u, i, r, 1, h, d, a), x;
  }
  get box() {
    return n(this, $e);
  }
  updateProperty(e, s) {
    return e === "stroke-width" ? w(this, xe, ay).call(this, s) : null;
  }
  updateParentDimensions([e, s], i) {
    const [r, a] = w(this, xe, Ui).call(this);
    g(this, ki, e), g(this, Li, s), g(this, $l, i);
    const [o, l] = w(this, xe, Ui).call(this), h = o - r, d = l - a, u = n(this, $e);
    return u[0] -= h, u[1] -= d, u[2] += 2 * h, u[3] += 2 * d, u;
  }
  updateRotation(e) {
    return g(this, dd, e), {
      path: {
        transform: this.rotationTransform
      }
    };
  }
  get viewBox() {
    return n(this, $e).map(G.svgRound).join(" ");
  }
  get defaultProperties() {
    const [e, s] = n(this, $e);
    return {
      root: {
        viewBox: this.viewBox
      },
      path: {
        "transform-origin": `${G.svgRound(e)} ${G.svgRound(s)}`
      }
    };
  }
  get rotationTransform() {
    const [, , e, s] = n(this, $e);
    let i = 0, r = 0, a = 0, o = 0, l = 0, h = 0;
    switch (n(this, dd)) {
      case 90:
        r = s / e, a = -e / s, l = e;
        break;
      case 180:
        i = -1, o = -1, l = e, h = s;
        break;
      case 270:
        r = -s / e, a = e / s, h = s;
        break;
      default:
        return "";
    }
    return `matrix(${i} ${r} ${a} ${o} ${G.svgRound(l)} ${G.svgRound(h)})`;
  }
  getPathResizingSVGProperties([e, s, i, r]) {
    const [a, o] = w(this, xe, Ui).call(this), [l, h, d, u] = n(this, $e);
    if (Math.abs(d - a) <= G.PRECISION || Math.abs(u - o) <= G.PRECISION) {
      const E = e + i / 2 - (l + d / 2), x = s + r / 2 - (h + u / 2);
      return {
        path: {
          "transform-origin": `${G.svgRound(e)} ${G.svgRound(s)}`,
          transform: `${this.rotationTransform} translate(${E} ${x})`
        }
      };
    }
    const p = (i - 2 * a) / (d - 2 * a), b = (r - 2 * o) / (u - 2 * o), S = d / i, v = u / r;
    return {
      path: {
        "transform-origin": `${G.svgRound(l)} ${G.svgRound(h)}`,
        transform: `${this.rotationTransform} scale(${S} ${v}) translate(${G.svgRound(a)} ${G.svgRound(o)}) scale(${p} ${b}) translate(${G.svgRound(-a)} ${G.svgRound(-o)})`
      }
    };
  }
  getPathResizedSVGProperties([e, s, i, r]) {
    const [a, o] = w(this, xe, Ui).call(this), l = n(this, $e), [h, d, u, p] = l;
    if (l[0] = e, l[1] = s, l[2] = i, l[3] = r, Math.abs(u - a) <= G.PRECISION || Math.abs(p - o) <= G.PRECISION) {
      const x = e + i / 2 - (h + u / 2), T = s + r / 2 - (d + p / 2);
      for (const {
        line: _,
        points: f
      } of n(this, ws))
        G._translate(_, x, T, _), G._translate(f, x, T, f);
      return {
        root: {
          viewBox: this.viewBox
        },
        path: {
          "transform-origin": `${G.svgRound(e)} ${G.svgRound(s)}`,
          transform: this.rotationTransform || null,
          d: this.toSVGPath()
        }
      };
    }
    const b = (i - 2 * a) / (u - 2 * a), S = (r - 2 * o) / (p - 2 * o), v = -b * (h + a) + e + a, E = -S * (d + o) + s + o;
    if (b !== 1 || S !== 1 || v !== 0 || E !== 0)
      for (const {
        line: x,
        points: T
      } of n(this, ws))
        G._rescale(x, v, E, b, S, x), G._rescale(T, v, E, b, S, T);
    return {
      root: {
        viewBox: this.viewBox
      },
      path: {
        "transform-origin": `${G.svgRound(e)} ${G.svgRound(s)}`,
        transform: this.rotationTransform || null,
        d: this.toSVGPath()
      }
    };
  }
  getPathTranslatedSVGProperties([e, s], i) {
    const [r, a] = i, o = n(this, $e), l = e - o[0], h = s - o[1];
    if (n(this, ki) === r && n(this, Li) === a)
      for (const {
        line: d,
        points: u
      } of n(this, ws))
        G._translate(d, l, h, d), G._translate(u, l, h, u);
    else {
      const d = n(this, ki) / r, u = n(this, Li) / a;
      g(this, ki, r), g(this, Li, a);
      for (const {
        line: p,
        points: b
      } of n(this, ws))
        G._rescale(p, l, h, d, u, p), G._rescale(b, l, h, d, u, b);
      o[2] *= d, o[3] *= u;
    }
    return o[0] = e, o[1] = s, {
      root: {
        viewBox: this.viewBox
      },
      path: {
        d: this.toSVGPath(),
        "transform-origin": `${G.svgRound(e)} ${G.svgRound(s)}`
      }
    };
  }
  get defaultSVGProperties() {
    const e = n(this, $e);
    return {
      root: {
        viewBox: this.viewBox
      },
      rootClass: {
        draw: !0
      },
      path: {
        d: this.toSVGPath(),
        "transform-origin": `${G.svgRound(e[0])} ${G.svgRound(e[1])}`,
        transform: this.rotationTransform || null
      },
      bbox: e
    };
  }
}
$e = new WeakMap(), dd = new WeakMap(), ud = new WeakMap(), ws = new WeakMap(), ki = new WeakMap(), Li = new WeakMap(), $l = new WeakMap(), Hl = new WeakMap(), Va = new WeakMap(), xe = new WeakSet(), Ui = function(e = n(this, Va)) {
  const s = n(this, ud) + e / 2 * n(this, $l);
  return n(this, Hl) % 180 === 0 ? [s / n(this, ki), s / n(this, Li)] : [s / n(this, Li), s / n(this, ki)];
}, ny = function() {
  const [e, s, i, r] = n(this, $e), [a, o] = w(this, xe, Ui).call(this, 0);
  return [e + a, s + o, i - 2 * a, r - 2 * o];
}, ry = function() {
  const e = g(this, $e, new Float32Array([1 / 0, 1 / 0, -1 / 0, -1 / 0]));
  for (const {
    line: r
  } of n(this, ws)) {
    if (r.length <= 12) {
      for (let l = 4, h = r.length; l < h; l += 6)
        W.pointBoundingBox(r[l], r[l + 1], e);
      continue;
    }
    let a = r[4], o = r[5];
    for (let l = 6, h = r.length; l < h; l += 6) {
      const [d, u, p, b, S, v] = r.subarray(l, l + 6);
      W.bezierBoundingBox(a, o, d, u, p, b, S, v, e), a = S, o = v;
    }
  }
  const [s, i] = w(this, xe, Ui).call(this);
  e[0] = Me(e[0] - s, 0, 1), e[1] = Me(e[1] - i, 0, 1), e[2] = Me(e[2] + s, 0, 1), e[3] = Me(e[3] + i, 0, 1), e[2] -= e[0], e[3] -= e[1];
}, ay = function(e) {
  const [s, i] = w(this, xe, Ui).call(this);
  g(this, Va, e);
  const [r, a] = w(this, xe, Ui).call(this), [o, l] = [r - s, a - i], h = n(this, $e);
  return h[0] -= o, h[1] -= l, h[2] += 2 * o, h[3] += 2 * l, h;
};
class Yu extends sy {
  constructor(t) {
    super(), this._viewParameters = t, super.updateProperties({
      fill: "none",
      stroke: kt._defaultLineColor,
      "stroke-opacity": 1,
      "stroke-width": 1,
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-miterlimit": 10
    });
  }
  updateSVGProperty(t, e) {
    t === "stroke-width" && (e ?? (e = this["stroke-width"]), e *= this._viewParameters.realScale), super.updateSVGProperty(t, e);
  }
  clone() {
    const t = new Yu(this._viewParameters);
    return t.updateAll(this), t;
  }
}
var zu, oy;
const bo = class bo extends Su {
  constructor(e) {
    super({
      ...e,
      name: "inkEditor"
    });
    y(this, zu);
    this._willKeepAspectRatio = !0, this.defaultL10nId = "pdfjs-editor-ink-editor";
  }
  static initialize(e, s) {
    kt.initialize(e, s), this._defaultDrawingOptions = new Yu(s.viewParameters);
  }
  static getDefaultDrawingOptions(e) {
    const s = this._defaultDrawingOptions.clone();
    return s.updateProperties(e), s;
  }
  static get supportMultipleDrawings() {
    return !0;
  }
  static get typesMap() {
    return et(this, "typesMap", /* @__PURE__ */ new Map([[at.INK_THICKNESS, "stroke-width"], [at.INK_COLOR, "stroke"], [at.INK_OPACITY, "stroke-opacity"]]));
  }
  static createDrawerInstance(e, s, i, r, a) {
    return new rA(e, s, i, r, a, this._defaultDrawingOptions["stroke-width"]);
  }
  static deserializeDraw(e, s, i, r, a, o) {
    return Ad.deserialize(e, s, i, r, a, o);
  }
  static async deserialize(e, s, i) {
    let r = null;
    if (e instanceof tg) {
      const {
        data: {
          inkLists: o,
          rect: l,
          rotation: h,
          id: d,
          color: u,
          opacity: p,
          borderStyle: {
            rawWidth: b
          },
          popupRef: S,
          richText: v,
          contentsObj: E,
          creationDate: x,
          modificationDate: T
        },
        parent: {
          page: {
            pageNumber: _
          }
        }
      } = e;
      r = e = {
        annotationType: Z.INK,
        color: Array.from(u),
        thickness: b,
        opacity: p,
        paths: {
          points: o
        },
        boxes: null,
        pageIndex: _ - 1,
        rect: l.slice(0),
        rotation: h,
        annotationElementId: d,
        id: d,
        deleted: !1,
        popupRef: S,
        richText: v,
        comment: (E == null ? void 0 : E.str) || null,
        creationDate: x,
        modificationDate: T
      };
    }
    const a = await super.deserialize(e, s, i);
    return a._initialData = r, e.comment && a.setCommentData(e), a;
  }
  get toolbarButtons() {
    return this._colorPicker || (this._colorPicker = new wu(this)), [["colorPicker", this._colorPicker]];
  }
  get colorType() {
    return at.INK_COLOR;
  }
  get color() {
    return this._drawingOptions.stroke;
  }
  get opacity() {
    return this._drawingOptions["stroke-opacity"];
  }
  onScaleChanging() {
    if (!this.parent)
      return;
    super.onScaleChanging();
    const {
      _drawId: e,
      _drawingOptions: s,
      parent: i
    } = this;
    s.updateSVGProperty("stroke-width"), i.drawLayer.updateProperties(e, s.toSVGProperties());
  }
  static onScaleChangingWhenDrawing() {
    const e = this._currentParent;
    e && (super.onScaleChangingWhenDrawing(), this._defaultDrawingOptions.updateSVGProperty("stroke-width"), e.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties()));
  }
  createDrawingOptions({
    color: e,
    thickness: s,
    opacity: i
  }) {
    this._drawingOptions = bo.getDefaultDrawingOptions({
      stroke: W.makeHexColor(...e),
      "stroke-width": s,
      "stroke-opacity": i
    });
  }
  serialize(e = !1) {
    if (this.isEmpty())
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const {
      lines: s,
      points: i
    } = this.serializeDraw(e), {
      _drawingOptions: {
        stroke: r,
        "stroke-opacity": a,
        "stroke-width": o
      }
    } = this, l = Object.assign(super.serialize(e), {
      color: kt._colorManager.convert(r),
      opacity: a,
      thickness: o,
      paths: {
        lines: s,
        points: i
      }
    });
    return this.addComment(l), e ? (l.isCopy = !0, l) : this.annotationElementId && !w(this, zu, oy).call(this, l) ? null : (l.id = this.annotationElementId, l);
  }
  renderAnnotationElement(e) {
    if (this.deleted)
      return e.hide(), null;
    const {
      points: s,
      rect: i
    } = this.serializeDraw(!1);
    return e.updateEdited({
      rect: i,
      thickness: this._drawingOptions["stroke-width"],
      points: s,
      popup: this.comment
    }), null;
  }
};
zu = new WeakSet(), oy = function(e) {
  const {
    color: s,
    thickness: i,
    opacity: r,
    pageIndex: a
  } = this._initialData;
  return this.hasEditedComment || this._hasBeenMoved || this._hasBeenResized || e.color.some((o, l) => o !== s[l]) || e.thickness !== i || e.opacity !== r || e.pageIndex !== a;
}, N(bo, "_type", "ink"), N(bo, "_editorType", Z.INK), N(bo, "_defaultDrawingOptions", null);
let _p = bo;
class Cp extends Ad {
  toSVGPath() {
    let t = super.toSVGPath();
    return t.endsWith("Z") || (t += "Z"), t;
  }
}
const Id = 8, eh = 3;
var qa, pt, Tp, Qs, ly, hy, Pp, ou, cy, dy, uy, Rp, kp, fy;
class Fi {
  static extractContoursFromText(t, {
    fontFamily: e,
    fontStyle: s,
    fontWeight: i
  }, r, a, o, l) {
    let h = new OffscreenCanvas(1, 1), d = h.getContext("2d", {
      alpha: !1
    });
    const u = 200, p = d.font = `${s} ${i} ${u}px ${e}`, {
      actualBoundingBoxLeft: b,
      actualBoundingBoxRight: S,
      actualBoundingBoxAscent: v,
      actualBoundingBoxDescent: E,
      fontBoundingBoxAscent: x,
      fontBoundingBoxDescent: T,
      width: _
    } = d.measureText(t), f = 1.5, m = Math.ceil(Math.max(Math.abs(b) + Math.abs(S) || 0, _) * f), A = Math.ceil(Math.max(Math.abs(v) + Math.abs(E) || u, Math.abs(x) + Math.abs(T) || u) * f);
    h = new OffscreenCanvas(m, A), d = h.getContext("2d", {
      alpha: !0,
      willReadFrequently: !0
    }), d.font = p, d.filter = "grayscale(1)", d.fillStyle = "white", d.fillRect(0, 0, m, A), d.fillStyle = "black", d.fillText(t, m * (f - 1) / 2, A * (3 - f) / 2);
    const C = w(this, pt, Rp).call(this, d.getImageData(0, 0, m, A).data), P = w(this, pt, uy).call(this, C), R = w(this, pt, kp).call(this, P), L = w(this, pt, Pp).call(this, C, m, A, R);
    return this.processDrawnLines({
      lines: {
        curves: L,
        width: m,
        height: A
      },
      pageWidth: r,
      pageHeight: a,
      rotation: o,
      innerMargin: l,
      mustSmooth: !0,
      areContours: !0
    });
  }
  static process(t, e, s, i, r) {
    const [a, o, l] = w(this, pt, fy).call(this, t), [h, d] = w(this, pt, dy).call(this, a, o, l, Math.hypot(o, l) * n(this, qa).sigmaSFactor, n(this, qa).sigmaR, n(this, qa).kernelSize), u = w(this, pt, kp).call(this, d), p = w(this, pt, Pp).call(this, h, o, l, u);
    return this.processDrawnLines({
      lines: {
        curves: p,
        width: o,
        height: l
      },
      pageWidth: e,
      pageHeight: s,
      rotation: i,
      innerMargin: r,
      mustSmooth: !0,
      areContours: !0
    });
  }
  static processDrawnLines({
    lines: t,
    pageWidth: e,
    pageHeight: s,
    rotation: i,
    innerMargin: r,
    mustSmooth: a,
    areContours: o
  }) {
    i % 180 !== 0 && ([e, s] = [s, e]);
    const {
      curves: l,
      width: h,
      height: d
    } = t, u = t.thickness ?? 0, p = [], b = Math.min(e / h, s / d), S = b / e, v = b / s, E = [];
    for (const {
      points: T
    } of l) {
      const _ = a ? w(this, pt, cy).call(this, T) : T;
      if (!_)
        continue;
      E.push(_);
      const f = _.length, m = new Float32Array(f), A = new Float32Array(3 * (f === 2 ? 2 : f - 2));
      if (p.push({
        line: A,
        points: m
      }), f === 2) {
        m[0] = _[0] * S, m[1] = _[1] * v, A.set([NaN, NaN, NaN, NaN, m[0], m[1]], 0);
        continue;
      }
      let [C, P, R, L] = _;
      C *= S, P *= v, R *= S, L *= v, m.set([C, P, R, L], 0), A.set([NaN, NaN, NaN, NaN, C, P], 0);
      for (let D = 4; D < f; D += 2) {
        const F = m[D] = _[D] * S, U = m[D + 1] = _[D + 1] * v;
        A.set(G.createBezierPoints(C, P, R, L, F, U), (D - 2) * 3), [C, P, R, L] = [R, L, F, U];
      }
    }
    if (p.length === 0)
      return null;
    const x = o ? new Cp() : new Ad();
    return x.build(p, e, s, 1, i, o ? 0 : u, r), {
      outline: x,
      newCurves: E,
      areContours: o,
      thickness: u,
      width: h,
      height: d
    };
  }
  static async compressSignature({
    outlines: t,
    areContours: e,
    thickness: s,
    width: i,
    height: r
  }) {
    let a = 1 / 0, o = -1 / 0, l = 0;
    for (const _ of t) {
      l += _.length;
      for (let f = 2, m = _.length; f < m; f++) {
        const A = _[f] - _[f - 2];
        a = Math.min(a, A), o = Math.max(o, A);
      }
    }
    let h;
    a >= -128 && o <= 127 ? h = Int8Array : a >= -32768 && o <= 32767 ? h = Int16Array : h = Int32Array;
    const d = t.length, u = Id + eh * d, p = new Uint32Array(u);
    let b = 0;
    p[b++] = u * Uint32Array.BYTES_PER_ELEMENT + (l - 2 * d) * h.BYTES_PER_ELEMENT, p[b++] = 0, p[b++] = i, p[b++] = r, p[b++] = e ? 0 : 1, p[b++] = Math.max(0, Math.floor(s ?? 0)), p[b++] = d, p[b++] = h.BYTES_PER_ELEMENT;
    for (const _ of t)
      p[b++] = _.length - 2, p[b++] = _[0], p[b++] = _[1];
    const S = new CompressionStream("deflate-raw"), v = S.writable.getWriter();
    await v.ready, v.write(p);
    const E = h.prototype.constructor;
    for (const _ of t) {
      const f = new E(_.length - 2);
      for (let m = 2, A = _.length; m < A; m++)
        f[m - 2] = _[m] - _[m - 2];
      v.write(f);
    }
    v.close();
    const x = await new Response(S.readable).arrayBuffer(), T = new Uint8Array(x);
    return hm(T);
  }
  static async decompressSignature(t) {
    try {
      const e = k0(t), {
        readable: s,
        writable: i
      } = new DecompressionStream("deflate-raw"), r = i.getWriter();
      await r.ready, r.write(e).then(async () => {
        await r.ready, await r.close();
      }).catch(() => {
      });
      let a = null, o = 0;
      for await (const _ of s)
        a || (a = new Uint8Array(new Uint32Array(_.buffer, 0, 4)[0])), a.set(_, o), o += _.length;
      const l = new Uint32Array(a.buffer, 0, a.length >> 2), h = l[1];
      if (h !== 0)
        throw new Error(`Invalid version: ${h}`);
      const d = l[2], u = l[3], p = l[4] === 0, b = l[5], S = l[6], v = l[7], E = [], x = (Id + eh * S) * Uint32Array.BYTES_PER_ELEMENT;
      let T;
      switch (v) {
        case Int8Array.BYTES_PER_ELEMENT:
          T = new Int8Array(a.buffer, x);
          break;
        case Int16Array.BYTES_PER_ELEMENT:
          T = new Int16Array(a.buffer, x);
          break;
        case Int32Array.BYTES_PER_ELEMENT:
          T = new Int32Array(a.buffer, x);
          break;
      }
      o = 0;
      for (let _ = 0; _ < S; _++) {
        const f = l[eh * _ + Id], m = new Float32Array(f + 2);
        E.push(m);
        for (let A = 0; A < eh - 1; A++)
          m[A] = l[eh * _ + Id + A + 1];
        for (let A = 0; A < f; A++)
          m[A + 2] = m[A] + T[o++];
      }
      return {
        areContours: p,
        thickness: b,
        outlines: E,
        width: d,
        height: u
      };
    } catch (e) {
      return J(`decompressSignature: ${e}`), null;
    }
  }
}
qa = new WeakMap(), pt = new WeakSet(), Tp = function(t, e, s, i) {
  return s -= t, i -= e, s === 0 ? i > 0 ? 0 : 4 : s === 1 ? i + 6 : 2 - i;
}, Qs = new WeakMap(), ly = function(t, e, s, i, r, a, o) {
  const l = w(this, pt, Tp).call(this, s, i, r, a);
  for (let h = 0; h < 8; h++) {
    const d = (-h + l - o + 16) % 8, u = n(this, Qs)[2 * d], p = n(this, Qs)[2 * d + 1];
    if (t[(s + u) * e + (i + p)] !== 0)
      return d;
  }
  return -1;
}, hy = function(t, e, s, i, r, a, o) {
  const l = w(this, pt, Tp).call(this, s, i, r, a);
  for (let h = 0; h < 8; h++) {
    const d = (h + l + o + 16) % 8, u = n(this, Qs)[2 * d], p = n(this, Qs)[2 * d + 1];
    if (t[(s + u) * e + (i + p)] !== 0)
      return d;
  }
  return -1;
}, Pp = function(t, e, s, i) {
  const r = t.length, a = new Int32Array(r);
  for (let d = 0; d < r; d++)
    a[d] = t[d] <= i ? 1 : 0;
  for (let d = 1; d < s - 1; d++)
    a[d * e] = a[d * e + e - 1] = 0;
  for (let d = 0; d < e; d++)
    a[d] = a[e * s - 1 - d] = 0;
  let o = 1, l;
  const h = [];
  for (let d = 1; d < s - 1; d++) {
    l = 1;
    for (let u = 1; u < e - 1; u++) {
      const p = d * e + u, b = a[p];
      if (b === 0)
        continue;
      let S = d, v = u;
      if (b === 1 && a[p - 1] === 0)
        o += 1, v -= 1;
      else if (b >= 1 && a[p + 1] === 0)
        o += 1, v += 1, b > 1 && (l = b);
      else {
        b !== 1 && (l = Math.abs(b));
        continue;
      }
      const E = [u, d], x = v === u + 1, T = {
        isHole: x,
        points: E,
        id: o,
        parent: 0
      };
      h.push(T);
      let _;
      for (const D of h)
        if (D.id === l) {
          _ = D;
          break;
        }
      _ ? _.isHole ? T.parent = x ? _.parent : l : T.parent = x ? l : _.parent : T.parent = x ? l : 0;
      const f = w(this, pt, ly).call(this, a, e, d, u, S, v, 0);
      if (f === -1) {
        a[p] = -o, a[p] !== 1 && (l = Math.abs(a[p]));
        continue;
      }
      let m = n(this, Qs)[2 * f], A = n(this, Qs)[2 * f + 1];
      const C = d + m, P = u + A;
      S = C, v = P;
      let R = d, L = u;
      for (; ; ) {
        const D = w(this, pt, hy).call(this, a, e, R, L, S, v, 1);
        m = n(this, Qs)[2 * D], A = n(this, Qs)[2 * D + 1];
        const F = R + m, U = L + A;
        E.push(U, F);
        const O = R * e + L;
        if (a[O + 1] === 0 ? a[O] = -o : a[O] === 1 && (a[O] = o), F === d && U === u && R === C && L === P) {
          a[p] !== 1 && (l = Math.abs(a[p]));
          break;
        } else
          S = R, v = L, R = F, L = U;
      }
    }
  }
  return h;
}, ou = function(t, e, s, i) {
  if (s - e <= 4) {
    for (let C = e; C < s - 2; C += 2)
      i.push(t[C], t[C + 1]);
    return;
  }
  const r = t[e], a = t[e + 1], o = t[s - 4] - r, l = t[s - 3] - a, h = Math.hypot(o, l), d = o / h, u = l / h, p = d * a - u * r, b = l / o, S = 1 / h, v = Math.atan(b), E = Math.cos(v), x = Math.sin(v), T = S * (Math.abs(E) + Math.abs(x)), _ = S * (1 - T + T ** 2), f = Math.max(Math.atan(Math.abs(x + E) * _), Math.atan(Math.abs(x - E) * _));
  let m = 0, A = e;
  for (let C = e + 2; C < s - 2; C += 2) {
    const P = Math.abs(p - d * t[C + 1] + u * t[C]);
    P > m && (A = C, m = P);
  }
  m > (h * f) ** 2 ? (w(this, pt, ou).call(this, t, e, A + 2, i), w(this, pt, ou).call(this, t, A, s, i)) : i.push(r, a);
}, cy = function(t) {
  const e = [], s = t.length;
  return w(this, pt, ou).call(this, t, 0, s, e), e.push(t[s - 2], t[s - 1]), e.length <= 4 ? null : e;
}, dy = function(t, e, s, i, r, a) {
  const o = new Float32Array(a ** 2), l = -2 * i ** 2, h = a >> 1;
  for (let v = 0; v < a; v++) {
    const E = (v - h) ** 2;
    for (let x = 0; x < a; x++)
      o[v * a + x] = Math.exp((E + (x - h) ** 2) / l);
  }
  const d = new Float32Array(256), u = -2 * r ** 2;
  for (let v = 0; v < 256; v++)
    d[v] = Math.exp(v ** 2 / u);
  const p = t.length, b = new Uint8Array(p), S = new Uint32Array(256);
  for (let v = 0; v < s; v++)
    for (let E = 0; E < e; E++) {
      const x = v * e + E, T = t[x];
      let _ = 0, f = 0;
      for (let A = 0; A < a; A++) {
        const C = v + A - h;
        if (!(C < 0 || C >= s))
          for (let P = 0; P < a; P++) {
            const R = E + P - h;
            if (R < 0 || R >= e)
              continue;
            const L = t[C * e + R], D = o[A * a + P] * d[Math.abs(L - T)];
            _ += L * D, f += D;
          }
      }
      const m = b[x] = Math.round(_ / f);
      S[m]++;
    }
  return [b, S];
}, uy = function(t) {
  const e = new Uint32Array(256);
  for (const s of t)
    e[s]++;
  return e;
}, Rp = function(t) {
  const e = t.length, s = new Uint8ClampedArray(e >> 2);
  let i = -1 / 0, r = 1 / 0;
  for (let o = 0, l = s.length; o < l; o++) {
    const h = s[o] = t[o << 2];
    i = Math.max(i, h), r = Math.min(r, h);
  }
  const a = 255 / (i - r);
  for (let o = 0, l = s.length; o < l; o++)
    s[o] = (s[o] - r) * a;
  return s;
}, kp = function(t) {
  let e, s = -1 / 0, i = -1 / 0;
  const r = t.findIndex((l) => l !== 0);
  let a = r, o = r;
  for (e = r; e < 256; e++) {
    const l = t[e];
    l > s && (e - a > i && (i = e - a, o = e - 1), s = l, a = e);
  }
  for (e = o - 1; e >= 0 && !(t[e] > t[e + 1]); e--)
    ;
  return e;
}, fy = function(t) {
  const e = t, {
    width: s,
    height: i
  } = t, {
    maxDim: r
  } = n(this, qa);
  let a = s, o = i;
  if (s > r || i > r) {
    let p = s, b = i, S = Math.log2(Math.max(s, i) / r);
    const v = Math.floor(S);
    S = S === v ? v - 1 : v;
    for (let x = 0; x < S; x++) {
      a = Math.ceil(p / 2), o = Math.ceil(b / 2);
      const T = new OffscreenCanvas(a, o);
      T.getContext("2d").drawImage(t, 0, 0, p, b, 0, 0, a, o), p = a, b = o, t !== e && t.close(), t = T.transferToImageBitmap();
    }
    const E = Math.min(r / a, r / o);
    a = Math.round(a * E), o = Math.round(o * E);
  }
  const h = new OffscreenCanvas(a, o).getContext("2d", {
    willReadFrequently: !0
  });
  h.fillStyle = "white", h.fillRect(0, 0, a, o), h.filter = "grayscale(1)", h.drawImage(t, 0, 0, t.width, t.height, 0, 0, a, o);
  const d = h.getImageData(0, 0, a, o).data;
  return [w(this, pt, Rp).call(this, d), a, o];
}, y(Fi, pt), y(Fi, qa, {
  maxDim: 512,
  sigmaSFactor: 0.02,
  sigmaR: 25,
  kernelSize: 16
}), y(Fi, Qs, new Int32Array([0, 1, -1, 1, -1, 0, -1, -1, 0, -1, 1, -1, 1, 0, 1, 1]));
class sg extends sy {
  constructor() {
    super(), super.updateProperties({
      fill: kt._defaultLineColor,
      "stroke-width": 0
    });
  }
  clone() {
    const t = new sg();
    return t.updateAll(this), t;
  }
}
class ig extends Yu {
  constructor(t) {
    super(t), super.updateProperties({
      stroke: kt._defaultLineColor,
      "stroke-width": 1
    });
  }
  clone() {
    const t = new ig(this._viewParameters);
    return t.updateAll(this), t;
  }
}
var Ar, Di, vr, Xa;
const is = class is extends Su {
  constructor(e) {
    super({
      ...e,
      mustBeCommitted: !0,
      name: "signatureEditor"
    });
    y(this, Ar, !1);
    y(this, Di, null);
    y(this, vr, null);
    y(this, Xa, null);
    this._willKeepAspectRatio = !0, g(this, vr, e.signatureData || null), g(this, Di, null), this.defaultL10nId = "pdfjs-editor-signature-editor1";
  }
  static initialize(e, s) {
    kt.initialize(e, s), this._defaultDrawingOptions = new sg(), this._defaultDrawnSignatureOptions = new ig(s.viewParameters);
  }
  static getDefaultDrawingOptions(e) {
    const s = this._defaultDrawingOptions.clone();
    return s.updateProperties(e), s;
  }
  static get supportMultipleDrawings() {
    return !1;
  }
  static get typesMap() {
    return et(this, "typesMap", /* @__PURE__ */ new Map());
  }
  static get isDrawer() {
    return !1;
  }
  get telemetryFinalData() {
    return {
      type: "signature",
      hasDescription: !!n(this, Di)
    };
  }
  static computeTelemetryFinalData(e) {
    const s = e.get("hasDescription");
    return {
      hasAltText: s.get(!0) ?? 0,
      hasNoAltText: s.get(!1) ?? 0
    };
  }
  get isResizable() {
    return !0;
  }
  onScaleChanging() {
    this._drawId !== null && super.onScaleChanging();
  }
  render() {
    if (this.div)
      return this.div;
    let e, s;
    const {
      _isCopy: i
    } = this;
    if (i && (this._isCopy = !1, e = this.x, s = this.y), super.render(), this._drawId === null)
      if (n(this, vr)) {
        const {
          lines: r,
          mustSmooth: a,
          areContours: o,
          description: l,
          uuid: h,
          heightInPage: d
        } = n(this, vr), {
          rawDims: {
            pageWidth: u,
            pageHeight: p
          },
          rotation: b
        } = this.parent.viewport, S = Fi.processDrawnLines({
          lines: r,
          pageWidth: u,
          pageHeight: p,
          rotation: b,
          innerMargin: is._INNER_MARGIN,
          mustSmooth: a,
          areContours: o
        });
        this.addSignature(S, d, l, h);
      } else
        this.div.setAttribute("data-l10n-args", JSON.stringify({
          description: ""
        })), this.div.hidden = !0, this._uiManager.getSignature(this);
    else
      this.div.setAttribute("data-l10n-args", JSON.stringify({
        description: n(this, Di) || ""
      }));
    return i && (this._isCopy = !0, this._moveAfterPaste(e, s)), this.div;
  }
  setUuid(e) {
    g(this, Xa, e), this.addEditToolbar();
  }
  getUuid() {
    return n(this, Xa);
  }
  get description() {
    return n(this, Di);
  }
  set description(e) {
    g(this, Di, e), this.div && (this.div.setAttribute("data-l10n-args", JSON.stringify({
      description: e
    })), super.addEditToolbar().then((s) => {
      s == null || s.updateEditSignatureButton(e);
    }));
  }
  getSignaturePreview() {
    const {
      newCurves: e,
      areContours: s,
      thickness: i,
      width: r,
      height: a
    } = n(this, vr), o = Math.max(r, a), l = Fi.processDrawnLines({
      lines: {
        curves: e.map((h) => ({
          points: h
        })),
        thickness: i,
        width: r,
        height: a
      },
      pageWidth: o,
      pageHeight: o,
      rotation: 0,
      innerMargin: 0,
      mustSmooth: !1,
      areContours: s
    });
    return {
      areContours: s,
      outline: l.outline
    };
  }
  get toolbarButtons() {
    return this._uiManager.signatureManager ? [["editSignature", this._uiManager.signatureManager]] : super.toolbarButtons;
  }
  addSignature(e, s, i, r) {
    const {
      x: a,
      y: o
    } = this, {
      outline: l
    } = g(this, vr, e);
    g(this, Ar, l instanceof Cp), this.description = i;
    let h;
    n(this, Ar) ? h = is.getDefaultDrawingOptions() : (h = is._defaultDrawnSignatureOptions.clone(), h.updateProperties({
      "stroke-width": l.thickness
    })), this._addOutlines({
      drawOutlines: l,
      drawingOptions: h
    });
    const [, d] = this.pageDimensions;
    let u = s / d;
    u = u >= 1 ? 0.5 : u, this.width *= u / this.height, this.width >= 1 && (u *= 0.9 / this.width, this.width = 0.9), this.height = u, this.setDims(), this.x = a, this.y = o, this.center(), this._onResized(), this.onScaleChanging(), this.rotate(), this._uiManager.addToAnnotationStorage(this), this.setUuid(r), this._reportTelemetry({
      action: "pdfjs.signature.inserted",
      data: {
        hasBeenSaved: !!r,
        hasDescription: !!i
      }
    }), this.div.hidden = !1;
  }
  getFromImage(e) {
    const {
      rawDims: {
        pageWidth: s,
        pageHeight: i
      },
      rotation: r
    } = this.parent.viewport;
    return Fi.process(e, s, i, r, is._INNER_MARGIN);
  }
  getFromText(e, s) {
    const {
      rawDims: {
        pageWidth: i,
        pageHeight: r
      },
      rotation: a
    } = this.parent.viewport;
    return Fi.extractContoursFromText(e, s, i, r, a, is._INNER_MARGIN);
  }
  getDrawnSignature(e) {
    const {
      rawDims: {
        pageWidth: s,
        pageHeight: i
      },
      rotation: r
    } = this.parent.viewport;
    return Fi.processDrawnLines({
      lines: e,
      pageWidth: s,
      pageHeight: i,
      rotation: r,
      innerMargin: is._INNER_MARGIN,
      mustSmooth: !1,
      areContours: !1
    });
  }
  createDrawingOptions({
    areContours: e,
    thickness: s
  }) {
    e ? this._drawingOptions = is.getDefaultDrawingOptions() : (this._drawingOptions = is._defaultDrawnSignatureOptions.clone(), this._drawingOptions.updateProperties({
      "stroke-width": s
    }));
  }
  serialize(e = !1) {
    if (this.isEmpty())
      return null;
    const {
      lines: s,
      points: i
    } = this.serializeDraw(e), {
      _drawingOptions: {
        "stroke-width": r
      }
    } = this, a = Object.assign(super.serialize(e), {
      isSignature: !0,
      areContours: n(this, Ar),
      color: [0, 0, 0],
      thickness: n(this, Ar) ? 0 : r
    });
    return this.addComment(a), e ? (a.paths = {
      lines: s,
      points: i
    }, a.uuid = n(this, Xa), a.isCopy = !0) : a.lines = s, n(this, Di) && (a.accessibilityData = {
      type: "Figure",
      alt: n(this, Di)
    }), a;
  }
  static deserializeDraw(e, s, i, r, a, o) {
    return o.areContours ? Cp.deserialize(e, s, i, r, a, o) : Ad.deserialize(e, s, i, r, a, o);
  }
  static async deserialize(e, s, i) {
    var a;
    const r = await super.deserialize(e, s, i);
    return g(r, Ar, e.areContours), r.description = ((a = e.accessibilityData) == null ? void 0 : a.alt) || "", g(r, Xa, e.uuid), r;
  }
};
Ar = new WeakMap(), Di = new WeakMap(), vr = new WeakMap(), Xa = new WeakMap(), N(is, "_type", "signature"), N(is, "_editorType", Z.SIGNATURE), N(is, "_defaultDrawingOptions", null);
let Lp = is;
var Ot, fe, Sr, An, xr, Ul, vn, Ya, Mi, As, zl, ut, Sh, xh, lu, hu, cu, Mp, du, py;
class Dp extends kt {
  constructor(e) {
    super({
      ...e,
      name: "stampEditor"
    });
    y(this, ut);
    y(this, Ot, null);
    y(this, fe, null);
    y(this, Sr, null);
    y(this, An, null);
    y(this, xr, null);
    y(this, Ul, "");
    y(this, vn, null);
    y(this, Ya, !1);
    y(this, Mi, null);
    y(this, As, !1);
    y(this, zl, !1);
    g(this, An, e.bitmapUrl), g(this, xr, e.bitmapFile), this.defaultL10nId = "pdfjs-editor-stamp-editor";
  }
  static initialize(e, s) {
    kt.initialize(e, s);
  }
  static isHandlingMimeForPasting(e) {
    return pu.includes(e);
  }
  static paste(e, s) {
    s.pasteEditor({
      mode: Z.STAMP
    }, {
      bitmapFile: e.getAsFile()
    });
  }
  altTextFinish() {
    this._uiManager.useNewAltTextFlow && (this.div.hidden = !1), super.altTextFinish();
  }
  get telemetryFinalData() {
    var e;
    return {
      type: "stamp",
      hasAltText: !!((e = this.altTextData) != null && e.altText)
    };
  }
  static computeTelemetryFinalData(e) {
    const s = e.get("hasAltText");
    return {
      hasAltText: s.get(!0) ?? 0,
      hasNoAltText: s.get(!1) ?? 0
    };
  }
  async mlGuessAltText(e = null, s = !0) {
    if (this.hasAltTextData())
      return null;
    const {
      mlManager: i
    } = this._uiManager;
    if (!i)
      throw new Error("No ML.");
    if (!await i.isEnabledFor("altText"))
      throw new Error("ML isn't enabled for alt text.");
    const {
      data: r,
      width: a,
      height: o
    } = e || this.copyCanvas(null, null, !0).imageData, l = await i.guess({
      name: "altText",
      request: {
        data: r,
        width: a,
        height: o,
        channels: r.length / (a * o)
      }
    });
    if (!l)
      throw new Error("No response from the AI service.");
    if (l.error)
      throw new Error("Error from the AI service.");
    if (l.cancel)
      return null;
    if (!l.output)
      throw new Error("No valid response from the AI service.");
    const h = l.output;
    return await this.setGuessedAltText(h), s && !this.hasAltTextData() && (this.altTextData = {
      alt: h,
      decorative: !1
    }), h;
  }
  remove() {
    var e;
    n(this, fe) && (g(this, Ot, null), this._uiManager.imageManager.deleteId(n(this, fe)), (e = n(this, vn)) == null || e.remove(), g(this, vn, null), n(this, Mi) && (clearTimeout(n(this, Mi)), g(this, Mi, null))), super.remove();
  }
  rebuild() {
    if (!this.parent) {
      n(this, fe) && w(this, ut, lu).call(this);
      return;
    }
    super.rebuild(), this.div !== null && (n(this, fe) && n(this, vn) === null && w(this, ut, lu).call(this), this.isAttachedToDOM || this.parent.add(this));
  }
  onceAdded(e) {
    this._isDraggable = !0, e && this.div.focus();
  }
  isEmpty() {
    return !(n(this, Sr) || n(this, Ot) || n(this, An) || n(this, xr) || n(this, fe) || n(this, Ya));
  }
  get toolbarButtons() {
    return [["altText", this.createAltText()]];
  }
  get isResizable() {
    return !0;
  }
  render() {
    if (this.div)
      return this.div;
    let e, s;
    return this._isCopy && (e = this.x, s = this.y), super.render(), this.div.hidden = !0, this.createAltText(), n(this, Ya) || (n(this, Ot) ? w(this, ut, hu).call(this) : w(this, ut, lu).call(this)), this._isCopy && this._moveAfterPaste(e, s), this._uiManager.addShouldRescale(this), this.div;
  }
  setCanvas(e, s) {
    const {
      id: i,
      bitmap: r
    } = this._uiManager.imageManager.getFromCanvas(e, s);
    s.remove(), i && this._uiManager.imageManager.isValidId(i) && (g(this, fe, i), r && g(this, Ot, r), g(this, Ya, !1), w(this, ut, hu).call(this));
  }
  _onResized() {
    this.onScaleChanging();
  }
  onScaleChanging() {
    if (!this.parent)
      return;
    n(this, Mi) !== null && clearTimeout(n(this, Mi)), g(this, Mi, setTimeout(() => {
      g(this, Mi, null), w(this, ut, Mp).call(this);
    }, 200));
  }
  copyCanvas(e, s, i = !1) {
    e || (e = 224);
    const {
      width: r,
      height: a
    } = n(this, Ot), o = new ri();
    let l = n(this, Ot), h = r, d = a, u = null;
    if (s) {
      if (r > s || a > s) {
        const C = Math.min(s / r, s / a);
        h = Math.floor(r * C), d = Math.floor(a * C);
      }
      u = document.createElement("canvas");
      const b = u.width = Math.ceil(h * o.sx), S = u.height = Math.ceil(d * o.sy);
      n(this, As) || (l = w(this, ut, cu).call(this, b, S));
      const v = u.getContext("2d");
      v.filter = this._uiManager.hcmFilter;
      let E = "white", x = "#cfcfd8";
      this._uiManager.hcmFilter !== "none" ? x = "black" : M0.isDarkMode && (E = "#8f8f9d", x = "#42414d");
      const T = 15, _ = T * o.sx, f = T * o.sy, m = new OffscreenCanvas(_ * 2, f * 2), A = m.getContext("2d");
      A.fillStyle = E, A.fillRect(0, 0, _ * 2, f * 2), A.fillStyle = x, A.fillRect(0, 0, _, f), A.fillRect(_, f, _, f), v.fillStyle = v.createPattern(m, "repeat"), v.fillRect(0, 0, b, S), v.drawImage(l, 0, 0, l.width, l.height, 0, 0, b, S);
    }
    let p = null;
    if (i) {
      let b, S;
      if (o.symmetric && l.width < e && l.height < e)
        b = l.width, S = l.height;
      else if (l = n(this, Ot), r > e || a > e) {
        const x = Math.min(e / r, e / a);
        b = Math.floor(r * x), S = Math.floor(a * x), n(this, As) || (l = w(this, ut, cu).call(this, b, S));
      }
      const E = new OffscreenCanvas(b, S).getContext("2d", {
        willReadFrequently: !0
      });
      E.drawImage(l, 0, 0, l.width, l.height, 0, 0, b, S), p = {
        width: b,
        height: S,
        data: E.getImageData(0, 0, b, S).data
      };
    }
    return {
      canvas: u,
      width: h,
      height: d,
      imageData: p
    };
  }
  static async deserialize(e, s, i) {
    var E;
    let r = null, a = !1;
    if (e instanceof kb) {
      const {
        data: {
          rect: x,
          rotation: T,
          id: _,
          structParent: f,
          popupRef: m,
          richText: A,
          contentsObj: C,
          creationDate: P,
          modificationDate: R
        },
        container: L,
        parent: {
          page: {
            pageNumber: D
          }
        },
        canvas: F
      } = e;
      let U, O;
      F ? (delete e.canvas, {
        id: U,
        bitmap: O
      } = i.imageManager.getFromCanvas(L.id, F), F.remove()) : (a = !0, e._hasNoCanvas = !0);
      const X = ((E = await s._structTree.getAriaAttributes(`${jp}${_}`)) == null ? void 0 : E.get("aria-label")) || "";
      r = e = {
        annotationType: Z.STAMP,
        bitmapId: U,
        bitmap: O,
        pageIndex: D - 1,
        rect: x.slice(0),
        rotation: T,
        annotationElementId: _,
        id: _,
        deleted: !1,
        accessibilityData: {
          decorative: !1,
          altText: X
        },
        isSvg: !1,
        structParent: f,
        popupRef: m,
        richText: A,
        comment: (C == null ? void 0 : C.str) || null,
        creationDate: P,
        modificationDate: R
      };
    }
    const o = await super.deserialize(e, s, i), {
      rect: l,
      bitmap: h,
      bitmapUrl: d,
      bitmapId: u,
      isSvg: p,
      accessibilityData: b
    } = e;
    a ? (i.addMissingCanvas(e.id, o), g(o, Ya, !0)) : u && i.imageManager.isValidId(u) ? (g(o, fe, u), h && g(o, Ot, h)) : g(o, An, d), g(o, As, p);
    const [S, v] = o.pageDimensions;
    return o.width = (l[2] - l[0]) / S, o.height = (l[3] - l[1]) / v, b && (o.altTextData = b), o._initialData = r, e.comment && o.setCommentData(e), g(o, zl, !!r), o;
  }
  serialize(e = !1, s = null) {
    if (this.isEmpty())
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const i = Object.assign(super.serialize(e), {
      bitmapId: n(this, fe),
      isSvg: n(this, As)
    });
    if (this.addComment(i), e)
      return i.bitmapUrl = w(this, ut, du).call(this, !0), i.accessibilityData = this.serializeAltText(!0), i.isCopy = !0, i;
    const {
      decorative: r,
      altText: a
    } = this.serializeAltText(!1);
    if (!r && a && (i.accessibilityData = {
      type: "Figure",
      alt: a
    }), this.annotationElementId) {
      const l = w(this, ut, py).call(this, i);
      return l.isSame ? null : (l.isSameAltText ? delete i.accessibilityData : i.accessibilityData.structParent = this._initialData.structParent ?? -1, i.id = this.annotationElementId, delete i.bitmapId, i);
    }
    if (s === null)
      return i;
    s.stamps || (s.stamps = /* @__PURE__ */ new Map());
    const o = n(this, As) ? (i.rect[2] - i.rect[0]) * (i.rect[3] - i.rect[1]) : null;
    if (!s.stamps.has(n(this, fe)))
      s.stamps.set(n(this, fe), {
        area: o,
        serialized: i
      }), i.bitmap = w(this, ut, du).call(this, !1);
    else if (n(this, As)) {
      const l = s.stamps.get(n(this, fe));
      o > l.area && (l.area = o, l.serialized.bitmap.close(), l.serialized.bitmap = w(this, ut, du).call(this, !1));
    }
    return i;
  }
  renderAnnotationElement(e) {
    return this.deleted ? (e.hide(), null) : (e.updateEdited({
      rect: this.getPDFRect(),
      popup: this.comment
    }), null);
  }
}
Ot = new WeakMap(), fe = new WeakMap(), Sr = new WeakMap(), An = new WeakMap(), xr = new WeakMap(), Ul = new WeakMap(), vn = new WeakMap(), Ya = new WeakMap(), Mi = new WeakMap(), As = new WeakMap(), zl = new WeakMap(), ut = new WeakSet(), Sh = function(e, s = !1) {
  if (!e) {
    this.remove();
    return;
  }
  g(this, Ot, e.bitmap), s || (g(this, fe, e.id), g(this, As, e.isSvg)), e.file && g(this, Ul, e.file.name), w(this, ut, hu).call(this);
}, xh = function() {
  if (g(this, Sr, null), this._uiManager.enableWaiting(!1), !!n(this, vn)) {
    if (this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && n(this, Ot)) {
      this.addEditToolbar().then(() => {
        this._editToolbar.hide(), this._uiManager.editAltText(this, !0);
      });
      return;
    }
    if (!this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && n(this, Ot)) {
      this._reportTelemetry({
        action: "pdfjs.image.image_added",
        data: {
          alt_text_modal: !1,
          alt_text_type: "empty"
        }
      });
      try {
        this.mlGuessAltText();
      } catch {
      }
    }
    this.div.focus();
  }
}, lu = function() {
  if (n(this, fe)) {
    this._uiManager.enableWaiting(!0), this._uiManager.imageManager.getFromId(n(this, fe)).then((i) => w(this, ut, Sh).call(this, i, !0)).finally(() => w(this, ut, xh).call(this));
    return;
  }
  if (n(this, An)) {
    const i = n(this, An);
    g(this, An, null), this._uiManager.enableWaiting(!0), g(this, Sr, this._uiManager.imageManager.getFromUrl(i).then((r) => w(this, ut, Sh).call(this, r)).finally(() => w(this, ut, xh).call(this)));
    return;
  }
  if (n(this, xr)) {
    const i = n(this, xr);
    g(this, xr, null), this._uiManager.enableWaiting(!0), g(this, Sr, this._uiManager.imageManager.getFromFile(i).then((r) => w(this, ut, Sh).call(this, r)).finally(() => w(this, ut, xh).call(this)));
    return;
  }
  const e = document.createElement("input");
  e.type = "file", e.accept = pu.join(",");
  const s = this._uiManager._signal;
  g(this, Sr, new Promise((i) => {
    e.addEventListener("change", async () => {
      if (!e.files || e.files.length === 0)
        this.remove();
      else {
        this._uiManager.enableWaiting(!0);
        const r = await this._uiManager.imageManager.getFromFile(e.files[0]);
        this._reportTelemetry({
          action: "pdfjs.image.image_selected",
          data: {
            alt_text_modal: this._uiManager.useNewAltTextFlow
          }
        }), w(this, ut, Sh).call(this, r);
      }
      i();
    }, {
      signal: s
    }), e.addEventListener("cancel", () => {
      this.remove(), i();
    }, {
      signal: s
    });
  }).finally(() => w(this, ut, xh).call(this))), e.click();
}, hu = function() {
  var h;
  const {
    div: e
  } = this;
  let {
    width: s,
    height: i
  } = n(this, Ot);
  const [r, a] = this.pageDimensions, o = 0.75;
  if (this.width)
    s = this.width * r, i = this.height * a;
  else if (s > o * r || i > o * a) {
    const d = Math.min(o * r / s, o * a / i);
    s *= d, i *= d;
  }
  this._uiManager.enableWaiting(!1);
  const l = g(this, vn, document.createElement("canvas"));
  l.setAttribute("role", "img"), this.addContainer(l), this.width = s / r, this.height = i / a, this.setDims(), (h = this._initialOptions) != null && h.isCentered ? this.center() : this.fixAndSetPosition(), this._initialOptions = null, (!this._uiManager.useNewAltTextWhenAddingImage || !this._uiManager.useNewAltTextFlow || this.annotationElementId) && (e.hidden = !1), w(this, ut, Mp).call(this), n(this, zl) || (this.parent.addUndoableEditor(this), g(this, zl, !0)), this._reportTelemetry({
    action: "inserted_image"
  }), n(this, Ul) && this.div.setAttribute("aria-description", n(this, Ul)), this.annotationElementId || this._uiManager.a11yAlert("pdfjs-editor-stamp-added-alert");
}, cu = function(e, s) {
  const {
    width: i,
    height: r
  } = n(this, Ot);
  let a = i, o = r, l = n(this, Ot);
  for (; a > 2 * e || o > 2 * s; ) {
    const h = a, d = o;
    a > 2 * e && (a = a >= 16384 ? Math.floor(a / 2) - 1 : Math.ceil(a / 2)), o > 2 * s && (o = o >= 16384 ? Math.floor(o / 2) - 1 : Math.ceil(o / 2));
    const u = new OffscreenCanvas(a, o);
    u.getContext("2d").drawImage(l, 0, 0, h, d, 0, 0, a, o), l = u.transferToImageBitmap();
  }
  return l;
}, Mp = function() {
  const [e, s] = this.parentDimensions, {
    width: i,
    height: r
  } = this, a = new ri(), o = Math.ceil(i * e * a.sx), l = Math.ceil(r * s * a.sy), h = n(this, vn);
  if (!h || h.width === o && h.height === l)
    return;
  h.width = o, h.height = l;
  const d = n(this, As) ? n(this, Ot) : w(this, ut, cu).call(this, o, l), u = h.getContext("2d");
  u.filter = this._uiManager.hcmFilter, u.drawImage(d, 0, 0, d.width, d.height, 0, 0, o, l);
}, du = function(e) {
  if (e) {
    if (n(this, As)) {
      const r = this._uiManager.imageManager.getSvgUrl(n(this, fe));
      if (r)
        return r;
    }
    const s = document.createElement("canvas");
    return {
      width: s.width,
      height: s.height
    } = n(this, Ot), s.getContext("2d").drawImage(n(this, Ot), 0, 0), s.toDataURL();
  }
  if (n(this, As)) {
    const [s, i] = this.pageDimensions, r = Math.round(this.width * s * Pn.PDF_TO_CSS_UNITS), a = Math.round(this.height * i * Pn.PDF_TO_CSS_UNITS), o = new OffscreenCanvas(r, a);
    return o.getContext("2d").drawImage(n(this, Ot), 0, 0, n(this, Ot).width, n(this, Ot).height, 0, 0, r, a), o.transferToImageBitmap();
  }
  return structuredClone(n(this, Ot));
}, py = function(e) {
  var o;
  const {
    pageIndex: s,
    accessibilityData: {
      altText: i
    }
  } = this._initialData, r = e.pageIndex === s, a = (((o = e.accessibilityData) == null ? void 0 : o.alt) || "") === i;
  return {
    isSame: !this.hasEditedComment && !this._hasBeenMoved && !this._hasBeenResized && r && a,
    isSameAltText: a
  };
}, N(Dp, "_type", "stamp"), N(Dp, "_editorType", Z.STAMP);
var Ka, Gl, Er, _r, Sn, ts, Cr, Wl, jl, ti, xn, pe, En, Tr, Vl, V, Pr, Ct, Ip, gy, ci, Fp, Np, uu;
const Gs = class Gs {
  constructor({
    uiManager: t,
    pageIndex: e,
    div: s,
    structTreeLayer: i,
    accessibilityManager: r,
    annotationLayer: a,
    drawLayer: o,
    textLayer: l,
    viewport: h,
    l10n: d
  }) {
    y(this, Ct);
    y(this, Ka);
    y(this, Gl, !1);
    y(this, Er, null);
    y(this, _r, null);
    y(this, Sn, null);
    y(this, ts, /* @__PURE__ */ new Map());
    y(this, Cr, !1);
    y(this, Wl, !1);
    y(this, jl, !1);
    y(this, ti, null);
    y(this, xn, null);
    y(this, pe, null);
    y(this, En, null);
    y(this, Tr, null);
    y(this, Vl, -1);
    y(this, V);
    const u = [...n(Gs, Pr).values()];
    if (!Gs._initialized) {
      Gs._initialized = !0;
      for (const p of u)
        p.initialize(d, t);
    }
    t.registerEditorTypes(u), g(this, V, t), this.pageIndex = e, this.div = s, g(this, Ka, r), g(this, Er, a), this.viewport = h, g(this, pe, l), this.drawLayer = o, this._structTree = i, n(this, V).addLayer(this);
  }
  get isEmpty() {
    return n(this, ts).size === 0;
  }
  get isInvisible() {
    return this.isEmpty && n(this, V).getMode() === Z.NONE;
  }
  updateToolbar(t) {
    n(this, V).updateToolbar(t);
  }
  updateMode(t = n(this, V).getMode()) {
    switch (w(this, Ct, uu).call(this), t) {
      case Z.NONE:
        this.div.classList.toggle("nonEditing", !0), this.disableTextSelection(), this.togglePointerEvents(!1), this.toggleAnnotationLayerPointerEvents(!0), this.disableClick();
        return;
      case Z.INK:
        this.disableTextSelection(), this.togglePointerEvents(!0), this.enableClick();
        break;
      case Z.HIGHLIGHT:
        this.enableTextSelection(), this.togglePointerEvents(!1), this.disableClick();
        break;
      default:
        this.disableTextSelection(), this.togglePointerEvents(!0), this.enableClick();
    }
    this.toggleAnnotationLayerPointerEvents(!1);
    const {
      classList: e
    } = this.div;
    if (e.toggle("nonEditing", !1), t === Z.POPUP)
      e.toggle("commentEditing", !0);
    else {
      e.toggle("commentEditing", !1);
      for (const s of n(Gs, Pr).values())
        e.toggle(`${s._type}Editing`, t === s._editorType);
    }
    this.div.hidden = !1;
  }
  hasTextLayer(t) {
    var e;
    return t === ((e = n(this, pe)) == null ? void 0 : e.div);
  }
  setEditingState(t) {
    n(this, V).setEditingState(t);
  }
  addCommands(t) {
    n(this, V).addCommands(t);
  }
  cleanUndoStack(t) {
    n(this, V).cleanUndoStack(t);
  }
  toggleDrawing(t = !1) {
    this.div.classList.toggle("drawing", !t);
  }
  togglePointerEvents(t = !1) {
    this.div.classList.toggle("disabled", !t);
  }
  toggleAnnotationLayerPointerEvents(t = !1) {
    var e;
    (e = n(this, Er)) == null || e.div.classList.toggle("disabled", !t);
  }
  async enable() {
    var s;
    g(this, jl, !0), this.div.tabIndex = 0, this.togglePointerEvents(!0), this.div.classList.toggle("nonEditing", !1), (s = n(this, Tr)) == null || s.abort(), g(this, Tr, null);
    const t = /* @__PURE__ */ new Set();
    for (const i of n(this, Ct, Ip))
      i.enableEditing(), i.show(!0), i.annotationElementId && (n(this, V).removeChangedExistingAnnotation(i), t.add(i.annotationElementId));
    const e = n(this, Er);
    if (e)
      for (const i of e.getEditableAnnotations()) {
        if (i.hide(), n(this, V).isDeletedAnnotationElement(i.data.id) || t.has(i.data.id))
          continue;
        const r = await this.deserialize(i);
        r && (this.addOrRebuild(r), r.enableEditing());
      }
    g(this, jl, !1), n(this, V)._eventBus.dispatch("editorsrendered", {
      source: this,
      pageNumber: this.pageIndex + 1
    });
  }
  disable() {
    var s;
    if (g(this, Wl, !0), this.div.tabIndex = -1, this.togglePointerEvents(!1), this.div.classList.toggle("nonEditing", !0), n(this, pe) && !n(this, Tr)) {
      g(this, Tr, new AbortController());
      const i = n(this, V).combinedSignal(n(this, Tr));
      n(this, pe).div.addEventListener("pointerdown", (r) => {
        const {
          clientX: o,
          clientY: l,
          timeStamp: h
        } = r, d = n(this, Vl);
        if (h - d > 500) {
          g(this, Vl, h);
          return;
        }
        g(this, Vl, -1);
        const {
          classList: u
        } = this.div;
        u.toggle("getElements", !0);
        const p = document.elementsFromPoint(o, l);
        if (u.toggle("getElements", !1), !this.div.contains(p[0]))
          return;
        let b;
        const S = new RegExp(`^${Ch}[0-9]+$`);
        for (const E of p)
          if (S.test(E.id)) {
            b = E.id;
            break;
          }
        if (!b)
          return;
        const v = n(this, ts).get(b);
        (v == null ? void 0 : v.annotationElementId) === null && (r.stopPropagation(), r.preventDefault(), v.dblclick(r));
      }, {
        signal: i,
        capture: !0
      });
    }
    const t = n(this, Er);
    if (t) {
      const i = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
      for (const o of n(this, Ct, Ip)) {
        if (o.disableEditing(), !o.annotationElementId) {
          o.updateFakeAnnotationElement(t);
          continue;
        }
        if (o.serialize() !== null) {
          i.set(o.annotationElementId, o);
          continue;
        } else
          r.set(o.annotationElementId, o);
        (s = this.getEditableAnnotation(o.annotationElementId)) == null || s.show(), o.remove();
      }
      const a = t.getEditableAnnotations();
      for (const o of a) {
        const {
          id: l
        } = o.data;
        if (n(this, V).isDeletedAnnotationElement(l)) {
          o.updateEdited({
            deleted: !0
          });
          continue;
        }
        let h = r.get(l);
        if (h) {
          h.resetAnnotationElement(o), h.show(!1), o.show();
          continue;
        }
        h = i.get(l), h && (n(this, V).addChangedExistingAnnotation(h), h.renderAnnotationElement(o) && h.show(!1)), o.show();
      }
    }
    w(this, Ct, uu).call(this), this.isEmpty && (this.div.hidden = !0);
    const {
      classList: e
    } = this.div;
    for (const i of n(Gs, Pr).values())
      e.remove(`${i._type}Editing`);
    this.disableTextSelection(), this.toggleAnnotationLayerPointerEvents(!0), g(this, Wl, !1);
  }
  getEditableAnnotation(t) {
    var e;
    return ((e = n(this, Er)) == null ? void 0 : e.getEditableAnnotation(t)) || null;
  }
  setActiveEditor(t) {
    n(this, V).getActive() !== t && n(this, V).setActiveEditor(t);
  }
  enableTextSelection() {
    var t;
    if (this.div.tabIndex = -1, (t = n(this, pe)) != null && t.div && !n(this, En)) {
      g(this, En, new AbortController());
      const e = n(this, V).combinedSignal(n(this, En));
      n(this, pe).div.addEventListener("pointerdown", w(this, Ct, gy).bind(this), {
        signal: e
      }), n(this, pe).div.classList.add("highlighting");
    }
  }
  disableTextSelection() {
    var t;
    this.div.tabIndex = 0, (t = n(this, pe)) != null && t.div && n(this, En) && (n(this, En).abort(), g(this, En, null), n(this, pe).div.classList.remove("highlighting"));
  }
  enableClick() {
    if (n(this, _r))
      return;
    g(this, _r, new AbortController());
    const t = n(this, V).combinedSignal(n(this, _r));
    this.div.addEventListener("pointerdown", this.pointerdown.bind(this), {
      signal: t
    });
    const e = this.pointerup.bind(this);
    this.div.addEventListener("pointerup", e, {
      signal: t
    }), this.div.addEventListener("pointercancel", e, {
      signal: t
    });
  }
  disableClick() {
    var t;
    (t = n(this, _r)) == null || t.abort(), g(this, _r, null);
  }
  attach(t) {
    n(this, ts).set(t.id, t);
    const {
      annotationElementId: e
    } = t;
    e && n(this, V).isDeletedAnnotationElement(e) && n(this, V).removeDeletedAnnotationElement(t);
  }
  detach(t) {
    var e;
    n(this, ts).delete(t.id), (e = n(this, Ka)) == null || e.removePointerInTextLayer(t.contentDiv), !n(this, Wl) && t.annotationElementId && n(this, V).addDeletedAnnotationElement(t);
  }
  remove(t) {
    this.detach(t), n(this, V).removeEditor(t), t.div.remove(), t.isAttachedToDOM = !1;
  }
  changeParent(t) {
    var e;
    t.parent !== this && (t.parent && t.annotationElementId && (n(this, V).addDeletedAnnotationElement(t.annotationElementId), kt.deleteAnnotationElement(t), t.annotationElementId = null), this.attach(t), (e = t.parent) == null || e.detach(t), t.setParent(this), t.div && t.isAttachedToDOM && (t.div.remove(), this.div.append(t.div)));
  }
  add(t) {
    if (!(t.parent === this && t.isAttachedToDOM)) {
      if (this.changeParent(t), n(this, V).addEditor(t), this.attach(t), !t.isAttachedToDOM) {
        const e = t.render();
        this.div.append(e), t.isAttachedToDOM = !0;
      }
      t.fixAndSetPosition(), t.onceAdded(!n(this, jl)), n(this, V).addToAnnotationStorage(t), t._reportTelemetry(t.telemetryInitialData);
    }
  }
  moveEditorInDOM(t) {
    var s;
    if (!t.isAttachedToDOM)
      return;
    const {
      activeElement: e
    } = document;
    t.div.contains(e) && !n(this, Sn) && (t._focusEventsAllowed = !1, g(this, Sn, setTimeout(() => {
      g(this, Sn, null), t.div.contains(document.activeElement) ? t._focusEventsAllowed = !0 : (t.div.addEventListener("focusin", () => {
        t._focusEventsAllowed = !0;
      }, {
        once: !0,
        signal: n(this, V)._signal
      }), e.focus());
    }, 0))), t._structTreeParentId = (s = n(this, Ka)) == null ? void 0 : s.moveElementInDOM(this.div, t.div, t.contentDiv, !0);
  }
  addOrRebuild(t) {
    t.needsToBeRebuilt() ? (t.parent || (t.parent = this), t.rebuild(), t.show()) : this.add(t);
  }
  addUndoableEditor(t) {
    const e = () => t._uiManager.rebuild(t), s = () => {
      t.remove();
    };
    this.addCommands({
      cmd: e,
      undo: s,
      mustExec: !1
    });
  }
  getEditorByUID(t) {
    for (const e of n(this, ts).values())
      if (e.uid === t)
        return e;
    return null;
  }
  getNextId() {
    return n(this, V).getId();
  }
  combinedSignal(t) {
    return n(this, V).combinedSignal(t);
  }
  canCreateNewEmptyEditor() {
    var t;
    return (t = n(this, Ct, ci)) == null ? void 0 : t.canCreateNewEmptyEditor();
  }
  async pasteEditor(t, e) {
    this.updateToolbar(t), await n(this, V).updateMode(t.mode);
    const {
      offsetX: s,
      offsetY: i
    } = w(this, Ct, Np).call(this), r = this.getNextId(), a = w(this, Ct, Fp).call(this, {
      parent: this,
      id: r,
      x: s,
      y: i,
      uiManager: n(this, V),
      isCentered: !0,
      ...e
    });
    a && this.add(a);
  }
  async deserialize(t) {
    var e;
    return await ((e = n(Gs, Pr).get(t.annotationType ?? t.annotationEditorType)) == null ? void 0 : e.deserialize(t, this, n(this, V))) || null;
  }
  createAndAddNewEditor(t, e, s = {}) {
    const i = this.getNextId(), r = w(this, Ct, Fp).call(this, {
      parent: this,
      id: i,
      x: t.offsetX,
      y: t.offsetY,
      uiManager: n(this, V),
      isCentered: e,
      ...s
    });
    return r && this.add(r), r;
  }
  get boundingClientRect() {
    return this.div.getBoundingClientRect();
  }
  addNewEditor(t = {}) {
    this.createAndAddNewEditor(w(this, Ct, Np).call(this), !0, t);
  }
  setSelected(t) {
    n(this, V).setSelected(t);
  }
  toggleSelected(t) {
    n(this, V).toggleSelected(t);
  }
  unselect(t) {
    n(this, V).unselect(t);
  }
  pointerup(t) {
    var i;
    const {
      isMac: e
    } = ge.platform;
    if (t.button !== 0 || t.ctrlKey && e || t.target !== this.div || !n(this, Cr) || (g(this, Cr, !1), (i = n(this, Ct, ci)) != null && i.isDrawer && n(this, Ct, ci).supportMultipleDrawings))
      return;
    if (!n(this, Gl)) {
      g(this, Gl, !0);
      return;
    }
    const s = n(this, V).getMode();
    if (s === Z.STAMP || s === Z.SIGNATURE) {
      n(this, V).unselectAll();
      return;
    }
    this.createAndAddNewEditor(t, !1);
  }
  pointerdown(t) {
    var i;
    if (n(this, V).getMode() === Z.HIGHLIGHT && this.enableTextSelection(), n(this, Cr)) {
      g(this, Cr, !1);
      return;
    }
    const {
      isMac: e
    } = ge.platform;
    if (t.button !== 0 || t.ctrlKey && e || t.target !== this.div)
      return;
    if (g(this, Cr, !0), (i = n(this, Ct, ci)) != null && i.isDrawer) {
      this.startDrawingSession(t);
      return;
    }
    const s = n(this, V).getActive();
    g(this, Gl, !s || s.isEmpty());
  }
  startDrawingSession(t) {
    if (this.div.focus({
      preventScroll: !0
    }), n(this, ti)) {
      n(this, Ct, ci).startDrawing(this, n(this, V), !1, t);
      return;
    }
    n(this, V).setCurrentDrawingSession(this), g(this, ti, new AbortController());
    const e = n(this, V).combinedSignal(n(this, ti));
    this.div.addEventListener("blur", ({
      relatedTarget: s
    }) => {
      s && !this.div.contains(s) && (g(this, xn, null), this.commitOrRemove());
    }, {
      signal: e
    }), n(this, Ct, ci).startDrawing(this, n(this, V), !1, t);
  }
  pause(t) {
    if (t) {
      const {
        activeElement: e
      } = document;
      this.div.contains(e) && g(this, xn, e);
      return;
    }
    n(this, xn) && setTimeout(() => {
      var e;
      (e = n(this, xn)) == null || e.focus(), g(this, xn, null);
    }, 0);
  }
  endDrawingSession(t = !1) {
    return n(this, ti) ? (n(this, V).setCurrentDrawingSession(null), n(this, ti).abort(), g(this, ti, null), g(this, xn, null), n(this, Ct, ci).endDrawing(t)) : null;
  }
  findNewParent(t, e, s) {
    const i = n(this, V).findParent(e, s);
    return i === null || i === this ? !1 : (i.changeParent(t), !0);
  }
  commitOrRemove() {
    return n(this, ti) ? (this.endDrawingSession(), !0) : !1;
  }
  onScaleChanging() {
    n(this, ti) && n(this, Ct, ci).onScaleChangingWhenDrawing(this);
  }
  destroy() {
    var t, e;
    this.commitOrRemove(), ((t = n(this, V).getActive()) == null ? void 0 : t.parent) === this && (n(this, V).commitOrRemove(), n(this, V).setActiveEditor(null)), n(this, Sn) && (clearTimeout(n(this, Sn)), g(this, Sn, null));
    for (const s of n(this, ts).values())
      (e = n(this, Ka)) == null || e.removePointerInTextLayer(s.contentDiv), s.setParent(null), s.isAttachedToDOM = !1, s.div.remove();
    this.div = null, n(this, ts).clear(), n(this, V).removeLayer(this);
  }
  render({
    viewport: t
  }) {
    this.viewport = t, Rr(this.div, t);
    for (const e of n(this, V).getEditors(this.pageIndex))
      this.add(e), e.rebuild();
    this.updateMode();
  }
  update({
    viewport: t
  }) {
    n(this, V).commitOrRemove(), w(this, Ct, uu).call(this);
    const e = this.viewport.rotation, s = t.rotation;
    if (this.viewport = t, Rr(this.div, {
      rotation: s
    }), e !== s)
      for (const i of n(this, ts).values())
        i.rotate(s);
  }
  get pageDimensions() {
    const {
      pageWidth: t,
      pageHeight: e
    } = this.viewport.rawDims;
    return [t, e];
  }
  get scale() {
    return n(this, V).viewParameters.realScale;
  }
};
Ka = new WeakMap(), Gl = new WeakMap(), Er = new WeakMap(), _r = new WeakMap(), Sn = new WeakMap(), ts = new WeakMap(), Cr = new WeakMap(), Wl = new WeakMap(), jl = new WeakMap(), ti = new WeakMap(), xn = new WeakMap(), pe = new WeakMap(), En = new WeakMap(), Tr = new WeakMap(), Vl = new WeakMap(), V = new WeakMap(), Pr = new WeakMap(), Ct = new WeakSet(), Ip = function() {
  return n(this, ts).size !== 0 ? n(this, ts).values() : n(this, V).getEditors(this.pageIndex);
}, gy = function(t) {
  n(this, V).unselectAll();
  const {
    target: e
  } = t;
  if (e === n(this, pe).div || (e.getAttribute("role") === "img" || e.classList.contains("endOfContent")) && n(this, pe).div.contains(e)) {
    const {
      isMac: s
    } = ge.platform;
    if (t.button !== 0 || t.ctrlKey && s)
      return;
    n(this, V).showAllEditors("highlight", !0, !0), n(this, pe).div.classList.add("free"), this.toggleDrawing(), vu.startHighlighting(this, n(this, V).direction === "ltr", {
      target: n(this, pe).div,
      x: t.x,
      y: t.y
    }), n(this, pe).div.addEventListener("pointerup", () => {
      n(this, pe).div.classList.remove("free"), this.toggleDrawing(!0);
    }, {
      once: !0,
      signal: n(this, V)._signal
    }), t.preventDefault();
  }
}, ci = function() {
  return n(Gs, Pr).get(n(this, V).getMode());
}, Fp = function(t) {
  const e = n(this, Ct, ci);
  return e ? new e.prototype.constructor(t) : null;
}, Np = function() {
  const {
    x: t,
    y: e,
    width: s,
    height: i
  } = this.boundingClientRect, r = Math.max(0, t), a = Math.max(0, e), o = Math.min(window.innerWidth, t + s), l = Math.min(window.innerHeight, e + i), h = (r + o) / 2 - t, d = (a + l) / 2 - e, [u, p] = this.viewport.rotation % 180 === 0 ? [h, d] : [d, h];
  return {
    offsetX: u,
    offsetY: p
  };
}, uu = function() {
  for (const t of n(this, ts).values())
    t.isEmpty() && t.remove();
}, N(Gs, "_initialized", !1), y(Gs, Pr, new Map([gp, _p, Dp, vu, Lp].map((t) => [t._editorType, t])));
let xu = Gs;
var ei, He, Za, fd, Gu, my, Oi, Op, by, Bp;
const ne = class ne {
  constructor({
    pageIndex: t
  }) {
    y(this, Oi);
    y(this, ei, null);
    y(this, He, /* @__PURE__ */ new Map());
    y(this, Za, /* @__PURE__ */ new Map());
    this.pageIndex = t;
  }
  setParent(t) {
    if (!n(this, ei)) {
      g(this, ei, t);
      return;
    }
    if (n(this, ei) !== t) {
      if (n(this, He).size > 0)
        for (const e of n(this, He).values())
          e.remove(), t.append(e);
      g(this, ei, t);
    }
  }
  static get _svgFactory() {
    return et(this, "_svgFactory", new Mh());
  }
  draw(t, e = !1, s = !1) {
    const i = ie(ne, fd)._++, r = w(this, Oi, Op).call(this), a = ne._svgFactory.createElement("defs");
    r.append(a);
    const o = ne._svgFactory.createElement("path");
    a.append(o);
    const l = `path_p${this.pageIndex}_${i}`;
    o.setAttribute("id", l), o.setAttribute("vector-effect", "non-scaling-stroke"), e && n(this, Za).set(i, o);
    const h = s ? w(this, Oi, by).call(this, a, l) : null, d = ne._svgFactory.createElement("use");
    return r.append(d), d.setAttribute("href", `#${l}`), this.updateProperties(r, t), n(this, He).set(i, r), {
      id: i,
      clipPathId: `url(#${h})`
    };
  }
  drawOutline(t, e) {
    const s = ie(ne, fd)._++, i = w(this, Oi, Op).call(this), r = ne._svgFactory.createElement("defs");
    i.append(r);
    const a = ne._svgFactory.createElement("path");
    r.append(a);
    const o = `path_p${this.pageIndex}_${s}`;
    a.setAttribute("id", o), a.setAttribute("vector-effect", "non-scaling-stroke");
    let l;
    if (e) {
      const u = ne._svgFactory.createElement("mask");
      r.append(u), l = `mask_p${this.pageIndex}_${s}`, u.setAttribute("id", l), u.setAttribute("maskUnits", "objectBoundingBox");
      const p = ne._svgFactory.createElement("rect");
      u.append(p), p.setAttribute("width", "1"), p.setAttribute("height", "1"), p.setAttribute("fill", "white");
      const b = ne._svgFactory.createElement("use");
      u.append(b), b.setAttribute("href", `#${o}`), b.setAttribute("stroke", "none"), b.setAttribute("fill", "black"), b.setAttribute("fill-rule", "nonzero"), b.classList.add("mask");
    }
    const h = ne._svgFactory.createElement("use");
    i.append(h), h.setAttribute("href", `#${o}`), l && h.setAttribute("mask", `url(#${l})`);
    const d = h.cloneNode();
    return i.append(d), h.classList.add("mainOutline"), d.classList.add("secondaryOutline"), this.updateProperties(i, t), n(this, He).set(s, i), s;
  }
  finalizeDraw(t, e) {
    n(this, Za).delete(t), this.updateProperties(t, e);
  }
  updateProperties(t, e) {
    var l;
    if (!e)
      return;
    const {
      root: s,
      bbox: i,
      rootClass: r,
      path: a
    } = e, o = typeof t == "number" ? n(this, He).get(t) : t;
    if (o) {
      if (s && w(this, Oi, Bp).call(this, o, s), i && w(l = ne, Gu, my).call(l, o, i), r) {
        const {
          classList: h
        } = o;
        for (const [d, u] of Object.entries(r))
          h.toggle(d, u);
      }
      if (a) {
        const d = o.firstChild.firstChild;
        w(this, Oi, Bp).call(this, d, a);
      }
    }
  }
  updateParent(t, e) {
    if (e === this)
      return;
    const s = n(this, He).get(t);
    s && (n(e, ei).append(s), n(this, He).delete(t), n(e, He).set(t, s));
  }
  remove(t) {
    n(this, Za).delete(t), n(this, ei) !== null && (n(this, He).get(t).remove(), n(this, He).delete(t));
  }
  destroy() {
    g(this, ei, null);
    for (const t of n(this, He).values())
      t.remove();
    n(this, He).clear(), n(this, Za).clear();
  }
};
ei = new WeakMap(), He = new WeakMap(), Za = new WeakMap(), fd = new WeakMap(), Gu = new WeakSet(), my = function(t, [e, s, i, r]) {
  const {
    style: a
  } = t;
  a.top = `${100 * s}%`, a.left = `${100 * e}%`, a.width = `${100 * i}%`, a.height = `${100 * r}%`;
}, Oi = new WeakSet(), Op = function() {
  const t = ne._svgFactory.create(1, 1, !0);
  return n(this, ei).append(t), t.setAttribute("aria-hidden", !0), t;
}, by = function(t, e) {
  const s = ne._svgFactory.createElement("clipPath");
  t.append(s);
  const i = `clip_${e}`;
  s.setAttribute("id", i), s.setAttribute("clipPathUnits", "objectBoundingBox");
  const r = ne._svgFactory.createElement("use");
  return s.append(r), r.setAttribute("href", `#${e}`), r.classList.add("clip"), i;
}, Bp = function(t, e) {
  for (const [s, i] of Object.entries(e))
    i === null ? t.removeAttribute(s) : t.setAttribute(s, i);
}, y(ne, Gu), y(ne, fd, 0);
let Eu = ne;
globalThis._pdfjsTestingUtils = {
  HighlightOutliner: bp
};
globalThis.pdfjsLib = {
  AbortException: Tn,
  AnnotationEditorLayer: xu,
  AnnotationEditorParamsType: at,
  AnnotationEditorType: Z,
  AnnotationEditorUIManager: kr,
  AnnotationLayer: eg,
  AnnotationMode: Ii,
  AnnotationType: Yt,
  applyOpacity: pm,
  build: yb,
  ColorPicker: Dh,
  createValidAbsoluteUrl: zp,
  CSSConstants: fm,
  DOMSVGFactory: Mh,
  DrawLayer: Eu,
  FeatureTest: ge,
  fetchData: Kl,
  findContrastColor: gm,
  getDocument: Zp,
  getFilenameFromUrl: cm,
  getPdfFilenameFromUrl: dm,
  getRGB: Zl,
  getUuid: Wp,
  getXfaPageViewport: um,
  GlobalWorkerOptions: si,
  ImageKind: _h,
  InvalidPDFException: fu,
  isDataScheme: bd,
  isPdfFile: qu,
  isValidExplicitDest: Xm,
  MathClamp: Me,
  noContextMenu: _s,
  normalizeUnicode: lm,
  OPS: ql,
  OutputScale: ri,
  PasswordResponses: am,
  PDFDataRangeTransport: Jp,
  PDFDateString: Rh,
  PDFWorker: Xl,
  PermissionFlag: rm,
  PixelsPerInch: Pn,
  RenderingCancelledException: Vu,
  renderRichText: qp,
  ResponseException: Th,
  setLayerDimensions: Rr,
  shadow: et,
  SignatureExtractor: Fi,
  stopEvent: Ut,
  SupportedImageMimeTypes: pu,
  TextLayer: Lh,
  TouchManager: kh,
  updateUrlHash: Gp,
  Util: W,
  VerbosityLevel: pd,
  version: bb,
  XfaLayer: Vp
};
const yy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AbortException: Tn,
  AnnotationEditorLayer: xu,
  AnnotationEditorParamsType: at,
  AnnotationEditorType: Z,
  AnnotationEditorUIManager: kr,
  AnnotationLayer: eg,
  AnnotationMode: Ii,
  AnnotationType: Yt,
  CSSConstants: fm,
  ColorPicker: Dh,
  DOMSVGFactory: Mh,
  DrawLayer: Eu,
  FeatureTest: ge,
  GlobalWorkerOptions: si,
  ImageKind: _h,
  InvalidPDFException: fu,
  MathClamp: Me,
  OPS: ql,
  OutputScale: ri,
  PDFDataRangeTransport: Jp,
  PDFDateString: Rh,
  PDFWorker: Xl,
  PasswordResponses: am,
  PermissionFlag: rm,
  PixelsPerInch: Pn,
  RenderingCancelledException: Vu,
  ResponseException: Th,
  SignatureExtractor: Fi,
  SupportedImageMimeTypes: pu,
  TextLayer: Lh,
  TouchManager: kh,
  Util: W,
  VerbosityLevel: pd,
  XfaLayer: Vp,
  applyOpacity: pm,
  build: yb,
  createValidAbsoluteUrl: zp,
  fetchData: Kl,
  findContrastColor: gm,
  getDocument: Zp,
  getFilenameFromUrl: cm,
  getPdfFilenameFromUrl: dm,
  getRGB: Zl,
  getUuid: Wp,
  getXfaPageViewport: um,
  isDataScheme: bd,
  isPdfFile: qu,
  isValidExplicitDest: Xm,
  noContextMenu: _s,
  normalizeUnicode: lm,
  renderRichText: qp,
  setLayerDimensions: Rr,
  shadow: et,
  stopEvent: Ut,
  updateUrlHash: Gp,
  version: bb
}, Symbol.toStringTag, { value: "Module" }));
function wy(c) {
  var t, e, s = "";
  if (typeof c == "string" || typeof c == "number") s += c;
  else if (typeof c == "object") if (Array.isArray(c)) {
    var i = c.length;
    for (t = 0; t < i; t++) c[t] && (e = wy(c[t])) && (s && (s += " "), s += e);
  } else for (e in c) c[e] && (s && (s += " "), s += e);
  return s;
}
function Ku() {
  for (var c, t, e = 0, s = "", i = arguments.length; e < i; e++) (c = arguments[e]) && (t = wy(c)) && (s && (s += " "), s += t);
  return s;
}
var Ug = Object.prototype.hasOwnProperty;
function zg(c, t, e) {
  for (e of c.keys())
    if (wo(e, t)) return e;
}
function wo(c, t) {
  var e, s, i;
  if (c === t) return !0;
  if (c && t && (e = c.constructor) === t.constructor) {
    if (e === Date) return c.getTime() === t.getTime();
    if (e === RegExp) return c.toString() === t.toString();
    if (e === Array) {
      if ((s = c.length) === t.length)
        for (; s-- && wo(c[s], t[s]); ) ;
      return s === -1;
    }
    if (e === Set) {
      if (c.size !== t.size)
        return !1;
      for (s of c)
        if (i = s, i && typeof i == "object" && (i = zg(t, i), !i) || !t.has(i)) return !1;
      return !0;
    }
    if (e === Map) {
      if (c.size !== t.size)
        return !1;
      for (s of c)
        if (i = s[0], i && typeof i == "object" && (i = zg(t, i), !i) || !wo(s[1], t.get(i)))
          return !1;
      return !0;
    }
    if (e === ArrayBuffer)
      c = new Uint8Array(c), t = new Uint8Array(t);
    else if (e === DataView) {
      if ((s = c.byteLength) === t.byteLength)
        for (; s-- && c.getInt8(s) === t.getInt8(s); ) ;
      return s === -1;
    }
    if (ArrayBuffer.isView(c)) {
      if ((s = c.byteLength) === t.byteLength)
        for (; s-- && c[s] === t[s]; ) ;
      return s === -1;
    }
    if (!e || typeof c == "object") {
      s = 0;
      for (e in c)
        if (Ug.call(c, e) && ++s && !Ug.call(t, e) || !(e in t) || !wo(c[e], t[e])) return !1;
      return Object.keys(t).length === s;
    }
  }
  return c !== c && t !== t;
}
function vd(c) {
  let t = !1;
  return {
    promise: new Promise((s, i) => {
      c.then((r) => !t && s(r)).catch((r) => !t && i(r));
    }),
    cancel() {
      t = !0;
    }
  };
}
const aA = ["onCopy", "onCut", "onPaste"], oA = [
  "onCompositionEnd",
  "onCompositionStart",
  "onCompositionUpdate"
], lA = ["onFocus", "onBlur"], hA = ["onInput", "onInvalid", "onReset", "onSubmit"], cA = ["onLoad", "onError"], dA = ["onKeyDown", "onKeyPress", "onKeyUp"], uA = [
  "onAbort",
  "onCanPlay",
  "onCanPlayThrough",
  "onDurationChange",
  "onEmptied",
  "onEncrypted",
  "onEnded",
  "onError",
  "onLoadedData",
  "onLoadedMetadata",
  "onLoadStart",
  "onPause",
  "onPlay",
  "onPlaying",
  "onProgress",
  "onRateChange",
  "onSeeked",
  "onSeeking",
  "onStalled",
  "onSuspend",
  "onTimeUpdate",
  "onVolumeChange",
  "onWaiting"
], fA = [
  "onClick",
  "onContextMenu",
  "onDoubleClick",
  "onMouseDown",
  "onMouseEnter",
  "onMouseLeave",
  "onMouseMove",
  "onMouseOut",
  "onMouseOver",
  "onMouseUp"
], pA = [
  "onDrag",
  "onDragEnd",
  "onDragEnter",
  "onDragExit",
  "onDragLeave",
  "onDragOver",
  "onDragStart",
  "onDrop"
], gA = ["onSelect"], mA = ["onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart"], bA = [
  "onPointerDown",
  "onPointerMove",
  "onPointerUp",
  "onPointerCancel",
  "onGotPointerCapture",
  "onLostPointerCapture",
  "onPointerEnter",
  "onPointerLeave",
  "onPointerOver",
  "onPointerOut"
], yA = ["onScroll"], wA = ["onWheel"], AA = [
  "onAnimationStart",
  "onAnimationEnd",
  "onAnimationIteration"
], vA = ["onTransitionEnd"], SA = ["onToggle"], xA = ["onChange"], EA = [
  ...aA,
  ...oA,
  ...lA,
  ...hA,
  ...cA,
  ...dA,
  ...uA,
  ...fA,
  ...pA,
  ...gA,
  ...mA,
  ...bA,
  ...yA,
  ...wA,
  ...AA,
  ...vA,
  ...xA,
  ...SA
];
function Ay(c, t) {
  const e = {};
  for (const s of EA) {
    const i = c[s];
    i && (t ? e[s] = ((r) => i(r, t(s))) : e[s] = i);
  }
  return e;
}
var _A = process.env.NODE_ENV === "production", df = "Invariant failed";
function _t(c, t) {
  if (!c) {
    if (_A)
      throw new Error(df);
    var e = typeof t == "function" ? t() : t, s = e ? "".concat(df, ": ").concat(e) : df;
    throw new Error(s);
  }
}
function CA(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var uf, Gg;
function TA() {
  if (Gg) return uf;
  Gg = 1;
  var c = process.env.NODE_ENV !== "production", t = function() {
  };
  if (c) {
    var e = function(i, r) {
      var a = arguments.length;
      r = new Array(a > 1 ? a - 1 : 0);
      for (var o = 1; o < a; o++)
        r[o - 1] = arguments[o];
      var l = 0, h = "Warning: " + i.replace(/%s/g, function() {
        return r[l++];
      });
      typeof console < "u" && console.error(h);
      try {
        throw new Error(h);
      } catch {
      }
    };
    t = function(s, i, r) {
      var a = arguments.length;
      r = new Array(a > 2 ? a - 2 : 0);
      for (var o = 2; o < a; o++)
        r[o - 2] = arguments[o];
      if (i === void 0)
        throw new Error(
          "`warning(condition, format, ...args)` requires a warning message argument"
        );
      s || e.apply(null, [i].concat(r));
    };
  }
  return uf = t, uf;
}
var PA = TA();
const Ie = /* @__PURE__ */ CA(PA), vy = Qg(null), RA = "noopener noreferrer nofollow";
class kA {
  constructor() {
    this.externalLinkEnabled = !0, this.externalLinkRel = void 0, this.externalLinkTarget = void 0, this.isInPresentationMode = !1, this.pdfDocument = void 0, this.pdfViewer = void 0;
  }
  setDocument(t) {
    this.pdfDocument = t;
  }
  setViewer(t) {
    this.pdfViewer = t;
  }
  setExternalLinkRel(t) {
    this.externalLinkRel = t;
  }
  setExternalLinkTarget(t) {
    this.externalLinkTarget = t;
  }
  setHash() {
  }
  setHistory() {
  }
  get pagesCount() {
    return this.pdfDocument ? this.pdfDocument.numPages : 0;
  }
  get page() {
    return _t(this.pdfViewer, "PDF viewer is not initialized."), this.pdfViewer.currentPageNumber || 0;
  }
  set page(t) {
    _t(this.pdfViewer, "PDF viewer is not initialized."), this.pdfViewer.currentPageNumber = t;
  }
  get rotation() {
    return 0;
  }
  set rotation(t) {
  }
  addLinkAttributes(t, e, s) {
    t.href = e, t.rel = this.externalLinkRel || RA, t.target = s ? "_blank" : this.externalLinkTarget || "";
  }
  goToDestination(t) {
    return new Promise((e) => {
      _t(this.pdfDocument, "PDF document not loaded."), _t(t, "Destination is not specified."), typeof t == "string" ? this.pdfDocument.getDestination(t).then(e) : Array.isArray(t) ? e(t) : t.then(e);
    }).then((e) => {
      _t(Array.isArray(e), `"${e}" is not a valid destination array.`);
      const s = e[0];
      new Promise((i) => {
        _t(this.pdfDocument, "PDF document not loaded."), s instanceof Object ? this.pdfDocument.getPageIndex(s).then((r) => {
          i(r);
        }).catch(() => {
          _t(!1, `"${s}" is not a valid page reference.`);
        }) : typeof s == "number" ? i(s) : _t(!1, `"${s}" is not a valid destination reference.`);
      }).then((i) => {
        const r = i + 1;
        _t(this.pdfViewer, "PDF viewer is not initialized."), _t(r >= 1 && r <= this.pagesCount, `"${r}" is not a valid page number.`), this.pdfViewer.scrollPageIntoView({
          dest: e,
          pageIndex: i,
          pageNumber: r
        });
      });
    });
  }
  goToPage(t) {
    const e = t - 1;
    _t(this.pdfViewer, "PDF viewer is not initialized."), _t(t >= 1 && t <= this.pagesCount, `"${t}" is not a valid page number.`), this.pdfViewer.scrollPageIntoView({
      pageIndex: e,
      pageNumber: t
    });
  }
  goToXY() {
  }
  cachePageRef() {
  }
  getDestinationHash() {
    return "#";
  }
  getAnchorUrl() {
    return "#";
  }
  executeNamedAction() {
  }
  executeSetOCGState() {
  }
  isPageVisible() {
    return !0;
  }
  isPageCached() {
    return !0;
  }
  navigateTo(t) {
    this.goToDestination(t);
  }
}
function Ao({ children: c, type: t }) {
  return M("div", { className: `react-pdf__message react-pdf__message--${t}`, children: c });
}
const $p = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2
};
function LA(c, t) {
  switch (t.type) {
    case "RESOLVE":
      return { value: t.value, error: void 0 };
    case "REJECT":
      return { value: !1, error: t.error };
    case "RESET":
      return { value: void 0, error: void 0 };
    default:
      return c;
  }
}
function Yl() {
  return jy(LA, { value: void 0, error: void 0 });
}
const Zu = typeof window < "u", Sy = Zu && window.location.protocol === "file:";
function DA(c) {
  return typeof c < "u";
}
function Mr(c) {
  return DA(c) && c !== null;
}
function MA(c) {
  return typeof c == "string";
}
function IA(c) {
  return c instanceof ArrayBuffer;
}
function FA(c) {
  return _t(Zu, "isBlob can only be used in a browser environment"), c instanceof Blob;
}
function Hp(c) {
  return MA(c) && /^data:/.test(c);
}
function Wg(c) {
  _t(Hp(c), "Invalid data URI.");
  const [t = "", e = ""] = c.split(",");
  return t.split(";").indexOf("base64") !== -1 ? atob(e) : unescape(e);
}
function NA() {
  return Zu && window.devicePixelRatio || 1;
}
const xy = "On Chromium based browsers, you can use --allow-file-access-from-files flag for debugging purposes.";
function jg() {
  Ie(!Sy, `Loading PDF as base64 strings/URLs may not work on protocols other than HTTP/HTTPS. ${xy}`);
}
function OA() {
  Ie(!Sy, `Loading PDF.js worker may not work on protocols other than HTTP/HTTPS. ${xy}`);
}
function Qa(c) {
  c != null && c.cancel && c.cancel();
}
function Up(c, t) {
  return Object.defineProperty(c, "width", {
    get() {
      return this.getViewport({ scale: t }).width;
    },
    configurable: !0
  }), Object.defineProperty(c, "height", {
    get() {
      return this.getViewport({ scale: t }).height;
    },
    configurable: !0
  }), Object.defineProperty(c, "originalWidth", {
    get() {
      return this.getViewport({ scale: 1 }).width;
    },
    configurable: !0
  }), Object.defineProperty(c, "originalHeight", {
    get() {
      return this.getViewport({ scale: 1 }).height;
    },
    configurable: !0
  }), c;
}
function Ey(c) {
  return c.name === "AbortException" || c.name === "RenderingCancelledException";
}
function BA(c) {
  return new Promise((t, e) => {
    const s = new FileReader();
    s.onload = () => {
      if (!s.result)
        return e(new Error("Error while reading a file."));
      t(s.result);
    }, s.onerror = (i) => {
      if (!i.target)
        return e(new Error("Error while reading a file."));
      const { error: r } = i.target;
      if (!r)
        return e(new Error("Error while reading a file."));
      switch (r.code) {
        case r.NOT_FOUND_ERR:
          return e(new Error("Error while reading a file: File not found."));
        case r.SECURITY_ERR:
          return e(new Error("Error while reading a file: Security error."));
        case r.ABORT_ERR:
          return e(new Error("Error while reading a file: Aborted."));
        default:
          return e(new Error("Error while reading a file."));
      }
    }, s.readAsArrayBuffer(c);
  });
}
const { PDFDataRangeTransport: $A } = yy, HA = (c, t) => {
  switch (t) {
    case $p.NEED_PASSWORD: {
      const e = prompt("Enter the password to open this PDF file.");
      c(e);
      break;
    }
    case $p.INCORRECT_PASSWORD: {
      const e = prompt("Invalid password. Please try again.");
      c(e);
      break;
    }
  }
};
function Vg(c) {
  return typeof c == "object" && c !== null && ("data" in c || "range" in c || "url" in c);
}
const UA = Jg(function({ children: t, className: e, error: s = "Failed to load PDF file.", externalLinkRel: i, externalLinkTarget: r, file: a, inputRef: o, imageResourcesPath: l, loading: h = "Loading PDF…", noData: d = "No PDF file specified.", onItemClick: u, onLoadError: p, onLoadProgress: b, onLoadSuccess: S, onPassword: v = HA, onSourceError: E, onSourceSuccess: x, options: T, renderMode: _, rotate: f, scale: m, ...A }, C) {
  const [P, R] = Yl(), { value: L, error: D } = P, [F, U] = Yl(), { value: O, error: X } = F, k = ze(new kA()), I = ze([]), B = ze(void 0), q = ze(void 0);
  a && a !== B.current && Vg(a) && (Ie(!wo(a, B.current), `File prop passed to <Document /> changed, but it's equal to previous one. This might result in unnecessary reloads. Consider memoizing the value passed to "file" prop.`), B.current = a), T && T !== q.current && (Ie(!wo(T, q.current), `Options prop passed to <Document /> changed, but it's equal to previous one. This might result in unnecessary reloads. Consider memoizing the value passed to "options" prop.`), q.current = T);
  const ot = ze({
    // Handling jumping to internal links target
    scrollPageIntoView: (It) => {
      const { dest: se, pageNumber: Bt, pageIndex: _e = Bt - 1 } = It;
      if (u) {
        u({ dest: se, pageIndex: _e, pageNumber: Bt });
        return;
      }
      const ss = I.current[_e];
      if (ss) {
        ss.scrollIntoView();
        return;
      }
      Ie(!1, `An internal link leading to page ${Bt} was clicked, but neither <Document> was provided with onItemClick nor it was able to find the page within itself. Either provide onItemClick to <Document> and handle navigating by yourself or ensure that all pages are rendered within <Document>.`);
    }
  });
  tm(C, () => ({
    linkService: k,
    pages: I,
    viewer: ot
  }), []);
  function Pt() {
    x && x();
  }
  function H() {
    D && (Ie(!1, D.toString()), E && E(D));
  }
  function K() {
    R({ type: "RESET" });
  }
  bt(K, [a, R]);
  const rt = Ni(async () => {
    if (!a)
      return null;
    if (typeof a == "string")
      return Hp(a) ? { data: Wg(a) } : (jg(), { url: a });
    if (a instanceof $A)
      return { range: a };
    if (IA(a))
      return { data: a };
    if (Zu && FA(a))
      return { data: await BA(a) };
    if (_t(typeof a == "object", "Invalid parameter in file, need either Uint8Array, string or a parameter object"), _t(Vg(a), "Invalid parameter object: need either .data, .range or .url"), "url" in a && typeof a.url == "string") {
      if (Hp(a.url)) {
        const { url: It, ...se } = a;
        return { data: Wg(It), ...se };
      }
      jg();
    }
    return a;
  }, [a]);
  bt(() => {
    const It = vd(rt());
    return It.promise.then((se) => {
      R({ type: "RESOLVE", value: se });
    }).catch((se) => {
      R({ type: "REJECT", error: se });
    }), () => {
      Qa(It);
    };
  }, [rt, R]), bt(() => {
    if (!(typeof L > "u")) {
      if (L === !1) {
        H();
        return;
      }
      Pt();
    }
  }, [L]);
  function ht() {
    O && (S && S(O), I.current = new Array(O.numPages), k.current.setDocument(O));
  }
  function Xt() {
    X && (Ie(!1, X.toString()), p && p(X));
  }
  bt(function() {
    U({ type: "RESET" });
  }, [U, L]), bt(function() {
    if (!L)
      return;
    const se = T ? { ...L, ...T } : L, Bt = Zp(se);
    b && (Bt.onProgress = b), v && (Bt.onPassword = v);
    const _e = Bt;
    return _e.promise.then((ss) => {
      _e.destroyed || U({ type: "RESOLVE", value: ss });
    }).catch((ss) => {
      _e.destroyed || U({ type: "REJECT", error: ss });
    }), () => {
      _e.destroy();
    };
  }, [T, U, L]), bt(() => {
    if (!(typeof O > "u")) {
      if (O === !1) {
        Xt();
        return;
      }
      ht();
    }
  }, [O]), bt(function() {
    k.current.setViewer(ot.current), k.current.setExternalLinkRel(i), k.current.setExternalLinkTarget(r);
  }, [i, r]);
  const ct = Ni((It, se) => {
    I.current[It] = se;
  }, []), je = Ni((It) => {
    delete I.current[It];
  }, []), oi = ni(() => ({
    imageResourcesPath: l,
    linkService: k.current,
    onItemClick: u,
    pdf: O,
    registerPage: ct,
    renderMode: _,
    rotate: f,
    scale: m,
    unregisterPage: je
  }), [l, u, O, ct, _, f, m, je]), Bi = ni(
    () => Ay(A, () => O),
    // biome-ignore lint/correctness/useExhaustiveDependencies: FIXME
    [A, O]
  );
  function Fe() {
    function It(Bt) {
      return !!(Bt != null && Bt.pdf);
    }
    if (!It(oi))
      throw new Error("pdf is undefined");
    const se = typeof t == "function" ? t(oi) : t;
    return M(vy.Provider, { value: oi, children: se });
  }
  function Lt() {
    return a ? O == null ? M(Ao, { type: "loading", children: typeof h == "function" ? h() : h }) : O === !1 ? M(Ao, { type: "error", children: typeof s == "function" ? s() : s }) : Fe() : M(Ao, { type: "no-data", children: typeof d == "function" ? d() : d });
  }
  return M("div", {
    className: Ku("react-pdf__Document", e),
    // Assertion is needed for React 18 compatibility
    ref: o,
    ...Bi,
    children: Lt()
  });
});
function ng() {
  return em(vy);
}
function _y() {
  for (var c = [], t = 0; t < arguments.length; t++)
    c[t] = arguments[t];
  var e = c.filter(Boolean);
  if (e.length <= 1) {
    var s = e[0];
    return s || null;
  }
  return function(r) {
    for (var a = 0, o = e; a < o.length; a++) {
      var l = o[a];
      typeof l == "function" ? l(r) : l && (l.current = r);
    }
  };
}
const Cy = Qg(null);
function Sd() {
  return em(Cy);
}
function zA() {
  const c = ng(), t = Sd();
  _t(t, "Unable to find Page context.");
  const e = { ...c, ...t }, { filterAnnotations: s, imageResourcesPath: i, linkService: r, onGetAnnotationsError: a, onGetAnnotationsSuccess: o, onRenderAnnotationLayerError: l, onRenderAnnotationLayerSuccess: h, page: d, pdf: u, renderForms: p, rotate: b, scale: S = 1 } = e;
  _t(u, "Attempted to load page annotations, but no document was specified. Wrap <Page /> in a <Document /> or pass explicit `pdf` prop."), _t(d, "Attempted to load page annotations, but no page was specified."), _t(r, "Attempted to load page annotations, but no linkService was specified.");
  const [v, E] = Yl(), { value: x, error: T } = v, _ = ze(null);
  Ie(Number.parseInt(window.getComputedStyle(document.body).getPropertyValue("--react-pdf-annotation-layer"), 10) === 1, "AnnotationLayer styles not found. Read more: https://github.com/wojtekmaj/react-pdf#support-for-annotations");
  function f() {
    x && o && o(x);
  }
  function m() {
    T && (Ie(!1, T.toString()), a && a(T));
  }
  bt(function() {
    E({ type: "RESET" });
  }, [E, d]), bt(function() {
    if (!d)
      return;
    const L = vd(d.getAnnotations()), D = L;
    return L.promise.then((F) => {
      E({ type: "RESOLVE", value: F });
    }).catch((F) => {
      E({ type: "REJECT", error: F });
    }), () => {
      Qa(D);
    };
  }, [E, d]), bt(() => {
    if (x !== void 0) {
      if (x === !1) {
        m();
        return;
      }
      f();
    }
  }, [x]);
  function A() {
    h && h();
  }
  function C(R) {
    Ie(!1, `${R}`), l && l(R);
  }
  const P = ni(() => d.getViewport({ scale: S, rotation: b }), [d, b, S]);
  return bt(function() {
    if (!u || !d || !r || !x)
      return;
    const { current: L } = _;
    if (!L)
      return;
    const D = P.clone({ dontFlip: !0 }), F = {
      accessibilityManager: null,
      // TODO: Implement this
      annotationCanvasMap: null,
      // TODO: Implement this
      annotationEditorUIManager: null,
      // TODO: Implement this
      annotationStorage: u.annotationStorage,
      commentManager: null,
      // TODO: Implement this
      div: L,
      l10n: null,
      // TODO: Implement this
      linkService: r,
      page: d,
      structTreeLayer: null,
      // TODO: Implement this
      viewport: D
    }, U = {
      annotations: s ? s({ annotations: x }) : x,
      annotationStorage: u.annotationStorage,
      div: L,
      imageResourcesPath: i,
      linkService: r,
      page: d,
      renderForms: p,
      viewport: D
    };
    L.innerHTML = "";
    try {
      new eg(F).render(U), A();
    } catch (O) {
      C(O);
    }
    return () => {
    };
  }, [
    x,
    s,
    i,
    r,
    d,
    u,
    p,
    P
  ]), M("div", { className: Ku("react-pdf__Page__annotations", "annotationLayer"), ref: _ });
}
const Ty = {
  // Document level structure types
  Document: null,
  // There's a "document" role, but it doesn't make sense here.
  DocumentFragment: null,
  // Grouping level structure types
  Part: "group",
  Sect: "group",
  // XXX: There's a "section" role, but it's abstract.
  Div: "group",
  Aside: "note",
  NonStruct: "none",
  // Block level structure types
  P: null,
  // H<n>,
  H: "heading",
  Title: null,
  FENote: "note",
  // Sub-block level structure type
  Sub: "group",
  // General inline level structure types
  Lbl: null,
  Span: null,
  Em: null,
  Strong: null,
  Link: "link",
  Annot: "note",
  Form: "form",
  // Ruby and Warichu structure types
  Ruby: null,
  RB: null,
  RT: null,
  RP: null,
  Warichu: null,
  WT: null,
  WP: null,
  // List standard structure types
  L: "list",
  LI: "listitem",
  LBody: null,
  // Table standard structure types
  Table: "table",
  TR: "row",
  TH: "columnheader",
  TD: "cell",
  THead: "columnheader",
  TBody: null,
  TFoot: null,
  // Standard structure type Caption
  Caption: null,
  // Standard structure type Figure
  Figure: "figure",
  // Standard structure type Formula
  Formula: null,
  // standard structure type Artifact
  Artifact: null
}, GA = /^H(\d+)$/;
function WA(c) {
  return c in Ty;
}
function Ju(c) {
  return "children" in c;
}
function Py(c) {
  return Ju(c) ? c.children.length === 1 && 0 in c.children && "id" in c.children[0] : !1;
}
function jA(c) {
  const t = {};
  if (Ju(c)) {
    const { role: e } = c, s = e.match(GA);
    if (s)
      t.role = "heading", t["aria-level"] = Number(s[1]);
    else if (WA(e)) {
      const i = Ty[e];
      i && (t.role = i);
    }
  }
  return t;
}
function Ry(c) {
  const t = {};
  if (Ju(c)) {
    if (c.alt !== void 0 && (t["aria-label"] = c.alt), c.lang !== void 0 && (t.lang = c.lang), Py(c)) {
      const [e] = c.children;
      if (e) {
        const s = Ry(e);
        return {
          ...t,
          ...s
        };
      }
    }
  } else "id" in c && (t["aria-owns"] = c.id);
  return t;
}
function VA(c) {
  return c ? {
    ...jA(c),
    ...Ry(c)
  } : null;
}
function ky({ className: c, node: t }) {
  const e = ni(() => VA(t), [t]), s = ni(() => !Ju(t) || Py(t) ? null : t.children.map((i, r) => (
    // biome-ignore lint/suspicious/noArrayIndexKey: index is stable here
    M(ky, { node: i }, r)
  )), [t]);
  return M("span", { className: c, ...e, children: s });
}
function qA() {
  const c = Sd();
  _t(c, "Unable to find Page context.");
  const { onGetStructTreeError: t, onGetStructTreeSuccess: e } = c, [s, i] = Yl(), { value: r, error: a } = s, { customTextRenderer: o, page: l } = c;
  function h() {
    r && e && e(r);
  }
  function d() {
    a && (Ie(!1, a.toString()), t && t(a));
  }
  return bt(function() {
    i({ type: "RESET" });
  }, [i, l]), bt(function() {
    if (o || !l)
      return;
    const p = vd(l.getStructTree()), b = p;
    return p.promise.then((S) => {
      i({ type: "RESOLVE", value: S });
    }).catch((S) => {
      i({ type: "REJECT", error: S });
    }), () => Qa(b);
  }, [o, l, i]), bt(() => {
    if (r !== void 0) {
      if (r === !1) {
        d();
        return;
      }
      h();
    }
  }, [r]), r ? M(ky, { className: "react-pdf__Page__structTree structTree", node: r }) : null;
}
const qg = Ii;
function XA(c) {
  const t = Sd();
  _t(t, "Unable to find Page context.");
  const e = { ...t, ...c }, { _className: s, canvasBackground: i, devicePixelRatio: r = NA(), onRenderError: a, onRenderSuccess: o, page: l, renderForms: h, renderTextLayer: d, pageColors: u, rotate: p, scale: b } = e, { canvasRef: S } = c;
  _t(l, "Attempted to render page canvas, but no page was specified.");
  const v = ze(null);
  function E() {
    l && o && o(Up(l, b));
  }
  function x(m) {
    Ey(m) || (Ie(!1, m.toString()), a && a(m));
  }
  const T = ni(() => l.getViewport({ scale: b * r, rotation: p }), [r, l, p, b]), _ = ni(() => l.getViewport({ scale: b, rotation: p }), [l, p, b]);
  bt(function() {
    if (!l)
      return;
    l.cleanup();
    const { current: A } = v;
    if (!A)
      return;
    A.width = T.width, A.height = T.height, A.style.width = `${Math.floor(_.width)}px`, A.style.height = `${Math.floor(_.height)}px`, A.style.visibility = "hidden";
    const C = {
      annotationMode: h ? qg.ENABLE_FORMS : qg.ENABLE,
      canvas: A,
      canvasContext: A.getContext("2d", { alpha: !1 }),
      pageColors: u,
      viewport: T
    };
    i && (C.background = i);
    const P = l.render(C), R = P;
    return P.promise.then(() => {
      A.style.visibility = "", E();
    }).catch(x), () => Qa(R);
  }, [i, l, u, h, T, _]);
  const f = Ni(() => {
    const { current: m } = v;
    m && (m.width = 0, m.height = 0);
  }, []);
  return bt(() => f, [f]), M("canvas", { className: `${s}__canvas`, dir: "ltr", ref: _y(S, v), style: {
    display: "block",
    userSelect: "none"
  }, children: d ? M(qA, {}) : null });
}
function YA(c) {
  return "str" in c;
}
const KA = /* @__PURE__ */ new Set([
  "base",
  "embed",
  "iframe",
  "link",
  "meta",
  "object",
  "script",
  "style",
  "template"
]), ZA = /* @__PURE__ */ new Set(["action", "formaction", "href", "poster", "src", "xlink:href"]);
function JA(c) {
  let t = "";
  for (const e of c) {
    const s = e.charCodeAt(0);
    s <= 32 || s === 127 || (t += e.toLowerCase());
  }
  return t.startsWith("javascript:") || t.startsWith("vbscript:");
}
function QA(c) {
  return c.nodeType === Node.ELEMENT_NODE;
}
function Ly(c) {
  return QA(c) && c instanceof HTMLElement;
}
function tv(c) {
  return Ly(c) && KA.has(c.tagName.toLowerCase());
}
function ev(c) {
  const t = document.createElement(c.tagName.toLowerCase());
  return Array.from(c.attributes).forEach((e) => {
    const s = e.name.toLowerCase();
    s.startsWith("on") || s === "srcdoc" || ZA.has(s) && JA(e.value) || t.setAttribute(e.name, e.value);
  }), Array.from(c.childNodes).forEach((e) => {
    t.append(Dy(e));
  }), t;
}
function Dy(c) {
  var t;
  return Ly(c) && !tv(c) ? ev(c) : document.createTextNode((t = c.textContent) !== null && t !== void 0 ? t : "");
}
function sv(c, t) {
  const e = document.createElement("template");
  e.innerHTML = t;
  const s = document.createDocumentFragment();
  Array.from(e.content.childNodes).forEach((i) => {
    s.append(Dy(i));
  }), c.replaceChildren(s);
}
function iv() {
  const c = Sd();
  _t(c, "Unable to find Page context.");
  const { customTextRenderer: t, onGetTextError: e, onGetTextSuccess: s, onRenderTextLayerError: i, onRenderTextLayerSuccess: r, page: a, pageIndex: o, pageNumber: l, rotate: h, scale: d } = c;
  _t(a, "Attempted to load page text content, but no page was specified.");
  const [u, p] = Yl(), { value: b, error: S } = u, v = ze(null);
  Ie(Number.parseInt(window.getComputedStyle(document.body).getPropertyValue("--react-pdf-text-layer"), 10) === 1, "TextLayer styles not found. Read more: https://github.com/wojtekmaj/react-pdf#support-for-text-layer");
  function E() {
    b && s && s(b);
  }
  function x() {
    S && (Ie(!1, S.toString()), e && e(S));
  }
  bt(function() {
    p({ type: "RESET" });
  }, [a, p]), bt(function() {
    if (!a)
      return;
    const P = vd(a.getTextContent()), R = P;
    return P.promise.then((L) => {
      p({ type: "RESOLVE", value: L });
    }).catch((L) => {
      p({ type: "REJECT", error: L });
    }), () => Qa(R);
  }, [a, p]), bt(() => {
    if (b !== void 0) {
      if (b === !1) {
        x();
        return;
      }
      E();
    }
  }, [b]);
  const T = Ni(() => {
    r && r();
  }, [r]), _ = Ni((C) => {
    Ey(C) || (Ie(!1, C.toString()), i && i(C));
  }, [i]);
  function f() {
    const C = v.current;
    C && C.classList.add("selecting");
  }
  function m() {
    const C = v.current;
    C && C.classList.remove("selecting");
  }
  const A = ni(() => a.getViewport({ scale: d, rotation: h }), [a, h, d]);
  return Vy(function() {
    if (!a || !b)
      return;
    const { current: P } = v;
    if (!P)
      return;
    P.innerHTML = "";
    const R = a.streamTextContent({ includeMarkedContent: !0 }), L = {
      container: P,
      textContentSource: R,
      viewport: A
    }, D = new Lh(L), F = D;
    return D.render().then(() => {
      const U = document.createElement("div");
      U.className = "endOfContent", P.append(U);
      const O = P.querySelectorAll('[role="presentation"]');
      if (t) {
        let X = 0;
        b.items.forEach((k, I) => {
          if (!YA(k))
            return;
          const B = O[X];
          if (!B)
            return;
          const q = t({
            pageIndex: o,
            pageNumber: l,
            itemIndex: I,
            ...k
          });
          sv(B, q), X += k.str && k.hasEOL ? 2 : 1;
        });
      }
      T();
    }).catch(_), () => Qa(F);
  }, [
    t,
    _,
    T,
    a,
    o,
    l,
    b,
    A
  ]), // biome-ignore lint/a11y/noStaticElementInteractions: False positive caused by non interactive wrapper listening for bubbling events
  M("div", { className: Ku("react-pdf__Page__textContent", "textLayer"), onMouseUp: m, onMouseDown: f, ref: v });
}
const Xg = 1;
function nv(c) {
  const e = { ...ng(), ...c }, { _className: s = "react-pdf__Page", _enableRegisterUnregisterPage: i = !0, canvasBackground: r, canvasRef: a, children: o, className: l, customRenderer: h, customTextRenderer: d, devicePixelRatio: u, error: p = "Failed to load the page.", filterAnnotations: b, height: S, inputRef: v, loading: E = "Loading page…", noData: x = "No page specified.", onGetAnnotationsError: T, onGetAnnotationsSuccess: _, onGetStructTreeError: f, onGetStructTreeSuccess: m, onGetTextError: A, onGetTextSuccess: C, onLoadError: P, onLoadSuccess: R, onRenderAnnotationLayerError: L, onRenderAnnotationLayerSuccess: D, onRenderError: F, onRenderSuccess: U, onRenderTextLayerError: O, onRenderTextLayerSuccess: X, pageColors: k, pageIndex: I, pageNumber: B, pdf: q, registerPage: ot, renderAnnotationLayer: Pt = !0, renderForms: H = !1, renderMode: K = "canvas", renderTextLayer: rt = !0, rotate: ht, scale: Xt = Xg, unregisterPage: ct, width: je, ...oi } = e, [Bi, Fe] = Yl(), { value: Lt, error: It } = Bi, se = ze(null);
  _t(q, "Attempted to load a page, but no document was specified. Wrap <Page /> in a <Document /> or pass explicit `pdf` prop.");
  const Bt = Mr(B) ? B - 1 : I ?? null, _e = B ?? (Mr(I) ? I + 1 : null), ss = ht ?? (Lt ? Lt.rotate : null), Us = ni(() => {
    if (!Lt)
      return null;
    let Ln = 1;
    const so = Xt ?? Xg;
    if (je || S) {
      const Dn = Lt.getViewport({ scale: 1, rotation: ss });
      je ? Ln = je / Dn.width : S && (Ln = S / Dn.height);
    }
    return so * Ln;
  }, [S, Lt, ss, Xt, je]);
  bt(function() {
    return () => {
      Mr(Bt) && i && ct && ct(Bt);
    };
  }, [i, q, Bt, ct]);
  function My() {
    if (R) {
      if (!Lt || !Us)
        return;
      R(Up(Lt, Us));
    }
    if (i && ot) {
      if (!Mr(Bt) || !se.current)
        return;
      ot(Bt, se.current);
    }
  }
  function Iy() {
    It && (Ie(!1, It.toString()), P && P(It));
  }
  bt(function() {
    Fe({ type: "RESET" });
  }, [Fe, q, Bt]), bt(function() {
    if (!q || !_e)
      return;
    const so = vd(q.getPage(_e)), Dn = so;
    return so.promise.then((tf) => {
      Fe({ type: "RESOLVE", value: tf });
    }).catch((tf) => {
      Fe({ type: "REJECT", error: tf });
    }), () => Qa(Dn);
  }, [Fe, q, _e]), bt(() => {
    if (Lt !== void 0) {
      if (Lt === !1) {
        Iy();
        return;
      }
      My();
    }
  }, [Lt, Us]);
  const Qu = ni(() => (
    // Technically there cannot be page without pageIndex, pageNumber, rotate and scale, but TypeScript doesn't know that
    Mr(Bt) && _e && Mr(ss) && Mr(Us) ? {
      _className: s,
      canvasBackground: r,
      customTextRenderer: d,
      devicePixelRatio: u,
      filterAnnotations: b,
      onGetAnnotationsError: T,
      onGetAnnotationsSuccess: _,
      onGetStructTreeError: f,
      onGetStructTreeSuccess: m,
      onGetTextError: A,
      onGetTextSuccess: C,
      onRenderAnnotationLayerError: L,
      onRenderAnnotationLayerSuccess: D,
      onRenderError: F,
      onRenderSuccess: U,
      onRenderTextLayerError: O,
      onRenderTextLayerSuccess: X,
      page: Lt,
      pageColors: k,
      pageIndex: Bt,
      pageNumber: _e,
      renderForms: H,
      renderTextLayer: rt,
      rotate: ss,
      scale: Us
    } : null
  ), [
    s,
    r,
    d,
    u,
    b,
    T,
    _,
    f,
    m,
    A,
    C,
    L,
    D,
    F,
    U,
    O,
    X,
    Lt,
    k,
    Bt,
    _e,
    H,
    rt,
    ss,
    Us
  ]), Fy = ni(
    () => Ay(oi, () => Lt && (Us ? Up(Lt, Us) : void 0)),
    // biome-ignore lint/correctness/useExhaustiveDependencies: FIXME
    [oi, Lt, Us]
  ), xd = `${Bt}@${Us}/${ss}`;
  function Ny() {
    switch (K) {
      case "custom":
        return _t(h, 'renderMode was set to "custom", but no customRenderer was passed.'), M(h, {}, `${xd}_custom`);
      case "none":
        return null;
      case "canvas":
      default:
        return M(XA, { canvasRef: a }, `${xd}_canvas`);
    }
  }
  function Oy() {
    return rt ? M(iv, {}, `${xd}_text`) : null;
  }
  function By() {
    return Pt ? M(zA, {}, `${xd}_annotations`) : null;
  }
  function $y() {
    function Ln(Dn) {
      return !!(Dn != null && Dn.page);
    }
    if (!Ln(Qu))
      throw new Error("page is undefined");
    const so = typeof o == "function" ? o(Qu) : o;
    return Jt(Cy.Provider, { value: Qu, children: [Ny(), Oy(), By(), so] });
  }
  function Hy() {
    return _e ? q === null || Lt === void 0 || Lt === null ? M(Ao, { type: "loading", children: typeof E == "function" ? E() : E }) : q === !1 || Lt === !1 ? M(Ao, { type: "error", children: typeof p == "function" ? p() : p }) : $y() : M(Ao, { type: "no-data", children: typeof x == "function" ? x() : x });
  }
  return M("div", {
    className: Ku(s, l),
    "data-page-number": _e,
    // Assertion is needed for React 18 compatibility
    ref: _y(v, se),
    style: {
      "--scale-round-x": "1px",
      "--scale-round-y": "1px",
      "--scale-factor": "1",
      "--user-unit": `${Us}`,
      "--total-scale-factor": "calc(var(--scale-factor) * var(--user-unit))",
      backgroundColor: r || "white",
      position: "relative",
      minWidth: "min-content",
      minHeight: "min-content"
    },
    ...Fy,
    children: Hy()
  });
}
OA();
si.workerSrc = "pdf.worker.mjs";
const rv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Document: UA,
  Page: nv,
  PasswordResponses: $p,
  pdfjs: yy,
  useDocumentContext: ng,
  usePageContext: Sd
}, Symbol.toStringTag, { value: "Module" }));
var Eh = { exports: {} }, av = Eh.exports, Yg;
function ov() {
  return Yg || (Yg = 1, (function(c, t) {
    (function(e, s) {
      s(t);
    })(av, (function(e) {
      class s {
        constructor(f, m) {
          this.state = { angle: 0, area: [], position: { x: 0, y: 0 }, hardAngle: 0, hardDrawingAngle: 0 }, this.createdDensity = m, this.nowDrawingDensity = this.createdDensity, this.render = f;
        }
        setDensity(f) {
          this.createdDensity = f, this.nowDrawingDensity = f;
        }
        setDrawingDensity(f) {
          this.nowDrawingDensity = f;
        }
        setPosition(f) {
          this.state.position = f;
        }
        setAngle(f) {
          this.state.angle = f;
        }
        setArea(f) {
          this.state.area = f;
        }
        setHardDrawingAngle(f) {
          this.state.hardDrawingAngle = f;
        }
        setHardAngle(f) {
          this.state.hardAngle = f, this.state.hardDrawingAngle = f;
        }
        setOrientation(f) {
          this.orientation = f;
        }
        getDrawingDensity() {
          return this.nowDrawingDensity;
        }
        getDensity() {
          return this.createdDensity;
        }
        getHardAngle() {
          return this.state.hardAngle;
        }
      }
      class i extends s {
        constructor(f, m, A) {
          super(f, A), this.image = null, this.isLoad = !1, this.loadingAngle = 0, this.image = new Image(), this.image.src = m;
        }
        draw(f) {
          const m = this.render.getContext(), A = this.render.convertToGlobal(this.state.position), C = this.render.getRect().pageWidth, P = this.render.getRect().height;
          m.save(), m.translate(A.x, A.y), m.beginPath();
          for (let R of this.state.area) R !== null && (R = this.render.convertToGlobal(R), m.lineTo(R.x - A.x, R.y - A.y));
          m.rotate(this.state.angle), m.clip(), this.isLoad ? m.drawImage(this.image, 0, 0, C, P) : this.drawLoader(m, { x: 0, y: 0 }, C, P), m.restore();
        }
        simpleDraw(f) {
          const m = this.render.getRect(), A = this.render.getContext(), C = m.pageWidth, P = m.height, R = f === 1 ? m.left + m.pageWidth : m.left, L = m.top;
          this.isLoad ? A.drawImage(this.image, R, L, C, P) : this.drawLoader(A, { x: R, y: L }, C, P);
        }
        drawLoader(f, m, A, C) {
          f.beginPath(), f.strokeStyle = "rgb(200, 200, 200)", f.fillStyle = "rgb(255, 255, 255)", f.lineWidth = 1, f.rect(m.x + 1, m.y + 1, A - 1, C - 1), f.stroke(), f.fill();
          const P = { x: m.x + A / 2, y: m.y + C / 2 };
          f.beginPath(), f.lineWidth = 10, f.arc(P.x, P.y, 20, this.loadingAngle, 3 * Math.PI / 2 + this.loadingAngle), f.stroke(), f.closePath(), this.loadingAngle += 0.07, this.loadingAngle >= 2 * Math.PI && (this.loadingAngle = 0);
        }
        load() {
          this.isLoad || (this.image.onload = () => {
            this.isLoad = !0;
          });
        }
        newTemporaryCopy() {
          return this;
        }
        getTemporaryCopy() {
          return this;
        }
        hideTemporaryCopy() {
        }
      }
      class r {
        constructor(f, m) {
          this.pages = [], this.currentPageIndex = 0, this.currentSpreadIndex = 0, this.landscapeSpread = [], this.portraitSpread = [], this.render = m, this.app = f, this.currentPageIndex = 0, this.isShowCover = this.app.getSettings().showCover;
        }
        destroy() {
          this.pages = [];
        }
        createSpread() {
          this.landscapeSpread = [], this.portraitSpread = [];
          for (let m = 0; m < this.pages.length; m++) this.portraitSpread.push([m]);
          let f = 0;
          this.isShowCover && (this.pages[0].setDensity("hard"), this.landscapeSpread.push([f]), f++);
          for (let m = f; m < this.pages.length; m += 2) m < this.pages.length - 1 ? this.landscapeSpread.push([m, m + 1]) : (this.landscapeSpread.push([m]), this.pages[m].setDensity("hard"));
        }
        getSpread() {
          return this.render.getOrientation() === "landscape" ? this.landscapeSpread : this.portraitSpread;
        }
        getSpreadIndexByPage(f) {
          const m = this.getSpread();
          for (let A = 0; A < m.length; A++) if (f === m[A][0] || f === m[A][1]) return A;
          return null;
        }
        getPageCount() {
          return this.pages.length;
        }
        getPages() {
          return this.pages;
        }
        getPage(f) {
          if (f >= 0 && f < this.pages.length) return this.pages[f];
          throw new Error("Invalid page number");
        }
        nextBy(f) {
          const m = this.pages.indexOf(f);
          return m < this.pages.length - 1 ? this.pages[m + 1] : null;
        }
        prevBy(f) {
          const m = this.pages.indexOf(f);
          return m > 0 ? this.pages[m - 1] : null;
        }
        getFlippingPage(f) {
          const m = this.currentSpreadIndex;
          if (this.render.getOrientation() === "portrait") return f === 0 ? this.pages[m].newTemporaryCopy() : this.pages[m - 1];
          {
            const A = f === 0 ? this.getSpread()[m + 1] : this.getSpread()[m - 1];
            return A.length === 1 || f === 0 ? this.pages[A[0]] : this.pages[A[1]];
          }
        }
        getBottomPage(f) {
          const m = this.currentSpreadIndex;
          if (this.render.getOrientation() === "portrait") return f === 0 ? this.pages[m + 1] : this.pages[m - 1];
          {
            const A = f === 0 ? this.getSpread()[m + 1] : this.getSpread()[m - 1];
            return A.length === 1 ? this.pages[A[0]] : f === 0 ? this.pages[A[1]] : this.pages[A[0]];
          }
        }
        showNext() {
          this.currentSpreadIndex < this.getSpread().length && (this.currentSpreadIndex++, this.showSpread());
        }
        showPrev() {
          this.currentSpreadIndex > 0 && (this.currentSpreadIndex--, this.showSpread());
        }
        getCurrentPageIndex() {
          return this.currentPageIndex;
        }
        show(f = null) {
          if (f === null && (f = this.currentPageIndex), f < 0 || f >= this.pages.length) return;
          const m = this.getSpreadIndexByPage(f);
          m !== null && (this.currentSpreadIndex = m, this.showSpread());
        }
        getCurrentSpreadIndex() {
          return this.currentSpreadIndex;
        }
        setCurrentSpreadIndex(f) {
          if (!(f >= 0 && f < this.getSpread().length)) throw new Error("Invalid page");
          this.currentSpreadIndex = f;
        }
        showSpread() {
          const f = this.getSpread()[this.currentSpreadIndex];
          f.length === 2 ? (this.render.setLeftPage(this.pages[f[0]]), this.render.setRightPage(this.pages[f[1]])) : this.render.getOrientation() === "landscape" && f[0] === this.pages.length - 1 ? (this.render.setLeftPage(this.pages[f[0]]), this.render.setRightPage(null)) : (this.render.setLeftPage(null), this.render.setRightPage(this.pages[f[0]])), this.currentPageIndex = f[0], this.app.updatePageIndex(this.currentPageIndex);
        }
      }
      class a extends r {
        constructor(f, m, A) {
          super(f, m), this.imagesHref = A;
        }
        load() {
          for (const f of this.imagesHref) {
            const m = new i(this.render, f, "soft");
            m.load(), this.pages.push(m);
          }
          this.createSpread();
        }
      }
      class o {
        static GetDistanceBetweenTwoPoint(f, m) {
          return f === null || m === null ? 1 / 0 : Math.sqrt(Math.pow(m.x - f.x, 2) + Math.pow(m.y - f.y, 2));
        }
        static GetSegmentLength(f) {
          return o.GetDistanceBetweenTwoPoint(f[0], f[1]);
        }
        static GetAngleBetweenTwoLine(f, m) {
          const A = f[0].y - f[1].y, C = m[0].y - m[1].y, P = f[1].x - f[0].x, R = m[1].x - m[0].x;
          return Math.acos((A * C + P * R) / (Math.sqrt(A * A + P * P) * Math.sqrt(C * C + R * R)));
        }
        static PointInRect(f, m) {
          return m === null ? null : m.x >= f.left && m.x <= f.width + f.left && m.y >= f.top && m.y <= f.top + f.height ? m : null;
        }
        static GetRotatedPoint(f, m, A) {
          return { x: f.x * Math.cos(A) + f.y * Math.sin(A) + m.x, y: f.y * Math.cos(A) - f.x * Math.sin(A) + m.y };
        }
        static LimitPointToCircle(f, m, A) {
          if (o.GetDistanceBetweenTwoPoint(f, A) <= m) return A;
          const C = f.x, P = f.y, R = A.x, L = A.y;
          let D = Math.sqrt(Math.pow(m, 2) * Math.pow(C - R, 2) / (Math.pow(C - R, 2) + Math.pow(P - L, 2))) + C;
          A.x < 0 && (D *= -1);
          let F = (D - C) * (P - L) / (C - R) + P;
          return C - R + P === 0 && (F = m), { x: D, y: F };
        }
        static GetIntersectBetweenTwoSegment(f, m, A) {
          return o.PointInRect(f, o.GetIntersectBeetwenTwoLine(m, A));
        }
        static GetIntersectBeetwenTwoLine(f, m) {
          const A = f[0].y - f[1].y, C = m[0].y - m[1].y, P = f[1].x - f[0].x, R = m[1].x - m[0].x, L = f[0].x * f[1].y - f[1].x * f[0].y, D = m[0].x * m[1].y - m[1].x * m[0].y, F = A * D - C * L, U = P * D - R * L, O = -(L * R - D * P) / (A * R - C * P), X = -(A * D - C * L) / (A * R - C * P);
          if (isFinite(O) && isFinite(X)) return { x: O, y: X };
          if (Math.abs(F - U) < 0.1) throw new Error("Segment included");
          return null;
        }
        static GetCordsFromTwoPoint(f, m) {
          const A = Math.abs(f.x - m.x), C = Math.abs(f.y - m.y), P = Math.max(A, C), R = [f];
          function L(D, F, U, O, X) {
            return F > D ? D + X * (U / O) : F < D ? D - X * (U / O) : D;
          }
          for (let D = 1; D <= P; D += 1) R.push({ x: L(f.x, m.x, A, P, D), y: L(f.y, m.y, C, P, D) });
          return R;
        }
      }
      class l extends s {
        constructor(f, m, A) {
          super(f, A), this.copiedElement = null, this.temporaryCopy = null, this.isLoad = !1, this.element = m, this.element.classList.add("stf__item"), this.element.classList.add("--" + A);
        }
        newTemporaryCopy() {
          return this.nowDrawingDensity === "hard" ? this : (this.temporaryCopy === null && (this.copiedElement = this.element.cloneNode(!0), this.element.parentElement.appendChild(this.copiedElement), this.temporaryCopy = new l(this.render, this.copiedElement, this.nowDrawingDensity)), this.getTemporaryCopy());
        }
        getTemporaryCopy() {
          return this.temporaryCopy;
        }
        hideTemporaryCopy() {
          this.temporaryCopy !== null && (this.copiedElement.remove(), this.copiedElement = null, this.temporaryCopy = null);
        }
        draw(f) {
          const m = f || this.nowDrawingDensity, A = this.render.convertToGlobal(this.state.position), C = this.render.getRect().pageWidth, P = this.render.getRect().height;
          this.element.classList.remove("--simple");
          const R = `
            display: block;
            z-index: ${this.element.style.zIndex};
            left: 0;
            top: 0;
            width: ${C}px;
            height: ${P}px;
        `;
          m === "hard" ? this.drawHard(R) : this.drawSoft(A, R);
        }
        drawHard(f = "") {
          const m = this.render.getRect().left + this.render.getRect().width / 2, A = this.state.hardDrawingAngle, C = f + `
                backface-visibility: hidden;
                -webkit-backface-visibility: hidden;
                clip-path: none;
                -webkit-clip-path: none;
            ` + (this.orientation === 0 ? `transform-origin: ${this.render.getRect().pageWidth}px 0; 
                   transform: translate3d(0, 0, 0) rotateY(${A}deg);` : `transform-origin: 0 0; 
                   transform: translate3d(${m}px, 0, 0) rotateY(${A}deg);`);
          this.element.style.cssText = C;
        }
        drawSoft(f, m = "") {
          let A = "polygon( ";
          for (const P of this.state.area) if (P !== null) {
            let R = this.render.getDirection() === 1 ? { x: -P.x + this.state.position.x, y: P.y - this.state.position.y } : { x: P.x - this.state.position.x, y: P.y - this.state.position.y };
            R = o.GetRotatedPoint(R, { x: 0, y: 0 }, this.state.angle), A += R.x + "px " + R.y + "px, ";
          }
          A = A.slice(0, -2), A += ")";
          const C = m + `transform-origin: 0 0; clip-path: ${A}; -webkit-clip-path: ${A};` + (this.render.isSafari() && this.state.angle === 0 ? `transform: translate(${f.x}px, ${f.y}px);` : `transform: translate3d(${f.x}px, ${f.y}px, 0) rotate(${this.state.angle}rad);`);
          this.element.style.cssText = C;
        }
        simpleDraw(f) {
          const m = this.render.getRect(), A = m.pageWidth, C = m.height, P = f === 1 ? m.left + m.pageWidth : m.left, R = m.top;
          this.element.classList.add("--simple"), this.element.style.cssText = `
            position: absolute; 
            display: block; 
            height: ${C}px; 
            left: ${P}px; 
            top: ${R}px; 
            width: ${A}px; 
            z-index: ${this.render.getSettings().startZIndex + 1};`;
        }
        getElement() {
          return this.element;
        }
        load() {
          this.isLoad = !0;
        }
        setOrientation(f) {
          super.setOrientation(f), this.element.classList.remove("--left", "--right"), this.element.classList.add(f === 1 ? "--right" : "--left");
        }
        setDrawingDensity(f) {
          this.element.classList.remove("--soft", "--hard"), this.element.classList.add("--" + f), super.setDrawingDensity(f);
        }
      }
      class h extends r {
        constructor(f, m, A, C) {
          super(f, m), this.element = A, this.pagesElement = C;
        }
        load() {
          for (const f of this.pagesElement) {
            const m = new l(this.render, f, f.dataset.density === "hard" ? "hard" : "soft");
            m.load(), this.pages.push(m);
          }
          this.createSpread();
        }
      }
      class d {
        constructor(f, m, A, C) {
          this.direction = f, this.corner = m, this.topIntersectPoint = null, this.sideIntersectPoint = null, this.bottomIntersectPoint = null, this.pageWidth = parseInt(A, 10), this.pageHeight = parseInt(C, 10);
        }
        calc(f) {
          try {
            return this.position = this.calcAngleAndPosition(f), this.calculateIntersectPoint(this.position), !0;
          } catch {
            return !1;
          }
        }
        getFlippingClipArea() {
          const f = [];
          let m = !1;
          return f.push(this.rect.topLeft), f.push(this.topIntersectPoint), this.sideIntersectPoint === null ? m = !0 : (f.push(this.sideIntersectPoint), this.bottomIntersectPoint === null && (m = !1)), f.push(this.bottomIntersectPoint), (m || this.corner === "bottom") && f.push(this.rect.bottomLeft), f;
        }
        getBottomClipArea() {
          const f = [];
          return f.push(this.topIntersectPoint), this.corner === "top" ? f.push({ x: this.pageWidth, y: 0 }) : (this.topIntersectPoint !== null && f.push({ x: this.pageWidth, y: 0 }), f.push({ x: this.pageWidth, y: this.pageHeight })), this.sideIntersectPoint !== null ? o.GetDistanceBetweenTwoPoint(this.sideIntersectPoint, this.topIntersectPoint) >= 10 && f.push(this.sideIntersectPoint) : this.corner === "top" && f.push({ x: this.pageWidth, y: this.pageHeight }), f.push(this.bottomIntersectPoint), f.push(this.topIntersectPoint), f;
        }
        getAngle() {
          return this.direction === 0 ? -this.angle : this.angle;
        }
        getRect() {
          return this.rect;
        }
        getPosition() {
          return this.position;
        }
        getActiveCorner() {
          return this.direction === 0 ? this.rect.topLeft : this.rect.topRight;
        }
        getDirection() {
          return this.direction;
        }
        getFlippingProgress() {
          return Math.abs((this.position.x - this.pageWidth) / (2 * this.pageWidth) * 100);
        }
        getCorner() {
          return this.corner;
        }
        getBottomPagePosition() {
          return this.direction === 1 ? { x: this.pageWidth, y: 0 } : { x: 0, y: 0 };
        }
        getShadowStartPoint() {
          return this.corner === "top" ? this.topIntersectPoint : this.sideIntersectPoint !== null ? this.sideIntersectPoint : this.topIntersectPoint;
        }
        getShadowAngle() {
          const f = o.GetAngleBetweenTwoLine(this.getSegmentToShadowLine(), [{ x: 0, y: 0 }, { x: this.pageWidth, y: 0 }]);
          return this.direction === 0 ? f : Math.PI - f;
        }
        calcAngleAndPosition(f) {
          let m = f;
          if (this.updateAngleAndGeometry(m), m = this.corner === "top" ? this.checkPositionAtCenterLine(m, { x: 0, y: 0 }, { x: 0, y: this.pageHeight }) : this.checkPositionAtCenterLine(m, { x: 0, y: this.pageHeight }, { x: 0, y: 0 }), Math.abs(m.x - this.pageWidth) < 1 && Math.abs(m.y) < 1) throw new Error("Point is too small");
          return m;
        }
        updateAngleAndGeometry(f) {
          this.angle = this.calculateAngle(f), this.rect = this.getPageRect(f);
        }
        calculateAngle(f) {
          const m = this.pageWidth - f.x + 1, A = this.corner === "bottom" ? this.pageHeight - f.y : f.y;
          let C = 2 * Math.acos(m / Math.sqrt(A * A + m * m));
          A < 0 && (C = -C);
          const P = Math.PI - C;
          if (!isFinite(C) || P >= 0 && P < 3e-3) throw new Error("The G point is too small");
          return this.corner === "bottom" && (C = -C), C;
        }
        getPageRect(f) {
          return this.corner === "top" ? this.getRectFromBasePoint([{ x: 0, y: 0 }, { x: this.pageWidth, y: 0 }, { x: 0, y: this.pageHeight }, { x: this.pageWidth, y: this.pageHeight }], f) : this.getRectFromBasePoint([{ x: 0, y: -this.pageHeight }, { x: this.pageWidth, y: -this.pageHeight }, { x: 0, y: 0 }, { x: this.pageWidth, y: 0 }], f);
        }
        getRectFromBasePoint(f, m) {
          return { topLeft: this.getRotatedPoint(f[0], m), topRight: this.getRotatedPoint(f[1], m), bottomLeft: this.getRotatedPoint(f[2], m), bottomRight: this.getRotatedPoint(f[3], m) };
        }
        getRotatedPoint(f, m) {
          return { x: f.x * Math.cos(this.angle) + f.y * Math.sin(this.angle) + m.x, y: f.y * Math.cos(this.angle) - f.x * Math.sin(this.angle) + m.y };
        }
        calculateIntersectPoint(f) {
          const m = { left: -1, top: -1, width: this.pageWidth + 2, height: this.pageHeight + 2 };
          this.corner === "top" ? (this.topIntersectPoint = o.GetIntersectBetweenTwoSegment(m, [f, this.rect.topRight], [{ x: 0, y: 0 }, { x: this.pageWidth, y: 0 }]), this.sideIntersectPoint = o.GetIntersectBetweenTwoSegment(m, [f, this.rect.bottomLeft], [{ x: this.pageWidth, y: 0 }, { x: this.pageWidth, y: this.pageHeight }]), this.bottomIntersectPoint = o.GetIntersectBetweenTwoSegment(m, [this.rect.bottomLeft, this.rect.bottomRight], [{ x: 0, y: this.pageHeight }, { x: this.pageWidth, y: this.pageHeight }])) : (this.topIntersectPoint = o.GetIntersectBetweenTwoSegment(m, [this.rect.topLeft, this.rect.topRight], [{ x: 0, y: 0 }, { x: this.pageWidth, y: 0 }]), this.sideIntersectPoint = o.GetIntersectBetweenTwoSegment(m, [f, this.rect.topLeft], [{ x: this.pageWidth, y: 0 }, { x: this.pageWidth, y: this.pageHeight }]), this.bottomIntersectPoint = o.GetIntersectBetweenTwoSegment(m, [this.rect.bottomLeft, this.rect.bottomRight], [{ x: 0, y: this.pageHeight }, { x: this.pageWidth, y: this.pageHeight }]));
        }
        checkPositionAtCenterLine(f, m, A) {
          let C = f;
          const P = o.LimitPointToCircle(m, this.pageWidth, C);
          C !== P && (C = P, this.updateAngleAndGeometry(C));
          const R = Math.sqrt(Math.pow(this.pageWidth, 2) + Math.pow(this.pageHeight, 2));
          let L = this.rect.bottomRight, D = this.rect.topLeft;
          if (this.corner === "bottom" && (L = this.rect.topRight, D = this.rect.bottomLeft), L.x <= 0) {
            const F = o.LimitPointToCircle(A, R, D);
            F !== C && (C = F, this.updateAngleAndGeometry(C));
          }
          return C;
        }
        getSegmentToShadowLine() {
          const f = this.getShadowStartPoint();
          return [f, f !== this.sideIntersectPoint && this.sideIntersectPoint !== null ? this.sideIntersectPoint : this.bottomIntersectPoint];
        }
      }
      class u {
        constructor(f, m) {
          this.flippingPage = null, this.bottomPage = null, this.calc = null, this.state = "read", this.render = f, this.app = m;
        }
        fold(f) {
          this.setState("user_fold"), this.calc === null && this.start(f), this.do(this.render.convertToPage(f));
        }
        flip(f) {
          if (this.app.getSettings().disableFlipByClick && !this.isPointOnCorners(f) || (this.calc !== null && this.render.finishAnimation(), !this.start(f))) return;
          const m = this.getBoundsRect();
          this.setState("flipping");
          const A = m.height / 10, C = this.calc.getCorner() === "bottom" ? m.height - A : A, P = this.calc.getCorner() === "bottom" ? m.height : 0;
          this.calc.calc({ x: m.pageWidth - A, y: C }), this.animateFlippingTo({ x: m.pageWidth - A, y: C }, { x: -m.pageWidth, y: P }, !0);
        }
        start(f) {
          this.reset();
          const m = this.render.convertToBook(f), A = this.getBoundsRect(), C = this.getDirectionByPoint(m), P = m.y >= A.height / 2 ? "bottom" : "top";
          if (!this.checkDirection(C)) return !1;
          try {
            if (this.flippingPage = this.app.getPageCollection().getFlippingPage(C), this.bottomPage = this.app.getPageCollection().getBottomPage(C), this.render.getOrientation() === "landscape") if (C === 1) {
              const R = this.app.getPageCollection().nextBy(this.flippingPage);
              R !== null && this.flippingPage.getDensity() !== R.getDensity() && (this.flippingPage.setDrawingDensity("hard"), R.setDrawingDensity("hard"));
            } else {
              const R = this.app.getPageCollection().prevBy(this.flippingPage);
              R !== null && this.flippingPage.getDensity() !== R.getDensity() && (this.flippingPage.setDrawingDensity("hard"), R.setDrawingDensity("hard"));
            }
            return this.render.setDirection(C), this.calc = new d(C, P, A.pageWidth.toString(10), A.height.toString(10)), !0;
          } catch {
            return !1;
          }
        }
        do(f) {
          if (this.calc !== null && this.calc.calc(f)) {
            const m = this.calc.getFlippingProgress();
            this.bottomPage.setArea(this.calc.getBottomClipArea()), this.bottomPage.setPosition(this.calc.getBottomPagePosition()), this.bottomPage.setAngle(0), this.bottomPage.setHardAngle(0), this.flippingPage.setArea(this.calc.getFlippingClipArea()), this.flippingPage.setPosition(this.calc.getActiveCorner()), this.flippingPage.setAngle(this.calc.getAngle()), this.calc.getDirection() === 0 ? this.flippingPage.setHardAngle(90 * (200 - 2 * m) / 100) : this.flippingPage.setHardAngle(-90 * (200 - 2 * m) / 100), this.render.setPageRect(this.calc.getRect()), this.render.setBottomPage(this.bottomPage), this.render.setFlippingPage(this.flippingPage), this.render.setShadowData(this.calc.getShadowStartPoint(), this.calc.getShadowAngle(), m, this.calc.getDirection());
          }
        }
        flipToPage(f, m) {
          const A = this.app.getPageCollection().getCurrentSpreadIndex(), C = this.app.getPageCollection().getSpreadIndexByPage(f);
          try {
            C > A && (this.app.getPageCollection().setCurrentSpreadIndex(C - 1), this.flipNext(m)), C < A && (this.app.getPageCollection().setCurrentSpreadIndex(C + 1), this.flipPrev(m));
          } catch {
          }
        }
        flipNext(f) {
          this.flip({ x: this.render.getRect().left + 2 * this.render.getRect().pageWidth - 10, y: f === "top" ? 1 : this.render.getRect().height - 2 });
        }
        flipPrev(f) {
          this.flip({ x: 10, y: f === "top" ? 1 : this.render.getRect().height - 2 });
        }
        stopMove() {
          if (this.calc === null) return;
          const f = this.calc.getPosition(), m = this.getBoundsRect(), A = this.calc.getCorner() === "bottom" ? m.height : 0;
          f.x <= 0 ? this.animateFlippingTo(f, { x: -m.pageWidth, y: A }, !0) : this.animateFlippingTo(f, { x: m.pageWidth, y: A }, !1);
        }
        showCorner(f) {
          if (!this.checkState("read", "fold_corner")) return;
          const m = this.getBoundsRect(), A = m.pageWidth;
          if (this.isPointOnCorners(f)) if (this.calc === null) {
            if (!this.start(f)) return;
            this.setState("fold_corner"), this.calc.calc({ x: A - 1, y: 1 });
            const C = 50, P = this.calc.getCorner() === "bottom" ? m.height - 1 : 1, R = this.calc.getCorner() === "bottom" ? m.height - C : C;
            this.animateFlippingTo({ x: A - 1, y: P }, { x: A - C, y: R }, !1, !1);
          } else this.do(this.render.convertToPage(f));
          else this.setState("read"), this.render.finishAnimation(), this.stopMove();
        }
        animateFlippingTo(f, m, A, C = !0) {
          const P = o.GetCordsFromTwoPoint(f, m), R = [];
          for (const D of P) R.push(() => this.do(D));
          const L = this.getAnimationDuration(P.length);
          this.render.startAnimation(R, L, () => {
            this.calc && (A && (this.calc.getDirection() === 1 ? this.app.turnToPrevPage() : this.app.turnToNextPage()), C && (this.render.setBottomPage(null), this.render.setFlippingPage(null), this.render.clearShadow(), this.setState("read"), this.reset()));
          });
        }
        getCalculation() {
          return this.calc;
        }
        getState() {
          return this.state;
        }
        setState(f) {
          this.state !== f && (this.app.updateState(f), this.state = f);
        }
        getDirectionByPoint(f) {
          const m = this.getBoundsRect();
          if (this.render.getOrientation() === "portrait") {
            if (f.x - m.pageWidth <= m.width / 5) return 1;
          } else if (f.x < m.width / 2) return 1;
          return 0;
        }
        getAnimationDuration(f) {
          const m = this.app.getSettings().flippingTime;
          return f >= 1e3 ? m : f / 1e3 * m;
        }
        checkDirection(f) {
          return f === 0 ? this.app.getCurrentPageIndex() < this.app.getPageCount() - 1 : this.app.getCurrentPageIndex() >= 1;
        }
        reset() {
          this.calc = null, this.flippingPage = null, this.bottomPage = null;
        }
        getBoundsRect() {
          return this.render.getRect();
        }
        checkState(...f) {
          for (const m of f) if (this.state === m) return !0;
          return !1;
        }
        isPointOnCorners(f) {
          const m = this.getBoundsRect(), A = m.pageWidth, C = Math.sqrt(Math.pow(A, 2) + Math.pow(m.height, 2)) / 5, P = this.render.convertToBook(f);
          return P.x > 0 && P.y > 0 && P.x < m.width && P.y < m.height && (P.x < C || P.x > m.width - C) && (P.y < C || P.y > m.height - C);
        }
      }
      class p {
        constructor(f, m) {
          this.leftPage = null, this.rightPage = null, this.flippingPage = null, this.bottomPage = null, this.direction = null, this.orientation = null, this.shadow = null, this.animation = null, this.pageRect = null, this.boundsRect = null, this.timer = 0, this.safari = !1, this.setting = m, this.app = f;
          const A = new RegExp("Version\\/[\\d\\.]+.*Safari/");
          this.safari = A.exec(window.navigator.userAgent) !== null;
        }
        render(f) {
          if (this.animation !== null) {
            const m = Math.round((f - this.animation.startedAt) / this.animation.durationFrame);
            m < this.animation.frames.length ? this.animation.frames[m]() : (this.animation.onAnimateEnd(), this.animation = null);
          }
          this.timer = f, this.drawFrame();
        }
        start() {
          this.update();
          const f = (m) => {
            this.render(m), requestAnimationFrame(f);
          };
          requestAnimationFrame(f);
        }
        startAnimation(f, m, A) {
          this.finishAnimation(), this.animation = { frames: f, duration: m, durationFrame: m / f.length, onAnimateEnd: A, startedAt: this.timer };
        }
        finishAnimation() {
          this.animation !== null && (this.animation.frames[this.animation.frames.length - 1](), this.animation.onAnimateEnd !== null && this.animation.onAnimateEnd()), this.animation = null;
        }
        update() {
          this.boundsRect = null;
          const f = this.calculateBoundsRect();
          this.orientation !== f && (this.orientation = f, this.app.updateOrientation(f));
        }
        calculateBoundsRect() {
          let f = "landscape";
          const m = this.getBlockWidth(), A = m / 2, C = this.getBlockHeight() / 2, P = this.setting.width / this.setting.height;
          let R = this.setting.width, L = this.setting.height, D = A - R;
          return this.setting.size === "stretch" ? (m < 2 * this.setting.minWidth && this.app.getSettings().usePortrait && (f = "portrait"), R = f === "portrait" ? this.getBlockWidth() : this.getBlockWidth() / 2, R > this.setting.maxWidth && (R = this.setting.maxWidth), L = R / P, L > this.getBlockHeight() && (L = this.getBlockHeight(), R = L * P), D = f === "portrait" ? A - R / 2 - R : A - R) : m < 2 * R && this.app.getSettings().usePortrait && (f = "portrait", D = A - R / 2 - R), this.boundsRect = { left: D, top: C - L / 2, width: 2 * R, height: L, pageWidth: R }, f;
        }
        setShadowData(f, m, A, C) {
          if (!this.app.getSettings().drawShadow) return;
          const P = 100 * this.getSettings().maxShadowOpacity;
          this.shadow = { pos: f, angle: m, width: 3 * this.getRect().pageWidth / 4 * A / 100, opacity: (100 - A) * P / 100 / 100, direction: C, progress: 2 * A };
        }
        clearShadow() {
          this.shadow = null;
        }
        getBlockWidth() {
          return this.app.getUI().getDistElement().offsetWidth;
        }
        getBlockHeight() {
          return this.app.getUI().getDistElement().offsetHeight;
        }
        getDirection() {
          return this.direction;
        }
        getRect() {
          return this.boundsRect === null && this.calculateBoundsRect(), this.boundsRect;
        }
        getSettings() {
          return this.app.getSettings();
        }
        getOrientation() {
          return this.orientation;
        }
        setPageRect(f) {
          this.pageRect = f;
        }
        setDirection(f) {
          this.direction = f;
        }
        setRightPage(f) {
          f !== null && f.setOrientation(1), this.rightPage = f;
        }
        setLeftPage(f) {
          f !== null && f.setOrientation(0), this.leftPage = f;
        }
        setBottomPage(f) {
          f !== null && f.setOrientation(this.direction === 1 ? 0 : 1), this.bottomPage = f;
        }
        setFlippingPage(f) {
          f !== null && f.setOrientation(this.direction === 0 && this.orientation !== "portrait" ? 0 : 1), this.flippingPage = f;
        }
        convertToBook(f) {
          const m = this.getRect();
          return { x: f.x - m.left, y: f.y - m.top };
        }
        isSafari() {
          return this.safari;
        }
        convertToPage(f, m) {
          m || (m = this.direction);
          const A = this.getRect();
          return { x: m === 0 ? f.x - A.left - A.width / 2 : A.width / 2 - f.x + A.left, y: f.y - A.top };
        }
        convertToGlobal(f, m) {
          if (m || (m = this.direction), f == null) return null;
          const A = this.getRect();
          return { x: m === 0 ? f.x + A.left + A.width / 2 : A.width / 2 - f.x + A.left, y: f.y + A.top };
        }
        convertRectToGlobal(f, m) {
          return m || (m = this.direction), { topLeft: this.convertToGlobal(f.topLeft, m), topRight: this.convertToGlobal(f.topRight, m), bottomLeft: this.convertToGlobal(f.bottomLeft, m), bottomRight: this.convertToGlobal(f.bottomRight, m) };
        }
      }
      class b extends p {
        constructor(f, m, A) {
          super(f, m), this.canvas = A, this.ctx = A.getContext("2d");
        }
        getContext() {
          return this.ctx;
        }
        reload() {
        }
        drawFrame() {
          this.clear(), this.orientation !== "portrait" && this.leftPage != null && this.leftPage.simpleDraw(0), this.rightPage != null && this.rightPage.simpleDraw(1), this.bottomPage != null && this.bottomPage.draw(), this.drawBookShadow(), this.flippingPage != null && this.flippingPage.draw(), this.shadow != null && (this.drawOuterShadow(), this.drawInnerShadow());
          const f = this.getRect();
          this.orientation === "portrait" && (this.ctx.beginPath(), this.ctx.rect(f.left + f.pageWidth, f.top, f.width, f.height), this.ctx.clip());
        }
        drawBookShadow() {
          const f = this.getRect();
          this.ctx.save(), this.ctx.beginPath();
          const m = f.width / 20;
          this.ctx.rect(f.left, f.top, f.width, f.height);
          const A = { x: f.left + f.width / 2 - m / 2, y: 0 };
          this.ctx.translate(A.x, A.y);
          const C = this.ctx.createLinearGradient(0, 0, m, 0);
          C.addColorStop(0, "rgba(0, 0, 0, 0)"), C.addColorStop(0.4, "rgba(0, 0, 0, 0.2)"), C.addColorStop(0.49, "rgba(0, 0, 0, 0.1)"), C.addColorStop(0.5, "rgba(0, 0, 0, 0.5)"), C.addColorStop(0.51, "rgba(0, 0, 0, 0.4)"), C.addColorStop(1, "rgba(0, 0, 0, 0)"), this.ctx.clip(), this.ctx.fillStyle = C, this.ctx.fillRect(0, 0, m, 2 * f.height), this.ctx.restore();
        }
        drawOuterShadow() {
          const f = this.getRect();
          this.ctx.save(), this.ctx.beginPath(), this.ctx.rect(f.left, f.top, f.width, f.height);
          const m = this.convertToGlobal({ x: this.shadow.pos.x, y: this.shadow.pos.y });
          this.ctx.translate(m.x, m.y), this.ctx.rotate(Math.PI + this.shadow.angle + Math.PI / 2);
          const A = this.ctx.createLinearGradient(0, 0, this.shadow.width, 0);
          this.shadow.direction === 0 ? (this.ctx.translate(0, -100), A.addColorStop(0, "rgba(0, 0, 0, " + this.shadow.opacity + ")"), A.addColorStop(1, "rgba(0, 0, 0, 0)")) : (this.ctx.translate(-this.shadow.width, -100), A.addColorStop(0, "rgba(0, 0, 0, 0)"), A.addColorStop(1, "rgba(0, 0, 0, " + this.shadow.opacity + ")")), this.ctx.clip(), this.ctx.fillStyle = A, this.ctx.fillRect(0, 0, this.shadow.width, 2 * f.height), this.ctx.restore();
        }
        drawInnerShadow() {
          const f = this.getRect();
          this.ctx.save(), this.ctx.beginPath();
          const m = this.convertToGlobal({ x: this.shadow.pos.x, y: this.shadow.pos.y }), A = this.convertRectToGlobal(this.pageRect);
          this.ctx.moveTo(A.topLeft.x, A.topLeft.y), this.ctx.lineTo(A.topRight.x, A.topRight.y), this.ctx.lineTo(A.bottomRight.x, A.bottomRight.y), this.ctx.lineTo(A.bottomLeft.x, A.bottomLeft.y), this.ctx.translate(m.x, m.y), this.ctx.rotate(Math.PI + this.shadow.angle + Math.PI / 2);
          const C = 3 * this.shadow.width / 4, P = this.ctx.createLinearGradient(0, 0, C, 0);
          this.shadow.direction === 0 ? (this.ctx.translate(-C, -100), P.addColorStop(1, "rgba(0, 0, 0, " + this.shadow.opacity + ")"), P.addColorStop(0.9, "rgba(0, 0, 0, 0.05)"), P.addColorStop(0.7, "rgba(0, 0, 0, " + this.shadow.opacity + ")"), P.addColorStop(0, "rgba(0, 0, 0, 0)")) : (this.ctx.translate(0, -100), P.addColorStop(0, "rgba(0, 0, 0, " + this.shadow.opacity + ")"), P.addColorStop(0.1, "rgba(0, 0, 0, 0.05)"), P.addColorStop(0.3, "rgba(0, 0, 0, " + this.shadow.opacity + ")"), P.addColorStop(1, "rgba(0, 0, 0, 0)")), this.ctx.clip(), this.ctx.fillStyle = P, this.ctx.fillRect(0, 0, C, 2 * f.height), this.ctx.restore();
        }
        clear() {
          this.ctx.fillStyle = "white", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        }
      }
      class S {
        constructor(f, m, A) {
          this.touchPoint = null, this.swipeTimeout = 250, this.onResize = () => {
            this.update();
          }, this.onMouseDown = (P) => {
            if (this.checkTarget(P.target)) {
              const R = this.getMousePos(P.clientX, P.clientY);
              this.app.startUserTouch(R), P.preventDefault();
            }
          }, this.onTouchStart = (P) => {
            if (this.checkTarget(P.target) && P.changedTouches.length > 0) {
              const R = P.changedTouches[0], L = this.getMousePos(R.clientX, R.clientY);
              this.touchPoint = { point: L, time: Date.now() }, setTimeout(() => {
                this.touchPoint !== null && this.app.startUserTouch(L);
              }, this.swipeTimeout), this.app.getSettings().mobileScrollSupport || P.preventDefault();
            }
          }, this.onMouseUp = (P) => {
            const R = this.getMousePos(P.clientX, P.clientY);
            this.app.userStop(R);
          }, this.onMouseMove = (P) => {
            const R = this.getMousePos(P.clientX, P.clientY);
            this.app.userMove(R, !1);
          }, this.onTouchMove = (P) => {
            if (P.changedTouches.length > 0) {
              const R = P.changedTouches[0], L = this.getMousePos(R.clientX, R.clientY);
              this.app.getSettings().mobileScrollSupport ? (this.touchPoint !== null && (Math.abs(this.touchPoint.point.x - L.x) > 10 || this.app.getState() !== "read") && P.cancelable && this.app.userMove(L, !0), this.app.getState() !== "read" && P.preventDefault()) : this.app.userMove(L, !0);
            }
          }, this.onTouchEnd = (P) => {
            if (P.changedTouches.length > 0) {
              const R = P.changedTouches[0], L = this.getMousePos(R.clientX, R.clientY);
              let D = !1;
              if (this.touchPoint !== null) {
                const F = L.x - this.touchPoint.point.x, U = Math.abs(L.y - this.touchPoint.point.y);
                Math.abs(F) > this.swipeDistance && U < 2 * this.swipeDistance && Date.now() - this.touchPoint.time < this.swipeTimeout && (F > 0 ? this.app.flipPrev(this.touchPoint.point.y < this.app.getRender().getRect().height / 2 ? "top" : "bottom") : this.app.flipNext(this.touchPoint.point.y < this.app.getRender().getRect().height / 2 ? "top" : "bottom"), D = !0), this.touchPoint = null;
              }
              this.app.userStop(L, D);
            }
          }, this.parentElement = f, f.classList.add("stf__parent"), f.insertAdjacentHTML("afterbegin", '<div class="stf__wrapper"></div>'), this.wrapper = f.querySelector(".stf__wrapper"), this.app = m;
          const C = this.app.getSettings().usePortrait ? 1 : 2;
          f.style.minWidth = A.minWidth * C + "px", f.style.minHeight = A.minHeight + "px", A.size === "fixed" && (f.style.minWidth = A.width * C + "px", f.style.minHeight = A.height + "px"), A.autoSize && (f.style.width = "100%", f.style.maxWidth = 2 * A.maxWidth + "px"), f.style.display = "block", window.addEventListener("resize", this.onResize, !1), this.swipeDistance = A.swipeDistance;
        }
        destroy() {
          this.app.getSettings().useMouseEvents && this.removeHandlers(), this.distElement.remove(), this.wrapper.remove();
        }
        getDistElement() {
          return this.distElement;
        }
        getWrapper() {
          return this.wrapper;
        }
        setOrientationStyle(f) {
          this.wrapper.classList.remove("--portrait", "--landscape"), f === "portrait" ? (this.app.getSettings().autoSize && (this.wrapper.style.paddingBottom = this.app.getSettings().height / this.app.getSettings().width * 100 + "%"), this.wrapper.classList.add("--portrait")) : (this.app.getSettings().autoSize && (this.wrapper.style.paddingBottom = this.app.getSettings().height / (2 * this.app.getSettings().width) * 100 + "%"), this.wrapper.classList.add("--landscape")), this.update();
        }
        removeHandlers() {
          window.removeEventListener("resize", this.onResize), this.distElement.removeEventListener("mousedown", this.onMouseDown), this.distElement.removeEventListener("touchstart", this.onTouchStart), window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("touchmove", this.onTouchMove), window.removeEventListener("mouseup", this.onMouseUp), window.removeEventListener("touchend", this.onTouchEnd);
        }
        setHandlers() {
          window.addEventListener("resize", this.onResize, !1), this.app.getSettings().useMouseEvents && (this.distElement.addEventListener("mousedown", this.onMouseDown), this.distElement.addEventListener("touchstart", this.onTouchStart), window.addEventListener("mousemove", this.onMouseMove), window.addEventListener("touchmove", this.onTouchMove, { passive: !this.app.getSettings().mobileScrollSupport }), window.addEventListener("mouseup", this.onMouseUp), window.addEventListener("touchend", this.onTouchEnd));
        }
        getMousePos(f, m) {
          const A = this.distElement.getBoundingClientRect();
          return { x: f - A.left, y: m - A.top };
        }
        checkTarget(f) {
          return !this.app.getSettings().clickEventForward || !["a", "button"].includes(f.tagName.toLowerCase());
        }
      }
      class v extends S {
        constructor(f, m, A, C) {
          super(f, m, A), this.wrapper.insertAdjacentHTML("afterbegin", '<div class="stf__block"></div>'), this.distElement = f.querySelector(".stf__block"), this.items = C;
          for (const P of C) this.distElement.appendChild(P);
          this.setHandlers();
        }
        clear() {
          for (const f of this.items) this.parentElement.appendChild(f);
        }
        updateItems(f) {
          this.removeHandlers(), this.distElement.innerHTML = "";
          for (const m of f) this.distElement.appendChild(m);
          this.items = f, this.setHandlers();
        }
        update() {
          this.app.getRender().update();
        }
      }
      class E extends S {
        constructor(f, m, A) {
          super(f, m, A), this.wrapper.innerHTML = '<canvas class="stf__canvas"></canvas>', this.canvas = f.querySelectorAll("canvas")[0], this.distElement = this.canvas, this.resizeCanvas(), this.setHandlers();
        }
        resizeCanvas() {
          const f = getComputedStyle(this.canvas), m = parseInt(f.getPropertyValue("width"), 10), A = parseInt(f.getPropertyValue("height"), 10);
          this.canvas.width = m, this.canvas.height = A;
        }
        getCanvas() {
          return this.canvas;
        }
        update() {
          this.resizeCanvas(), this.app.getRender().update();
        }
      }
      class x extends p {
        constructor(f, m, A) {
          super(f, m), this.outerShadow = null, this.innerShadow = null, this.hardShadow = null, this.hardInnerShadow = null, this.element = A, this.createShadows();
        }
        createShadows() {
          this.element.insertAdjacentHTML("beforeend", `<div class="stf__outerShadow"></div>
             <div class="stf__innerShadow"></div>
             <div class="stf__hardShadow"></div>
             <div class="stf__hardInnerShadow"></div>`), this.outerShadow = this.element.querySelector(".stf__outerShadow"), this.innerShadow = this.element.querySelector(".stf__innerShadow"), this.hardShadow = this.element.querySelector(".stf__hardShadow"), this.hardInnerShadow = this.element.querySelector(".stf__hardInnerShadow");
        }
        clearShadow() {
          super.clearShadow(), this.outerShadow.style.cssText = "display: none", this.innerShadow.style.cssText = "display: none", this.hardShadow.style.cssText = "display: none", this.hardInnerShadow.style.cssText = "display: none";
        }
        reload() {
          this.element.querySelector(".stf__outerShadow") || this.createShadows();
        }
        drawHardInnerShadow() {
          const f = this.getRect(), m = this.shadow.progress > 100 ? 200 - this.shadow.progress : this.shadow.progress;
          let A = (100 - m) * (2.5 * f.pageWidth) / 100 + 20;
          A > f.pageWidth && (A = f.pageWidth);
          let C = `
            display: block;
            z-index: ${(this.getSettings().startZIndex + 5).toString(10)};
            width: ${A}px;
            height: ${f.height}px;
            background: linear-gradient(to right,
                rgba(0, 0, 0, ${this.shadow.opacity * m / 100}) 5%,
                rgba(0, 0, 0, 0) 100%);
            left: ${f.left + f.width / 2}px;
            transform-origin: 0 0;
        `;
          C += this.getDirection() === 0 && this.shadow.progress > 100 || this.getDirection() === 1 && this.shadow.progress <= 100 ? "transform: translate3d(0, 0, 0);" : "transform: translate3d(0, 0, 0) rotateY(180deg);", this.hardInnerShadow.style.cssText = C;
        }
        drawHardOuterShadow() {
          const f = this.getRect();
          let m = (100 - (this.shadow.progress > 100 ? 200 - this.shadow.progress : this.shadow.progress)) * (2.5 * f.pageWidth) / 100 + 20;
          m > f.pageWidth && (m = f.pageWidth);
          let A = `
            display: block;
            z-index: ${(this.getSettings().startZIndex + 4).toString(10)};
            width: ${m}px;
            height: ${f.height}px;
            background: linear-gradient(to left, rgba(0, 0, 0, ${this.shadow.opacity}) 5%, rgba(0, 0, 0, 0) 100%);
            left: ${f.left + f.width / 2}px;
            transform-origin: 0 0;
        `;
          A += this.getDirection() === 0 && this.shadow.progress > 100 || this.getDirection() === 1 && this.shadow.progress <= 100 ? "transform: translate3d(0, 0, 0) rotateY(180deg);" : "transform: translate3d(0, 0, 0);", this.hardShadow.style.cssText = A;
        }
        drawInnerShadow() {
          const f = this.getRect(), m = 3 * this.shadow.width / 4, A = this.getDirection() === 0 ? m : 0, C = this.getDirection() === 0 ? "to left" : "to right", P = this.convertToGlobal(this.shadow.pos), R = this.shadow.angle + 3 * Math.PI / 2, L = [this.pageRect.topLeft, this.pageRect.topRight, this.pageRect.bottomRight, this.pageRect.bottomLeft];
          let D = "polygon( ";
          for (const U of L) {
            let O = this.getDirection() === 1 ? { x: -U.x + this.shadow.pos.x, y: U.y - this.shadow.pos.y } : { x: U.x - this.shadow.pos.x, y: U.y - this.shadow.pos.y };
            O = o.GetRotatedPoint(O, { x: A, y: 100 }, R), D += O.x + "px " + O.y + "px, ";
          }
          D = D.slice(0, -2), D += ")";
          const F = `
            display: block;
            z-index: ${(this.getSettings().startZIndex + 10).toString(10)};
            width: ${m}px;
            height: ${2 * f.height}px;
            background: linear-gradient(${C},
                rgba(0, 0, 0, ${this.shadow.opacity}) 5%,
                rgba(0, 0, 0, 0.05) 15%,
                rgba(0, 0, 0, ${this.shadow.opacity}) 35%,
                rgba(0, 0, 0, 0) 100%);
            transform-origin: ${A}px 100px;
            transform: translate3d(${P.x - A}px, ${P.y - 100}px, 0) rotate(${R}rad);
            clip-path: ${D};
            -webkit-clip-path: ${D};
        `;
          this.innerShadow.style.cssText = F;
        }
        drawOuterShadow() {
          const f = this.getRect(), m = this.convertToGlobal({ x: this.shadow.pos.x, y: this.shadow.pos.y }), A = this.shadow.angle + 3 * Math.PI / 2, C = this.getDirection() === 1 ? this.shadow.width : 0, P = this.getDirection() === 0 ? "to right" : "to left", R = [{ x: 0, y: 0 }, { x: f.pageWidth, y: 0 }, { x: f.pageWidth, y: f.height }, { x: 0, y: f.height }];
          let L = "polygon( ";
          for (const F of R) if (F !== null) {
            let U = this.getDirection() === 1 ? { x: -F.x + this.shadow.pos.x, y: F.y - this.shadow.pos.y } : { x: F.x - this.shadow.pos.x, y: F.y - this.shadow.pos.y };
            U = o.GetRotatedPoint(U, { x: C, y: 100 }, A), L += U.x + "px " + U.y + "px, ";
          }
          L = L.slice(0, -2), L += ")";
          const D = `
            display: block;
            z-index: ${(this.getSettings().startZIndex + 10).toString(10)};
            width: ${this.shadow.width}px;
            height: ${2 * f.height}px;
            background: linear-gradient(${P}, rgba(0, 0, 0, ${this.shadow.opacity}), rgba(0, 0, 0, 0));
            transform-origin: ${C}px 100px;
            transform: translate3d(${m.x - C}px, ${m.y - 100}px, 0) rotate(${A}rad);
            clip-path: ${L};
            -webkit-clip-path: ${L};
        `;
          this.outerShadow.style.cssText = D;
        }
        drawLeftPage() {
          this.orientation !== "portrait" && this.leftPage !== null && (this.direction === 1 && this.flippingPage !== null && this.flippingPage.getDrawingDensity() === "hard" ? (this.leftPage.getElement().style.zIndex = (this.getSettings().startZIndex + 5).toString(10), this.leftPage.setHardDrawingAngle(180 + this.flippingPage.getHardAngle()), this.leftPage.draw(this.flippingPage.getDrawingDensity())) : this.leftPage.simpleDraw(0));
        }
        drawRightPage() {
          this.rightPage !== null && (this.direction === 0 && this.flippingPage !== null && this.flippingPage.getDrawingDensity() === "hard" ? (this.rightPage.getElement().style.zIndex = (this.getSettings().startZIndex + 5).toString(10), this.rightPage.setHardDrawingAngle(180 + this.flippingPage.getHardAngle()), this.rightPage.draw(this.flippingPage.getDrawingDensity())) : this.rightPage.simpleDraw(1));
        }
        drawBottomPage() {
          if (this.bottomPage === null) return;
          const f = this.flippingPage != null ? this.flippingPage.getDrawingDensity() : null;
          this.orientation === "portrait" && this.direction === 1 || (this.bottomPage.getElement().style.zIndex = (this.getSettings().startZIndex + 3).toString(10), this.bottomPage.draw(f));
        }
        drawFrame() {
          this.clear(), this.drawLeftPage(), this.drawRightPage(), this.drawBottomPage(), this.flippingPage != null && (this.flippingPage.getElement().style.zIndex = (this.getSettings().startZIndex + 5).toString(10), this.flippingPage.draw()), this.shadow != null && this.flippingPage !== null && (this.flippingPage.getDrawingDensity() === "soft" ? (this.drawOuterShadow(), this.drawInnerShadow()) : (this.drawHardOuterShadow(), this.drawHardInnerShadow()));
        }
        clear() {
          for (const f of this.app.getPageCollection().getPages()) f !== this.leftPage && f !== this.rightPage && f !== this.flippingPage && f !== this.bottomPage && (f.getElement().style.cssText = "display: none"), f.getTemporaryCopy() !== this.flippingPage && f.hideTemporaryCopy();
        }
        update() {
          super.update(), this.rightPage !== null && this.rightPage.setOrientation(1), this.leftPage !== null && this.leftPage.setOrientation(0);
        }
      }
      class T {
        constructor() {
          this._default = { startPage: 0, size: "fixed", width: 0, height: 0, minWidth: 0, maxWidth: 0, minHeight: 0, maxHeight: 0, drawShadow: !0, flippingTime: 1e3, usePortrait: !0, startZIndex: 0, autoSize: !0, maxShadowOpacity: 1, showCover: !1, mobileScrollSupport: !0, swipeDistance: 30, clickEventForward: !0, useMouseEvents: !0, showPageCorners: !0, disableFlipByClick: !1 };
        }
        getSettings(f) {
          const m = this._default;
          if (Object.assign(m, f), m.size !== "stretch" && m.size !== "fixed") throw new Error('Invalid size type. Available only "fixed" and "stretch" value');
          if (m.width <= 0 || m.height <= 0) throw new Error("Invalid width or height");
          if (m.flippingTime <= 0) throw new Error("Invalid flipping time");
          return m.size === "stretch" ? (m.minWidth <= 0 && (m.minWidth = 100), m.maxWidth < m.minWidth && (m.maxWidth = 2e3), m.minHeight <= 0 && (m.minHeight = 100), m.maxHeight < m.minHeight && (m.maxHeight = 2e3)) : (m.minWidth = m.width, m.maxWidth = m.width, m.minHeight = m.height, m.maxHeight = m.height), m;
        }
      }
      (function(_, f) {
        f === void 0 && (f = {});
        var m = f.insertAt;
        if (typeof document < "u") {
          var A = document.head || document.getElementsByTagName("head")[0], C = document.createElement("style");
          C.type = "text/css", m === "top" && A.firstChild ? A.insertBefore(C, A.firstChild) : A.appendChild(C), C.styleSheet ? C.styleSheet.cssText = _ : C.appendChild(document.createTextNode(_));
        }
      })(`.stf__parent {
  position: relative;
  display: block;
  box-sizing: border-box;
  transform: translateZ(0);

  -ms-touch-action: pan-y;
  touch-action: pan-y;
}

.sft__wrapper {
  position: relative;
  width: 100%;
  box-sizing: border-box;
}

.stf__parent canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}

.stf__block {
  position: absolute;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  perspective: 2000px;
}

.stf__item {
  display: none;
  position: absolute;
  transform-style: preserve-3d;
}

.stf__outerShadow {
  position: absolute;
  left: 0;
  top: 0;
}

.stf__innerShadow {
  position: absolute;
  left: 0;
  top: 0;
}

.stf__hardShadow {
  position: absolute;
  left: 0;
  top: 0;
}

.stf__hardInnerShadow {
  position: absolute;
  left: 0;
  top: 0;
}`), e.PageFlip = class extends class {
        constructor() {
          this.events = /* @__PURE__ */ new Map();
        }
        on(_, f) {
          return this.events.has(_) ? this.events.get(_).push(f) : this.events.set(_, [f]), this;
        }
        off(_) {
          this.events.delete(_);
        }
        trigger(_, f, m = null) {
          if (this.events.has(_)) for (const A of this.events.get(_)) A({ data: m, object: f });
        }
      } {
        constructor(_, f) {
          super(), this.isUserTouch = !1, this.isUserMove = !1, this.setting = null, this.pages = null, this.setting = new T().getSettings(f), this.block = _;
        }
        destroy() {
          this.ui.destroy(), this.block.remove();
        }
        update() {
          this.render.update(), this.pages.show();
        }
        loadFromImages(_) {
          this.ui = new E(this.block, this, this.setting);
          const f = this.ui.getCanvas();
          this.render = new b(this, this.setting, f), this.flipController = new u(this.render, this), this.pages = new a(this, this.render, _), this.pages.load(), this.render.start(), this.pages.show(this.setting.startPage), setTimeout(() => {
            this.ui.update(), this.trigger("init", this, { page: this.setting.startPage, mode: this.render.getOrientation() });
          }, 1);
        }
        loadFromHTML(_) {
          this.ui = new v(this.block, this, this.setting, _), this.render = new x(this, this.setting, this.ui.getDistElement()), this.flipController = new u(this.render, this), this.pages = new h(this, this.render, this.ui.getDistElement(), _), this.pages.load(), this.render.start(), this.pages.show(this.setting.startPage), setTimeout(() => {
            this.ui.update(), this.trigger("init", this, { page: this.setting.startPage, mode: this.render.getOrientation() });
          }, 1);
        }
        updateFromImages(_) {
          const f = this.pages.getCurrentPageIndex();
          this.pages.destroy(), this.pages = new a(this, this.render, _), this.pages.load(), this.pages.show(f), this.trigger("update", this, { page: f, mode: this.render.getOrientation() });
        }
        updateFromHtml(_) {
          const f = this.pages.getCurrentPageIndex();
          this.pages.destroy(), this.pages = new h(this, this.render, this.ui.getDistElement(), _), this.pages.load(), this.ui.updateItems(_), this.render.reload(), this.pages.show(f), this.trigger("update", this, { page: f, mode: this.render.getOrientation() });
        }
        clear() {
          this.pages.destroy(), this.ui.clear();
        }
        turnToPrevPage() {
          this.pages.showPrev();
        }
        turnToNextPage() {
          this.pages.showNext();
        }
        turnToPage(_) {
          this.pages.show(_);
        }
        flipNext(_ = "top") {
          this.flipController.flipNext(_);
        }
        flipPrev(_ = "top") {
          this.flipController.flipPrev(_);
        }
        flip(_, f = "top") {
          this.flipController.flipToPage(_, f);
        }
        updateState(_) {
          this.trigger("changeState", this, _);
        }
        updatePageIndex(_) {
          this.trigger("flip", this, _);
        }
        updateOrientation(_) {
          this.ui.setOrientationStyle(_), this.update(), this.trigger("changeOrientation", this, _);
        }
        getPageCount() {
          return this.pages.getPageCount();
        }
        getCurrentPageIndex() {
          return this.pages.getCurrentPageIndex();
        }
        getPage(_) {
          return this.pages.getPage(_);
        }
        getRender() {
          return this.render;
        }
        getFlipController() {
          return this.flipController;
        }
        getOrientation() {
          return this.render.getOrientation();
        }
        getBoundsRect() {
          return this.render.getRect();
        }
        getSettings() {
          return this.setting;
        }
        getUI() {
          return this.ui;
        }
        getState() {
          return this.flipController.getState();
        }
        getPageCollection() {
          return this.pages;
        }
        startUserTouch(_) {
          this.mousePosition = _, this.isUserTouch = !0, this.isUserMove = !1;
        }
        userMove(_, f) {
          this.isUserTouch || f || !this.setting.showPageCorners ? this.isUserTouch && o.GetDistanceBetweenTwoPoint(this.mousePosition, _) > 5 && (this.isUserMove = !0, this.flipController.fold(_)) : this.flipController.showCorner(_);
        }
        userStop(_, f = !1) {
          this.isUserTouch && (this.isUserTouch = !1, f || (this.isUserMove ? this.flipController.stopMove() : this.flipController.flip(_)));
        }
      }, Object.defineProperty(e, "__esModule", { value: !0 });
    }));
  })(Eh, Eh.exports)), Eh.exports;
}
var lv = ov();
const hv = sh.forwardRef((c, t) => {
  const e = ze(null), s = ze([]), i = ze(), [r, a] = In([]);
  tm(t, () => ({
    pageFlip: () => i.current
  }));
  const o = Ni(() => {
    i.current && i.current.clear();
  }, []), l = Ni(() => {
    const h = i.current;
    h && (h.off("flip"), h.off("changeOrientation"), h.off("changeState"), h.off("init"), h.off("update"));
  }, []);
  return bt(() => {
    if (s.current = [], c.children) {
      const h = sh.Children.map(c.children, (d) => sh.cloneElement(d, {
        ref: (u) => {
          u && s.current.push(u);
        }
      }));
      (!c.renderOnlyPageLengthChange || r.length !== h.length) && (h.length < r.length && o(), a(h));
    }
  }, [c.children]), bt(() => {
    const h = () => {
      const d = i.current;
      d && (c.onFlip && d.on("flip", (u) => c.onFlip(u)), c.onChangeOrientation && d.on("changeOrientation", (u) => c.onChangeOrientation(u)), c.onChangeState && d.on("changeState", (u) => c.onChangeState(u)), c.onInit && d.on("init", (u) => c.onInit(u)), c.onUpdate && d.on("update", (u) => c.onUpdate(u)));
    };
    r.length > 0 && s.current.length > 0 && (l(), e.current && !i.current && (i.current = new lv.PageFlip(e.current, c)), i.current.getFlipController() ? i.current.updateFromHtml(s.current) : i.current.loadFromHTML(s.current), h());
  }, [r]), sh.createElement("div", { ref: e, className: c.className, style: c.style }, r);
}), cv = sh.memo(hv), dv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: cv
}, Symbol.toStringTag, { value: "Module" }));
export {
  mv as default
};

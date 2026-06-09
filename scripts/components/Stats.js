import { jsx as e, jsxs as w, Fragment as R } from "react/jsx-runtime";
import E from "lottie-react";
import * as v from "react";
const L = ({
  media: t = "image",
  // 'image' | 'video' | 'lottie' | 'iframe'
  aspect: i = "default",
  // 'default' | 'rectangle' | 'square'
  imageUrl: a,
  videoUrl: r,
  lottieUrl: n,
  lottieData: p,
  iframeUrl: f,
  title: h,
  className: d = ""
}) => {
  var l;
  const u = `relative w-full h-full ${i === "square" ? "aspect-square" : i === "rectangle" ? "aspect-[4/3]" : t === "video" ? "aspect-video" : ""}`.trim(), o = i === "default" ? `w-full h-full ${d}`.trim() : `absolute inset-0 w-full h-full ${d}`.trim(), m = "w-full h-full", y = i === "default" ? `${o}`.trim() : o;
  switch (t) {
    case "image":
      if (a)
        return /* @__PURE__ */ e("div", { className: u, children: /* @__PURE__ */ e(
          "img",
          {
            src: a,
            alt: h || "Media image",
            className: `object-cover ${o}`.trim(),
            loading: "lazy"
          }
        ) });
      break;
    case "video":
      if (r) {
        let s = r;
        return (r.includes("youtube.com/watch") || r.includes("youtu.be/")) && (s = `https://www.youtube.com/embed/${r.includes("youtu.be/") ? r.split("youtu.be/")[1].split("?")[0] : (l = r.split("v=")[1]) == null ? void 0 : l.split("&")[0]}`), /* @__PURE__ */ e("div", { className: u, children: /* @__PURE__ */ e(
          "iframe",
          {
            src: s,
            title: h || "Video player",
            frameBorder: "0",
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: !0,
            className: o
          }
        ) });
      }
      break;
    case "lottie":
      if (p)
        return /* @__PURE__ */ e("div", { className: u, children: /* @__PURE__ */ e("div", { className: `${o} overflow-hidden`.trim(), children: /* @__PURE__ */ e(
          E,
          {
            animationData: p,
            loop: !0,
            autoplay: !0,
            className: m,
            style: { width: "100%", height: "100%" },
            rendererSettings: { preserveAspectRatio: "xMidYMid slice" }
          }
        ) }) });
      if (n)
        return /* @__PURE__ */ e("div", { className: u, children: /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center text-body-default text-center p-40", children: "Loading Lottie animation..." }) });
      break;
    case "iframe":
      if (f)
        return /* @__PURE__ */ e("div", { className: u, children: /* @__PURE__ */ e(
          "iframe",
          {
            src: f,
            title: h || "Iframe content",
            frameBorder: "0",
            className: y
          }
        ) });
      break;
  }
  return /* @__PURE__ */ e("div", { className: u, children: /* @__PURE__ */ e("div", { className: `flex items-center justify-center text-body-default text-center p-40 ${i === "default" ? "" : "absolute inset-0"}`.trim(), children: t ? `${t.charAt(0).toUpperCase() + t.slice(1)} placeholder` : "Image/Video/Lottie/iframe" }) });
};
function U({
  media: t,
  // Media props object: { media, imageUrl, videoUrl, lottieUrl, lottieData, iframeUrl, aspect, title }
  stat: i,
  description: a,
  /**
   * !!! IGNORE IN COMPONENT. REMOVE THESE FROM REPEATER ITEM SETTINGS.
   * Below are (optional) props when used in a `Stats` component. 
   * 
   * The main component handles these to make sure items uniform.
   * But if you use this molecule as standalone, you can use the props below.
   */
  textAlign: r = "center",
  // 'center' | 'left' | 'right'
  fontSize: n = "sm"
  // 'sm' | 'md' | 'lg' | 'xl'
}) {
  const p = {
    sm: "text-display-s",
    md: "text-display-m",
    lg: "text-display-l",
    xl: "text-display-xl"
  }, f = {
    left: "start",
    right: "end",
    center: "center"
  }, h = {
    left: "mr-auto",
    right: "ml-auto",
    center: "mx-auto"
  }, d = ["center", "left", "right"].includes(r) ? r : "center", g = ["sm", "md", "lg", "xl"].includes(n) ? n : "sm", u = p[g], o = f[d], m = h[d], y = t ? {
    media: t.media || "image",
    aspect: t.aspect || "square",
    imageUrl: t.imageUrl,
    videoUrl: t.videoUrl,
    lottieUrl: t.lottieUrl,
    lottieData: t.lottieData,
    iframeUrl: t.iframeUrl,
    title: t.title || a || "",
    className: "w-full h-full object-cover"
  } : null;
  return /* @__PURE__ */ w(
    "div",
    {
      className: `flex flex-col items-${o} justify-center gap-stats-spacing-y text-gray-950`,
      style: { textAlign: d },
      children: [
        t && y && /* @__PURE__ */ e("div", { className: `flex flex-col items-${o} justify-${o}`, children: /* @__PURE__ */ e("div", { className: `w-48 h-48 max-w-full max-h-full rounded-full overflow-hidden ${m}`, children: /* @__PURE__ */ e(L, { ...y }) }) }),
        i && /* @__PURE__ */ e("h6", { className: `${u} font-normal`, children: i }),
        a && /* @__PURE__ */ e("p", { children: a })
      ]
    }
  );
}
function z({
  title: t,
  titleId: i,
  ...a
}, r) {
  return /* @__PURE__ */ v.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": i
  }, a), t ? /* @__PURE__ */ v.createElement("title", {
    id: i
  }, t) : null, /* @__PURE__ */ v.createElement("path", {
    fillRule: "evenodd",
    d: "M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z",
    clipRule: "evenodd"
  }));
}
const F = /* @__PURE__ */ v.forwardRef(z);
function P({
  title: t,
  titleId: i,
  ...a
}, r) {
  return /* @__PURE__ */ v.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": i
  }, a), t ? /* @__PURE__ */ v.createElement("title", {
    id: i
  }, t) : null, /* @__PURE__ */ v.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
  }));
}
const T = /* @__PURE__ */ v.forwardRef(P);
function I({ rating: t, textAlign: i = "left" }) {
  if (!t || t < 1 || t > 5) return null;
  const a = i === "center" ? "flex justify-center" : i === "right" ? "flex justify-end" : "flex justify-start", r = [];
  for (let n = 1; n <= 5; n++)
    n <= t ? r.push(
      /* @__PURE__ */ e(F, { className: "w-24 h-24 text-grey-800" }, n)
    ) : r.push(
      /* @__PURE__ */ e(T, { className: "w-24 h-24 text-grey-800" }, n)
    );
  return /* @__PURE__ */ e("div", { className: `${a} gap-4`, children: r });
}
function q({
  testimonial: t,
  name: i,
  role: a,
  rating: r = null,
  // number | null (1-5)
  imageUrl: n,
  logoUrl: p,
  mediaPosition: f = "top",
  // 'top' | 'bottom' | 'with-name'
  align: h = "left",
  // 'left' | 'center'
  withPadding: d = !1,
  // boolean
  className: g = "",
  ...u
}) {
  const o = r !== null && r >= 1 && r <= 5 ? Math.floor(r) : null, m = h === "center", y = `w-full ${d ? "p-testimonial-padding" : ""} ${g}`.trim(), l = m ? "text-center items-center" : "text-left items-start", s = p ? "h-40 w-auto" : "h-48 w-48 rounded-full object-cover", c = p || n, x = c && f === "top", N = c && f === "bottom", b = c && f === "with-name";
  return /* @__PURE__ */ e("div", { className: y, ...u, ...u.attributes || {}, children: /* @__PURE__ */ w("div", { className: `flex flex-col gap-testimonial-spacing-y ${l}`, children: [
    x && /* @__PURE__ */ e(
      "img",
      {
        src: c,
        alt: i || "Profile",
        className: s
      }
    ),
    o && /* @__PURE__ */ e(I, { rating: o, textAlign: m ? "center" : "left" }),
    t && /* @__PURE__ */ e("p", { className: "text-body-default", children: t }),
    (i || a) && /* @__PURE__ */ w(
      "div",
      {
        className: `flex flex-col gap-6 ${m ? "items-center" : "items-start"}`,
        children: [
          b && /* @__PURE__ */ w("div", { className: `flex items-center gap-10 ${m ? "justify-center" : "justify-start"}`, children: [
            /* @__PURE__ */ e(
              "img",
              {
                src: c,
                alt: i || "Profile",
                className: s
              }
            ),
            /* @__PURE__ */ w("div", { className: `flex flex-col ${m ? "items-center" : "items-start"}`, children: [
              i && /* @__PURE__ */ e("p", { className: "text-ui-label-small", children: i }),
              a && /* @__PURE__ */ e("p", { className: "text-ui-label-small", children: a })
            ] })
          ] }),
          !b && /* @__PURE__ */ w(R, { children: [
            i && /* @__PURE__ */ e("p", { className: "text-ui-label-small", children: i }),
            a && /* @__PURE__ */ e("p", { className: "text-ui-label-small", children: a })
          ] })
        ]
      }
    ),
    N && /* @__PURE__ */ e(
      "img",
      {
        src: c,
        alt: i || "Profile",
        className: s
      }
    )
  ] }) });
}
function W({
  /**
    Expects `stats` to be an array of objects where each object can include:
    stats:
      - `stat`
      - `description`
      - `textAlign`: 'center' | 'left' | 'right', defaults to 'center'
      - `statAlign`: 'left' | 'right', defaults to 'left' (for media and testimonial)
      - `fontSize`: 'sm' | 'md' | 'lg' | 'xl', defaults to 'sm'
      - `statMedia`: Optional object for StatsMolecule icon/media, with fields:
          - `media`: media type ('image' | 'video' | 'lottie' | 'iframe')
          - `imageUrl`: URL for image
          - `videoUrl`: URL for video
          - `lottieUrl`: URL for Lottie JSON file
          - `lottieData`: Lottie animation object
          - `iframeUrl`: URL for iframe
          - `aspect`: 'square' | 'default' | 'rectangle' (defaults to 'square' for StatsMolecule)
          - `title`: optional title for accessibility
      - `media`: Optional object for large media block (when type='media'), with fields:
          - `type`: media type ('image' | 'video' | 'lottie' | 'iframe')
          - `imageUrl`: URL for image
          - `videoUrl`: URL for video
          - `lottieUrl`: URL for Lottie JSON file
          - `lottieData`: Lottie animation object
          - `iframeUrl`: URL for iframe
          - `title`: optional title for accessibility
      - Any additional keys will be spread through to `StatsMolecule`
  
      **For "testimonial" type, each stat object can also include:
      - `testimonial`: The testimonial text (string)
      - `name`: The testimonial author's name (string)
      - `role`: The author's title, role, or company (string, optional)
      - `imageUrl`: URL for the author's image/avatar (string, optional)
      - `logoUrl`: URL for a logo (string, optional)
      - `rating`: Testimonial rating, e.g., number of stars (number, optional, e.g. 4.5 or 5)
      - `mediaPosition`: 'top' | 'bottom' | 'with-name' (string, optional)
      - `align`: 'left' | 'center' (string, optional)
      - `withPadding`: boolean (optional)
  
    --------------------------------------------------------------
    Example stat object:
      {
        stat: "85%",
        description: "Customer satisfaction",
        statMedia: {
          media: "image",
          imageUrl: "/img/smile.png",
          aspect: "square"
        },
        statAlign: "right",
        fontSize: "lg",
        media: {
          type: "image",
          imageUrl: "/img/chart.png",
          title: "Customer Satisfaction Chart"
        }
      }
    */
  stats: t = [],
  type: i = "column",
  // 'column' | 'testimonial' | 'media'
  statTextAlign: a = "center",
  // 'left' | 'center' | 'right'
  statFontSize: r = "sm",
  // 'sm' | 'md' | 'lg' | 'xl'
  id: n = "",
  className: p = ""
}) {
  const f = (l, s, c) => s.includes(l) ? l : c, h = (l) => {
    const { statAlign: s = "left" } = l;
    return f(s, ["left", "right"], "left");
  }, d = (l) => {
    const { media: s, statMedia: c, ...x } = l;
    return {
      ...x,
      media: c,
      textAlign: l.textAlign || a,
      fontSize: l.fontSize || r
    };
  }, g = (l, s) => /* @__PURE__ */ e(
    "div",
    {
      className: `flex h-full flex-col justify-center p-stats-padding min-h-[220px] ${s}`,
      children: /* @__PURE__ */ e(U, { ...d(l) })
    }
  ), u = (l) => {
    const s = l.media, c = !!s, x = `bg-grey-100 ${c ? "xl:w-1/2" : "w-full"}`, N = h(l) === "left";
    return /* @__PURE__ */ w("div", { className: "flex flex-col xl:flex-row items-stretch text-gray-950", children: [
      N && g(l, x),
      c && /* @__PURE__ */ e("div", { className: "relative w-full xl:w-1/2 h-full min-h-[220px] overflow-hidden bg-[#C8D4FE]", children: /* @__PURE__ */ e("div", { className: "absolute inset-0 w-full h-full", children: /* @__PURE__ */ e(
        L,
        {
          media: s.type || s.media || "image",
          aspect: "default",
          imageUrl: s.imageUrl,
          videoUrl: s.videoUrl,
          lottieUrl: s.lottieUrl,
          lottieData: s.lottieData,
          iframeUrl: s.iframeUrl,
          title: s.title || l.description || "",
          className: "w-full h-full object-cover"
        }
      ) }) }),
      !N && g(l, x)
    ] });
  }, o = (l) => {
    const {
      testimonial: s,
      rating: c,
      mediaPosition: x,
      align: N,
      withPadding: b,
      logoUrl: k
    } = l, A = l.name ?? l.author, B = l.role ?? l.authorTitle, $ = l.imageUrl ?? l.authorImage, C = !!s, j = `min-h-auto! ${C ? "xl:w-1/2" : "w-full"}`, M = h(l) === "left", S = {
      ...d(l),
      media: $ ? {
        media: "image",
        imageUrl: $,
        aspect: "square"
      } : l.statMedia || d(l).media
    };
    return /* @__PURE__ */ w("div", { className: "flex flex-col items-stretch xl:flex-row text-gray-950", children: [
      M && g(S, j),
      C && /* @__PURE__ */ e(
        "div",
        {
          className: `bg-grey-100 flex items-center justify-center ${j}`,
          children: /* @__PURE__ */ e(
            q,
            {
              testimonial: s,
              name: A,
              role: B,
              imageUrl: $,
              logoUrl: k,
              rating: c,
              mediaPosition: x,
              align: N,
              withPadding: b
            }
          )
        }
      ),
      !M && g(S, j)
    ] });
  }, m = (l, s) => {
    switch (i) {
      case "testimonial":
        return /* @__PURE__ */ e("div", { ...l.attributes ?? {}, children: o(l) }, s);
      case "media":
        return /* @__PURE__ */ e("div", { ...l.attributes ?? {}, children: u(l) }, s);
      case "column":
      default:
        return /* @__PURE__ */ e(
          "div",
          {
            className: "p-stats-padding",
            ...l.attributes ?? {},
            children: /* @__PURE__ */ e(U, { ...d(l) })
          },
          s
        );
    }
  };
  return !t || t.length === 0 ? null : /* @__PURE__ */ e("div", { className: `${i === "column" ? "grid grid-cols-1 xl:grid-cols-4 xl:gap-section-spacing-x" : "space-y-0"} ${p}`, id: n, children: t.map((l, s) => m(l, s)) });
}
export {
  W as default
};

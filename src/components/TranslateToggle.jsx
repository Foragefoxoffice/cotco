import React, { useEffect, useState } from "react";

export default function TranslateToggle() {
  const [active, setActive] = useState(() => localStorage.getItem("preferred_lang") || "en");

  const setLang = (lng) => {
    setActive(lng);
    if (typeof window !== "undefined") {
      if (window.__setTranslateLanguage) {
        window.__setTranslateLanguage(lng);
      } else {
        // widget not ready yet — set cookie + retry soon
        try { localStorage.setItem("preferred_lang", lng); } catch {}
        setTimeout(() => {
          window.__setTranslateLanguage && window.__setTranslateLanguage(lng);
        }, 400);
      }
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem("preferred_lang");
    if (saved && saved !== active) setActive(saved);
  }, []);

  return (
    <div className="inline-flex rounded-full bg-gray-100 p-1">
      <button
        onClick={() => setLang("en")}
        className={`px-3 py-1.5 text-sm rounded-full transition
          ${active === "en" ? "bg-white shadow text-gray-900" : "text-gray-600 hover:text-gray-900"}`}
        aria-pressed={active === "en"}
      >
        English
      </button>
      <button
        onClick={() => setLang("vi")}
        className={`px-3 py-1.5 text-sm rounded-full transition
          ${active === "vi" ? "bg-white shadow text-gray-900" : "text-gray-600 hover:text-gray-900"}`}
        aria-pressed={active === "vi"}
      >
        Tiếng Việt
      </button>
    </div>
  );
}

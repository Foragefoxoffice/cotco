import React, { useEffect, useState } from "react";

export default function TranslateToggle() {
  const [active, setActive] = useState(() => {
    try { return localStorage.getItem("preferred_lang") || "en"; } catch { return "en"; }
  });

  const setLang = (lng) => {
    setActive(lng);
    if (typeof window !== "undefined") {
      try { localStorage.setItem("preferred_lang", lng); } catch {}
      // keep body class for backward compatibility if you want:
      document.body.classList.toggle("vi-mode", lng === "vi");

      // dispatch a custom event so other components can react
      window.dispatchEvent(new CustomEvent("languageChange", { detail: { lang: lng } }));

      if (window.__setTranslateLanguage) {
        window.__setTranslateLanguage(lng);
      } else {
        setTimeout(() => window.__setTranslateLanguage && window.__setTranslateLanguage(lng), 400);
      }
    }
  };

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("preferred_lang")) || "en";
    setActive(saved);
    if (typeof window !== "undefined") document.body.classList.toggle("vi-mode", saved === "vi");

    const onStorage = (e) => {
      if (e.key === "preferred_lang") {
        const newLang = e.newValue || "en";
        setActive(newLang);
        document.body.classList.toggle("vi-mode", newLang === "vi");
        window.dispatchEvent(new CustomEvent("languageChange", { detail: { lang: newLang } }));
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  return (
    <div className="inline-flex rounded-full bg-gray-100 p-1">
      <button
        onClick={() => setLang("en")}
        className={`px-3 py-1.5 text-sm rounded-full transition ${active === "en" ? "bg-white shadow text-gray-900" : "text-gray-600 hover:text-gray-900"}`}
        aria-pressed={active === "en"}
      >
        English
      </button>
      <button
        onClick={() => setLang("vi")}
        className={`px-3 py-1.5 text-sm rounded-full transition ${active === "vi" ? "bg-white shadow text-gray-900" : "text-gray-600 hover:text-gray-900"}`}
        aria-pressed={active === "vi"}
      >
        Tiếng Việt
      </button>
    </div>
  );
}

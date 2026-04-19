// translations.js - Bilingual UI strings (EN/NE)
// Load BEFORE script.js in index.html

const translations = {
  en: {
    title: "🇳🇵 Nepal Government Websites",
    subtitle: "Official .gov.np portals",
    suggestTitle: "💡 Missing a website?",
    suggestDesc: "Help us improve this directory. Suggest a .gov.np site:",
    suggestBtn: "Submit a Website →",
    verifyNote: "We verify all submissions before publishing.",
    footerUnofficial: "Unofficial directory",
    footerDirect: "Links go directly to official .gov.np domains",
    footerStats: "📈 <strong id=\"site-count\">0</strong> sites  • Updated <time id=\"last-updated\">Apr 2026</time>",
    footerBuilt: "Built by volunteers"
  },
  ne: {
    title: "🇳🇵 नेपाल सरकारका वेबसाइटहरू",
    subtitle: "आधिकारिक .gov.np पोर्टलहरू",
    suggestTitle: "💡 वेबसाइट छुटेको छ?",
    suggestDesc: "यो निर्देशिका सुधार गर्न मद्दत गर्नुहोस्। .gov.np साइट सुझाव दिनुहोस्:",
    suggestBtn: "वेबसाइट पेश गर्नुहोस् →",
    verifyNote: "हामी सबै प्रस्तावहरू प्रकाशन अघि प्रमाणित गर्छौं।",
    footerUnofficial: "अनौपचारिक निर्देशिका",
    footerDirect: "लिंकहरू सिधै आधिकारिक .gov.np डोमेनमा जान्छन्",
    footerStats: "📈 <strong id=\"site-count\">0</strong> साइटहरू • 7 प्रदेश • अन्तिम अद्यावधिक <time id=\"last-updated\">Apr 2026</time>",
    footerBuilt: "स्वयंसेवकहरूद्वारा निर्मित"
  }
};

// Auto-apply if lang is set
if (typeof localStorage !== 'undefined') {
  const lang = localStorage.getItem('lang') || 'en';
  document.documentElement.lang = lang;
}

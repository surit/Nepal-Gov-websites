// translations.js - Bilingual UI strings (EN/NE)
const translations = {
  en: {
    pageTitle: "Nepal Government Websites Directory",
    title: "🇳🇵 Nepal Government Websites",
    subtitle: "Official .gov.np portals",
    searchPlaceholder: "Search sites, ministries, services...",
    loading: "Loading government sites...",
    suggestTitle: "💡 Missing a website?",
    suggestDesc: "Help us improve this directory. Suggest a .gov.np site:",
    suggestBtn: "Submit a Website →",
    verifyNote: "We verify all submissions before publishing.",
    footerUnofficial: "Unofficial directory",
    footerDirect: "Links go directly to official .gov.np domains",
    footerBuilt: "Built by volunteers",
    langToggle: "नेपाली",
    copyUrl: "📋 Copy URL",
    copied: "✓ Copied!",
    online: "Online",
    offline: "Offline",
    noResults: "No sites match your filters."
  },
  ne: {
    pageTitle: "नेपाल सरकारका वेबसाइटहरू - निर्देशिका",
    title: "🇳🇵 नेपाल सरकारका वेबसाइटहरू",
    subtitle: "आधिकारिक .gov.np पोर्टलहरू",
    searchPlaceholder: "साइट, मन्त्रालय, सेवाहरू खोज्नुहोस्...",
    loading: "सरकारी साइटहरू लोड हुँदै...",
    suggestTitle: "💡 वेबसाइट छुटेको छ?",
    suggestDesc: "यो निर्देशिका सुधार गर्न मद्दत गर्नुहोस्। .gov.np साइट सुझाव दिनुहोस्:",
    suggestBtn: "वेबसाइट पेश गर्नुहोस् →",
    verifyNote: "हामी सबै प्रस्तावहरू प्रकाशन अघि प्रमाणित गर्छौं।",
    footerUnofficial: "अनौपचारिक निर्देशिका",
    footerDirect: "लिंकहरू सिधै आधिकारिक .gov.np डोमेनमा जान्छन्",
    footerBuilt: "स्वयंसेवकहरूद्वारा निर्मित",
    langToggle: "English",
    copyUrl: "📋 URL प्रतिलिपि गर्नुहोस्",
    copied: "✓ प्रतिलिपि गरियो!",
    online: "सक्रिय",
    offline: "निष्क्रिय",
    noResults: "तपाईंको खोजसँग मेल खाने कुनै साइट छैन।"
  }
};

// Auto-set language on load
if (typeof localStorage !== 'undefined' && typeof document !== 'undefined') {
  const lang = localStorage.getItem('lang') || 'en';
  document.documentElement.lang = lang;
}

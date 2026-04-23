# Nepal Government Websites Directory

## 📖 About

Free, ad-free directory of **all official Nepal government websites** (.gov.np domains). One page. Every government website.

- **Live Demo**: [nepal-gov-websites.netlify.app](https://nepal-gov-websites.netlify.app)
- **Source**: [GitHub Repo](https://github.com/surit/Nepal-Gov-websites)
- **Built With**: Vanilla HTML/CSS/JS, Netlify CDN

## 🚀 Quick Start (Local)

1. Open `index.html` in your browser:
   ```
   # Windows
   start "" "index.html"
   
   # Or manually double-click index.html
   ```
2. Site loads instantly - no build step needed.

## 🌐 Features ✨

| Feature | Description |
|---------|-------------|
| **🔄 Dual Filtering** | Category → **AI Tags** (18+ auto-generated: Passport/Visa/Tax/Police/Health/Land/etc.) → Search |
| **📊 Category Metrics** | Live counts + hover tooltips (e.g. "Ministry (25)") |
| **🌙 Dark/Light Mode** | Auto-detect (prefers-color-scheme) + manual toggle + localStorage persistence |
| **🔍 Smart Search** | Matches sites, names, desc, categories, **tags** |
| **🇳🇵 Bilingual** | Full English/नेपाली toggle with 50+ translated strings |
| **💬 Professional Tooltips** | Hover cards: Key Services, Primary Audience, Interaction Level |
| **📋 Copy URL** | One-click copy buttons on all sites |
| **📈 Stats Bar** | Live site count + last updated |
| **📱 Fully Responsive** | Mobile-first, horizontal scroll navs, touch-optimized |
| **♿ Accessibility** | ARIA labels, keyboard nav, focus-visible, reduced-motion |
| **⚡ Performance** | Instant load (inline data), no external fetches |
| **🛡️ Clean** | No ads/trackers/cookies, verified .gov.np only |
| **📂 150+ Sites** | Comprehensive: Ministries/Departments/Provinces/Local Govts/Constitutional |
| **🎨 Modern UI** | CSS vars, backdrop-blur, smooth hovers/shadows |

**Live Demo**: [nepal-gov-websites.netlify.app](https://nepal-gov-websites.netlify.app)

## 📂 Structure

```
.
├── index.html          # Main page
├── css/
│   └── styles.css      # Styles
├── js/
│   ├── script.js       # Core functionality
│   └── translations.js # i18n
└── netlify.toml        # Deployment config
```

## 🆙 Updating Sites

**Data**: Inline `sitesData` array in `js/script.js` (~150 sites).

1. Add/update sites:
   ```js
   { name: "New Dept", url: "https://new.gov.np", cat: "Department", 
     desc: "Description (keywords trigger tags)", status: "active" }
   ```
   *`generateTags()` auto-adds: Passport/Tax/etc. from desc*

2. Test: Reload `index.html` → New site appears w/ tags/filterable.

3. Commit → Drag to [Netlify](https://netlify.com/drop).

**Pro Tip**: Use desc keywords (passport/health/tax/police) for auto-tagging! 🚀

**Suggest missing sites**: [Google Form](https://forms.gle/stcFLz9tLyjjsvNr9)

## 🚀 Deployment

**Netlify (Recommended)**:
```
npm create netlify@latest
# or drag-drop to netlify.com/drop
```

**Other**:
- GitHub Pages
- Vercel
- Any static host

`netlify.toml` enables:
- Custom 404 page
- Edge functions (future)

## 🤝 Contributing

1. [Fork](https://github.com/surit/Nepal-Gov-websites/fork)
2. Update sites in `js/script.js`
3. [Submit PR](https://github.com/surit/Nepal-Gov-websites/compare)

**Guidelines**:
- Only official .gov.np domains
- Verify sites are active
- Categorize properly (ministry/province/district/service)

## 📋 Change Log

### Latest (2024)
✅ **AI-Powered Features** (per TODO.md):
- `generateTags()`: 18+ responsibility tags (Passport/Tax/etc.) from keywords, excludes cat names
- Dual navs: Category (w/ metrics/tooltips) → Tag filters
- `enrichDetails()`: Professional tooltips (Services/Audience/Interaction)
- Dark/Light mode: CSS vars + auto-detect + toggle
- Search includes tags, enhanced logic
- Copy URL buttons w/ feedback
- Stats bar (live count/updated)
- Bilingual polish (50+ strings)
- 150+ sanitized sitesData, categories enriched
- Responsive CSS: backdrops/shadows/hovers/mobile-scroll

**SitesData**: Trimmed/sanitized ~150 verified .gov.np (Ministries→Local Govts)

**Test**: `start "" "index.html"` (Windows)

## 🙏 Credits

- Original: [surit](https://github.com/surit)
- Volunteers maintaining .gov.np links
- Nepal Government for official websites

## 📄 License

MIT © [Your Name/Contributors]

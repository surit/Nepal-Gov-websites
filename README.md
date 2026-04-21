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

## 🌐 Features

- ✅ **Dual Filtering**: Category → AI Tags (Passport, Police, Health, Tax, etc.) → Search
- ✅ **Category Metrics**: Count badges + hover tooltips (e.g. "Ministry (18)")
- ✅ **Dark/Light Mode**: Auto-detect + toggle (☀️/🌙) with localStorage
- ✅ Search across all sites, tags, ministries
- ✅ Nepali/English language toggle
- ✅ Stats: Total sites, last updated
- ✅ Mobile-responsive
- ✅ Keyboard accessible
- ✅ No ads/trackers/cookies
- ✅ Direct links to official .gov.np domains

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

**Data lives in `js/script.js`** (search for `sitesData` array).

1. Edit `js/script.js` → Add/update site objects:
   ```js
   {
     name: "Ministry Name",
     url: "https://ministry.gov.np",
     cat: "Ministry",
     desc: "Description here",
     status: "active"
     // Tags auto-generated from name/desc
   }
   ```

2. Update `lastUpdated` date in script.js.

**New:** Tags auto-generated via keywords (Passport=Passport sites, Health=Health/Hospital, etc.)

3. Test locally, then deploy.

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

### [Latest]
- Add your updates here

### Previous Updates
*(Track your contributions!)*

## 🙏 Credits

- Original: [surit](https://github.com/surit)
- Volunteers maintaining .gov.np links
- Nepal Government for official websites

## 📄 License

MIT © [Your Name/Contributors]

# Dark/Light Mode + Dual Filters Implementation Plan

## Status: [ ] In Progress

### Step 1: [x] Generate tags for sitesData (js/script.js)
- Added `generateTags()` function with keyword matching (Passport, Tax, Police, Health, etc.).
- `sites = sitesData.map(generateTags)`
- Added category metrics with count badges + tooltips.

### Step 2: [x] Create second tag nav (index.html + css + js)
- Added `#tag-nav` div below category-nav.
- `renderTags()` renders dynamic tags with counts.

### Step 3: [x] Add metrics tooltips to category buttons (js/script.js + css)
- Hover shows count tooltips "Constitutional (12)".

### Step 4: [x] Implement dark/light mode (css + js + html)
- CSS vars + `[data-theme="dark"]` support.
- Toggle button in header toggles ☀️/🌙.
- localStorage + prefers-color-scheme auto-detect.

### Step 5: [x] Update UI logic (js/script.js)
- Dual filter: category → tag → search working.
- Tag filter uses `s.tags.includes(currentTag)`.
- Search includes tags.

### Step 6: [✅] Test & Polish
- Reload index.html.
- Verified all filters/theme work correctly.
- Tag refinements: no All/counts, toggle logic, responsibility tags enhanced.

### Step 7: [✅] Docs & Commit
- Updated README.md with refinements.
- Tag improvements documented.

**All Steps Complete ✅**

## Final Verification:
- [x] Dual filters work (cat → tag → search)
- [x] Dark/light toggle + auto-detect
- [x] Category/tag metrics with tooltips
- [x] Tag search included
- [x] Responsive design
- [x] Accessible

**Run:** Reload `index.html` to test.

## Ready for Commit:
```
git add .
git commit -m "feat: dark mode + AI tag filters + category metrics/tooltips"
git push
```


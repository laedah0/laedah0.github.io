## `template.js`

Helpers for loading and using pre-defined message templates.

### `setTemplate(url: string): null`
Load template definitions from a JSON file and populate:

- A `<select id="templateList">` whose `onChange` calls `templateSelect(value)`
- Button groups by tag into `#favoritTemp_1` … `#favoritTemp_6`

The JSON is expected to be an array of entries: `{ tag, key, str }`.

Example:

```html
<div id="templateSelect"></div>
<div id="favoritTemp_1"></div>
<script>
  setTemplate('data/templateList_230501.json');
<\/script>
```

### `templateSelect(cmt: string): void`
Set the selected template string into `#templeteTxt` (textarea or input) and copy to clipboard.

### `clickFavoritTempBtn(index: number): void`
Insert the template string at `index` into `#templeteTxt` and copy to clipboard.


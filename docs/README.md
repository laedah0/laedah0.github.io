## MK CS Tools Documentation

This documentation covers all public/global APIs, functions, and components exposed by the project JavaScript files under `js/`.

### How to use these scripts

- Include jQuery on pages that use AJAX-based helpers or DOM utilities.
- Load the relevant scripts from the `js/` folder via `<script>` tags.
- Most functions are globals (attached to the window) and can be called directly from inline handlers or other scripts.

Example script includes:

```html
<script src="https://code.jquery.com/jquery-2.2.1.min.js"></script>
<script src="js/utils.js"></script>
<script src="js/tools.js"></script>
<script src="js/template.js"></script>
<script src="js/browserChk.js"></script>
<script src="js/autocomplete.js"></script>
```

### Modules

- [`utils.js`](./utils.md): Low-level helpers (strings, numbers, date, clipboard, radio groups)
- [`tools.js`](./tools.md): App features (orders, shipping/tracking, links, text processing)
- [`template.js`](./template.md): Template loading and selection
- [`autocomplete.js`](./autocomplete.md): Autocomplete widget API
- [`browserChk.js`](./browserChk.md): Browser and device detection helpers
- [`htmlLoader.js`](./htmlLoader.md): Simple HTML loader utilities
- [`pushbullet.js`](./pushbullet.md): SMS sending via Pushbullet API
- [`excelToJSON.js`](./excelToJSON.md): Excel parsing to JSON (XLSX)
- [`classie.js`](./classie.md): CSS class helper (third-party)

Notes:

- Large third-party/vendor bundles such as `app.js` and `map.js` are not documented here.
- Some legacy or placeholder functions are documented with caveats where applicable.


## `htmlLoader.js`

Utilities for loading HTML fragments and, in legacy code, simple HTTP helpers.

### `loadHTML(elementId: string, url: string): void`
Fetch an HTML document (via `fetch`), inject its content into the element with `elementId`, then highlight the current page link among `.codrops-demos a`.

```js
loadHTML('navigationContainer', 'navigation.html');
```

### Legacy helpers (jQuery-dependent)

These are present for historical reasons and are generally not recommended:

- `download_get(url: string): any` — Uses `$.get` and attempts to return response via `jqxhr.data` (non-standard).
- `download_post()` — Placeholder.


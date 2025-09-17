## `classie.js`

Third-party helper for CSS class manipulation. Exposes `window.classie` with the following methods:

- `classie.has(elem: Element, className: string): boolean`
- `classie.add(elem: Element, className: string): void`
- `classie.remove(elem: Element, className: string): void`
- `classie.toggle(elem: Element, className: string): void`

### Example

```js
var el = document.getElementById('target');
if (!classie.has(el, 'active')) {
  classie.add(el, 'active');
}
```


## `autocomplete.js`

Lightweight autocomplete module exposed as `autocomplete` with a single public method.

### API

`autocomplete.setAutocomplete(input: HTMLInputElement, items: Array<[string, string|number]>)`

- `input`: text input element to attach listeners to
- `items`: array of `[label, price]` pairs; matches by label prefix (case-insensitive)

Behavior:

- Shows a dropdown under the input with matching items
- Clicking an item sets the input value to the item label
- Supports keyboard navigation (↑/↓, Enter)

Example:

```html
<input id="autoInput" autocomplete="off" />
<script src="js/autocomplete.js"></script>
<script>
  var items = [["백색레일 200", 950], ["2단볼레일 250", 1200]];
  autocomplete.setAutocomplete(document.getElementById('autoInput'), items);
<\/script>
```

Styling hooks:

- Container id: `${input.id}autocomplete-list`
- List class: `autocomplete-items`
- Active item class: `autocomplete-active`


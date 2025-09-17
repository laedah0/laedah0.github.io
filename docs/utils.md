## `utils.js`

Utility functions available globally after including `js/utils.js`.

### `onlyNumber(value: string): string`
Return only digits from a string.

```js
onlyNumber('TEL +82-10-1234-5678'); // "821012345678"
```

### `copyToCB(value: string): void`
Copy text to the clipboard using a temporary `<textarea>`.

```js
copyToCB('Copied text');
```

### `pasteboard(): void`
Attempt to paste from clipboard (legacy; not supported by modern browsers). Avoid using in production.

### `isEmpty(value: any): boolean`
Check if a value is empty (`""`, `null`, `undefined`, or empty object).

```js
isEmpty('');      // true
isEmpty({});      // true
isEmpty({ a: 1 }); // false
```

### `getDateStr(date: Date): string`
Format a `Date` as `YYYY-MM-DD`.

```js
getDateStr(new Date()); // "2025-09-17"
```

### `prevMonth(months: number): string`
Return date string for N months ago, formatted `YYYY-MM-DD`.

```js
prevMonth(3); // e.g., "2025-06-17"
```

### `comma(value: string|number): string`
Add thousands separators to a number-like value.

```js
comma(1234567); // "1,234,567"
```

### `uncomma(value: string|number): string`
Remove all non-digits from a number-like string.

```js
uncomma('1,234,567원'); // "1234567"
```

### `inputNumberFormat(input: HTMLInputElement): void`
Format the input element value with thousand separators.

```html
<input oninput="inputNumberFormat(this)" />
```

### `isNumber(text: string): boolean`
Test if the string contains any numeral digit (logs to console as side effect).

### `isKO(text: string): boolean`
Test if the string contains any Korean character.

### `isEN(text: string): boolean`
Test if the string contains any English letter. Note: current regex has a stray bracket; treat results cautiously.

### `isSpecific(text: string): boolean`
Test if the string contains certain special characters.

### `setRadioGroup(name: string)` → object
Capture the checked radio value within a named radio group at construction time.

Methods:

- `checkedIndex(): number` — index of the checked radio, or `-1`
- `checkedValue(): string` — value of the checked radio, or `""`

Example:

```html
<label><input type="radio" name="shipType" value="normal" checked> Normal</label>
<label><input type="radio" name="shipType" value="long"> Long</label>
<script>
  var group = new setRadioGroup('shipType');
  console.log(group.checkedValue()); // "normal"
  console.log(group.checkedIndex()); // 0
  // Note: values are captured at creation time.
  // Recreate the object to re-read current selection if it changes later.
<\/script>
```


## `browserChk.js`

Device and browser detection utilities exposed via the global `broswer` object.

### `broswer.isMobile(): boolean`
Return true if the current user agent appears to be a mobile browser.

```js
if (broswer.isMobile()) {
  alert('모바일 환경입니다.');
}
```

### `broswer.isMobileChkPrint(isMobileChk: boolean): string`
Return a localized string indicating whether mobile/PC was detected.

```js
console.log(broswer.isMobileChkPrint(broswer.isMobile()));
```

### `broswer.getBroswerName(): string`
Return a best-effort browser name (`Chrome`, `Firefox`, `Safari`, `Opera`, `Internet Explorer`, etc.).

```js
console.log('브라우저:', broswer.getBroswerName());
```

Notes:

- The detection relies on `navigator.userAgent` heuristics; results are approximate.


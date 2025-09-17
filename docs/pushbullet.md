## `pushbullet.js`

Send SMS via Pushbullet. Requires a valid Pushbullet Access Token and a device with SMS capability.

### Configuration

Edit `js/pushbullet.js` and set:

- `PUSHBULLET_ACCESS_TOKEN` — your Pushbullet access token
- `DEVICE_IDEN` — the iden of your Android device registered with Pushbullet

### Functions

#### `formatPhoneNumber(input: HTMLInputElement): void`
Sanitize and limit to 10–11 digits as the user types.

#### `handlePhonePaste(event: ClipboardEvent): void`
Sanitize a pasted phone number to digits and limit to 11.

#### `isValidPhoneNumber(phoneNumber: string): boolean`
Validate that the number is 10–11 digits and starts with `01`.

#### `checkDeviceStatus(): Promise<boolean>`
Verify that the configured device exists, is active, and supports SMS via `GET /v2/devices`.

#### `sendSMS(): Promise<void>`
Read `#phoneNumber` and `#templeteTxt` from the page, validate input, and POST to `https://api.pushbullet.com/v2/texts`.

### Minimal example

```html
<textarea id="templeteTxt">메시지 본문</textarea>
<input id="phoneNumber" onkeyup="formatPhoneNumber(this)" onpaste="handlePhonePaste(event)" />
<button onclick="sendSMS()">전송</button>
<script src="js/utils.js"></script>
<script src="js/pushbullet.js"></script>
```

Security note: Do not commit real tokens. Consider loading them from server-side or environment-specific config.


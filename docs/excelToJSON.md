## `excelToJSON.js`

Browser-side Excel parsing helper using `XLSX.js`.

### Dependencies

Include these scripts on the page before using:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.8.0/jszip.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.8.0/xlsx.js"></script>
<script src="js/excelToJSON.js"></script>
```

### API

Constructor: `var parser = new ExcelToJSON();`

Method: `parser.parseExcel(file: File): void`

- Uses `FileReader` to read a chosen Excel file
- Converts the first sheet to an array of row objects
- Logs the JSON string to the console (adjust to suit your needs)

### Example

```html
<input type="file" accept=".xlsx,.xls" onchange="(new ExcelToJSON()).parseExcel(this.files[0])" />
```


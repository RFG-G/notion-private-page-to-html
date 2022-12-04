![Cover image](docs/cover.png)

# Private Notion Page To HTML
FORK FROM https://github.com/asnunes/notion-page-to-html

NodeJS tool to convert private notion pages to HTML.

## Supported features

Most of the native Notion blocks are currently supported:

- Headings
- Text With Decorations
- Quote
- Image
- YouTube Videos
- Code
- Math Equations
- To-do
- Checkbox
- Bulleted Lists
- Numbered Lists
- Toggle Lists
- Divider
- Callout
- Nested blocks

Embeds and tables are not supported yet.

## Basic Usage

Install it in a NodeJS project using npm

```bash
npm install notion-private-page-to-html
```

Then, just import it and paste a private Notion page id

```jsx
const NotionPageToHtml = require('notion-private-page-to-html');

// using async/await
async function getPage() {
  const { title, icon, cover, html } = await NotionPageToHtml.convert("page_Id", "notion_token");
  console.log(title, icon, cover, html);
}

getPage();
```

`cover` is a base64 string from original page cover image. `icon` can be an emoji or base64 image based on original page icon. `html` is a full html document by default. It has style, body, MathJax and PrismJS CDN scripts by default. You can pass some options to handle html content.

```jsx
NotionPageToHtml.convert(
  pageId,
  notionToken
  options
);
```

`options` is an object with the following keys

| Key                     | Default value | If true                                                |
| ----------------------- | ------------- | ------------------------------------------------------ |
| `excludeCSS`            | false         | returns html without style tag                         |
| `excludeMetadata`       | false         | returns html without metatags                          |
| `excludeScripts`        | false         | returns html without script tags                       |
| `excludeHeaderFromBody` | false         | returns html without title, cover and icon inside body |
| `excludeTitleFromHead`  | false         | returns html without title tag in head                 |
| `bodyContentOnly`       | false         | returns html body tag content only                     |

---


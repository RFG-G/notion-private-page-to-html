import { NotionPageToHtml } from './main/use-cases/notion-api-to-html';

(async () => {
    const test = await NotionPageToHtml.convert('https://www.notion.so/test-document-2679dca5108040a5864be63d528e43c6', 'secret_mkBjwPpqgZEl7WoSKdx6mynWbowsttDOOhlmICQBxfF')
    console.log(test)
})()
// export default NotionPageToHtml;
// module.exports = NotionPageToHtml;

<br>

<div align="center">
  <a href="https://omq.ai/products/contact/">
    <img width="96" height="96" src="https://omq.ai/images/icons/products/contact_96x96.svg" alt="">
  </a>
</div>

<br>

# OMQ Contact for React

[![npm][npm]][npm-url]
[![node][node]][node-url]
[![deps][deps]][deps-url]
[![size][size]][size-url]
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

OMQ Contact offers your customers the fastest support while avoiding the creation of tickets. Your contact form will be 
enhanced with OMQ's intelligent customer service software. After the message is written, OMQ’s Artificial Intelligence 
understands your customers’ concerns and directly suggests a suitable answer. With every request, the software learns 
independently thus growing constantly better.

<h2 align="center">Install</h2>

Install with npm:

```bash
npm install --save @omq.ai/omq-contact-react
```

<h2 align="center">Usage</h2>

```js
import { OmqContact }  from '@omq.ai/omq-contact-react';

function App() {
    const options = {
        analyze: '.my-input-field', // optional
        submit: '.my-submit-button', // optional
        enableCookies: true, // optional
    };

    return (
        <div className="my-app">
            <OmqContact account="OMQ_ACCOUNT_NAME"  apiKey="OMQ_CONTACT_API_KEY" options={options} />
        </div>
    );
}

export default App;
```

<h2 align="center">Options</h2>

|               Name                |         Type          | Description                              |
| :-------------------------------: | :-------------------: | :--------------------------------------- |
|          [`account`](#account)    |      `{String}`       | OMQ account name/URL                     |
|           [`apiKey`](#apiKey)     |      `{String}`       | OMQ Contact API key                      |
|           [`options`](#options)   |      `{Object}`       | OMQ Contact options                      |



#### `account`

Type: `String`

Name/URL of your OMQ account.

#### `apiKey`

Type: `String`

The API key for OMQ Contact. You can add/check your API keys in your OMQ account.
`https://{account}.omq.io`

### `options`

Type: `Object`

Options for OMQ Contact

|               Name                |         Type          | Description                              |
| :-------------------------------: | :-------------------: | :--------------------------------------- |
|       `analyze`                   |      `{String}`       | CSS selector of input field to analyze (default: `.omq-analyze`) |
|       `submit`                    |      `{String}`       | CSS selector of submit element (default: `.omq-submit) |
|       `enableCookies`             |      `{Boolean}`      | Flag to enable cookies (default: false)  |

## License

[MIT](./LICENSE)

[npm]: https://img.shields.io/npm/v/@omq.ai/omq-contact-react.svg
[npm-url]: https://www.npmjs.com/package/@omq.ai/omq-contact-react
[node]: https://img.shields.io/node/v/@omq.ai/omq-contact-react.svg
[node-url]: https://nodejs.org
[size]: https://packagephobia.now.sh/badge?p=@omq.ai/omq-contact-react
[size-url]: https://packagephobia.now.sh/result?p=@omq.ai/omq-contact-react
[deps]: https://david-dm.org/OMQ/omq-contact-react.svg
[deps-url]: https://david-dm.org/OMQ/omq-contact-react


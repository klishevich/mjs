# Using Babel and Webpack for Client

Это пример приложения, где собирается js для браузера с помощью Babel и Webpack.

1. Сначала идет обработка файлов бабелем и результат сохраняется в `.build1`.
2. Затем идет обработка вебпаком того что лежит в `.build1` и результат сохраняется в `.build2`.
3. Для того чтобы посмотреть результат, откройте в браузере `.build2/index.html`

## Installation

1. `npm i`
2. `npm run build`, это команда последовательно запускает `npm run build-babel` затем `npm run build-webpack`

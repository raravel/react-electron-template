# React Electron Typescript

This is react + electron + webpack + typescript template project.
If you wan't this project, clone project and then just run!

[![react](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png)](https://reactjs.org)
[![ts](https://miro.medium.com/max/672/1*PDoTqct9nfpAgi2XL9iTDw.jpeg)](https://www.typescriptlang.org/)
[![electron](https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Electron_Software_Framework_Logo.svg/1200px-Electron_Software_Framework_Logo.svg.png)](https://electronjs.org)
[![webpack](https://banner2.cleanpng.com/20190417/yb/kisspng-webpack-computer-icons-scalable-vector-graphics-re-webpack-svg-icon-transparent-amp-png-clipart-fre-5cb79870aa3cb3.6069044115555359846973.jpg)](https://webpack.js.org/)

## Use NPX

```sh
npx degit tree-some/react-electron-typescript <Your Project>
```

## Git Clone

```sh
git clone https://github.com/Tree-Some/react-electron-template.git <Your Project>
```

## Development

```sh
yarn dev
```

## Production Build

```sh
yarn build
```

## Project Tree

```
.
├── LICENSE
├── README.md
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── main
│   │   └── background.ts
│   └── view
│       ├── App.tsx
│       └── index.tsx
├── tsconfig.json
├── webpack.electron.config.js
└── webpack.react.config.js
```

### public

Is directory for raw html, script, assets etc.

### src/main

For electron background worker. background.ts is like [main.js](https://www.electronjs.org/docs/tutorial/first-app#electron-development-in-a-nutshell)

### src/view

You can manipulating react component in `src/view`.

### webpack config

`webpack.electron.config.js`. building `src/main` contents to `dist` directory.
`webpack.react.config.js`. bulding `src/view` contents to `dist` and run react dev server. Before run electron process.


## Description

If you run `npm run dev`, running process react webpack dev server. and then, running electron process on [nodemon](https://nodemon.io/).
I think it is an efficient way to partially operational hot reload.

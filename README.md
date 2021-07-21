# React Electron Typescript

This is [react](https://reactjs.org) + [electron](https://electronjs.org) + [webpack](https://webpack.js.org/) + [typescript](https://www.typescriptlang.org/) + [swc](https://swc.rs) template project.
If you wan't this project, clone project and then just run!


## Use NPX

```sh
npx degit raravel/react-electron-typescript <Your Project>
```

## Git Clone

```sh
git clone https://github.com/raravel/react-electron-template.git <Your Project>
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
│   └── views
│       ├── App.tsx
│       ├── Components
│       │   ├── About.tsx
│       │   └── Home.tsx
│       └── index.tsx
├── swc.electron.json
├── tsconfig.json
└── webpack.config.js
```

### public

Is directory for raw html, script, assets etc.

### src/main

For electron background worker. `background.ts` is like [main.js](https://www.electronjs.org/docs/tutorial/first-app#electron-development-in-a-nutshell)

### src/views

You can manipulating react component in `src/views`.

### webpack config

`webpack.react.config.js`. building `src/views` contents to `dist` and run electron process before react webpack dev server.


## Description

If you run `npm run dev`, running process react webpack dev server. and then, running electron process on [nodemon](https://nodemon.io/).
I think it is an efficient way to partially operational hot reload.
And by using swc, the build time of typescript is shortened.

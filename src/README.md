# hello, this is the readme-live

There are a couple of bad ways to live reload markdown I write

here's another one!

all I did is eject from
[create-react-app](https://npmjs.org/packages/create-react-app)

```
npm i -g create-react-app
create-react-app readme-live
cd readme-live
yarn add markdown-loader
emacs ./config/webpack.config.dev.js
# added markdown-loader to rules
rm ./src/*
# ... removed some files
touch ./src/index.js
emacs ./src/index.js
# loaded the markdown file
# rendered it unsafely via React
touch ./src/README.md
emacs ./src/README.md
```

then I wrote this readme withe project already!
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
touch ./README.md
emacs ./README.md
```

then I wrote this readme withe project already!


## usage

```
npm run start
```

because it's just a create-react-app clone.

Then you can change the readme file in ./src/index.js to anything

inculding ../../other-project/README.md

the url loader limit is set to 100k

if your README is longer than that, increase the limit yo!

but srsly, if your README is 100k you already knew that.
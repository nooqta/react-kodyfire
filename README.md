# Welcome to react-kodyfire 👋
![Version](https://img.shields.io/badge/version-0.0.5-blue.svg?cacheSeconds=2592000)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/nooqta/kodyfire#install-a-kody)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/nooqta/kodyfire/blob/main/LICENSE)
[![Twitter: anis\_marrouchi](https://img.shields.io/twitter/follow/anis\_marrouchi.svg?style=social)](https://twitter.com/anis\_marrouchi)

> Generate react components based on HTML templates using [Kodyfire](https://github.com/nooqta/kodyfire).

### 🏠 [Homepage](https://github.com/nooqta/kodyfire)

## Requirements

react-kodyfire requires the [kodyfire-cli](https://github.com/nooqta/kodyfire) to be installed

```sh
npm install -g kodyfire-cli
```
## Install

```sh
npm install react-kodyfire
```

## Usage

Refer to the kodyfire [install a kody](https://github.com/nooqta/kodyfire#install-a-kody) section.
Once your project is initialized and ready for kody,
generate your React concept using the `kody ride` command or manually. As an example, A declaration for a react component concept might look like the following: 
```json
{
    "name": "About",
    "template": "functional.js.template",
    "extension": "tsx",
    "isFolder": true,
    "cssModule": true,
    "outputDir": "src/components"
}
```

After adding your concept(s) definitions, run the following command to generate your assets.

```sh
kody run -s kody-react.json
```
### Available concepts 

#### `component` 

> Generates a react class

##### Params

- `name` _string_ - Component name. Default filename
- `template` _enum_ - template name to use. Only one by default.
- `extension` _enum_ - file extension. Possible values: js, ts, jsx, tsx
- `isFolder` _boolean_ - If the component will be placed in a folder. This will add an index file for imports.
- `ccsModule` _boolean_ - if a css module file should be created.
- `outputDir` _string_ - The output directory

## 📅 Future Features

- Generate `test`
- Generate `story`
- Community feedback

## Run tests

```sh
TODO
```

## Author
👤 **Anis Marrouchi**

* Website: https://noqta.tn
* Twitter: [@anis\_marrouchi](https://twitter.com/anis\_marrouchi)
* GitHub: [@anis-marrouchi](https://github.com/anis-marrouchi)
* LinkedIn: [@marrouchi](https://linkedin.com/in/marrouchi)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/anis-marrouchi/react-kodyfire/issues). 

## Show your support

Give a ⭐️ if this project helped you!

## Credits

- [kodyfire](https://github.com/nooqta/kodyfire) by [nooqta](https://github.com/nooqta) The kodyfire generator.
- [new-component](https://github.com/joshwcomeau/new-component/tree/master/src/templates) for the initial templates.

## 📝 License

Copyright © 2022 [Anis Marrouchi](https://github.com/anis-marrouchi).

This project is [MIT](https://github.com/nooqta/kodyfire/blob/main/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-kodyfire](https://github.com/nooqta/readme-kodyfire)_

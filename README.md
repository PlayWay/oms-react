# oms-react

> oms basic react lib

[![NPM](https://img.shields.io/npm/v/oms-react.svg)](https://www.npmjs.com/package/oms-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save oms-react
```

## Usage

```jsx
import React, { Component } from 'react'

import MyComponent from 'oms-react'
import 'oms-react/dist/index.css'

class Example extends Component {
  render() {
    return <MyComponent />
  }
}
```
## Компоненты

* **CustomModal** (окно с возможность перемещения(draggble), создано с помощью antd и react-draggable)

## Функции

* `ErrorAlert`(Вставляет в DOM модальное окно ошибки(сообщение, и техническое описание))
* `MessageAlert`(Вставляет в DOM,Тостер(success/info/warn/error))

----------------------

* `axiosData`(общая функция работы с Api)

## Кастомные Хуки

useRequest,useHover,useInput,useScroll,useDebounce

## AppReducer(redux-store)

Модуль redux "app"(types/reducer/actions):
`loading: { status: false, percentProgress: 0 }, init_data: {}`

## License

MIT © [Dmitriy Gridnev](https://github.com/Dmitriy Gridnev)

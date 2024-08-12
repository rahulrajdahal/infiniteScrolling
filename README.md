# [Infinite Scroller](https://github.com/rahulrajdahal/infiniteScrolling). A sample app with infinite scrolling

## 🏗 Installation

### 1. clone the repository

```sh
git clone https://github.com/rahulrajdahal/infiniteScrolling
```

### 2. Install Dependencies

#### yarn

```sh
cd infiniteScrolling && yarn install
```

### 3. Run the server

```sh
yarn start
```

### 4. Run on android

```sh
yarn android
```

#### OR

### Run on ios

```sh
yarn ios
```

## Preview

<a href="https://github.com/rahulrajdahal/infiniteScrolling">
<img src="./screenshots/splash.png?raw=true" width="375" height="812" alt='infinite scoller - splash' /></a> <img src="./screenshots/loading.jpg?raw=true" width="375" height="812" alt='infinite scoller - loading' />
<img src="./screenshots/home.jpg?raw=true" width="375" height="812" alt='infinite scoller - home' />

## 🚀 Project Structure

Inside of project [Infinite Scroller](https://github.com/rahulrajdahal/infiniteScrolling), you'll see the following folders and files:

```text
/
├── ios/
├── android/
├── assets/
│   ├── icons/
│   │   └── icon.svg
│   ├── images/
│   │   └── image.jpg
│   ├── themes/
│   │   └── colors.ts
│   │   └── sizes.ts
├── screenshots/
|   └── screenshot.png
├── src/
|   ├── components/
│   │   └── Component.tsx
|   └── screens/
│       └── Screen.tsx
└── App.tsx
└── index.js
└── README.md
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command        | Action                                                 |
| :------------- | :----------------------------------------------------- |
| `yarn install` | Installs dependencies.                                 |
| `yarn lint`    | Check all linting errors.                              |
| `yarn start`   | Starts the server at `localhost:8081`.                 |
| `yarn android` | Starts the server and opens the app on android device. |
| `yarn ios`     | Starts the server and opens the app on ios device.     |

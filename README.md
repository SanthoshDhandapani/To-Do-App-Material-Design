# ToDo App - Material Design

> **Demo**: (https://todo-app-react-2019.herokuapp.com/)\*\*

> A basic todo app without authentication or persistent storage starter.

> Then why this is here :P It is just a responsive lite weight demo app built with react 16.8.x.

> So far this project doesn't have a single class component, its fully wired using react's memo functional components. **[Material UI](https://material-ui.com/)** is really awesome to build react apps.

> State management is completely handled through **[React Hooks](https://reactjs.org/docs/hooks-intro.html)**.

- **[React](https://facebook.github.io/react/)** (16.x)
- **[Material UI](https://material-ui.com/)** (3.9.x)
- **[Webpack](https://webpack.js.org/)** (4.x)
- **[Typescript](https://www.typescriptlang.org/)** (3.x)
- **[Hot Module Replacement (HMR)](https://webpack.js.org/concepts/hot-module-replacement/)** using [React Hot Loader](https://github.com/gaearon/react-hot-loader) (4.x)
- **[[Babel]**[(http://babeljs.io/) (7.x)
- **[[Jest]**[(https://facebook.github.io/jest/) - Testing framework for React applications
- Typescript compiling using [Awesome Typescript Loader](https://github.com/s-panferov/awesome-typescript-loader) (5.x)
- Code quality (linting) for Typescript.
- Linting rules - [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) and custom rules can be defined in lint/rules

## Installation

1. Clone/download repo
2. `yarn install` (or `npm install` for npm)

## Usage

**Development**

`yarn run start-dev`

- Build app continuously (HMR enabled)
- App served @ `http://localhost:8080`

**Production**

`yarn run start-prod`

- Build app once (HMR disabled)
- App served @ `http://localhost:3000`

---

**Scripts**

| Command          | Description                                                                |
| ---------------- | -------------------------------------------------------------------------- |
| `yarn run start` | Build app continuously (HMR enabled) and runs in @ `http://localhost:3000` |
| `yarn run build` | Build app to `/build/`                                                     |
| `yarn run clean` | To clean the existing build directory                                      |
| `yarn run test`  | Run tests and gets the coverage reports in tests/coverage                  |
| `yarn run lint`  | Run Typescript linter                                                      |

**Note**: Replace `yarn` with `npm` if you use npm.

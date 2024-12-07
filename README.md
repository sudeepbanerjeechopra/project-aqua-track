# AquaTrack FrontEnd

## Short Description

`AquaTrack FrontEnd` is a convenient water tracker that allows users to register
via email/password or Google account. All data is securely stored on our server.
On the homepage, users can add, edit, and delete their water intake while
tracking their progress towards their daily goal. We automatically set a
drinking goal but also allow users to customize their recommended intake. Our
program calculates the daily percentage of water consumed and displays progress
towards the goal.

## Features

- User registration and authentication via email/password or Google account.
- Secure storage of user data on the server.
- CRUD operations for water intake tracking.
- Automatic and customizable daily water intake goals.
- Calculation and display of daily water intake percentage.
- Progress tracking towards the set goal.

## Technologies

### Core Technologies

- **Express**: Fast, unopinionated, minimalist web framework for `Node.js`.
- **MongoDB (via Mongoose)**: `MongoDB` object modeling tool designed to work in
  an asynchronous environment.
- **JWT (JSON Web Tokens)**: Compact, URL-safe means of representing claims to
  be transferred between two parties.
- **Axios**: Promise-based HTTP client for the browser and `Node.js`.
- **bcrypt**: Library to hash passwords.

### API and Validation

- **Joi**: Schema description language and data validator for `JavaScript`
  objects.
- **Swagger-jsdoc**: Allows you to write OpenAPI specs using `JSDoc` comments.
- **Swagger-ui-express**: `Swagger UI` middleware for `Express`.

### Templating

- **EJS**: Simple templating language that lets you generate `HTML` markup with
  plain `JavaScript`.

### State Management and Effects

- **Redux Toolkit**: Opinionated, batteries-included toolset for efficient Redux
  development.

### Libraries for UI

- **Material-UI**: `React` components for faster and easier web development.
- **Emotion/react**: `CSS-in-JS` library for styling `React` applications.
- **Emotion/styled**: Styled components for `Emotion`.
- **@hookform/resolvers**: Resolvers for `React Hook Form`.

### Additional Libraries

- **Cloudinary**: Image and video management in the cloud.
- **Date-fns**: Modern `JavaScript` date utility library.
- **Moment-timezone**: Timezone support for `JavaScript` Date object
  manipulation.
- **Multer**: `Node.js` middleware for handling `multipart/form-data`, primarily
  used for file uploads.
- **UUID**: Simple, fast generation of RFC4122 UUIDs.
- **@aos**: Animate on `Scroll` library.
- **clsx**: A tiny utility for constructing `className` strings conditionally.
- **overlayscrollbars**: Customizable overlay scrollbars.
- **react**: A `JavaScript` library for building user interfaces.
- **react-dom**: Entry point for `React` rendering on the web.
- **react-helmet-async**: Async version of `React Helmet`.
- **react-hook-form**: Performant, flexible and extensible forms with
  easy-to-use validation.
- **react-hot-toast**: `React` toast notifications.
- **react-i18next**: Internationalization framework for `React`.
- **react-icons**: Popular icon packs for `React` projects.
- **react-loader-spinner**: A flexible and customisable loader component for
  `React`.
- **react-modal**: Accessible modal dialog component for `React`.
- **react-redux**: Official `React` bindings for `Redux`.
- **react-responsive**: Media queries in `React` for responsive design.
- **react-router-dom**: DOM bindings for `React Router`.
- **recharts**: Redefined chart library built with `React` and D3.
- **redux-persist**: Persist and rehydrate a Redux store.
- **yup**: `JavaScript` schema builder for value parsing and validation.
- **vite**: Next generation frontend tool that sets up quickly.

## Developers

- [@KristinaHranovska](https://github.com/KristinaHranovska) - implementation of
  `WelcomeSection`, `registration`, `authentication`, `Google` authentication,
  password `recovery`, international `localization` addition, `animations`
- [@izzwerg](https://github.com/izzwerg) - implementation of `UserSettingsModal`
- [@Me1nychuk](https://github.com/Me1nychuk) - implementation of `MonthInfo`
  component, display of `statistical` water consumption data per month,
  `onboarding` functionality for new users, assistance in token refresh
  implementation, data updates using `Redux`
- [@Olena-Ihnatenko](https://github.com/Olena-Ihnatenko) - `LogOut` modal window
- [@anastasiia-kushch](https://github.com/anastasiia-kushch) - implementation of
  static part of `AdvantagesSection`, display of registered users count
- [@sno0wi](https://github.com/sno0wi) - implementation of `DailyInfo` component
- [@Sw1tlana](https://github.com/Sw1tlana) - implementation of `WaterModal`
  (addition and editing)
- [@peychma](https://github.com/peychma) - implementation of `DeleteWaterModal`
- [@bezkagoit](https://github.com/bezkagoit) - implementation of `WaterMainInfo`
  component
- [@Rybailo](https://github.com/Rybailo) - implementation of `UserPanel`
  component

## Links

- [GitHub Repository BackEnd](https://github.com/KristinaHranovska/node-rest-api)
- [GitHub Repository FronEnd](https://github.com/KristinaHranovska/project-aqua-track)
- [Swagger UI](https://aqua-track-api.onrender.com/api-docs)
- [Live link](https://project-aqua-track.vercel.app)

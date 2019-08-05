**Live demo**: click [here](https://movie-chat-app-lucasbesen.herokuapp.com/)

## :hammer: &nbsp; How to run the code

First, you need to configure your `.env`. I put a default config on `.env.test`:

```sh
cp .env.test .env
```

Then just run the following command:

```sh
yarn start
```

## :gear: &nbsp; Explanation of architecture
```
/app // Root
--/src
----/components // Dump, common and UI components
----/container // Smart components (Routes components)
----/core // App configurations (Redux and Firebase)
----/utils // Some utils and helpers
```

## :wrench: &nbsp; Tests
Tests are available by running the following command:
```sh
yarn test a
```

# react-app-playground

[![Greenkeeper badge](https://badges.greenkeeper.io/claireparker/react-app-playground.svg)](https://greenkeeper.io/)

This is a trivial app built using `create-react-app` that I can use to faff around with React.

I've also added Greenkeeper to it in order to keep up-to-date with the latest releases - but this means it has to be public instead of private.

The app isn't best practice - it's like my interactive notebook of how to do things in a React app.

## Yarn

I'm using Yarn to install and handle dependencies for no particular reason.

`yarn upgrade-interactive` is a cool way to update packages.

## Prettier

Either add a `.prettierrc` file in the project root or you can also have one in the root of your machine. It can look like this:

```
{
    "useTabs": false,
    "tabWidth": 4,
    "singleQuote": true,
    "trailingComma": "es5"
}
```

I've put a command in `package.json` but haven't added Husky because Atom is currently formatting on save for me anyway.

# Spike using React for Mosica

![mosica][mosica]

## Getting Started!

As we explain in [this post](https://medium.com/coding-stones/experimentos-con-angularjs-y-arquitectura-hexagonal-b6fc489df0ef) and in [this post](https://medium.com/coding-stones/experimento-con-ionic-2-y-arquitectura-hexagonal-434320a64293), 
we didn't want to duplicate the core logic of the mosica project, so we decided to create a [mosica-core](https://github.com/codingstones/mosica-core) universal project to be shared by all of our experiments.

You need to clone [this project](https://github.com/codingstones/mosica-core) as mosica-core so it will be referenced from the package.json of the current project.

``` bash
### Dependencies
$ yarn 
or
$ npm run install

### Testing
- yarn test
or
- npm run test

### Visual regression Testing
- yarn chromatic
or
- npm run chromatic

### StoryBook:
- yarn storybook
or
- npm run storybook

### Running app
- yarn start
or 
- npm run start
```

[mosica]: ./art/mosica.gif

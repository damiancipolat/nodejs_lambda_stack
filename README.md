<img src="https://github.com/damiancipolat/nodejs_lambda_stack/blob/master/doc/logo.png?raw=true" width="150px" align="right" />

# Node.js AWS - Lambda stack
This repository was created to be used as a template for future projects.

### Scaffolding:

This modules are used in this project.

- Deploy: Serverless framework.
- Test: Jest
- Lint: es-lin / airbnb
- Config: https://www.npmjs.com/package/config

**Environments**:

The project is ready to work with 3 environments (dev / stage / production).

**Configuration**:

In the **/config** folder there are five files with a configuration schema to be used in the project: `dev.json`, `stage.json`, `production.json`, `default.json` and custom-environment-variables.json.

- default.json: Use this file when NODE_ENV = "".
- dev.json: Use this file when NODE_ENV = dev.
- stage.json: Use this file when NODE_ENV = stage.
- production.json: Use this file when NODE_ENV = production.


### Install:
```sh
```

### Command List:
```sh
#To check es-lint rules:
npm run check

#To run unit test and coverage:
npm test

#To run deploy:
npm run deploy
```

### To use as template:
```sh
```

### What is functional programming (FP)?:

In computer science, functional programming is a programming paradigm—a style of building the structure and elements of computer programs—that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data. It is a declarative programming paradigm in that programming is done with expressions or declarations instead of statements. In functional code, the output value of a function depends only on its arguments, so calling a function with the same value for an argument always produces the same result. This is in contrast to imperative programming where, in addition to a function's arguments, global program state can affect a function's resulting value. Eliminating side effects, that is, changes in state that do not depend on the function inputs, can make understanding a program easier, which is one of the key motivations for the development of functional programming.

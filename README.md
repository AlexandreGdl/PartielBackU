<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Norme

Here is the files tree after `entity-name` entity was generated :

```
src/
	↳ entity-name/
		↳ interfaces/
    	↳ entity-name.interface.ts
		↳ schemas/
			↳ entity-name.schema.ts
   	↳ entity-name.controller.ts
   	↳ entity-name.service.ts
   	↳ entity-name.module.ts
   	
```

## Routes

Here are all the created and usable route created so far for the API

🔒 : routes accessible from authenticated users.

👑 : routes accessible from authenticated admins.

### User

- **POST** /user/register

### Auth

- **POST** /auth/login




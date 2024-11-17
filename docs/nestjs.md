# nestjs

- https://nestjs.com/
- DTO Data Transfer Object
- Entity - DB Table
- ParseIntPipe
- class-validator
  - IsString()
  - IsNotEmpty()
  - IsEnum()
- class-transformer
- https://console.neon.tech/
- https://www.prisma.io/

```bash
npm install -g @nestjs/cli
nest new project-name

# npx nest g resource [module-name]
npx nest g resource users

# To start the application
npm run start

# To watch for changes in your files
npm run start:dev

# Lint and autofix with eslint
$ npm run lint

# Format with prettier
$ npm run format
```

```
src
|
+--app.controller.spec.ts
|
+--app.controller.ts
|
+--app.module.ts
|
+--app.service.ts
|
+--main.ts
```

|           key            |                                                     description                                                     |
| :----------------------: | :-----------------------------------------------------------------------------------------------------------------: |
|   `app.controller.ts`    |                                       A basic controller with a single route.                                       |
| `app.controller.spec.ts` |                                         The unit tests for the controller.                                          |
|     `app.module.ts`      |                                         The root module of the application.                                         |
|     `app.service.ts`     |                                        A basic service with a single method.                                        |
|        `main.ts`         | The entry file of the application which uses the core function `NestFactory` to create a Nest application instance. |

## Controllers

- Controller's function's params' order doesn't matter


### Method Decorators

### [Route wildcards](https://docs.nestjs.com/controllers#route-wildcards)

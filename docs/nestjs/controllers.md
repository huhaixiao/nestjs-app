# Controllers

- Controllers are responsible for handling incoming **requests** and returning **responses** to the client.

## Class Decorators

### Sub-Domain Routing

```ts
@Controller({ host: ':account.example.com' })
export class AccountController {
  @Get()
  getInfo(@HostParam('account') account: string) {
    return account;
  }
}
```

## Handler Decorators

|    key     |                  description                  |
| :--------: | :-------------------------------------------: |
|   `@Get`   |                                               |
|  `@Post`   |                                               |
|   `@Put`   |                                               |
| `@Delete`  |                                               |
| `@Pathch`  |                                               |
| `@Options` |                                               |
|  `@Head`   |                                               |
|   `@All`   | defines an endpoint that handles all of them. |

### [Route wildcards](https://docs.nestjs.com/controllers#route-wildcards)

```ts
@Get('ab*cd')
findAll() {
  return 'This route uses a wildcard';
}
```

### Redirection

```ts
@Redirect('https://nestjs.com', 301)
```

### Route parameters

```ts
@Get(':id')
findOne(@Param() params: any): string {
  console.log(params.id);
  return `This action returns a #${params.id} cat`;
}
```

## Handler Param Decorators

|            key            |             description             |
| :-----------------------: | :---------------------------------: |
|         `@Req()`          |                `req`                |
|         `@Res()`          |                `res`                |
|         `@Next()`         |               `next`                |
|       `@Session()`        |            `req.session`            |
|  `@Param(key?: string)`   |  `req.params` / `req.params[key]`   |
|   `@Body(key?: string)`   |    `req.body` / `req.body[key]`     |
|  `@Query(key?: string)`   |   `req.query` / `req.query[key]`    |
| `@Headers(name?: string)` | `req.headers` / `req.headers[name]` |
|          `@Ip()`          |              `req.ip`               |
|      `@HostParam()`       |             `req.hosts`             |

### Request payloads

```ts
@Post()
async create(@Body() createCatDto: CreateCatDto) {
  return 'This action adds a new cat';
}
```
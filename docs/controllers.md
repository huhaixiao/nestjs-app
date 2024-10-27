# Controllers

- Controllers are responsible for handling incoming **requests** and returning **responses** to the client.

```ts title="cats.controller.ts"
import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}
```

```shell
nest g controller [name]
```

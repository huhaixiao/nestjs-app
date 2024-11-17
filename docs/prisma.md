# prisma

```shell
npx prisma init
# fix Module '"@prisma/client"' has no exported member 'PrismaClient'
# fix DATABASE_URL not found
npx prisma generate

npx prisma init
# first migration
npx prisma migrate dev --name init
npx prisma migrate dev --name name_change
npx prisma generate
```

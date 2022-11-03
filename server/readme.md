# NLW COPA

Para criar uma migration crie uma .env e coloque nela o codigo:

```javascript
DATABASE_URL = "file:./dev.db";
```

Depois rode o comando

```bash
npx prisma migrate dev
```

Para abrir o studio do prisma, rode:

```bash
npx prisma studio
```

Para gerar uma seed no prisma, rode:

```bash
npx prisma db seed
```

## Entidade de Relacionamento

![Tabela de entidade](prisma/ERD.svg)

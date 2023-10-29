## MANUAL API

# Gerando o token de acesso:

- POST http://localhost:3000/login

JSON:

```javascript
{
	"user":"admin",
	"pass":"admin"
}
```

Autenticação via Bearer Token.

# Exemplo de consulta

Realizar consulta de entidades:

- GET http://localhost:3000/entidades

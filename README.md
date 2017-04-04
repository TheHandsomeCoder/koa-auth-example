# blog-koa-jwt
**Description**
This repository contains a an example code for an api with koa-router and protected by koa-jwt.

- Public routes:
 - POST /login returns the jwt token if the good password has been sent (In this demo it is "password" for everyone)

- Protected route:
 - TBC

To be able to access the protected route, a user should:

- Send a post request on /login with the good password to get a jwt token as a cookie response. Payload: `{"password": "password"}`

**Instalation**
After Cloning the repository, run:
```
npm install
npm start
```

The application is listening to the port 3000

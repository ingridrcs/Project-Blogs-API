const express = require('express');
const errorMiddleware = require('./middlewares/error');

const loginRoute = require('./routes/loginRoute');
const userRoute = require('./routes/userRoute');
// ...

const app = express();

app.use(express.json());
app.use('/', loginRoute);
app.use('/', userRoute);

app.use(errorMiddleware);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;

const express = require('express');
const longinRouter = require('./routes/loginRouter');
const userRouter = require('./routes/userRoter');
// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/login', longinRouter);
app.use('/user', userRouter);
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;

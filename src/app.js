const express = require('express');
const carRoutes = require('./routes/carRoutes');
const app = express();
const port = 3000;

app.use(express.json());
app.use('/cars', carRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

module.exports = app;

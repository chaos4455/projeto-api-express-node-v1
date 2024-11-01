const express = require("express");
const app = express();
const port = 3000;
const carRoutes = require("./routes/carRoutes");

app.use(express.json());
app.use("/cars", carRoutes);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));

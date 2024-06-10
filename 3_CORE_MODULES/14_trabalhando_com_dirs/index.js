const fs = require("fs");

if (!fs.existsSync("minhapasta")) {
  console.log("Não existe, criando...");
  fs.mkdirSync("minhapasta");
} else {
  console.log("Já existe, ignorando...");
}

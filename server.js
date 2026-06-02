const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
  // Rota principal: entrega o arquivo index.html
  if (req.url === '/' || req.url === '/index.html') {
    fs.readFile(path.join(__dirname, 'index.html'), (err, content) => {
      if (err) {
        res.statusCode = 500;
        res.end('Erro interno ao carregar a página.');
        return;
      }
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.end(content);
    });
  } else {
    // Caso tente acessar outra rota não existente
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('Página não encontrada.');
  }
});

server.listen(PORT, () => {
  console.log(`Servidor ativo em http://localhost:${PORT}`);
});

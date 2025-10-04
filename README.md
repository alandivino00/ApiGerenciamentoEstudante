# ApiGerenciamentoEstudante

1. Para teste, foi executado no terminal do vscode o comando:   
node ./api.js
2. Para cadastra um estudante foi usado no power shel:
Invoke-RestMethod -Uri "http://localhost:3000/students" -Method POST -Body '{"name":"joao","grade":7}' -ContentType "application/json"
3. Para obter a lista de estudante com o nome e a primeira letra que nao se repete, foi executado no power shel o comando:
Invoke-RestMethod -Uri "http://localhost:3000/students" -Method GET
(ou visto ao abrir http://localhost:3000/students no navegador com a api rodando depois do cadastro)

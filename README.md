# ApiGerenciamentoEstudante

## Especificação
1. Crie uma API simples com as rotas: \
POST /students: cadastra um estudante com nome e nota (0 a 10) \
GET /students: retorna uma lista com os estudantes cadastrados (exibindo id, nome e nota) \
GET /students/:id: retorna os dados de um estudante específico pelo id (id, nome, nota \
2. Requisitos:
O armazenamento pode ser feito em memória (array, lista) ou em banco de dados, conforme a preferência do candidato \
Deve validar se a nota está entre 0 e 10 \
Deve funcionar com pelo menos 3 registros diferentes \
Para toda rota GET, adicionar um campo que retorna a primeira letra do nome que não se repete. Se todas as letras se repetirem, retornar `` _ ``. \
​​Exemplo: Se houver um estudante chamado "Gabriel", a letra não repetida do nome é 'g'. Se houver um estudante chamado "Anna", todas as letras se repetem, então o valor retornado deve ser `` _ ``.****

## Testes
1. Para teste, foi executado no terminal do vscode o comando:   
node ./api.js
2. Para cadastra um estudante foi usado no power shel: \
Invoke-RestMethod -Uri "http://localhost:3000/students" -Method POST -Body '{"name":"joao","grade":7}' -ContentType "application/json"
3. Para obter a lista de estudante com o nome e a primeira letra que nao se repete, foi executado no power shel o comando: \
Invoke-RestMethod -Uri "http://localhost:3000/students" -Method GET \
\
(ou visto ao abrir http://localhost:3000/students no navegador com a api rodando depois do cadastro)

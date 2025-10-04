// Importando o Express
import express from "express";

// Criando uma instância do Express
const app = express();

app.use(express.json());

// Definindo a porta do servidor
const PORT = 3000;

let students = [];
let nextId = 1;

// Função auxiliar: primeira letra não repetida
function firstUniqueLetter(name) {
  name = name.toLowerCase();
  for (let i = 0; i < name.length; i++) {
    if (name.indexOf(name[i]) === name.lastIndexOf(name[i])) {
      return name[i];
    }
  }
  return "_";
}

//Rota Post - cadastra estudante
app.post("/students", (req, res) => {
  const { name, grade } = req.body;

  if (grade < 0 || grade > 10) {
    return res.status(400).json({ error: "A nota deve estar entre 0 e 10" });
  }

  const newStudent = { id: nextId++, name, grade };
  students.push(newStudent);

  res.status(201).json(newStudent);
});

// GET /students - lista todos os estudantes
app.get("/students", (req, res) => {
  const result = students.map(s => ({
    id: s.id,
    name: s.name,
    grade: s.grade,
    firstUniqueLetter: firstUniqueLetter(s.name)
  }));
  res.json(result);
});


// Iniciando o servidor
app.listen(PORT, () => console.log(`O servidor está rodando na porta ${PORT}`));
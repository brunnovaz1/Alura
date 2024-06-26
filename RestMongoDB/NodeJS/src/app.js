import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
//import livro from "./models/Livro.js";                         //executado agora pelo controller
import routes from "./routes/index.js";                         //agora esse executa 


const conexao = await conectaNaDatabase()

conexao.on("error", (erro) => {
    console.error("erro de conexao", erro)              //se tiver algum erro, ele chegara como parametro e ira imprimir
})
conexao.once("open", () => {
    console.log("conexao com o banco feita com sucesso!")
})


const app = express();
//app.use(express.json())      //middleware -> tem acesso as req/res converte em json(chegaram pelo body como string) e faz acoes com os objetos  //executado pelo index.js
routes(app);
/* const livros = [
    {
        id: 1,
        titulo: "O Senhor dos Aneis"    //desnecessário apos integracao com o banco
    },
    {
        id: 2,
        titulo: "Seven"
    }
] 

function buscaLivro(id) {
    return livros.findIndex(livro => {           //funcao que fará a busca
        return livro.id === Number(id)
    })
}
*/

/* app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js");   //executado pelo index.js
}) */

/* app.get("/livros", async(req, res) => {           //executado em routes
    const listaLivros = await livro.find({})        //padrao após banco, find metodo mongoose que vai buscar tudo dentro da colecao livros //executado em controller
    //res.status(200).json(livros);                  resposta tipo json
    res.status(200).json(listaLivros);               //executado em controller
}) */

/* app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id)        //params -> prop do obj req; 
    res.status(200).json(livros[index])
})

app.post("/livros", (req, res) => {
    livros.push(req.body);
    //res.status(201).send("Livro cadastrado com sucesso!")             //chamadas feitas no controller
})

app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros)
}) */

/* app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);                                  //index = o id que foi procuraro, 1 = deletar apenas 1 elemento
    res.status(200).send("Livro removido!");
}); */

export default app;






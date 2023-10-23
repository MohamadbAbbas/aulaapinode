//Criando o index.js
//CRIAÇÃO DE UMA APLICAÇÃO EXPRESS
const express = require('express'); //IMPORTANTO EXPRESS (ASSIM SE COLOCA O 'EXPRESS' NO 'REQUIRE')

const path = require('path'); //IMPORTANDO O 'PATH'
// O 'PATH' RETORNA O CAMINHO DE FORMA DINÂNICA

const app = express();
// O 'APP' IRÁ RECEBER O EXPRESS E TODAS SUAS DEPENDÊNCIAS

const router = express.Router()
// ISSO PERMITE QUE A GENTE CRIE DIFERENTES "urls" E ENDPOINTs PARA QUE O "FRONTEND" POSSA FAZER CHAMADAS

router.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname + '/pages/home.html'))
})

// AQUI DEFINIMOS NOSSSA ROTA PARA O ARQUIVO html USANDO O path PARA SEMPRE RETONAR DINAMICAMENTE O Q VEM ANTES DA "/pages;home.html"
// TUDO Q SE ENCONTRA DEPOIS DA BARRA "/" SERÃO NOSSAS ROTAS

app.use(router);
// APÓS DECLARAR NOSSAS ROTAS, AQUI FALAMOS PARA NOSSO app USAR ELAS COMO REFERÊNCIA


app.listen(3333, ()=>{
    console.log('SERVIDOR RODANDO')
})
// AQUI DEFINIMOS QUEM IRÁ ESCUTAR NOSSO CHAMADO E NOS RESPONDER






app.get('/hello', (req, res)=>{
  console.log('GET FUNCIONANDO');
  res.send({message: 'Hello World!!!'})
})
//Dentro do get já definimos uma função anonima CALLBCK, que receba uma requisição com o REQUEST e que retorna uma resposta REPLAY
app.get('/usuario', (req,res) =>{
    console.log('GET USUÁRIO FUNCIONANDO');
    res.send({usuario:"SANDRO"});
})
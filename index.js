const express = require('express');
const res = require('express/lib/response');
const { usuario } = require('./models');
const jwt = require('jsonwebtolken');
const { expressjwt: expressJWT } = require('express-jwt');
const cors = require('cors');
const { cookie } = require('express/lib/response');
const app = express();
const cookieParse = require('cookie-parse');

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app .use(express.static('public'));
app.use(cors());
app.use(cookieParse());

app.get('/', async function(req, res){
  // var resultado = await usuario.findAll();
  // res.json(resultado);
})

app.get('/autenticar', async function(req, res){
    res.render("autenticar")
});

app.post('/logar', async function(req, res) {

  if (req.body.login == "jorge@gmail.com" && req.body.password == "123123"){
  res.json("Login efetuado");

  } else {
  res.json("Erro na Senha ou no Usuário")

  }

})

app.post('/deslogar', async function(req, res){
})

app.post('/inscrever', async function(req, res){
})

app.listen(3000, function() {
  console.log('App na porta 3000!')
})

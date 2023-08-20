var express = require("express")
var app = express();
var router = express.Router();
var HomeController = require("../controllers/HomeController");
var UserController = require('../controllers/UserController');
var AdminAuth = require("../middleware/AdminAuth");

// Rota para a página inicial
router.get('/', HomeController.index);

// Rota para criar um novo usuário
router.post('/user', UserController.create);

// Rota para listar todos os usuários (requer autenticação de administrador)
router.get('/user', AdminAuth, UserController.index);

// Rota para encontrar um usuário específico pelo ID (requer autenticação de administrador)
router.get("/user/:id", AdminAuth, UserController.findUser);

// Rota para editar um usuário (requer autenticação de administrador)
router.put("/user", AdminAuth, UserController.edit);

// Rota para remover um usuário pelo ID (requer autenticação de administrador)
router.delete("/user/:id", AdminAuth, UserController.remove);

// Rota para solicitar recuperação de senha
router.post("/recoverpassword", UserController.recoverPassword);

// Rota para alterar a senha do usuário
router.post("/changepassword", UserController.changePassword);

// Rota para fazer login
router.post("/login", UserController.login);

// Rota para authenticar Adms
router.post("/validate",AdminAuth,HomeController.validate)

module.exports = router;
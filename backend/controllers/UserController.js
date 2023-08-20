const User = require("../models/User");
const PasswordToken = require("../models/PasswordToken")
const jwt = require("jsonwebtoken");

var secret = "agagagagag"

var bcrypt = require("bcrypt");

class UserController{

    async index(req,res){
       var users = await User.findAll();
       res.json(users);
    }

    async findUser(req,res){
        var id = req.params.id;
        var user = await User.findById(id);
        if(user == undefined){
            res.status(404);
            res.json({});
        }else{
            res.json(user);
        }
    }

    async create(req,res){
       var {name, email, password} = req.body;

       if(name == undefined || name == '' || name == " "){
        res.status(400);
        res.json({err:'Nome inválido'})
        return;
       }
       if(email == undefined || email == '' || email == " "){
        res.status(400);
        res.json({err:'Email inválido'});
        return;
       }

       var emailExist = await User.findEmail(email);
        if(emailExist){
            res.status(406)
            res.json({err: "O email já está cadastrado!"})
            return;
        }
       
       await User.new(name, email, password)

       res.status(200);
       res.send('Tudo Ok!')
    }
    async edit(req,res){
        var {id, name, email, role} = req.body;
        var result = await User.update(id, email, name, role)
        if(result != undefined){
            if(result.status){
                res.send("Tudo ok!")
            }else{
                res.status(406);
                res.json(result.err)
            }
        }else{
            res.status(406);
            res.send("Ocorreu um erro no servidor!")
        }
    }
    async remove(req,res){
        var id = req.params.id;

        var result = await User.delete(id);

        if(result.status){
            res.status(200);
            res.send("Tudo ok!")
        }else{
            res.status(406);
            res.send(result.err)
        }
    }
    async recoverPassword(req,res){
        var email = req.body.email;
        var result = await PasswordToken.create(email)
        if(result.status){
            res.send("" + result.token);
           // NodeMailer.send()
        }else{
            res.status(406);
            res.send(result.err)
        }
    }

    async changePassword(req,res){
        var token = req.body.token;
        var password = req.body.password;
        var isTokenValid = await PasswordToken.validate(token);
        if(isTokenValid.status){
           await User.changePassword(password, isTokenValid.token.user_id, isTokenValid.token.token)
            res.send("Senha alterada")
        }else{
            res.status(406);
            res.send("token inválido")
        }
    }

    async login(req,res){
        var{email, password} = req.body;
        var user = await User.findByEmail(email);

        if(user!= undefined ){
          var result = await bcrypt.compare(password, user.password)
          if(result){
            var token = jwt.sign({email: user.email, role: user.role }, secret);
            res.status(200);
            res.json({token: token});
          }else{
            res.status(406)
            res.json({err: "Senha Incorreta!"})
          }
        }else{
            res.status(406);
            res.json({status: false, err: 'Usuário não existe'})
        }
    }
}

module.exports = new UserController();


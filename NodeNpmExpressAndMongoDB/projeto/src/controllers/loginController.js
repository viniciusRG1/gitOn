const Login = require('../models/LoginModel');
const bcryptjs = require('bcrypt');


exports.index = (req, res) => {
    if(req.session.user){
        return res.render('loginLogado');
    }
    return res.render('login');
}

exports.register = function(req, res){
    try{
        const login = new Login(req.body);
    login.register();
    if(login.errors.length > 0) {
        req.flash('errors', login.errors);
        req.session.save(function() {
            return res.redirect('back');
        });
        return;
    }
    req.flash('success', 'seu usuário foi criado');
    req.session.user = login.user;
    req.session.save(function(){
        return res.redirect('back');
    });
    }catch(e){
        console.log(e);
        return res.render('404');
    }  
};

exports.login = async function(req, res){
    try{
        const login = new Login(req.body);
        await login.login();
    if(!login.user) {
        req.flash('errors', login.errors);
        req.session.save(function() {
            return res.redirect('back');
        });
        return;
    }
    req.flash('success', 'voce está on');
    req.session.user = login.user;
    req.session.save(function(){
        return res.redirect('back');
    });
    }catch(e){
        console.log(e);
        return res.render('404');
    }  
};

exports.logout = function(req,res){
    req.session.destroy();
    res.redirect('back');
}
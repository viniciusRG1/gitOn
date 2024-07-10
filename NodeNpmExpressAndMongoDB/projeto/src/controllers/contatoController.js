const Contato = require('../models/contatoModel');

exports.index = (req,res) => {
    res.render('contato', {
        contato:{}
    });  
};

exports.register = async (req, res) => {
    try{
        const contato = new Contato(req.body);
        await contato.register();
        if(contato.errors.lenght > 0) {
            req.flash('errors',contato.errors);
            req.session.save(() => res.redirect('back'));
            return;
        }
        req.flash('succes', 'contato registrado');
        req.session.save(() => res.redirect(`/contato/index/${contato.contato._id}`));
        return;
    }catch(e){
        console.log(e);
        return res.render(404);
    }   
};

exports.editIndex = async function(req, res) {
    if(!req.params.id)return res.render('404');
    const user = await Contato.buscaPorId(req.params.id);
    if(!user) return res.render('404');
    res.render('contato', {
        Contato
    });
};

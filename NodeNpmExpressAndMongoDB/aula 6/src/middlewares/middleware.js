module.exports = (req, res,next) => {
    if(req.body.cliente){
        req.body.cliente = req.body.cliente.repalce('miranda', 'NÃO USE MIRANDA');
        console.log('atualização no ${req.body.clente}');
    }
    next();
}
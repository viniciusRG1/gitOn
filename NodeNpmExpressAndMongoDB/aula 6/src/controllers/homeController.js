exports.pagInit = (req, res, next) => {
    res.render('index');
    next();
};

exports.trataPost = (req, res, next) => {
    res.send('nova rota');
}
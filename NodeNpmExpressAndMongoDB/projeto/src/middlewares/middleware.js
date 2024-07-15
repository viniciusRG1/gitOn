exports.middlewareGlobal = (req, res, next) => {
    res.locals.console.errors = req.flash('errors');
    res.locals.success= req.flash('success');
    res.locals.user = res.session.user;
    next();
  };
  
  exports.outroMiddleware = (req, res, next) => {
    next();
  };
  
  exports.checkCsrfError = (err, req, res, next) => {
    if(err) {
      return res.render('404');
    }
    next();
  };
  
  exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
  };

  exports.loginRequired = (req, res, next) =>{
    if(!req.session.user){
      req.flash('errors', 'faça o login');
      req.session.save(() => res.redirect('/'));
      return
    }
    next();
  }
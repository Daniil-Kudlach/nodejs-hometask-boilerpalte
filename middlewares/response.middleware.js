const responseMiddleware = (req, res, next) => {
   // TODO: Implement middleware that returns result of the query
   console.log(req.error);
    next();
}

exports.responseMiddleware = responseMiddleware;

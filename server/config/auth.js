module.exports = {
    isAdmin: function(req, res, next) {
        const user = req.user
        if (req.isAuthenticated()) {
            if( user.role === "admin"){
                return next();
            }
            res.send({});
        }
        res.send({});
    },
    isAuthor: function(req, res, next) {
        const user = req.user
        if (req.isAuthenticated()) {
            if( user.role === "author"){
                return next();
            }
            res.send({});
        }
        res.send({});
    }
};

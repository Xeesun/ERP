  
const jwt = require('jsonwebtoken');

exports.ROLES = {
    ADMIN: 'admin',
    STUDENT: 'student',
    STAFF: 'staff'
}

exports.checkAuth = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Authentication failed'
        });
    }
};

exports.userAuth = (role) => {
    return (req, res, next) => {

        if(!role.includes(req.user.role)){

            console.log(req.user.role, role)
            return res.status(401).json({ 
                message: 'You are not Authorized'
            })
        }
        next()
    }
}

import jwt from "jsonwebtoken";
//JWT Token verification
let authinticate = (req, res, next) => {
    if(!req.headers.authorization){
        return res.status(401).send("Unauthorized Request");
    }

    let token = req.headers.authorization.split(" ")[1];

    if(token === null) {
        return res.status(401).send("Unauthorized Request");
    }

    let payload = jwt.verify(token, process.env.JWT_KEY);
    if (!payload) {
        return res.status(401).send("Unauthorized Request");
    }

    req.user = payload.user;
    next();
}

export default authinticate;
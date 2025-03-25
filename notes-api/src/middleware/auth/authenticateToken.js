import jwt from "jsonwebtoken";
const authConfig = {
    accessTokenSecret: 'secret_key',
    refreshTokenSecret: 'secret_key'
};

const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];
    if (!token) {
        return res.status(401).json({ error: 'Access token required' });
    }

    jwt.verify(token, authConfig.accessTokenSecret, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Invalid or expired access token' });
        }

        req.user = user; // Add user information to request object
        next(); // Proceed to the next middleware/route handler
    });
};

export {
    authenticateToken
};
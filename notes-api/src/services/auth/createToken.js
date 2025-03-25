import jwt from "jsonwebtoken";

const authConfig = {
    accessTokenSecret: 'secret_key',
    refreshTokenSecret: 'secret_key'
};

const generateAccessToken = user => {
    return jwt.sign(user, authConfig.accessTokenSecret, { expiresIn: '900m' });
}

const generateRefreshToken = user => {
    return jwt.sign(user, authConfig.refreshTokenSecret, {expiresIn: '7d'});
}

const createToken = user => {
    const accessToken = generateAccessToken(user)
    const refreshToken = generateRefreshToken(user);
    return { accessToken, refreshToken };
}

export {
    createToken,
    generateAccessToken,
    generateRefreshToken
}
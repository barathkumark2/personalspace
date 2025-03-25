import { generateAccessToken } from "./createToken.js";

const authConfig = {
    accessTokenSecret: 'secret_key',
    refreshTokenSecret: 'secret_key'
};

const refreshAccessToken = (req, res) => {
    const refreshToken = req.body.refreshToken; // Assume refresh token is sent in the body
    
    if (!refreshToken) {
      return res.status(401).json({ error: 'Refresh token required' });
    }
  
    // Verify the refresh token
    jwt.verify(refreshToken, authConfig.refreshTokenSecret, (err, user) => {
      if (err) {
        return res.status(403).json({ error: 'Invalid or expired refresh token' });
      }
      
      // Generate a new access token
      const newAccessToken = generateAccessToken(user);
      res.json({ accessToken: newAccessToken });
    });
  }
  
export { 
    refreshAccessToken
};
  
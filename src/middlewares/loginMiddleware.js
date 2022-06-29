const { authenticateToken } = require('../utils/jwt');

const authenticateMiddleware = async (req, res, next) => {
const token = req.headers.authorization;
const user = await authenticateToken(token);
if (!user) {
  const error = { status: 400, message: 'Token not found' };
    throw error;
}
res.locals.user = user;
next();
};
module.exports = authenticateMiddleware;
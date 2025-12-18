const jwt = require("jsonwebtoken");

const authMiddleware = (roles = []) => {
  return (req, res, next) => {
    try {
      // Get token from cookie or Authorization header
      const token = req.cookies?.token || req.headers.authorization?.split(" ")[1];

      if (!token) {
        return res.status(401).json({ success: false, message: "No token provided" });
      }

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

      // Role-based access check
      if (roles.length && !roles.includes(decoded.role)) {
        return res.status(403).json({ success: false, message: "Forbidden: Insufficient role" });
      }

      // Attach decoded payload to request
      // decoded contains { id, role }
      req.user = { id: decoded.id, role: decoded.role };

      next();
    } catch (err) {
      return res.status(401).json({ success: false, message: "Invalid or expired token" });
    }
  };
};

module.exports = authMiddleware;
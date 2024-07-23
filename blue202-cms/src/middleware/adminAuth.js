module.exports = (req, res, next) => {
    // Ensure the user is authenticated
    if (req.isAuthenticated()) {
        // Check if the user has the 'admin' role
        if (req.user && req.user.role === 'admin') {
            return next();
        } else {
            return res.status(403).json({ message: 'Access denied: Admins only' });
        }
    } else {
        return res.status(401).json({ message: 'Unauthorized: Please log in' });
    }
};

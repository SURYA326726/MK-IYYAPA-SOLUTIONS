const login = async (req, res) => {
    try {
        const { name, mobile } = req.body;
        
        // Validation: Verify both fields are provided
        if (name && mobile) {
            // Generate session expiry (1 minute from now)
            const expiresIn = 1 * 60 * 1000; // 1 minute in ms
            const expiryTime = Date.now() + expiresIn;

            return res.status(200).json({ 
                message: "Login successful",
                user: { 
                    mobile,
                    token: 'mock-session-token-' + Date.now(),
                    expiry: expiryTime
                }
            });
        } else {
            return res.status(401).json({ message: "Invalid credentials. Please provide Name and Mobile Number." });
        }
    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = {
    login
};

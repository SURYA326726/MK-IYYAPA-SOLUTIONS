const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Hardcoded validation as requested
        // default username as test@test.com
        // password is Aabb@3344
        if (email === "test@test.com" && password === "Aabb@3344") {
            return res.status(200).json({ 
                message: "Login successful",
                user: { email: email } 
            });
        } else {
            return res.status(401).json({ message: "Invalid credentials" });
        }
    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = {
    login
};

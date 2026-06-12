const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("DevOps CI/CD Node.js API is running");
});

app.get("/health", (req, res) => {
    res.json({
        status: "success",
        message: "API is healthy"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
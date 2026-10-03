const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const users = [{ email: "demo@example.com", password: "password123" }];

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send("Email and password are required.");
  }
  if (!email.includes("@") || !email.includes(".")) {
    return res.status(400).send("Invalid email format.");
  }
  if (password.length < 8) {
    return res.status(400).send("Password must be at least 8 characters.");
  }

  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    return res.send("Login successful. Welcome, " + email + "!");
  } else {
    return res.status(401).send("Login failed for user: " + email);
  }
});

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`),
);

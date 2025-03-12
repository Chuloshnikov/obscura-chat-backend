import express from "express";

const router = express.Router();

router.post("/sign-up", (req, res) => {
    res.send("signout route");
});

router.post("/login", (req, res) => {
    res.send("signout route");
});

router.post("/logout", (req, res) => {
    res.send("signout route");
});

export default router;
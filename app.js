const express = require("express");
const user = require("./models/user");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("¡Hola Mundo otra vez!"));

app.get(
    "/products", 
    (req, res) => {
        const products = [
            {
                id:1,
                name:"hammer"
            },
            {
                id:2,
                name:"screwdriver"
            },
            {
                id:3,
                name:"wrench"
            }
        ];
        res.json(products);
        console.log(products);
    }
);

const { User } = require("./models");

app.get("/users", isAuthorized, async (req, res) => {
    const users = await User.findAll();

	res.json(users);
});

function isAuthorized(req, res, next) {
    const auth = req.headers.authorization;
    if (auth === "secretWords") {
        next();
    } else {
        res.status(401);
        res.send("¡No, puedes, pasar!…¡Corred insensatos!")
    }
}

app.listen(port, () => console.log(`Ejemplo de escucha en puerto ${port}`));
const http = require("http");

http.get(
    {
        port: 3000,
        hostname: "localhost",
        path: "/users",
        headers: {}
    },
    (res) => {
        console.log("Conectado!");
        res.on("data", (chunk) => {
            console.log("Peazo vuelcadatos!", "" + chunk);
        });
        res.on("end", () => {
            console.log("No hay más datos!");
        });
        res.on("close", () => {
            console.log("Cerrando conexión, valedeu!");
        });
    }
);
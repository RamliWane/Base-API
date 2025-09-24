const express = require('express');

const UserRoutes = require('./routes/users');

const app = express();


// app.use("/", (req, res, next) => {
    //     res.send("Hello World");
    // });

    
app.use("/users", UserRoutes);
    
app.get("/", (req, res) => {
    res.send("Hello GET");
});

app.post("/", (req, res) => {
    res.send("Hello POST");
});

app.listen(4000, () => {
    console.log('Server berjalan di port 4000');
});

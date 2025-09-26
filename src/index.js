const express = require('express');

const UserRoutes = require('./routes/users');

const LogsRequestMiddleware = require('./middleware/logs');

const app = express();


app.use(LogsRequestMiddleware.LogsRequest);

    
app.use("/users", UserRoutes);
    
app.get("/pertama", (req, res) => {
    res.json({
        message: "Ramli silawane",
        Email : "ramlisilawane865@gmail.com"
    })
});

app.post("/", (req, res) => {
    res.send("Hello POST");
});

app.listen(4000, () => {
    console.log('Server berjalan di port 4000');
});

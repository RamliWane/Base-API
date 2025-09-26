const express = require('express');

const UserRoutes = require('./routes/users');

const LogsRequestMiddleware = require('./middleware/logs');

const app = express();


app.use(LogsRequestMiddleware.LogsRequest);

app.use(express.json());

app.use("/users", UserRoutes);


app.listen(4000, () => {
    console.log('Server berjalan di port 4000');
});

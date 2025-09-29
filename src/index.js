    require('dotenv').config()
    
    const express = require('express');
    
    const PORT = process.env.PORT || 5000;
    
    const UserRoutes = require('./routes/users');
    
    const LogsRequestMiddleware = require('./middleware/logs');
    

    const app = express(); 

    app.use(LogsRequestMiddleware.LogsRequest);
    app.use(express.json());

    app.use("/users", UserRoutes);


    app.listen(PORT, () => {
        console.log(`Server berjalan di port ${PORT}`);
    });

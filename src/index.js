    const express = require('express');
    
    
    const UserRoutes = require('./routes/users');
    
    const LogsRequestMiddleware = require('./middleware/logs');
    

    const app = express(); 

    app.use(LogsRequestMiddleware.LogsRequest);
    app.use(express.json());

    app.use("/users", UserRoutes);

    app.use('/', (req, res) => {
        dbPool.execute('SELECT * FROM users', (err, rows) => {
            if(err) {
                res.json({
                    message : "terjadi kesalahan",
                })
            }
            res.json({
                message: "berhasil koneksi ke database",
                data: rows,
            })

        })
    });


    app.listen(4000, () => {
        console.log('Server berjalan di port 4000');
    });

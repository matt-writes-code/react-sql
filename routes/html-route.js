module.exports = (app, connection) => {
    app.get('/', (req, res) => {

        connection.query('SELECT * FROM new_table ORDER BY id ASC', (err, data) => {
            (err) ? res.send(err) : res.json(data);
        })

        // proves that an initial route is created
        // res.send('You managed to create a route!');
    })
}


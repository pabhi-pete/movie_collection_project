const app = require('./src/app');
const pool = require('./src/pool');

pool.connect({
    host: 'localhost',
    port: 5432,
    database: 'socialnetwork',
    user: '',
    password: ''
})
    .then(() => {
        app().listen(3005, () => {
            console.log('Listening to port 3005....');
        });
    })
    .catch((err) => console.log(err));


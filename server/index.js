const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');
const routes = require('./routes/index.js');
const config = require('./config/config.js');

const app = express();
const port = 8080;

require('./config/passport')(passport);
const auth = require('./routes/auth')(passport);

// Connect to MongoDB
try {
    mongoose
        .connect(
            config.database.url,
            { useNewUrlParser: true ,useUnifiedTopology: true},
            () => {}
        )
    console.log('Database connected');
} catch (e) {
    console.log(e);
}

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
});

app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true
}));
app.use(cookieParser('mySecretKey'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: 'mySecretKey',
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', routes);
app.use('/auth', auth);


app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});

const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{ 

    res.render('index', {title: "first Website" });
});

router.get('/contac', (req, res) =>{ 

    res.render('contac', {title: "contact page" });
});

router.get('/login', (req, res) =>{ 

    res.render('login', {title: "login page" });
});

router.get('/rutas', (req, res) =>{ 

    res.render('rutas', {title: "rutas page" });
});


module.exports = router;
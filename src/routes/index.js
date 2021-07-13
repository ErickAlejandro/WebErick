//Aqui se agregan las rutas que se desea tener en el WebSite.

const express = require('express');
const router = express.Router();


router.get('/', (req, res) =>{
    res.render('index.html', {title: 'Home'});
});

router.get('/contact', (req, res) =>{
    res.render('contact.html', { title: 'Contact Page'});
});

router.get('/aboutme', (req, res) =>{
    res.render('aboutme.html', { title: 'Aboutme Page'});
});

router.get('/galery', (req, res) =>{
    res.render('galeria.html', { title: 'Galery Page'});
})

module.exports = router;

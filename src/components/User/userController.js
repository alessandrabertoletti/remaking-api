var express = require('express');
var router = express.Router();
var Usuario = require('./user')
router.post('/', (req, res) => {
    let e = new Usuario({
        name: req.body.name,
        birthDate: req.body.birthDate,
        gender: req.body.gender,
        email: req.body.email,
        cpf: req.body.cpf
    });
    e.save((err, estud) => {
        if(err)
            res.status(500).send(err);
        else
            res.status(200).send(estud);
    })
})
router.get('/', (req, res) => {
    Usuario.find().exec((err, est) => {
        if(err)
            res.status(500).send(err);
        else
            res.status(200).send(est);
    })
})
router.delete('/:id', (req, res) => {
    Usuario.deleteOne({_id:req.params.id}, (err) => {
        if(err)
            res.status(500).send(err);
        else
            res.status(200).send({});
    })
})
router.patch('/:id', (req, res) => {
    Usuario.findById(req.params.id, (err, est) => {
        if (err)
            res.status(500).send(err);
        else if (!est)
            res.status(404).send({});
        else {
            est.name = req.body.name,
            est.birthDate = req.body.birthDate,
            est.gender = req.body.gender,
            est.email = req.body.email,
            est.cpf = req.body.cpf
            est.save((err, est)=>{
                if (err)
                    res.status(500).send(err);
                else
                    res.status(200).send(est);
            })
        }
    })
})
    module.exports = router;
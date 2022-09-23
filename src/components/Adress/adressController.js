var express = require('express');
var router = express.Router();
var Adress = require('./adress')
router.post('/', (req, res) => {
    let e = new Adress({
        city: req.body.city,
        state: req.body.state,
        street: req.body.street,
        district: req.body.district,
        zipCode: req.body.zipCode
    });
    e.save((err, estud) => {
        if (err)
            res.status(500).send(err);
        else
            res.status(200).send(estud);
    })
})
router.get('/', (req, res) => {
    Adress.find().exec((err, est) => {
        if (err)
            res.status(500).send(err);
        else
            res.status(200).send(est);
    })
})

router.delete('/:id', (req, res) => {
    Adress.deleteOne({ _id: req.params.id }, (err) => {
        if (err)
            res.status(500).send(err);
        else
            res.status(200).send({});
    })
})
router.patch('/:id', (req, res) => {
    Adress.findById(req.params.id, (err, est) => {
        if (err)
            res.status(500).send(err);
        else if (!est)
            res.status(404).send({});
        else {
            est.city = req.body.city,
                est.state = req.body.state,
                est.street = req.body.street,
                est.district = req.body.district,
                est.zipCode = req.body.zipCode
            est.save((err, est) => {
                if (err)
                    res.status(500).send(err);
                else
                    res.status(200).send(est);
            })
        }
    })
})
module.exports = router;
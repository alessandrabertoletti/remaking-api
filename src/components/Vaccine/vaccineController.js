var express = require('express');
var router = express.Router();
var Vaccine = require('./vaccine')
router.post('/', (req, res) => {
    let e = new Vaccine({
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        validity: req.body.validity,
        doseLot: req.body.doseLot,
        dateVaccination: req.body.dateVaccination,
        nextDose: req.body.nextDose
    });
    e.save((err, estud) => {
        if (err)
            res.status(500).send(err);
        else
            res.status(200).send(estud);
    })
})
router.get('/', (req, res) => {
    Vaccine.find().exec((err, est) => {
        if (err)
            res.status(500).send(err);
        else
            res.status(200).send(est);
    })
})

router.delete('/:id', (req, res) => {
    Vaccine.deleteOne({ _id: req.params.id }, (err) => {
        if (err)
            res.status(500).send(err);
        else
            res.status(200).send({});
    })
})
router.patch('/:id', (req, res) => {
    Vaccine.findById(req.params.id, (err, est) => {
        if (err)
            res.status(500).send(err);
        else if (!est)
            res.status(404).send({});
        else {
            est.name = req.body.name,
            est.manufacturer = req.body.manufacturer,
            est.validity = req.body.validity,
            est.doseLot = req.body.doseLot,
            est.dateVaccination = req.body.dateVaccination,
            est.nextDose = req.body.nextDose,
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
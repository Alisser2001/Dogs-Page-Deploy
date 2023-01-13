const { Dog, Temperament } = require('../db.js');

const postDog = async (req, res) => {
    try {
        const {
            name,
            minHeight,
            maxHeight,
            minWeight,
            maxWeight,
            life_span,
            temperament,
            image,
            createdInDb
        } = req.body;
        let dogExist = await Dog.findOne({
            where: {"name": name}
        })
        if(dogExist){
            return res.status(404).send(`The race ${name} already exists`)
        }
        let dogCreate = await Dog.create({
            name,
            minHeight,
            maxHeight,
            minWeight,
            maxWeight,
            life_span,
            image
        });
        let temps = temperament.split(', ');
        temps.forEach(temp => {
            Temperament.findOrCreate({
                where: { "name": temp }
            })
        });
        let tempsDB = await Temperament.findAll({
            where:
            {
                "name": temps
            }
        })
        tempsDB.forEach(el => {
            dogCreate.addTemperament(el)
        });
        res.status(200).send(`The race ${name} has been created`)
    } catch (err) {
        res.status(404).send(err);
    }
}
module.exports={postDog}
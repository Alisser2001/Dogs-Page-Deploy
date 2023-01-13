const getInfo  = require('./getInfo');
const { Dog, Temperament } = require('../db.js');

const getDogID = async (req, res) => {
    try {
        const { id } = req.params;
        const myRegEx = /([a-zA-Z]+([0-9]+[a-zA-Z]+)+)/;
        if (myRegEx.test(id)){
            let dogId = await Dog.findAll({
                where: {"id": id},
                include: {
                    model: Temperament,
                    attributes: ['name'],
                    through: {
                        attributes: []
                    }
                }
            })
            dogId.length ?
                res.status(200).send(dogId) :
                res.status(200).send("The dog has no been found")
        } else if (parseInt(id)){
            let allDogs = await getInfo.getApiInfo();
            let dogId = allDogs.filter(dog => parseInt(dog.id) === parseInt(id));
            dogId.length ?
                res.status(200).send(dogId) :
                res.status(200).send("The dog has no been found")
        } else {
            let allDogs = await getInfo.getAlldogs();
            res.status(200).send(allDogs)
        }
    } catch (err) {
        res.status(404).send(err)
    }
}
module.exports={getDogID}
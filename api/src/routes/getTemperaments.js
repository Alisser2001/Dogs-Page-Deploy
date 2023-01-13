const getInfo  = require('./getInfo');
const { Temperament } = require('../db.js');

const getTemperaments = async (req, res) => {
    try {
        const apiInfo = await getInfo.getApiInfo();
        const tempsArr = await apiInfo.map(dog => dog.temperament);
        const temperaments = tempsArr.map(tempArr => {
            if (tempArr !== null) {
                let temp = String(tempArr).split(', ');
                for (let i = 0; i < temp.length; i++) {
                    return temp[i]
                }
            }
        })
        const temperamentsUniques = [...new Set(temperaments)];
        temperamentsUniques.forEach(temp => {
            Temperament.findOrCreate({
                where: { "name": temp }
            })
        })
        const allTemps = await Temperament.findAll();
        res.status(200).send(allTemps);
    } catch (err) {
        res.status(404).send(err);
    }
}
module.exports={getTemperaments}
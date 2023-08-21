const getInfo  = require('./getInfo');

const getDog = async (req, res) => {
    try {
        const { name } = req.query;
        const allDogs = await getInfo.getAlldogs();
        if (name) {
            const allDogsName = await allDogs.filter(el => el.name.toLowerCase().includes(name.toLowerCase()));
            allDogsName.length ?
                res.status(200).send(allDogsName) :
                res.status(400).send(`The race ${name} has not been found`)
        } else {
            return res.status(200).send(allDogs)
        }
    } catch (err) {
        console.log(err)
        return res.status(404).send(err);
    }
}
module.exports={getDog}
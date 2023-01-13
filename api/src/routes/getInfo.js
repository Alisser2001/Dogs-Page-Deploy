const axios = require('axios');
const db = require('../db.js');
const apiUrl = 'https://api.thedogapi.com/v1/breeds';
const { Dog, Temperament } = require('../db.js');

const getApiInfo = async () => {
    const dogs = await axios.get(apiUrl);
    const races = await dogs.data.map((dog) => {
        return {
            id: dog.id,
            name: dog.name,
            minHeight: dog.height.metric.split(" - ")[0],
            maxHeight: dog.height.metric.split(" - ")[1],
            minWeight: dog.weight.metric.split(" - ")[0],
            maxWeight: dog.weight.metric.split(" - ")[1],
            life_span: dog.life_span,
            image: dog.image.url,
            temperament: dog.temperament
        }
    });
    return races;
}

const getDBInfo = async () => {
    return await Dog.findAll({
        include: {
            model: Temperament,
            attributes: ['name'],
            //El atributo through en este caso especifica
            //Qué valores unicamente queremos de la tabla temperament
            through: {
                attributes: []
            }
        }
    })
}
/*Tener en cuenta: getDBinfo y getAPIinfo traen la propiedad temperaments en formato diferente
Pues getDBinfo la trae de una tabla aparte de dogs y viene con este formato:
        "temperaments": [
            {
                "name": "Cheerful"
            },
            {
                "name": "Alert"
            },
            {
                "name": "Intelligent"
            },
            {
                "name": "Protective"
            }
        ]
Por su parte, getAPIinfo la trae en un String:
        "temperament": "Bold, Independent, Confident, Intelligent, Courageous"
*/

const getAlldogs = async () => {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDBInfo();
    const allDogs = apiInfo.concat(dbInfo);
    return allDogs;
}

module.exports = {getAlldogs, getApiInfo, getDBInfo}
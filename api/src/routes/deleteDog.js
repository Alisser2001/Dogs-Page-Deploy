const { Dog } = require('../db.js');

const deleteDog = async (req, res) => {
    try{
        const {id} = req.params;
        Dog.destroy({
            where: {
                "id": id
            }
        });
        res.status(200).send("The dog has been deleted");
    }catch(err){
        res.status(404).send(err)
    }
}
module.exports={deleteDog}
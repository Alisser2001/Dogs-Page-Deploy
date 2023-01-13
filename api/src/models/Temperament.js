const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    //No definimos el id ya que al hacer ñas relaciones este se creará por sí solo
    sequelize.define('temperament', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
};

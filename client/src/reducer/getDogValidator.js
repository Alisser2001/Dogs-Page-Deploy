export default function getDogValidator(dogsArr){
    dogsArr.forEach(el => {
        if (!el.temperament && el.temperaments) {
            el.temperament = el.temperaments.map(temp => temp.name).join(", ")
        }
        if (el.temperament === undefined) {
            el.temperament = "Undefined"
        }
        if (isNaN(el.minWeight)) {
            el.minWeight = "1"
        }
        if (isNaN(el.maxWeight)) {
            el.maxWeight = "10"
        }
        if (!el.maxHeight) {
            el.maxHeight = (parseInt(el.minHeight) + 5).toString()
        }
        if (!el.image) {
            el.image = "https://img.freepik.com/foto-gratis/amistoso-perro-basenji-inteligente-dando-su-pata-cerca-aislado-blanco_346278-1626.jpg?w=2000"
        }
    })
    return dogsArr;
}
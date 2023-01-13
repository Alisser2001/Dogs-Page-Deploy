export default function sortValidator({type, order, allDogs}){
    let orderDogs;
    if(type==="weight"){
        if(order==="asce"){
            orderDogs = allDogs.sort(function (a, b) {
                if (parseInt(a.minWeight) > parseInt(b.minWeight)) {
                    return 1
                }
                if (parseInt(b.minWeight) > parseInt(a.minWeight)) {
                    return -1
                }
                return 0
            });
        }
        if(order==="desc"){
            orderDogs = allDogs.sort(function (a, b) {
                if (parseInt(a.minWeight) > parseInt(b.minWeight)) {
                    return -1
                }
                if (parseInt(b.minWeight) > parseInt(a.minWeight)) {
                    return 1
                }
                return 0
            });
        }
    }
    if(type==="name"){
        if(order==="asce"){
            orderDogs = allDogs.sort(function (a, b) {
                if (a.name > b.name) {
                    return 1
                }
                if (b.name > a.name) {
                    return -1
                }
                return 0
            });
        }
        if(order==="desc"){
            orderDogs = allDogs.sort(function (a, b) {
                if (a.name > b.name) {
                    return -1
                }
                if (b.name > a.name) {
                    return 1
                }
                return 0
            });
        }
    }
    return orderDogs
}
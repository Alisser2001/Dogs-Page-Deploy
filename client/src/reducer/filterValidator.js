export default function filterValidator({type, allDogs, value}){
    let filterDogs;
    if(type==="temps"){
        if(value==="All"){
            filterDogs = allDogs
        } else {
            filterDogs = allDogs.filter(dog => {
                return dog.temperament.split(", ").includes(value)
            });
        }
    }
    if(type==="creation"){
        if(value==="All"){
            filterDogs = allDogs;
        }else if(value==="Created"){
            filterDogs = allDogs.filter(dog => dog.createdAt);
        } else if(value==="Existing"){
            filterDogs = allDogs.filter(dog => !dog.createdAt);
        }
    }
    return filterDogs
}
changer = (obj) => {
    posibilities = ["", 1, null]
    generated_objects =[]
    generated_objects.push(obj)
    for (posibility in posibilities){
        for (attr in obj){
            //if type string
            obj[attr]=posibility
            generated_objects.push(obj)
        }
    }
    return generated_objects;
}

module.exports = changer;

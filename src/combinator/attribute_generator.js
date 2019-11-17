const posibilities = ["", 1, null]
let generated_objects = []

function isObject(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
};
function iterationCopy(src) {
    let target = {};
    for (let prop in src) {
        if (src.hasOwnProperty(prop)) {
            // if the value is a nested object, recursively copy all it's properties
            if (isObject(src[prop])) {
                target[prop] = iterationCopy(src[prop]);
            } else {
                target[prop] = src[prop];
            }
        }
    }
    return target;
}

changer = (obj) => {
    generated_objects.push(obj)
    for (var attr in obj) {
        //if type string
        for (var posibility of posibilities.values()) {
            let copy = iterationCopy(posibility)
            copy[attr] = posibility
            generated_objects.push(copy)
        }
    }
    return generated_objects;
}

module.exports = changer 
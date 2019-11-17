const string_posibilities = ["", 1, null]
const number_posibilities = ["", "1", null]

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
    let generated_objects = []
    generated_objects.push(obj)
    for (var attr in obj) {
        let posibilities;
        switch (typeof obj[attr]) {
            case 'string':
                posibilities = string_posibilities;
                break;
            case 'number':
                posibilities = number_posibilities;
                break;
        }
        for (var posibility of posibilities.values()) {
            let copy = iterationCopy(obj)
            copy[attr] = posibility
            generated_objects.push(copy)
        }
    }
    return generated_objects;
}

module.exports = changer 
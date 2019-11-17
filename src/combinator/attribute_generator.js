const string_possibilities = ["", 1, null]
const number_possibilities = ["", "1", null]
const boolean_possibilities = ["", "false", null]
const obj_possibilities = ["", {}, null]
const array_possibilities = ["", [], null]

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
        let possibilities;
        switch (typeof obj[attr]) {
            case 'string':
                possibilities = string_possibilities;
                break;
            case 'number':
                possibilities = number_possibilities;
                break;
            case 'boolean':
                possibilities = boolean_possibilities;
                break;
            case 'object':
                try {
                    obj[attr].sort();
                    possibilities = array_possibilities;
                } catch{
                    possibilities = obj_possibilities;
                }
                break;
        }
        for (var possibility of possibilities.values()) {
            let copy = iterationCopy(obj)
            copy[attr] = possibility
            generated_objects.push(copy)
        }
    }
    return generated_objects;
}

module.exports = changer 
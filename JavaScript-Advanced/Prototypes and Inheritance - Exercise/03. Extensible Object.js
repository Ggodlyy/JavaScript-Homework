function extensibleObject() {
    let proto = {};
    let extObj = Object.create(proto);

    extObj.extend = function (template) {
        for (let key in template) {
            if (typeof template[key] === 'function') {
                let proto = Object.getPrototypeOf(extObj);
                proto[key] = template[key];
            } else {
                extObj[key] = template[key];
            }
        }
    }

    return extObj;
}

const myObj = extensibleObject();

const template = {
    extensionMethod: function () { },
    extensionProperty: 'someString'
}
myObj.extend(template);

console.log(Object.getPrototypeOf(myObj).hasOwnProperty('extensionMethod'))


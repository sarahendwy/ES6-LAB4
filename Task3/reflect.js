//      Day4 
//      Task4

/*  1   Reflect.get()--> reads a property value.       */

let user = { name: "Sarah" };
let handlerG = {
    get(target, prop) {
        return Reflect.get(target, prop);
    }
}
let proxy = new Proxy(user, handlerG);

console.log(proxy.name); // Sarah



/*  2    Reflect.set()--> sets a property value      */

let obj = { //object of all test cases
    x: 5,
    y: 10
}
let handelerS = {
    set(target, prop, value) {
        if (Reflect.has(target, prop)) {
            if (prop == 'x') {
                if (value >= 5 && value < 30) {
                    return Reflect.set(target, prop, value)
                } else {
                    throw 'wrong value for x'
                }
            } else if (prop == 'y') {
                if (value > -5 && value < 10) {
                    return Reflect.set(target, prop, value)
                } else {
                    throw 'wrong value for y'
                }
            }
        } else {
            throw 'non-exist property'
        }
    }
}


let myProxy = new Proxy(obj, handelerS)

myProxy.x = 20
console.log(obj.x) //20



/* 3     Reflect.has()--> checks whether a property exists.      */

let handlerH = {
    has(target, prop) {
        return Reflect.has(target, prop)
    }
}

let myProxyH = new Proxy(obj, handlerH)

console.log('x' in myProxyH) // true
console.log('z' in myProxyH) // false


/*  4    Reflect.deleteProperty()--> deletes a property.     */

let handlerD = {
    deleteProperty(target, prop) {
        return Reflect.deleteProperty(target, prop)
    }
}

let myProxyD = new Proxy(obj, handlerD)

delete myProxyD.x
console.log(obj) // { y: 10 }


/*  5    Reflect.ownKeys()-->returns all property names.     */
let handlerO = {
    ownKeys(target) {
        return Reflect.ownKeys(target)
    }
}

let myProxyO = new Proxy(obj, handlerO)

console.log(Reflect.ownKeys(myProxyO)) // [ 'y']


/*  6    Reflect.getOwnPropertyDescriptor()-->gets details about one property.       */
let handlerDes = {
    getOwnPropertyDescriptor(target, prop) {
        return Reflect.getOwnPropertyDescriptor(target, prop)
    }
}

let myProxyDes = new Proxy(obj, handlerDes)

console.log(Reflect.getOwnPropertyDescriptor(myProxyDes, 'y')) //{value: 10, writable: true, enumerable: true, configurable: true}


/*   7   Reflect.defineProperty()-->creates or changes a property.     */
let handlerDef = {
    defineProperty(target, prop, descriptor) {
        console.log("defining", prop)
        return Reflect.defineProperty(target, prop, descriptor)
    }
}

let myProxyDef = new Proxy(obj, handlerDef)

Reflect.defineProperty(myProxyDef, 'z', {
    value: 100,
    writable: true,
    enumerable: true,
    configurable: true
})

console.log(obj.z) // 100


/*  8    Reflect.getPrototypeOf()-->gets the prototype of the object.        */
let handlerProp = {
    getPrototypeOf(target) {
        return Reflect.getPrototypeOf(target)
    }
}

let myProxyProp = new Proxy(obj, handlerProp)

console.log(Reflect.getPrototypeOf(myProxyProp)) //{__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}


/*  9    Reflect.setPrototypeOf()-->changes the prototype of the object.     */
let proto = {
    display() {
        console.log("hello")
    }
}

let handlerSprop = {
    setPrototypeOf(target, protoObj) {
        return Reflect.setPrototypeOf(target, protoObj)
    }
}

let myProxySprop = new Proxy(obj, handlerSprop)

Reflect.setPrototypeOf(myProxyProp, proto)
obj.display() // hello


/*  10    Reflect.isExtensible()-->checks if new properties can still be added.       */
let handlerE = {
    isExtensible(target) {
        return Reflect.isExtensible(target)
    }
}

let myProxyE = new Proxy(obj, handlerE)

console.log(Reflect.isExtensible(handlerE)) // true


/*  11    Reflect.preventExtensions()-->stops adding new properties.      */
var handlerPrev = {
    preventExtensions(target) {
        return Reflect.preventExtensions(target)
    }
}

var myProxyPrev = new Proxy(obj, handlerPrev)

Reflect.preventExtensions(myProxyPrev)

console.log(Reflect.isExtensible(obj)) // false


/*  12    Reflect.apply()-->calls a function.     */
function sum(a, b) {
    return a + b
}

let handlerApply = {
    apply(target, thisArg, args) {
        return Reflect.apply(target, thisArg, args)
    }
}

/*                                      
target --> the original function                     
thisArg --> the value of `this` inside the function   
args --> array of arguments passed to the function 
*/

let myProxyApply = new Proxy(sum, handlerApply)

console.log(myProxyApply(3, 4)) // 7


/*  13    Reflect.construct()-->works like new with a constructor function.       */
function Point(x, y) {
    this.x = x
    this.y = y
}

let handlerCon = {
    construct(target, args) {
        return Reflect.construct(target, args)
    }
}

let myProxyCon = new Proxy(Point, handlerCon)

var p = new myProxyCon(5, 7)
console.log(p.x) // 5
console.log(p.y) // 7
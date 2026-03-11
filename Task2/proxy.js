//      Day4
//      Task2
//      Proxy

let user = {
    name: "Sarah",
    address: "Giza",
    age: 28,
};

let handelerS = {
    set(target, prop, value) {
        {
            if (Reflect.has(target, prop)) {
                if (prop == 'name') {
                    if (value.length == 7) {
                        return Reflect.set(target, prop, value)
                    } else {
                        throw 'The string must hava only 7 characters'
                    }
                }
                if (prop == 'address') {
                    if (typeof value === "string") {
                        return Reflect.set(target, prop, value)
                    } else {
                        throw 'The address is must be string '
                    }
                }
                if (prop == "age") {
                    if (value >= 25 && value <= 60) {
                        return Reflect.set(target, prop, value)
                    } else {
                        throw 'The age is not in the range '
                    }
                }
            } else {
                throw 'non-exist property'
            }
        }
    }
}


let myProxy = new Proxy(user, handelerS)

myProxy.age = 20
console.log(user.age) 
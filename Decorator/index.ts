
/**
 * Decorators
 */




function split(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value
    console.log(target, propertyKey, descriptor)
    descriptor.value = function (...args: any[]) {
        // arg[0] = arg[0].split('')
        const [arg] = args
        const argSplitted = arg.split('')
        originalMethod.apply(this, [argSplitted])
    }
}

function reverse(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value
    console.log(target, propertyKey, descriptor)
    descriptor.value = function (...args: any[]) {
        // arg[0] = arg[0].split('')
        const [arg] = args
        const argSplitted = arg.reverse()
        originalMethod.apply(this, [argSplitted])
    }
}

// decorator factory
function join(char: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value
        console.log(target, propertyKey, descriptor)
        descriptor.value = function (...args: any[]) {
            const [arg] = args
            const argSplitted = arg.join(char)
            originalMethod.apply(this, [argSplitted])
        }
    }
}

// function join(target:any,propertyKey:string ,descriptor:PropertyDescriptor){
//     const originalMethod =descriptor.value
//     console.log(target,propertyKey,descriptor)
//     descriptor.value = function(...args:any[]){
//         // arg[0] = arg[0].split('')
//         const [arg] = args
//         const argSplitted = arg.join('')
//         originalMethod.apply(this,[argSplitted])
//     }
// }
class StringManager {
    @split
    @reverse
    @join('')
    print(str: string) {
        // Split
        //reverse
        //join
        console.log(str)
    }
}


const stringManager = new StringManager();

stringManager.print("Hello")
// @ts-nocheck
function useCache(func: Function){
    const results = {}

    return (...args): any => {
        const key: string = args.join('')

        if(results[key] !== undefined) return results[key]
        
        const res = func(...args)
        
        results[key] = res

        return res
    }
}

export default useCache

// NOTE: Example
// function power(a, b){
//     return a**b
// }

// const cachedPow = useCache(power)

// console.time('pint')
// console.log(cachedPow(3,5))
// console.timeEnd('pint')

// console.time('square')
// console.log(cachedPow(3,2))
// console.timeEnd('square')


// console.time('cache-pint')
// console.log(cachedPow(3,5))
// console.timeEnd('cache-pint')
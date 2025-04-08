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
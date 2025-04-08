import { useCallback, useEffect, useRef } from "react"

function useDebounce(func: any, time: number = 0, deps: any[] = []): Function {
    const timeout = useRef<number>(0)

    useEffect(() => {
        return () => {
            clearTimeout(timeout.current)
        }
    }, [timeout])

    return useCallback((...args: any) => {

        clearTimeout(timeout.current)

        return new Promise((resolve, reject) => {
            timeout.current = setTimeout(() => {
                try {
                    const result = func(...args)

                    resolve(result)
                } catch(e) {
                    reject(e)
                }
            }, time)
        })
    }, deps)

}

export default useDebounce


import { useCallback, useState } from "react"

const useHttp = (applyData) => {
    const [status, setStatus] = useState(undefined)

    const sendRequest = useCallback(async (url, settings) => {

        try {
            setStatus('pending')
            const response = await fetch(url, {
                    method: settings.method ? settings.method : 'GET',
                    headers: {'Content-Type': 'application/json'},
                    body: settings.data ? settings.data : null
                }
            )
            
            if(!response.ok) {
                setStatus('error')
                throw new Error('Unable to fetch data')
            }

             const data = await response.json()
             setStatus('success')
             applyData(data)
        } catch (e) {
            console.log(e)
        }

    }, [applyData])

    return {
        status: status,
        sendRequest: sendRequest
    }
}

export default useHttp
import {useEffect, useState} from "react";
import {axiosData} from "../api/axios";

export function useRequest({
                               url,
                               method = 'GET',
                               params = null,
                               timeout = 5000,
                               headers = {}
                           },lazy = false) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (!lazy) {
            fetchData()
        }
    }, [])

    async function fetchData() {
        setLoading(true)
        const {response:fetchRes,loading:fetchLoading,error:fetchError} = await axiosData({url, method, params, timeout, headers})
        setData(fetchRes)
        setLoading(fetchLoading)
        setError(fetchError)
    }



    // custom hook returns value
    return {data, error, loading,fetchData};
}
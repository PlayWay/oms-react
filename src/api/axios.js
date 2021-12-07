import axios from 'axios';
import {store} from "../store/store";
import {UPDATE_PROGRESS_LOADING} from "../store/app/actionTypes";
import Text from "antd/es/typography/Text";
import {Space} from "antd";
import ErrorAlert from "../components/ui/ErrorAlert/ErrorAlert";

export async function axiosData({
                                    url,
                                    method = 'GET',
                                    params = null,
                                    timeout = 5000,
                                    headers = {},
                                    isNeedErrorAlert = true
                                }) {
    let response = null
    let error = ''
    let loading = true

    try {
        const publicPath = '/OMS/api/v1'

        axios.defaults.publicPath = publicPath

        if (!publicPath) {
            throw 'publicPath undef'
        }
        let res = null
        let axiosParams = {
            baseURL: publicPath,
            responseType: "json",
            // withCredentials: true,
            timeout: 5000,
            headers,
            onDownloadProgress: progressEvent => {
                const percentCompleted = Math.floor(progressEvent.loaded / progressEvent.total * 100)

                if (progressEvent.loaded < progressEvent.total) {
                    store.dispatch({
                        type: UPDATE_PROGRESS_LOADING,
                        payload: percentCompleted
                    })
                } else {
                    store.dispatch({
                        type: UPDATE_PROGRESS_LOADING,
                        payload: null
                    })
                }
            }
        }

        let HTTP = axios.create(axiosParams)
        HTTP.defaults.timeout = timeout


        switch (method) {
            case 'GET':
                res = await HTTP.get(url, {params})
                break
            case 'POST':
                res = await HTTP.post(url, params)
                break
            case 'PUT':
                res = await HTTP.put(url, params)
                break
            case 'PATCH':
                res = await HTTP.patch(url, params)
                break
            case 'DELETE':
                res = await HTTP.delete(url, params)
                break
            default:
                throw 'Неизвестный метод API: ' + method
        }

        response = res.data
    } catch (e) {
        if (e.response && isNeedErrorAlert) {
            const techError = (<Space direction="vertical">
                <Text strong>Запрос:</Text> {e.request.responseURL}
                <Text strong>Статус ответа: </Text> {e.response.status}
                <Text strong>StatusText:</Text> {e.response.statusText}
                <Text strong>Stack:</Text> {e.stack}
            </Space>)

            switch (e.response.status) {
                case 500: //Internal Server Error
                    ErrorAlert({msg: 'Внутренняя ошибка сервера', title: 'Ошибка выполнения запроса', techError})
                    break;
                case 404: //Not found
                    ErrorAlert({msg: 'Данные не найдены ', title: 'Ошибка выполнения запроса', techError})
                    break;
                case 400:
                    ErrorAlert({msg: 'Плохой запрос ', title: 'Ошибка выполнения запроса', techError})
                    break
                case 401: //Unauthorized
                case 403: //Forbidden
                    ErrorAlert({msg: e.response?.data?.message, title: 'Авторизация', techError})
                    break;
                case 405: //Method Not Allowed
                    ErrorAlert({msg: 'Метод не доступен', title: 'Ошибка', techError})
                    break;
                default:
                    ErrorAlert({msg: 'Ошибка выполнения запроса', title: 'Неопознанный ответ сервера', techError})
            }
        }
        error = e.response?.data?.message||e.toString()
        // Пушим ошибку выше, чтобы ее красиво обработать
        // throw new Error(e.toString())
    } finally {
        loading = false
    }

    // custom hook returns value
    return {response, error, loading};
};

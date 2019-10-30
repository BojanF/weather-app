import { API_KEY, API_ENDPOINT } from './constants';

export async function OpenWeatherApi({
    api, method
  }) {
    const reqBody = {
        method
    };

    const path = `${API_ENDPOINT}${api}&APPID=${API_KEY}`;

    return fetch(path, reqBody)
        .then(res => res.json())
        .then(jsonData => {
            if(jsonData.cod === "200") {
                return {
                    result: 'ok',
                    forecast: jsonData,
                };
            } else {
                return {
                    result: 'error',
                    error: jsonData
                }
            }

            
        })
        .catch(error => {
            return {
                result: 'error',
                error
            }
        })
}
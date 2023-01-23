 import axios from "axios"

export function getWeather(lat,lon,timezone){
return axios.get("https://api.open-meteo.com/v1/forecast?&hourly=temperature_2m,precipitation,rain,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min&current_weather=true&timeformat=unixtime",{params:{
        latitude:lat,
        longitude:lon,
        timezone
    }})
    .then(({data})=>{
        return {
            current: parseCurrentWeather(data),
            daily: parseDailyWeather(data),
            hourly: parseHourlyWeather(data),
        }
    })
}

function parseCurrentWeather({current_weather}){
    const {temperature,weathercode}=current_weather
return {
    currentTemp:Math.round(temperature),
    currentIcon:weathercode,
}
}

function parseDailyWeather({daily}){
    const {temperature_2m_max:dailyMaxTemp,
        temperature_2m_min:dailyMinTemp,
        weathercode:dailyIconCode}=daily
    return{
        dailyMax:dailyMaxTemp,
        dailyMin:dailyMinTemp,
        dailyIcon:dailyIconCode,
    }
}

function parseHourlyWeather({hourly}){
    const {temperature_2m,weathercode}=hourly

    return{
        hourlyTemp:temperature_2m,
        hourlyIcon:weathercode
    }
}


import React from 'react';
import Header from './Header'
import { getWeather } from './weather';
import { iconMap } from './icon-map';
getWeather(10,10,Intl.DateTimeFormat().resolvedOptions().timeZone).then(data=>{
    console.log(data)
})


navigator.geolocation.getCurrentPosition(positionSuccess,positionError)
function positionSuccess({ coords }){
    getWeather(coords.latitude,
        coords.longitude,
        Intl.DateTimeFormat().resolvedOptions().timeZone)
        .then(renderWeather)
        .catch(err=>{
        console.log(err);
    })  
}
function positionError(){
    alert("There was an error getting location coordinates. Please try again.")
}
function getIconUrl(iconCode){
    return `${iconMap.get(iconCode)}`;
}
function renderWeather({current,daily,hourly}){
    renderCurrentWeather(current,daily)
    renderDailyWeather(daily)
    renderHourlyWeather(hourly)
}
function renderCurrentWeather(current,daily){
    document.querySelector('.daily-current-temp').textContent = current.currentTemp+"°"
    document.querySelector('.daily-low-temp').textContent = "L:"+Math.round(daily.dailyMin[0])+"°"
    document.querySelector('.daily-high-temp').textContent = "H:"+Math.round(daily.dailyMax[0])+"°"
}
function renderDailyWeather(daily){
let date=new Date();
let currentDay=date.getDay();
let weekdays=["Monday","Tuesday","Wednesday","Thirsday","Friday","Saturday","Sunday",]
let leftWeekdays=weekdays.slice(currentDay,weekdays.length).concat(weekdays.slice(0,currentDay-1))
let weeklyMin=daily.dailyMin
let weeklyMax=daily.dailyMax
let weekDayArr=document.querySelectorAll(".weekday")
let weekDayMinArr=document.querySelectorAll(".weekly-temp-min")
let weekDayMaxArr=document.querySelectorAll(".weekly-temp")
let weekDayIconArr=document.querySelectorAll(".daily-week-icon")
let weekIcon=daily.dailyIcon
for(let i=1;i<7;i++){
weekDayMaxArr[i-1].textContent=Math.round(weeklyMax[i])+"°"
weekDayMinArr[i-1].textContent=Math.round(weeklyMin[i])+"°"
weekDayArr[i-1].textContent=leftWeekdays[i-1]
weekDayIconArr[i-1].setAttribute("src",getIconUrl(weekIcon[i]))
}
}
function renderHourlyWeather(hourly){
    let date=new Date();
    let currentHour=date.getHours();
    let nextHoursArr=[]
    let iconArr=hourly.hourlyIcon.slice(0,6)
    let tempArr=hourly.hourlyTemp.slice(0,6)
    let hourlyTempArr=document.querySelectorAll('.daily-hourly-temp')
    let hourlyTimeArr=document.querySelectorAll('.daily-hourly-time')
    let hourlyIconArr=document.querySelectorAll('.daily-hourly-icon')
    for(let i=0;i<6;i++){
        nextHoursArr[i]=currentHour+i
        hourlyTimeArr[i].textContent=nextHoursArr[i]
        hourlyTempArr[i].textContent=Math.round(tempArr[i])+"°"
        hourlyIconArr[i].setAttribute("src",getIconUrl(iconArr[i]))
    }
}

export default function App(){

    let daily=2;
    let weekly=[12,11,9,6,4,7]
    return (
        <div>
            <Header daily={daily} weekly={weekly} />
        </div>
    )
}
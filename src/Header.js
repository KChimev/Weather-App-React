import React from "react"
import sun from "./weather-icons/day.svg"
import cloud from "./weather-icons/cloudy.svg"
import rain from "./weather-icons/rainy-1.svg"
import snow from "./weather-icons/snowy-5.svg"
import thunder from "./weather-icons/thunder.svg"

export default function Header(props){
    return(
        <header>

            <div className="daily">

                <div className="daily-current">
                        <span className="daily-current-temp">7°</span>
                        <div className="daily-current-HL">
                            <span className="daily-high-temp">H:12°</span>
                            <span className="daily-low-temp">L:7°</span>
                        </div>
                </div>      

                <div className="daily-hourly-container">
                    <div className="daily-hourly-template">
                        <span className="daily-hourly-time">18</span>
                        <img src={cloud} className="daily-hourly-icon" alt="weather-icon"/>
                        <span className="daily-hourly-temp">7°</span>
                    </div>
                    <div className="daily-hourly-template">
                        <span className="daily-hourly-time">19</span>
                        <img src={snow}  className="daily-hourly-icon" alt="weather-icon"/>
                        <span className="daily-hourly-temp">7°</span>
                    </div>
                    <div className="daily-hourly-template">
                        <span className="daily-hourly-time">20</span>
                        <img src={snow}   className="daily-hourly-icon" alt="weather-icon"/>
                        <span className="daily-hourly-temp">6°</span>
                    </div>
                    <div className="daily-hourly-template">
                        <span className="daily-hourly-time">21</span>
                        <img src={snow} className="daily-hourly-icon" alt="weather-icon"/>
                        <span className="daily-hourly-temp">6°</span>
                    </div>
                    <div className="daily-hourly-template">
                        <span className="daily-hourly-time">21</span>
                        <img src={thunder} className="daily-hourly-icon" alt="weather-icon"/>
                        <span className="daily-hourly-temp">6°</span>
                    </div>
                    <div className="daily-hourly-template">
                        <span className="daily-hourly-time">22</span>
                        <img src={thunder} className="daily-hourly-icon" alt="weather-icon"/>
                        <span className="daily-hourly-temp">6°</span>
                    </div>
                </div>
            </div>

            <div className="weekly">
                <div className="day-card">
                <h2 className="weekday">Monday</h2>
                <img src={thunder} className="daily-week-icon" alt="weather-icon"/>
                <span className="weekly-temp">{props.weekly[0]}°</span>
                <span className="weekly-temp-min">{props.weekly[3]}°</span>
                </div>
                <div className="day-card">
                <h2 className="weekday">Tuesday</h2>
                <img src={sun} className="daily-week-icon" alt="weather-icon"/>
                <span className="weekly-temp">{props.weekly[1]}°</span>
                <span className="weekly-temp-min">{props.weekly[3]}°</span>
                </div>
                <div className="day-card">
                <h2 className="weekday">Wednesday</h2>
                <img src={rain} className="daily-week-icon" alt="weather-icon"/>
                <span className="weekly-temp">{props.weekly[2]}°</span>
                <span className="weekly-temp-min">{props.weekly[3]}°</span>
                </div>
                <div className="day-card">
                <h2 className="weekday">Thursday</h2>
                <img src={rain} className="daily-week-icon" alt="weather-icon"/>
                <span className="weekly-temp">{props.weekly[3]}°</span>
                <span className="weekly-temp-min">{props.weekly[3]}°</span>
                </div>
                <div className="day-card">
                <h2 className="weekday">Friday</h2>
                <img src={thunder} className="daily-week-icon" alt="weather-icon"/>
                <span className="weekly-temp">{props.weekly[4]}°</span>
                <span className="weekly-temp-min">{props.weekly[3]}°</span>
                </div>
                <div className="day-card">
                <h2 className="weekday">Saturday</h2>
                <img src={cloud} className="daily-week-icon" alt="weather-icon"/>
                <span className="weekly-temp">{props.weekly[5]}°</span>
                <span className="weekly-temp-min">{props.weekly[3]}°</span>
                </div>
            </div>
        </header>
    )
}


import React from 'react';



export default class WeatherItems extends React.Component{



    render(){
   
   var images = {
   	"01d":"https://image.flaticon.com/icons/svg/106/106061.svg",
   	"02d":"https://image.flaticon.com/icons/svg/106/106068.svg",
   	"03d":"https://image.flaticon.com/icons/svg/106/106058.svg",
   	"04d":"https://image.flaticon.com/icons/svg/106/106064.svg",
   	"09d":"https://image.flaticon.com/icons/svg/106/106059.svg",
   	"10d":"https://image.flaticon.com/icons/svg/106/106044.svg",
   	"11d":"https://image.flaticon.com/icons/svg/106/106051.svg",
   	"13d":"https://image.flaticon.com/icons/svg/106/106057.svg",
   	"50d":"https://image.flaticon.com/icons/svg/106/106052.svg"
   }

   var days = {
   	"1" : "Monday",
   	"2" : "Tuesday",
   	"3" : "Wednesday",
   	"4" : "Thursday",
   	"5" : "Friday",
   	"6" : "Saturday",
   	"7" : "Sunday",
   	"8" : "Monday",
   	"9" : "Tuesday",
   	"10" : "Wednesday",
   	"11" : "Thursday",
   	"12" : "Friday",
   }

    	return(

			<span>
			<p className="days_items">{days[this.props.daysletter]}</p>
			<img className="icon_days" src={images[this.props.daysicon]} />	
			<p className="temp_week">Min <b>{Math.round(this.props.daysmin)}</b> °C</p>	
			<p className="temp_week">Max <b>{Math.round(this.props.daysmax)}</b> °C</p>	               	
				</span>

        )
    }
}
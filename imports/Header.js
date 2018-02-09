import React from 'react'
import Popup from './Popup';
import Clock from 'react-live-clock';

export default class Header extends React.Component{



    render(){

var now = new Date();
var day    = now.getDate();
var hour   = now.getHours();
var minute  = now.getMinutes();
var second = now.getSeconds();

var weekday = new Array(7);
weekday[0] =  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var today = weekday[now.getDay()];


var month = new Array(12);
month[0] =  "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[6] = "August";
month[6] = "September";
month[6] = "October";
month[6] = "November";
month[6] = "December";

var todaymonth = month[now.getMonth()];


    return(
			
	  		<div className="header">
				<div className="button">
					<Popup DataCity={this.props.DataCity}/>
				</div>
				<div className="date">
					{day} {todaymonth} / {today}
				</div>
				<div className="time">
				 <Clock format={'HH:mm:ss'} ticking={true} timezone={'FR'} />
					
				</div>
			</div>			
		

                )
        }
}
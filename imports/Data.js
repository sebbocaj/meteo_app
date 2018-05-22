import React from 'react';
import Header from './Header';
import WeatherList from './WeatherList';
import axios from 'axios';

export default class Data extends React.Component{

	constructor() {
		    super();
		    this.state = {
		    	temp:[],
		    	city:''	
		    };
		    this.getData = this.getData.bind(this)
	 }


	componentWillMount () {	
			var that = this
			navigator.geolocation.getCurrentPosition((location) =>{
				that.getData (location.coords.latitude, location.coords.longitude)
		 	})
		}

	getData(latitude, longitude) {	
			var that = this
			axios.get (`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&units=metric&cnt=8&APPID=71d4009dcf0a0170e9a484cd0064f300`)
		  .then (res => {
		  	that.setState({temp:res.data.list}) ,()=>{
							}
			that.setState({city:res.data.city.name}) ,()=>{
							}
		  	}) 
	}



	render(){

    	return(

    		<span>
    				<Header DataCity = {this.getData}/>
    				
    				<WeatherList templist = {this.state.temp}
    								city = {this.state.city} />
    				
    		</span>
    		)
    }

}
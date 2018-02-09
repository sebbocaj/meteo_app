
import React from 'react';



export default class WeatherItem1 extends React.Component{

    constructor() {
        super();
        this.state = {
          color:''
        };
    }

    componentWillMount () { 
         if (this.props.dayone > 8 ) {

          this.setState({color:'green'});
        }
    }


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


    	return(

			<div>
			
					<h1 className="City_name">{this.props.city}</h1>
				    <p className="temp_item1">&nbsp;<span className={this.state.color}>{Math.round(this.props.dayone)}</span> °C</p>

				    <img className="icon_dayone" src={images[this.props.dayoneicon]} />
				     

	                	
			</div>

        )
    }
}
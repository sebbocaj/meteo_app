import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

export default class Auto extends React.Component{
  constructor(props) {
    super(props)
    this.state = { address: '' }
    this.onChange = (address) => this.setState({ address })
  }

  handleSelect = (event) => {

  //  event.preventDefault()
    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
       .then(banana => 	
      	this.props.DataCity(banana.lat, banana.lng))
      .catch(error => console.error('Error', error))
     this.props.close()
  }

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    }

    return (
     
        <PlacesAutocomplete inputProps={inputProps} 
        onSelect={this.handleSelect}
        />
        
    )
  }
}


import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import Auto from './Auto';

export default class Popup extends React.Component{

  
  constructor() {
      super();
  this.state = { open: false,}
}

  show = size => () => this.setState({ size, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, size } = this.state

    return (
      <div>
  
        <div className="button_city_search" onClick={this.show('small')}><img width="50%" src="http://northeastfc.org/wp-content/uploads/2016/12/Map1-450x450.png" /></div>

        <Modal size={size} open={open} onClose={this.close}>
          <Modal.Header>
            Enter city
          </Modal.Header>
          <Modal.Content>
            <Auto DataCity={this.props.DataCity}
                  close={this.close}
            />
          </Modal.Content>

        </Modal>
      </div>
    )
  }
}


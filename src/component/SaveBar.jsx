import React from 'react'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'


export default class SaveBar extends React.Component {

  static defaultProps = {}

  handleSave() {
    this.props.save()
  }

  render() {
    return (
      <AppBar
        title={"NDEx ID: " + this.props.UUID}
        iconElementLeft={<div/>}
        iconElementRight={
          <FlatButton
            label='Save'
            backgroundColor="darkorange"
            hoverColor="orange"
            style={{width: '12em'}}
            onClick={this.handleSave.bind(this)}
          />
        }
      >
      </AppBar>
    )
  }

}

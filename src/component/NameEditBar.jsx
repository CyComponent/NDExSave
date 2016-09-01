import React from 'react'

import TextField from 'material-ui/TextField'

import Toggle from 'material-ui/Toggle'
import DropDownMenu from 'material-ui/DropDownMenu'

import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar'

export default class SaveBar extends React.Component {

  static defaultProps = {}

  handleChange(event) {
    this.props.updateField({
      networkName: event.target.value
    })
  }

  handleOverwriteToggle() {
    this.props.updateField({
      overwrite: !this.props.overwrite
    })
  }

  handlePrivateToggle() {
    this.props.updateField({
      private: !this.props.private
    })
  }

  render() {
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <h3 style={{ marginLeft: '20px', marginTop: '12px' }}>Network Name:</h3>
          <TextField
            style={{ marginLeft: '20px', width: '400px' }}
            hintText="Network Name"
            underlineShow={true}
            value={this.props.networkName}
            onChange={this.handleChange.bind(this)}
          />
        </ToolbarGroup>
        <ToolbarGroup>
          <Toggle
            label="Overwrite"
            style={{ paddingTop: '16px' }}
            toggled={this.props.ovewrite}
            onToggle={this.handleOverwriteToggle.bind(this)}
           />
          <Toggle
            label="Save as Private"
            style={{ paddingTop: '16px' }}
            disabled={this.props.toggleDisabled}
            toggled={this.props.private}
            onToggle={this.handlPrivateToggle.bind(this)}
           />
        </ToolbarGroup>
      </Toolbar>
    )
  }

}

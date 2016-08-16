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

  handleToggle() {
    this.props.updateField({
      private: !this.props.private
    })
  }

  render() {
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <TextField
            style={{ marginLeft: '20px', width: '200px' }}
            hintText="Network Name"
            value={this.props.networkName}
            onChange={this.handleChange.bind(this)}
          />
        </ToolbarGroup>
        <ToolbarGroup>
          <Toggle
            label="Save as Private"
            style={{ paddingTop: '16px' }}
            disabled={this.props.toggleDisabled}
            toggled={this.props.private}
            onToggle={this.handleToggle.bind(this)}
           />
        </ToolbarGroup>
      </Toolbar>
    )
  }

}

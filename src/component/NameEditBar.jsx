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

    const containerLeft = {
      display: 'flex',
      flexFlow: 'flex-start',
      alignItems: 'center'
    }

    const container = {
      display: 'flex',
      flexFlow: 'flex-end',
      alignItems: 'center'
    }

    return (
      <Toolbar>
        <ToolbarGroup firstChild={true} style={containerLeft}>
          <h3 style={{ marginLeft: '1em' }}>Collection:</h3>
          <TextField
            style={{ marginLeft: '1em'}}
            hintText="Collection"
            underlineShow={true}
            value={this.props.networkName}
            onChange={this.handleChange.bind(this)}
          />
        </ToolbarGroup>

        <div style={container}>
          <ToolbarGroup>
            <Toggle
              label="Overwrite"
              labelStyle={{marginLeft: '1em'}}
              disabled={this.props.overwriteDisabled}
              toggled={this.props.overwrite}
              onToggle={this.handleOverwriteToggle.bind(this)}
            />
          </ToolbarGroup>
          <ToolbarGroup>
            <Toggle
              label="Save as Private"
              labelStyle={{marginLeft: '1em'}}
              disabled={this.props.privateDisabled}
              toggled={this.props.private}
              onToggle={this.handlePrivateToggle.bind(this)}
            />
          </ToolbarGroup>
        </div>
      </Toolbar>
    )
  }

}

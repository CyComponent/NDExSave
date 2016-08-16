import React from 'react'

import TextField from 'material-ui/TextField'

import Paper from 'material-ui/Paper';

import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar'

export default class PropertiesEditor extends React.Component {

  static defaultProps = {}

  handleChange(event) {
    this.props.updateField({
      description: event.target.value
    })
  }

  render() {
    const areaStyle = {
      height: '71%',
      width: '100%',
      resize: 'none',
      border: 0,
      fontSize: 20,
      overflowY: 'auto'
    }
    return (
      <div style={{ width: '50%', float: 'right' }}>
        <Paper style={{ marginLeft: '30px', marginTop: '20px', width: '91%' }} zDepth={2}>
          <Toolbar>
            <ToolbarGroup firstChild={true}>
              <ToolbarTitle text="Description"/>
            </ToolbarGroup>
          </Toolbar>
          <textarea
            style={areaStyle}
            placeholder="Enter Description..."
            value={this.props.description}
            onChange={this.handleChange.bind(this)}
          />
        </Paper>
        <br/>
      </div>
    )
  }

}

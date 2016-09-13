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
    const container = {
      width: '50%',
      height: '100%',
      margin: '0',
      padding: '1em'
    }

    const titleStyle={
      paddingTop: '0.3em',
      paddingBottom: '0.3em',
      paddingLeft: '0.3em',
      margin: '0',
      fontSize: 12,
      color: '#777777',
    }

    const areaStyle = {
      padding: '0.5em',
      width: '100%',
      height: '100%',
      resize: 'none',
      border: '1px solid #dddddd',
      fontSize: 14,
      overflowY: 'auto',
    }


    return (
      <div style={container}>

          <div style={titleStyle}>Description</div>

          <textarea
            style={areaStyle}
            placeholder="Enter Description..."
            value={this.props.description}
            onChange={this.handleChange.bind(this)}
          />
      </div>
    )
  }

}

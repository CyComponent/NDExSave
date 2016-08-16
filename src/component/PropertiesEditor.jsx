import React from 'react'

import TextField from 'material-ui/TextField'

import Paper from 'material-ui/Paper';

import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar'

export default class PropertiesEditor extends React.Component {

  static defaultProps = {}

  handleReference(event) {
    console.log("Handling reference")
    this.props.updateField({
      reference: event.target.value
    })
  }

  handleAuthor(event) {
    console.log("Authorr")
    this.props.updateField({
      author: event.target.value
    })
  }

  handleOrganism(event) {
    this.props.updateField({
      organism: event.target.value
    })
  }

  handleDisease(event) {
    this.props.updateField({
      disease: event.target.value
    })
  }

  handleTissue(event) {
    this.props.updateField({
      tissue: event.target.value
    })
  }

  handleRightsHolder(event) {
    this.props.updateField({
      rightsHolder: event.target.value
    })
  }

  handleRights(event) {
    this.props.updateField({
      rights: event.target.value
    })
  }

  render() {
    const fieldStyle={
      paddingLeft: '30px',
      width: '80%'
    }
    const areaStyle = {
      height: '30%',
      width: '100%',
      resize: 'none',
      border: 0,
      fontSize: 20,
      overflowY: 'auto'
    }
    return (
      <div style={{ width: '50%', float: 'left' }}>
        <TextField
          style={fieldStyle}
          floatingLabelText="Author"
          floatingLabelFixed={true}
          value={this.props.author}
          onChange={this.handleAuthor.bind(this)}
        />
        <br/>
        <TextField
          style={fieldStyle}
          floatingLabelText="Organism"
          floatingLabelFixed={true}
          value={this.props.organism}
          onChange={this.handleOrganism.bind(this)}
        />
        <br/>
        <TextField
          style={fieldStyle}
          floatingLabelText="Disease"
          floatingLabelFixed={true}
          value={this.props.disease}
          onChange={this.handleDisease.bind(this)}
        />
        <br/>
        <TextField
          style={fieldStyle}
          floatingLabelText="Tissue"
          floatingLabelFixed={true}
          value={this.props.tissue}
          onChange={this.handleTissue.bind(this)}
        />
        <br/>
        <TextField
          style={fieldStyle}
          floatingLabelText="Rights Holder"
          floatingLabelFixed={true}
          value={this.props.rightsHolder}
          onChange={this.handleRightsHolder.bind(this)}
        />
        <br/>
        <TextField
          style={fieldStyle}
          floatingLabelText="Rights"
          floatingLabelFixed={true}
          value={this.props.rights}
          onChange={this.handleRights.bind(this)}
        />
        <Paper style={{ marginLeft: '30px', marginTop: '20px', width: '85%' }} zDepth={2}>
          <Toolbar>
            <ToolbarGroup firstChild={true}>
              <ToolbarTitle text="Reference"/>
            </ToolbarGroup>
          </Toolbar>
          <textarea
            style={areaStyle}
            placeholder="Enter Reference..."
            value={this.props.reference}
            onChange={this.handleReference.bind(this)}
          />
        </Paper>
        <br/>
      </div>
    )
  }

}

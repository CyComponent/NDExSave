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
    const container = {
      display: 'flex',
      flexDirection: 'column',
      width: '50%',
      height: '100%',
      margin: '0',
      padding: '1em'
    }

    const fieldStyle={
      padding: '0',
      marginTop: '-0.5em',
      width: '100%'
    }

    const refStyle={
      width: '100%',
      height: '120px',
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
        <TextField
          style={fieldStyle}
          floatingLabelText="Author"
          floatingLabelFixed={true}
          value={this.props.author}
          onChange={this.handleAuthor.bind(this)}
        />
        <TextField
          style={fieldStyle}
          floatingLabelText="Organism"
          floatingLabelFixed={true}
          value={this.props.organism}
          onChange={this.handleOrganism.bind(this)}
        />
        <TextField
          style={fieldStyle}
          floatingLabelText="Disease"
          floatingLabelFixed={true}
          value={this.props.disease}
          onChange={this.handleDisease.bind(this)}
        />
        <TextField
          style={fieldStyle}
          floatingLabelText="Tissue"
          floatingLabelFixed={true}
          value={this.props.tissue}
          onChange={this.handleTissue.bind(this)}
        />
        <TextField
          style={fieldStyle}
          floatingLabelText="Rights Holder"
          floatingLabelFixed={true}
          value={this.props.rightsHolder}
          onChange={this.handleRightsHolder.bind(this)}
        />
        <TextField
          style={fieldStyle}
          floatingLabelText="Rights"
          floatingLabelFixed={true}
          value={this.props.rights}
          onChange={this.handleRights.bind(this)}
        />

        <div style={refStyle}>

            <div style={titleStyle}>Reference</div>

            <textarea
              style={areaStyle}
              placeholder="Enter reference here..."
              value={this.props.reference}
              onChange={this.handleReference.bind(this)}
            />
        </div>
      </div>
    )
  }

}

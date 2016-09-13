import React from 'react'

import SaveBar from './SaveBar'
import NameEditBar from './NameEditBar'

import PropertiesEditor from './PropertiesEditor'
import DescriptionEditor from './DescriptionEditor'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import '../style/save.scss'

export default class NDExSave extends React.Component {

  static defaultProps = {
    UUID: "New Network",
    theme: {},
    networkName: "",
    overwrite: true,
    overwriteDisabled: false,
    private: false,
    privateDisabled: false,
    author: "",
    organism: "",
    disease: "",
    tissue: "",
    rightsHolder: "",
    rights: "",
    reference: "",
    description: "",
    onSave: function(properties) { console.log(properties) }
  }

  constructor(props) {
    super(props)
    this.state = {
      networkName: this.props.networkName,
      overwrite: this.props.overwrite,
      private: this.props.private,
      author: this.props.author,
      organism: this.props.organism,
      disease: this.props.disease,
      tissue: this.props.tissue,
      rightsHolder: this.props.rightsHolder,
      rights: this.props.rights,
      reference: this.props.reference,
      description: this.props.description
    }
  }

  updateField(update) {
    this.setState(update)
  }

  save() {
    this.props.onSave(this.state)
  }

  render() {
    const theme = getMuiTheme(this.props.theme)

    const container = {
      margin: '0',
      padding: '0',
      width: '100%',
    }

    const flexContainer = {
      margin: '0',
      padding: '0',
      display: 'flex',
      width: '100%',
      height: '500px',
    }

    return (
      <MuiThemeProvider muiTheme={theme}>
        <div style={container}>
          <SaveBar
            save={this.save.bind(this)}
            UUID={this.props.UUID}
          />

          <NameEditBar
            networkName={this.state.networkName}
            overwrite={this.state.overwrite}
            overwriteDisabled={this.props.overwriteDisabled}
            private={this.state.private}
            privateDisabled={this.props.privateDisabled}
            updateField={this.updateField.bind(this)}
          />

          <div style={flexContainer}>
            <PropertiesEditor
              reference={this.state.reference}
              author={this.state.author}
              organism={this.state.organism}
              disease={this.state.disease}
              tissue={this.state.tissue}
              rightsHolder={this.state.rightsHolder}
              rights={this.state.rights}
              updateField={this.updateField.bind(this)}
            />

            <DescriptionEditor
              description={this.state.description}
              updateField={this.updateField.bind(this)}
            />
          </div>
        </div>
      </MuiThemeProvider>
    )
  }

}

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
    private: false,
    toggleDisabled: false,
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
      height: '1065px'
    }
    return (
      <MuiThemeProvider muiTheme={theme}>
        <div>
          <SaveBar
            save={this.save.bind(this)}
            UUID={this.props.UUID}
          />
          <NameEditBar
            networkName={this.state.networkName}
            private={this.state.private}
            toggleDisabled={this.props.toggleDisabled}
            updateField={this.updateField.bind(this)}
          />
          <div style={container}>
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

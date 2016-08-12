import React from 'react'

import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'

import Toggle from 'material-ui/Toggle'
import DropDownMenu from 'material-ui/DropDownMenu'

import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar'

export default class SaveBar extends React.Component {

  static defaultProps = {}

  handleSave() {
    this.props.save()
  }

  render() {
    return (
      <AppBar
        title={<span>Title</span>}
        iconElementRight={
          <RaisedButton
           label="Save"
           onClick={this.handleSave.bind(this)}
           secondary={true}
          />
        }
      />
    )
  }

}

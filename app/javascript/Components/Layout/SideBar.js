import React, { useState } from 'react'

import { Drawer, DrawerHeader, DrawerContent } from '@rmwc/drawer'
import { MenuSurfaceAnchor, MenuSurface } from '@rmwc/menu'
import { IconButton } from '@rmwc/icon-button'
import {
  List,
  CollapsibleList,
  SimpleListItem,
  ListGroup,
  ListGroupSubheader,
  ListItem,
  ListItemMeta,
  ListItemGraphic,
  ListDivider
} from '@rmwc/list'
//styles
// drawer
import '@material/drawer/dist/mdc.drawer.css'
// list component

// menu components
import '@material/menu/dist/mdc.menu.css'
import '@material/menu-surface/dist/mdc.menu-surface.css'
import '@material/list/dist/mdc.list.css'
import '@rmwc/list/collapsible-list.css'
import '@material/icon-button/dist/mdc.icon-button.css'
import '@rmwc/icon/icon.css'
import '@material/ripple/dist/mdc.ripple.css'
import '../component styles/sidebar.css'

function Sidebar ({ toggle }) {
  const [open, setOpen] = React.useState(false)
  return (
    <Drawer dismissible open={toggle}>
      <DrawerHeader>
        <div className="profile mb-2 mt-2">
          <div className="details">
            <div className="name">Sunny Asar</div>
            <div className="privilege">ADMINISTRATOR</div>
          </div>
          <MenuSurfaceAnchor>
            <MenuSurfaceAnchor>
              <MenuSurface anchorCorner={'bottomLeft'} open={open} onClose={(evt) => setOpen(false)}>
                <List>
                  <ListGroup>
                    <ListItem>
                      <ListItemGraphic icon="person" className="material-icons-outlined" />
                      My Account
                    </ListItem>
                    <ListItem>
                      <ListItemGraphic icon="settings" className="material-icons-outlined" />
                      Settings
                    </ListItem>
                    <ListItem>
                      <ListItemGraphic icon="lock" className="material-icons-outlined" />
                      Lock Screen
                    </ListItem>
                    <ListItem>
                      <ListItemGraphic icon="help_outline" className="material-icons-outlined" />
                      Support
                    </ListItem>
                  </ListGroup>
                  <ListDivider />
                </List>
                <ListGroup>
                  <ListItem>
                    <ListItemGraphic icon="exit_to_app" className="material-icons-outlined" />
                    Logout
                  </ListItem>
                </ListGroup>
              </MenuSurface>
              {/** The handle can be any component you want */}
              <IconButton icon="expand_more" onClick={(evt) => setOpen(!open)} />
            </MenuSurfaceAnchor>
          </MenuSurfaceAnchor>
        </div>
      </DrawerHeader>
      <DrawerContent>
        <List>
          <ListGroup>
            <ListGroupSubheader>NAVIGATION</ListGroupSubheader>
            <ListItem className="single">
              <ListItemGraphic
                icon="home"
                className="material-icons-outlined"
                // style={{ fontSize: '32px' }}
              />
              Dashboard <div className="div ml-auto badge-success badge">1</div>
            </ListItem>
          </ListGroup>
          <ListGroup>
            <ListGroupSubheader>APPS</ListGroupSubheader>
            <ListItem className="single">
              <ListItemGraphic icon="insert_invitation" className="material-icons-outlined" />
              Calendar
            </ListItem>
            <CollapsibleList
              handle={
                <ListItem>
                  <ListItemGraphic icon="inbox" className="material-icons-outlined" />
                  Email <ListItemMeta icon="navigate_next" />
                </ListItem>
              }
            >
              <SimpleListItem text="Inbox" />
              <SimpleListItem text="Read" />
              <SimpleListItem text="Compose" />
            </CollapsibleList>
            <CollapsibleList
              handle={
                <ListItem>
                  <ListItemGraphic icon="business_center" className="material-icons-outlined" />
                  Projects <ListItemMeta icon="navigate_next" />
                </ListItem>
              }
            >
              <SimpleListItem text="List" />
              <SimpleListItem text="Details" />
            </CollapsibleList>
            <CollapsibleList
              handle={
                <ListItem>
                  <ListItemGraphic icon="bookmark_border" className="material-icons-outlined" />
                  Tasks <ListItemMeta icon="navigate_next" />
                </ListItem>
              }
            >
              <SimpleListItem text="List" />
              <SimpleListItem text="Kanban Board" />
            </CollapsibleList>
          </ListGroup>
          <ListGroup>
            <ListGroupSubheader>CUSTOM</ListGroupSubheader>
            <CollapsibleList
              handle={
                <ListItem>
                  <ListItemGraphic icon="description" className="material-icons-outlined" />
                  Pages <ListItemMeta icon="navigate_next" />
                </ListItem>
              }
            >
              <SimpleListItem text="Starter" />
              <SimpleListItem text="Profile" />
              <SimpleListItem text="Activity" />
              <SimpleListItem text="Invoice" />
              <SimpleListItem text="Pricing" />
              <SimpleListItem text="Maintenance" />
              <SimpleListItem text="Login" />
              <SimpleListItem text="Register" />
              <SimpleListItem text="Recover Password" />
              <SimpleListItem text="Confirm" />
              <SimpleListItem text="Error 404" />
            </CollapsibleList>
            <CollapsibleList
              handle={
                <ListItem>
                  <ListItemGraphic icon="web" className="material-icons-outlined" />
                  Layouts <ListItemMeta icon="navigate_next" />
                </ListItem>
              }
            >
              <SimpleListItem text="Horizontal Nav" />
              <SimpleListItem text="RTL" />
              <SimpleListItem text="Dark" />
              <SimpleListItem text="Scrollable" />
              <SimpleListItem text="Boxed" />
              <SimpleListItem text="With Pre-loader" />
              <SimpleListItem text="Dark Side Nav" />
            </CollapsibleList>
          </ListGroup>
          <ListGroup>
            <ListGroupSubheader>COMPONENTS</ListGroupSubheader>
            <CollapsibleList
              handle={
                <ListItem>
                  <ListItemGraphic icon="widgets" className="material-icons-outlined" />
                  UI Elements <ListItemMeta icon="navigate_next" />
                </ListItem>
              }
            >
              <SimpleListItem text="UI Elements" />
              <SimpleListItem text="Bootstrap UI" />
              <SimpleListItem text="Widgets" />
            </CollapsibleList>
            <CollapsibleList
              handle={
                <ListItem>
                  <ListItemGraphic icon="description" className="material-icons-outlined" />
                  Forms<ListItemMeta icon="navigate_next" />
                </ListItem>
              }
            >
              <SimpleListItem text="Basic Elements" />
              <SimpleListItem text="Advanced" />
              <SimpleListItem text="Validation" />
              <SimpleListItem text="Wizard" />
              <SimpleListItem text="Editor" />
              <SimpleListItem text="File Uploads" />
            </CollapsibleList>
            <ListItem className="single">
              <ListItemGraphic icon="pie_chart" className="material-icons-outlined" />
              Charts
            </ListItem>
            <CollapsibleList
              handle={
                <ListItem>
                  <ListItemGraphic icon="table_chart" className="material-icons-outlined" />
                  Tables <ListItemMeta icon="navigate_next" />
                </ListItem>
              }
            >
              <SimpleListItem text="Basic" />
              <SimpleListItem text="Advanced" />
            </CollapsibleList>
          </ListGroup>
        </List>
      </DrawerContent>
    </Drawer>
  )
}

export default Sidebar

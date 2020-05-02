import React, { useState } from 'react'

import { Drawer, DrawerHeader, DrawerContent } from '@rmwc/drawer'
import { MenuSurfaceAnchor, MenuSurface } from '@rmwc/menu'
import { IconButton } from '@rmwc/icon-button'
import { Button } from '@rmwc/button'
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

import { Link } from 'react-router-dom'

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
import '../styles/sidebar.css'

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
                      {/* <ListItemGraphic icon="person" className="material-icons-outlined" /> */}
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
            <Button tag={Link} to="/">
              <ListItem className="single">
                <ListItemGraphic
                  icon="home"
                  className="material-icons-outlined"
                  // style={{ fontSize: '32px' }}
                />
                Dashboard
                {/* <div className="div ml-auto badge-success badge">1</div> */}
              </ListItem>
            </Button>
          </ListGroup>
          <ListGroup>
            <ListGroupSubheader>Core</ListGroupSubheader>

            <CollapsibleList
              handle={
                <ListItem>
                  <ListItemGraphic icon="inbox" className="material-icons-outlined" />
                  Patients
                  <ListItemMeta icon="navigate_next" />
                </ListItem>
              }
            >
              <Button tag={Link} to="/patients">
                <ListItem>Patients List</ListItem>
              </Button>
              <Button tag={Link} to="/patients/new">
                <ListItem>Add Patient</ListItem>
              </Button>
            </CollapsibleList>
            <CollapsibleList
              handle={
                <ListItem>
                  <ListItemGraphic icon="business_center" className="material-icons-outlined" />
                  Test Samples <ListItemMeta icon="navigate_next" />
                </ListItem>
              }
            >
              <Button tag={Link} to="/samples">
                <ListItem> Samples</ListItem>
              </Button>
              <Button tag={Link} to="/samples/new">
                <ListItem>Add Sample</ListItem>
              </Button>
            </CollapsibleList>

            <Button tag={Link} to="/tests/new">
              <ListItem className="single">
                <ListItemGraphic
                  icon="insert_invitation"
                  className="material-icons-outlined"
                  // style={{ fontSize: '32px' }}
                />
                Tests
                {/* <div className="div ml-auto badge-success badge">1</div> */}
              </ListItem>
            </Button>
          </ListGroup>
          <ListGroup>
            <ListGroupSubheader>Accounting</ListGroupSubheader>
            <CollapsibleList
              handle={
                <ListItem>
                  <ListItemGraphic icon="description" className="material-icons-outlined" />
                  Billing <ListItemMeta icon="navigate_next" />
                </ListItem>
              }
            >
              <SimpleListItem text="Bills" />
            </CollapsibleList>
            <CollapsibleList
              handle={
                <ListItem>
                  <ListItemGraphic icon="web" className="material-icons-outlined" />
                  Income/Expenses <ListItemMeta icon="navigate_next" />
                </ListItem>
              }
            >
              <SimpleListItem text="Transactions" />
              <SimpleListItem text="Add " />
            </CollapsibleList>
            <CollapsibleList
              handle={
                <ListItem>
                  <ListItemGraphic icon="web" className="material-icons-outlined" />
                  Inventory <ListItemMeta icon="navigate_next" />
                </ListItem>
              }
            >
              <SimpleListItem text="Suppiers" />
              <SimpleListItem text="Add stock" />
            </CollapsibleList>
          </ListGroup>
          <ListGroup>
            <ListGroupSubheader>Human Resources</ListGroupSubheader>
            <CollapsibleList
              handle={
                <ListItem>
                  <ListItemGraphic icon="widgets" className="material-icons-outlined" />
                  Staffs <ListItemMeta icon="navigate_next" />
                </ListItem>
              }
            >
              <SimpleListItem text="All" />
            </CollapsibleList>
            {/* <CollapsibleList
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
            </CollapsibleList> */}
          </ListGroup>
        </List>
      </DrawerContent>
    </Drawer>
  )
}

export default Sidebar

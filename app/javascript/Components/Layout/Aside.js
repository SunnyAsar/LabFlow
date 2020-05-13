import React, { Component } from 'react'

import DropDown from './DropDown'

import SimpleBar from 'simplebar-react'

import { ListItem, ListGroup, Collapsibles, CollapsibleList, ListHeader } from './ExpandableMenu'

// import '../styles/sidebar.css'

class Aside extends Component {
  constructor (props) {
    super(props)
    this.aside = React.createRef()
    this.state = {}
  }

  componentDidUpdate (prevProps) {
    const aside = this.aside.current
    if (this.state !== prevProps) {
      aside.classList.toggle('open')
    }
  }

  render () {
    return (
      <aside ref={this.aside} className="open">
        <nav className="sidebar">
          <div className="nav-header">
            <div className="profile mb-2 mt-2">
              <div className="details">
                <div className="name">Sunny Asar</div>
                <div className="privilege">ADMINISTRATOR</div>
              </div>
              <DropDown />
            </div>
          </div>
          <SimpleBar className="nav-content">
            {/* <div className='nav-content'> */}
            <ListGroup headName="Navigation">
              <ListItem
                // metaTag={<span className="div ml-auto badge-success badge">1</span>}
                iconName="home"
                text="Dashboard"
                to={'/'}
              />
            </ListGroup>
            <Collapsibles>
              <ListHeader headName="Core" />
              <CollapsibleList
                iconName={'email'}
                name="Patients"
                collapseItems={[{ name: 'Patients', to: '/patients' }, { name: 'Add Patient', to: '/patient/new' }]}
              />
              <CollapsibleList
                iconName={'business_center'}
                name="Samples"
                collapseItems={[{ name: 'Samples List', to: '/samples' }, { name: 'Add Sample', to: '/sample/new' }]}
              />
              <ListItem iconName="insert_invitation" text="Tests" to={'/tests/new'} />

              {/* <CollapsibleList iconName={'bookmark_border'} name="Tasks" collapseItems={['List', 'Kanban Board']} /> */}
              <ListHeader headName="Accounting" />
              <CollapsibleList
                iconName={'description'}
                name="BIlling"
                collapseItems={[{ name: 'Bills', to: '/bills' }, { name: 'Income/Expense' }, { name: 'Transactions' }]}
              />

              <ListHeader headName="HR" />
              <CollapsibleList
                iconName={'widgets'}
                name="Staffing"
                collapseItems={['UI Elements', 'Bootstrap UI', 'Widgets']}
              />
            </Collapsibles>
            {/* </div> */}
          </SimpleBar>
        </nav>
      </aside>
    )
  }
}

export default Aside

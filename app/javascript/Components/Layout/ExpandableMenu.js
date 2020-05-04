import React from 'react'
// import '../component styles/expandableMenu.css';
import '../styles/expandable.css'
import { camelCase } from 'lodash'

import { Link } from 'react-router-dom'

export function ListItem ({ metaTag, iconName, text, to }) {
  return (
    <li>
      <Link className="expandable-btn " href="/" to={to}>
        <i className={`material-icons-outlined mr-2 item-icon`}>{iconName}</i>
        {text}
        {metaTag}
      </Link>
    </li>
  )
}

export function Collapsibles ({ children }) {
  return (
    <ul className="list-group accordion" id="collapsibles">
      {children}
    </ul>
  )
}

export function CollapsibleList ({ iconName, name, collapseItems, to }) {
  return (
    <li className="collapsible-list">
      <button
        className="expandable-btn"
        type="button"
        data-toggle="collapse"
        data-target={`#${camelCase(name)}`}
        aria-expanded="false"
        aria-controls={camelCase(name)}
        id={`${camelCase(name)}-collapse`}
      >
        <i className={`material-icons-outlined mr-2 item-icon`}>{iconName}</i>
        {name}
        <i className={`material-icons-outlined ml-auto meta-tag`}>navigate_next</i>
      </button>
      <div
        id={camelCase(name)}
        className="collapse"
        aria-labelledby={`${camelCase(name)}-collapse`}
        data-parent="#collapsibles"
      >
        <div className="link-box">
          {collapseItems.map((item, index) => (
            <Link to={item.to} className="link-item" key={index}>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </li>
  )
}
export function ListHeader ({ headName }) {
  return <li className="list-header">{headName}</li>
}

export function ListGroup ({ headName, children }) {
  return (
    <ul className="list-group">
      <ListHeader headName={headName} />
      {children}
    </ul>
  )
}

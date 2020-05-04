import React from 'react'

export default function DropDown () {
  return (
    <div className="dropdown">
      <button
        type="button"
        className="dropdown-toggle material-icons "
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        x-placement="bottom-start"
      >
        expand_more
      </button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">
          <i className="material-icons-outlined">person</i>
          My Account
        </a>
        <a className="dropdown-item" href="#">
          <i className="material-icons-outlined">settings</i>
          Settings
        </a>
        <a className="dropdown-item" href="#">
          <i className="material-icons-outlined">lock</i>
          Lock Screen
        </a>
        <a className="dropdown-item" href="#">
          <i className="material-icons-outlined">help_outline</i>
          Support
        </a>
        <div className="dropdown-divider" />

        <a className="dropdown-item" href="#">
          <i className="material-icons-outlined">exit_to_app</i>
          Logout
        </a>
      </div>
    </div>
  )
}

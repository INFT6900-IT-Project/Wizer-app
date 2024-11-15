import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Course Management</h2>
      <nav>
        <ul>
          <li>
            <NavLink to="/dashboard" activeClassName="active-link">
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/course-management" activeClassName="active-link">
              Course Management
            </NavLink>
          </li>
          <li>
            <NavLink to="/learner-management" activeClassName="active-link">
              Learner Management
            </NavLink>
          </li>
          <li>
            <NavLink to="/message" activeClassName="active-link">
              Message
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" activeClassName="active-link">
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;

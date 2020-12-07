import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = (props) => {
  return (
      <div className={'container-fluid'}>
        <nav className='row navbar navbar-expand-lg navbar-light bg-dark'>
          <div className='col-12 col-md-9'>
            <ul className='nav'>
              <li className={'nav-item p-1'}>
                <NavLink
                    to='/SearchPage'
                    onClick={() => props.handlePageChange('SearchPage')}
                    className={'Nav-Link'}>
                  Google Books
                </NavLink>
              </li>
              <li className={'nav-item p-1'}>
                <NavLink
                    to='/SearchPage'
                    onClick={() => props.handlePageChange('SearchPage')}
                    className={'Nav-Link'}>
                  Search
                </NavLink>
              </li>
              <li className={'nav-item p-1'}>
                <NavLink
                    to='/SavedPage'
                    onClick={() => props.handlePageChange('SavedPage')}
                    className={'Nav-Link'}>
                  Saved
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
  )

}
export default Navbar;
import React, {Component} from 'react';
import Navbar from './Navbar';
import SearchPage from '../containers/SearchPage';
import SavedPage from '../containers/SavedPage';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom'


class Header extends Component {
  state = {
    currentPage: '/SearchPage'
  }

  handlePageChange = (page) => {
    this.setState({currentPage: page})
  }

  renderPage = () => {
    return <Switch>
      <Route exact={true} path={'/SearchPage'} component={SearchPage}/>
      <Route exact={true} path={'/SavedPage'} component={SavedPage}/>
      <Redirect exact from={'/'} to={'/SearchPage'}/>
    </Switch>
  };


  render() {
    return (
        <div>
          <Router basename={'/'}>
            <Navbar
                currentPage={this.state.currentPage}
                handlePageChange={this.handlePageChange}
            />
            {this.renderPage()}
          </Router>
        </div>
    )
  }
}

export default Header
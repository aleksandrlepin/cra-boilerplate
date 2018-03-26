import React, { Component } from 'react';
import Header from './Header';
import Home from './Home';
import About from './About';
// import Gallery from './Gallery';
import WatchList from './WatchList';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div >
        <Header location={this.props.location}/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          {/* <Route path="/gallery" component={Gallery}/> */}
          <Route path="/watch-list" component={WatchList}/>
          <Route render={() => <h2>404 not found!!! sorry</h2>} />
        </Switch>
      </div>
    );
  }
}

export default App;

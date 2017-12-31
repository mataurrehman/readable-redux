import React, { Component } from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import PostForm from './components/PostForm'
import PostDetail from './components/PostDetail'
import { NoMatch } from './components/NoMatch'
class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/new' component={PostForm} />
          <Route exact path='/:category/posts' component={Home} />
          <Route exact path='/:category/:post_id' component={PostDetail} />
          <Route exact path='/:category/:postId/edit' component={PostForm} />
          <Route  path="*" component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default (App)


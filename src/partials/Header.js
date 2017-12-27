import React, { Component } from 'react'
import { getAllCategories } from './../actions/category_actions'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
class Header extends Component {
  componentDidMount() {
    this.props.getAllCategories()
  }
  render() {
    const { categories } = this.props
    return (
      <div className="App">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link className="navbar-brand" to="/">Ata Readable</Link>
            </div>
            <ul className="nav navbar-nav">
              <li><Link to="/">All Categories</Link></li>
              {categories.map(category => (
                <li key={category.path}>
                  <Link to={'/' + category.path}>
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="navbar-right" style={{ marginTop: "15px", marginRight: "10px" }}>
              <Link to="/new" className="btn btn-info btn-md">
                <span className="glyphicon glyphicon-plus"></span> Add Post
                </Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories
  }
}


export default connect(mapStateToProps, { getAllCategories })(Header)


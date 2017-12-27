import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './../partials/Header'
import ListPost from './../components/ListPost'
import { getAllPosts, getCategoryPosts } from './../actions/post_actions'

class Home extends Component {
    componentDidMount() {
        this.fetchCategoryData()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params !== this.props.match.params) { // on category change
            this.fetchCategoryData()
        }
    }
    fetchCategoryData = () => {
        const { category } = this.props.match.params
        if (category != null) {
            this.props.getCategoryPosts(category)
        } else {
            this.props.getAllPosts()
        }
    }
    render() {
        return (
            <div>
                <Header />
                <ListPost />
            </div>
        )
    }
}

export default connect(null, { getAllPosts, getCategoryPosts })(Home)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setPostSortOrder } from './../actions/post_actions'
import SinglePost from './SinglePost'
import sortBy from 'sort-by'
import { isArray } from 'util'
class ListPost extends Component {
    render() {
        const { posts, postOrder } = this.props
        if (postOrder === 'voteScore' && isArray(posts)) {
            posts.sort(sortBy('voteScore'))
        } else if (postOrder === 'timestamp' && isArray(posts)) {
            posts.sort(sortBy('timestamp'))
        }
        return (
            <div className="App">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            {posts.length > 0 ?
                                <div>
                                    <label>Sort By</label>
                                    <select onChange={(event) => this.props.setPostSortOrder(event.target.value)}>
                                        <option value="voteScore">Vote Score</option>
                                        <option value="timestamp">timestamp</option>
                                    </select>
                                </div> :
                                <div className="alert alert-danger" role="alert">
                                    <strong></strong> No Post Found.
                                </div>
                            }
                            {posts.length > 0 && posts.map(post => (
                                <SinglePost key={post.id} post={post} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ posts, postOrder }) => ({ posts, postOrder })
export default connect(mapStateToProps, { setPostSortOrder })(ListPost)


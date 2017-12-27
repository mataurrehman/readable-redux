import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchSinglePost } from './../actions/post_actions'
import { getAllCategories } from './../actions/category_actions'
import { getPostComments } from './../actions/comment_actions'
import { Link } from 'react-router-dom'
import NotFound from './NotFound'
import Comment from './Comment'

class PostDetail extends Component {
    componentWillMount() {
        this.props.fetchSinglePost(this.props.match.params.postId);
        this.props.getPostComments(this.props.match.params.postId);
    }
    componentWillReceiveProps(nextProps) {
    }
    handleSubmit(event) {
        event.preventDefault();
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        const { comments } = this.props
        console.log(comments)
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h3>Comments</h3>
                    </div>
                </div>
                {comments.map((comment) => (
                    <Comment comment={comment} key={comment.id} />

                ))}
            </div>
        )
    }
}

const mapStateToProps = ({ posts, comments }) => ({ posts, comments })
export default connect(mapStateToProps, { fetchSinglePost, getAllCategories, getPostComments })(PostDetail)

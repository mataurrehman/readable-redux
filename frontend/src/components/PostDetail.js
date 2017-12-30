import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchSinglePost } from './../actions/post_actions'
import { getAllCategories } from './../actions/category_actions'
import { getPostComments } from './../actions/comment_actions'
import NotFound from './NotFound'
import Comment from './Comment'
import SinglePost from './SinglePost'
import CommentForm from './CommentForm'

class PostDetail extends Component {
    state = {
        deleted: false
    }
    componentDidMount() {
        this.props.fetchSinglePost(this.props.match.params.postId);
        this.props.getPostComments(this.props.match.params.postId);
    }
    componentWillReceiveProps(nextProps) {
        if (!nextProps.posts.length) {
            this.setState({ deleted: true })
        }
    }
    handleSubmit(event) {
        event.preventDefault();
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        const { comments, posts } = this.props
        const { deleted } = this.state
        return (
            (deleted)
                ? <NotFound />
                :
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            {posts.length ?
                                <SinglePost post={posts[0]} />
                                : ''
                            }
                            <h3>Comments</h3>
                        </div>
                    </div>
                    {comments.map((comment) => (
                        <Comment comment={comment} key={comment.id} />

                    ))}
                    {comments.length === 0 && (
                        <div>No comments found for this post</div>
                    )
                    }
                    <br />
                    {<CommentForm />}
                </div>
        )
    }
}

const mapStateToProps = ({ posts, comments }) => ({ posts, comments })
export default connect(mapStateToProps, { fetchSinglePost, getAllCategories, getPostComments })(PostDetail)

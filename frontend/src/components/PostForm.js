import React, { Component } from 'react';
import { connect } from 'react-redux'
import { editPost, fetchSinglePost, createPost } from './../actions/post_actions'
import { getAllCategories } from './../actions/category_actions'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import NotFound from './NotFound'

class PostForm extends Component {
    state = {
        title: '',
        body: '',
        author: '',
        category: 'react',
        isEditMode: false,
        postDeleted: false
    }
    componentDidMount() {
        if (this.props.match.params.postId) {
            this.setState({ isEditMode: true });
            this.props.fetchSinglePost(this.props.match.params.postId);
        } else {
            this.props.getAllCategories();
        }
    }
    componentWillReceiveProps(nextProps) {
        if (this.state.isEditMode) {
            if (nextProps.posts.length > 0 && nextProps.posts[0].title) {
                this.setState({ title: nextProps.posts[0].title, body: nextProps.posts[0].body })
            } else {
                this.setState({ postDeleted: true });
            }
        }
    }
    handleSubmit(event) {
        event.preventDefault();
        if (this.state.isEditMode) {
            this.props.editPost(this.props.match.params.postId, { title: this.state.title, body: this.state.body })
        } else {
            this.props.createPost({ title: this.state.title, body: this.state.body, author: this.state.author, category: this.state.category }, () => {
                this.props.history.push('/');
            })
        }
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        const { posts, categories } = this.props
        const { title, body, author, isEditMode, postDeleted } = this.state
        return (
            (postDeleted || !posts.length)
                ? <NotFound />
                :
                <div className="container">
                    <form onSubmit={(event) => this.handleSubmit(event)} className="form-horizontal">
                        <div className="form-group">
                            <label htmlFor="title" className="col-sm-2 control-label">Title</label>
                            <div className="col-sm-10">
                                <input id="title" name="title" component="input" type="text" className="form-control" placeholder="Post Title" value={title} onChange={this.handleChange.bind(this)} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="body" className="col-sm-2 control-label">Post Body</label>
                            <div className="col-sm-10">
                                <input id="body" name="body" component="input" type="text" className="form-control" placeholder="Post Body" value={body} onChange={this.handleChange.bind(this)} />
                            </div>
                        </div>
                        {
                            !isEditMode ?
                                <div>
                                    <div className="form-group">
                                        <label htmlFor="author" className="col-sm-2 control-label">Author</label>
                                        <div className="col-sm-10">
                                            <input id="author" name="author" component="input" type="text" className="form-control" placeholder="Author" value={author} onChange={this.handleChange.bind(this)} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="category" className="col-sm-2 control-label">Category</label>
                                        <div className="col-sm-10">
                                            <select id="category" name="category" className="form-control" onChange={this.handleChange.bind(this)}>
                                                {categories.map((category, index) =>
                                                    <option key={index} value={category.name}>{category.name}</option>
                                                )}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                : ''
                        }

                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-4">
                                <button type="submit" className="btn btn-primary">{isEditMode ? 'Update' : 'Create'}</button>&nbsp;
                            <Link to='/' className="btn btn-danger">Back</Link>
                            </div>
                        </div>
                    </form>
                </div>
        )
    }
}

const mapStateToProps = ({ categories, posts }) => ({ categories, posts })
export default withRouter(connect(mapStateToProps, { editPost, fetchSinglePost, createPost, getAllCategories })(PostForm))

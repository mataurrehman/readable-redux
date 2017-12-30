import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { postVote, deletePost } from './../actions/post_actions'
import moment from 'moment'

class SinglePost extends Component {
    render() {
        const { post } = this.props
        return (
            <div className="panel panel-primary" key={post.id}>
                <div className="panel-heading">
                    <h3 className="panel-title">
                        <Link to={`/${post.id}/detail`} >{post.title}</Link></h3>
                </div>
                <div className="panel-body">
                    <li className="list-group-item text-left">
                        <div className="pull-right btn-toolbar">
                            <button className="btn btn-danger" onClick={() => this.props.deletePost(post.id)}>
                                <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                                <span><strong>Delete</strong></span>
                            </button>
                            <Link to={`/${post.category}/${post.id}/edit`} className="btn btn-primary a-btn-slide-text">
                                <span className="glyphicon glyphicon-edit" aria-hidden="true"></span>
                                <span><strong>Edit</strong></span>
                            </Link>
                        </div>
                        <p>{post.body}</p>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="text-left col-md-9">
                                    <div className="badge">{moment(post.timestamp).format("dddd MMMM Do YYYY")}</div>
                                    <h4><span className="label label-primary">{post.category}</span></h4>
                                    <div> <span className="glyphicon glyphicon-user" aria-hidden="true"></span>{post.author}</div>
                                </div>
                                <div className="text-right col-md-3">
                                    <button type="button" className="btn btn-default btn-sm" onClick={() => this.props.postVote(post.id, 'upVote')}>
                                        <span className="glyphicon glyphicon-chevron-up"></span>
                                    </button>
                                    <h5><span className="badge">{post.voteScore}</span></h5>
                                    <button type="button" className="btn btn-default btn-sm" onClick={() => this.props.postVote(post.id, 'downVote')}>
                                        <span className="glyphicon glyphicon-chevron-down"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                </div>
            </div>
        )
    }
}

export default connect(null, { postVote, deletePost })(SinglePost)




import React, { Component } from 'react';
import { VoteOnComment, deleteComment } from '../actions/comment_actions'
import moment from 'moment'
import { connect } from 'react-redux'
import CommentForm from './CommentForm'


class Comment extends Component {
    state = {
        beingEdited: false
    }
    toggleEdit = () => {
        this.setState({
            beingEdited: !this.state.beingEdited
        })
    }
    render() {
        const { comment } = this.props
        return (
            (this.state.beingEdited) ?
                <CommentForm
                    toggleEdit={this.toggleEdit}
                    comment={comment}
                />
                :
                <div className="container">
                    <div className="row">
                        <div className="col-sm-1">
                            <div className="thumbnail">
                                <img className="img-responsive user-photo" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="" />
                                <div>
                                    <a className="glyphicon glyphicon-thumbs-up anchor-underline-removed" onClick={() => this.props.VoteOnComment(comment.id, "upVote")}></a>
                                    <div><b>{comment.voteScore}</b></div>
                                    <a className="glyphicon glyphicon-thumbs-down anchor-underline-removed" onClick={() => this.props.VoteOnComment(comment.id, "downVote")}></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-10">
                            <div className="panel panel-info">
                                <div className="panel-heading">
                                    <strong>{comment.author}</strong> <span className="text-muted">commented on {moment(comment.timestamp).format("dddd MMMM Do YYYY")}</span>
                                </div>
                                <div className="panel-body">
                                    {comment.body}
                                </div>
                                <div className="panel-footer clearfix">
                                    <div className="pull-right">
                                        <a className="glyphicon glyphicon-pencil anchor-underline-removed" onClick={() => this.toggleEdit()}></a>
                                        <a className="glyphicon glyphicon-remove anchor-underline-removed" onClick={() => this.props.deleteComment(comment.id)} style={{ marginLeft: 5 }}></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

const mapStateToProps = ({ comments }) => ({ comments })

export default connect(mapStateToProps, { VoteOnComment, deleteComment })(Comment)
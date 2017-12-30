import React, { Component } from 'react';
import { connect } from 'react-redux'
import { editComment, addComment } from './../actions/comment_actions'

class CommentForm extends Component {
    constructor(props){
        super(props)
        this.initialState = {
            author: '',
            body: ''
        }
        this.state = this.initialState
    }
    componentWillMount() {
        if (this.props.comment) {
            this.setState({
                author: this.props.comment.author,
                body: this.props.comment.body
            })
        }
    }
    handleSubmit(event) {
        event.preventDefault();
        if (this.props.comment) {
            this.props.editComment(this.props.comment.id, {body:this.state.body, author:this.state.author,parentId:this.props.posts[0].id}, () =>{
                this.props.toggleEdit();
            })
        } else {
            this.props.addComment({body:this.state.body, author:this.state.author,parentId:this.props.posts[0].id})
            this.setState(this.initialState)
        }
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        const { comment } = this.props
        const { author, body } = this.state
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <fieldset>
                    <legend>{comment ? 'Edit' : 'New'} Commnent</legend>
                    <div className='row'>
                        <div className="col-sm-12">
                            <div className="col-sm-10">
                                <div className="col-sm-3"></div>
                                <div className='col-sm-7'>
                                    <div className='form-group'>
                                        <label htmlFor="author">Author</label>
                                        <input className="form-control" id="author" name="author" type="text" value={author} onChange={this.handleChange.bind(this)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-10">
                                <div className="col-sm-3"></div>
                                <div className='col-sm-7'>
                                    <div className='form-group'>
                                        <label htmlFor="body">Body</label>
                                        <textarea className="form-control" id="body" name="body" rows="4" value={body} onChange={this.handleChange.bind(this)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-10">
                                <div className="col-sm-3"></div>
                                <div className='col-sm-7'>
                                    <div className='form-group'>
                                        <button className="btn btn-primary">{comment ? 'Edit' : 'Add'} Commnent</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </form>
        )
    }
}
const mapStateToProps = ({ posts }) => ({ posts })
export default connect(mapStateToProps, { editComment, addComment })(CommentForm)
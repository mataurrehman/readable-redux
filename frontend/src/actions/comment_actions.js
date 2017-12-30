import * as comment_actionlist from '../constants/comment_actionlist'
import API from './../constants/api'
import uuidv4 from 'uuid/v4'

export const getPostComments = (post_id) => {
    return dispatch => {
        return API.get(`/posts/${post_id}/comments`)
            .then(response => {
                dispatch(fetchPostCommentsSuccess(response.data))
            });
    }
}
const fetchPostCommentsSuccess = (comments) => {
    return {
        type: comment_actionlist.GET_ALL_COMMENTS,
        comments
    }
}
export const VoteOnComment = (commentId, vote) => {
    return dispatch => {
        API.post(`comments/${commentId}`, { option: vote })
            .then(response => response.data)
            .then(comment => dispatch(VoteOnCommentSuccess(comment)))
    }
}

const VoteOnCommentSuccess = (comment) => {
    return {
        type: comment_actionlist.VOTE_ON_COMMENT,
        comment
    }
}
export const addComment = (data) => {
    const postData = { ...data, id: uuidv4(), timestamp: Date.now() }
    return dispatch => {
        API.post(`comments`, postData)
            .then(response => response.data)
            .then(comment => dispatch(postCommentSuccess(comment)))
    }
}

const postCommentSuccess = (comment) => {
    return {
        type: comment_actionlist.ADD_COMMENT,
        comment
    }
}

export const editComment = (commentId, postData, callback) => {
    return dispatch => {
        API.put(`comments/${commentId}`, postData).then(response => {
            callback();
            dispatch({ type: comment_actionlist.EDIT_COMMENT, comment: response.data });
        });
    };
}
export const deleteComment = (commentId) => (dispatch) => {
    API.delete(`comments/${commentId}`)
        .then(response => {
            dispatch({
                type: comment_actionlist.DELETE_COMMENT,
                comment: response.data
            })
        });
}
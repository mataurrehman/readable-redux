import { GET_ALL_COMMENTS, ADD_COMMENT, VOTE_ON_COMMENT, EDIT_COMMENT, DELETE_COMMENT } from '../constants/actionlist'
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
        type: GET_ALL_COMMENTS,
        comments
    }
}
// export const getCategoryPosts = (category) => {
//     return dispatch => {
//         return API.get(category + '/posts')
//             .then(response => {
//                 dispatch(fecthCategoryPostSuccess(response.data))
//             });
//     }
// }
// const fecthCategoryPostSuccess = (posts) => {
//     return {
//         type: FETCH_CATEGORY_POSTS,
//         posts
//     }
// }
export const VoteOnComment = (commentId, vote) => {
    return dispatch => {
        API.post(`comments/${commentId}`, { option: vote })
            .then(response => response.data)
            .then(comment => dispatch(VoteOnCommentSuccess(comment)))
    }
}

const VoteOnCommentSuccess = (comment) => {
    return {
        type: VOTE_ON_COMMENT,
        comment
    }
}

export const editComment = (commentId, postData) => {
    return dispatch => {
        API.put(`comments/${commentId}`, postData)
            .then(response => response.data)
            .then(comment => dispatch(editCommentSuccess(comment)))
    }
}

const editCommentSuccess = (comment) => {
    return {
        type: EDIT_COMMENT,
        comment
    }
}

export const deleteComment = (commentId) => (dispatch) => {
    API.delete(`comments/${commentId}`)
        .then(response => {
            dispatch(deleteCommentSuccess(response.data))
        });
}
const deleteCommentSuccess = (comment) => {
    return {
        type: DELETE_COMMENT,
        comment
    }
}

// export const fetchSinglePost = (post_id) => {
//     return dispatch => {
//         API.get(`posts/${post_id}`)
//             .then(response => {
//                 dispatch(fetchSinglePostSuccess(response.data))
//             });
//     }
// }

// const fetchSinglePostSuccess = (post) => {
//     return {
//         type: GET_SINGLE_POST,
//         post
//     }
// }

// export const deletePost = (post_id) => (dispatch) => {
//     API.delete(`posts/${post_id}`)
//         .then(response => {
//             dispatch(deletePostSuccess(response.data))
//         });
// }
// const deletePostSuccess = (post) => {
//     return {
//         type: DELETE_POST,
//         post
//     }
// }
// export function createPost(data, callback) {
//     const postData = { ...data, id: uuidv4(), timestamp: Date.now() }
//     return dispatch => {
//         API.post(`/posts`, postData).then(res => {
//             callback();
//             dispatch({ type: CREATE_POST, post: res.data });
//         });
//     };
// }
// export const setPostSortOrder = order => dispatch =>
//   dispatch({
//     type: POST_SORT_ORDER,
//     order
//   });

import * as posts_actionlist from '../constants/posts_actionlist'
import API from './../constants/api'
import uuidv4 from 'uuid/v4'

export const getAllPosts = () => {
    return dispatch => {
        return API.get('posts')
            .then(response => {
                dispatch(fetchAllPostSuccess(response.data))
            });
    }
}
const fetchAllPostSuccess = (posts) => {
    return {
        type: posts_actionlist.FETCH_ALL_POSTS,
        posts
    }
}
export const getCategoryPosts = (category) => {
    return dispatch => {
        return API.get(category + '/posts')
            .then(response => {
                dispatch(fecthCategoryPostSuccess(response.data))
            });
    }
}
const fecthCategoryPostSuccess = (posts) => {
    return {
        type: posts_actionlist.FETCH_CATEGORY_POSTS,
        posts
    }
}
export const postVote = (postId, vote) => {
    return dispatch => {
        API.post(`posts/${postId}`, { option: vote })
            .then(response => response.data)
            .then(post => dispatch(postVoteSuccess(post)))
    }
}

const postVoteSuccess = (post) => {
    return {
        type: posts_actionlist.VOTE_ON_POST,
        post
    }
}

export const editPost = (postId, postData) => {
    return dispatch => {
        API.put(`posts/${postId}`, postData)
            .then(response => response.data)
            .then(post => dispatch(postEditSuccess(post)))
    }
}

const postEditSuccess = (post) => {
    return {
        type: posts_actionlist.EDIT_POST,
        post
    }
}

export const fetchSinglePost = (post_id) => {
    return dispatch => {
        API.get(`posts/${post_id}`)
            .then(response => {
                dispatch(fetchSinglePostSuccess(response.data))
            });
    }
}

const fetchSinglePostSuccess = (post) => {
    return {
        type: posts_actionlist.GET_SINGLE_POST,
        post
    }
}

export const deletePost = (post_id) => (dispatch) => {
    API.delete(`posts/${post_id}`)
        .then(response => {
            dispatch(deletePostSuccess(response.data))
        });
}
const deletePostSuccess = (post) => {
    return {
        type: posts_actionlist.DELETE_POST,
        post
    }
}
export function createPost(data, callback) {
    const postData = { ...data, id: uuidv4(), timestamp: Date.now() }
    return dispatch => {
        API.post(`/posts`, postData).then(response => {
            callback();
            dispatch({ type: posts_actionlist.CREATE_POST, post: response.data });
        });
    };
}
export const setPostSortOrder = order => dispatch =>
  dispatch({
    type: posts_actionlist.POST_SORT_ORDER,
    order
  });

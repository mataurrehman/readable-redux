import * as posts_actionlist from '../constants/posts_actionlist'

const post = (state = [], action) => {
    switch (action.type) {
        case posts_actionlist.FETCH_ALL_POSTS:
        case posts_actionlist.FETCH_CATEGORY_POSTS:
            return action.posts
        case posts_actionlist.GET_SINGLE_POST:
            if (state.length) {
                return state.filter(post => post.id === action.post.id)
            } else {
                if (action.post.id) {
                    return state.concat(action.post)
                } else {
                    return state
                }
            }
        case posts_actionlist.EDIT_POST:
            return state.map(
                (post) => post.id === action.post.id ? action.post : post)
        case posts_actionlist.CREATE_POST:
            return state.concat(action.post)
        case posts_actionlist.DELETE_POST:
            return state.filter(post => post.id !== action.post.id)
        case posts_actionlist.VOTE_ON_POST:
            return state.map(
                (post) => post.id === action.post.id ? action.post : post)
        default:
            return state
    }
}

export default post
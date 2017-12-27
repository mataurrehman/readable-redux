import { FETCH_ALL_POSTS, FETCH_CATEGORY_POSTS, VOTE_ON_POST, GET_SINGLE_POST, EDIT_POST, DELETE_POST, CREATE_POST } from '../constants/actionlist'
export default function category(state = [], action) {
    switch (action.type) {
        case FETCH_ALL_POSTS:
        case FETCH_CATEGORY_POSTS:
            return action.posts
        case GET_SINGLE_POST:
            if (state.length) {
                return state.filter(post => post.id === action.post.id)
            } else {
                if (action.post.id) {
                    return state.concat(action.post)
                } else {
                    return state
                }
            }
        case EDIT_POST:
            return state.map(
                (post) => post.id === action.post.id ? action.post : post)
        case CREATE_POST:
            return state.concat(action.post)
        case DELETE_POST:
            return state.filter(post => post.id !== action.post.id)
        case VOTE_ON_POST:
            return state.map(
                (post) => post.id === action.post.id ? action.post : post)
        default:
            return state
    }
}
import { GET_ALL_COMMENTS, ADD_COMMENT, VOTE_ON_COMMENT, EDIT_COMMENT, DELETE_COMMENT } from '../constants/actionlist'

export default function comments(state = [], action) {
    switch (action.type) {
        case GET_ALL_COMMENTS:
            return action.comments
        case EDIT_COMMENT:
            return state.map(
                (comment) => comment.id === action.comment.id ? action.comment : comment)
        case ADD_COMMENT:
            return state.concat(action.comment)
        case DELETE_COMMENT:
            return state.filter(comment => comment.id !== action.comment.id)
        case VOTE_ON_COMMENT:
            return state.map(
                (comment) => comment.id === action.comment.id ? action.comment : comment)
        default:
            return state
    }
}
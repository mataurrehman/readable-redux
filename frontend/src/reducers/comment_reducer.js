import * as comment_actionlist from '../constants/comment_actionlist'

export default function comments(state = [], action) {
    switch (action.type) {
        case comment_actionlist.GET_ALL_COMMENTS:
            return action.comments
        case comment_actionlist.EDIT_COMMENT:
            return state.map(
                (comment) => comment.id === action.comment.id ? action.comment : comment)
        case comment_actionlist.ADD_COMMENT:
            return state.concat(action.comment)
        case comment_actionlist.DELETE_COMMENT:
            return state.filter(comment => comment.id !== action.comment.id)
        case comment_actionlist.VOTE_ON_COMMENT:
            return state.map(
                (comment) => comment.id === action.comment.id ? action.comment : comment)
        default:
            return state
    }
}
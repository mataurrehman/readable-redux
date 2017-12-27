import categories from './category_reducer'
import posts from './post_reducer'
import postOrder from './post_sort_reducer'
import comments from './comment_reducer'
import { combineReducers } from 'redux'

export default combineReducers({
    categories, posts,comments, postOrder
})
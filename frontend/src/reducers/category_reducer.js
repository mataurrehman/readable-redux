import { FETCH_ALL_CATEGORIES } from '../constants/actionlist'

export default function category(state = [], action) {
    switch (action.type) {
        case FETCH_ALL_CATEGORIES:
            return action.data.categories
        default:
            return state
    }
}
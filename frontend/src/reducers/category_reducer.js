import * as category_actionlist from '../constants/category_actionlist'

const category = (state = [], action) => {
    switch (action.type) {
        case category_actionlist.FETCH_ALL_CATEGORIES:
            return action.data.categories
        default:
            return state
    }
}

export default category
import * as category_actionlist from '../constants/category_actionlist'

import API from './../constants/api'

export function getAllCategories() {
    return dispatch => {
        return API.get('categories')
            .then(response => {
                dispatch(fetchCategorySuccess(response.data))
            });
    }
}

function fetchCategorySuccess(data) {
    return {
        type: category_actionlist.FETCH_ALL_CATEGORIES,
        data
    }
}
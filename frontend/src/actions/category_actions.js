import { FETCH_ALL_CATEGORIES } from '../constants/actionlist'
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
        type: FETCH_ALL_CATEGORIES,
        data
    }
}
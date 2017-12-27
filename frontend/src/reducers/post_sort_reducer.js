import { POST_SORT_ORDER } from "../constants/actionlist";

const inintialState = 'votescore';

export default function (state = inintialState, action) {
    switch (action.type) {
        case POST_SORT_ORDER: {
            return action.order;
        }
        default: {
            return state;
        }
    }
};
import {GET_FEED, SET_FEED} from '../actions';

const initialState = {
    feed: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_FEED:
            return {...state, isGettingFeed: true};
        case SET_FEED:
            return {...state, feed: action.feed};
        default:
            return state;
    }
}
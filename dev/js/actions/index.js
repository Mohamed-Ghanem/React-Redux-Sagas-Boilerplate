// export const selectUser = (user) => {
//     console.log("You clicked on user: ", user.first);
//     return {
//         type: 'USER_SELECTED',
//         payload: user
//     }
// };

export const GET_FEED = 'GET_FEED';

export const getFeed = () => {
    return {
        type: GET_FEED
    }
};

export const SET_FEED = 'SET_FEED';

export const setFeed = (feed) => {
    return {
        type: SET_FEED,
        feed: feed
    }
};

export const FEED_SUCCESS = 'FEED_SUCCESS';
export const FEED_ERROR = 'FEED_ERROR';

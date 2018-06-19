/**
 * @module Sagas/Feed
 * @desc Feed
 */

import {all, call, put, takeLatest} from 'redux-saga/effects';
import {FEED_ERROR, FEED_SUCCESS, GET_FEED, setFeed} from '../actions';
import {getFeed as getFeedService} from '../services/feed';

/**
 * Get Feed
 */
export function* getFeed() {
    try {
        const fieldResponse = yield call(getFeedService);

        yield put({
            type: FEED_SUCCESS
        });

        yield put(setFeed(fieldResponse.data))
    }
    catch (err) {
        yield put({
            type: FEED_ERROR,
            payload: err,
        });
    }
}

/**
 * Feed Sagas
 */
export default function* root() {
    console.log('SAGAS ROOT');
    yield all([
        takeLatest(GET_FEED, getFeed),
    ]);
}

// function* watchGetFeed() {
//     yield takeLatest('GET_FEED', getFeedAsync);
// }
//
// function* getFeedAsync() {
//     // try {
//     //     yield put(requestDog());
//     //     const data = yield call(() => {
//     //             return fetch('https://dog.ceo/api/breeds/image/random')
//     //                 .then(res => res.json())
//     //         }
//     //     );
//     //     yield put(requestDogSuccess(data));
//     // } catch (error) {
//     //     yield put(requestDogError());
//     // }
//
//     console.log('SAGA GET FEED');
//     debugger;
//     try {
//         debugger;
//         const fieldResponse = yield call(FeedService.getFeed);
//         debugger;
//
//         yield put({
//             type: FEED_SUCCESS,
//         });
//     }
//     catch (err) {
//         yield put({
//             type: FEED_ERROR,
//             payload: err,
//         });
//     }
// }
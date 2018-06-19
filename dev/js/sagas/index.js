import { all, fork } from 'redux-saga/effects';

import feed from './feed';

/**
 * rootSaga
 */
export default function* root() {
    yield all([
        fork(feed)
    ]);
}
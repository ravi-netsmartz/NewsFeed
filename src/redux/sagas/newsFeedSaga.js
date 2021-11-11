// Imports: Dependencies
import { takeLatest, put, select } from 'redux-saga/effects';

const getNewsFeed = state => state.newsFeedReducer.newsFeed

function* fetchNews(params) {

    yield put({
        type: 'NEWS_FETCHING',
        value: true
    });

    const newsFeed = yield select(getNewsFeed)

    const { category, page, search } = params.value;
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=0a8cbef4d28b4a7a8be2d29b8adb5401&pageSize=10&page=${page}`
    if (category !== "") {
        url = url + `&category=${category}`;
    }
    if (search !== "") {
        url = url + `&q=${search}`;
    }
    try {
        const json = yield fetch(url)
            .then(response => response.json());
        let data = json.articles;
        let totalRecords = json.totalResults;
        if (page > 1) {
            data = newsFeed.concat(json.articles)
        }
        if (data === undefined) {
            data = [];
            totalRecords = 0;
        }
        // Dispatch Action To Redux Store
        yield put({
            type: 'NEWS_RECEIVED',
            data: data,
            totalRecords: totalRecords
        });
    }
    catch (error) {
        console.log(error);
    }
}

export function* actionWatcher() {
    // Take Last Action
    yield takeLatest('FETCH_NEWS', fetchNews);
}
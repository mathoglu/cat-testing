import axios from 'axios';

const _client = axios.create({
  baseURL: 'https://api.thecatapi.com/v1/',
  headers: {
       'Content-Type': 'application/json',
       'x-api-key': process.env.REACT_APP_API_KEY || 'error_no_key_in_env',
    }
});

export function getNewCat() {
    return (dispatch) => {
        dispatch(catRequest());
        return _client.get('images/search').then(
            (resp) => {
                dispatch(catSuccess(resp.data[0]))
            },
            (err) => {
                dispatch(catFailed(err));
            }
        )
    }
}

export function catSuccess(cat) {
    return {
        type: 'NEW_CAT',
        cat,
    }
}

export function catFailed(err) {
    return {
        type: 'NO_NEW_CAT',
        err,
    }
}

export function catRequest() {
    return {
        type: 'NEW_CAT_LOADING',
    }
}
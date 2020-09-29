import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import photosReducer from '../reducers/photosReducer';


const rootReducer = combineReducers(
    {
        photos: photosReducer,
    }
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const configureStore = () => {
    return createStore(rootReducer, composeEnhancers(
        applyMiddleware(thunk)
    ))
}

export default configureStore;
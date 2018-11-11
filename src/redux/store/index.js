import {createStore,applyMiddleware,compose} from 'redux'
import thunk from "redux-thunk"
import reducers from '../reducers'

// export default createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//const middleWare = [thunk];
export default createStore(
    reducers,
   // applyMiddleware(...middleWare)
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

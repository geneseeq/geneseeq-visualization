import React from 'react'
//import { render }    from 'react-dom'
//import { Provider }  from 'react-redux'
import {createStore} from 'redux'
import patients from './reducers/patients'
import App from './components/App'

commonjs({
    namedExports: {
        'node_modules/react-dom/index.js': ['render'],
        'node_modules/react-redux/index.js': ['Provider']
    }
})

let store = createStore(patients)

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>, document.getElementById('root'))

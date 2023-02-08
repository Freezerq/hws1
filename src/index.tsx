import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './s1-main/App'
import reportWebVitals from './reportWebVitals'
import store1 from './s2-homeworks/hw10/bll/store'
import {Provider} from 'react-redux'
import {BrowserRouter} from "react-router-dom";
import {store} from "./s2-homeworks/hw12/bll/themeReducer";
// <Provider store={store}>
//
// </Provider>

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        {/*для дз 10*/}
                <App/>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    NavLink
} from "react-router-dom";
import hello from "../pages/hello";
import hello2 from "../pages/hello2";
import React from 'react'
import Nofound from './nofound'
import TopList from '../pages/TopList'
import createStore from '../redux/store'
import router from "./index.js";
export default class Root extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const Provider = require("react-redux").Provider;
        const store = createStore();
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <div className="title">This is a react ssr demo</div>
                        <ul className="nav">
                            <li><NavLink to="/">hello</NavLink></li>
                            <li><NavLink to="/two">hello2</NavLink></li>
                        </ul>
                        <div className="view">
                            <Switch>
                                {/*{router.map((route,i)=> {*/}
                                    {/*return (*/}
                                        {/*<Route path={route.path} exact={route.exact} key={i}*/}
                                               {/*render={(props) => <route.component {...props} router={route.routes}/>}*/}
                                        {/*/>*/}
                                    {/*)*/}
                                {/*})}*/}

                                <Route path="/" exact component={ TopList} />
                                <Route path="/one" exact component={hello} />
                                <Route path="/two" component={hello2} />
                                <Nofound code={404}>
                                    <div>
                                        <h1>Not Found</h1>
                                    </div>
                                </Nofound>
                            </Switch>
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}
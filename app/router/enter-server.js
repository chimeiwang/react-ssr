import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    NavLink,
    StaticRouter
} from "react-router-dom";
import hello from "../pages/hello";
import hello2 from "../pages/hello2";
import React from 'react'
import Nofound from './nofound'
import TopList from '../pages/TopList'
import createStore from '../redux/store'
import Loadable from "loadable-components";
import router from "./index.js";
import {Provider} from 'react-redux'
class Root extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div>
                <div className="title">This is a react ssr demo</div>
                <ul className="nav">
                    <li><NavLink to="/">hello</NavLink></li>
                    <li><NavLink to="/two">hello2</NavLink></li>
                </ul>
                <div className="view">
                    <Switch>
                        {router.map((route,i)=> {
                            return (
                                <Route path={route.path} exact={route.exact} key={i}
                                       render={(props) => <route.component {...props} router={route.routes}/>}
                                />
                            )
                        })}
                        <Nofound code={404}>
                            <div>
                                <h1>Not Found</h1>
                            </div>
                        </Nofound>
                    </Switch>
                </div>
            </div>
        );
    }
}

const ServerRouter = (context, url,store)=>{
    const App = () => {
        return (
            <Provider store={store}>
                <StaticRouter context={context} location={url}>
                    <Root/>
                </StaticRouter>
            </Provider>
        )
    }
    return <App/>;
}

module.exports = {
    ServerRouter
};
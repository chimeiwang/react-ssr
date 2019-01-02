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

export default class Root extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router>
                <div>
                    <div className="title">This is a react ssr demo</div>
                    <ul className="nav">
                        <li><NavLink to="/">hello</NavLink></li>
                        <li><NavLink to="/two">hello2</NavLink></li>
                    </ul>
                    <div className="view">
                        <Switch>
                            <Route path="/" exact component={hello} />
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
        );
    }
}
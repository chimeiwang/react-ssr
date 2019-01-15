import React from "react";
import { connect } from "react-redux"
import { NavLink } from "react-router-dom";
import {something} from "../redux/action";
import {bindActionCreators} from "redux";

// import { setClientLoad, fatchTopList } from "../redux/actions";
import ListItem from "./ListItem";
// import "../assets/top-list.styl";

class TopList extends React.Component {
    static asyncData(store) {
        return store.dispatch(something());
    }
    constructor(props) {
        super(props);
        this.state = {
            store: '123'
        }
    }
    componentWillMount(){
        this.props.something();
        // setTimeout(()=>{
        //     this.setState({
        //         store:'456sss'
        //     })
        // })
    }
    componentDidMount() {
        // 判断是否需要加载数据
        //   this.props.something();

        //   if (this.props.clientShouldLoad === true) {
        //   this.props.dispatch(something());
        // } else {
        //   // 客户端执行后，将客户端是否加载数据设置为true
        //   this.props.dispatch(setClientLoad(true));
        // }
    }
    render() {
        const { match, list } = this.props;
        return (
            <div>
                toplist{this.state.store}
                <ul className="list-wrapper">

                    {
                        list?list.map(item => {
                            return <li className="list-item" key={item.id}>
                                <div to={`${match.url}/${item.id}`}><ListItem {...item} /></div>
                            </li>;
                        }):()=>{}
                    }
                </ul>
            </div>
        )
    }
}

export default TopList;

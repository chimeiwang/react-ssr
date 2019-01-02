import React from "react";
import { Route } from "react-router-dom";

const Nofound = (props) => (
    <Route render={({nofoundContext}) => {
        // 客户端无staticContext对象
        // if (nofoundContext) {
        //     // 设置状态码
        //     nofoundContext.status = props.code;
        // }
        return props.children;
    }} />
);

export default Nofound;

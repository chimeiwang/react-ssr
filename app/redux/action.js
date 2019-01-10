import {getList} from "../api/index"

export const type = {
    DOSOMETHING:"DOSOMETHING"
}

export const something = ()=> {
    return (dispatch)=>{
        return getList().then(res =>{
            dispatch({
                'type': type.DOSOMETHING,
                'value': res.data.data.topList,
            })
        })

    }
}
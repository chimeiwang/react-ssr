import axios from "axios";
import jsonp from "jsonp";

const topListUrl = "https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg";
const topDetailUrl = "https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?&type=top";

function getList() {
    try{
        console.log(window)
        return new Promise((resolve, reject) => {
            jsonp(topListUrl + "?format=jsonp", {
                param: "jsonpCallback",
                prefix: "callback"
            }, (err, data) => {
                if (!err) {
                    const response = {};
                    response.data = data;
                    resolve(response);
                } else {
                    reject(err);
                }
            });
        });
    }catch(err){
        return axios.get(topListUrl + "?format=json");
    }
}

export {
    getList,
}

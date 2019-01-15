import Loadable from "loadable-components";
import TopList from "../pages/TopList"
import hello from "../pages/hello"
import hello2 from "../pages/hello2"
const router = [
    {
        path: "/",
        component: Loadable(()=>import('../pages/TopList')),
        exact: true
    },
    {
        path: "/one",
        component: hello
    },
    {
        path: "/two",
        component:hello2
    }
];

export default router;

// export {
//     router,
// }

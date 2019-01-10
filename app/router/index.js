
import Loadable from "loadable-components";

// import Bar from "../views/Bar";
// import Baz from "../views/Baz";
// import Foo from "../views/Foo";
// import TopList from "../containers/TopList";
// import TopDetail from "../containers/TopDetail";
import TopList from "../pages/TopList"
import hello from "../pages/hello"
import hello2 from "../pages/hello2"
const router = [
    {
        path: "/",
        component: Loadable(()=>import('../pages/TopList'))
        // component: TopList
    },
    // {
    //     path: "/one",
    //     component: hello
    // },
    // {
    //     path: "/two",
    //     component:hello2
    // }
];

export default router;

// export {
//     router,
// }

// Настройка роутинга для продакшена
import {createRouter, createWebHistory} from "vue-router";
const routerHistory = createWebHistory();
//===============================================================

// Настройка роутинга для разработки
// import {createRouter, createWebHashHistory} from "vue-router";
// const routerHistory = createWebHashHistory();

//===============================================================

import HomePage from "@/pages/HomePage";
//import notFoundPage from "@/pages/NotFoundPage";

const routers = createRouter(
    {
        history: routerHistory,
        routes: [
            {
                path: "/",
                name: "home",
                component: HomePage,
                meta: {
                    title: "Главная"
                }
            },
            //
            // {
            //     path: "/:CatchAll(.*)",
            //     name: "404",
            //     component: notFoundPage,
            //     meta: {
            //         title: "404 - страница не найдена"
            //     }
            // },
        ]
    }
)

routers.beforeEach((to,from, next) => {
    document.title = `EVA - ${to.meta.title}`;
    next();
})

export default routers;
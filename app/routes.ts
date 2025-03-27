import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    index("./page/home.jsx"),
    layout("./page/indexlayout.jsx", [
        route("/project", "./page/project/project.jsx"),
        route("/blog", "./page/blog/blog.jsx"),
        route("/picture", "./page/picture/picture.jsx"),
    ])
] satisfies RouteConfig;

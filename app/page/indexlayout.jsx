import { useEffect, useState, useCallback } from "react";
import { Link, Outlet } from "react-router";

function Loginbtm() {
    const [open, setOpen] = useState(false);
    const handleClick = useCallback(() => {
        if (open) {
            setOpen(false);
        } else {
            setOpen(true);
        }
        }, [setOpen, open])

    return (
        <div className="loginbtm" onClick={handleClick} id={open? "open-login" : "close-login"}>
            <p>管理员登录</p>
            <form action="">
                <input type="password" placeholder="key" onClick={(e) => e.stopPropagation()}/>
                <button type="submit" value="" onClick={(e) => e.stopPropagation()}><i class="fa fa-sign-in" aria-hidden="true"></i></button>
            </form>
        </div>
        );
}

function Nav() {
    const [url, setUrl] = useState(null);

    useEffect(() => {
        const nowurl = window.location.pathname.split("/")[1];
        if (nowurl === "") {
            window.location.href = "/";
        }
        setUrl(nowurl);
    }, []);

    return (
        <nav>
            <ul>
                <Link to="/"><li className="home" onClick={() => setUrl("home")} id={url === "home" ? "active" : ""}><i class="fa fa-home" aria-hidden="true"></i>主页</li></Link>
                <Link to="/project"><li className="project" onClick={() => setUrl("project")} id={url === "project" ? "active" : ""}><i class="fa fa-code" aria-hidden="true"></i>项目</li></Link>
                <Link to="/blog"><li className="blog" onClick={() => setUrl("blog")} id={url === "blog" ? "active" : ""}><i class="fa fa-book" aria-hidden="true"></i>博客</li></Link>
                <Link to="/picture" className="picture" ><li onClick={() => setUrl("picture")} id={url === "picture" ? "active" : ""}><i class="fa fa-picture-o" aria-hidden="true"></i>相册</li></Link>
            </ul>
        </nav>
    );
}

export default function IndexLayout() {
    return (
    <>
       <Nav />
       <Loginbtm />
       <Outlet />
    </>
    );
};
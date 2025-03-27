import "../CSS/index.css";
import { Link } from "react-router";
import randomSentence from "../../public/RandomSentence.json"
import { createContext, useContext, useEffect, useState, useMemo, useRef, useCallback, use } from "react";

const randomSentencelist = createContext(randomSentence);

function Loginbtm() {
    const [open, setOpen] = useState(false);
    const form = useRef(null);

    const submit = useCallback(() => {
        const key = form.current.elements.key.value;
        fetch("http://localhost:8080",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    key: key
                })
            }
        )
        .then(response => response.json())
        .then(data => {
            if (data) {
                alert("登录成功");
                setOpen(false);
            } else {
                alert("登录失败");
            }
        })
       .catch(error => {
            console.log(error);
        });
    }, []);

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
            <form name="login" ref={form}>
                <input name="key" type="password" placeholder="key" onClick={(e) => e.stopPropagation()}/>
                <button type="button" value="" onClick={(e) => {
                    submit();
                    e.stopPropagation()
                    }}><i class="fa fa-sign-in" aria-hidden="true"></i></button>
            </form>
        </div>
        );
}

function Nav() {
    return (
        <nav>
            <ul>
                <Link to="/"><li><i class="fa fa-home" aria-hidden="true"></i>主页</li></Link>
                <Link to="/project"><li><i class="fa fa-code" aria-hidden="true"></i>项目</li></Link>
                <Link to="/blog"><li><i class="fa fa-book" aria-hidden="true"></i>博客</li></Link>
                <Link to="/picture"><li><i class="fa fa-picture-o" aria-hidden="true"></i>相册</li></Link>
            </ul>
        </nav>
    );
}

function Picture() {
    return (
        <Link to="/picture">
            <div className="picture">
                看我的照片墙🥰
            </div>
        </Link>
    );
}

function Connect() {
    return (
        <div className="connect">
            <span id="QQ" onClick={() => setNowConnect("QQ")}>
                <i class="fa fa-qq" aria-hidden="true"></i>
            </span>

            <span id="wechat" onClick={() => setNowConnect("wechat")}>
                <i class="fa fa-weixin" aria-hidden="true"></i>
            </span>

            <span id="telegram" onClick={() => setNowConnect("telegram")}>
                <i class="fa fa-telegram" aria-hidden="true"></i>
            </span>

            <span id="github" onClick={() => setNowConnect("github")}>
                <i class="fa fa-github" aria-hidden="true"></i>
            </span>

            <span id="twitter" onClick={() => setNowConnect("twitter")}>
                <i class="fa fa-twitter" aria-hidden="true"></i>
            </span>
        </div>
        );
}

function RandomSentence() {
    const sentencelist = useContext(randomSentencelist);
    const [nowSentence, setNowSentence] = useState("");
    const SelectSentence = useMemo(() => sentencelist[Math.floor(Math.random() * sentencelist.length)], []);

    useEffect(() => {
        setTimeout(() => {
            let allword = '';
            for (let i = 0; i < SelectSentence.length; i++) {
                setTimeout(() => {
                    allword = allword + SelectSentence[i];
                    setNowSentence(allword);
                }, 100 * (i + 1));
            }
        }, 1000);
        
    }, [SelectSentence, setNowSentence]);
    
    return (
        <p>{nowSentence}</p>
        );
}

function MyIntroduction() {
    return (
        <>
        <div className="introduction">
            <div className="profile">
                <img src="../../public/profile.jpg" alt="profile" />
                <div className="random-text">
                    <RandomSentence />
                </div>
            </div>

            <div className="introduction-container">
                <div className="introduction-title">
                    <h1>察里津</h1>
                    <p>广州|暨南大学</p>
                </div>
                <div className="introduction-text">
                    <ul>
                        <li>"察里津"or"茶梨"丨05丨INFP丨常驻珠三角 </li>
                        <li>音游丨wmc丨邦多利丨钢丝丨群星丨Minecraft丨碧蓝航线</li>
                        <li>术力口丨JPOP丨四夜丨雏草姬丨铁道丨偶尔考斯普雷</li>
                        <li>全栈工程师，擅长react生态前端框架，熟悉node.js后端技术</li>
                    </ul>
                </div>
                <div className="introduction-button">
                    <Connect />
                    <Picture />
                </div>
            </div>
        </div>
        <i class="fa fa-mouse-pointer mouse" aria-hidden="true"></i>
        </>
    );
}
    
export default function Home() {
    return (
      <>
       <Nav />
       <Loginbtm />
        <div className="container">
          <MyIntroduction />
       </div>
      </>
    );
}
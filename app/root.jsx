import { Links, Outlet } from "react-router";
import profilepic from "../public/profile.jpg";
import "/public/CSS/index.css"
import "/public/CSS/project.css"

export function links() {
  return [
    {
      rel: "stylesheet",
      href:"https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/font-awesome/4.7.0/css/font-awesome.min.css"
    }
  ]};

export default function Root() {
  return (
    <html>
      <head>
        <title>My Blog</title>
        <Links />
      </head>
      <body>
        <Outlet profilepic={profilepic} />
      </body>
    </html>
  );
}
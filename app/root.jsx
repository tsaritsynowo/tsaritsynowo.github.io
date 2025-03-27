import { Links, Outlet } from "react-router";
import profilepic from "../public/profile.jpg";
import "/public/CSS/index.css"
import "/public/CSS/project.css"
import ico from "/public/fav.ico"
import { useState } from "react";

export function links() {
  return [
    {
      rel: "stylesheet",
      href:"https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/font-awesome/4.7.0/css/font-awesome.min.css"
    },
    {
      rel: "icon",
      type: "image/x-icon",
      href: ico
    }
  ]};

export default function Root() {
  return (
    <html>
      <head>
        <title>察里津的blog</title>
        <Links />
      </head>
      <body>
        <Outlet profilepic={profilepic} />
      </body>
    </html>
  );
}
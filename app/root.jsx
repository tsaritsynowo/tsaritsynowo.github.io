import { Outlet } from "react-router";

export default function Root() {
  return (
    <html>
      <head>
        <title>My Blog</title>
        <link rel="stylesheet" href="https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/font-awesome/4.7.0/css/font-awesome.min.css" />
      </head>
      <body>
        <Outlet />
      </body>
    </html>
  );
}
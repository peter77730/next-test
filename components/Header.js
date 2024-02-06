import "../src/app/globals.css";
import React from "react";
import Login from "./Login";

const Header = () => {
  return (
    <>
      <Login />
      <header>
        <div className="w-full h-auto flex items-center justify-center gap-6">
          <a href="/">首頁</a>
          <a href="/about">關於我們</a>
          <a href="/news">最新消息</a>
        </div>
      </header>
    </>
  );
};

export default Header;

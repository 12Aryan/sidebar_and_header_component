"use client";
import React, { useState } from "react";
import Link from "next/link";
import { headerData } from "./HeaderData";

const Header = (prop) => {
  const [toggle, setToggle]= useState(false)
   const toggleSidebar=()=>{
    return setToggle(!toggle)
  }
 prop.text(toggle)
  return (
    <>
      <div className="flex w-full justify-between">

        <div className="logo" onClick={toggleSidebar}>
          <h6 className="cursor-pointer">=</h6>
        </div>
        <div className="flex gap-5"> 
          {headerData.map((item, id) => {
            return <Link href={`/${item.route}`}>{item.route}</Link>;
          })}
        </div>
      </div>
    </>
  );
};

export default Header;

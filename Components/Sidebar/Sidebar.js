'use client'
import React, { useState } from "react";
import { sidebarData } from "./SidebarData";
import Link from "next/link";
import './sidebar.css'
const Sidebar = () => {
  const [toggle, setToggle] = useState(false)
  console.log(toggle);
  return (
    
    <>
      <div className={`${toggle?'sidebar-toggle': ''} min-h-full sidebar-parent  bg-gray-950   text-white px-2` } style= {{width: '15%'}}>
        <div className="pt-4" onClick={()=>{
         setToggle(!toggle)
        }}>
          <h1 >Logo</h1>
        </div>
        {sidebarData.map((item, id) => {
          return (
            <>
              <div className={`sidebar-items px-4 py-5 `} >
                <Link href={`/${item.route}`}>{item.route}</Link>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Sidebar;

'use client'
import React, { useState } from "react";
import { sidebarData } from "./SidebarData";
import Link from "next/link";
import './sidebar.css'
const Sidebar = ({toggle}) => {

  return (
    
    <>
      <div className={`${toggle?'sidebar-toggle': 'sidebar'} min-h-full sidebar-parent  bg-gray-950   text-white px-2` } >
        <div className="pt-4" >
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

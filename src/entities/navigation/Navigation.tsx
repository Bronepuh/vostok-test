'use client'

import { useState } from "react"

import { PagesRoutsEnum } from "../pages/store/constants";
import { NavigationItem } from "./NavigationItem";

import './navigation.css'

export function Navigation() {
  const [navActive, setNavActive] = useState(false);

  const handleNavBtnClick = () => {
    setNavActive(!navActive)
  }

  return (
    <>
      <nav id="nav" className={navActive ? 'active' : ''}>
        <div className="back-circle back-circle-1"></div>
        <ul>
          {Object.values(PagesRoutsEnum).map((item, index) =>
            <NavigationItem
              key={index}
              index={index}
              rout={item}
            />)}
        </ul>
        <div className="back-circle back-circle-2"></div>
        <div className="back-circle back-circle-3"></div>
        <div className="nav-btn" id="nav-btn" onClick={handleNavBtnClick}>
          <div className="nav-bars">
            <div className="bar bar-1"></div>
            <div className="bar bar-2"></div>
            <div className="bar bar-3"></div>
          </div>
        </div>

      </nav>
    </>
  )
}
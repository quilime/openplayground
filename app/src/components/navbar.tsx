import React from "react"
import { Link } from "react-router-dom"

export default function NavBar({ tab, children }: any) {
  const menu = ["playground", "compare", "settings"].map((menuName, index) => (
    <div key = {menuName} className="align-middle mt-1 flex items-center">
      <Link
        to={`/${index > 0 ? menuName: ''}`}
        className={
          tab === menuName
          ? "cursor-default"
          : "cursor-pointer"
        }>
        <p
          className={
            tab === menuName
            ? "text-xl font-semibold"
            : "text-xl font-medium text-gray-500 hover:text-gray-900"
          }
        >
          {menuName.charAt(0).toUpperCase() + menuName.slice(1)}
        </p>
      </Link>
    </div>
  ))

  return (
    <div className="flex flex-col font-display mb-3 border">
      <div className="flex inline-block mx-5 my-4 gap-x-4 flex-wrap">
        {menu}

        <div className ="flex-1" />
        {children}
      </div>
    </div>
  )
}
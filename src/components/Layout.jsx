import React, { Children } from 'react'
import './Layout.css'

export default function Layout({ children }) {
  return (
    <div className="row image-gradient-background">
      <div class={`col-4`}></div>
      <div class={`col-4`}>{children}</div>
      <div class={`col-4`}></div>
    </div>
  )
}

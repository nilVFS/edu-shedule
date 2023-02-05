import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import OneSignal from "react-onesignal"

const config: DocsThemeConfig = {
  logo: <span><b>ПОИЯ-БЗ-19</b></span>,

  search: {
    placeholder: "Поиск..."
  },

  feedback: {
    content: null
  },

  footer: {
    text: "Владислав Низьев 2023"
  },

  toc: {
    title: "На этой странице"
  },

  editLink: {
    text: null
  },

  sidebar: {
    defaultMenuCollapseLevel: 0
  },

}

export default config

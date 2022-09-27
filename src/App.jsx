import Body from './Body'
import Nav from './Nav'
import { marked } from 'marked';
import React from "react";
marked.setOptions({
  breaks: true 
})
export default function App() {
  return (
    <>
      <Nav/>
      <Body />
    </>
  )
}

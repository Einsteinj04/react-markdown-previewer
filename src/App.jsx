import Body from './Body'
import Nav from './Nav'
import { marked } from 'marked';
marked.setOptions({
  breaks: true 
})
// const renderer = new marked.Renderer();
// const { marked } = require('marked');
export default function App() {
  return (
    <>
      <Nav/>
      <Body />
    </>
  )
}

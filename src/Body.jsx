import { useState} from "react";
import { marked } from "marked";
marked.setOptions({
  breaks: true,
});
export default function Body() {
  const [text, setText] = useState(`
  # Welcome to my React Markdown Previewer!
  ## This is a sub-heading...
  ### And here's some other cool stuff:
  Heres some code, \`<div></div>\`, between 2 backticks.
  \`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
 You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.
There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:
![React JS Logo](./src/react.png)
`);
  // const [body, setBody] = useState(false)
  // function handleChange() {
  //   if (window.innerWidth <= 750) {
  //     setBody(true)
  //   } else {
  //     setBody(false)
  //   }
  // }
  // useEffect(() => {
  //   window.addEventListener('resize',handleChange)
  // })
  function createMarkup() {
    return { __html: marked(text) };
  }
  return (
    <div
      className = "wrapper"
      // style={{
      //   display: "grid",
      //   background: "red",
      //   gridTemplateColumns: "1fr 1fr",
      //   gridTemplateRows: "650px",
      //   gap: "20px",
      //   margin: "50px",
      // }}
    >
      <textarea
        height="500"
        id="editor"
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
        style={{
          width: "100%",
          overflowY: "scroll",
          padding: "10px",
          boxShadow: "-5px 1px 10px grey",
          background: "#EDF6F9",
        }}
      />
      <div
        id="preview"
        dangerouslySetInnerHTML={createMarkup()}
        style={{
        //   background: "rgb(180, 173, 173)",
            background: '#83C5BE',
          padding: "20px",
          overflowY: "scroll",
          boxShadow: "1px 5px 10px black",
        }}
      />
    </div>
  );
}


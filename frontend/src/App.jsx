import { useEffect, useState } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import prism from 'prismjs'
import Markdown from 'react-markdown'
import Editor from 'react-simple-code-editor'


function App() {

  const [review, setReview] = useState('')
  const [code, setCode] = useState(`function sum() {
    return 1+1
}`)

  useEffect(() => {
    prism.highlightAll()
  })

  function reviewCode(){
    fetch("https://ai-code-reviewer-api-kappa.vercel.app/get-response", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt: code })
    })
      .then(res => res.json())
      .then(data => setReview(data.response))
      .catch(err => console.log(err))
  }

  return (
    <main>
      <div className="leftContainer">
        <div className="code">
          <Editor 
            value={code}
            onValueChange={code => setCode(code)}
            highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
            padding={10}
            style={{
              fontFamily: "Consolas",
              fontSize: "18px",
              height: "100%",
              width: "100%",
              borderRadius: "0.7rem",
              color:"white",
            }}
          />
        </div>
        <button onClick={reviewCode}>Review</button>
      </div>

      <div className="rightContainer"><Markdown>{review}</Markdown></div>
    </main>
  )
}

export default App

import React from "react"

class CTA extends React.Component {
  componentDidMount() {
    const script = document.createElement("script")
    script.async = true
    script.src = "https://learnsomevscode.ck.page/6894801fd3/index.js"
    script.setAttribute("data-uid", "6894801fd3")
    this.signupForm.appendChild(script)
  }

  render() {
    return <div ref={el => (this.signupForm = el)}></div>
  }
}

export default CTA

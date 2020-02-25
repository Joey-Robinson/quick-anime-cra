import React from "react"

const Button = ({ message, handler }) => (
  <button onClick={handler}>{message}</button>
)

export default Button

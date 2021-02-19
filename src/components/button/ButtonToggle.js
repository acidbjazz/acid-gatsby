import React, { useState } from "react"
import Button from "./Button"

export default ({ children, icons, fx, init = false, ...props }) => {
  const [active, setActive] = useState(init)
  return (
    <Button
      icon={active ? icons.on : icons.off}
      fx={() => {
        fx(!active)
        setActive(!active)
      }}
      {...props}
    >
      {children}
    </Button>
  )
}

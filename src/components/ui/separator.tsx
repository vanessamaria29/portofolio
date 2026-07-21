import * as React from "react"
import { Divider } from "./divider"

export interface SeparatorProps extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: "horizontal" | "vertical"
}

const Separator = React.forwardRef<HTMLHRElement, SeparatorProps>(
  (props, ref) => {
    return <Divider ref={ref} {...props} />
  }
)
Separator.displayName = "Separator"

export { Separator }

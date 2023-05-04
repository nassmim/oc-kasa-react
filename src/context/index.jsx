import { createContext, useState } from "react"

export const CollapsibleHeightContext = createContext()

export const CollapsibleHeightProvider = ({ children }) => {
  const [collapsibleMinHeight, setCollapsibleMinHeight] = useState(0)
  const [isOpenNumber, setIsOpenNumber] = useState(0)

  return (
    <CollapsibleHeightContext.Provider
      value={{
        collapsibleMinHeight,
        setCollapsibleMinHeight,
        isOpenNumber,
        setIsOpenNumber,
      }}
    >
      {children}
    </CollapsibleHeightContext.Provider>
  )
}

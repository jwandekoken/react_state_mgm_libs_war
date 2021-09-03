import React from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import { fontSizeState } from "./Page01"

const Home = () => {
  //
  const [fontSize, setFontSize] = useRecoilState(fontSizeState)

  // usando valor de um atom
  // const fontSize = useRecoilValue(fontSizeState)
  console.log("fontSize: ", fontSize)

  return (
    <div>
      <h1>Recoil</h1>
      <p style={{ fontSize: fontSize || "16px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
        expedita laboriosam magnam quasi molestias commodi animi, aliquam autem
        quis incidunt ex eum consequatur illum odit, fuga dolor. Aperiam, dolore
        modi!
      </p>
    </div>
  )
}

export default Home

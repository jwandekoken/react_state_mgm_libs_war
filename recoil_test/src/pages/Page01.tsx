import React from "react"
import { atom, useRecoilState, selector, useRecoilValue } from "recoil"

// criando um atom
const fontSizeState = atom({
  key: "fontSizeState",
  default: 14,
})

const Page01 = () => {
  // usando um atom
  const [fontSize, setFontSize] = useRecoilState(fontSizeState)
  console.log("fontSize: ", fontSize)

  // criando um selector
  const fontSizeLabelState = selector({
    key: "fontSizeLabelState",
    get: ({ get }) => {
      const fontSize = get(fontSizeState)
      const unit = "px"

      return `${fontSize}${unit}`
    },
  })

  // obtendo um valor que vem do selector
  const fontSizeLabel = useRecoilValue(fontSizeLabelState)
  console.log("fontSizeLabel: ", fontSizeLabel)

  return (
    <div>
      <h1>Page 01</h1>

      <button onClick={() => setFontSize((size) => size + 1)}>
        + Do you even lift, bruh?
      </button>

      <h3>{fontSizeLabel}</h3>

      <p style={{ fontSize }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque incidunt
        officia excepturi delectus nesciunt dignissimos voluptas earum, non
        deleniti magni! Delectus sunt vel facere. Provident ipsa voluptas,
        maiores veniam commodi ullam ut modi quibusdam, ad suscipit nisi
        accusantium, tempore molestiae impedit vel soluta temporibus distinctio
        magnam a. Ipsa officiis tempore vitae quaerat quisquam distinctio, id
        laboriosam amet exercitationem esse nesciunt!
      </p>
    </div>
  )
}

export default Page01
export { fontSizeState }

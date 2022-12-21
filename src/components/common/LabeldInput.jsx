import styled from "styled-components"

const LabeledInput = ({ type, id, labelText, errorMsg, onChangeEvent }) => {
  return (
    <TodoInputBox>
      <TodoInputLabel htmlFor={id}>{labelText}</TodoInputLabel>
      <TodoInput type={type} id={id} {...onChangeEvent} />
      <TodoErrorAlert>{errorMsg}</TodoErrorAlert>
    </TodoInputBox>
  )
}

const TodoInputBox = styled.div`
  width: 100%;
`

const TodoInputLabel = styled.label`
  margin-left: 2rem;
`
const TodoInput = styled.input`
  width: 100%;
`
const TodoErrorAlert = styled.p`
  width: 100%;
`

export default LabeledInput

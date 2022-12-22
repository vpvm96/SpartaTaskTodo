import React from "react"
import styled from "styled-components"

const TodoListHeader = () => {
  return (
    <TodoHeaderWrap>
      <TodoHeaderContainer>
        <TodoHeaderText>TodoList</TodoHeaderText>
      </TodoHeaderContainer>
    </TodoHeaderWrap>
  )
}

const TodoHeaderWrap = styled.div`
  width: 100%;
`

const TodoHeaderContainer = styled.div`
  width: 100%;
`

const TodoHeaderText = styled.h1`
  font-weight: bold;
`

export default TodoListHeader

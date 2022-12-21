import React from "react"
import styled from "styled-components"

const TodoListContent = ({ todoData }) => {
  const { title, content, createAt } = todoData

  return (
    <TodoContainer>
      <TodoTitleBox>
        <TodoTitleText>{title}</TodoTitleText>
      </TodoTitleBox>
      <TodoContentBox>
        <TodoContentText>{content}</TodoContentText>
      </TodoContentBox>
      <TodoCreateAtBox>
        <TodoCreateAtText>{createAt}</TodoCreateAtText>
      </TodoCreateAtBox>
    </TodoContainer>
  )
}

const TodoContainer = styled.div`
  width: 100%;
`

const TodoTitleBox = styled.div`
  width: 100%;
`

const TodoTitleText = styled.h2`
  font-weight: bold;
`

const TodoContentBox = styled.div`
  width: 100%;
`

const TodoContentText = styled.p`
  font-weight: normal;
`

const TodoCreateAtBox = styled.div`
  width: 100%;
`

const TodoCreateAtText = styled.p`
  font-size: large;
`

export default TodoListContent

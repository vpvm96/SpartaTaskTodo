import React from "react"
import styled from "styled-components"

const TodoListContent = ({
  todoData,
  onTodoUpdateEvent,
  onTodoDeleteEvent,
}) => {
  const { id, title, content, createdAt, isDone } = todoData

  const handleTodoUpdate = (status) => () => {
    const isDone = status === true ? true : false

    onTodoUpdateEvent({ id, isDone })
  }

  return (
    <TodoContainer>
      <TodoTitleBox>
        <TodoTitleText>{title}</TodoTitleText>
      </TodoTitleBox>
      <TodoContentBox>
        <TodoContentText>{content}</TodoContentText>
      </TodoContentBox>
      <TodoCreateAtBox>
        <TodoCreateAtText>{createdAt}</TodoCreateAtText>
      </TodoCreateAtBox>
      <TodoBtnBox>
        {isDone === false ? (
          <TodoCompletedBtn onClick={handleTodoUpdate(true)}>
            완료
          </TodoCompletedBtn>
        ) : (
          <TodoCancelBtn onClick={handleTodoUpdate(false)}>취소</TodoCancelBtn>
        )}

        <TodoDeletedBtn onClick={onTodoDeleteEvent(id)}>삭제</TodoDeletedBtn>
      </TodoBtnBox>
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

const TodoBtnBox = styled.div`
  width: 100%;
`

const TodoCompletedBtn = styled.button`
  width: 20%;
  margin-right: 0.5rem;
`

const TodoCancelBtn = styled.button`
  width: 20%;
`

const TodoDeletedBtn = styled.button`
  width: 20%;
`

export default TodoListContent

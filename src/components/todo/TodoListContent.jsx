import React from "react"
import { Link } from "react-router-dom"
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
        {isDone === false ? (
          <TodoTitleText>{title}</TodoTitleText>
        ) : (
          <TodoTitleCompletedText>{title}</TodoTitleCompletedText>
        )}
        <TodoCreateAtText>{createdAt}</TodoCreateAtText>
      </TodoTitleBox>
      <TodoContentBox>
        {isDone === false ? (
          <TodoContentText>{content}</TodoContentText>
        ) : (
          <TodoContentCompletedText>{content}</TodoContentCompletedText>
        )}
      </TodoContentBox>
      <TodoBtnBox>
        {isDone === false ? (
          <TodoCompletedBtn onClick={handleTodoUpdate(true)}>
            완료
          </TodoCompletedBtn>
        ) : (
          <TodoCancelBtn onClick={handleTodoUpdate(false)}>취소</TodoCancelBtn>
        )}
        <TodoDeletedBtn onClick={onTodoDeleteEvent(id)}>삭제</TodoDeletedBtn>
        <TodoDetailLinkBox>
          <Link
            to={`todo/${id.slice(0, 8)}`}
            state={{ title, content, createdAt }}
          >
            상세 페이지
          </Link>
        </TodoDetailLinkBox>
      </TodoBtnBox>
    </TodoContainer>
  )
}

const TodoContainer = styled.div`
  width: 100%;
`

const TodoTitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const TodoTitleText = styled.h2`
  font-size: 1.5rem;
`

const TodoContentBox = styled.div`
  width: 100%;
`

const TodoContentText = styled.p`
  font-weight: normal;
`

const TodoCreateAtText = styled.p`
  font-size: large;
`

const TodoTitleCompletedText = styled.p`
  font-size: 1.5rem;
  color: grey;
  text-decoration: line-through;
`

const TodoContentCompletedText = styled.p`
  font-weight: normal;
  color: grey;
  text-decoration: line-through;
`

const TodoBtnBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const TodoCompletedBtn = styled.button`
  width: 20%;
  margin-right: 0.5rem;
`

const TodoCancelBtn = styled.button`
  width: 20%;
  margin-right: 0.5rem;
`

const TodoDeletedBtn = styled.button`
  width: 20%;
`

const TodoDetailLinkBox = styled.div`
  margin-left: 7rem;
  width: 30%;
`

export default TodoListContent

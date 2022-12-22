import React, { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import ErrorPage from "../pages/ErrorPage"
import styled from "styled-components"

const TodoListDetailPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [todoData, setTodoData] = useState({})
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!location) return
    if (location.state) {
      setTodoData(location.state)
    } else {
      setError(true)
    }
  }, [location])
  if (error) return <ErrorPage />

  return (
    <TodoDetailWrap>
      <TodoDetailContainer>
        <TodoDetailMainBox>
          <TodoDetailTextBox>
            <TodoDetailTitle>제목: {todoData.title}</TodoDetailTitle>
            <TodoDetailCreatedAt>{todoData.createdAt}</TodoDetailCreatedAt>
          </TodoDetailTextBox>
          <TodoDetailContent>내용: {todoData.content}</TodoDetailContent>
          <TodoDetailBtnBox>
            <TodoDetailButton onClick={() => navigate(-1)}>
              나가기
            </TodoDetailButton>
          </TodoDetailBtnBox>
        </TodoDetailMainBox>
      </TodoDetailContainer>
    </TodoDetailWrap>
  )
}

const TodoDetailWrap = styled.div`
  width: 100%;
  height: 90vh;
`

const TodoDetailContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const TodoDetailMainBox = styled.div`
  width: 30%;
  padding: 2rem;
  border: 1px solid;
  border-radius: 2rem;
  margin-top: 12rem;
`

const TodoDetailTextBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  text-align: center;
`

const TodoDetailTitle = styled.h1`
  font-size: 2rem;
`

const TodoDetailContent = styled.p`
  font-size: 1.5rem;
`
const TodoDetailCreatedAt = styled.p`
  font-size: 1rem;
`

const TodoDetailBtnBox = styled.div`
  width: 30%;
`

const TodoDetailButton = styled.button`
  width: 100%;
`

export default TodoListDetailPage

import React from "react"
import useTodoForm from "../hooks/useTodoForm"
import TodoListBody from "../components/todo/TodoListBody"
import styled from "styled-components"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const TodoListPage = () => {
  const {
    isLoading,
    isError,
    data: todoData,
  } = useQuery(["todos"], async () => {
    const { data } = await axios.get("http://localhost:3001/todos")
    return data
  })
  const { register, handleSubmit, reset, errors } = useTodoForm()

  if (isLoading) return <p>Loading</p>

  if (isError) return <p>{isError}</p>

  return (
    <TodoMainWrap>
      <TodoListBody
        todoData={todoData}
        errorMsg={errors}
        reset={reset}
        onTodoFormChangeEvent={register}
        onTodoFormSubmitEvent={handleSubmit}
      />
    </TodoMainWrap>
  )
}

const TodoMainWrap = styled.div`
  width: 100%;
  height: 90vh;
`

export default TodoListPage

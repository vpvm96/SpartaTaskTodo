import React from "react"
import useTodoForm from "../hooks/useTodoForm"
import useCreateTodoFetch from "../hooks/useCreateTodoFetch"
import useUpdateTodoFetch from "../hooks/useUpdateTodoFetch"
import useDeleteTodoFetch from "../hooks/useDeleteTodoFetch"
import TodoListBody from "../components/todo/TodoListBody"
import styled from "styled-components"
import { useQuery } from "@tanstack/react-query"
import { getTodo } from "../api/todoService"

const TodoListPage = () => {
  const {
    isLoading,
    isError,
    data: todoData,
  } = useQuery(["todos"], getTodo, { staleTime: 1000 * 60 })
  const { register, handleSubmit, reset, errors } = useTodoForm()
  const { addTodo } = useCreateTodoFetch()
  const { updatedTodo } = useUpdateTodoFetch()
  const { deletedTodo } = useDeleteTodoFetch()

  const handleTodoCreate = (created) => {
    addTodo.mutate({
      ...created,
    })
  }

  const handleTodoUpdate = (updated) => {
    updatedTodo.mutate({
      ...updated,
    })
  }

  const handleTodoDelete = (id) => () => {
    deletedTodo.mutate({ id })
  }

  if (isLoading) return <p>Loading</p>

  if (isError) return <p>{isError}</p>

  return (
    <TodoMainWrap>
      <TodoListBody
        todoData={todoData}
        errorMsg={errors}
        reset={reset}
        onTodoCreateEvent={handleTodoCreate}
        onTodoUpdateEvent={handleTodoUpdate}
        onTodoDeleteEvent={handleTodoDelete}
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

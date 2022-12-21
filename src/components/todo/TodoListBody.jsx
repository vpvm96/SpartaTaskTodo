import React from "react"
import styled from "styled-components"
import LabeledInput from "../common/LabeldInput"
import TodoListContent from "./TodoListContent"

const TodoListBody = ({
  todoData,
  errorMsg,
  reset,
  onTodoFormChangeEvent,
  onTodoFormSubmitEvent,
}) => {
  const handleTodoFormSubmit = (data, e) => {
    console.log(data)
    reset({ title: "", content: "" })
    e.target[0].focus()
  }

  return (
    <TodoWrap>
      <TodoContainer>
        <TodoForm onSubmit={onTodoFormSubmitEvent(handleTodoFormSubmit)}>
          <LabeledInput
            type="text"
            id="title"
            labelText="제목"
            onChangeEvent={onTodoFormChangeEvent("title")}
            errorMsg={errorMsg.title?.message}
          />
          <LabeledInput
            type="text"
            id="content"
            labelText="내용"
            onChangeEvent={onTodoFormChangeEvent("content")}
            errorMsg={errorMsg.content?.message}
          />
          <TodoSubmitButton type="submit">클릭</TodoSubmitButton>
        </TodoForm>
        <TodoContentBox>
          {todoData.map((todo) => (
            <TodoListContent key={todo.id} todoData={todo} />
          ))}
        </TodoContentBox>
      </TodoContainer>
    </TodoWrap>
  )
}

const TodoWrap = styled.div`
  width: 100%;
  height: 90vh;
`
const TodoContainer = styled.div`
  width: 100%;
`

const TodoForm = styled.form`
  width: 100%;
`

const TodoSubmitButton = styled.button`
  width: 5%;
`

const TodoContentBox = styled.div`
  width: 20%;
`

export default TodoListBody

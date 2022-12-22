import styled from "styled-components"
import LabeledInput from "../common/LabeldInput"
import TodoListContent from "./TodoListContent"
import TodoListHeader from "./TodoListHeader"

const TodoListBody = ({
  todoData,
  errorMsg,
  reset,
  onTodoCreateEvent,
  onTodoUpdateEvent,
  onTodoDeleteEvent,
  onTodoFormChangeEvent,
  onTodoFormSubmitEvent,
}) => {
  const handleTodoFormSubmit = (todoData, e) => {
    onTodoCreateEvent(todoData)
    reset({ title: "", content: "" })
    e.target[0].focus()
  }

  return (
    <TodoWrap>
      <TodoContainer>
        <TodoFormBox>
          <TodoListHeader />
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
              <TodoListContent
                key={todo.id}
                todoData={todo}
                onTodoUpdateEvent={onTodoUpdateEvent}
                onTodoDeleteEvent={onTodoDeleteEvent}
              />
            ))}
          </TodoContentBox>
        </TodoFormBox>
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
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const TodoFormBox = styled.div`
  width: 30%;
  padding: 2rem;
  border: 1px solid;
  border-radius: 2rem;
`

const TodoForm = styled.form`
  width: 100%;
`

const TodoSubmitButton = styled.button`
  width: 100%;
`

const TodoContentBox = styled.div`
  width: 100%;
`

export default TodoListBody

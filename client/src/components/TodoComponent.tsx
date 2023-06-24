import { Todo } from '@/types/types'
import React from 'react'
import { useMutation } from '@apollo/client'
import { DELETE_TODO, UPDATE_TODO } from '@/graphql/mutations'
import { GET_TODOS } from '@/graphql/queries'

type Props = {
  todo: Todo
}

const TodoComponent = ({ todo }: Props) => {
  const [deleteTodo] = useMutation(DELETE_TODO, {
    variables: { id: todo.id },
    update(cache) {
      cache.modify({
        fields: {
          todos(existingTodos, { readField }) {
            return existingTodos.filter(
              (todoRef: any) => todo.id !== readField('id', todoRef)
            )
          },
        },
      })
    },
  })

  const [updateTodo] = useMutation(UPDATE_TODO, {
    variables: { id: todo.id, completed: !todo.completed },
    refetchQueries: [{ query: GET_TODOS }],
  })

  const roundedGreen =
    'rounded-full bg-green-500 text-white px-2 py-1 text-xs font-bold mr-3 w-7 h-7'
  const roundedGrey =
    'rounded-full bg-gray-500 text-white px-2 py-1 text-xs font-bold mr-3 w-7 h-7'
  return (
    <div className='flex gap-4 mx-auto w-10/12 h-20 rounded bg-blue-400 p-5'>
      <h3 className='text-xl'>{todo.title}</h3>
      <div onClick={updateTodo} className={todo.completed ? roundedGreen : roundedGrey}></div>
      <button onClick={deleteTodo} className='self-end justify-self-end'>Delete</button>
    </div>
  )
}

export default TodoComponent

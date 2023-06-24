import React from 'react'
import { useMutation } from '@apollo/client'
import { ADD_TODO } from '@/graphql/mutations'
import { GET_TODOS } from '@/graphql/queries'

const TodoForm = () => {
  const [title, setTitle] = React.useState('')
  const [addTodo] = useMutation(ADD_TODO, {
    variables: { title: title },
    refetchQueries: [{ query: GET_TODOS }],
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addTodo()
    setTitle('')
  }

  return (
    <div className=''>
      <form onSubmit={handleSubmit} className='flex flex-col'>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type='text'
          placeholder='Enter the title'
          className='text-center text-black w-1/2 h-9 bg-gray-300 border-none rounded mb-5 p-2 mx-auto focus:outline-none'
        />
        <button type='submit' className='bg-green-400 w-20 h-10 mx-auto'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default TodoForm

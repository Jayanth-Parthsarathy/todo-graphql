import { Todo } from '@/types/types'
import { useQuery } from '@apollo/client'
import { GET_TODOS } from '@/graphql/queries'
import TodoComponent from '@/components/TodoComponent'
import AddTodoButton from '@/components/AddTodoButton'

const index = () => {
  const { loading, error, data } = useQuery(GET_TODOS)
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error!</div>
  return (
    <>
      <div className='h-20 w-11/12 flex flex-col gap-5 mt-6'>
        {data.todos.map((todo: Todo) => (
          <TodoComponent key={todo.id} todo={todo} />
        ))}
        <AddTodoButton />
      </div>
    </>
  )
}

export default index

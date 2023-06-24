import { gql } from '@apollo/client'

const DELETE_TODO = gql`
  mutation deleteTodo($id: ID!) {
    deleteTodo(id: $id) {
      id
      title
      completed
    }
  }
`

const ADD_TODO = gql`
  mutation addTodo($title: String!) {
    addTodo(title: $title, completed: false) {
      id
      title
      completed
    }
  }
`

const UPDATE_TODO = gql`
  mutation updateTodo($id: ID!, $completed: Boolean!) {
    updateTodo(id: $id, completed: $completed) {
      id
      title
      completed
    }
  }
`

export { DELETE_TODO, ADD_TODO, UPDATE_TODO }

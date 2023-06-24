const express = require('express')
const cors = require('cors')
const { graphqlHTTP } = require('express-graphql')
const connectDB = require('./config/db')
const schema = require("./schema/schema")




const app = express()
require('dotenv').config()
const port = process.env.PORT || 3000
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
connectDB()
app.use(
  '/graphql',
  graphqlHTTP({
    graphiql: true,
    schema,
  })
)

app.listen(port, () => {
  console.log(`Backend server running on port: ${port}`)
})

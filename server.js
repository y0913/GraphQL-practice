const express = require('express')
const expressGraphQL = require('express-graphql')

const app = express()

// GraphQL呼び出し
app.use('/graphql', expressGraphQL({
    graphiql: true
}))

app.listen(4000, () => {
    console.log('listening port:3000')
})
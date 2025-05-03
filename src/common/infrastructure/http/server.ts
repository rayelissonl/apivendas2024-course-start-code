import { app } from './app'

const port = 3001

app.listen(port, () => {
  console.log('Server is running on port 3001')
  console.log('API docs available at GET /docs 📚')
})

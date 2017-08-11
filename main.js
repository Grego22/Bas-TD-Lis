const express = require('express')
const app = express()

const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')



// //teach our app to use public for all public files
app.use(express.static('public'))
// //teach our app to use mustache engine for rendering template
app.engine('mustache', mustacheExpress())
//teach our app where the views (templates) live
app.set('views', './views')
//teach our app to use mustache engine for our template
app.set('view engine', 'mustache')

// this will attach the bodyParser to the pipeline and attach the
// the data to the req as JSON
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(expressValidator())

const taskList = [
  'Pick up groceries from Publix',
  'Pay the electric bill',
  'Facetime the family',
  'Devote 1 hour to job search',
]

const completedTasks =[
  'read a chapter in your book',
  'study lecture notes and code written today',
]

//when the user asks for /, I say hello world
app.get('/', (request, response) =>{

  response.render('index', {todoListForTheBrowser: taskList, completedTasksForTheBrowser: completedTasks})
  // this is confusing, have to revisit
})

app.post('/addTask', (request, response)=>{
  //algorithim for what do to here:
  //get the description of the new todo item
  //
  const newTaskList = request.body.description
  taskList.push(newTaskList)
  response.redirect('/')
})

app.post('/markComplete', (request, response)=>{
  console.log(request.body)
  response.send('marking something complete')
})
app.listen(2222, ()=> {
    console.log('Rolling dice 2222')
})

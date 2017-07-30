const express = require('express')
const app = express()

const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')

//mark would use console.log data hear to make sure we have it!



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

app.use(expressValidator())

app.get('/', (request, response)=> {
response.render ('index')
})

const todos = []
console.log(todos);

app.post("/", function (request, response) {
	request
		.checkBody('todo','You must add a todo list...PLEASE!')
		.notempty()
		todos.push(request.body.todos);
  res.redirect('/');
	const errors = request.validationErrors()
  console.log(errors)
  // if (errors){
  //   // render the form again with the errors
  //   const data = {
  //     errors: errors
  //   }
  //   response.render('index', data)
  // } else{
  //   // render the thank you page
  //     response.render('thankyou', {
  //       fullName: reqquest.body.fullName,
  //       email: reqquest.body.email
		//	}
		//})
			})


app.use(bodyParser.urlencoded({extended:false}))
//
// app.get('/', (request, response) => {
// 	//sending content to the browser from javascript
// 	response.render('index', data)
// })
// app.get('/info/:id', (request, response) => {
// 	const requestId = parseInt(request.params.id)
//
// 	const foundUser = data.users.find(user => user.id === requestId)
//
// 	response.render('info', foundUser)
// })
// /*
// app.get('users/:id', (request, response) => {
// 	response.render('users', data)
//   const requestId = request.params.id
// })
// */
app.listen(7777, function() {
	console.log('Looking good Billy Ray!!!')
})

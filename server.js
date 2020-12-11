const express = require("express");
const bodyParser = require ("body-parser");

const app = express();

app.use(bodyParser.json());

const database = {
  users: [
    {
      id: '123',
      name: 'Aida',
      city: 'London',
      country: 'Uk'
    },
    {
      id: '124',
      name: 'Ann',
      city: 'London',
      country: 'Uk'
    }
  ]
}
app.use((req, res, next)=>{
  console.log("the middleware is here");
  next();
})

app.get('/', (req, res)=>{
  res.send(`${id+=1}`);
  
})

app.post('/register', (req, res)=>{
  const{name, city, country} = req.body;
  let id = parseInt(database.users[database.users.length-1].id);
  database.users.push({
    id:`${id+=1}`,
    name: name,
    city: city,
    country: country
  });
  res.json(database.users[database.users.length-1])
})

app.post('/login',(req, res)=>{
  const {name, city} = req.body;
  database.users.forEach((user)=>{
    if(user.name === name && user.city===city){
      res.send(user);
    }else{
      res.send('Wrong credentials. Please try again!');
    }

  })
})

app.get('/profile/:userId', (req, res)=>{
  const{userId} = req.params;
  database.users.forEach((user)=>{
    if(user.id === userId){
      res.json(user);
    }else{
      res.status(404).json('User not found');
    }
  })
})

app.listen(3000, ()=>{
  console.log("The app is running on port 3000");
});

// the api routes
// /
// /register - post - user
// /login - post - success/ fail 
// /profile/:userId - get - user
// /books - get - booksList
// /book/:bookId - book

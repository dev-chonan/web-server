const express = require('express');
const path = require("path");
const app = express()

app.use(express.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, "public")))

// app.get('/', (req, res) => {
//   console.log(req);
//   res.send('<h1>トップページ！！</h1>')
// })

app.post('/api/v1/quiz', (req, res) => {
  const answer = req.body.answer;
  if(answer === "2") {
    // res.send("<h1>正解！</h1>");
    res.redirect("/correct.html");
  } else {
    // res.send("<h1>不正解！</h1>");
    res.redirect("/wrong.html");
  }
  res.send(answer);
})

app.get('/api/v1/users', (req, res) => {
  res.send({
    name: "Mike",
    age: 30,
  })
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
  console.log("I am running!");
})
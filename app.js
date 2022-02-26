const express = require('express');
const app = express();

// middleware

const port = 5000;

app.get('/hello',(req,res)=>{res.send('task manager app')})

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();

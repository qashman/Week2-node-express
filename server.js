const express = require('express');
const app = express();

app.use(express.json()); //parsing jason automatically

app.get('/' ,(req, res,) => {res.send ( "My Week 2 API!") });


app.post( '/user', (req, res) => {
    const { name, email } = req.body
    if (!name || !email) return res.status(400).json({ error: 'Missing Data' });

  
    res.status(201).json({ message: 'Hello: ${name} (${email})'});
  
});
  app.get( '/user/:id', (req, res) => {
    res.json({  id: req.params.id, name: 'User [id] Profile'});
  });



  app.listen(3000, () => {
    console.log('dddd $(port)');
  });
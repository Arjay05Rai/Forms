const express = require('express');

const router = express.Router();



router.get('/', (req, res)=>{

res.send('User List');

});
router.get('/list', (req, res)=>{
  res.render('users/list', {users});
});
router.get('/new', (req, res)=>{// users
    res.render('users/new', {firstName: "Test"})

res.send('User New Form');

router.route('/').get((req, res)=>{
  res.send('User List'); }).post((req, res) =>{ 
    const firstName = req.body.firstName;
    const isValid = firstName !== "";
        if(isValid){
  console.log('Adding user: ${firstName}');
  users.push({name: firstName});
  res.render('users/list'), {users}; 
}
else{
  console.log("Error adding user!");
  res.render('users/new', {firstName:firstName});
}
  res.send("Create User"); }).delete((req, res)=>{

res.send(`Deleting User data for id: ${req.params.id}`);

}).put((req, res)=>{

res.send(`Updating User data for id: ${req.params.id}`);

});

const users = [{firstName:"RJ"}];

router.param("id", (req, res, next, id) =>{
  req.user = users[id];
  next();
})

});
module.exports = router;


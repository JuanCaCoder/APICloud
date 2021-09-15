// Import packages
const express = require('express');
const axios = require('axios');
const morgan = require('morgan')

// Using packages
const app = express()



//set port for APP
let port = 8080

// Midleware 
app.use(express.json())
app.use(morgan('dev'))

/*Define Routes
app.get('/',(req, res)=>{
    res.send("<h1>KIOÑA</h1>")
})
*/
//https://api.spoonacular.com/recipes/716429/information?apiKey=f61fe8533b864b0a93a381168c2b6d65

//GET recepies
app.get('/recepies',(req, res)=>{

    const END_POINT = 'https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2&'
    const KEY = 'apiKey=f61fe8533b864b0a93a381168c2b6d65'
    axios.get(END_POINT+KEY)
        .then(function (response){
            console.log("YES");
            res.send(response.data)
        }).catch((err) => res.status(404).send(err));
})

//GET recepies by nutrients
app.get('/nutrients',(req, res)=>{
    const END_POINT = 'https://api.spoonacular.com/recipes/findByNutrients?minCarbs=10&maxCarbs=50&number=2&'
    const KEY = 'apiKey=f61fe8533b864b0a93a381168c2b6d65'
    axios.get(END_POINT+KEY)
        .then(function (response){
            console.log("YES");
            res.send(response.data)
        }).catch((err) => res.status(404).send(err));
})

//GET recepies by ingredients
app.get('/ingredients',(req, res)=>{
    const END_POINT = 'https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=2&'
    const KEY = 'apiKey=f61fe8533b864b0a93a381168c2b6d65'
    axios.get(END_POINT+KEY)
        .then(function (response){
            console.log("YES");
            res.send(response.data)
        }).catch((err) => res.status(404).send(err));
})

//GET recepie information
app.get('/information',(req, res)=>{
    const END_POINT = 'https://api.spoonacular.com/recipes/716429/information?includeNutrition=false&'
    const KEY = 'apiKey=f61fe8533b864b0a93a381168c2b6d65'
    axios.get(END_POINT+KEY)
        .then(function (response){
            console.log("YES");
            res.send(response.data)
        }).catch((err) => res.status(404).send(err));
})

//GET random recipe
app.get('/random',(req, res)=>{
    const END_POINT = 'https://api.spoonacular.com/recipes/random?number=1&tags=vegetarian,dessert&'
    const KEY = 'apiKey=f61fe8533b864b0a93a381168c2b6d65'
    axios.get(END_POINT+KEY)
        .then(function (response){
            console.log("YES");
            res.send(response.data)
        }).catch((err) => res.status(404).send(err));
})


//POST recepies by cuisine 
app.post('/recepies',(req, res)=>{

    if(req.body.cuisine){

    
    const {cuisine} = req.body
    
    const END_POINT = 'https://api.spoonacular.com/recipes/complexSearch?cuisine='
    const KEY = '&apiKey=f61fe8533b864b0a93a381168c2b6d65'
    const finalEndpoint = END_POINT+cuisine+KEY

    axios.get(END_POINT+cuisine+KEY)
        .then(function (response){
            console.log("YES");
            console.log(finalEndpoint);
            res.send(response.data)
        }).catch((err) => res.status(404).send(err));
    }
    else{
        res.status(404).send("manda bien la request de cuisine")
    }
})

//POST NUTRIENTS By Max Carbs
app.post('/nutrients',(req, res)=>{

    
    //validate input
    if(req.body.maxCarbs){

   
    const {maxCarbs} = req.body
    
    const END_POINT = 'https://api.spoonacular.com/recipes/findByNutrients?maxCarbs='
    const KEY = '&apiKey=f61fe8533b864b0a93a381168c2b6d65'
    const finalEndpoint = END_POINT+maxCarbs+KEY

    axios.get(END_POINT+maxCarbs+KEY)
        .then(function (response){
            console.log("YES");
            console.log(finalEndpoint);
            res.send(response.data)
        }).catch((err) => res.status(404).send(err));
    }else {
        res.status(404).send("entrega correctamente maxCarbs")
    }
})


//POST Ingredients
app.post('/ingredients',(req, res)=>{
    if(req.body.ingredients){

    
    const {ingredients} = req.body
    
    const END_POINT = 'https://api.spoonacular.com/recipes/findByIngredients?ingredients='
    const KEY = '&apiKey=f61fe8533b864b0a93a381168c2b6d65'
    const finalEndpoint = END_POINT+ingredients+KEY

    axios.get(END_POINT+ingredients+KEY)
        .then(function (response){
            console.log("YES");
            console.log(finalEndpoint);
            res.send(response.data)
        }).catch((err) => res.status(404).send(err));
    }
    else{
        res.status(404).send("manda bien los ingredients")
    }
})

//POST Ingredients
app.post('/information',(req, res)=>{
    if(req.body.id){

    
    const {id} = req.body
    
    const END_POINT = 'https://api.spoonacular.com/recipes/'
    //716429/information?includeNutrition=false
    const rest = '/information?includeNutrition=false'
    const KEY = '&apiKey=f61fe8533b864b0a93a381168c2b6d65'
    const finalEndpoint = END_POINT+id+rest+KEY

    axios.get(END_POINT+id+rest+KEY)
        .then(function (response){
            console.log("YES");
            console.log(finalEndpoint);
            res.send(response.data)
        }).catch((err) => res.status(404).send(err));
    }else{
        res.status(404).send("manda bien el id")
    }
})

//POST Ingredient information
app.post('/ingredientsI',(req, res)=>{
    if(req.body.id){

    const {id} = req.body
    
    const END_POINT = 'https://api.spoonacular.com/food/ingredients/'
    //https://api.spoonacular.com/food/ingredients/9266/information?amount=1
    const rest = '/information?amount=1'
    const KEY = '&apiKey=f61fe8533b864b0a93a381168c2b6d65'
    const finalEndpoint = END_POINT+id+rest+KEY

    axios.get(END_POINT+id+rest+KEY)
        .then(function (response){
            console.log("YES");
            console.log(finalEndpoint);
            res.send(response.data)
        }).catch((err) => res.status(404).send(err));
    }else{
        res.status(404).send("manda bien el id")
    }
})

//Listen server
app.listen(port, () => {
    console.log("Server running on port"+port);
})
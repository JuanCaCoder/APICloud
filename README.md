# APICloud
Act2

Este servidor local permite interactuar con la API de spoonacular y hacer peticiones tanto de tipo get como post.

//Get requests:

  -Get recepies: consigue recetas conforme a los parámetros establecidos

  -Get recepies by nutrients: consigue recetas conforme a parámetros establecidos tomando en cuenta los nutrientes de la receta

  -Get recepies by ingredients: contesta con recetas que contengan los ingredientes especificados

  -Get recepie information : trae información de cierta receta mediante un ID

  -Get random recepie: trae una receta random con los parámetros establecidos



//Post requests:
Se postea por medio de postman la información necesaria mediante un archivo tipo JSON como se muestra en las siguientes imágines

  -Post recepies by cuisine
  Trae las recetas conforme a la nacionalidad de estas, a continuación se muestran las opciones
  •	African
  •	American
  •	British
  •	Cajun
  •	Caribbean
  •	Chinese
  •	Eastern European
  •	European
  •	French
  •	German
  •	Greek
  •	Indian
  •	Irish
  •	Italian
  •	Japanese
  •	Jewish
  •	Korean
  •	Latin American
  •	Mediterranean
  •	Mexican
  •	Middle Eastern
  •	Nordic
  •	Southern
  •	Spanish
  •	Thai
  •	Vietnamese

  -Post nutrients by max carbs: trae recetas que no pasan de las calorías establecidas

  -Post Ingredients: trae recetas con los ingredientes mencionados

  -Post information: consigue información de la receta sugerida

  -Post Ingredient information: trae información de el ingrediente sugerido

Nota, si se hace mal el post el programa regresará un estado 404 y pedirá de una manera no muy amable que se haga correctamente el request.

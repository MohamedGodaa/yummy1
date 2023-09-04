let evenClick = document.getElementsByClassName('meal');
let barIcon = document.getElementById('bar');
let fulseIcon = document.getElementById('fulse');

let byNameInput = document.getElementById('byName');
let byFirstLetterInput = document.getElementById('byFirstLetter');
let nameInput = document.getElementById('name')
let emailInput = document.getElementById('email')
let phoneInput = document.getElementById('phone')
let ageInput = document.getElementById('age')
let passwordInput = document.getElementById('password')
let reRasswordInput = document.getElementById('reRassword')

//   =====> api
const apiSearch = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const apiFirstLetter ="https://www.themealdb.com/api/json/v1/1/search.php?f=";
const apiCategories = "https://www.themealdb.com/api/json/v1/1/categories.php";
const apiArea = "https://www.themealdb.com/api/json/v1/1/list.php?a=list";
const apiAreaFillter = "https://www.themealdb.com/api/json/v1/1/filter.php?a="
const apiIngredient = "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
const apiIngredientFilter = "https://www.themealdb.com/api/json/v1/1/filter.php?i="
// =====> function

window.addEventListener('load',function(){
    document.getElementById('load').classList.add('d-none');
})

async function getData(){
    const response = await fetch(`${apiSearch}`);
    const data = await response.json()
    display(data,'dataHome')
}
getData()

function display(data ,id){
    let cartona ='';
    for (let i = 0; i < data.meals.length; i++) {
        cartona += `
        <div class="col-md-3 my-2">
            <div class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                <img src="${data.meals[i].strMealThumb}" Atr="${data.meals[i].idMeal}" class="w-100">
                <div class="information position-absolute d-flex align-items-center text-black p-2">
                    <h3>${data.meals[i].strMeal}</h3>
                </div>
            </div>
        </div>`
    }
    document.getElementById(id).innerHTML= cartona;
}

async function getByName(name){
    const responseName = await fetch(`${apiSearch}${name}`);
    const dataName = await responseName.json()
    display(dataName,'dataSearch')
}
byNameInput.addEventListener('input',function(){
    getByName(byNameInput.value)
})

async function getByFirstLetter(x){
    const responseLetter = await fetch(`${apiFirstLetter}${x}`);
    const dataLetter = await responseLetter.json()
    display(dataLetter,'dataSearch')
}
byFirstLetterInput.addEventListener('input',function(){
    getByFirstLetter(byFirstLetterInput.value)
})


//  =====> Categories get& dispaly
async function getApiCategories(){
    const responseCategories = await fetch(`${apiCategories}`);
    const dataCategories = await responseCategories.json();
    displayCategories(dataCategories)
}
function displayCategories(data){
    let cartonaCategories ='';
    for (let i = 0; i < data.categories.length; i++) {
        cartonaCategories += `
        <div class="col-md-3 my-2">
            <div class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                <img src="${data.categories[i].strCategoryThumb}" Atr="${data.categories[i].idCategory}" class="w-100">
                <div class="information position-absolute d-flex flex-column align-items-center text-black p-2 overflow-hidden">
                    <h3 class="text-center">${data.categories[i].strMeal}</h3>
                    <p class="text-center text-black main-line-height">${data.categories[i].strCategoryDescription}</p>
                </div>
            </div>
        </div>`
    }
    document.getElementById('Categorie').innerHTML= cartonaCategories;
}

//  =====> area gets &display 

async function getArea(){
    const responseArea = await fetch(`${apiArea}`);
    const dataArea = await responseArea.json()
    displayArea(dataArea)
}
function displayArea(data){
    let cartonaArea ='';
    for (let i = 0; i < data.meals.length; i++) {
        cartonaArea += `
        <div class="col-md-3 my-2 cursor-pointer">
            <divclass="meal position-relative overflow-hidden rounded-2 cursor-pointer w-100">
                <div onclick="filterArea('${data.meals[i].strArea}')">
                    <i class="fa-solid fa-house-laptop w-100 font-icon"></i>
                    <h3 class="text-white">${data.meals[i].strArea}</h3>
                </div>
            </div>
        </div>`
    }
    document.getElementById('Area').innerHTML= cartonaArea;
}


//  =====> Filter by Area get&display

async function filterArea(name){
    const responseAreaFilter = await fetch(`${apiAreaFillter}${name}`);
    const dataAreaFilter = await responseAreaFilter.json()
    console.log(dataAreaFilter)
    display(dataAreaFilter,'Area')
}


// =====> ingredient get&display
async function getIngredient(){
    const responseIngredient = await fetch(`${apiIngredient}`);
    const dataIngredient = await responseIngredient.json()
    displayIngredient(dataIngredient)
}
function displayIngredient(data){
    let cartonaIngredient ='';
    for (let i = 0; i < 20 ; i++) {
        cartonaIngredient += `
        <div class="col-md-3 my-2 cursor-pointer overflow-hidden">
            <divclass="meal position-relative overflow-hidden rounded-2 cursor-pointer w-100">
                <div onclick="getIngredientFilter('${data.meals[i].strIngredient}')" class="text-center">
                    <i class="fa-solid fa-drumstick-bite w-100 font-icon"></i>
                    <h3 class="text-white">${data.meals[i].strIngredient}</h3>
                    <p class="overflow-hidden max-line">${data.meals[i].strDescription}</p>
                </div>
            </div>
        </div>`
    }
    document.getElementById('Ingredient').innerHTML= cartonaIngredient;
}


// =====> ingredient filter get&display
async function getIngredientFilter(name){
    const responseIngredientFilter = await fetch(`${apiIngredientFilter}${name}`)
    const dataIngredientFilter = await responseIngredientFilter.json()
    console.log(dataIngredientFilter)
    display(dataIngredientFilter,'Ingredient')
}

barIcon.addEventListener('click',function(){
    
})
$('#bar').click(function () { 
    $('.side-nav-menu').animate({
        left:'0'
    },"slow");
    $('#fulse').removeClass("d-none");
    $('#bar').addClass("d-none");
});
$('#fulse').click(function () { 
    $('.side-nav-menu').animate({
        left:'-256.562px'
    },"slow");
    $('#bar').removeClass("d-none");
    $('#fulse').addClass("d-none");
});
document.getElementById('Categories').addEventListener('click',function(){

})

$("#Searchs").click(function(){
    $("#search").removeClass("d-none");
    $("#search").nextAll().addClass("d-none");
    $("#search").prevUntil(".side-nav-menu").addClass("d-none");
    $('.side-nav-menu').animate({
        left:'-256.562px'
    },"slow");
    $('#bar').removeClass("d-none");
    $('#fulse').addClass("d-none");
})
$("#Categories").click(function(){
    $("#Categorie").removeClass("d-none");
    $("#Categorie").nextAll().addClass("d-none");
    $("#Categorie").prevUntil(".side-nav-menu").addClass("d-none");
    $('.side-nav-menu').animate({
        left:'-256.562px'
    },"slow");
    $('#bar').removeClass("d-none");
    $('#fulse').addClass("d-none");
})
$("#Areas").click(function(){
    $("#Area").removeClass("d-none");
    $("#Area").nextAll().addClass("d-none");
    $("#Area").prevUntil(".side-nav-menu").addClass("d-none");
    $('.side-nav-menu').animate({
        left:'-256.562px'
    },"slow");
    $('#bar').removeClass("d-none");
    $('#fulse').addClass("d-none");
})
$("#Ingredients").click(function(){
    $("#Ingredient").removeClass("d-none");
    $("#Ingredient").nextAll().addClass("d-none");
    $("#Ingredient").prevUntil(".side-nav-menu").addClass("d-none");
    $('.side-nav-menu').animate({
        left:'-256.562px'
    },"slow");
    $('#bar').removeClass("d-none");
    $('#fulse').addClass("d-none");
})
$("#Contacts").click(function(){
    $("#Contact").removeClass("d-none");
    $("#Contact").nextAll().addClass("d-none");
    $("#Contact").prevUntil(".side-nav-menu").addClass("d-none");
    $('.side-nav-menu').animate({
        left:'-256.562px'
    },"slow");
    $('#bar').removeClass("d-none");
    $('#fulse').addClass("d-none");
})


// validation 
function emailValidation(){
    let regexEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/
    
    if(emailInput.value.match(regexEmail)){
        return true ;
    }else{
        return false
    }
}





















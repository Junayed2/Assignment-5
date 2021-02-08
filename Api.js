fetch('https://www.themealdb.com/api/json/v1/1/categories.php')//all food api
    .then(res => res.json())
    .then(data => {
        displayFoods(data.categories);
    })

    //display food section start
const displayFoods = foods => {
    const displayFoodsDiv = document.getElementById('displayFoodsId');
    foods.forEach(food => {
        let displayFoodDiv = document.createElement('div');
        displayFoodDiv.className = 'displayFood';
        const displayFood =
            `
        <div style="cursor:pointer"onclick="displayFoodsDetail('${food.strCategory}')">
        <img src ="${food.strCategoryThumb}">
        <h3 class ="food-name">${food.strCategory}</h3>
        
        </div>
        `;
        displayFoodDiv.innerHTML = displayFood;
        displayFoodsDiv.appendChild(displayFoodDiv);
    });
}
//display food section end
//search section start
function searchValue() {
    const search = document.getElementById("search");
    const foodName = search.value;
    displayFoodsDetail(foodName);
    search.value = "";
}
//search section end

const displayFoodsDetail = name => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`//search by name api 
    fetch(url)
        .then(res => res.json())
        .then(data => {
            detailFoodsInfo(data.meals);
        })
}
//food details start
const detailFoodsInfo = foods => {
    const foodDiv = document.getElementById('foodDetails');
    foods.forEach(food => {
        foodDiv.innerHTML =
            `
            <img style="width:100%;border-radius:8px;margin:auto;" src="${food.strMealThumb}">
            <h1 style="text-align:center;">${food.strCategory}</h1>
            <p style="text-align:center;">${food.strMeal}</p>
            <p style="text-align:center;">Area:${food.strArea}</p>
            <h5 style="text-align:center;">Recipe:</h5>
            <p style="text-align:center;">✅${food.strIngredient2}</p>
            <p style="text-align:center;">✅${food.strIngredient3}</p>
            <p style="text-align:center;">✅${food.strIngredient4}</p>
            <p style="text-align:center;">✅${food.strIngredient5}</p>
            <p style="text-align:center;">✅${food.strIngredient6}</p>
            <p style="text-align:center;">✅${food.strIngredient7}</p>

            `
    });
}
//food details end
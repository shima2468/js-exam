$("#Areas").css({display: "none"});
$("#category").css({display: "none"});
$("#meal-city").css({ display: "none" });
$("#meal-category").css({display:"none"})


//  Loder Section start....................
function loader(){
    $(window).ready(function(){
        $(".lds-roller").fadeOut(100,function(){
            $("#loadeing").remove()
            $("body").css({overflow:"auto"})
            $(".content-page").css({display:"block"})
        }
           
            
            
        )
    })
}

//  Loder Section End....................

// nav menue start...........................
$(".close").css({display:"none"})
let NavMenueToL=$(".side-nav-menu").offset().left;
let MenueWidth=$(".nav-tab").innerWidth()
$(".side-nav-menu").animate({left:-MenueWidth},200)
$(".open-close-icon").click(function(){
    let NavMenueToL=$(".side-nav-menu").offset().left;
    let MenueWidth=$(".nav-tab").innerWidth()
    if(NavMenueToL== 0){
              console.log("close");
            //    $(".link").addClass("animate__animated animate__slideOutDown")
              $(".side-nav-menu").animate({left:-MenueWidth},200,function(){
                    $(".menue-bar").css({display:"block"});
                    $(".close").css({display:"none"});

              })
              
             
    }else{
        console.log("open");
        $(".side-nav-menu").animate({left:0},200,function(){
            $(".link").addClass("animate__animated animate__slideInUp")
            $(".menue-bar").css({display:"none"})
            $(".close").css({display:"block"})
        })
      
        
    }

})
// nav menue End...........................

// get random meal Start.........................
getMeals()
async function getMeals(){
    loader()
    let api=await fetch(`Https://www.themealdb.com/api/json/v1/1/search.php?s=`);
    let respones=await api.json()
    let Meals= respones.meals;
    console.log(Meals);
    displayMeal(Meals);   
}
function displayMeal(Meals){
    let cartoona="";
    for (let index = 0; index < 20; index++) {
                cartoona +=`
                <div class="col-md-3"  onclick="getMealDetailes(${Meals[index].idMeal})">
                    <div class="inner">
                        <div class="img-section">
                            <img src="${Meals[index].strMealThumb}" alt="" class="product-img rounded-4 w-100">
                            <div class="layer rounded-4 d-flex justify-content-center align-items-center fs-4 fw-bold">
                                ${Meals[index].strMeal}</div>
                        </div>

                    </div>
                </div>
                `
       
     }
     $("#RandomProduct").html(cartoona);
     
}
// get random meal End.........................  

// get category Start.........................

$("#category").css({display:"none"})
$(document).ready(function() {
    $(".categories").click(function(){
        loader()
        $(".side-nav-menu").animate({left:-MenueWidth},200)
        $(".menue-bar").css({display:"block"});
        $(".close").css({display:"none"});
        $("#random-product").css({display: "none"});
        $("#Areas").css({display: "none"});
        $("#Ingredients").css({display: "none"});
        $("#category").css({display: "block"});
        $("#meal-city").css({ display: "none" });
        $("#meal-integ").css({ display: "none" });
        $("#Search").css({display:"none"});
        $("#FormContact").css({display:"none"})
        $("#ProductDetailes").css({display:"none"})
        getCategory();
    });

    async function getCategory() {
        let api2 = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
        let respones2 = await api2.json();
        let categories = respones2.categories;
        console.log(categories);
        displayCategory(categories);
    }

    function displayCategory(categories) {
        let cartoona = "";
        for (let index = 0; index < categories.length; index++) {
            cartoona += `<div class="col-md-3 categoryOfMeal" onclick="getMealOfCategory('${categories[index].strCategory}')">
                <div class="inner">
                    <div class="img-section">
                        <img src="${categories[index].strCategoryThumb}" alt="" class="product-img img-fluid">
                        <div class="layer rounded-4 d-flex flex-column justify-content-center align-items-center fs-4 fw-bold">
                            <h5 class="mt-4 fs-4">${categories[index].strCategory}</h5>
                            <p class="text-center p-category px-5 ">${categories[index].strCategoryDescription.split(" ").slice(0, 12).join(" ")}</p>
                        </div>
                    </div>
                </div>
            </div>`;
        }
        
        $("#category-content").html(cartoona);
    }



  
}); 
$("#meal-category").css({display:"none"})
async function getMealOfCategory(strCategory) {
    loader()
    $("#random-product").css({display: "none"});
    $("#Areas").css({display: "none"});
    $("#Ingredients").css({display: "none"});
    $("#category").css({display:"none"})
    $("#meal-city").css({ display: "none" });
    $("#meal-integ").css({ display: "none" });
    $("#meal-category").css({display:"block"})
    $("#ProductDetailes").css({display:"none"})
    let api6 = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`);
    let respones6 = await api6.json();
    let meales=respones6.meals;
    let cartoona6="";
    for (let index = 0; index < meales.length; index++) {
                cartoona6 +=`
                <div class="col-md-3"   onclick="getMealDetailes(${meales[index].idMeal})">
                    <div class="inner">
                        <div class="img-section">
                            <img src="${meales[index].strMealThumb}" alt="" class="product-img rounded-4 w-100">
                            <div class="layer rounded-4 d-flex justify-content-center align-items-center fs-4 fw-bold">
                                ${meales[index].strMeal}</div>
                        </div>

                    </div>
                </div>
                `
       
     }
     $("#meal").html(cartoona6);
     
  

}
$("#ProductDetailes").css({display:"none"})
async function getMealDetailes(IdMeal){
    loader()
    $("#random-product").css({display: "none"});
    $("#Areas").css({display: "none"});
    $("#Ingredients").css({display: "none"});
    $("#category").css({display:"none"})
    $("#meal-city").css({ display: "none" });
    $("#meal-integ").css({ display: "none" });
    $("#meal-category").css({display:"none"})
    $("#ProductDetailes").css({display:"block"})
    $("#Search").css({display:"none"});
    $("#FormContact").css({display:"none"})
    let api12=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${IdMeal}`)
    let respones12=await api12.json();
    let meals=respones12.meals;
    console.log(meals);
    let cartoona12="";
    for (let index = 0; index < meals.length; index++) {
        cartoona12+=`<div class="col-md-4">
        <div class="inner">
            <img src="${meals[index].strMealThumb}" alt="" class="img-fluid rounded-2">
            <h2 class="text-white fs-2 mt-3">${meals[index].strMeal}</h2>
        </div>

    </div>
    <div class="col-md-8">
        <div class="inner text-white">
            <h3 class="fs-1">Instructions</h3>
            <p class="fw-lighter fs-5">${meals[index].strInstructions}</p>
            <ul class="list-unstyled">
                <li class="fs-4 mb-1">Area :  ${meals[index].strArea}</li>
                <li class="fs-4 mb-1">Category : ${meals[index].strCategory}</li>
                <li class="fs-4 mb-1">Recipes :
                      <button class="btn btn-outline-success py-2 px-4 me-2">${meals[index].strIngredient1} </button>
                      <button class="btn btn-outline-success py-2 px-4 me-2">${meals[index].strIngredient2}</button>
                      <button class="btn btn-outline-success py-2 px-4 me-2">${meals[index].strIngredient3} </button>
                      <button class="btn btn-outline-success py-2 px-4 me-2">${meals[index].strIngredient4} </button>
                      <button class="btn btn-outline-success py-2 px-4 me-2 mt-2">${meals[index].strIngredient5} </button>
                      <button class="btn btn-outline-success py-2 px-4 me-2 mt-2">${meals[index].strIngredient6}  </button>
                      <button class="btn btn-outline-success py-2 px-4 me-2 mt-2">${meals[index].strIngredient7}  </button>
                      <button class="btn btn-outline-success py-2 px-4 me-2 mt-2">${meals[index].strIngredient8}  </button>
                      <button class="btn btn-outline-success py-2 px-4 me-2 mt-2">${meals[index].strIngredient9}  </button>
                      <button class="btn btn-outline-success py-2 px-4 me-2 mt-2">${meals[index].strIngredient10}  </button>
                      <button class="btn btn-outline-success py-2 px-4 me-2 mt-2">${meals[index].strIngredient11}  </button>
                   
                </li>
                <li class="fs-4 mb-1 mt-4">Tags : 
                      <a class="btn btn-success py-2 px-4 me-2" >${meals[index].strTags} </a>
                      <a class="btn btn-warning py-2 px-4 me-2" href="https://www.bbcgoodfoodme.com/" >Source </a>
                      <a class="btn btn-danger py-2 px-4 me-2 "href="${meals[index].strYoutube}">Youtoub </a>
                      
                   
                </li>

            </ul>
        </div>

        </div>`

        
    }
    $("#Meal-detailes").html(cartoona12)
}
// // get category End........................

// Areas section Start...............................
$(document).ready(function() {
    // Initial hiding of sections
    $("#category").css({ display: "none" });
    $("#Areas").css({ display: "none" });
    $("#meal-city").css({ display: "none" });
    $("#meal-category").css({display:"none"})
    $("#Search").css({display:"none"});
          
    $(".area").click(function() {
        loader()
        $(".side-nav-menu").animate({left:-MenueWidth},200)
        $(".menue-bar").css({display:"block"});
        $(".close").css({display:"none"});
        $("#random-product").css({ display: "none" });
        $("#Ingredients").css({display: "none"});
        $("#category").css({display: "none"});
        $("#Areas").css({ display: "block" });
        $("#meal-category").css({display:"none"});
        $("#Search").css({display:"none"});
        $("#FormContact").css({display:"none"})
        $("#ProductDetailes").css({display:"none"})
        getCity();
    });

    async function getCity() {
            let api3 = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
            let respones3 = await api3.json();
            let city = respones3.meals;
            console.log(city);
            displayCity(city);       
    }

    function displayCity(City) {
        let cartoona = "";
        for (let index = 0; index < City.length; index++) {
            cartoona += `
                <div class="col-md-3 City-meal" onclick="getMealOfCity('${City[index].strArea}')">
                    <div class="inner d-flex flex-column justify-content-center align-items-center">
                        <i class="fa-solid fa-house-laptop fa-5x text-white"></i>
                        <h5 class="text-center text-white mt-2 fw-bold">${City[index].strArea}</h5>
                    </div>
                </div>`;
        }
        $("#area-city").html(cartoona);
    }

    async function getMealOfCity(Area) {
        loader()
        $("#random-product").css({ display: "none" });
        $("#Ingredients").css({display: "none"});
        $("#category").css({display: "none"});
        $("#Areas").css({ display: "none" });
        $("#meal-city").css({ display: "block" });
        $("#Search").css({display:"none"});
        $("#FormContact").css({display:"none"})
        $("#ProductDetailes").css({display:"none"})
            let api7 = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${Area}`);
            let respones7 = await api7.json();
            let meals=respones7.meals
            let cartoona7="";
            for (let index = 0; index < meals.length; index++) {
                        cartoona7 +=`
                        <div class="col-md-3"  onclick="getMealDetailes(${meals[index].idMeal})">
                            <div class="inner">
                                <div class="img-section">
                                    <img src="${meals[index].strMealThumb}" alt="" class="product-img rounded-4 w-100">
                                    <div class="layer rounded-4 d-flex justify-content-center align-items-center fs-5 fw-bold">
                                        ${meals[index].strMeal}</div>
                                </div>
        
                            </div>
                        </div>
                        `
               
             }
             $("#mealCity").html(cartoona7);
             
      
    }

    window.getMealOfCity = getMealOfCity;
});
// Areas section End...............................


// Intg section Start...............................
$(document).ready(function() {
    // Initial hiding of sections
    $("#Ingredients").css({ display: "none" });
    // $("#meal-integ").css({ display: "none" });

    $(".Ingredients").click(function() {
        loader()
        $(".side-nav-menu").animate({left:-MenueWidth},200)
        $(".menue-bar").css({display:"block"});
        $(".close").css({display:"none"});
        $("#Ingredients").css({ display: "block" });
        $("#Areas").css({display: "none"});
        $("#category").css({display: "none"});
        $("#random-product").css({ display: "none" });
        $("#meal-city").css({ display: "none" });
        $("#meal-category").css({display:"none"})
        $("#Search").css({display:"none"});
        $("#FormContact").css({display:"none"})
        $("#ProductDetailes").css({display:"none"})
        getIngredients();
    });

    async function getIngredients() {
        try {
            loader()
            let api4 = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
            let respones4 = await api4.json();
            let Ingredients = respones4.meals;
            console.log(Ingredients);
            displayIngredients(Ingredients);
        } catch (error) {
            console.error("Error fetching ingredients data:", error);
        }
    }

    function displayIngredients(Ingredients) {
        let cartoona = "";
        console.log(Ingredients[0]);
        for (let index = 0; index < 20; index++) {
            cartoona += `<div class="col-md-3 mainInteg" onclick="getMealOfIntg('${Ingredients[index].strIngredient}')">
                <div class="inner d-flex flex-column justify-content-center align-items-center">
                    <i class="fa-solid fa-drumstick-bite fa-5x text-white"></i>
                    <h5 class="text-center text-white mt-2 fw-bold">${Ingredients[index].strIngredient}</h5>
                    <p class="text-center text-white">${Ingredients[index].strDescription ? Ingredients[index].strDescription.split(" ").slice(0, 12).join(" ") : ''}</p>
                </div>
            </div>`;
        }
        $("#Ingredients-content").html(cartoona);
    }

    window.getMealOfIntg = getMealOfIntg; // Ensure the function is accessible globally
});
$("#meal-integ").css({ display: "none" });
async function getMealOfIntg(Integ) {
    
    loader()
    $("#Ingredients").css({ display: "none" });
    $("#meal-integ").css({ display: "block" });
    $("#Areas").css({display: "none"});
    $("#category").css({display: "none"});
    $("#random-product").css({ display: "none" });
    $("#meal-city").css({ display: "none" });
    $("#Search").css({display:"none"});
    $("#FormContact").css({display:"none"})
    $("#ProductDetailes").css({display:"none"})
        let api9= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${Integ}`);
        let respones9 = await api9.json();
        let meals=respones9.meals
        console.log(meals);
        // Process the response here as needed
        let cartoona9="";
        for (let index = 0; index < meals.length; index++) {
            cartoona9 +=`
            <div class="col-md-3"   onclick="getMealDetailes(${meals[index].idMeal})">
                <div class="inner">
                    <div class="img-section">
                        <img src="${meals[index].strMealThumb}" alt="" class="product-img rounded-4 w-100">
                        <div class="layer rounded-4 d-flex justify-content-center align-items-center fs-5 fw-bold">
                            ${meals[index].strMeal}</div>
                    </div>

                </div>
            </div>
            `

        }
        $("#mealInteg").html(cartoona9);
       
    }
// Intg section End...............................




// Search Section Start......................................................
$("#Search").css({display:"none"})

$(".search").click( function(){
    loader()
    $(".side-nav-menu").animate({left:-MenueWidth},200)
    $(".menue-bar").css({display:"block"});
    $(".close").css({display:"none"});
    $("#Search").css({display:"block"});
    $("#random-product").css({ display: "none" });
    $("#Ingredients").css({ display: "none" });
    $("#meal-integ").css({ display: "none" });
    $("#Areas").css({display: "none"});
    $("#category").css({display: "none"});
    $("#random-product").css({ display: "none" });
    $("#meal-city").css({ display: "none" });
    $("#FormContact").css({display:"none"})
    $("#ProductDetailes").css({display:"none"})
    $("#meal-integ").css({ display: "none" });
    $("#meal-category").css({display:"none"})
    $("#SearchByName").on("keyup",function(){
        getSearch($(this).val())
    })


    async function getSearch(Name){
                          
        let api10=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${Name}`);
        let respones10=await api10.json();
        let meals=respones10.meals;
        console.log(meal);
        displaySearch(meals)
    }
    function  displaySearch(meals){
        let cartoona10="";
        for (let index = 0; index < meals.length; index++) {
            cartoona10 +=`
            <div class="col-md-4">
                <div class="inner">
                    <div class="img-section">
                        <img src="${meals[index].strMealThumb}" alt="" class="product-img rounded-4 w-100">
                        <div class="layer rounded-4 d-flex justify-content-center align-items-center fs-5 fw-bold">
                            ${meals[index].strMeal}</div>
                    </div>

                </div>
            </div>
            `

        }
        $("#Search-Content").html(cartoona10);
    }
    $("#SearchByChar").on("input",function(){
        getSearch2($(this).val())
    })


    async function getSearch2(char){
                          
        let api11=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${char}`);
        let respones11=await api11.json();
        let meals=respones11.meals;
        console.log(meal);
        displaySearch2(meals)
    }
    function  displaySearch2(meals){
        let cartoona11="";
        for (let index = 0; index < meals.length; index++) {
            cartoona11 +=`
            <div class="col-md-4">
                <div class="inner">
                    <div class="img-section">
                        <img src="${meals[index].strMealThumb}" alt="" class="product-img rounded-4 w-100">
                        <div class="layer rounded-4 d-flex justify-content-center align-items-center fs-5 fw-bold">
                            ${meals[index].strMeal}</div>
                    </div>

                </div>
            </div>
            `

        }
        $("#Search-Content").html(cartoona11);
    }
  


})
// Search Section End........................................................


// Contact Us Start.........................................................
$("#FormContact").css({display:"none"})
$(".contact").click(function(){
    loader()
    $(".side-nav-menu").animate({left:-MenueWidth},200)
    $(".menue-bar").css({display:"block"});
        $(".close").css({display:"none"});
    $("#random-product").css({ display: "none" });
    $("#Search").css({display:"none"});
    $("#random-product").css({ display: "none" });
    $("#Ingredients").css({ display: "none" });
    $("#meal-integ").css({ display: "none" });
    $("#Areas").css({display: "none"});
    $("#category").css({display: "none"});
    $("#random-product").css({ display: "none" });
    $("#meal-city").css({ display: "none" });
    $("#FormContact").css({display:"block"});
    $('#validation').css({display:"none"});
    $('#validation2').css({display:"none"})
    $('#validation3').css({display:"none"})
    $('#validation4').css({display:"none"})
    $('#validation5').css({display:"none"})
    $("#ProductDetailes").css({display:"none"})
    $('#re-password-validation-message').css({display:"none"})


    function validateForm() {
        let allValid = true;

        $('.validate-input').each(function() {
            if (!$(this).hasClass('valid')) {
                allValid = false;
            }
        });

        if (allValid) {
            $('#submit-button').prop('disabled', false);
            console.log(allValid);
        } else {
            $('#submit-button').prop('disabled', true);
            console.log(allValid);
        }
    }

    $('#username').on('input', function() {
        let username = $(this).val();
        let regex = /^[a-zA-Z]+$/;
        if (regex.test(username)) {
            $('#validation').css({display:"block"}).text('Valid username').css('color', 'green').addClass("alert-success").removeClass("alert-danger");
            $(this).addClass('valid');
        } else {
            $('#validation').css({display:"block"}).text('Invalid username. Only letters are allowed.').css('color', 'red').addClass("alert-danger").removeClass("alert-success");
            $(this).removeClass('valid');
        }
        validateForm();
    });

    $('#email').on('input', function() {
        let email = $(this).val();
        let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (regex.test(email)) {
            $('#validation2').css({display:"block"}).text('Valid email').css('color', 'green').addClass("alert-success").removeClass("alert-danger");
            $(this).addClass('valid');
        } else {
            $('#validation2').css({display:"block"}).text('Email not valid *example@yyy.zzz').css('color', 'red').addClass("alert-danger").removeClass("alert-success");
            $(this).removeClass('valid');
        }
        validateForm();
    });

    $('#phone').on('input', function() {
        let phone = $(this).val();
        let regex = /^(01[0125][0-9]{8}|0[2-3][0-9]{7,8})$/;
        if (regex.test(phone)) {
            $('#validation3').css({display:"block"}).text('Valid phone number').css('color', 'green').addClass("alert-success").removeClass("alert-danger");
            $(this).addClass('valid');
        } else {
            $('#validation3').css({display:"block"}).text('Invalid phone number').css('color', 'red').addClass("alert-danger").removeClass("alert-success");
            $(this).removeClass('valid');
        }
        validateForm();
    });

    $('#age').on('input', function() {
        let age = $(this).val();
        let regex = /^(1[01][0-9]|120|[1-9][0-9]?|0)$/;
        if (regex.test(age)) {
            $('#validation4').css({display:"block"}).text('Valid age').css('color', 'green').addClass("alert-success").removeClass("alert-danger");
            $(this).addClass('valid');
        } else {
            $('#validation4').css({display:"block"}).text('Invalid age. Please enter a number between 0 and 120.').css('color', 'red').addClass("alert-danger").removeClass("alert-success");
            $(this).removeClass('valid');
        }
        validateForm();
    });

    $('#password').on('input', function() {
        let password = $(this).val();
        let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (regex.test(password)) {
            $('#validation5').css({display:"block"}).text('Valid password').css('color', 'green').addClass("alert-success").removeClass("alert-danger");
            $(this).addClass('valid');
        } else {
            $('#validation5').css({display:"block"}).text('Invalid password. Minimum eight characters, at least one letter and one number.').css('color', 'red').addClass("alert-danger").removeClass("alert-success");
            $(this).removeClass('valid');
        }
        validateForm();
    });

    $('#re-password').on('input', function() {
        let rePassword = $(this).val();
        let password = $('#password').val();
        if (rePassword === password && rePassword.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
            $('#re-password-validation-message').css({display:"block"}).text('Passwords match and are valid').css('color', 'green').addClass("alert-success").removeClass("alert-danger");
            $(this).addClass('valid');
        } else if (rePassword !== password) {
            $('#re-password-validation-message').css({display:"block"}).text('Passwords do not match').css('color', 'red').addClass("alert-danger").removeClass("alert-success");
            $(this).removeClass('valid');
        } else {
            $('#re-password-validation-message').css({display:"block"}).text('Invalid password. Minimum eight characters, at least one letter and one number.').css('color', 'red').addClass("alert-danger").removeClass("alert-success");
            $(this).removeClass('valid');
        }
        validateForm();
    });

    validateForm();  // Initial validation check
});


    
   


// Contact Us End...........................................................














    
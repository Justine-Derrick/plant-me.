console.log("howdy");

const submitBtn = document.querySelector("#submitBtn");
const priceBtn = document.querySelector("#submitPrice");

let plants = [
    {
        id: 100,
        img: "./img/marble-queen.png",
        imgTwo: "./img/marble-two.png",
        imgThree:"./img/marble-three.png",
        name: "MARBLE QUEEN POTHOS",
        botName: "Epipremnum aureum",
        price: 60,
        info: "The Epipremnum is widely known and loved. Her leaves grow tremendously fast, which means that there will be a huge vine draping through your room in no time. Her only request is not to be hung directly in sunlight.",
        size: "small",
        water: "moderate",
        light: "low-light",
        dimensions: "W: 14cm, H:15cm", 
        toxic: "Toxic",
        waterNeeds: "Moderate water needed",
        lightNeeds: "Low or medium light",
        air: "Strong air purifier",
        repot: "every other year",
        feed: "monthly",
        tags: ["plant", "small", "marble", "pothos", "trailing", "queen", "marble queen", "marble queen pothos", "low light", "beginner", "epipremnum aureum"],
    },

    {
        id: 200,
        img: "./img/brazil.png",
        imgTwo: "./img/brazil-two.png",
        imgThree: "./img/brazil-three.png",
        name: "PHILODENDRON BRAZIL",
        botName: "Philodendron Hederaceum",
        price: 55,
        info: "There are thousands of species of Philodendron, but the Scandens Brasil stands out for its stunning green and yellow leaves. They like both a little direct sunlight and a little shade, and to sit in moist soil.",
        size: "small",
        water: "moderate",
        light: "medium-light",
        dimensions: "W: 10cm, H:13cm", 
        toxic: "Poisonous",
        waterNeeds: "Average water needed",
        lightNeeds: "Low or medium light",
        air: "Strong air purifier",
        repot: "once every two years",
        feed: "once every two weeks in summer",
        tags: ["philodendron", "brazil", "trailing", "philodendron brazil", "small", "medium light", "beginner", "philodendron hederaceum"],
    },

    {
        id: 300,
        img: "./img/monstera.png",
        imgTwo: "./img/monstera-two.png",
        imgThree: "./img/monstera-three.png",
        name: "MONSTERA",
        botName: "Monstera deliciosa",
        price: 73,
        info: "The Monstera Deliciosa is naturally found in Mexico. This one is a climber so keep an eye on those leaves or they’ll just start wandering off! It loves the sun but be careful with giving them  direct sunlight.",
        size: "large",
        water: "moderate",
        light: "low-light",
        dimensions: "W: 25cm, H:75cm", 
        toxic: "Toxic",
        waterNeeds: "Average water needed",
        lightNeeds: "Low light",
        air: "Strong air purifier",
        repot: "once every two years",
        feed: "once every two weeks in summer",
        tags: ["large", "low light", "beginner", "climbing", "medium light", "monstera", "deliciosa", "monstera deliciosa"],
    },

    {
        id: 400,
        img: "./img/fig.png",
        imgTwo: "./img/fig-two.png",
        imgThree: "./img/fig-three.png",
        name: "FIDDLE LEAF FIG",
        botName: "Ficus lyrata",
        price: 90,
        info: "This plant doesn’t like to be moved around and also doesn’t like room temperature changes. As best as you can, make sure you’re keeping your indoor temp consistent, and keep away from any open doors that cause drafts or air conditioning vents",
        size: "large",
        water: "moderate",
        light: "medium-light",
        dimensions: "W: 25cm, H:70cm", 
        toxic: "Toxic",
        waterNeeds: "Regular water needed",
        lightNeeds: "Bright indirect light",
        air: "Strong air purifier",
        repot: "once every 1 - 2 years",
        feed: "every time you water (except for in winter)",
        tags: ["fiddle", "leaf", "fig", "fiddle leaf", "fiddle leaf fig", "large", "medium light", "intermediate", "ficus lyrata"],
    },

    {
        id: 500,
        img: "./img/birkin.png",
        imgTwo: "./img/birkin-two.png",
        imgThree: "./img/birkin-three.png",
        name: "PHILODENDRON BIRKIN",
        botName: "Philodendron selloum",
        price: 60,
        info: "The Philodendron Birkin shows you when it's not happy, which makes it the perfect plant for beginners. It doesn't want to be in a low-light place, but also not in direct sunlight. However, you can put it in any other type of light exposure.",
        size: "medium",
        water: "moderate",
        light: "medium-light",
        dimensions: "W: 18cm, H:48cm", 
        toxic: "Poisonous",
        waterNeeds: "Average water needed",
        lightNeeds: "Low or medium light",
        air: "Strong air purifier",
        repot: "once every two years",
        feed: "once every two weeks in summer",
        tags: ["philodendron", "birkin", "philodendron birkin", "medium", "medium light", "beginner", "philodendron selloum"],
    },

    {
        id: 600,
        img: "./img/evergreen.png",
        imgTwo: "./img/evergreen-two.png",
        imgThree:"./img/evergreen-three.png",
        name: "CHINESE EVERGREEN",
        botName: "Aglaonema",
        price: 90,
        info: "Are you looking for a houseplant that can tolerate almost any indoor condition? The Aglaonema makes a perfect office plant because it tolerates low light, but also grows well in bright spots and tolerates fluorescent lighting.",
        size: "medium",
        water: "moderate",
        light: "low-light",
        dimensions: "W: 20cm, H:68cm", 
        toxic: "Poisonous",
        waterNeeds: "Moderate water needed",
        lightNeeds: "Low or medium light",
        air: "Strong air purifier",
        repot: "once every two years",
        feed: "once every two weeks in summer",
        tags: ["chinese", "evergreen", "chinese evergreen", "low light", "beginner", "medium", "aglaonema"],
    },

    {
        id: 700,
        img: "./img/swiss-cheese.png",
        imgTwo: "./img/swiss-cheese-two.png",
        imgThree:"./img/swiss-cheese-three.png",
        name: "SWISS CHEESE VINE",
        botName: "Monstera adansonii",
        price: 65,
        info: "They're beautiful trailing plants that grow quickly when taken care of properly. You'll find Adansonii's growing naturally in South and Central America and the West Indies. It is best to avoid placing this plant directly in sunlight.",
        size: "small",
        water: "moderate",
        light: "low-light",
        dimensions: "W: 10cm, H:20cm", 
        toxic: "Toxic",
        waterNeeds: "Average water needed",
        lightNeeds: "Low light",
        air: "Strong air purifier",
        repot: "once every two years",
        feed: "once every two weeks in summer",
        tags: ["swiss", "cheese", "vine", "swiss cheese", "swiss cheese vine", "monkey mask", "small", "low-light", "beginner", "monstera adansonii"],
    },

    {
        id: 800,
        img: "./img/dragon-scale.png",
        imgTwo: "./img/dragon-two.png",
        imgThree: "./img/dragon-three.png",
        name: "ALOCASIA DRAGON SCALE",
        botName: "Alocasia baginda ",
        price: 400,
        info: "Admired for its exotic emerald-green leaves with prominent venation that reminds of the mythical Dragon scales, this plant is an all-time favorite among houseplant lovers. It is not only gorgeous, but it is also very easy to grow and care for.",
        size: "medium",
        water: "moderate",
        light: "high-light",
        dimensions: "W: 15cm, H:35cm", 
        toxic: "Poisonous",
        waterNeeds: "Average water needed",
        lightNeeds: "Very bright indirect light",
        air: "Strong air purifier",
        repot: "once every two years",
        feed: "once every six weeks in summer",
        tags: ["alocasia", "dragon", "scale", "dragon scale", "alocasia dragon scale", "medium", "advanced", "high light"],
    },

    {
        id: 900,
        img: "./img/rain-drop.png",
        imgTwo: "./img/raindrop-two.png",
        imgThree: "./img/raindrop-three.png",
        name: "RAINDROP PEPEROMIA",
        botName: "Peperomia polybotrya",
        price: 20,
        info: "This Peperomia can thrive in moderate to low light conditions and is non-toxic to pets, which makes it perfect for new plant parents. It is also a great air purifier. Seriously, can someone tell us what's not to like?",
        size: "small",
        water: "high",
        light: "medium-light",
        dimensions: "W: 10cm, H:18cm", 
        toxic: "Pet safe",
        waterNeeds: "Frequent water needed",
        lightNeeds: "Bright indirect light",
        air: "Strong air purifier",
        repot: "once every three years",
        feed: "once a month in summer",
        tags: ["peperomia", "raindrop", "raindrop peperomia", "small", "medium light", "beginner", "peperomia polybotrya"],
    },

    {
        id: 1000,
        img: "./img/verigated.png",
        imgTwo: "./img/verigated-two.png",
        imgThree: "./img/verigated-three.png",
        name: "VARIGATED MONSTERA",
        botName: "Monstera deliciosa variegata",
        price: 700,
        info: "The white portion of the variegated Monstera leaves cannot absorb light, so the plant needs to work twice as hard to photosynthesize. Low light conditions are not ideal and you should keep it in bright ambient light to make it happy.",
        size: "large",
        water: "moderate",
        light: "high-light",
        dimensions: "W: 25cm, H:100cm", 
        toxic: "Poisonous",
        waterNeeds: "Average water needed",
        lightNeeds: "Very bright indirect light",
        air: "Strong air purifier",
        repot: "once every two years",
        feed: "once every two weeks in summer",
        tags: ["varigated", "monstera", "deliciosa", "verigated monstera", "monstera deliciosa", "large", "high light", "intermediate", "monstera deliciosa variegata"],
    },

    {
        id: 1100,
        img: "./img/snake.png",
        imgTwo: "./img/snake-two.png",
        imgThree: "./img/snake-three.png",
        name: "SNAKE PLANT",
        botName: "Sansevieria Laurentii",
        price: 20,
        info: "This African plant is truly one of the easiest to maintain. These plants can be neglected for weeks at a time;  yet, with their strappy leaves and architectural shape, they still look fresh. Additionally, they can survive low light levels.",
        size: "small",
        water: "low",
        light: "low-light",
        dimensions: "W: 10cm, H:21cm", 
        toxic: "Toxic",
        waterNeeds: "Very little water needed",
        lightNeeds: "Any light",
        air: "Strong air purifier",
        repot: "once every three years",
        feed: "never",
        tags: ["snake", "snake plant", "small", "low light", "beginner", "sansevieria laurentii"],
    },

    {
        id: 1200,
        img: "./img/minima.png",
        imgTwo: "./img/minima-two.png",
        imgThree: "./img/minima-three.png",
        name: "PHILODENRON MINIMA",
        botName: "Rhaphidophora tetrasperma",
        price: 35,
        info: "What does the perfect plant look like? Well, it has beautiful split leaves, wild foliage, and all packaged in as a fast growing, great climbing plant that is low maintenance. Spoiler, it’s this plant. This plant is perfect.",
        size: "small",
        water: "moderate",
        light: "medium-light",
        dimensions: "W: 10cm, H:22cm", 
        toxic: "Poisonous",
        waterNeeds: "Average water needed",
        lightNeeds: "Low or medium light",
        air: "Strong air purifier",
        repot: "once every two years",
        feed: "once every two weeks in summer",
        tags: ["philodendron", "minima", "philodendron minima", "small", "medium light", "beginner", "rhaphidophora tetrasperma"],
    },
];


// end of array

// start of card / modal append

function itemModal(){
    $(".more-info").on("click", function(){
        for(let i=0; i < plants.length; i++){
            if(parseInt(this.id) === plants[i].id){

                console.log(plants[i].name)
                               
                $("#modalBody").empty().append(
                    `
                    <div class="col modal-one-container">
                    <div class="col modal-one">

                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="${plants[i].img}" alt="First slide">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="${plants[i].imgTwo}" alt="Second slide">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="${plants[i].imgThree}" alt="Third slide">
                        </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                        </a>
                        </div>

                        <h5 class="modal-name">${plants[i].name}</h5>
                        <h6 class="modal-bot-name"><i>${plants[i].botName}</i></h6>
                        <h6 class="modal-price"><b>$${plants[i].price} NZD</b></h6>
                        <h6 class="modal-about-me">About me.</h6>
                        <p class="modal-info">${plants[i].info}</p>
                    </div>
                    </div>

                    <div class="col modal-two-container">
                        <div class="modal-two">

                        <div class="modal-two-upper">
                            <div class="modal-two-top">

                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i class="fas fa-times"></i></span>
                                </button>

                                <h5 class="modal-heading-text">MY SPECS.</h5>

                                    <div class="dimensions">
                                        <div class="icon">
                                        <i class="fas fa-arrows-alt-v"></i>
                                        </div>
                                        <p class="specs">
                                        ${plants[i].dimensions}
                                        </p>
                                    </div>

                                    <div class="toxic">
                                        <div class="icon">
                                        <i class="fas fa-paw"></i>
                                        </div>
                                        <p class="specs">
                                        ${plants[i].toxic}
                                        </p>
                                    </div>

                            </div>

                            <div class="modal-two-mid">

                                <h5 class="modal-heading-text">MY NEEDS.</h5>

                                <div class="water-needs">
                                <div class="icon">
                                    <i class="fas fa-tint"></i>
                                    </div>
                                    <p class="needs">
                                    ${plants[i].waterNeeds}
                                    </p>
                                
                                </div>

                                <div class="light-needs">
                                <div class="icon">
                                    <i class="fas fa-sun"></i>
                                    </div>
                                    <p class="needs">
                                    ${plants[i].lightNeeds}
                                    </p>
                                </div>
                                

                                <div class="air">
                                    <div class="icon">
                                    <i class="fas fa-wind"></i>
                                    </div>
                                    <p class="needs">
                                    ${plants[i].air}
                                    </p>
                                </div>

                                <div class="repot">
                                <div class="icon">
                                <i class="fas fa-sync"></i>
                                </div>
                                <p class="needs">
                                Re-pot me ${plants[i].repot}
                                </p>
                                </div>

                                <div class="feed">
                                <div class="icon">
                                <i class="fas fa-seedling"></i>
                                </div>
                                <p class="needs">
                                Fertilise me ${plants[i].feed}
                                </p>
                                </div>
                            </div>
                        </div>

                            <div class="take-me-home">

                                <div class="take-me-home__btns">
                                    <button class="add-to-cart">TAKE ME HOME!</button>
                                    <button class="favourite"><i class="fas fa-heart"></i></button>
                                </div>

                                <p class="t-and-c">
                                <i class="fas fa-arrow-right"></i>Free Delivery on orders $75 and up
                                <br>
                                <i class="fas fa-arrow-right"></i>Customers rate us 4.7/5
                                <br>
                                <i class="fas fa-arrow-right"></i>Packaged securely for safe arrival
                                <br>
                                <i class="fas fa-arrow-right"></i>Over 40.000 green friends sold!
                                <br>
                                <i class="fas fa-arrow-right"></i>3 month happy plant guarantee</p>
                            
                            </div>
                        </div>
                    </div>
                    `
                )
            }
        }
    })
}

function cardContent(){

    for (let i=0; i < plants.length; i++){
       generateCard(i);
    };

    itemModal();
}

cardContent();

// end of card / modal

// start of filter functions

// function priceFilter(){

    
// }

// priceFilter()

function priceFilter(){

    $("#storeContainer").empty();
    let price = document.querySelector('input[name="price"]:checked').value;

    for(let i=0; i < plants.length; i++){
        if(price === "low-price" && plants[i].price <= 39){
            generateCard(i);
        } else if(price === "medium-price" && plants[i].price >= 40 && plants[i].price <= 74){
            generateCard(i);
        } else if(price === "high-price" && plants[i].price >= 75 && plants[i].price <= 99){
            generateCard(i);
        } else if(price === "xl-price" && plants[i].price >= 100){
            generateCard(i);
        } else if (price === "all"){
            generateCard(i);
        }
    }

    $("input[type=radio]").prop("checked", false);

}


function filterPlants(event){

    $("#storeContainer").empty();
    event.preventDefault();


    let plantFilter = [];
    
    $('input[name="size"]:checked').each(function(){

        plantFilter.push(this.value);

        for(let i=0; i < plants.length; i++){

            if(this.value === plants[i].size){

                generateCard(i);
            } else if (this.value === ""){

            }
        }

    });
    
    $('input[name="water"]:checked').each(function(){

        plantFilter.push(this.value);

        for(let i=0; i < plants.length; i++){

            if(this.value === plants[i].water){

                generateCard(i);
            } else if (this.value === ""){

            }
        }

    });


    $('input[name="light"]:checked').each(function(){

        plantFilter.push(this.value);

        for(let i=0; i < plants.length; i++){

            if(this.value === plants[i].light){

                generateCard(i);
            } else if (this.value === ""){

            }
        }

    });

    for(let i=0; i<plants.length; i++){
        if(plantFilter.length === 0){
            generateCard(i)
        }
    }
 
    itemModal();

    console.log(plantFilter);
    displayItems(plantFilter);

   

    $("input[type=checkbox]").prop("checked", false);

}

function displayItems(selectedItems){

    for(let i=0; i < selectedItems.length; i++){
        console.log(selectedItems[i])
    }
}


// end of filter functions




// start of sort functions

$("#sortBtn").change(function(){
    
    let sortValue = ($("#sortBtn").val().toLowerCase());
    console.log(sortValue)

    if((sortValue === "price") || (sortValue === "size") || (sortValue === "name")){
        sortByAscending(sortValue);
    }
});

function sortByAscending(sortOrder){

        plants.sort(function(a,b){

        let itemA;
        let itemB;

        switch(sortOrder){

            case "name":
                itemA = a.name.toLowerCase(), itemB = b.name.toLowerCase();
                break;

            case "price":
                itemA = a.price, itemB = b.price;
                break;

            case "size":
                itemA = b.size, itemB = a.size; 
                break;

            default:
                
        }

        if(itemA < itemB){
            return -1;

        }

        if(itemB < itemA){
            return 1;
        }
    })

    console.log(plants)
    allCards();
    itemModal();

}


$("#refreshBtn").click(function(){

    $("#storeContainer").empty();
    $("input[type=checkbox]").prop("checked", false);
    $("input[type=radio]").prop("checked", false);
    allCards();
})


function allCards(){
    $("#storeContainer").empty();
    for(let i=0; i < plants.length; i++){
        generateCard(i);
    }
}

// end of sort drop down


// start of search 

function filterSearchWord(){
    $("input[type=checkbox]").prop("checked", false);

    let searchWord = $("#searchWord").val();
    console.log(searchWord);

    filterByWord(searchWord);

    $("input[name='search']").val('')

    itemModal();
}

function filterByWord(e){
    $("#storeContainer").empty();

    for(let i=0; i < plants.length; i++){
        for(let y=0; y < plants.length; y++){
            if(e.toLowerCase() === plants[i].tags[y]){
                generateCard(i);
            }
        }
    }

    if (e === ""){
        noInput();
    }

    itemModal();
}

function noInput(){
    for(let i=0; i < plants.length; i++){
        generateCard(i);
    }
}

// end of search


// start of card generator 

function generateCard(x){

    $("#storeContainer").append(
        `
        <div id="storeContainer" class="store__card-container">
            <div class="card">
            <div class="img-container">
                <img class="card-img-top" src="${plants[x].img}" alt="Card image cap">
            </div>
                <div class="card-body">
                    <h5 class="card-title">${plants[x].name}</h5>
                    <h6 class="card-subtitle">${plants[x].botName}</h6>

                    <div class="card-bottom">
                        <p class="card-price">$${plants[x].price} NZD</p>

                        <button type="button" id="${plants[x].id}"" class="btn btn-primary more-info" data-toggle="modal" data-target="#exampleModalLong">
                            <div class="btn-text">
                            +
                            </div>
                        </button>

                        
                    </div>
                </div>
            </div>
        </div>
        `
    )

}


submitBtn.addEventListener("click", filterPlants);
searchFilter.addEventListener("click", filterSearchWord);
priceBtn.addEventListener("click", priceFilter)
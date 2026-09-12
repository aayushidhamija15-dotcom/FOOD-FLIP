/* =====================================================
   FOOD FLIP
   Vanilla JavaScript
   Frontend Only
===================================================== */


/* =====================================================
   FOOD DATABASE
===================================================== */

const foods = {

    pizza: {
        name: "Pizza",
        icon: "🍕",
        description: "Cheesy, crispy and impossible to resist.",
        healthyName: "Whole-Wheat Veggie Pizza",
        healthyIcon: "🥦",
        healthyDescription: "Crispy, cheesy and loaded with colourful vegetables.",
        calories: "320",
        protein: "15g",
        time: "30 min",
        difficulty: "Easy",

        ingredients: [
            ["Whole-wheat pizza base", "1 medium"],
            ["Tomato pizza sauce", "4 tbsp"],
            ["Mozzarella cheese", "½ cup"],
            ["Bell peppers", "½ cup, sliced"],
            ["Onion", "¼ cup, sliced"],
            ["Sweet corn", "¼ cup"],
            ["Olives", "2 tbsp"],
            ["Oregano", "1 tsp"],
            ["Chilli flakes", "½ tsp"]
        ],

        recipe: [
            ["Prepare the base", "Place the whole-wheat pizza base on a baking tray and lightly brush it with olive oil."],
            ["Add the sauce", "Spread tomato sauce evenly across the base, leaving a small border around the edges."],
            ["Load the veggies", "Add bell peppers, onion, corn and olives evenly across the pizza."],
            ["Add cheese", "Sprinkle mozzarella cheese over the vegetables."],
            ["Season", "Add oregano and chilli flakes according to your taste."],
            ["Bake", "Bake in a preheated oven at 200°C for around 12–15 minutes until golden and crispy."],
            ["Serve", "Let it cool for a couple of minutes, slice and enjoy your healthy pizza flip."]
        ],

        tip: "Use colourful vegetables for maximum flavour and crunch.",

        youtube: "https://www.youtube.com/embed/4Vh9z9K5qY8",
        youtubeLink: "https://www.youtube.com/results?search_query=healthy+vegetarian+pizza+recipe",
        videoTitle: "Healthy Vegetarian Pizza Recipe"
    },


    burger: {
        name: "Burger",
        icon: "🍔",
        description: "The classic fast-food comfort food.",
        healthyName: "Loaded Veggie Burger",
        healthyIcon: "🥬",
        healthyDescription: "A juicy veggie patty packed into a wholesome bun.",
        calories: "350",
        protein: "18g",
        time: "35 min",
        difficulty: "Easy",

        ingredients: [
            ["Whole-wheat burger bun", "1"],
            ["Boiled potato", "1 medium"],
            ["Boiled chickpeas", "½ cup"],
            ["Grated carrot", "¼ cup"],
            ["Grated beetroot", "2 tbsp"],
            ["Oats", "2 tbsp"],
            ["Lettuce", "2 leaves"],
            ["Tomato", "3 slices"],
            ["Onion", "3 slices"],
            ["Yogurt sauce", "2 tbsp"]
        ],

        recipe: [
            ["Make the patty", "Mash boiled potato and chickpeas together in a bowl."],
            ["Add vegetables", "Mix in carrot, beetroot and oats."],
            ["Season", "Add salt, pepper, cumin and your favourite herbs."],
            ["Shape", "Form the mixture into a round burger patty."],
            ["Cook", "Pan-cook the patty using a small amount of oil until both sides are golden."],
            ["Toast the bun", "Lightly toast both sides of the whole-wheat bun."],
            ["Build", "Add yogurt sauce, lettuce, tomato, onion and the veggie patty."],
            ["Serve", "Close the burger and enjoy immediately."]
        ],

        tip: "Chill the patty for 15 minutes before cooking so it holds its shape better.",

        youtube: "https://www.youtube.com/embed/6Z9g6vM8F8E",
        youtubeLink: "https://www.youtube.com/results?search_query=healthy+vegetarian+burger+recipe",
        videoTitle: "Healthy Veggie Burger Recipe"
    },


    fries: {
        name: "Fries",
        icon: "🍟",
        description: "Crispy, salty and seriously addictive.",
        healthyName: "Air-Fried Crispy Potato Fries",
        healthyIcon: "🥔",
        healthyDescription: "Golden crispy fries with significantly less oil.",
        calories: "220",
        protein: "5g",
        time: "25 min",
        difficulty: "Easy",

        ingredients: [
            ["Potatoes", "2 medium"],
            ["Olive oil", "1 tbsp"],
            ["Paprika", "½ tsp"],
            ["Garlic powder", "½ tsp"],
            ["Black pepper", "¼ tsp"],
            ["Oregano", "½ tsp"],
            ["Salt", "To taste"]
        ],

        recipe: [
            ["Cut potatoes", "Wash potatoes thoroughly and cut them into thin, even sticks."],
            ["Soak", "Soak the potato sticks in cold water for about 20 minutes."],
            ["Dry", "Drain completely and pat the potatoes dry."],
            ["Season", "Add olive oil, paprika, garlic powder, pepper and oregano."],
            ["Air fry", "Air fry at 200°C for around 15–20 minutes, shaking halfway through."],
            ["Season again", "Add a little salt while the fries are still hot."],
            ["Serve", "Serve immediately with your favourite healthy dip."]
        ],

        tip: "Dry potatoes extremely well before air frying — that's the secret to crispy fries.",

        youtube: "https://www.youtube.com/embed/Y2dW8cN8qJg",
        youtubeLink: "https://www.youtube.com/results?search_query=healthy+air+fried+fries+recipe",
        videoTitle: "Crispy Healthy Air-Fried Fries"
    },


    momos: {
        name: "Momos",
        icon: "🥟",
        description: "Steamy little pockets of deliciousness.",
        healthyName: "Steamed Vegetable Momos",
        healthyIcon: "🥬",
        healthyDescription: "Soft steamed dumplings filled with crunchy vegetables.",
        calories: "280",
        protein: "10g",
        time: "40 min",
        difficulty: "Medium",

        ingredients: [
            ["Whole-wheat flour", "1 cup"],
            ["Cabbage", "1 cup, finely chopped"],
            ["Carrot", "½ cup, grated"],
            ["Capsicum", "½ cup, chopped"],
            ["Spring onion", "¼ cup"],
            ["Ginger", "1 tsp, grated"],
            ["Garlic", "1 tsp, minced"],
            ["Black pepper", "½ tsp"],
            ["Soy sauce", "1 tsp"]
        ],

        recipe: [
            ["Make dough", "Mix whole-wheat flour with water and knead into a soft dough."],
            ["Prepare filling", "Mix cabbage, carrot, capsicum, spring onion, ginger and garlic."],
            ["Season", "Add pepper and a small amount of soy sauce."],
            ["Roll wrappers", "Divide dough into small balls and roll each one into a thin circle."],
            ["Fill", "Place vegetable filling in the centre."],
            ["Shape", "Fold and seal the momo carefully."],
            ["Steam", "Steam the momos for around 10–12 minutes."],
            ["Serve", "Serve hot with a homemade tomato-chilli dip."]
        ],

        tip: "Don't overfill the wrappers — it makes sealing and steaming harder.",

        youtube: "https://www.youtube.com/embed/8Wm1yP2m5xI",
        youtubeLink: "https://www.youtube.com/results?search_query=healthy+vegetable+momos+recipe",
        videoTitle: "Healthy Steamed Vegetable Momos"
    },


    pasta: {
        name: "Pasta",
        icon: "🍝",
        description: "Creamy, comforting and always a good idea.",
        healthyName: "Creamy Veggie Whole-Wheat Pasta",
        healthyIcon: "🥦",
        healthyDescription: "Creamy pasta loaded with vegetables and wholesome goodness.",
        calories: "390",
        protein: "17g",
        time: "25 min",
        difficulty: "Easy",

        ingredients: [
            ["Whole-wheat pasta", "1 cup"],
            ["Broccoli", "½ cup"],
            ["Bell pepper", "½ cup"],
            ["Corn", "¼ cup"],
            ["Tomato", "1 medium"],
            ["Greek yogurt", "3 tbsp"],
            ["Garlic", "2 cloves"],
            ["Black pepper", "½ tsp"],
            ["Oregano", "½ tsp"],
            ["Parmesan", "1 tbsp"]
        ],

        recipe: [
            ["Cook pasta", "Boil whole-wheat pasta according to the package instructions."],
            ["Prepare vegetables", "Chop broccoli, bell pepper and tomato into small pieces."],
            ["Sauté", "Cook garlic and vegetables in a pan with a small amount of oil."],
            ["Make sauce", "Lower the heat and mix in Greek yogurt with a splash of pasta water."],
            ["Combine", "Add cooked pasta and toss everything together."],
            ["Season", "Add pepper and oregano."],
            ["Finish", "Top with a small amount of parmesan and serve hot."]
        ],

        tip: "Reserve a little pasta water — it makes the yogurt sauce smoother.",

        youtube: "https://www.youtube.com/embed/8N5J5Q1LQ4M",
        youtubeLink: "https://www.youtube.com/results?search_query=healthy+vegetable+whole+wheat+pasta",
        videoTitle: "Healthy Creamy Vegetable Pasta"
    },


    noodles: {
        name: "Noodles",
        icon: "🍜",
        description: "Slurpy, savoury and full of comfort.",
        healthyName: "Veggie Stir-Fry Noodles",
        healthyIcon: "🥕",
        healthyDescription: "Colourful vegetables tossed with wholesome noodles.",
        calories: "330",
        protein: "12g",
        time: "20 min",
        difficulty: "Easy",

        ingredients: [
            ["Whole-wheat noodles", "1 serving"],
            ["Carrot", "½ cup"],
            ["Bell pepper", "½ cup"],
            ["Cabbage", "½ cup"],
            ["Spring onion", "¼ cup"],
            ["Garlic", "2 cloves"],
            ["Low-sodium soy sauce", "1 tbsp"],
            ["Sesame seeds", "1 tsp"],
            ["Black pepper", "½ tsp"]
        ],

        recipe: [
            ["Cook noodles", "Boil noodles until just cooked. Drain and keep aside."],
            ["Heat pan", "Heat a wok or large pan with a small amount of oil."],
            ["Add aromatics", "Add garlic and spring onion."],
            ["Add vegetables", "Stir-fry carrot, capsicum and cabbage on high heat."],
            ["Add noodles", "Add cooked noodles and toss everything together."],
            ["Season", "Add low-sodium soy sauce and pepper."],
            ["Finish", "Top with sesame seeds and spring onion."]
        ],

        tip: "Keep the vegetables slightly crunchy for better texture and flavour.",

        youtube: "https://www.youtube.com/embed/2cY8a7yZqN4",
        youtubeLink: "https://www.youtube.com/results?search_query=healthy+vegetable+stir+fry+noodles",
        videoTitle: "Healthy Vegetable Stir-Fry Noodles"
    },


    sandwich: {
        name: "Sandwich",
        icon: "🥪",
        description: "Quick, easy and endlessly customisable.",
        healthyName: "Grilled Veggie Sandwich",
        healthyIcon: "🥬",
        healthyDescription: "Crunchy vegetables, creamy spread and toasted whole-grain bread.",
        calories: "290",
        protein: "14g",
        time: "15 min",
        difficulty: "Easy",

        ingredients: [
            ["Whole-grain bread", "4 slices"],
            ["Cucumber", "½"],
            ["Tomato", "1"],
            ["Capsicum", "½"],
            ["Lettuce", "2 leaves"],
            ["Hung curd", "3 tbsp"],
            ["Mint", "2 tbsp"],
            ["Black pepper", "¼ tsp"]
        ],

        recipe: [
            ["Make spread", "Mix hung curd with mint, pepper and a pinch of salt."],
            ["Prepare vegetables", "Slice cucumber, tomato and capsicum thinly."],
            ["Spread", "Apply the yogurt-mint spread over the bread."],
            ["Layer", "Add lettuce and all the sliced vegetables."],
            ["Grill", "Toast the sandwich on a pan or sandwich grill until golden."],
            ["Serve", "Cut diagonally and serve warm."]
        ],

        tip: "Add a little roasted cumin to the yogurt spread for extra flavour.",

        youtube: "https://www.youtube.com/embed/3dJ9R9xQy2M",
        youtubeLink: "https://www.youtube.com/results?search_query=healthy+vegetable+grilled+sandwich",
        videoTitle: "Healthy Grilled Veggie Sandwich"
    },


    tacos: {
        name: "Tacos",
        icon: "🌮",
        description: "Crunchy shells with seriously satisfying fillings.",
        healthyName: "Loaded Bean & Veggie Tacos",
        healthyIcon: "🌮",
        healthyDescription: "Crunchy tacos loaded with beans, vegetables and fresh salsa.",
        calories: "310",
        protein: "14g",
        time: "25 min",
        difficulty: "Easy",

        ingredients: [
            ["Whole-grain taco shells", "3"],
            ["Cooked kidney beans", "½ cup"],
            ["Corn", "¼ cup"],
            ["Tomato", "1"],
            ["Onion", "¼"],
            ["Lettuce", "½ cup"],
            ["Hung curd", "2 tbsp"],
            ["Lime", "½"],
            ["Cumin", "½ tsp"]
        ],

        recipe: [
            ["Prepare beans", "Warm cooked kidney beans with cumin and a pinch of salt."],
            ["Make salsa", "Mix chopped tomato, onion, lime juice and coriander."],
            ["Prepare shells", "Warm taco shells according to their instructions."],
            ["Add lettuce", "Place shredded lettuce inside each shell."],
            ["Add filling", "Add seasoned beans and corn."],
            ["Top", "Add fresh salsa and a spoon of hung curd."],
            ["Serve", "Serve immediately while the shells are crunchy."]
        ],

        tip: "Add fresh lime right before eating for a bright flavour.",

        youtube: "https://www.youtube.com/embed/5sK7c8D1xV0",
        youtubeLink: "https://www.youtube.com/results?search_query=healthy+vegetarian+tacos+recipe",
        videoTitle: "Healthy Vegetarian Tacos"
    },


    wrap: {
        name: "Wrap",
        icon: "🌯",
        description: "Everything delicious, wrapped up.",
        healthyName: "Grilled Veggie Hummus Wrap",
        healthyIcon: "🥗",
        healthyDescription: "Wholesome wrap filled with grilled vegetables and creamy hummus.",
        calories: "300",
        protein: "13g",
        time: "20 min",
        difficulty: "Easy",

        ingredients: [
            ["Whole-wheat roti", "1 large"],
            ["Hummus", "3 tbsp"],
            ["Bell pepper", "½"],
            ["Onion", "¼"],
            ["Carrot", "½"],
            ["Cucumber", "½"],
            ["Lettuce", "2 leaves"],
            ["Black pepper", "¼ tsp"]
        ],

        recipe: [
            ["Prepare vegetables", "Slice all vegetables into thin strips."],
            ["Grill", "Lightly grill bell pepper and onion in a pan."],
            ["Warm roti", "Warm the whole-wheat roti for a few seconds."],
            ["Add hummus", "Spread hummus evenly across the roti."],
            ["Layer", "Add lettuce, carrot, cucumber and grilled vegetables."],
            ["Roll", "Fold the sides and tightly roll the wrap."],
            ["Serve", "Cut in half and enjoy."]
        ],

        tip: "Don't overload the wrap or it becomes difficult to roll.",

        youtube: "https://www.youtube.com/embed/7cK7M1fQ3wA",
        youtubeLink: "https://www.youtube.com/results?search_query=healthy+vegetable+hummus+wrap",
        videoTitle: "Healthy Veggie Hummus Wrap"
    },


    nachos: {
        name: "Nachos",
        icon: "🧀",
        description: "Crunchy, cheesy and perfect for sharing.",
        healthyName: "Baked Multigrain Nachos",
        healthyIcon: "🌽",
        healthyDescription: "Crunchy baked chips topped with beans, vegetables and fresh salsa.",
        calories: "280",
        protein: "11g",
        time: "20 min",
        difficulty: "Easy",

        ingredients: [
            ["Multigrain tortilla chips", "1 cup"],
            ["Cooked black beans", "½ cup"],
            ["Corn", "¼ cup"],
            ["Tomato", "1"],
            ["Onion", "¼"],
            ["Cheese", "¼ cup"],
            ["Hung curd", "2 tbsp"],
            ["Coriander", "2 tbsp"]
        ],

        recipe: [
            ["Prepare tray", "Spread multigrain chips over a baking tray."],
            ["Add beans", "Scatter cooked black beans and corn over the chips."],
            ["Add cheese", "Sprinkle cheese evenly."],
            ["Bake", "Bake until the cheese melts."],
            ["Prepare salsa", "Mix chopped tomato, onion and coriander."],
            ["Top", "Add fresh salsa and hung curd."],
            ["Serve", "Serve immediately."]
        ],

        tip: "Use the cheese as a topping rather than drowning the nachos in it.",

        youtube: "https://www.youtube.com/embed/9dQ8Y5vK1L0",
        youtubeLink: "https://www.youtube.com/results?search_query=healthy+baked+vegetarian+nachos",
        videoTitle: "Healthy Baked Vegetarian Nachos"
    },


    quesadilla: {
        name: "Quesadilla",
        icon: "🫓",
        description: "Crispy outside, cheesy inside.",
        healthyName: "Veggie Bean Quesadilla",
        healthyIcon: "🌮",
        healthyDescription: "Whole-wheat quesadilla packed with vegetables and beans.",
        calories: "340",
        protein: "17g",
        time: "20 min",
        difficulty: "Easy",

        ingredients: [
            ["Whole-wheat tortilla", "2"],
            ["Cooked kidney beans", "½ cup"],
            ["Bell pepper", "½ cup"],
            ["Corn", "¼ cup"],
            ["Mozzarella cheese", "¼ cup"],
            ["Onion", "¼ cup"],
            ["Cumin", "½ tsp"],
            ["Coriander", "2 tbsp"]
        ],

        recipe: [
            ["Prepare filling", "Mix beans, bell pepper, corn and onion."],
            ["Season", "Add cumin, coriander, pepper and salt."],
            ["Fill tortilla", "Place filling and cheese over half of a tortilla."],
            ["Fold", "Fold the tortilla over the filling."],
            ["Cook", "Cook on a dry pan until golden on both sides."],
            ["Cut", "Cut into triangles."],
            ["Serve", "Serve with fresh salsa or yogurt dip."]
        ],

        tip: "Keep the filling layer thin so the tortilla becomes perfectly crispy.",

        youtube: "https://www.youtube.com/embed/3Q1k6nW7mP0",
        youtubeLink: "https://www.youtube.com/results?search_query=healthy+vegetarian+quesadilla",
        videoTitle: "Healthy Veggie Quesadilla"
    },


    springroll: {
        name: "Spring Rolls",
        icon: "🥢",
        description: "Crunchy rolls with a flavourful filling.",
        healthyName: "Baked Vegetable Spring Rolls",
        healthyIcon: "🥕",
        healthyDescription: "Crispy baked rolls packed with colourful vegetables.",
        calories: "240",
        protein: "8g",
        time: "30 min",
        difficulty: "Medium",

        ingredients: [
            ["Spring roll wrappers", "6"],
            ["Cabbage", "1 cup"],
            ["Carrot", "½ cup"],
            ["Capsicum", "½ cup"],
            ["Spring onion", "¼ cup"],
            ["Garlic", "2 cloves"],
            ["Soy sauce", "1 tsp"],
            ["Sesame oil", "1 tsp"]
        ],

        recipe: [
            ["Prepare vegetables", "Thinly slice cabbage, carrot and capsicum."],
            ["Stir fry", "Quickly stir-fry vegetables with garlic and spring onion."],
            ["Season", "Add a small amount of soy sauce and sesame oil."],
            ["Cool", "Allow the filling to cool slightly."],
            ["Fill wrappers", "Place a small amount of filling inside each wrapper."],
            ["Roll", "Fold the sides and roll tightly."],
            ["Bake", "Brush lightly with oil and bake until golden and crispy."],
            ["Serve", "Serve with a homemade chilli-yogurt dip."]
        ],

        tip: "Don't make the filling watery; moisture can make the rolls soggy.",

        youtube: "https://www.youtube.com/embed/4jL8M2rQ5wE",
        youtubeLink: "https://www.youtube.com/results?search_query=healthy+baked+vegetable+spring+rolls",
        videoTitle: "Healthy Baked Vegetable Spring Rolls"
    }

};


/* =====================================================
   ELEMENTS
===================================================== */

const foodInput = document.getElementById("foodInput");
const suggestions = document.getElementById("suggestions");
const resultSection = document.getElementById("resultSection");

let currentFood = null;


/* =====================================================
   SEARCH SUGGESTIONS
===================================================== */

foodInput.addEventListener("input", function () {

    const value = this.value.toLowerCase().trim();

    suggestions.innerHTML = "";

    if (!value) {
        suggestions.style.display = "none";
        return;
    }

    const matches = Object.keys(foods).filter(key =>
        foods[key].name.toLowerCase().includes(value)
    );

    if (matches.length === 0) {
        suggestions.style.display = "none";
        return;
    }

    matches.forEach(key => {

        const food = foods[key];

        const item = document.createElement("div");

        item.className = "suggestion-item";

        item.innerHTML = `
            <span>${food.icon}</span>
            <strong>${food.name}</strong>
        `;

        item.onclick = function () {
            selectFood(key);
        };

        suggestions.appendChild(item);
    });

    suggestions.style.display = "block";
});


/* =====================================================
   ENTER KEY
===================================================== */

foodInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        flipFood();
    }

});


/* =====================================================
   SELECT FOOD
===================================================== */

function selectFood(foodKey) {

    if (!foods[foodKey]) return;

    foodInput.value = foods[foodKey].name;

    suggestions.style.display = "none";

    flipFood(foodKey);
}


/* =====================================================
   FLIP FOOD
===================================================== */

function flipFood(foodKey = null) {

    let key = foodKey;

    if (!key) {

        const input = foodInput.value.toLowerCase().trim();

        key = Object.keys(foods).find(food =>
            foods[food].name.toLowerCase() === input ||
            food === input
        );

    }

    if (!key || !foods[key]) {

        showToast("Try one of our available foods ✨");

        foodInput.classList.add("shake");

        setTimeout(() => {
            foodInput.classList.remove("shake");
        }, 400);

        return;
    }

    currentFood = foods[key];

    displayFood(currentFood);

    resultSection.classList.remove("hidden");

    resultSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    showToast(`${currentFood.name} successfully flipped! 🔄`);

}


/* =====================================================
   DISPLAY FOOD
===================================================== */

function displayFood(food) {

    document.getElementById("originalIcon").textContent = food.icon;

    document.getElementById("originalFoodName").textContent = food.name;

    document.getElementById("originalDescription").textContent =
        food.description;


    document.getElementById("healthyIcon").textContent =
        food.healthyIcon;

    document.getElementById("healthyFoodName").textContent =
        food.healthyName;

    document.getElementById("healthyDescription").textContent =
        food.healthyDescription;


    document.getElementById("calories").textContent =
        food.calories;

    document.getElementById("protein").textContent =
        food.protein;

    document.getElementById("time").textContent =
        food.time;

    document.getElementById("difficulty").textContent =
        food.difficulty;


    displayIngredients(food);

    displayRecipe(food);

    document.getElementById("chefTip").textContent =
        food.tip;


    document.getElementById("youtubeVideo").src =
        food.youtube;

    document.getElementById("youtubeLink").href =
        food.youtubeLink;

    document.getElementById("videoTitle").textContent =
        food.videoTitle;


    resetPanels();

}


/* =====================================================
   INGREDIENTS
===================================================== */

function displayIngredients(food) {

    const container =
        document.getElementById("ingredientsList");

    container.innerHTML = "";

    food.ingredients.forEach((ingredient) => {

        const div = document.createElement("div");

        div.className = "ingredient";

        div.innerHTML = `
            <div class="ingredient-check">✓</div>

            <div class="ingredient-info">
                <strong>${ingredient[0]}</strong>
                <span>${ingredient[1]}</span>
            </div>
        `;

        container.appendChild(div);

    });

}


/* =====================================================
   RECIPE
===================================================== */

function displayRecipe(food) {

    const container =
        document.getElementById("recipeSteps");

    container.innerHTML = "";

    food.recipe.forEach((step, index) => {

        const div = document.createElement("div");

        div.className = "recipe-step";

        div.innerHTML = `
            <div class="step-number">
                ${String(index + 1).padStart(2, "0")}
            </div>

            <div>
                <h4>${step[0]}</h4>
                <p>${step[1]}</p>
            </div>
        `;

        container.appendChild(div);

    });

}


/* =====================================================
   PANEL CONTROL
===================================================== */

function resetPanels() {

    document
        .getElementById("ingredientsPanel")
        .classList.remove("hidden");

    document
        .getElementById("recipePanel")
        .classList.add("hidden");

    document
        .getElementById("tutorialPanel")
        .classList.add("hidden");

    updateProgress(1);

}


function showRecipe() {

    document
        .getElementById("ingredientsPanel")
        .classList.add("hidden");

    document
        .getElementById("recipePanel")
        .classList.remove("hidden");

    document
        .getElementById("tutorialPanel")
        .classList.add("hidden");

    updateProgress(2);

    document
        .getElementById("recipePanel")
        .scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

}


function showTutorial() {

    document
        .getElementById("ingredientsPanel")
        .classList.add("hidden");

    document
        .getElementById("recipePanel")
        .classList.add("hidden");

    document
        .getElementById("tutorialPanel")
        .classList.remove("hidden");

    updateProgress(3);

    document
        .getElementById("tutorialPanel")
        .scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

}


/* =====================================================
   PROGRESS BAR
===================================================== */

function updateProgress(step) {

    const items =
        document.querySelectorAll(".progress-item");

    items.forEach((item, index) => {

        if (index < step) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }

    });

}


/* =====================================================
   RESET
===================================================== */

function resetFood() {

    resultSection.classList.add("hidden");

    foodInput.value = "";

    currentFood = null;

    document.getElementById("youtubeVideo").src = "";

    window.scrollTo({
        top: document.getElementById("search").offsetTop - 70,
        behavior: "smooth"
    });

}


/* =====================================================
   TOAST
===================================================== */

function showToast(message) {

    const toast =
        document.getElementById("toast");

    const toastMessage =
        document.getElementById("toastMessage");

    toastMessage.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);

}


/* =====================================================
   SCROLL HELPERS
===================================================== */

function scrollToSearch() {

    document
        .getElementById("search")
        .scrollIntoView({
            behavior: "smooth"
        });

    setTimeout(() => {
        foodInput.focus();
    }, 700);

}


function scrollToHowItWorks() {

    document
        .getElementById("how-it-works")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =====================================================
   CLOSE SUGGESTIONS
===================================================== */

document.addEventListener("click", function(event) {

    if (
        !event.target.closest(".search-box-wrapper")
    ) {
        suggestions.style.display = "none";
    }

});


/* =====================================================
   WELCOME MESSAGE
===================================================== */

window.addEventListener("load", function() {

    setTimeout(() => {

        showToast("Welcome to Food Flip! 🥗");

    }, 1200);

});
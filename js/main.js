const meals = [

  {
    name: "Honey Garlic Salmon",
    caption: "Pan-seared salmon with a sweet and savory glaze",
  img: "salmon.avif",


    rating: 4.9,
    reviews: 187,

    difficulty: "Easy",
    cuisine: "Seafood",

    prepTime: "10 min",
    cookTime: "15 min",
    servings: "2 people",

    ingredients: [
      "2 salmon fillets (6oz each)",
      "3 tablespoons honey",
      "2 tablespoons soy sauce",
      "4 cloves garlic, minced",
      "1 tablespoon olive oil",
      "1 teaspoon fresh ginger, grated",
      "Sesame seeds for garnish",
      "Green onions, sliced"
    ],

    instructions: [
      "Pat salmon fillets dry with paper towels. Season with salt and pepper.",
      "In a small bowl, whisk together honey, soy sauce, minced garlic, and grated ginger.",
      "Heat olive oil in a large skillet over medium-high heat.",
      "Place salmon fillets skin-side up in the pan. Cook for 4-5 minutes until golden.",
      "Flip salmon and pour honey garlic sauce over the top. Cook for another 4-5 minutes."
    ],

    nutrition: [
      {
       label: "Calories", 
       value: "380 kcal", 
       icon: "fa-fire", 
       class: "calories"
       },
      {
         label: "Protein", 
         value: "35g",
          icon: "fa-dumbbell",
           class: "protein"
           },
      { 
        label: "Carbs",
         value: "28g",
          icon: "fa-wheat-awn",
           class: "carbs" 
          },
      { 
        label: "Fat",
        
        value: "14g", 
        icon: "fa-droplet",
         class: "fat" 
        }
    ],

    tips: [
      "Don't overcook salmon - it should be slightly pink in the center",
      "Use wild-caught salmon for best flavor and nutrition",
      "Let the sauce caramelize slightly for deeper flavor",
      "Pair with steamed broccoli or asparagus for a complete meal"
    ]
  },

  {
    name: "Pad Thai",
    caption: "Classic Thai stir-fried noodles with shrimp",
  img: "padthai.avif",

    rating: 4.8,
    reviews: 445,

    difficulty: "Intermediate",
    cuisine: "Asian",

    prepTime: "20 min",
    cookTime: "15 min",
    servings: "2 people",

    ingredients: [
      "200g rice noodles",
      "200g shrimp, peeled",
      "2 eggs",
      "3 tablespoons tamarind paste",
      "2 tablespoons fish sauce",
      "1 tablespoon palm sugar",
      "Bean sprouts",
      "Crushed peanuts",
      "Lime wedges and cilantro",
    ],

    instructions: [
      "Soak rice noodles in warm water for 30 minutes. Drain and set aside.",
      "Mix tamarind paste, fish sauce, and palm sugar to make the sauce.",
      "Heat wok over high heat. Scramble eggs and set aside.",
      "Cook shrimp until pink. Add noodles and sauce, toss for 2-3 minutes.",
      "Add scrambled eggs and bean sprouts. Toss everything together.",
      "Serve topped with crushed peanuts, lime wedges, and cilantro.",
    ],

    nutrition: [
      {
       label: "Calories", 
       value: "420 kcal", 
       icon: "fa-fire", 
       class: "calories"
       },
      { 
        label: "Protein", 
        value: "22g",
         icon: "fa-dumbbell", 
         class: "protein" 
        },
      { 
        label: "Carbs",
         value: "45g",
          icon: "fa-wheat-awn", 
          class: "carbs"
         },
      {
         label: "Fat",
          value: "14g",
           icon: "fa-droplet",
            class: "fat"
         }
    ],

    tips: [
      "Don't oversoak noodles or they'll be mushy",
      "Cook on high heat for authentic wok flavor",
      "Balance sweet, sour, and salty flavors",
      "Prepare all ingredients before starting to cook",
    ]
  },

  {
    name: "Classic Beef Burger",
    caption: "Juicy grilled beef burger with fresh toppings",
    img: "burger.avif",

    rating: 4.6,
    reviews: 512,

    difficulty: "Easy",
    cuisine: "American",

    prepTime: "10 min",
    cookTime: "10 min",
    servings: "2 people",

    ingredients: [
      "500g ground beef (80/20)",
      "4 burger buns",
      "4 slices cheddar cheese",
      "Lettuce leaves",
      "Tomato slices",
      "Red onion, sliced",
      "Pickles",
      "Burger sauce or condiments",
    ],

    instructions: [
      "Divide ground beef into 4 equal portions. Form into patties, making a small indent in the center.",
      "Season patties generously with salt and pepper on both sides.",
      "Heat a grill or skillet over high heat. Cook patties for 4-5 minutes per side for medium.",
      "Add cheese slices in the last minute of cooking and cover to melt.",
      "Toast burger buns lightly on the grill or in a pan.",
      "Assemble burgers with lettuce, tomato, onion, pickles, and your favorite sauce."
    ],

    nutrition: [
      {
         label: "Calories", 
         value: "550 kcal",
          icon: "fa-fire",
           class: "calories"
           },
      {
         label: "Protein",
          value: "30g",
           icon: "fa-dumbbell",
            class: "protein"
           },
      { 
        label: "Carbs",
         value: "40g",
          icon: "fa-wheat-awn",
           class: "carbs" 
          },
      { 
        label: "Fat",
         value: "32g",
          icon: "fa-droplet",
           class: "fat" 
          }
    ],

    tips: [
      "Don't press down on burgers while cooking - keeps them juicy",
      "Make indent in center to prevent burger from puffing up",
      "Let patties rest for 2-3 minutes before serving",
      "Toast buns for better texture and flavor"
    ]
  },

  {
    name: "Lasagna Bolognese",
    caption: "Classic Italian layered pasta",
    img: "lasagna.avif",

    rating: 4.7,
    reviews: 389,

    difficulty: "Hard",
    cuisine: "Italian",

    prepTime: "30 min",
    cookTime: "90 min",
    servings: "6 people",

    ingredients: [
      "12 lasagna sheets",
      "500g ground beef",
      "400g canned tomatoes",
      "1 onion, diced",
      "2 carrots, diced",
      "500ml béchamel sauce",
      "200g mozzarella, grated",
      "100g parmesan cheese",
      "Fresh basil"
    ],

    instructions: [
      "Cook ground beef with onion and carrots until browned. Add tomatoes and simmer for 30 minutes.",
      "Cook lasagna sheets according to package directions. Drain and set aside.",
      "Preheat oven to 180°C (350°F).",
      "In a baking dish, layer: meat sauce, lasagna sheets, béchamel sauce. Repeat 3-4 times.",
      "Top final layer with béchamel, mozzarella, and parmesan cheese.",
      "Bake for 45 minutes until golden and bubbly. Let rest 10 minutes before serving."
    ],

    nutrition: [
      {
         label: "Calories", 
         value: "680 kcal", 
         icon: "fa-fire", 
         class: "calories"
         },
      { 
        label: "Protein",
         value: "42g",
          icon: "fa-dumbbell",
           class: "protein"
           },
      { 
        label: "Carbs", 
        value: "58g", 
        icon: "fa-wheat-awn", 
        class: "carbs"
       },
      {
         label: "Fat",
          value: "28g",
           icon: "fa-droplet",
            class: "fat" 
        }
    ],

    tips: [
      "Make bolognese sauce a day ahead for better flavor",
      "Don't skip the resting time after baking",
      "Use fresh pasta sheets for best texture",
      "Freeze leftovers in individual portions"
    ]
  },
  {
  name: "Margherita Pizza",
  caption: "Classic Italian pizza with fresh mozzarella and basil",
  img: "pizza1.avif",

  rating: 4.9,
  reviews: 512,

  difficulty: "Intermediate",
  cuisine: "Italian",

  prepTime: "90 min",
  cookTime: "12 min",
  servings: "2 people",

  ingredients: [
    "300g pizza dough",
    "200g crushed tomatoes",
    "250g fresh mozzarella",
    "Fresh basil leaves",
    "2 tbsp olive oil",
    "2 cloves garlic, minced",
    "Salt and pepper to taste",
    "Parmesan cheese for topping"
  ],

  instructions: [
    "Preheat oven to maximum temperature (usually 250°C/480°F).",
    "Mix crushed tomatoes with olive oil, garlic, salt, and pepper for the sauce.",
    "Roll out dough on a floured surface to desired thickness.",
    "Spread tomato sauce, add torn mozzarella pieces, and drizzle with olive oil.",
    "Bake for 10-12 minutes until crust is golden. Top with fresh basil and parmesan."
  ],

  nutrition: [
    {
       label: "Calories", 
       value: "520 kcal", 
       icon: "fa-fire", 
       class: "calories"
       },
    { 
      label: "Protein", 
      value: "22g", 
      icon: "fa-dumbbell", 
      class: "protein"
     },
    { 
      label: "Carbs",
       value: "58g", 
       icon: "fa-wheat-awn",
        class: "carbs"
       },
    { 
      label: "Fat",
       value: "24g",
        icon: "fa-droplet",
         class: "fat"
         }
  ],

  tips: [
    "Use a pizza stone for crispier crust",
    "Don't overload with toppings - less is more",
    "Add basil after baking to keep it fresh",
    "Let dough rest properly for best texture"
  ]
},
{
  name: "Mediterranean Quinoa Bowl",
  caption: "Healthy bowl with quinoa and vegetables",
  img: "thagreen.avif",

  rating: 4.5,
  reviews: 156,

  difficulty: "Easy",
  cuisine: "Mediterranean",

  prepTime: "20 min",
  cookTime: "35 min",
  servings: "2 people",

  ingredients: [
    "1 cup quinoa",
    "Cherry tomatoes,halved",
    "Cucumber, diced",
    "Red onion,sliced",
    "Kalamata olives",
    "Feta cheese, crumbled",
    "Fresh parsley",
    "Tahini dressing"
  ],

  instructions: [
    "Rinse quinoa thoroughly. Cook according to package directions, usually 15 minutes.",
    "While quinoa cooks, prepare all vegetables and set aside.",
    "For tahini dressing: mix tahini, lemon juice, garlic, and water until smooth.",
    "Fluff cooked quinoa with a fork and let cool slightly.",
    "Arrange quinoa in bowls. Top with tomatoes, cucumber, onion, and olives.",
    "Sprinkle with feta cheese and fresh parsley. Drizzle with tahini dressing."
  ],

  nutrition: [
    {
       label: "Calories", 
       value: "410 kcal", 
       icon: "fa-fire", 
       class: "calories"
       },
    {
       label: "Protein", 
       value: "16g",
        icon: "fa-dumbbell",
         class: "protein"
         },
    {
       label: "Carbs",
        value: "45g", 
        icon: "fa-wheat-awn", 
        class: "carbs" 
      },
    {
       label: "Fat", 
       value: "18g", 
       icon: "fa-droplet", 
       class: "fat"
       }
  ],

  tips: [
    "Rinse quinoa well to remove bitter coating",
    "SLet quinoa cool before adding fresh ingredients",
    "Make extra tahini dressing - it keeps well in the fridge",
    "Add grilled chicken or chickpeas for extra protein"
  ]
},
{
  name: "Vegetable Curry",
  caption: "Hearty vegetarian curry with coconut milk",
  img: "chicken stir.avif",

  rating: 4.6,
  reviews: 289,

  difficulty: "Easy",
  cuisine: "Asian",

  prepTime: "20 min",
  cookTime: "30 min",
  servings: "4 people",

  ingredients: [
    "2 potatoes",
    "1 cauliflower, florets",
    "2 carrots, sliced",
    "1 can chickpeas",
    "400ml coconut milk",
    "3 tablespoons curry powder",
    "1 onion, diced",
    "3 cloves garlic, minced",
    "Fresh spinach"
  ],

  instructions: [
    "Add potatoes and carrots, cook for 5 minutes.",
    "Pour in coconut milk and 1 cup water. Bring to simmer.",
    "Add cauliflower and chickpeas. Cook for 20 minutes until vegetables are tender.",
    "Stir in fresh spinach and cook until wilted.",
    "Serve hot over basmati rice or with naan bread."
  ],

  nutrition: [
    { 
      label: "Calories", 
      value: "460 kcal", 
      icon: "fa-fire",
       class: "calories" 
      },
    { 
      label: "Protein", 
      value: "14g", 
      icon: "fa-dumbbell", 
      class: "protein" 
    },
    { 
      label: "Carbs", 
      value: "50g", 
      icon: "fa-wheat-awn", 
      class: "carbs" 
    },
    { 
      label: "Fat", 
      value: "22g", 
      icon: "fa-droplet", 
      class: "fat"
     }
  ],

  tips: [
    "Add vegetables in order of cooking time needed",
    "Adjust curry powder amount to taste",
    "Use full-fat coconut milk for creamier curry",
    "Add protein like tofu or paneer if desired"
  ]
}



];



function displayRandomMeals() {
  var randomIndex = Math.floor(Math.random() * meals.length);
  var meal = meals[randomIndex];

  /* BASIC INFO */
  document.getElementById("mealsName").innerText = meal.name;
  document.getElementById("mealsCaption").innerText = meal.caption;
  document.getElementById("mainMealImage").src = "./images/" + meal.img;

  document.getElementById("mealsPrepTime").innerText = meal.prepTime;
  document.getElementById("mealsCookTime").innerText = meal.cookTime;
  document.getElementById("mealsServings").innerText = meal.servings;

  document.getElementById("type1").innerText = meal.difficulty;
  document.getElementById("type2").innerText = meal.cuisine;

  document.getElementById("mealRating").innerText = meal.rating;
  document.getElementById("reviews").innerText = "(" + meal.reviews + " reviews)";

  var ingredientsBox = document.querySelector(".ingredients-lists");
  ingredientsBox.innerHTML = "";

  for (var i = 0; i < meal.ingredients.length; i++) {
    ingredientsBox.innerHTML += `
      <li>
        <span class="numbers">${i + 1}</span>
        ${meal.ingredients[i]}
      </li>
    `;
  }

  var instructionsBox = document.querySelector("#instructions .instructions-box");
  instructionsBox.innerHTML = "";

  for (var i = 0; i < meal.instructions.length; i++) {
    instructionsBox.innerHTML += `
      <p>
        <span class="step-number">${i + 1}</span>
        ${meal.instructions[i]}
      </p>
    `;
  }

  var nutritionBox = document.querySelector(".nutrition-grid");
  nutritionBox.innerHTML = "";

  for (var i = 0; i < meal.nutrition.length; i++) {
    nutritionBox.innerHTML += `
      <div class="nutri-card">
        <div class="nutri-left">
          <div class="nutri-icon ${meal.nutrition[i].class}">
            <i class="fa-solid ${meal.nutrition[i].icon}"></i>
          </div>
          <p class="nutri-title">${meal.nutrition[i].label}</p>
        </div>
        <p class="nutri-value">${meal.nutrition[i].value}</p>
      </div>
    `;
  }

  var tipsBox = document.querySelector(".tips-box2");
  tipsBox.innerHTML = "";

  for (var i = 0; i < meal.tips.length; i++) {
    tipsBox.innerHTML += `
      <p>
        <i class="fa fa-check"></i>
        ${meal.tips[i]}
      </p>
    `;
  }
}

displayRandomMeals();

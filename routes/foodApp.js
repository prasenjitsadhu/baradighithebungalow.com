const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.render('dining', {page_name: 'dining'});
});

let food = [];

let kidsMenu = {
    slug: "kids",
    name: "Kids Menu",
    desc: "At Baradighi, there is something for everyone. We have a special kids menu that is sure to please the little ones.",
    foods: [
        {name: "Mac & Cheese",
         price: "₹230",
         Fdesc: "Macaroni pasta in a creamy cheese sauce"},
        {name: "Fish & Chips",
         price: "₹250",
         Fdesc: "Fish fillet in a crispy flour batter with tarter sauce"},
        {name: "Griddle Cake",
         price: "₹210",
         Fdesc: "Starch-based batter with eggs, milk, and butter. Served with choice of toppings"},
        {name: "French Toast",
         price: "₹210",
         Fdesc: "Bread dipped in egg and milk, then fried. Served with choice of toppings"},
        {name: "Chicken Quesadilla",
         price: "₹250",
         Fdesc: "Grilled tortilla filled with chicken, cheese, and vegetables"},
        {name: "Cheese Chilli Toast",
         price: "₹180",
         Fdesc: "Toasted bread with cheese and chilli"},
        {name: "BBQ Hoisen & Honey Chicken",
         price: "₹300",
         Fdesc: "Asian style delicious char grilled chicken with BBQ sauce"}
    ]
};

let saladMenu = {
    slug: "salads",
    name: "Salads Menu",
    desc: "Grown organically in our own garden, our salads are fresh and healthy. We have a variety of salads to choose from",
    foods: [
        {name: "Green Salad",
         price : "₹180",
         Fdesc: "Fresh organic greens with tomatoes, cucumber, and carrots"},
        {name: "Bean Salad with Chicken",
         price : "₹350",
         Fdesc: "Tasty Boiled beans with chicken and vegetables"},
        {name: "Berry & Cream Salad",
         price : "₹260",
         Fdesc: "Light and refreshing salad with berries and cream"},
        {name: "Fruit Salad",
         price : "₹250",
         Fdesc: "Fresh seasonal fruits with honey and mint"}
    ]
};

let soupMenu = {
    slug: "soups",
    name: "Soups Menu",
    desc: "Discover the soul-soothing power of hearty soups made from freshly produce - perfect for any time of day",
    foods: [
        {name: "Tomato Basel",
         price : "₹210",
         Fdesc: "Tomato flavour with fresh"},
        {name: "Cream D'asperges",
         price : "₹230",
         Fdesc: "Saute onions and asparagus in butter with creme frei'che"},
        {name: "Soupe De Crevette",
         price : "₹300",
         Fdesc: "Rich blended creamy soup with roasted shrimps"},
        {name: "Lemon Coriander Soup",
         price : "₹210",
         Fdesc: "Delicious lemon and coriander soup made with vitamin C rich ingredients like lemon, coriander, carrots and cabbage"}
    ]
};
let PizzaMenu = {
    slug: "pizza",
    name: "Pizza Menu",
    desc: "Slice into happiness with our mouth-watering pizzas. Experience Italy with every bite of our authentic pizzas.",
    foods: [
        {name: "Franco",
         price : "₹400",
         Fdesc: "Base sauce , mozzarella cheese,smoked chicken, tomato"},
        {name: "Frances",
         price : "₹400",
         Fdesc: "Saute onions and asparagus in butter with cre'me frei'che"},
        {name: "Domenica",
         price : "₹400",
         Fdesc: "Base sauce, mozzrella cheese, chicken breast, pineapple"},
        {name: "Baradighi Dile~tto",
         price : "₹700",
         Fdesc: "base sauce with loaded chichen,prawns, salame fresh pepper"}
    ]
};

let SandwichMenu = {
    slug: "Sandwich",
    name: "Sandwich Menu",
    desc: "Experience the perfect combination of taste and freshness in our sandwiches! Deliciously satisfying",
    foods: [
        {name: "Chicken Grilled Sandwich",
         price : "₹280",
         Fdesc: "Tender meat with a delicious filling"},
        {name: "Baradighi Sahebi Sandwich",
         price : "₹320",
         Fdesc: "4 layers of loaded pan grilled chicken with garlice rosted mayo"},
        {name: "Tobasco Egg Sandwich ",
         price : "₹250",
         Fdesc: "Egg with green vegges wraped with tobasco mayo"},
        {name: "Grilled Cheese & Veg Sandwich",
         price : "₹200",
         Fdesc: "Fresh vegetables with cheese"},
         {name: "Chicken Wraps",
         price : "₹280",
         Fdesc: "Lip smacking roll of a flakytawa paratha stuffed with a favourful chicken filling"},
         {name: "Veg Wrraps",
         price : "₹200",
         Fdesc: "lip smacking roll of a flakytawa paratha stuffed with a favourful asorted veggies filling"}
         
    ]
};

let pastaMenu = {
    slug: "pasta",
    name: "Pasta Menu",
    desc: "Buon appetito! Delight in our authentic pasta dishes made with the freshest ingredients",
    foods: [
        {name: "Pasta With Tomato Sauce And Basil",
         price : "₹300",
         Fdesc: "Fresh tomato creamy sauce with basil"},
        {name: "Pasta With Bolognese Sauce (Veg/Non-Veg)",
         price : "₹350/ 400",
         Fdesc: "authentic Italian bolognese with fresh basil"},
         {name: "Pates A La Crème",
         price : "₹260",
         Fdesc: "Pasta with cream cheese sauce"}
    
         
    ]
};
let stimulateMenu = {
    slug: "stimulate",
    name: "Stimulate Menu",
    desc: "Satisfy your cravings with our tantalizing appetizers. Indulge in our mouth-watering appetizers and kickstart your taste buds",
    foods: [
        {name: "Tandoori Chicken",
         price : "₹300",
         Fdesc: "chicken marinated in yogurt and indian spices roast in tandoor"},
        {name: "Tandoori Prawn",
         price : "₹1000",
         Fdesc: "Prawn marinated in yogurt and indian spices roast in tandoor"},
         {name: "Tamarind Prawn/Chicken",
         price : "₹450",
         Fdesc: "Deep fried butter prawn/chicken topped with sweet n s our tamarind sauce onion carrot capsicum and shallot"},
         {name: "Bbq Chunky Chicken",
         price : "₹350/ 400",
         Fdesc: "Tender roasted chicken with marinated delicious BBQ sauce"},
         {name: "Chilly Chicken",
         price : "₹ 400",
         Fdesc: "Deep fried battered chicken fillets topped with chilly sauce"},
         {name: "Chilly Prawn",
         price : "₹400",
         Fdesc: "deep fried battered prawn topped with chilly sauce"},
         {name: "Fried Fish",
         price : "₹400",
         Fdesc: "FRish fillet harbs marinated crumb fried with tartar sauce"},
         {name: "Vegetable Choices Sauce",
         price : "₹ 400",
         Fdesc: "Fish fillet harbs marinated crumb fried with tartar sauce"},
         {name: "Chilly Paneer",
         price : "₹300",
         Fdesc: "Deep fried battered paneer with chilly sauce"},
         {name: "Akuri",
         price : "₹210",
         Fdesc: "Parsi style scrambled egg with chopped chilly, corriander, tomato, onion and black pepperblack pepper"},
         {name: "Chilly Babycorn",
         price : "₹200",
         Fdesc: "Crispy fried baby corn in a sweet and spicy thick chinese sauce"},
         {name: "Peanut Mashala",
         price : "₹180",
         Fdesc: "Crisp fried peanut with chopped onion,tomato,coriander, lemon juice"},
         {name: "Mashala Papad",
         price : "₹180",
         Fdesc: "Crisp fried papads topped with a masala filling of onions,tomatoes and spices "}
         
    ]
};
let RegionalMenu = {
    slug: "regional",
    name: "Regional Menu",
    desc: "Experience the culinary heritage of Bengal, Embrace the unique flavors of regional cuisines of Dooars",
    foods: [
        {name: "Mourola Macher Bati Chorchori",
         price : "₹250",
         Fdesc: "Fried fresh local river fishes are amalgamated with Onion,Potato and Eggplants with some spices"},
        {name: "Posto Boroli Crespy Fries",
         price : "₹210",
         Fdesc: "Fresh river fish fried marinated with indian spices cotaed with poppy seed"},
         {name: "Doi Ilish",
         price : "₹400",
         Fdesc: "Hilsa fish pieces are steamed in Yogurt-Mustard gravy with some green Chillies and Mustard oil"},
         {name: "Barishali Ilish Bhapa ",
         price : "₹380",
         Fdesc: "fresh hilsa is marinated in special mustard-coconut-yogurt paste and steamed"},
         {name: "Sorshe Ilish Macher Jhal",
         price : "₹ 400",
         Fdesc: "Hilsa Fish is cooked in a Mustard Gravy"},
         {name: "Desi Murgir Jhol",
         price : "₹300",
         Fdesc: "country chicken pieces cooked in a spicy, delicious, finger-licking good curry with large potato chunks"},
         {name: "Kosha Mangsho",
         price : "₹400",
         Fdesc: "mutton cooked in indian spices, mutton's flavor and moisture using slow cooking"},
         {name: "Chingri Macher Malaikari",
         price : "₹ 400",
         Fdesc: "prawns cooked in Creamy, coconuty, delicious gravy flavored with cinnamon and green cardamoms"},
         {name: "Fulkopi Diye Rui Macher Jhol",
         price : "₹380",
         Fdesc: "fish curry with Potatoes and cauliflower in indian spices"},
         {name: "Posto Bora",
         price : "₹250",
         Fdesc: "White poppy seeds are mixed with a little wheat flour, turmeric powder and salt and deep fried in mustard oil"},
         {name: "Doi Patol",
         price : "₹210",
         Fdesc: "Potol cooked in Yogurt-Mustard gravy with some green Chillies and Mustard oil"},
         {name: "Aloo Posto",
         price : "₹210",
         Fdesc: "potatoes cooked in a lightly spiced dreesed with poppy seeds"},
         {name: "Veg Chorchori",
         price : "₹200",
         Fdesc: "Mix vegetables cooked in mustard oil and light indian spices"},
         {name: "Sukto",
         price : "₹210",
         Fdesc: "stew of vegetables cooked in mustard oil and spiced with paanch phoron, ginger paste and chillies"}
         
    ]
};
let MocktailsMenu = {
    slug: "mocktails",
    name: "Mocktails Menu",
    desc: " Quench your thirst with our innovative mocktail creations. The perfect addition to any meal, or as a standalone treat",
    foods: [
        {name: "Virgin Mojito",
         price : "₹230",
         Fdesc: "take a shake and add mint leaves ,lemon wedges, sugar syrup and fresh lemon juice"},
        {name: "Sunrise Hous",
         price : "₹220",
         Fdesc: "equal amount of orange juice and non alcoholic base gently pure in the grenadine"},
        {name: "Pineapple Mint Punch",
         price : "₹230",
         Fdesc: "Well shake with pineapple juice, club soda, lime juice and fresh mint leaves"},
        {name: "Rose Heaven Garden",
         price : "₹250",
         Fdesc: "a little to the right on the edge of the garden's fresh rose flavoured punch with litchi juice apple juice, fresh cream and mint leaves"},
         {name: "Virgin Pinacolada",
         price : "₹250",
         Fdesc: "Blend together frozen ice cream , pineapple and coconut milk"},
         {name: "Sunset Delight",
         price : "₹220",
         Fdesc: "layer punch with orange juice and water melon juice"},
         {name: "Mango Mule",
         price : "₹230",
         Fdesc: "fresh flavour of mango juice, cucumber, honey, lemon  juice and mint leaves"},
         {name: "Orange Blossom",
         price : "₹230",
         Fdesc: "mouth burst flavour of orange juice ,apple juice ,ginger and ice cream"},
         {name: "Ginger Ice Tea",
         price : "₹200",}
         
    ]
};

food.push(kidsMenu);
food.push(saladMenu);
food.push(soupMenu);
food.push(PizzaMenu);
food.push(SandwichMenu);
food.push(pastaMenu);
food.push(stimulateMenu);
food.push(RegionalMenu);
food.push(MocktailsMenu);

router.get('/:id', function (req, res) {
    // search through foods to match slug with id in url
    let foods = food.find(function (food) {
        return food.slug === req.params.id;
    });
    res.render('diningMenu', {data : foods});
});

module.exports = router;
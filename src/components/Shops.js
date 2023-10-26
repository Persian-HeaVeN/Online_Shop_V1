import chiliImage from '../assets/chili.jpg'
import chiliIcon from '../assets/chili_icon.png'
import chiliMainImage from '../assets/chili_image_page.jpg'
import gookImage from '../assets/gook.jpg'
import gookIcon from '../assets/gook_icon.png'
import gookMainImage from '../assets/gook_image_page.jpg'
import babataherImage from '../assets/babataher.jpg'
import babataherIcon from '../assets/babataher_icon.png'
import babataherMainImage from '../assets/babataher_image_page.jpg'
import felfeliImage from '../assets/felfeli.jpg'
import felfeliIcon from '../assets/felfeli_icon.png'
import felfeliMainImage from '../assets/felfeli_image_page.jpg'

import pizzaKrakow from '../assets/pizza_krakow.jpg'
import pizzaRoastbeef from '../assets/Pizza_Roastbeef.jpg'
import pizzaNewmexico from '../assets/Pizza_NewMexico.jpg'
import pizzaVegatable from '../assets/Pizza_Vegetable.jpg'
import pizzaMeatmushroom from '../assets/Pizza_Meatmushroom.jpg'
import pizzaPepperoni from '../assets/Pizza_Pepperoni.jpg'

import burgerCheese from '../assets/Burger_Cheese.jpg'
import burgerClassic from '../assets/Burger_Classic.jpg'

import FriedChicken from '../assets/FriedChicken.jpg'
import FriedFillet from '../assets/Friedfillet.jpg'
import FriedWings from '../assets/friedwings.jpg'

import cocaCola from '../assets/cocaCola.png'
import cocaColaFamily from '../assets/cocaColaFamily.png'
import pepsi from '../assets/pepsi.png'
import pepsiFamily from '../assets/pepsiFamily.png'


export const shops = [

        {
            Name : "Babataher",
        
            Images: {
                Little: babataherImage,
                Main: babataherMainImage,
                Icon: babataherIcon,
            },

            Time: [30, 90],

            Location: "Naharkhoran",

            Stars : 4.5,

            New : true,

            Ready : true,

            Shipby : "Car",

            MenuTypes : ["Pizza", "Burger", "Fired", "Drink"],

        Menu : [
            {Type: "Pizza", Name: "Pizza Kraków", Description: "Cheese krakoff sausage, meat and chicken ham", Image:pizzaKrakow, Price: 210000},
            {Type: "Pizza", Name: "Pizza Roastbeef", Description: "Sliced ​​beef, mushroom, bell pepper", Image:pizzaRoastbeef, Price: 200000},
            {Type: "Pizza", Name: "Pizza New mexico", Description: "Roast beef, pepperoni, ham, cheese, hot pepper", Image:pizzaNewmexico, Price: 195000},
            {Type: "Pizza", Name: "Pizza Vegatable", Description: "Grilled eggplant, grilled pumpkin, onion, tomato", Image:pizzaVegatable, Price: 135000},
            {Type: "Pizza", Name: "Pizza Meat and mushroom", Description: "Minced meat, mushrooms, bell pepper", Image:pizzaMeatmushroom, Price: 185000},
            {Type: "Pizza", Name: "Pizza Pepperoni", Description: "Meat ham, chicken ham, pepperoni, mushroom", Image:pizzaPepperoni, Price: 170000},

            {Type: "Burger", Name: "CheeseBurger", Description: "150 gram burger, Gouda cheese, tomato, lettuce", Image:burgerCheese, Price: 130000},
            {Type: "Burger", Name: "CheeseBurger", Description: "150 gram burger, tomato, pickled cucumber, lettuce", Image:burgerClassic, Price: 120000},
            
            {Type: "Fired", Name: "Fried Chicken (2 pieces)", Description: "Fired chicken, potatoes, bread slices", Image:FriedChicken, Price: 155000},
            {Type: "Fired", Name: "Fried Chicken (3 pieces)", Description: "Fired chicken, potatoes, bread slices", Image:FriedChicken, Price: 195000},
            {Type: "Fired", Name: "Fillet (4 pieces)", Description: "Fillet, potatoes, bread slices", Image:FriedFillet, Price: 180000},
            {Type: "Fired", Name: "Fried Wings", Description: "Fried Wings, potatoes, bread slices", Image:FriedWings, Price: 145000},

            {Type: "Drink", Name: "Coca Cola", Description: "", Image:cocaCola, Price: 19000},
            {Type: "Drink", Name: "Coca Cola", Description: "", Image:cocaColaFamily, Price: 30000},
            {Type: "Drink", Name: "Pepsi", Description: "", Image:pepsi, Price: 19000},
            {Type: "Drink", Name: "Pepsi Family", Description: "", Image:pepsiFamily, Price: 30000},
        ],

    },

    {
        Name : "Gook",

        Images: {
            Little: gookImage,
            Main: gookMainImage,
            Icon: gookIcon,
        },

        Time: [40, 70],

        Location: "Dokhaniyat, Sayad",

        Stars : 4.4,

        New : true,

        Ready : true,

        Shipby : "Motorcycle",

        MenuTypes : ["Pizza", "Burger", "Fired", "Drink"],

        Menu : [
            {Type: "Pizza", Name: "Pizza Roastbeef", Description: "Sliced ​​beef, mushroom, bell pepper", Image:pizzaRoastbeef, Price: 200000},
            {Type: "Pizza", Name: "Pizza New mexico", Description: "Roast beef, pepperoni, ham, cheese, hot pepper", Image:pizzaNewmexico, Price: 195000},
            {Type: "Pizza", Name: "Pizza Vegatable", Description: "Grilled eggplant, grilled pumpkin, onion, tomato", Image:pizzaVegatable, Price: 135000},
            {Type: "Pizza", Name: "Pizza Meat and mushroom", Description: "Minced meat, mushrooms, bell pepper", Image:pizzaMeatmushroom, Price: 185000},
            {Type: "Pizza", Name: "Pizza Pepperoni", Description: "Meat ham, chicken ham, pepperoni, mushroom", Image:pizzaPepperoni, Price: 170000},

            {Type: "Burger", Name: "CheeseBurger", Description: "150 gram burger, Gouda cheese, tomato, lettuce", Image:burgerCheese, Price: 130000},
            {Type: "Burger", Name: "CheeseBurger", Description: "150 gram burger, tomato, pickled cucumber, lettuce", Image:burgerClassic, Price: 120000},
            
            {Type: "Fired", Name: "Fried Chicken (2 pieces)", Description: "Fired chicken, potatoes, bread slices", Image:FriedChicken, Price: 155000},
            {Type: "Fired", Name: "Fried Chicken (3 pieces)", Description: "Fired chicken, potatoes, bread slices", Image:FriedChicken, Price: 195000},
            {Type: "Fired", Name: "Fillet (4 pieces)", Description: "Fillet, potatoes, bread slices", Image:FriedFillet, Price: 180000},

            {Type: "Drink", Name: "Coca Cola", Description: "", Image:cocaCola, Price: 19000},
            {Type: "Drink", Name: "Coca Cola", Description: "", Image:cocaColaFamily, Price: 30000},
            {Type: "Drink", Name: "Pepsi", Description: "", Image:pepsi, Price: 19000},
            {Type: "Drink", Name: "Pepsi Family", Description: "", Image:pepsiFamily, Price: 30000},
        ],

    },

    {
        Name : "Felfeli",

        Images: {
            Little: felfeliImage,
            Main: felfeliMainImage,
            Icon: felfeliIcon,
        },

        Time: [30, 60],

        Location: "Golshahr",

        Stars : 4.2,

        New : false,

        Ready : true,

        Shipby : "Motorcycle",

        MenuTypes : ["Pizza", "Burger", "Fired", "Drink"],

        Menu : [
            {Type: "Pizza", Name: "Pizza Kraków", Description: "Cheese krakoff sausage, meat and chicken ham", Image:pizzaKrakow, Price: 210000},
            {Type: "Pizza", Name: "Pizza Roastbeef", Description: "Sliced ​​beef, mushroom, bell pepper", Image:pizzaRoastbeef, Price: 200000},
            {Type: "Pizza", Name: "Pizza New mexico", Description: "Roast beef, pepperoni, ham, cheese, hot pepper", Image:pizzaNewmexico, Price: 195000},
            {Type: "Pizza", Name: "Pizza Vegatable", Description: "Grilled eggplant, grilled pumpkin, onion, tomato", Image:pizzaVegatable, Price: 135000},
            {Type: "Pizza", Name: "Pizza Meat and mushroom", Description: "Minced meat, mushrooms, bell pepper", Image:pizzaMeatmushroom, Price: 185000},
            {Type: "Pizza", Name: "Pizza Pepperoni", Description: "Meat ham, chicken ham, pepperoni, mushroom", Image:pizzaPepperoni, Price: 170000},

            {Type: "Burger", Name: "CheeseBurger", Description: "150 gram burger, Gouda cheese, tomato, lettuce", Image:burgerCheese, Price: 130000},
            {Type: "Burger", Name: "CheeseBurger", Description: "150 gram burger, tomato, pickled cucumber, lettuce", Image:burgerClassic, Price: 120000},
            
            {Type: "Fired", Name: "Fried Chicken (2 pieces)", Description: "Fired chicken, potatoes, bread slices", Image:FriedChicken, Price: 155000},
            {Type: "Fired", Name: "Fried Chicken (3 pieces)", Description: "Fired chicken, potatoes, bread slices", Image:FriedChicken, Price: 195000},
            {Type: "Fired", Name: "Fillet (4 pieces)", Description: "Fillet, potatoes, bread slices", Image:FriedFillet, Price: 180000},
            {Type: "Fired", Name: "Fried Wings", Description: "Fried Wings, potatoes, bread slices", Image:FriedWings, Price: 145000},

            {Type: "Drink", Name: "Coca Cola", Description: "", Image:cocaCola, Price: 19000},
            {Type: "Drink", Name: "Coca Cola", Description: "", Image:cocaColaFamily, Price: 30000},
            {Type: "Drink", Name: "Pepsi", Description: "", Image:pepsi, Price: 19000},
            {Type: "Drink", Name: "Pepsi Family", Description: "", Image:pepsiFamily, Price: 30000},
        ],

    },

    {
        Name : "Chili",

        Images: {
            Little: chiliImage,
            Main: chiliMainImage,
            Icon: chiliIcon,
        },

        Time: [30, 50],

        Location: "Naharkhoran",

        Stars : 4.5,

        New : false,

        Ready : true,

        Shipby : "Motorcycle",

        MenuTypes : ["Pizza", "Burger", "Fired", "Drink"],

        Menu : [
            {Type: "Pizza", Name: "Pizza Kraków", Description: "Cheese krakoff sausage, meat and chicken ham", Image:pizzaKrakow, Price: 210000},
            {Type: "Pizza", Name: "Pizza Roastbeef", Description: "Sliced ​​beef, mushroom, bell pepper", Image:pizzaRoastbeef, Price: 200000},
            {Type: "Pizza", Name: "Pizza New mexico", Description: "Roast beef, pepperoni, ham, cheese, hot pepper", Image:pizzaNewmexico, Price: 195000},
            {Type: "Pizza", Name: "Pizza Vegatable", Description: "Grilled eggplant, grilled pumpkin, onion, tomato", Image:pizzaVegatable, Price: 135000},
            {Type: "Pizza", Name: "Pizza Meat and mushroom", Description: "Minced meat, mushrooms, bell pepper", Image:pizzaMeatmushroom, Price: 185000},
            {Type: "Pizza", Name: "Pizza Pepperoni", Description: "Meat ham, chicken ham, pepperoni, mushroom", Image:pizzaPepperoni, Price: 170000},

            {Type: "Burger", Name: "CheeseBurger", Description: "150 gram burger, Gouda cheese, tomato, lettuce", Image:burgerCheese, Price: 130000},
            {Type: "Burger", Name: "CheeseBurger", Description: "150 gram burger, tomato, pickled cucumber, lettuce", Image:burgerClassic, Price: 120000},
            
            {Type: "Fired", Name: "Fried Chicken (2 pieces)", Description: "Fired chicken, potatoes, bread slices", Image:FriedChicken, Price: 155000},
            {Type: "Fired", Name: "Fried Chicken (3 pieces)", Description: "Fired chicken, potatoes, bread slices", Image:FriedChicken, Price: 195000},
            {Type: "Fired", Name: "Fillet (4 pieces)", Description: "Fillet, potatoes, bread slices", Image:FriedFillet, Price: 180000},
            {Type: "Fired", Name: "Fried Wings", Description: "Fried Wings, potatoes, bread slices", Image:FriedWings, Price: 145000},

            {Type: "Drink", Name: "Coca Cola", Description: "", Image:cocaCola, Price: 19000},
            {Type: "Drink", Name: "Coca Cola", Description: "", Image:cocaColaFamily, Price: 30000},
            {Type: "Drink", Name: "Pepsi", Description: "", Image:pepsi, Price: 19000},
            {Type: "Drink", Name: "Pepsi Family", Description: "", Image:pepsiFamily, Price: 30000},
        ],

    },

    {
        Name : "Jigar Tala",
    
        Images: {
            Little: babataherImage,
            Main: babataherMainImage,
            Icon: babataherIcon,
        },

        Time: [30, 90],

        Location: "Naharkhoran",

        Stars : 4.5,

        New : true,

        Ready : true,

        Shipby : "Car",

        MenuTypes : ["Pizza", "Burger", "Fired", "Drink"],

    Menu : [
        {Type: "Pizza", Name: "Pizza Kraków", Description: "Cheese krakoff sausage, meat and chicken ham", Image:pizzaKrakow, Price: 210000},
        {Type: "Pizza", Name: "Pizza Roastbeef", Description: "Sliced ​​beef, mushroom, bell pepper", Image:pizzaRoastbeef, Price: 200000},
        {Type: "Pizza", Name: "Pizza New mexico", Description: "Roast beef, pepperoni, ham, cheese, hot pepper", Image:pizzaNewmexico, Price: 195000},
        {Type: "Pizza", Name: "Pizza Vegatable", Description: "Grilled eggplant, grilled pumpkin, onion, tomato", Image:pizzaVegatable, Price: 135000},
        {Type: "Pizza", Name: "Pizza Meat and mushroom", Description: "Minced meat, mushrooms, bell pepper", Image:pizzaMeatmushroom, Price: 185000},
        {Type: "Pizza", Name: "Pizza Pepperoni", Description: "Meat ham, chicken ham, pepperoni, mushroom", Image:pizzaPepperoni, Price: 170000},

        {Type: "Burger", Name: "CheeseBurger", Description: "150 gram burger, Gouda cheese, tomato, lettuce", Image:burgerCheese, Price: 130000},
        {Type: "Burger", Name: "CheeseBurger", Description: "150 gram burger, tomato, pickled cucumber, lettuce", Image:burgerClassic, Price: 120000},
        
        {Type: "Fired", Name: "Fried Chicken (2 pieces)", Description: "Fired chicken, potatoes, bread slices", Image:FriedChicken, Price: 155000},
        {Type: "Fired", Name: "Fried Chicken (3 pieces)", Description: "Fired chicken, potatoes, bread slices", Image:FriedChicken, Price: 195000},
        {Type: "Fired", Name: "Fillet (4 pieces)", Description: "Fillet, potatoes, bread slices", Image:FriedFillet, Price: 180000},
        {Type: "Fired", Name: "Fried Wings", Description: "Fried Wings, potatoes, bread slices", Image:FriedWings, Price: 145000},

        {Type: "Drink", Name: "Coca Cola", Description: "", Image:cocaCola, Price: 19000},
        {Type: "Drink", Name: "Coca Cola", Description: "", Image:cocaColaFamily, Price: 30000},
        {Type: "Drink", Name: "Pepsi", Description: "", Image:pepsi, Price: 19000},
        {Type: "Drink", Name: "Pepsi Family", Description: "", Image:pepsiFamily, Price: 30000},
    ],

},

{
    Name : "Asghar Bala",

    Images: {
        Little: gookImage,
        Main: gookMainImage,
        Icon: gookIcon,
    },

    Time: [40, 70],

    Location: "Dokhaniyat, Sayad",

    Stars : 4.4,

    New : true,

    Ready : true,

    Shipby : "Motorcycle",

    MenuTypes : ["Pizza", "Burger", "Fired", "Drink"],

    Menu : [
        {Type: "Pizza", Name: "Pizza Kraków", Description: "Cheese krakoff sausage, meat and chicken ham", Image:pizzaKrakow, Price: 210000},
        {Type: "Pizza", Name: "Pizza Roastbeef", Description: "Sliced ​​beef, mushroom, bell pepper", Image:pizzaRoastbeef, Price: 200000},
        {Type: "Pizza", Name: "Pizza New mexico", Description: "Roast beef, pepperoni, ham, cheese, hot pepper", Image:pizzaNewmexico, Price: 195000},
        {Type: "Pizza", Name: "Pizza Vegatable", Description: "Grilled eggplant, grilled pumpkin, onion, tomato", Image:pizzaVegatable, Price: 135000},
        {Type: "Pizza", Name: "Pizza Meat and mushroom", Description: "Minced meat, mushrooms, bell pepper", Image:pizzaMeatmushroom, Price: 185000},
        {Type: "Pizza", Name: "Pizza Pepperoni", Description: "Meat ham, chicken ham, pepperoni, mushroom", Image:pizzaPepperoni, Price: 170000},

        {Type: "Burger", Name: "CheeseBurger", Description: "150 gram burger, Gouda cheese, tomato, lettuce", Image:burgerCheese, Price: 130000},
        {Type: "Burger", Name: "CheeseBurger", Description: "150 gram burger, tomato, pickled cucumber, lettuce", Image:burgerClassic, Price: 120000},
        
        {Type: "Fired", Name: "Fried Chicken (2 pieces)", Description: "Fired chicken, potatoes, bread slices", Image:FriedChicken, Price: 155000},
        {Type: "Fired", Name: "Fried Chicken (3 pieces)", Description: "Fired chicken, potatoes, bread slices", Image:FriedChicken, Price: 195000},
        {Type: "Fired", Name: "Fillet (4 pieces)", Description: "Fillet, potatoes, bread slices", Image:FriedFillet, Price: 180000},
        {Type: "Fired", Name: "Fried Wings", Description: "Fried Wings, potatoes, bread slices", Image:FriedWings, Price: 145000},

        {Type: "Drink", Name: "Coca Cola", Description: "", Image:cocaCola, Price: 19000},
        {Type: "Drink", Name: "Coca Cola", Description: "", Image:cocaColaFamily, Price: 30000},
        {Type: "Drink", Name: "Pepsi", Description: "", Image:pepsi, Price: 19000},
        {Type: "Drink", Name: "Pepsi Family", Description: "", Image:pepsiFamily, Price: 30000},
    ],

},

{
    Name : "PP",

    Images: {
        Little: felfeliImage,
        Main: felfeliMainImage,
        Icon: felfeliIcon,
    },

    Time: [30, 60],

    Location: "Golshahr",

    Stars : 4.2,

    New : false,

    Ready : true,

    Shipby : "Motorcycle",

    MenuTypes : ["Pizza", "Burger", "Fired", "Drink"],

    Menu : [
        {Type: "Pizza", Name: "Pizza Kraków", Description: "Cheese krakoff sausage, meat and chicken ham", Image:pizzaKrakow, Price: 210000},
        {Type: "Pizza", Name: "Pizza Roastbeef", Description: "Sliced ​​beef, mushroom, bell pepper", Image:pizzaRoastbeef, Price: 200000},
        {Type: "Pizza", Name: "Pizza New mexico", Description: "Roast beef, pepperoni, ham, cheese, hot pepper", Image:pizzaNewmexico, Price: 195000},
        {Type: "Pizza", Name: "Pizza Vegatable", Description: "Grilled eggplant, grilled pumpkin, onion, tomato", Image:pizzaVegatable, Price: 135000},
        {Type: "Pizza", Name: "Pizza Meat and mushroom", Description: "Minced meat, mushrooms, bell pepper", Image:pizzaMeatmushroom, Price: 185000},
        {Type: "Pizza", Name: "Pizza Pepperoni", Description: "Meat ham, chicken ham, pepperoni, mushroom", Image:pizzaPepperoni, Price: 170000},

        {Type: "Burger", Name: "CheeseBurger", Description: "150 gram burger, Gouda cheese, tomato, lettuce", Image:burgerCheese, Price: 130000},
        {Type: "Burger", Name: "CheeseBurger", Description: "150 gram burger, tomato, pickled cucumber, lettuce", Image:burgerClassic, Price: 120000},
        
        {Type: "Fired", Name: "Fried Chicken (2 pieces)", Description: "Fired chicken, potatoes, bread slices", Image:FriedChicken, Price: 155000},
        {Type: "Fired", Name: "Fried Chicken (3 pieces)", Description: "Fired chicken, potatoes, bread slices", Image:FriedChicken, Price: 195000},
        {Type: "Fired", Name: "Fillet (4 pieces)", Description: "Fillet, potatoes, bread slices", Image:FriedFillet, Price: 180000},
        {Type: "Fired", Name: "Fried Wings", Description: "Fried Wings, potatoes, bread slices", Image:FriedWings, Price: 145000},

        {Type: "Drink", Name: "Coca Cola", Description: "", Image:cocaCola, Price: 19000},
        {Type: "Drink", Name: "Coca Cola", Description: "", Image:cocaColaFamily, Price: 30000},
        {Type: "Drink", Name: "Pepsi", Description: "", Image:pepsi, Price: 19000},
        {Type: "Drink", Name: "Pepsi Family", Description: "", Image:pepsiFamily, Price: 30000},
    ],

},

{
    Name : "DooDoo",

    Images: {
        Little: chiliImage,
        Main: chiliMainImage,
        Icon: chiliIcon,
    },

    Time: [30, 50],

    Location: "Naharkhoran",

    Stars : 4.5,

    New : false,

    Ready : true,

    Shipby : "Motorcycle",

    MenuTypes : ["Pizza", "Burger", "Fired", "Drink"],

    Menu : [
        {Type: "Pizza", Name: "Pizza Kraków", Description: "Cheese krakoff sausage, meat and chicken ham", Image:pizzaKrakow, Price: 210000},
        {Type: "Pizza", Name: "Pizza Roastbeef", Description: "Sliced ​​beef, mushroom, bell pepper", Image:pizzaRoastbeef, Price: 200000},
        {Type: "Pizza", Name: "Pizza New mexico", Description: "Roast beef, pepperoni, ham, cheese, hot pepper", Image:pizzaNewmexico, Price: 195000},
        {Type: "Pizza", Name: "Pizza Vegatable", Description: "Grilled eggplant, grilled pumpkin, onion, tomato", Image:pizzaVegatable, Price: 135000},
        {Type: "Pizza", Name: "Pizza Meat and mushroom", Description: "Minced meat, mushrooms, bell pepper", Image:pizzaMeatmushroom, Price: 185000},
        {Type: "Pizza", Name: "Pizza Pepperoni", Description: "Meat ham, chicken ham, pepperoni, mushroom", Image:pizzaPepperoni, Price: 170000},

        {Type: "Burger", Name: "CheeseBurger", Description: "150 gram burger, Gouda cheese, tomato, lettuce", Image:burgerCheese, Price: 130000},
        {Type: "Burger", Name: "CheeseBurger", Description: "150 gram burger, tomato, pickled cucumber, lettuce", Image:burgerClassic, Price: 120000},
        
        {Type: "Fired", Name: "Fried Chicken (2 pieces)", Description: "Fired chicken, potatoes, bread slices", Image:FriedChicken, Price: 155000},
        {Type: "Fired", Name: "Fried Chicken (3 pieces)", Description: "Fired chicken, potatoes, bread slices", Image:FriedChicken, Price: 195000},
        {Type: "Fired", Name: "Fillet (4 pieces)", Description: "Fillet, potatoes, bread slices", Image:FriedFillet, Price: 180000},
        {Type: "Fired", Name: "Fried Wings", Description: "Fried Wings, potatoes, bread slices", Image:FriedWings, Price: 145000},

        {Type: "Drink", Name: "Coca Cola", Description: "", Image:cocaCola, Price: 19000},
        {Type: "Drink", Name: "Coca Cola", Description: "", Image:cocaColaFamily, Price: 30000},
        {Type: "Drink", Name: "Pepsi", Description: "", Image:pepsi, Price: 19000},
        {Type: "Drink", Name: "Pepsi Family", Description: "", Image:pepsiFamily, Price: 30000},
    ],

},
        
]

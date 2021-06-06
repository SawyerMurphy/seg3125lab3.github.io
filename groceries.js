// This file has originally been created by Caroline B. and edited by Sawyer M.
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
    {
        name: "Peanut Butter ($1.99)",
        nutAllergy: true,
        lactoseIntolerance: false,
        organic: false,
        price: 1.99
    },
	{
        name: "Bread ($1.99)",
        nutAllergy: true,
        lactoseIntolerance: false,
        organic: false,
        price: 1.99
    },
    {
        name: "Broccoli ($2.99)",
        nutAllergy: false,
        lactoseIntolerance: false,
        organic: true,
        price: 2.99
    },
    {
        name: "Butter ($2.99)",
        nutAllergy: false,
        lactoseIntolerance: true,
        organic: false,
        price: 2.99
    },
    {
        name: "Strawberries ($3.99)",
        nutAllergy: false,
        lactoseIntolerance: false,
        organic: true,
        price: 3.99
    },
    {
        name: "Green Peppers ($3.99)",
        nutAllergy: false,
        lactoseIntolerance: false,
        organic: true,
        price: 3.99
    },
    {
        name: "Hot Sauce ($3.99)",
        nutAllergy: false,
        lactoseIntolerance: true,
        organic: false,
        price: 3.99
    },
    {
        name: "Pomegranate ($4.99)",
        nutAllergy: false,
        lactoseIntolerance: false,
        organic: true,
        price: 4.99
    },
    {
        name: "Chicken ($5.99)",
        nutAllergy: false,
        lactoseIntolerance: false,
        organic: true,
        price: 5.99
    },
    {
        name: "Salmon ($6.99)",
        nutAllergy: false,
        lactoseIntolerance: false,
        organic: true,
        price: 6.99
    }
] ;


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	
    let product_names = [] ;
	
    if(restriction == "NutAllergy") {
        for(let i = 0 ; i < prods.length ; i++) {
            if(prods[i].nutAllergy == false)  {
                product_names.push(prods[i].name) ;
            }
        }
    } else if(restriction == "LactoseInt") {
        for(let j = 0 ; j < prods.length ; j++) {
            if(prods[j].lactoseIntolerance == false)  {
                product_names.push(prods[j].name) ;
            }
        }
    } else if(restriction == "Organic") {
        for(let k = 0 ; k < prods.length ; k++) {
            if(prods[k].organic == true)  {
                product_names.push(prods[k].name) ;
            }
        }
    }    




    /*for(let i = 0 ; i < prods.length ; i++) {
        product_names.push(prods[i].name) ;
    }
    
    for(let j = 0 ; j < prods.length ; j++) {
        if((restriction == "NutAllergy") && (prods[j].nutAllergy == false)) {
			product_names.pop(prods[j].name) ;
		} else if ((restriction == "LactoseInt") && (prods[j].lactoseIntolerance == false)) {
		    product_names.pop(prods[j].name) ;
		} else if ((restriction == "Organic") && (prods[j].organic == true)) {
		    product_names.pop(prods[j].name) ;
        }
    }*/
	return product_names ;
}

function getProductPrice(prod) {
    return(prod.price) ;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0 ;
	for (let i = 0 ; i < products.length ; i +=1 ) {
		if (chosenProducts.indexOf(products[i].name) > -1) {
			totalPrice += products[i].price ;
		}
	}
	return totalPrice ;
}
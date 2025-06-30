const products = {
    1 : {
        name: "オリジナルブレンド200g",
        price: 500,
    },
    2 : {
        name: "オリジナルブレンド500g",
        price: 900
    },
    3 : {
        name: "スペシャルブレンド200g",
        price: 700,
    },
    4 : {
        name: "オリジナルブレンド200g",
        price: 1200,
    }
}


// store a list of user items in (id, quantity) pairs
let cart = new Map()

// DOM properties

let add = () => {
    let item = parseInt(document.getElementById("product").value)
    let quantity = parseInt(document.getElementById("number").value)
    
    cart.set(item, {
        name: products[item]["name"], 
        price: products[item]["price"],
        amount: quantity * products[item]["price"], 
        quantity: quantity
    })
    product = cart.get(item)
    alert(`Added: \n\r Item: ${product["name"]} \n\r Quantity Ordered: ${product["quantity"]} \n\r Price: ${product["price"]}  \n\r Amount: ${product["amount"]}`)
}


let calc = () => {
    let total = 0;
    let display ="";

    cart.forEach((info) => {
        let amount = info["amount"]
        total = total + amount
        display += `${info["name"]} \t\t ${info["quantity"]} \t\t ${info["price"]} \t ${info["amount"]} \n\r`
        
    })
    // Shipping fee is 200 is total is less than 2000 and 250 if it is 2000 or more
    let shippingFee;
    if(total == 0 || total > 3000){
        shippingFee = 0
    }else if( total < 2000){
        shippingFee = 200
    }else{
        shippingFee = 250
    }

    display += `Subtotal: ${total} \n\r`
    display +=`Shipping Fee: ${shippingFee} \n\r`
    total = total + shippingFee
    display +=`Total: ${total} \n\r`
    
    alert(display)
}
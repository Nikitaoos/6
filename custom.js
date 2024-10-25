function updatePrice() {
    let s = document.getElementsByName("type");
    let select = s[0];
    let price = 0;
    let prices = {
        types: [140000, 105000, 135000],
        options: {
            2: 15000,
        },
        checkboxes: {
            1: 2500,
            2: 7000,
            3: 500,
        }
    };
    price = prices.types[select.value - 1];
    let radioDiv = document.getElementById("radios");
    radioDiv.style.display = (select.value == "2" ? "block" : "none");
    let radios = document.getElementsByName("options");
    radios.forEach(function(radio) {
        if (radio.checked) {
            let optionPrice = prices.options[radio.value];
            if (optionPrice !== undefined) {
                price += optionPrice;
            }
        }
    });
    let checkDiv = document.getElementById("checkboxes");
    checkDiv.style.display = (select.value == "1" || select.value == "2" ? "none" : "block");
    let checkboxes = document.querySelectorAll("#checkboxes input");
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            let cPrice = prices.checkboxes[checkbox.name];
            price += cPrice;
        }
    });
    let count = document.getElementById("count").value;
    if(parseInt(count) < 0) {
        let Price = document.getElementById("price");
        Price.innerHTML = "Данные введены неправильно";
    }
    else {
        price *= count;
        if(select.value != "2") 
        {  
            if(select.value == "1") {
                price = prices.types[0] * count;
            }
        }
        else if(price/count-prices.types[select.value - 1] == 2500 || price/count-prices.types[select.value - 1] == 1750) {
            price -= 2500 * count;
            }
            else if(price/count-prices.types[select.value - 1] == 7000 || price/count-prices.types[select.value - 1] == 22000) {
                price -= 7000 * count;
            }
            else if(price/count-prices.types[select.value - 1] == 500 || price/count-prices.types[select.value - 1] == 15500) {
                price -= 500 * count;
            }
            else if(price/count-prices.types[select.value - 1] == 9500 || price/count-prices.types[select.value - 1] == 24500) {
                price -= 9500 * count;
            }
            else if(price/count-prices.types[select.value - 1] == 3000 || price/count-prices.types[select.value - 1] == 18000) {
                price -= 3000 * count;
            }
            else if(price/count-prices.types[select.value - 1] == 7500 || price/count-prices.types[select.value - 1] == 22500) {
                price -= 7500 * count;
            }
            else if(price/count-prices.types[select.value - 1] == 10000 || price/count-prices.types[select.value - 1] == 25000) {
                price -= 10000 * count;
            }
        let Price = document.getElementById("price");
        Price.innerHTML = price + " рублей";
    }
}
window.addEventListener('DOMContentLoaded', function (event) {
    let radioDiv = document.getElementById("radios");
    radioDiv.style.display = "none";
    let s = document.getElementsByName("type");
    let select = s[0];
    select.addEventListener("change", function(event) {
        updatePrice();
    });
    let count = document.getElementById("count");
    count.addEventListener("change", function(event) {
        updatePrice();
    });
    let radios = document.getElementsByName("options");
    radios.forEach(function(radio) {
        radio.addEventListener("change", function(event) {
            updatePrice();
        });
    });
    let checkboxes = document.querySelectorAll("#checkboxes input");
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener("change", function(event) {
            updatePrice();
        });
    });
    updatePrice();
});

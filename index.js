let mylist = document.getElementById("mylist");

function setAllFruits(fruits) {
    let lis = "";

    fruits.forEach((fruit, index) => {
        lis += `
            <li>${fruit.name} -- $${fruit.price} per ${fruit.unit}
                <button class="btn__rmv" onclick="removeFruit(fruits_list, ${index})">Remove</button>
            </li>
        `;
    });

    mylist.innerHTML = lis;
}

setAllFruits(fruits_list);

function addFruit() {
    let fruit_name = document.getElementById("fruit_name");
    let fruit_price = document.getElementById("fruit_price");
    let fruit_unit_value = document.getElementById("fruit_unit").value;
    let fruit_name_value = fruit_name.value.trim();
    let fruit_price_value = fruit_price.value.trim();

    fruit_name_value = toCapitalCase(fruit_name_value);
    fruit_price_value = parseFloat(fruit_price_value);

    if (
        fruit_name_value == "" ||
        fruit_price_value == "" ||
        fruits_list.findIndex((fruit) => fruit.name === fruit_name_value) != -1
    ) {
        return;
    }

    fruits_list.push({
        name: fruit_name_value,
        price: fruit_price_value,
        unit: fruit_unit_value,
    });

    setAllFruits(fruits_list);
    fruit_name.value = "";
    fruit_price.value = "";
}

function removeFruit(fruits, id) {
    fruits.splice(id, 1);
    setAllFruits(fruits_list);
}

function filterFruits() {
    const filter_type = document.getElementById("fruit_filter");
    let div_custom_filter = document.getElementById("custom_filter");
    if (filter_type.value != "custom") {
        let fruits_filtered = fruits_list.filter(
            (fruit) =>
                classify_fruit(fruit) == filter_type.value ||
                filter_type.value == "all"
        );
        setAllFruits(fruits_filtered);
        div_custom_filter.classList.add("hide");
    } else {
        
        div_custom_filter.classList.remove("hide");
    }
}

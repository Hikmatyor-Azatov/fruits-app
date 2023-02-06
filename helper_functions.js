function toCapitalCase(item) {
    item = item.trim();

    let firstLetter = item[0].toUpperCase();
    let otherLetters = item.slice(1).toLowerCase();

    return firstLetter + otherLetters;
}

function classify_fruit(fruit) {
    if (fruit.price <= 10) {
        return "cheap";
    }
    return "expensive";
}

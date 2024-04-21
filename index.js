let cats = [`Milo`, `Otis`, `Garfield`];

function destructivelyAppendCat(Twinkles) {
    cats.push(Twinkles);
}

function destructivelyPrependCat(Twizzler) {
    cats.unshift(Twizzler);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(Zoey) {
    return [...cats, Zoey];
}

function prependCat(Bella) {
    return [Bella, ...cats];
}

function removeLastCat() {
    return cats.slice(0, -1);
}

function removeFirstCat() {
    return cats.slice(1);
}

console.log("Display the numbers from 1 to 20.");
for (let counter = 1; counter <= 20; counter++) {
    console.log(counter);
}

console.log("Display the even numbers from 1 to 20.");
let counter = 1;
while (counter <= 20) {
    if (counter % 2 == 0) {
        console.log(counter)
        counter++
    } else {
        counter++

    }

}

console.log("Display the odd numbers from 1 to 20.")
counter = 1;
while (counter <= 20) {
    if (counter % 2 == 0) {
        console.log(counter - 1)
        counter++
    } else {
        counter++
    }
}

console.log("Display the multiples of 5 up to 100")
counter = 5
while (counter <= 100) {
    if (counter % 5 == 1) {
        console.log(counter - 1)
        counter++
    } else {
        counter++
    }
}

console.log("Display the square numbers up to 100")
counter = 1
while (counter <= 10) {


    console.log(counter * counter)
    counter++

}

console.log("Display the numbers counting backwards from 20 to 1")
counter = 20
while (counter >= 1) {

    console.log(counter)
    counter--
}

console.log("Display the even numbers counting backwards from 20.")
counter = 20
while (counter >= 1) {
    if (counter % 2 == 0) {
        console.log(counter)
        counter--
    } else {
        counter--
    }

}

console.log("Display the odd numbers from 20 to 1, counting backwards.")
counter = 20
while (counter >= 1) {
    if (counter % 2 == 0) {
        console.log(counter - 1)
        counter--
    } else {
        counter--
    }
}

console.log("Display the multiples of 5, counting down from 100.")
counter = 100
while (counter >= 5) {

    if (counter % 5 == 1) {
        console.log(counter - 1)
        counter--
    } else {
        counter--
    }

}

console.log("Display the square numbers, counting down from 100.")
counter = 10
while (counter >= 1) {

    console.log(counter * counter)
    counter--
}
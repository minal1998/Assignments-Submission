let cards = [
    {
        image: "https://image.freepik.com/free-vector/beautiful-hibiscus-flower-buds-leaves-background-exotic-tropical-plant-realistic_87521-1776.jpg",
        value: 1,
        status: "closed"
    },
    {
        image: "https://image.freepik.com/free-vector/beautiful-hibiscus-flower-buds-leaves-background-exotic-tropical-plant-realistic_87521-1776.jpg",
        value: 1,
        status: "closed"
    },
    {
        image: "https://image.freepik.com/free-photo/ripe-sunflower-white-top-view_92795-1083.jpg", 
        value: 2,
        status: "closed"
    },
    {
        image: "https://image.freepik.com/free-photo/ripe-sunflower-white-top-view_92795-1083.jpg", 
        value: 2,
        status: "closed"
    },
    {
        image: "https://image.freepik.com/free-vector/red-artistic-rose_23-2147488814.jpg", 
        value: 3,
        status: "closed"
    },
    {
        image: "https://image.freepik.com/free-vector/red-artistic-rose_23-2147488814.jpg", 
        value: 3,
        status: "closed"
    },
    {
        image: "https://image.freepik.com/free-vector/white-jasmine-flower_36654-74.jpg",
        value: 4,
        status: "closed"
    },
    {
        image: "https://image.freepik.com/free-vector/white-jasmine-flower_36654-74.jpg", 
        value: 4,
        status: "closed"
    },
    {
        image: "https://image.freepik.com/free-vector/bouquet-spring-yellow-tulips-white_87521-2751.jpg", 
        value: 5,
        status: "closed"
    },
    {
        image: "https://image.freepik.com/free-vector/bouquet-spring-yellow-tulips-white_87521-2751.jpg",
        value: 5,
        status: "closed"
    }
]

// Durnsten Shuffling Algorithm.

for (let i=cards.length-1; i>=0; i--){
    let j = Math.floor(Math.random()*(i+1));
    let temp = cards[i];
    cards[i] = cards[j];
    cards[j] = temp;
}

// console.log(cards);

// The cards on the screen.

displayCards = (cards) => {
    let img_tag = "";

    for (let i=0; i<cards.length; i++) {
        img_tag += `<div class="card" style="background-image: url('${cards[i].image}')">
                    <div class="overlay ${cards[i].status}" onclick="open_cards(${i});"></div>
                    </div>\n`
    }
    document.getElementById("cards").innerHTML = img_tag;
}

displayCards(cards);

// Game Logic

let flag=0, val1=null, val2=null, score = 0;

open_cards = (index) => {
    cards[index].status = "opened";
    // card[index];
    displayCards(cards);
    if (flag === 0){
        val1 = cards[index].value;
        flag = 1;
    } else if (flag === 1){
        val2 = cards[index].value;
    
        if (val1 === val2){
            score++;
            document.getElementById("score").innerText = score;
            val1 = val2 = null;
            flag = 0;
        } else {
            alert("Game Over!!");
            location.reload();
        }
    }
}
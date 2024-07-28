let count = 0;

function increaseCount(){
    count++;
    displayCount();
    checkCountValue();
}

function displayCount(){
    document.getElementById("countDisplay").innerHTML = count;
}

function checkCountValue(){
    if(count === 10){
        alert("Your Social-site post gained 10 followers! Congratulations!")
    }else if(count === 20){
        alert("Your Social-site post gained 10 followers! Keep it up!")

    }
}

function resetCount(){
    count = 0;
    alert("Followers count has been reset.");

    displayCount();
}
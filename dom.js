let listAnimals = document.querySelectorAll('.list-of-animals');


console.log(listAnimals);


listAnimals.forEach(element => {
    element.addEventListener('click', () => {
        switch(element.innerHTML){
            case "Cat":
                element.style.backgroundColor = 'red';
                console.log("Hello Hooman");
            break;
            case "Dog":
                element.style.backgroundColor = 'blue';
                console.log("Loyal Dog");
            break;
            case "Bird":
                element.style.backgroundColor = 'green';
                console.log("Tweet like a Bird");
            break;
            case "Fish":
                element.style.backgroundColor = 'brown';
                console.log("Swim like a jet");
            break;
            case "Lion":
                element.style.backgroundColor = 'yellow';
                console.log("Roar like a King");
            break;
            default:
                console.log("None");

        }
    })
});
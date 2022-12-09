let listAnimals = document.querySelectorAll('.list-of-animals');


console.log(listAnimals);


listAnimals.forEach(element => {
    element.addEventListener('click', () => {
        switch(element.innerHTML){
            case "Cat":
                const cat = 'Eat';
                const cat_utterance = new SpeechSynthesisUtterance(cat);
                cat_utterance.pitch = 0.1;
                window.speechSynthesis.speak(cat_utterance);
                element.style.backgroundColor = 'red';
                console.log("Hello Hooman");
            break;
            case "Dog":
                const dog = 'Loyal Dog';
                const dog_utterance = new SpeechSynthesisUtterance(dog);
                dog_utterance.pitch = 0.1;
                window.speechSynthesis.speak(dog_utterance);
                element.style.backgroundColor = 'blue';
                console.log("Loyal Dog");
            break;
            case "Bird":
                const bird = 'Tweet like a Bird';
                const bird_utterance = new SpeechSynthesisUtterance(bird);
                bird_utterance.pitch = 0.1;
                window.speechSynthesis.speak(bird_utterance);
                element.style.backgroundColor = 'green';
                console.log("Tweet like a Bird");
            break;
            case "Fish":
                const fish = 'Swim like a jet';
                const fish_utterance = new SpeechSynthesisUtterance(fish);
                fish_utterance.pitch = 0.1;
                window.speechSynthesis.speak(fish_utterance);
                element.style.backgroundColor = 'brown';
                console.log("Swim like a jet");
            break;
            case "Lion":
                const lion = 'Roar like a King';
                const lion_utterance = new SpeechSynthesisUtterance(lion);
                lion_utterance.pitch = 0.1;
                window.speechSynthesis.speak(lion_utterance);
                element.style.backgroundColor = 'yellow';
                console.log("Roar like a King");
            break;
            default:
                console.log("None");

        }
    })
});


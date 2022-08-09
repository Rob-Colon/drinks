
function getRandomCocktail() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }

                // Examine the text in the response
                response.json().then(function (data) {
                    // console.log(data);
                    displayRandomCocktail(data);
                });
            }
        )
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
}

getRandomCocktail();

function displayRandomCocktail(cocktail) {
    console.log(cocktail.drinks[0]);

    let drinkSection = document.querySelector('#drink-section');

    let drinkName = document.createElement('h1');
    drinkName.innerHTML = cocktail.drinks[0].strDrink;

    drinkSection.appendChild(drinkName);

    let img = document.createElement('img');
    img.src = cocktail.drinks[0].strDrinkThumb;

    drinkSection.appendChild(img);

    for (let i = 1; i < 16; i++) {
        console.log();

        if (cocktail.drinks[0][`strIngredient${i}`] == null) {
            break;
        }

        let ingredient = document.createElement('ul');
        ingredient.innerHTML = cocktail.drinks[0][`strMeasure${i}`] + ': ' + cocktail.drinks[0][`strIngredient${i}`];

        drinkSection.appendChild(ingredient);

    }
    let elem = document.createElement("hr");
    elem.setAttribute("width", "100%");
    drinkSection.appendChild(elem);


    let card = document.createElement('card');
    card.innerHTML = cocktail.drinks[0].strInstructions;
    drinkSection.appendChild(card);
}

const button = document.querySelector('button')
button.onclick = () => {
    window.location.reload();
}
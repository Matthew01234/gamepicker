var games = [
    {
        "title": "Counter-Strike: Global Offensive",
        "price": 0.00,
        "genre": "FPS",
        "rating": 4
    },
    {
        "title": "Dota 2",
        "price": 0.00,
        "genre": "MOBA",
        "rating": 3
    },
    {
        "title": "Goose Goose Duck",
        "price": 4.99,
        "genre": "Action",
        "rating": 2
    },
    {
        "title": "Apex Legends",
        "price": 0.00,
        "genre": "FPS",
        "rating": 4
    },
    {
        "title": "PUBG: BATTLEGROUNDS",
        "price": 29.99,
        "genre": "FPS",
        "rating": 5
    },
    {
        "title": "Lost Ark",
        "price": 49.99,
        "genre": "Action",
        "rating": 1
    },
    {
        "title": "Grand Theft Auto V",
        "price": 29.99,
        "genre": "FPS",
        "rating": 3
    },
    {
        "title": "Call of Duty®: Modern Warfare® II | Warzone™ 2.0",
        "price": 19.99,
        "genre": "FPS",
        "rating": 3
    },
    {
        "title": "Team Fortress 2",
        "price": 0.00,
        "genre": "FPS",
        "rating": 5
    },
    {
        "title": "Rust",
        "price": 39.99,
        "genre": "Action",
        "rating": 5
    },
    {
        "title": "Unturned",
        "price": 0.00,
        "genre": "RPG",
        "rating": 1
    },
    {
        "title": "ELDEN RING",
        "price": 59.99,
        "genre": "RPG",
        "rating": 5
    },
    {
        "title": "ARK: Survival Evolved",
        "price": 10.00,
        "genre": "RPG",
        "rating": 1
    },
    {
        "title": "War Thunder",
        "price": 0.00,
        "genre": "Simulation",
        "rating": 2
    },
    {
        "title": "Sid Meier's Civilization VI",
        "price": 29.99,
        "genre": "Simulation",
        "rating": 3
    },
    {
        "title": "Football Manager 2023",
        "price": 59.99,
        "genre": "Simulation",
        "rating": 3
    },
    {
        "title": "Warframe",
        "price": 0.00,
        "genre": "Looter-shooter",
        "rating": 3
    },
    {
        "title": "EA SPORTS tm FIFA 23",
        "price": 59.99,
        "genre": "Sport",
        "rating": 1
    },
    {
        "title": "Destiny 2",
        "price": 0.00,
        "genre": "FPS",
        "rating": 5
    },
    {
        "title": "Red Dead Redemption 2",
        "price": 59.99,
        "genre": "RPG",
        "rating": 4
    },
    {
        "title": "Tom Clancy's Rainbow Six Siege",
        "price": 19.99,
        "genre": "Simulation",
        "rating": 3
    },
    {
        "title": "The Witcher 3: Wild Hunt",
        "price": 39.99,
        "genre": "RPG",
        "rating": 4
    },
    {
        "title": "Terraria",
        "price": 9.99,
        "genre": "Sandbox",
        "rating": 2
    },
    {
        "title": "Stardew Valley",
        "price": 14.99,
        "genre": "Sandbox",
        "rating": 1
    },
    {
        "title": "Left 4 Dead 2",
        "price": 9.99,
        "genre": "FPS",
        "rating": 4
    },
    {
        "title": "Don't Starve Together",
        "price": 5.09,
        "genre": "RPG",
        "rating": 3
    },
    {
        "title": "MIR4",
        "price": 19.99,
        "genre": "RPG",
        "rating": 3
    },
    {
        "title": "PAYDAY 2",
        "price": 9.99,
        "genre": "Action",
        "rating": 2
    },
    {
        "title": "Path of Exile",
        "price": 0.00,
        "genre": "RPG",
        "rating": 4
    },
    {
        "title": "Project Zomboid",
        "price": 14.99,
        "genre": "Simulation",
        "rating": 4
    },
    {
        "title": "Valheim",
        "price": 19.99,
        "genre": "Sandbox",
        "rating": 5
    },
    {
        "title": "DayZ",
        "price": 44.99,
        "genre": "Simulation",
        "rating": 3
    }
]



var selectedGenre = "";
var selectedRating = "";
var cartItems = [];

function showGames() {
  var gamesTable = document.getElementById("gamesTable");
  gamesTable.innerHTML = "";

  selectedGenre = document.getElementById("genreFilter").value;
  selectedRating = document.getElementById("rating").value;

  var filteredGames = games.filter(function(game) {
    var genreMatch = selectedGenre === "" || game.genre === selectedGenre;
    var ratingMatch = selectedRating === "" || game.rating >= parseInt(selectedRating);
    return genreMatch && ratingMatch;
  });

  var sortedGames = sortGames(filteredGames);

  sortedGames.forEach(function(game, index) {
    var row = document.createElement("tr");
    row.setAttribute("id", index);
    row.innerHTML = "<td id='title"+index+"'>" + game.title + "</td><td id='price"+index+"'>" + game.price + "</td><td>" + game.genre + "</td><td>" + game.rating + "</td><td><button class='addToCart' data-index='" + index + "'>Add to Cart</button></td>";
    gamesTable.appendChild(row);
  });

  attachAddToCartListeners(); // Voeg eventlisteners toe aan de knoppen "Add to Cart"
}

function sortGames(gamesArray) {
  var sortOption = document.getElementById("sortFilter").value;

  switch (sortOption) {
    case "title":
      return gamesArray.sort(function(a, b) {
        return a.title.localeCompare(b.title);
      });
    case "-title":
      return gamesArray.sort(function(a, b) {
        return b.title.localeCompare(a.title);
      });
    case "price":
      return gamesArray.sort(function(a, b) {
        return a.price - b.price;
      });
    case "-price":
      return gamesArray.sort(function(a, b) {
        return b.price - a.price;
      });
    case "rating":
      return gamesArray.sort(function(a, b) {
        return a.rating - b.rating;
      });
    case "-rating":
      return gamesArray.sort(function(a, b) {
        return b.rating - a.rating;
      });
    default:
      return gamesArray;
  }
}

function attachAddToCartListeners() {
  var addToCartButtons = document.getElementsByClassName("addToCart");

  for (var i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener("click", function(event) {
      var index = event.target.getAttribute("data-index");
      addToCart(index);
    });
  }
}

function addToCart(index) {
  var game = document.getElementById(index);
  console.log(game.innerHTML);

  console.log("Game added to cart:", game);
  updateCart(index);
}

function updateCart(index) {
  var cartBody = document.getElementById("cartBody");
  var totalPriceElement = document.getElementById("totalPrice");
  var title = document.getElementById('title'+index+'');
  var price = document.getElementById('price'+index+'');
  cartBody.innerHTML = "";

  var totalPrice = 0;

    var row = document.createElement("tr");
    row.innerHTML = "<td>" + title.innerHTML + "</td><td>" + price.innerHTML + "</td>";
    cartBody.append(row);
    totalPrice += price.innerHTML;

  totalPriceElement.innerHTML = "Total Price: $" + totalPrice.toFixed(2);
}

// Eventlistener voor het indienen van de filters
var filtersForm = document.getElementById("filtersForm");
filtersForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Voorkom het herladen van de pagina bij het indienen van het formulier
  showGames();
});

// Voer de functie showGames uit om de spellen weer te geven bij het laden van de pagina
showGames();
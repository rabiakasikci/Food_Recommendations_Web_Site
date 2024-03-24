// Yemekler ve açıklamaları
const meals = [
    { name: "Pizza", image: "Pizza.jpg", description: "Arkadaşlarla yemek için pizza gibisi yok" },
    { name: "Köfte", image: "Köfte.jpg", description: "Ayranla çok güzel bir yemek yemez misin ?" },
    { name: "Kebap", image: "Kebap.jpg", description: "Kebap da çok güzel olur bugün" },
	{ name: "Hamburger", image: "Hamburger.jpg", description: "Bol patates ile bir hamburger çok güzel olur" },
	{ name: "Sushi", image: "Sushi.jpg", description: "Bugün farklı bir şey yemek istemez misin ?" },
	{ name: "Makarna", image: "Makarna.jpg", description: "Bol soslu bir makarna çok güzel olur" },
	{ name: "Tavuk", image: "Tavuk.jpg", description: "Soslu bir tavuk bugün için çok ideal" },
	{ name: "Mantı", image: "Mantı.jpg", description: "Geleneksel bir yemek canın çekmedi mi. Mantııııı? " }
];
// Butona tıklandığında yemek önerisi yap
// Evet butonu tıklanma sayısı
let yesButtonClickCount = 0;

// Butona tıklandığında yemek önerisi yap
document.getElementById("btnSuggest").addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * meals.length);
    const randomMeal = meals[randomIndex];

    const mealImage = document.getElementById("mealImage");
    const mealDescription = document.getElementById("mealDescription");

    mealImage.src = randomMeal.image;
    mealDescription.textContent = randomMeal.description;

    mealImage.style.display = "block";
    document.getElementById("confirmation").style.display = "block"; // Onaylama bölümünü göster

    // .gif dosyasını ekrandan kaldır
    const gifImage = document.querySelector("#mealDisplay img[src='uclus.gif']");
    if (gifImage) {
        gifImage.remove();
        yesButtonClickCount = 0;
    }
});

// Evet butonuna tıklandığında
document.getElementById("btnYes").addEventListener("click", function() {
    // .gif dosyasını ekranda göster
    if (yesButtonClickCount === 0) {
        const gifImage = document.createElement("img");
        gifImage.src = "uclus.gif"; // .gif dosyasının adı
        gifImage.alt = "Evet GIF";
        document.getElementById("mealDisplay").appendChild(gifImage);
        yesButtonClickCount++;
    }

    // Onaylama bölümünü gizle
    document.getElementById("confirmation").style.display = "none";
});

// Hayır butonuna tıklandığında
document.getElementById("btnNo").addEventListener("click", function() {
    // Yemek önerisi yap
    const randomIndex = Math.floor(Math.random() * meals.length);
    const randomMeal = meals[randomIndex];

    const mealImage = document.getElementById("mealImage");
    const mealDescription = document.getElementById("mealDescription");

    mealImage.src = randomMeal.image;
    mealDescription.textContent = randomMeal.description;

    // Onaylama bölümünü göster
    document.getElementById("confirmation").style.display = "block";

    // .gif dosyasını ekrandan kaldır
    const gifImage = document.querySelector("#mealDisplay img[src='uclus.gif']");
    if (gifImage) {
        gifImage.remove();
        yesButtonClickCount = 0;
    }
});
// Funkcja zmieniająca tekst przycisku na "Potwierdzone" oraz wyświetlająca alert
document.getElementById("acceptBtn").addEventListener("click", function() {
    // Wyświetlenie alertu
    alert("Dziękuję za potwierdzenie! Jesteś najpiękniejsza osoba na świecie!");

    // Zmiana tekstu przycisku na "Potwierdzone!"
    let button = document.getElementById("acceptBtn");
    button.innerHTML = "Potwierdzam iz jestem najpiekniejsza na swiecie! 💖";
    button.style.backgroundColor = "#d81b60"; // Zmiana koloru przycisku na różowy
    button.style.cursor = "default"; // Zmiana kursora po kliknięciu
});

// Renklerin tanımlanması
const colors = ['red', 'blue', 'green', 'orange', 'purple', 'black', 'yellow'];

// Buton ve canvas elementlerinin seçilmesi
const button = document.getElementById('button');
const canvas = document.getElementById('canvas');

// Butona tıklama olay dinleyicisi eklenmesi
button.addEventListener('click', function() {
    // Rastgele bir renk seçmek için 0-6 arası bir sayı üretilmesi
    const index = Math.floor(Math.random() * colors.length);
    
    // Canvas'ın arka plan renginin değiştirilmesi
    canvas.style.backgroundColor = colors[index];
});

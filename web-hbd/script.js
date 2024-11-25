let currentSlide = 0;
const slides = document.querySelectorAll('.slideshow .slide');

function showMessage() {
    // Hide the envelope section and show the birthday section
    document.getElementById('envelope-section').style.display = 'none';
    document.getElementById('birthday-section').style.display = 'block';

    // Start slideshow
    startSlideshow();
}

function showNote() {
    // Hide the birthday section and show the note section with typing animation
    document.getElementById('birthday-section').style.display = 'none';
    document.getElementById('note-section').style.display = 'block';

    // First message to display
    const message = `Happy birthday sayang, maaf yaa aku baru bisa ngirim ini ke kamu karena dari kemarin kita full berantem 😟. 
Aku cuman mau bilang terima kasih sudah sejauh ini sama aku, sudah mau sabar ngadepin ego dan amarah aku. 
Umur aku dan umur kamu secara ga langsung sudah tergolong dewasa. Aku mau setiap kita ada masalah jangan sekali-kali buat ngajakin putus atau berantem. 
I know kamu cape ngadepin aku, sebaliknya aku juga cape ngadepin kamu, tapi aku lawan semua rasa cape aku karena aku mau serius sama kamu. 

Aku janji sehabis ini aku bakal nemuin kamu. Kita bakal ngelakuin rencana-rencana yang dulu belum kita lakukan, tapi kulum juga termasuk yaa 🥴 wkwkw bercanda. 
Sekali lagi Happy birthday ya sayang ❤️❤️`;

    // Second message to display in a letter box
    const secondMessage = `Aku seneng banget kamu beliin kado ini dan beberapa kado lainya, itu seakan akan kamu bakal ada terus di samping aku dan bikin aku semangat kerjanya makasi ya sayang kado nya ILY 3000 MUWCHH`;

    // Call typing animation for the first message
    typeMessage(message);

    // Add class for the photo slide animation
    const photoFrame = document.querySelector('.photo-frame');
    photoFrame.classList.add('show-photo');

    // Delay second message to appear in letter box
    setTimeout(function() {
        displayLetterBoxMessage(secondMessage);
    }, message.length * 20); // Delay second message after first message finishes typing
}

function typeMessage(message, elementId = 'typed-message') {
    let i = 0;
    const speed = 20; // Typing speed (in milliseconds)
    const element = document.getElementById(elementId);
    element.innerHTML = ""; // Clear element before typing
    
    // Internal function to type one character at a time
    function type() {
        if (i < message.length) {
            element.innerHTML += message.charAt(i); // Add one character to the element
            i++;
            setTimeout(type, speed); // Call this function again with a delay
        }
    }
    type(); // Start typing the message
}

// Function to display second message inside a letter box
function displayLetterBoxMessage(message) {
    const letterBoxContainer = document.getElementById("letter-box-container");

    const letterBox = document.createElement('div');
    letterBox.classList.add('letter-box');
    letterBox.innerHTML = `<p>${message}</p>`;
    letterBoxContainer.appendChild(letterBox);
}

// Function to start the slideshow (this will auto-slide images with animation)
function startSlideshow() {
    // Initially display the first slide
    showSlide();

    // Set interval to change slide every 3 seconds
    setInterval(showSlide, 3000);
}

function showSlide() {
    // Sembunyikan slide sebelumnya
    slides[currentSlide].classList.remove('show');
    slides[currentSlide].classList.add('hide');

    // Pindah ke slide berikutnya
    currentSlide = (currentSlide + 1) % slides.length;

    // Tampilkan slide baru
    slides[currentSlide].classList.remove('hide');
    slides[currentSlide].classList.add('show');
}


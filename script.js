function handleButtonClick(response) {
    if (response === 'yes') {
        window.location.href = "iloveu.html";
    } else {
        const noButton = document.querySelector('.no-button');
        const newPositionimg = calculateNewPosition();
        const newPositionbutt = calculateNewPosition();
        const questionContainer = document.querySelector('.question-container');

        // Zmiana położenia przycisku "No"
        noButton.style.position = 'absolute';
        noButton.style.left = newPositionbutt.x + 'px';
        noButton.style.top = newPositionbutt.y + 'px';

        // Wstawianie losowego zdjęcia pod tekstem i przyciskami
        const randomImage = getRandomImage();
        const imageElement = document.createElement('img');
        imageElement.src = randomImage;
        imageElement.classList.add('random-image');
        questionContainer.appendChild(imageElement);

        imageElement.style.position = 'fixed';
        imageElement.style.left = newPositionimg.x + 'px';
        imageElement.style.top = newPositionimg.y + 'px';

        
        const yesButton = document.querySelector('.yes-button');
        questionContainer.style.zIndex = '1';
        yesButton.style.zIndex = '1';
        noButton.style.zIndex = '1';
        
    }
}

function calculateNewPosition() {
    const screenWidth = window.innerWidth - 100; // Uwzględnij szerokość przycisku
    const screenHeight = window.innerHeight - 40; // Uwzględnij wysokość przycisku

    const newX = Math.random() * screenWidth;
    const newY = Math.random() * screenHeight;

    return { x: newX, y: newY };
}

function getRandomImage() {
    const images = ['a.jpg', 'b.jpg', 'c.jpg', 'd.jpg', 'e.jpg', 'f.jpg', 'g.jpg'];
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}
// JavaScript functions for drag-and-drop, audio pronunciation, coloring exercises, and interactive quiz games

// Drag-and-drop functionality
function enableDragAndDrop() {
    const dropArea = document.getElementById('drop-area');

    dropArea.addEventListener('dragover', (event) => {
        event.preventDefault();
        dropArea.classList.add('hover');
    });

    dropArea.addEventListener('dragleave', () => {
        dropArea.classList.remove('hover');
    });

    dropArea.addEventListener('drop', (event) => {
        event.preventDefault();
        const files = event.dataTransfer.files;
        handleFiles(files);
        dropArea.classList.remove('hover');
    });
}

// Handle dropped files
function handleFiles(files) {
    for (let file of files) {
        console.log('File dropped:', file.name);
        // Process the file (e.g., preview or upload)
    }
}

// Audio pronunciation
function playAudio(url) {
    const audio = new Audio(url);
    audio.play();
}

// Coloring exercises
function setupColoringExercise() {
    const canvas = document.getElementById('coloring-canvas');
    const ctx = canvas.getContext('2d');
    // Draw shapes on the canvas
    ctx.fillStyle = '#FF0000';  // Red
    ctx.fillRect(20, 20, 150, 100);
}

// Interactive quiz games
function startQuiz(questions) {
    let score = 0;
    questions.forEach((question, index) => {
        const answer = prompt(question.text);
        if (answer === question.correctAnswer) {
            score++;
            alert('Correct!');
        } else {
            alert('Wrong! The correct answer is: ' + question.correctAnswer);
        }
    });
    alert('Your score: ' + score + '/' + questions.length);
}

// Example usage of the functions
// enableDragAndDrop();
// playAudio('audio/pronunciation.mp3');
// setupColoringExercise();
// startQuiz([{ text: 'What is 2 + 2?', correctAnswer: '4' }]);
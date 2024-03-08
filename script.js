function revealMessage() {
    const poster = document.getElementById('poster');
    poster.classList.add('revealed');
    setTimeout(() => {
        poster.innerHTML = `<h1>Happy Women's Day, [Your Name]!</h1>`;
    }, 500); // Adjust timing as needed
}

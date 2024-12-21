document.addEventListener('DOMContentLoaded', function() {
    const colorBox = document.getElementById('color-box'); // Div
    const changeColorBtn = document.getElementById('change-color-btn'); // Button
    const arrayhex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

    function getRandomColor() {
        let colorHex = "#";
        for (let i = 0; i < 6; i++) {
            const randomInde = Math.floor(Math.random() * arrayhex.length);
            const randomHex = arrayhex[randomInde];
            colorHex += randomHex;
        }
        return colorHex;
    }

    changeColorBtn.addEventListener('click', () => {
        const randomColor = getRandomColor();
        colorBox.style.backgroundColor = randomColor;
    });
});

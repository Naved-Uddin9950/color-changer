const body = document.querySelector('body');
const redBox = document.getElementById('red');
const greenBox = document.getElementById('green');
const blueBox = document.getElementById('blue');


function colorChange (element, color) {
    element.addEventListener('click', () => {
        try {
            body.style.backgroundColor = color;
        } catch (error) {
            console.error(`Color change error : ${error}`);
        }
    });
}

colorChange(redBox, 'red');
colorChange(greenBox, 'green');
colorChange(blueBox, 'blue');

var numberOfSquares = 6,
    colors          = [],
    pickedColor,
    squares         = document.querySelectorAll(".square"),
    colorDisplay    = document.querySelector("#colorDisplay"),
    messageDisplay  = document.querySelector("#message"),
    heading1        = document.querySelector("h1"),
    resetButton     = document.querySelector("#reset"),
    modeButtons     = document.querySelectorAll(".mode-buttons");
    

init();

function init () {
    setUpModeButtons();
    setUpSquares();
}

function setUpModeButtons() {
    for(var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
    		modeButtons[0].classList.remove("selected");
    		modeButtons[1].classList.remove("selected");
    		this.classList.add("selected");
    		this.textContent === "EASY" ? numberOfSquares = 3: numberOfSquares = 6;
    		reset();
        });
    }
}

function setUpSquares() {
    for(var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function() {
            var clickedColor = this.style.backgroundColor;
            if(pickedColor === clickedColor) {
                messageDisplay.textContent = "CORRECT!!";
                resetButton.textContent = "PLAY AGAIN?";
                changeColors(clickedColor);
                heading1.style.backgroundColor = pickedColor;
            } else {
                this.style.backgroundColor = "#232323",
                messageDisplay.textContent = "TRY AGAIN!!";
            }
        });
    }
    reset();
}

function reset() {
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "NEW COLORS";
    messageDisplay.textContent = "";
    for(var i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    heading1.style.backgroundColor = "steelBlue";
}

resetButton.addEventListener("click", function() {
    reset();
});

function changeColors(color){
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length); //color length je 6, a najveći i je 5
	return colors[random];
}

function generateRandomColors(num) {
    var arr = [];
    for(var i = 0; i < num; i++) {
        arr.push(randomColor());  
    }
    return arr;
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
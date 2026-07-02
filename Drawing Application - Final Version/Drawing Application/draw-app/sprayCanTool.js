function sprayCanTool() {
    this.name = "sprayCanTool";
    this.icon = "assets/sprayCan.jpg";

    // Default settings for the spray can
    var points = 50; // Number of points sprayed at one press
    var spread = 20; // Spread of the spray
    var colorModeSelection = "normal"; // Default color mode

    this.draw = function() {
        var r = random(5, 10);
        if (mouseIsPressed) {
            for (var i = 0; i < points; i++) {
                var x = random(mouseX - spread, mouseX + spread);
                var y = random(mouseY - spread, mouseY + spread);
                if (colorModeSelection === "rainbow") {
                    stroke(color(random(360), 100, 100)); // Using HSB color mode for rainbow effect
                }
                point(x, y);
            }
        }
    };

    this.populateOptions = function() {
        // Clear existing options
        const optionsDiv = document.getElementById("options");
        optionsDiv.innerHTML = "";

        // Slider for adjusting the size of the spray
        const sliderLabel = document.createElement("label");
        sliderLabel.htmlFor = "sizeSlider";
        sliderLabel.innerText = "Adjust Size:";
        const sizeSlider = document.createElement("input");
        sizeSlider.type = "range";
        sizeSlider.id = "sizeSlider";
        sizeSlider.min = 30;
        sizeSlider.max = 200;
        sizeSlider.value = points;
        sizeSlider.oninput = function() {
            points = parseInt(this.value);
        };
        optionsDiv.appendChild(sliderLabel);
        optionsDiv.appendChild(sizeSlider);

        // Checkbox for rainbow color mode
        const rainbowLabel = document.createElement("label");
        rainbowLabel.htmlFor = "rainbowCheckbox";
        rainbowLabel.innerText = "Rainbow Colors:";
        const rainbowCheckbox = document.createElement("input");
        rainbowCheckbox.type = "checkbox";
        rainbowCheckbox.id = "rainbowCheckbox";
        rainbowCheckbox.onchange = function() {
            colorModeSelection = this.checked ? "rainbow" : "normal";
        };
        optionsDiv.appendChild(rainbowLabel);
        optionsDiv.appendChild(rainbowCheckbox);

        // Dropdown for selecting spray patterns
        const patternLabel = document.createElement("label");
        patternLabel.htmlFor = "patternDropdown";
        patternLabel.innerText = "Spray Pattern:";
        const patternDropdown = document.createElement("select");
        patternDropdown.id = "patternDropdown";
        const patterns = {normal: 50, dense: 5, wide: 80}; // Pattern types and corresponding spread
        for (const key in patterns) {
            const option = document.createElement("option");
            option.value = key;
            option.innerText = key.charAt(0).toUpperCase() + key.slice(1);
            patternDropdown.appendChild(option);
        }
        patternDropdown.onchange = function() {
            spread = patterns[this.value];
        };
        optionsDiv.appendChild(patternLabel);
        optionsDiv.appendChild(patternDropdown);
    };

   
}

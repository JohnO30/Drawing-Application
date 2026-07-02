function gradientTool() {
    this.name = "GradientTool";
    this.icon = "assets/gradientTool.jpg"; 
    this.startColor = '#000000'; // Set start to  black colour
    this.endColor = '#ffffff'; // Set default white colour
    this.type = 'linear'; // Set start function in linear mode

    this.draw = function() {
        var ctx = document.querySelector('canvas').getContext('2d');
        var gradient;

        if(this.type === "linear") {
            gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        } else {
            gradient = ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2);
        }

        gradient.addColorStop(0, this.startColor);
        gradient.addColorStop(1, this.endColor);

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    this.populateOptions = function() {
        var html = '<label for="gradientType">Gradient Type:</label>' +
               '<select id="gradientType">' +
               '<option value="linear">Linear</option>' +
               '<option value="radial">Radial</option>' +
               '</select>' +
               '<label for="startColor">Start Color:</label>' +
               '<input type="color" id="startColor" value="#000000">' +
               '<label for="endColor">End Color:</label>' +
               '<input type="color" id="endColor" value="#ffffff">' +
               '<button id="applyGradient">Apply Gradient</button>';

    document.getElementById('options').innerHTML = html;

    document.getElementById('gradientType').addEventListener('change', (event) => {
        this.type = event.target.value;
    });
    document.getElementById('startColor').addEventListener('change', (event) => {
        this.startColor = event.target.value;
    });
    document.getElementById('endColor').addEventListener('change', (event) => {
        this.endColor = event.target.value;
    });
    document.getElementById('applyGradient').addEventListener('click', () => this.draw());
    
    };

    
}

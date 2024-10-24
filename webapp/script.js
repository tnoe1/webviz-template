// webapp/script.js

function getData() {
    let data = {
        transforms: {},
        points: []
    };
    
    // Fetch the JSON file
    fetch('transforms.json')
        .then(response => response.json())
        .then(tx_data => {
            data.transforms = tx_data;
        })
        .catch(error => console.error('Error fetching JSON:', error));
    
    // Fetch the PLY file (assuming it's a text file)
    fetch('ply.ply')
        .then(response => response.text())
        .then(plyData => {
            data.points = plyData.split('\n')
                .filter((_, idx) => idx > 13)
                .map(line => line.split(' ')
                .map(Number));
        })
        .catch(error => console.error('Error fetching PLY file:', error));

    return data; 
}

// Function to resize the canvas to fit the container
function resizeCanvas(canvas, ctx) {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Redraw or initialize your canvas content here
    // For example, clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Or draw something
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
}

(() => {
    // Get the canvas element and its context
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    
    // Event listener to handle window resize
    window.addEventListener('resize', function() {
        resizeCanvas(canvas, ctx);
    });
    
    // Initial canvas setup
    resizeCanvas(canvas, ctx);

    // Fetch data
    let data = getData();

    // Visualize data
    let viz = new Visualization(data, canvas, ctx);
    viz.render();
})();



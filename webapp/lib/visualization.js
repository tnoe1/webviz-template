
class Visualization {
    constructor(data, canvas, context) {
        this.data = data;
        this.canvas = canvas;
        this.context = context;
    }

    render() {
        // Render the visualization using the data
        console.log("Rendering visualization with data:", this.data);

        // Verifying that MathUtils is available (see math_utils.js)
        console.log("Add 3 and 4:", MathUtils.add(3, 4));
    }
}

function calculateTriangleArea(){
    const baseInput = document.getElementById('triangle-base');
    const baseText = baseInput.value;
    const base = parseFloat(baseText)

    const heightInput = document.getElementById('triangle-height');
    const heightText = heightInput.value ;
    const height = parseFloat(heightText);

    // calculate 
    const Area   = 0.5 * base * height;

    const final = document.getElementById('triangle-area');
    final.innerText = Area;

}
function calculateRectangleArea(){
    const wightInput = document.getElementById('Rectangle-wight');
    const wightText = wightInput.value;
    const wight = parseFloat(wightText)

    const lengthInput = document.getElementById('Rectangle-length');
    const lengthText = lengthInput.value;
    const length = parseFloat(lengthText);

    // calculate
    const Area2 = wight*length;

    const result = document.getElementById('Rectangle-area');
    result.innerText =  Area2;

    
}

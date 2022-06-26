// step 1: create onload handler
window.onload = () => {
    main();

}
function main() {
    const wrapper = document.getElementById('root');
    const bgChangeBtn = document.getElementById('change-color');
    const output = document.getElementById('output');


    bgChangeBtn.addEventListener('click', () => {
        const bgColor = generateHexColor();
        wrapper.style.backgroundColor = bgColor;
        output.value = bgColor;
    })
}
// step 2: random color generator function
function generateHexColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`

}

// step 3: collect all necessary references

// step 4: handle the click event
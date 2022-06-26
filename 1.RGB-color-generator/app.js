// step 1: create onload handler
window.onload = () => {
    main();
}
function main() {
    const wrapper = document.getElementById('root');
    const bgChangeBtn = document.getElementById('change-color')

    bgChangeBtn.addEventListener('click', () => {
        const bgColor = generateRGBColor();
        wrapper.style.backgroundColor = bgColor;
    })
}
// step 2: random color generator function
function generateRGBColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`

}
// step 3: collect all necessary references

// step 4: handle the click event
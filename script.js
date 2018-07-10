// Want to add some colors yourself? Insert it below
const colors = [
    { 
        "a":"#f07f1b",
        "b":"#174357"
    },
    {
        "a":"#00ff87",
        "b":"#040044"
    },
    {
        "a":"#fc5555",
        "b":"#2d283f"
    },
    {
        "a":"#00ebfc",
        "b":"#ff4949"
    }
];
  
document.querySelector("#colors").innerHTML = `
    ${colors.map((el,i) => `
        <span onclick="changeColor(${i})" style="background:linear-gradient(${colors[i].a}, ${colors[i].b})"></span>
    `).join('')}
`;
  
let changeColor = (i) => {
    document.documentElement.style.setProperty('--cor2', `${colors[i].a}`);
    document.documentElement.style.setProperty('--cor4', `${colors[i].b}`);
}
  
document.addEventListener('DOMContentLoaded', () => {
    changeColor(Math.floor(Math.random() * colors.length));
});
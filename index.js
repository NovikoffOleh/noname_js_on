const container = document.querySelector(".buttons");

const hoverHand = (e) => {
    const { target: button} = e;
    button.style.top = `${Math.floor(Math.random() * (innerHeight - button.clientHeight))}px`;
    button.style.left = `${Math.floor(Math.random() * (innerWidth - button.clientWidth))}px`;
    
   
};
const boom = document.querySelector(".putin");
container.addEventListener("mouseover", hoverHand );
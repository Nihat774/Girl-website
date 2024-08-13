const carousel = [
    {
        image: "./images/page2/telPhoto.png",
        name: "Walnut MagSafe Stand",
        price: "$120"
    },
    {
        image: "./images/page2/compPhoto.png",
        name: "Walnut Laptop Riser",
        price:" $150"
    },
    {
        image: "./images/page2/tabletPhoto.png",
        name: "Walnut iPad Stand",
        price:" $80"
    },
    {
        image: "./images/page2/televisionPhoto.png",
        name: "Walnut Monitor Stand",
        price:" $100"
    },
]

const carousel2 = [
    {
        image:"./images/page5/img1.png"
    },
    {
        image:"./images/page5/img2.png"
    },
    {
        image:"./images/page5/img3.png"
    },
    {
        image:"./images/page5/img4.png"
    },
    {
        image:"./images/page5/img5.png"
    },
    {
        image:"./images/page5/img6.png"
    },
    {
        image:"./images/page5/img7.png"
    },
    {
        image:"./images/page5/img8.png"
    },
    {
        image:"./images/page5/img9.png"
    },
    {
        image:"./images/page5/img10.png"
    },
    {
        image:"./images/page5/img11.png"
    },
    {
        image:"./images/page5/img12.png"
    },
    {
        image:"./images/page5/img13.png"
    },
    {
        image:"./images/page5/img14.png"
    },
    {
        image:"./images/page5/img15.png"
    },
    {
        image:"./images/page5/img16.png"
    },
    {
        image:"./images/page5/img17.png"
    },
    {
        image:"./images/page5/img18.png"
    },
    {
        image:"./images/page5/img19.png"
    },
    {
        image:"./images/page5/img25.png"
    },
    {
        image:"./images/page5/img21.png"
    },
    {
        image:"./images/page5/img22.png"
    },
    {
        image:"./images/page5/img23.png"
    },
    {
        image:"./images/page5/img24.png"
    },

]
const root = document.querySelector(".root")
const main2 = document.getElementById("main2")
carousel.map(({ image, name, price }) => {
    root.innerHTML += `
    <div class="card">
    <div><img src="${image}"></div>
    <div class='rootInfo'>${name}</div>
    <div class='rootInfo'>${price}</div>
    </div>
    `
})
const page5Cards = document.getElementById("page5-cards");
carousel2.map(({image})=>{
    page5Cards.innerHTML += `
    <div class='page5-imgDiv'><img class='page5-img' src='${image}'></div>
    `
})
const upIcon = document.querySelector(".upIcon")
const listIcon = document.querySelector(".list-icon");
const closeIcon = document.querySelector(".close-icon");
const openNav = document.querySelector(".openNav")
const closeNav = document.querySelector(".responsNav")
function nav(){
    openNav.style.display = "flex";
    openNav.style.flexDirection = "column";
    openNav.style.gap = "10px";
    closeNav.style.display = "none"
    
    openNav.style.justifyContent = "space-between";
}
listIcon.addEventListener("click",nav)

function close(){
closeNav.style.display = "flex"
openNav.style.display = "none"
}
closeIcon.addEventListener('click',close)
function goToUp(){
    window.scrollTo({top:0,behavior:"smooth"})
}
upIcon.addEventListener('click',goToUp)
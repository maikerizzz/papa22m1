function showPopup() {
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

window.onload = function() {
    showPopup();
};
document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.querySelector('.search');
    const searchIcon = document.querySelector('.searchIconContainer');

    searchIcon.addEventListener('click', () => {
        searchBar.classList.toggle('hidden');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const navList = document.querySelector('.navlist');
    const menuIconContainer = document.querySelector('.menuIconContainer');

    menuIconContainer.addEventListener('click', () => {
        navList.classList.toggle('hidden');
    });
});



const wrapper = document.querySelector(".sliderwrapper");
const menuItems = document.querySelectorAll(".menuItem");

menuItems.forEach((item,index)=> {
    item.addEventListener("click",()=>{
    wrapper.style.transform= `translateX(${-100 * index}vw)`;
 });
});


const product = [
    {
        id: 0,
        image: './img/p1.webp',
        title: 'The Sasubags Story',
        price:  179,
    },
    {
        id: 1,
        image: './img/p2.webp',
        title: 'Casual Mens T-shirt',
        price:  149,
    },
    {
        id: 2,
        image: './img/p3.webp',
        title: 'Summer Female Short',
        price:  145,
    },
    {
        id: 3,
        image: './img/p4.jpeg',
        title: 'Ebook Template',
        price:  123,
    },
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='boxx'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2> ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'> Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart = [];

function addtocart(a) {
    cart.push({...categories[a]});
    displaycart();
}

function delElement(a) {
    cart.splice(a, 1);
    displaycart();
}

function displaycart() {
    let j = 0; 
    let total = 0;
    document.getElementById("counter").innerHTML = cart.length;
    if (cart.length == 0) {
        document.getElementById('cartitem').innerHTML = "Your CART is EMPTY";
        document.getElementById("total").innerHTML = "$ 0.00";
    } else {
        document.getElementById('cartitem').innerHTML = cart.map((items) => {
            var {image, title, price} = items;
            return (
                `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src='${image}'/>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size: 15px;'>$ ${price}.00</h2>
                    <i class='bx bxs-trash' onclick='delElement(${j++})'></i>
                </div>`
            );
        }).join('');

        total = cart.reduce((acc, item) => acc + item.price, 0);
        document.getElementById("total").innerHTML = "$ " + total + ".00";
    }
}

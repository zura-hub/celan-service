function nav() {
    const mobileNav = document.querySelector(".mobile-tablet-link");

    if (mobileNav.style.display === "none") {
        mobileNav.style.display = "block";
    } else {
        mobileNav.style.display = "none"
    }
}

// service list
function showList() {
    const servOne = document.querySelector('.serv-one');
    const servTwo = document.querySelector('.serv-two');
    const servThree = document.querySelector('.serv-three');
    const servFour = document.querySelector('.serv-four');


    setInterval(() => {
        servOne.style.display = 'block'
    }, 2000);

    setInterval(() => {
        servTwo.style.display = 'block'
    }, 3000);

    setInterval(() => {
        servThree.style.display = 'block'
    }, 4004);

    setInterval(() => {
        servFour.style.display = 'block'
    }, 5000);
}

window.onload = function () {
    showList()
}



//   calendar

function order() {
    const hideOrder = document.querySelector('.calendar');
    const afterSubmit = document.querySelector('.submit-text');
    const submitBackBtn = document.querySelector('.btn-submit-back');

    hideOrder.style.display = 'none'
    afterSubmit.style.display = 'block'
    submitBackBtn.style.display = 'block'
}

function orderBack() {
    const hideOrder = document.querySelector('.calendar');
    const afterSubmit = document.querySelector('.submit-text');
    const submitBackBtn = document.querySelector('.btn-submit-back');

    hideOrder.style.display = 'block'
    afterSubmit.style.display = 'none'
    submitBackBtn.style.display = 'none'
}
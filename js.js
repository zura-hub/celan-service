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
    const hideServ = document.querySelector('.serv-list');
    const priwave = ["დალაგება", "ყავის მომზადება", "ჩაის მომზადება", "ფეხსაცმლის გაწმენდა"];
    let i = 0;

    if (hideServ.style.display === "none") {
        hideServ.style.display = "block";
    } else {
        hideServ.style.display = "none"
    }

    const intervalId = setInterval(function () {
        console.log(priwave[i]);
        i++;
        if (i === priwave.length) {
            clearInterval(intervalId);
            }
        }, 1000);   

        document.querySelector('.serv-list').innerHTML = priwave.join('<br>');
}


window.onload = function() {
    showList();
  };


//   calendar

function order(){
    const hideOrder = document.querySelector('.calendar');
    const afterSubmit = document.querySelector('.submit-text');
    const submitBackBtn = document.querySelector('.btn-submit-back');

    hideOrder.style.display = 'none'
    afterSubmit.style.display = 'block'
    submitBackBtn.style.display = 'block'
}

function orderBack(){
    const hideOrder = document.querySelector('.calendar');
    const afterSubmit = document.querySelector('.submit-text');
    const submitBackBtn = document.querySelector('.btn-submit-back');

    hideOrder.style.display = 'block'
    afterSubmit.style.display = 'none'
    submitBackBtn.style.display = 'none'
}
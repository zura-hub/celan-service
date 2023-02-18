function nav() {
    const mobileNav = document.querySelector(".mobile-tablet-link");

    if (mobileNav.style.display === "none") {
        mobileNav.style.display = "block";
    } else {
        mobileNav.style.display = "none"
    }
}


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

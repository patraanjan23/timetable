const days = {
    1: "monday",
    2: "tuesday",
    3: "wednedsday",
    4: "thursday",
    5: "friday"
}

const showMeet = (d,h,m) => {
    let day = days[d];
    let dayCTX = document.querySelector('#'+day);
    if((h==9 && m>=0) || (h==9 && m<=50)) {
        dayCTX.childNodes[3].className= "ongoing";
    }
    if((h==9 && m>=55) || (h==10 && m<=40)) {
        dayCTX.childNodes[5].className= "ongoing";
    }
    if((h==10 && m>=45) || (h==11 && m<=45)) {
        dayCTX.childNodes[7].className= "ongoing";
    }
    if((h==12 && m>=25) || (h==13 && m<=15)) {
        dayCTX.childNodes[9].className= "ongoing";
    }
    if((h==13 && m>=20) || (h==16 && m<=55)) {
        dayCTX.childNodes[11].className= "ongoing";
    }
}

function checkTime() {
    var d = new Date();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var day = d.getDay();

    // console.log(d, hours, minutes, day);

    showMeet(day, hours, minutes);
}

document.addEventListener('DOMContentLoaded', () => {
    checkTime();
})
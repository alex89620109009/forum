var countDownDate = new Date('October 2, 2020 09:00:00').getTime();

var coutDownFunction = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance/(1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60* 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if(hours <= 0 && days <= 0 && minutes <= 0 && seconds <= 0){

        document.getElementById("time").innerHTML = "Мы открылись!"
        document.getElementById("time_h1").innerHTML = " "
    }
    else{
    document.getElementById("time").innerHTML = days + " дней " + hours + " часов " + minutes + " минут " + seconds + " секунд ";
    }
})
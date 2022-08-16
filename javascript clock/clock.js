

document.addEventListener('DOMContentLoaded', function() {
    
    
    
    (function () {
        function checkTime(i) {
            return (i < 10) ? "0" + i : i;
        }

        function showTime() {
            var today = new Date();
                h = checkTime(today.getHours());
                m = checkTime(today.getMinutes());
                s = checkTime(today.getSeconds());
                // d = checkTime(today.getDay());  //Use the UTD day code in tandem with your Day array to show the day of the week. 
                
                session = "AM";
                if(h == 0){
                    h = 12;
                }
                if (h > 12) {
                    h = h - 12;
                    session = "PM"
                }
            
            ;
                
            document.getElementById('clockDisplay').innerHTML = h + ":" + m + ":" + s + '&nbsp' + session;
            t = setTimeout(function() {
                showTime()
            }, 500);

            document.getElementById('days').innerHTML = "Today is " + day;

        }
        showTime();
    })();
})


const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = weekday[d.getDay()];


// REDESIGN WITH NEW JS LOGIC 
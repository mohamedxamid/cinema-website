function getZero(num) {
    if (num >= 0 && num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}

function timer(deadline) {
    const elPromotionDate = document.querySelector('.promotion__date');
    
    elPromotionDate.innerHTML = getDate(deadline);
    setClock('.promotion__timer', deadline);
    
    function getTimeRemaining(endtime) {
        let totalSeconds, totalMinutes, totalHours, days, seconds, minutes, hours;
        
        const timer = Date.parse(endtime) - Date.parse(new Date());
        
        if(timer <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else {
            totalSeconds = Math.floor(timer / 1000),
            totalMinutes = Math.floor(totalSeconds / 60),
            totalHours = Math.floor(totalMinutes / 60),
            days = Math.floor(totalHours / 24),
            seconds = Math.floor(totalSeconds % 60),
            minutes = Math.floor(totalMinutes % 60),
            hours = Math.floor(totalHours % 24);
        }
        
        return {timer, seconds, minutes, hours, days};
    };
    
    function setClock(selector, endtime) {
        const elTimer = document.querySelector(selector),
        elDays = elTimer.querySelector('#days'),
        elHours = elTimer.querySelector('#hours'),
        elMinutes = elTimer.querySelector('#minutes'),
        elSeconds = elTimer.querySelector('#seconds'),
        updateClockID = setInterval(updateClock, 1000);
        
        updateClock();
        
        function updateClock() {
            const {timer, seconds, minutes, hours, days} = getTimeRemaining(endtime);
            
            (timer <= 0) && clearInterval(updateClockID);
            
            elDays.innerHTML = getZero(days);
            elHours.innerHTML = getZero(hours);
            elMinutes.innerHTML = getZero(minutes);
            elSeconds.innerHTML = getZero(seconds);
        }
    }
    
    function getDate(date) {
        let month = '';
        switch(new Date(date).getMonth()) {
            case 0:
            month = "January";
            break;
            case 1:
            month = "February";
            break;
            case 2:
            month = "March";
            break;
            case 3:
            month = "April";
            break;
            case 4:
            month = "May";
            break;
            case 5:
            month = "Juny";
            break;
            case 6:
            month = "July";
            break;
            case 7:
            month = "August";
            break;
            case 8:
            month = "September";
            break;
            case 9:
            month = "Octember";
            break;
            case 10:
            month = "November";
            break;
            case 11:
            month = "December";
            break;
        }
        
        return `${month} ${new Date(date).getDate()}`;
    }
}

export default timer;
export { getZero };
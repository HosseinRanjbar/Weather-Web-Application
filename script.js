const table = document.querySelector('.main-table');
const divElement = document.querySelector('.main-situationIcon');
const dateElement = document.querySelector('.date');
fetch('https://api.dastyar.io/express/weather?lat=35.67194277&lng=51.42434403')
.then(res => res.json())
.then(data => {
    data.map(item => {
        let tr = document.createElement('tr')
        tr.innerHTML = `<td > ${item.dateTitle}</td><td><img src="https://openweathermap.org/img/wn/${item.weather.icon}@2x.png" /></td><td style = "font-family: 'vazir-digit'"> ° ${item.min} حداقل </td><td style = "font-family: 'vazir-digit'"> ° ${item.max} حداکثر </td>`
        table.append(tr)
        
    })
    divElement.innerHTML = `<img src="https://openweathermap.org/img/wn/${data[0].weather.icon}@2x.png" alt=""> 
    <h3  style = "font-family: 'vazir-digit'">° ${data[0].current}</h3>
    <p>${data[0].customDescription.text}</p> 
    <div class="main-situationIcon_content">
        <p style = "font-family: 'vazir-digit'">${data[0].min}° حداقل</p>
        <p style = "font-family: 'vazir-digit'">${data[0].max}° حداکثر</p>
    </div>`

    document.body.style.background = `${data[0].backgroundColor}`;
    // document.body.style.color = `${data[0].textColor}`;
})
/////////////Date Convert///////////
const today = Date.now();
 
const todayFa = {
    "day" : getDateFormat(today , {"day" : "2-digit"}),
    "month" : getDateFormat(today , {"month" : "numeric"}),
    "monthTitle" : getDateFormat(today , {"month" : "long"}),
    "year" : getDateFormat(today , {"year" : "numeric"}),
    "dayWeek" : getDateFormat(today , {"weekday" : "long"}),
}
 
function getDateFormat(uDate,option){
    let date = new Intl.DateTimeFormat('fa-IR', option).format(uDate);
    return date;
} 
 
dateElement.innerHTML = `${todayFa.dayWeek} ${todayFa.day} ${todayFa.monthTitle} ${todayFa.year}`



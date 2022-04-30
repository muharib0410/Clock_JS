setInterval(setClock, 1000)

function setClock() {
    const currentDate = new Date()
    const secondRatio = currentDate.getSeconds()/ 60 
    const minuteRatio = (secondRatio + currentDate.getMinutes())/ 60

    const hoursRatio = (minuteRatio + currentDate.getHours()) / 12
     

}

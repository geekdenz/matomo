let e = null
const PERCEIVABLE = 250
// 250ms chosen because perceivable delay is around 200-300ms
// and it divides a second evenly for correct interval
// perceived
setInterval(() => {
    if (!e) {
        e = document.querySelector('.CurrentTime')
    }
    if (e) {
        const time = new Date().toLocaleString()
        e.innerHTML = `Time: ${time.substring(0, time.length)}`
    }
}, PERCEIVABLE)
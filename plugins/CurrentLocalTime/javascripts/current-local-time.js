// Using modern JS to illustrate. Could compile down with Babel or similar.
// Assumes Device time is correct.

(() => { // do not pollute root scope
    const PERCEIVABLE = 250 / 2;
    // 250ms chosen because perceivable delay is around 200-300ms
    // and it divides a second evenly for correct interval
    // perceived, should run near instant so even requestAnimationFrame could
    // be used, but may have higher cost
    // divide by 2 because I could perceive it sometimes being delayed
    // 125ms should be plenty of time to run the code below
    let e = null;
    let serverFormatter = null;
    const clientOptions = {
        dateStyle: 'full',
        timeStyle: 'long',
    };
    const clientFormatter = new Intl.DateTimeFormat([], clientOptions);

    setInterval(() => {
        if (!e) {
            e = document.querySelector('.CurrentTime');
            if (!e) return;
            const { timezone } = e.dataset; // set on server side
            const options = {
                timeZone: timezone,
                dateStyle: 'full',
                timeStyle: 'long',
            };
            serverFormatter = new Intl.DateTimeFormat([], options);
        }
        if (e) {
            const date = new Date();
            const time = clientFormatter.format(date);
            const siteTime = serverFormatter.format(date);
            const str = `Device Local Time:<br/>${time}<br/><br/>` + // could use Angular or other framework
                `Site Local Time:<br/>${siteTime}`; // but since it is a small example, this might be OK.
            e.innerHTML = str;
        }
    }, PERCEIVABLE);
})();
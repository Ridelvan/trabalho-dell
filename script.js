function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

function checkTimeAndNotify() {
    const now = new Date();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const notificationsDiv = document.getElementById('notifications');
    notificationsDiv.innerHTML = ''; // Limpa notificações anteriores

    const times = [
        { time: '06:13', color: 'Preto', certainty: 'Certeza' },
        { time: '08:25', color: 'Vermelho', certainty: 'Certeza' },
        { time: '10:37', color: 'Preto', certainty: 'Certeza' },
        { time: '12:49', color: 'Preto', certainty: 'Certeza' },
        { time: '14:31', color: 'Vermelho', certainty: 'Não Certeza' },
        { time: '16:15', color: 'Vermelho', certainty: 'Certeza' },
        { time: '18:47', color: 'Preto', certainty: 'Certeza' },
        { time: '20:09', color: 'Preto', certainty: 'Certeza' },
        { time: '22:23', color: 'Vermelho', certainty: 'Não Certeza' },
        { time: '00:35', color: 'Preto', certainty: 'Não Certeza' },
         { time: '02:57', color: 'Vermelho', certainty: 'Certeza' },
          { time: '04:11', color: 'Vermelho', certainty: 'Certeza' },
           { time: '05:19', color: 'Vermelho', certainty: 'Não Certeza' },
            { time: '07:43', color: 'Vermelho', certainty: 'Certeza' },
    ];

    times.forEach(item => {
        const [itemHours, itemMinutes] = item.time.split(':').map(Number);

       
        let targetDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), itemHours, itemMinutes);
        if(targetDate < now) {
          targetDate.setDate(targetDate.getDate() + 1);
        }
        
        const timeDiff = Math.floor((targetDate - now) / 1000);
        if(timeDiff > 0 && timeDiff <= 10*60 )
        {
           notificationsDiv.innerHTML += `<div>Faltam ${Math.floor(timeDiff/60)} minutos para ${item.time}!</div>`;
        }
    });
}

setInterval(updateClock, 1000);
setInterval(checkTimeAndNotify, 1000);

updateClock(); 
checkTimeAndNotify();
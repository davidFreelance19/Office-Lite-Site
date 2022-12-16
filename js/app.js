const containerReloj = document.querySelector('.footer__timing');
const containerToday = document.querySelector('.footer__today');


document.addEventListener('DOMContentLoaded', () =>{
        // Los elementos a insertar
    const seconds =  document.createElement('p');
    const minutos =  document.createElement('p');
    const horas =  document.createElement('p');
    const dias =  document.createElement('p');
    const hoy =  document.createElement('p');

    // Utilizamos el objeto Date para simular un temporizador mas real
    const diaHoy =  new Date();
    //Variables
    let valorSegundos, valorMinutos, valorHoras, valorDias;
    valorSegundos =  60-diaHoy.getSeconds();
    valorMinutos =  60-diaHoy.getMinutes();
    valorHoras =  24-diaHoy.getHours();
    valorDias = 90;
    moment.locale();
    setInterval(() => {
        seconds.innerHTML = `${valorSegundos < 10 ? `0${valorSegundos}` : valorSegundos} <span>sec</span>`;
        minutos.innerHTML = `${valorMinutos < 10 ? `0${valorMinutos}` : valorMinutos} <span>min</span>`;
        horas.innerHTML =  `${valorHoras < 10 ? `0${valorHoras}` : valorHoras} <span>hours</span>`;
        dias.innerHTML = `${valorDias < 10 ? `0${valorDias}` : valorDias} <span>days</span>`;
        valorSegundos--;
        if(valorSegundos==0){
            valorSegundos=60;
            valorMinutos--;
            if(valorMinutos==0){
                valorMinutos=60;
                valorHoras--;
                if(valorHoras == 0){
                    valorHoras = 24;
                    valorDias--;
                    if(valorDias==0){
                        valorDias=90;
                    }
                }
            }
        }
    }, 1000);
    // 
    hoy.innerHTML = `<span>coming</span> ${moment().add(90, 'day').format('LL')}`;

    //Insertamos los valores
    containerReloj.appendChild(dias)
    containerReloj.appendChild(horas)
    containerReloj.appendChild(minutos)
    containerReloj.appendChild(seconds)
    containerToday.appendChild(hoy)
})

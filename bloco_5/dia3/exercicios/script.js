function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };

  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.


  function createMonthDays() {
    const days = [28,29,30];
    const daysList = document.querySelector('#days');
  
    for (let index = 0; index < 31; index += 1) {
      days.push(index + 1); 
    };

    for (let index = 0; index < days.length; index += 1) {
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days[index];
      dayListItem.style.class = 'day';

      if (days[index] === 3 || days[index] === 10 || days[index] === 17) {
        dayListItem.style.class = 'day friday';
      }
      if (days[index] === 25) {
        dayListItem.style.class = 'day holiday';
      }
      if (days[index] === 24 || days[index] === 31) {
        dayListItem.style.class = 'day friday holiday';
      }
  
      daysList.appendChild(dayListItem);
    };
  };
  
  createMonthDays();
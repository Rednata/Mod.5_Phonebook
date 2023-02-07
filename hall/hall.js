'use strict';

{
  const app = document.querySelector('#app');

  let countArea = 0;

  const creatSeat = i => {
    const seat = document.createElement('div');
    seat.classList.add('seat');
    seat.dataset.seatNumber = i;

    return seat;
  }

  const createLine = (countLine, y) => {
    const line = document.createElement('div');
    line.classList.add('line');
    line.dataset.lineNumber = countLine;

    for (let i = 1; i <= y; i++) {
      line.append(creatSeat(i));
    }

    return line;
  };

  const createArea = (x, y) => {
    countArea += 1;
    const area = document.createElement('div');
    area.classList.add('area');
    area.dataset.areaNumber = countArea;

    for (let i = 1; i <= x; i++) {
      area.append(createLine(i, y));
    }

    return area;
  };

  app.append(createArea(5, 6));
  app.append(createArea(8, 6));
  app.append(createArea(6, 6));


  app.addEventListener('click', event => {
    console.log(event.target);
  })



}
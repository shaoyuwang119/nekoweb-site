function arrangeHeader() {
  const header = document.querySelector(".header");
  header.innerHTML = header.textContent.split('').map(letter => {
  const angle = (Math.random() * 20 - 10).toFixed(2); // random -5° to +5°
  return `<span style="display:inline-block; transform:rotate(${angle}deg)">${letter}</span>`;
}).join('');
}

function generateCalendar(id) {
  const calendar = document.getElementById(id);
  const date = new Date();
  const month = date.getMonth();
  const year = date.getFullYear();

  const monthNames = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  let firstDay = new Date(year, month, 1).getDay();

  let html = `<div class="calendar">
    <div class="calendar-header">${monthNames[month]} ${year}</div>
    <div class="calendar-grid">
      <div class="day-name">S</div>
      <div class="day-name">M</div>
      <div class="day-name">T</div>
      <div class="day-name">W</div>
      <div class="day-name">T</div>
      <div class="day-name">F</div>
      <div class="day-name">S</div>`;

  for (let i = 0; i < firstDay; i++) {
    html += `<div class="day empty"></div>`;
  }

  for (let d = 1; d <= daysInMonth; d++) {
    html += `<div class="day">${d}</div>`;
  }

  html += "</div></div>";
  calendar.innerHTML = html;
}

function getCurrentDay(id) {
  const monthNames = [
    "january", "february", "march", "april", "may", "june",
    "july", "august", "september", "october", "november", "december"
  ];

  const dayNames = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

  const monthtxt = document.getElementById("month");
  const datetxt = document.getElementById("date");
  const daytxt = document.getElementById("day")

  const now = new Date();
  const month = monthNames[now.getMonth()];
  const weekday = dayNames[now.getDay()-4];
  
  monthtxt.innerHTML = month;
  datetxt.innerHTML = now.getDate();
  daytxt.innerHTML = weekday;
}

arrangeHeader()
getCurrentDay("daily");
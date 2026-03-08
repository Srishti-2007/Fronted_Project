let timerInterval;
let dateofbirth;

const initialtextel  = document.getElementById("initialtext");
const afterdobtextel = document.getElementById("afterdobtext");
const dobbuttonel    = document.getElementById("dobbutton");
const dobinputel     = document.getElementById("dobinput");
const resetbuttonel  = document.getElementById("resetbutton");

const yearsEl   = document.getElementById("year");
const monthsEl  = document.getElementById("month");
const daysEl    = document.getElementById("day");
const hoursEl   = document.getElementById("hour");
const minutesEl = document.getElementById("minute");
const secondsEl = document.getElementById("second");

const today = new Date().toISOString().split("T")[0];
dobinputel.setAttribute("max", today);

const updateTimer = () => {
    const now = new Date();
    const dob = new Date(dateofbirth);

    let year   = now.getFullYear() - dob.getFullYear();
    let month  = now.getMonth()    - dob.getMonth();
    let day    = now.getDate()     - dob.getDate();
    let hour   = now.getHours()    - dob.getHours();
    let minute = now.getMinutes()  - dob.getMinutes();
    let second = now.getSeconds()  - dob.getSeconds();

    if (second < 0) { second += 60; minute--; }
    if (minute < 0) { minute += 60; hour--;   }
    if (hour   < 0) { hour   += 24; day--;    }
    if (day    < 0) { day    += 30; month--;  }
    if (month  < 0) { month  += 12; year--;   }

    yearsEl.innerHTML   = year;
    monthsEl.innerHTML  = month;
    daysEl.innerHTML    = day;
    hoursEl.innerHTML   = hour;
    minutesEl.innerHTML = minute;
    secondsEl.innerHTML = second;
};

const setdobhandler = () => {
    dateofbirth = dobinputel.value;
    if (dateofbirth) {
        initialtextel.classList.add("hide");
        afterdobtextel.classList.remove("hide");
        resetbuttonel.classList.remove("hide");
        updateTimer();
        timerInterval = setInterval(updateTimer, 1000);
    }
};

const resetHandler = () => {
    clearInterval(timerInterval);
    afterdobtextel.classList.add("hide");
    initialtextel.classList.remove("hide");
    resetbuttonel.classList.add("hide");
    dobinputel.value = "";
};

dobbuttonel.addEventListener("click", setdobhandler);
resetbuttonel.addEventListener("click", resetHandler);

// {{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}

// Yeh line jaise hi page khulta hai, TURANT chalti hai
// const today = new Date().toISOString().split("T")[0]; // "2026-03-07"
// dobinputel.setAttribute("max", today);

// HTML mein yeh ban jaata hai:
// <input type="date" max="2026-03-07">
```

// **Browser ka kaam** — jab user calendar kholega, browser khud future dates grey karke disable kar dega. Tumhe kuch extra likhna hi nahi! Yeh browser ki built-in feature hai.
// ```
// Tumne 20 March 2026 di — Browser bolega "nahi! max 7 March hai" ❌
// Tumne 25 June 2003 di — Browser bolega "theek hai ✅"

// Reset button dabaate hi:
// dobinputel.value = "";

// Input field mein jo date thi → woh hatt jaati hai
// User dobara fresh date dal sake

// {{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}






// let timerInterval;
// let dateofbirth;

// const initialtextel = document.getElementById("initialtext");
// const afterdobtextel = document.getElementById("afterdobtext");
// const dobbuttonel = document.getElementById("dobbutton");
// const dobinputel = document.getElementById("dobinput");
// const resetbuttonel = document.getElementById("resetbutton");

// // HTML elements jahan value dikhegi
// const yearsEl   = document.getElementById("year");
// const monthsEl  = document.getElementById("month");
// const daysEl    = document.getElementById("day");
// const hoursEl   = document.getElementById("hour");
// const minutesEl = document.getElementById("minute");
// const secondsEl = document.getElementById("second");

// const updateTimer = () => {
//     const currentdate = new Date();
//     const dob = new Date(dateofbirth);
    
//     const dateDiff = currentdate - dob; // milliseconds mein farak

//     const year   = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));
//     const month  = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 30)) % 12;
//     const day    = Math.floor(dateDiff / (1000 * 60 * 60 * 24)) % 30;
//     const hour   = Math.floor(dateDiff / (1000 * 60 * 60)) % 24;
//     const minute = Math.floor(dateDiff / (1000 * 60)) % 60;
//     const second = Math.floor(dateDiff / 1000) % 60;

//     // HTML mein daal do
//     yearsEl.innerHTML   = year;
//     monthsEl.innerHTML  = month;
//     daysEl.innerHTML    = day;
//     hoursEl.innerHTML   = hour;
//     minutesEl.innerHTML = minute;
//     secondsEl.innerHTML = second;
// };

// const setdobhandler = () => {
//     dateofbirth = dobinputel.value; // input ki value lo

//     if (dateofbirth) {
//         initialtextel.classList.add("hide");
//         afterdobtextel.classList.remove("hide");

//         updateTimer(); // turant ek baar chalao
//         timerInterval = setInterval(updateTimer, 1000); // har second chalao
//     }
// };

// const resetHandler = () => {
//     clearInterval(timerInterval); // timer band karo
//     afterdobtextel.classList.add("hide");
//     initialtextel.classList.remove("hide");
//     dobinputel.value = ""; // input clear
// };

// dobbuttonel.addEventListener("click", setdobhandler);
// resetbuttonel.addEventListener("click", resetHandler);










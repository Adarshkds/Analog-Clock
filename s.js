const clock = document.querySelector('.clock')
const hr = document.querySelector('.hr');
const mn = document.querySelector('.mn');
const sc = document.querySelector('.sc');
const dt = document.querySelector('.date');

const date = new Date();

setInterval(() => {
    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
    hr.style.transform = `rotate(${(((h % 12) * 30) + 180) % 360}deg)`;
    mn.style.transform = `rotate(${((m * 6) + 180) % 360}deg)`;
    sc.style.transform = `rotate(${((s * 6) + 180) % 360}deg)`;
}, 1000)

dt.innerHTML = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;


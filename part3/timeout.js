const output = document.querySelector("#output");
const button = document.querySelector("#set-alarm");
const button2 = document.querySelector("#set-alarm2");
const button3 = document.querySelector("#set-alarm_async");
const name1 = document.querySelector("#fname");
const delay = document.querySelector("#delay");

function setAlarm() {
    setTimeout(() => {
        output.textContent = "Wake up!";
    }, 1000);
}
button.addEventListener("click", setAlarm);

function alarm(person, delay) {
    return new Promise((resolve, reject) => {
        if (delay < 0) {
            throw new Error("Alarm delay must not be negative");
        }
        setTimeout(() => {
            resolve(`Wake up, ${person}!`);
        }, delay);
    });
}

button2.addEventListener("click", () => {
    alarm(name1.value, delay.value)
        .then((message) => (output.textContent = message))
        .catch((error) => (output.textContent = `Couldn't set alarm: ${error}`));
});

button3.addEventListener("click", async () => {
    try{
        const message = await alarm(fname.value, delay.value);
        output.textContent = message;
    } catch(error){
        output.textContent = `Couldn't set alarm: ${error}`;
    }
});

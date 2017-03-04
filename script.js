// змінна із посиланням на елемент, де буде показано час таймеру
var stopwatch = document.getElementById('stopwatch');
// змінна, що містить початок відліку кроку таймеру
var startTime;
// змінна, що містить id створеного інтервалу, який оновлює час
var updateIntervalId;
// змінна, що містить час, скільки працював таймер (мілісекунди)
var difference = 0;
// змінна, що містить частоту оновлення таймеру (інтервал кроку), мілісекунди
var precision = 4;

// функція старту таймеру
function start(e) {
    // так як в якості кнопок використовується тег <a>,
    // то відміняємо його стандартний функціонал (перейти на іншу сторінку)
    e.preventDefault();
    // записуємо час початку кроку (у мілісекундах)
    startTime = (new Date()).getTime();
    // запускаємо інтервал оновлення таймеру і зберігаємо id цього таймеру
    updateIntervalId = setInterval(proceedTime, precision);
}

// функція призупинення таймеру
function pause(e) {
    e.preventDefault();
    // якщо був запущений інтервал
    if (updateIntervalId) {
        // зупиняємо інтервал оновлення таймеру
        clearInterval(updateIntervalId);
        // витираємо із змінної id інтервалу, бо ми його зпуинили
        updateIntervalId = null;
    }
}

// функція зупинки таймеру
function stop(e) {
    // призупиняємо таймер
    pause(e);
    // записуємо 0 як час, що виконується таймер
    difference = 0;
    // оновити текст в HTML
    updateStopWatch();
}

// функція кроку таймеру
function proceedTime() {
    // змінна зберігає теперішній час
    var time = (new Date()).getTime();
    // різниця між теперішнім часом і попереднім кроком додається
    // до загального часу, скільки запущено таймер
    difference = difference + time - startTime;
    // записуємо теперішній час у змінну, де час попереднього кроку
    startTime = time;
    // оновлюємо HTML
    updateStopWatch();
}

// функція відображення таймеру у HTML
function updateStopWatch() {
    stopwatch.innerText = difference;
}
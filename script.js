// ============================================
// Inspect Me - CTF Challenge Script
// ============================================

// Block right click
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

setInterval(() => {
    console.clear();
}, 1500);

// Block common DevTools shortcuts
document.addEventListener("keydown", function (e) {
    if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) ||
        (e.ctrlKey && e.key.toLowerCase() === "u")
    ) {
        e.preventDefault();
    }
});

// Fake flags pool
const FAKE_FLAGS = [
    "flag{fake_1}",
    "flag{not_the_flag}",
    "flag{try_again}",
    "flag{nice_try_hacker}",
    "flag{you_wish}",
    "flag{keep_looking}",
    "flag{so_close_yet_so_far}",
    "flag{this_is_not_it}",
    "flag{wrong_flag}",
    "flag{better_luck_next_time}",
    "flag{nope_nope_nope}",
    "flag{almost_there}",
    "flag{404_flag_not_found}",
    "flag{lol_try_harder}",
    "flag{definitely_not_this}",
    "flag{red_herring}",
    "flag{decoy_flag}",
    "flag{look_elsewhere}",
    "flag{false_alarm}",
    "flag{gotcha}",
];

function getRandomFakeFlag() {
    const index = Math.floor(Math.random() * FAKE_FLAGS.length);
    return FAKE_FLAGS[index];
}

function floodConsole() {
    console.log(getRandomFakeFlag());
}

// ~100 flags per second
setInterval(floodConsole, 10);

// Challenge messages
console.log(
    "%cInspect Me - CTF Challenge",
    "color:#00ff41;font-size:18px;font-weight:bold;background:#0a0a0f;padding:8px 16px;border-radius:4px;"
);

console.log(
    "%cThe flag is somewhere here...",
    "color:#7fff7f;font-size:13px;"
);

console.log(
    "%cHint: Not everything running in your browser is your friend.",
    "color:#ffaa00;font-size:12px;font-style:italic;"
);

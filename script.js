// ============================================
// Inspect Me — CTF Challenge Script
// ============================================


// ─── Block Right Click ──────────────────────
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

setInterval(() => {
  console.clear();
}, 1500);

// ─── Block DevTools Shortcuts ───────────────
document.addEventListener("keydown", function (e) {

    if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) ||
        (e.ctrlKey && e.key.toLowerCase() === "u")
    ) {
        e.preventDefault();
    }

});


// ─── Fake Flags Pool ────────────────────────
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


// ─── Random Fake Flag Generator ─────────────
function getRandomFakeFlag() {

    const index = Math.floor(Math.random() * FAKE_FLAGS.length);

    return FAKE_FLAGS[index];

}


// ─── Console Flood ──────────────────────────
function floodConsole() {

    console.log(getRandomFakeFlag());

}


// ~100 flags per second
setInterval(floodConsole, 10);


// ─── Hidden Flag Fetcher ────────────────────
// Endpoint is base64 so it isn't obvious
function _internalMetrics() {

    const p1 = "L2FwaS9m";
    const p2 = "bGFn";

    const endpoint = atob(p1 + p2); // "/api/flag"

    fetch(endpoint)
        .then(r => r.json())
        .then(data => {

            // We intentionally DO NOTHING with the real flag
            // This makes the backend hold the flag while JS hides it

            console.log("%cFlag loaded.", "color: gray;");

        });

}


// Fetch the flag every 1 second
setInterval(_internalMetrics, 1000);


// ─── Challenge Messages ─────────────────────
console.log(
"%c🔒 Inspect Me — CTF Challenge",
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
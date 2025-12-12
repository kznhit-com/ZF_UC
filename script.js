/* ======================
   الإعدادات العامة
====================== */

// حالة الصوت محفوظة
let soundEnabled = localStorage.getItem("sound") !== "off";

// تحميل أصوات (اختياري)
function playSound(id, volume = 0.25) {
    if (!soundEnabled) return;
    const a = document.getElementById(id);
    if (!a) return;
    a.currentTime = 0;
    a.volume = volume;
    a.play();
}

/* ======================
   زر كتم / تشغيل الصوت
====================== */

function toggleSound(btn) {
    soundEnabled = !soundEnabled;
    localStorage.setItem("sound", soundEnabled ? "on" : "off");
    if (btn) {
        btn.innerText = soundEnabled ? "🔊 الصوت شغال" : "🔇 الصوت مقفول";
    }
}

/* ======================
   تنقّل ناعم بين الصفحات
====================== */

function goTo(page) {
    document.body.style.transition = "opacity .25s ease";
    document.body.style.opacity = "0.4";
    setTimeout(() => {
        window.location.href = page;
    }, 250);
}

/* ======================
   حركة دخول الصفحة
====================== */

window.addEventListener("load", () => {
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity .6s ease";
    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 80);
});

/* ======================
   دوال الدرجات (مهمة)
====================== */

/*
  saveScore({
    game: "math" | "logic" | "memory",
    score: رقم,
    text: نص للسجل
  })
*/

function saveScore({ game, score, text }) {
    // آخر نتيجة
    localStorage.setItem("lastScore", score);

    // أعلى نتيجة (للألعاب بالنقاط)
    if (game !== "memory") {
        let best = localStorage.getItem("bestScore");
        if (!best || score > best) localStorage.setItem("bestScore", score);
    }

    // أعلى أداء للذاكرة (الأقل وقت أفضل)
    if (game === "memory") {
        let bestMem = localStorage.getItem("bestMemory");
        if (!bestMem || score < bestMem) localStorage.setItem("bestMemory", score);
    }

    // درجة اللعبة
    localStorage.setItem(game + "Score", score);

    // عدد المحاولات
    localStorage.setItem("tries", Number(localStorage.getItem("tries") || 0) + 1);

    // السجل
    let history = JSON.parse(localStorage.getItem("history") || "[]");
    history.push(text);
    localStorage.setItem("history", JSON.stringify(history));
}

/* ======================
   Reset شامل
====================== */

function resetAll() {
    if (!confirm("متأكد تبي تصفّر كل الدرجات؟")) return;
    localStorage.clear();
    location.reload();
}

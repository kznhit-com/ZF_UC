/* =========================
   تنقل بين الصفحات
========================= */
function goTo(page){
    window.location.href = page;
}

/* =========================
   رسالة وسط الشاشة (3 ثواني)
========================= */
function showCenterMessage(text){
    let box = document.getElementById("centerMessage");
    if(!box){
        box = document.createElement("div");
        box.id = "centerMessage";
        document.body.appendChild(box);
    }

    box.innerText = text;
    box.style.display = "flex";
    box.classList.add("show");

    setTimeout(()=>{
        box.classList.remove("show");
        setTimeout(()=>box.style.display="none",300);
    },3000);
}

/* =========================
   حفظ الدرجات
========================= */
function saveScore(data){
    let scores = JSON.parse(localStorage.getItem("scores") || "[]");

    // احذف نتيجة قديمة لنفس اللعبة
    scores = scores.filter(s => s.game !== data.game);

    scores.push({
        game: data.game,
        score: data.score,
        text: data.text,
        time: new Date().toLocaleString()
    });

    localStorage.setItem("scores", JSON.stringify(scores));
}

/* =========================
   جلب الدرجات
========================= */
function getScores(){
    return JSON.parse(localStorage.getItem("scores") || "[]");
}

/* =========================
   تصفير الدرجات
========================= */
function resetScores(){
    if(confirm("متأكد تبغى تصفّر كل الدرجات؟")){
        localStorage.removeItem("scores");
        location.reload();
    }
}

/* =========================
   تجهيز الرسالة بالتحميل
========================= */
document.addEventListener("DOMContentLoaded",()=>{
    if(!document.getElementById("centerMessage")){
        const msg = document.createElement("div");
        msg.id = "centerMessage";
        document.body.appendChild(msg);
    }
});

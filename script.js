function goTo(page){
    location.href = page;
}

/* دارك مود */
(function(){
    if(localStorage.getItem("dark")==="on")
        document.body.classList.add("dark");
})();

function toggleDark(){
    document.body.classList.toggle("dark");
    localStorage.setItem(
        "dark",
        document.body.classList.contains("dark") ? "on" : "off"
    );
}

/* المنيو */
function toggleMenu(){
    const m=document.getElementById("menu");
    m.style.display = m.style.display==="block" ? "none" : "block";
}

/* تحميل الدرجات */
function loadScores(){
    lastScore.innerText = localStorage.getItem("lastScore") || "-";
    tries.innerText = localStorage.getItem("tries") || 0;
    mathScore.innerText = localStorage.getItem("mathScore") || "-";
    logicScore.innerText = localStorage.getItem("logicScore") || "-";
    memoryScore.innerText = localStorage.getItem("memoryScore") || "-";
    challengeScore.innerText = localStorage.getItem("challengeScore") || "-";
}
loadScores();

/* حفظ نتيجة */
function saveScore(game,score,text){
    localStorage.setItem(game+"Score",score);
    localStorage.setItem("lastScore",text);
    localStorage.setItem("tries",(+(localStorage.getItem("tries")||0))+1);
}

/* تصفير */
function resetAll(){
    localStorage.clear();
    location.reload();
}

/* رسالة وسط الشاشة */
function showCenterMessage(text){
    const d=document.createElement("div");
    d.className="center-message";
    d.innerText=text;
    document.body.appendChild(d);
    setTimeout(()=>d.remove(),3000);
}

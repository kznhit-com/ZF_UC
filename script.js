/* ===== أدوات عامة ===== */
function shuffle(arr){
    return arr.sort(()=>Math.random()-0.5);
}

function goTo(page){
    window.location.href = page;
}

/* ===== رسالة بالمنتصف ===== */
function showCenterMessage(text){
    const overlay = document.createElement("div");
    overlay.className = "center-message";
    overlay.innerHTML = `<div>${text}</div>`;
    document.body.appendChild(overlay);
    setTimeout(()=>overlay.remove(),3000);
}

/* ===== حفظ الدرجات ===== */
function saveScore(data){
    localStorage.setItem("lastScore", data.text);

    let tries = Number(localStorage.getItem("tries")||0)+1;
    localStorage.setItem("tries",tries);

    if(data.game==="math") localStorage.setItem("mathScore",data.text);
    if(data.game==="logic") localStorage.setItem("logicScore",data.text);
    if(data.game==="memory") localStorage.setItem("memoryScore",data.text);

    let best = Number(localStorage.getItem("bestScore")||0);
    if(data.score>best){
        localStorage.setItem("bestScore",data.score);
    }
}

/* ===== الوضع الليلي ===== */
function toggleDark(){
    document.body.classList.toggle("light");
    localStorage.setItem(
        "theme",
        document.body.classList.contains("light") ? "light" : "dark"
    );
}

window.addEventListener("load",()=>{
    if(localStorage.getItem("theme")==="light"){
        document.body.classList.add("light");
    }
});

/* ===== أدوات عامة ===== */
function shuffle(arr){
    return arr.sort(()=>Math.random()-0.5);
}

function goTo(page){
    window.location.href = page;
}

/* ===== رسالة بالنص ===== */
function showCenterMessage(text){
    const overlay = document.createElement("div");
    overlay.className = "center";
    overlay.innerHTML = `<div>${text}</div>`;
    document.body.appendChild(overlay);
    setTimeout(()=>overlay.remove(),3000);
}

/* ===== حفظ الدرجات ===== */
function saveScore(data){
    localStorage.setItem("lastScore", data.text);

    let tries = Number(localStorage.getItem("tries") || 0) + 1;
    localStorage.setItem("tries", tries);

    if(data.game === "math"){
        localStorage.setItem("mathScore", data.score+"/10");
    }
    if(data.game === "logic"){
        localStorage.setItem("logicScore", data.score+"/10");
    }
    if(data.game === "memory"){
        localStorage.setItem("memoryScore", data.score+" ث");
    }

    let best = Number(localStorage.getItem("bestScore") || 0);
    if(data.score > best){
        localStorage.setItem("bestScore", data.score);
    }
}

/* ===== دارك / فاتح ===== */
function toggleDark(){
    document.body.classList.toggle("light");
    localStorage.setItem(
        "theme",
        document.body.classList.contains("light") ? "light" : "dark"
    );
}

if(localStorage.getItem("theme")==="light"){
    document.body.classList.add("light");
}

/* ===== لعبة الأسئلة (رياضيات / معلومات / الرابعة) ===== */
let timer;
let timePerQuestion = 5;

function startQuiz(allQuestions, gameName){
    let questions = shuffle([...allQuestions]).slice(0,10);
    let index=0, score=0, results=[];

    const qBox = document.querySelector(".question");
    const ansBox = document.querySelector(".answers");

    function next(){
        if(index >= questions.length){
            end();
            return;
        }

        let q = questions[index];
        qBox.innerText = q.q;
        ansBox.innerHTML = "";

        shuffle([...q.c]).forEach(opt=>{
            let b = document.createElement("button");
            b.innerText = opt;
            b.onclick = ()=>answer(opt);
            ansBox.appendChild(b);
        });

        timer = setTimeout(()=>{
            results.push({
                q:q.q,
                sel:"—",
                cor:q.a
            });
            index++;
            next();
        }, timePerQuestion*1000);
    }

    function answer(sel){
        clearTimeout(timer);
        let q = questions[index];
        if(sel===q.a) score++;
        results.push({q:q.q, sel:sel, cor:q.a});
        index++;
        next();
    }

    function end(){
        let msg =
            score>=7 ? "حي عينك كفو كفو!" :
            score>=4 ? "مااااش!" :
            "لا حد يشوف درجتك بس";

        showCenterMessage(msg);

        saveScore({
            game:gameName,
            score:score,
            text:score+"/10"
        });

        setTimeout(()=>{
            document.querySelector(".game-container").innerHTML = `
            <h2>نتيجتك: ${score}/10</h2>
            <div class="results">
            ${results.map(r=>`
                <div class="result">
                <b>${r.q}</b><br>
                <span class="${r.sel===r.cor?'correct':'incorrect'}">
                اختيارك: ${r.sel}
                </span><br>
                <span class="correct">الصحيح: ${r.cor}</span>
                </div>
            `).join("")}
            </div>
            <div class="actions">
                <button onclick="location.reload()">🔄 إعادة اللعب</button>
            </div>
            `;
        },3000);
    }

    next();
}

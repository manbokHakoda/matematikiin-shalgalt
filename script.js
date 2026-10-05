/* =====================================================
   GOOGLE SHEETS WEB APP URL
   ===================================================== */

const WEB_APP_URL =
    "https://script.google.com/macros/s/AKfycbx7L6QAtaJKDtDaa0O0K0lDa5NUa0NsqSlou_ZwCFQow32Z1vmSEgwrsJhPE9REtFkN/exec";


/* =====================================================
   ШАЛГАЛТЫН АСУУЛТУУД
   ===================================================== */

const questions = [

    {
        topic: "Алгебр",
        question:
            "x² − 5x + 6 = 0 тэгшитгэлийн язгуурууд аль вэ?",
        options: [
            "1 ба 6",
            "2 ба 3",
            "−2 ба −3",
            "3 ба 4"
        ],
        answer: 1
    },

    {
        topic: "Алгебр",
        question:
            "(a + b)²-ийн зөв задлал аль вэ?",
        options: [
            "a² + b²",
            "a² − 2ab + b²",
            "a² + 2ab + b²",
            "a² − b²"
        ],
        answer: 2
    },

    {
        topic: "Алгебр",
        question:
            "2x + 7 = 15 бол x хэд вэ?",
        options: [
            "3",
            "4",
            "5",
            "6"
        ],
        answer: 1
    },

    {
        topic: "Алгебр",
        question:
            "x / 3 = 5 бол x хэд вэ?",
        options: [
            "8",
            "10",
            "12",
            "15"
        ],
        answer: 3
    },

    {
        topic: "Тэгшитгэл",
        question:
            "|x| = 7 тэгшитгэл хэдэн шийдтэй вэ?",
        options: [
            "1",
            "2",
            "7",
            "14"
        ],
        answer: 1
    },

    {
        topic: "Тэгшитгэл",
        question:
            "3(x − 2) = 12 бол x хэд вэ?",
        options: [
            "2",
            "4",
            "6",
            "8"
        ],
        answer: 1
    },

    {
        topic: "Функц",
        question:
            "f(x) = 2x + 1 бол f(4) хэд вэ?",
        options: [
            "7",
            "8",
            "9",
            "10"
        ],
        answer: 2
    },

    {
        topic: "Функц",
        question:
            "y = 3x − 2 шулууны налалт хэд вэ?",
        options: [
            "−2",
            "2",
            "3",
            "5"
        ],
        answer: 2
    },

    {
        topic: "Функц",
        question:
            "y = x² функцийн график ямар хэлбэртэй вэ?",
        options: [
            "Шулуун",
            "Парабол",
            "Тойрог",
            "Гипербол"
        ],
        answer: 1
    },

    {
        topic: "Функц",
        question:
            "f(x) = x − 5 үед f(5) хэд вэ?",
        options: [
            "−5",
            "0",
            "5",
            "10"
        ],
        answer: 1
    },

    {
        topic: "Геометр",
        question:
            "Гурвалжны дотоод өнцгүүдийн нийлбэр хэд вэ?",
        options: [
            "90°",
            "180°",
            "270°",
            "360°"
        ],
        answer: 1
    },

    {
        topic: "Геометр",
        question:
            "Тэгш өнцөгтийн урт 8 см, өргөн 5 см бол талбай хэд вэ?",
        options: [
            "13 см²",
            "26 см²",
            "40 см²",
            "80 см²"
        ],
        answer: 2
    },

    {
        topic: "Геометр",
        question:
            "Тойргийн радиус 4 см бол диаметр хэд вэ?",
        options: [
            "2 см",
            "4 см",
            "8 см",
            "16 см"
        ],
        answer: 2
    },

    {
        topic: "Геометр",
        question:
            "Пифагорын теоремын зөв хэлбэр аль вэ?",
        options: [
            "a + b = c",
            "a² + b² = c²",
            "a² − b² = c²",
            "2a + 2b = c"
        ],
        answer: 1
    },

    {
        topic: "Магадлал",
        question:
            "Шоог нэг удаа хаяхад 6 гарах магадлал хэд вэ?",
        options: [
            "1/2",
            "1/3",
            "1/6",
            "5/6"
        ],
        answer: 2
    },

    {
        topic: "Магадлал",
        question:
            "Зоосыг нэг удаа шидэхэд сүлд гарах магадлал хэд вэ?",
        options: [
            "0",
            "1/4",
            "1/2",
            "1"
        ],
        answer: 2
    },

    {
        topic: "Статистик",
        question:
            "4, 6, 8, 10 тоонуудын арифметик дундаж хэд вэ?",
        options: [
            "6",
            "7",
            "8",
            "9"
        ],
        answer: 1
    },

    {
        topic: "Статистик",
        question:
            "2, 3, 3, 5, 8 өгөгдлийн медиан хэд вэ?",
        options: [
            "2",
            "3",
            "4",
            "5"
        ],
        answer: 1
    },

    {
        topic: "Логик",
        question:
            "Дарааллыг үргэлжлүүл: 2, 4, 8, 16, ?",
        options: [
            "20",
            "24",
            "30",
            "32"
        ],
        answer: 3
    },

    {
        topic: "Логик",
        question:
            "3, 6, 11, 18, ? дараагийн тоо хэд вэ?",
        options: [
            "25",
            "27",
            "28",
            "30"
        ],
        answer: 1
    }

];


/* =====================================================
   ТОХИРГОО
   ===================================================== */

const TOTAL_QUESTIONS = 20;

const POINTS_PER_QUESTION = 5;

const TOTAL_SCORE = 100;

let currentQuestion = 0;

let selectedAnswers =
    new Array(TOTAL_QUESTIONS).fill(null);

let timerSeconds = 40 * 60;

let timerInterval;


/* =====================================================
   ELEMENT GETTER
   ===================================================== */

function get(id) {

    return document.getElementById(id);

}


/* =====================================================
   ШАЛГАЛТ ЭХЛҮҮЛЭХ
   ===================================================== */

function startExam() {

    const name =
        get("studentName").value.trim();

    const studentClass =
        get("studentClass").value.trim();

    const code =
        get("studentCode").value.trim();


    if (name === "") {

        alert("Овог нэрээ оруулна уу.");

        get("studentName").focus();

        return;

    }


    if (studentClass === "") {

        alert("Ангиа оруулна уу.");

        get("studentClass").focus();

        return;

    }


    if (code === "") {

        const continueWithoutCode =
            confirm(
                "Сурагчийн код оруулаагүй байна. Үргэлжлүүлэх үү?"
            );

        if (!continueWithoutCode) {

            get("studentCode").focus();

            return;

        }

    }


    get("studentSection")
        .classList.add("hidden");

    get("examSection")
        .classList.remove("hidden");


    currentQuestion = 0;

    selectedAnswers =
        new Array(TOTAL_QUESTIONS)
            .fill(null);


    renderQuestion();

    startTimer();

}


/* =====================================================
   АСУУЛТ ХАРУУЛАХ
   ===================================================== */

function renderQuestion() {

    const q =
        questions[currentQuestion];


    get("questionNumber")
        .textContent =
        `${currentQuestion + 1} / ${TOTAL_QUESTIONS}`;


    get("progressBar")
        .style.width =
        `${((currentQuestion + 1) / TOTAL_QUESTIONS) * 100}%`;


    let html = `

        <div class="question-box">

            <span class="question-topic">
                ${q.topic}
            </span>

            <div class="question-text">

                <strong>
                    ${currentQuestion + 1}.
                </strong>

                ${q.question}

            </div>

            <div class="options">

    `;


    q.options.forEach(
        (option, index) => {

            const selected =
                selectedAnswers[currentQuestion]
                === index
                    ? "selected"
                    : "";


            html += `

                <div
                    class="option ${selected}"
                    onclick="selectAnswer(${index})"
                >

                    <strong>
                        ${String.fromCharCode(
                            65 + index
                        )}.
                    </strong>

                    ${option}

                </div>

            `;

        }
    );


    html += `

            </div>

        </div>

    `;


    get("questionContainer")
        .innerHTML = html;


    get("previousButton")
        .disabled =
        currentQuestion === 0;


    if (
        currentQuestion ===
        TOTAL_QUESTIONS - 1
    ) {

        get("nextButton")
            .classList.add("hidden");

        get("finishButton")
            .classList.remove("hidden");

    } else {

        get("nextButton")
            .classList.remove("hidden");

        get("finishButton")
            .classList.add("hidden");

    }

}


/* =====================================================
   ХАРИУЛТ СОНГОХ
   ===================================================== */

function selectAnswer(index) {

    selectedAnswers[currentQuestion] =
        index;

    renderQuestion();

}


/* =====================================================
   ДАРААГИЙН АСУУЛТ
   ===================================================== */

function nextQuestion() {

    if (
        currentQuestion <
        TOTAL_QUESTIONS - 1
    ) {

        currentQuestion++;

        renderQuestion();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

}


/* =====================================================
   ӨМНӨХ АСУУЛТ
   ===================================================== */

function previousQuestion() {

    if (currentQuestion > 0) {

        currentQuestion--;

        renderQuestion();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

}


/* =====================================================
   TIMER
   ===================================================== */

function startTimer() {

    updateTimer();


    timerInterval =
        setInterval(
            () => {

                timerSeconds--;

                updateTimer();


                if (
                    timerSeconds <= 0
                ) {

                    clearInterval(
                        timerInterval
                    );


                    alert(
                        "⏰ Хугацаа дууслаа! Шалгалт автоматаар дуусна."
                    );


                    finishExam(
                        true
                    );

                }

            },
            1000
        );

}


/* =====================================================
   TIMER DISPLAY
   ===================================================== */

function updateTimer() {

    const minutes =
        Math.floor(
            timerSeconds / 60
        );

    const seconds =
        timerSeconds % 60;


    get("timer")
        .textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

}


/* =====================================================
   ҮНЭЛГЭЭ
   ===================================================== */

function getGrade(score) {

    if (score >= 90) {

        return "A — Маш сайн";

    }

    if (score >= 80) {

        return "B — Сайн";

    }

    if (score >= 70) {

        return "C — Хангалттай сайн";

    }

    if (score >= 60) {

        return "D — Тэнцсэн";

    }

    return "F — Сайжруулах шаардлагатай";

}


/* =====================================================
   ШАЛГАЛТ ДУУСГАХ
   ===================================================== */

function finishExam(autoFinish = false) {

    clearInterval(
        timerInterval
    );


    let correctAnswers = 0;

    let topicResults = {};


    questions.forEach(
        (q, index) => {

            if (
                !topicResults[q.topic]
            ) {

                topicResults[q.topic] = {

                    correct: 0,

                    total: 0

                };

            }


            topicResults[q.topic]
                .total++;


            if (
                selectedAnswers[index]
                === q.answer
            ) {

                correctAnswers++;

                topicResults[q.topic]
                    .correct++;

            }

        }
    );


    const score =
        correctAnswers *
        POINTS_PER_QUESTION;


    const result = {

        date:
            new Date()
                .toLocaleString(
                    "mn-MN"
                ),

        name:
            get("studentName")
                .value
                .trim(),

        className:
            get("studentClass")
                .value
                .trim(),

        code:
            get("studentCode")
                .value
                .trim(),

        correct:
            correctAnswers,

        score:
            score,

        percentage:
            score,

        grade:
            getGrade(score),

        topics:
            topicResults

    };


    /* LOCAL STORAGE */

    saveResult(result);


    /* SCREEN CHANGE */

    get("examSection")
        .classList.add("hidden");

    get("resultSection")
        .classList.remove("hidden");


    /* RESULT */

    showResult(result);


    /* GOOGLE SHEETS */

    sendResultToTeacher(result);


    /* DASHBOARD */

    loadDashboard();


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =====================================================
   LOCAL STORAGE
   ===================================================== */

function saveResult(result) {

    let results =
        JSON.parse(
            localStorage.getItem(
                "mathExamResults"
            ) || "[]"
        );


    results.push(result);


    localStorage.setItem(
        "mathExamResults",
        JSON.stringify(results)
    );

}


/* =====================================================
   GOOGLE SHEETS РҮҮ ИЛГЭЭХ
   ===================================================== */

function sendResultToTeacher(result) {

    const status =
        get("sendStatus");


    if (
        !WEB_APP_URL ||
        WEB_APP_URL.includes(
            "ЭНД_GOOGLE"
        )
    ) {

        status.innerHTML = `

            <div class="result-warning">

                ⚠️ Google Sheets URL
                тохируулаагүй байна.

            </div>

        `;

        return;

    }


    status.innerHTML = `

        <div class="result-warning">

            ⏳ Дүнг багшийн Google Sheets
            рүү илгээж байна...

        </div>

    `;


    const data = {

        name:
            result.name,

        className:
            result.className,

        code:
            result.code,

        correct:
            result.correct,

        score:
            result.score,

        percentage:
            result.percentage,

        grade:
            result.grade

    };


    fetch(
        WEB_APP_URL,
        {

            method: "POST",

            mode: "no-cors",

            headers: {

                "Content-Type":
                    "text/plain;charset=utf-8"

            },

            body:
                JSON.stringify(data)

        }
    )
    .then(
        () => {

            status.innerHTML = `

                <div class="result-success">

                    ✅ Таны дүн багшийн
                    Google Sheets рүү
                    илгээгдлээ.

                </div>

            `;

        }
    )
    .catch(
        error => {

            console.error(
                "Google Sheets error:",
                error
            );


            status.innerHTML = `

                <div class="result-warning">

                    ⚠️ Дүн илгээх үед
                    алдаа гарлаа.
                    Багштай холбогдоно уу.

                </div>

            `;

        }
    );

}


/* =====================================================
   СУРАГЧИЙН ҮР ДҮН
   ===================================================== */

function showResult(result) {

    get("resultSummary")
        .innerHTML = `

        <div class="score">

            ${result.score} / 100

        </div>

        <h3>

            ${escapeHTML(
                result.name
            )}

        </h3>

        <p>

            Анги:

            <strong>
                ${escapeHTML(
                    result.className
                )}
            </strong>

        </p>

        <p>

            Код:

            <strong>
                ${escapeHTML(
                    result.code || "-"
                )}
            </strong>

        </p>

        <p>

            Зөв хариулт:

            <strong>
                ${result.correct} / 20
            </strong>

        </p>

        <p>

            Хувь:

            <strong>
                ${result.percentage}%
            </strong>

        </p>

        <p class="grade">

            Үнэлгээ:

            ${result.grade}

        </p>

        <p>

            Огноо:

            ${result.date}

        </p>

    `;


    createTopicTable(
        result.topics
    );


    drawBarChart(
        result.topics
    );


    drawPieChart(
        result.score
    );

}


/* =====================================================
   TOPIC TABLE
   ===================================================== */

function createTopicTable(topics) {

    let html = `

        <table>

            <thead>

                <tr>

                    <th>Сэдэв</th>

                    <th>Зөв</th>

                    <th>Нийт</th>

                    <th>Хувь</th>

                </tr>

            </thead>

            <tbody>

    `;


    Object.entries(topics)
        .forEach(
            ([topic, data]) => {

                const percent =
                    Math.round(
                        data.correct /
                        data.total *
                        100
                    );


                html += `

                    <tr>

                        <td>
                            ${topic}
                        </td>

                        <td>
                            ${data.correct}
                        </td>

                        <td>
                            ${data.total}
                        </td>

                        <td>
                            ${percent}%
                        </td>

                    </tr>

                `;

            }
        );


    html += `

            </tbody>

        </table>

    `;


    get("topicTable")
        .innerHTML = html;

}


/* =====================================================
   BAR CHART
   ===================================================== */

function drawBarChart(topics) {

    const canvas =
        get("barChart");

    const ctx =
        canvas.getContext("2d");


    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    const entries =
        Object.entries(topics);


    const width =
        canvas.width;

    const bottom =
        290;

    const chartHeight =
        230;

    const barWidth =
        55;

    const gap =
        30;


    ctx.font =
        "12px Arial";


    entries.forEach(
        ([topic, data], index) => {

            const percent =
                data.correct /
                data.total *
                100;


            const barHeight =
                percent /
                100 *
                chartHeight;


            const x =
                40 +
                index *
                (barWidth + gap);


            const y =
                bottom -
                barHeight;


            ctx.fillStyle =
                "#2563eb";


            ctx.fillRect(
                x,
                y,
                barWidth,
                barHeight
            );


            ctx.fillStyle =
                "#172033";


            ctx.textAlign =
                "center";


            ctx.fillText(
                Math.round(percent)
                + "%",
                x +
                barWidth / 2,
                y - 8
            );


            ctx.save();


            ctx.translate(
                x +
                barWidth / 2,
                bottom + 18
            );


            ctx.rotate(
                -Math.PI / 6
            );


            ctx.fillText(
                topic,
                0,
                0
            );


            ctx.restore();

        }
    );


    ctx.strokeStyle =
        "#94a3b8";


    ctx.beginPath();


    ctx.moveTo(
        35,
        bottom
    );


    ctx.lineTo(
        width - 20,
        bottom
    );


    ctx.stroke();

}


/* =====================================================
   PIE CHART
   ===================================================== */

function drawPieChart(score) {

    const canvas =
        get("pieChart");

    const ctx =
        canvas.getContext("2d");


    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    const centerX =
        canvas.width / 2;

    const centerY =
        canvas.height / 2;

    const radius =
        105;


    const correctAngle =
        (score / 100) *
        Math.PI * 2;


    /* ЗӨВ */

    ctx.beginPath();


    ctx.moveTo(
        centerX,
        centerY
    );


    ctx.arc(
        centerX,
        centerY,
        radius,
        -Math.PI / 2,
        -Math.PI / 2 +
        correctAngle
    );


    ctx.closePath();


    ctx.fillStyle =
        "#2563eb";


    ctx.fill();


    /* БУРУУ */

    ctx.beginPath();


    ctx.moveTo(
        centerX,
        centerY
    );


    ctx.arc(
        centerX,
        centerY,
        radius,
        -Math.PI / 2 +
        correctAngle,
        -Math.PI / 2 +
        Math.PI * 2
    );


    ctx.closePath();


    ctx.fillStyle =
        "#dbeafe";


    ctx.fill();


    ctx.fillStyle =
        "#172033";


    ctx.font =
        "bold 24px Arial";


    ctx.textAlign =
        "center";


    ctx.fillText(
        score + "%",
        centerX,
        centerY + 8
    );

}


/* =====================================================
   DASHBOARD
   ===================================================== */

function loadDashboard() {

    const results =
        JSON.parse(
            localStorage.getItem(
                "mathExamResults"
            ) || "[]"
        );


    get("totalStudents")
        .textContent =
        results.length;


    if (
        results.length === 0
    ) {

        get("averageScore")
            .textContent = "0";

        get("highestScore")
            .textContent = "0";

        get("passRate")
            .textContent = "0%";

    } else {

        const total =
            results.reduce(
                (sum, item) =>
                    sum + item.score,
                0
            );


        const average =
            Math.round(
                total /
                results.length
            );


        const highest =
            Math.max(
                ...results.map(
                    item =>
                        item.score
                )
            );


        const passed =
            results.filter(
                item =>
                    item.score >= 60
            ).length;


        const passRate =
            Math.round(
                passed /
                results.length *
                100
            );


        get("averageScore")
            .textContent =
            average;


        get("highestScore")
            .textContent =
            highest;


        get("passRate")
            .textContent =
            passRate + "%";

    }


    createDashboardTable(
        results
    );


    drawStudentChart(
        results
    );

}


/* =====================================================
   DASHBOARD TABLE
   ===================================================== */

function createDashboardTable(results) {

    let html = "";


    results.forEach(
        result => {

            html += `

                <tr>

                    <td>
                        ${escapeHTML(
                            result.date
                        )}
                    </td>

                    <td>
                        ${escapeHTML(
                            result.name
                        )}
                    </td>

                    <td>
                        ${escapeHTML(
                            result.className
                        )}
                    </td>

                    <td>
                        ${escapeHTML(
                            result.code || "-"
                        )}
                    </td>

                    <td>
                        ${result.correct}
                    </td>

                    <td>
                        <strong>
                            ${result.score}
                        </strong>
                    </td>

                    <td>
                        ${result.percentage}%
                    </td>

                    <td>
                        ${escapeHTML(
                            result.grade
                        )}
                    </td>

                </tr>

            `;

        }
    );


    get("dashboardTable")
        .innerHTML =
        html;

}


/* =====================================================
   STUDENT CHART
   ===================================================== */

function drawStudentChart(results) {

    const canvas =
        get("studentChart");

    const ctx =
        canvas.getContext("2d");


    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    if (
        results.length === 0
    ) {

        ctx.fillStyle =
            "#64748b";

        ctx.font =
            "18px Arial";

        ctx.textAlign =
            "center";


        ctx.fillText(
            "Одоогоор шалгалтын дүн алга",
            canvas.width / 2,
            canvas.height / 2
        );


        return;

    }


    const barWidth =
        Math.min(
            60,
            (canvas.width - 80) /
            results.length - 15
        );


    results.forEach(
        (result, index) => {

            const x =
                40 +
                index *
                (barWidth + 20);


            const height =
                result.score /
                100 *
                240;


            const y =
                290 -
                height;


            ctx.fillStyle =
                "#2563eb";


            ctx.fillRect(
                x,
                y,
                barWidth,
                height
            );


            ctx.fillStyle =
                "#172033";


            ctx.font =
                "12px Arial";


            ctx.textAlign =
                "center";


            ctx.fillText(
                result.score,
                x +
                barWidth / 2,
                y - 8
            );


            ctx.fillText(
                result.name.substring(
                    0,
                    8
                ),
                x +
                barWidth / 2,
                315
            );

        }
    );


    ctx.strokeStyle =
        "#94a3b8";


    ctx.beginPath();


    ctx.moveTo(
        30,
        290
    );


    ctx.lineTo(
        canvas.width - 20,
        290
    );


    ctx.stroke();

}


/* =====================================================
   CSV EXPORT
   ===================================================== */

function exportCSV() {

    const results =
        JSON.parse(
            localStorage.getItem(
                "mathExamResults"
            ) || "[]"
        );


    if (
        results.length === 0
    ) {

        alert(
            "Экспортлох дүн алга."
        );

        return;

    }


    let csv =
        "Огноо,Нэр,Анги,Код,Зөв хариулт,Оноо,Хувь,Үнэлгээ\n";


    results.forEach(
        result => {

            csv +=
                `"${result.date}",` +
                `"${result.name}",` +
                `"${result.className}",` +
                `"${result.code}",` +
                `${result.correct},` +
                `${result.score},` +
                `${result.percentage},` +
                `"${result.grade}"\n`;

        }
    );


    const blob =
        new Blob(
            [
                "\ufeff" +
                csv
            ],
            {
                type:
                    "text/csv;charset=utf-8;"
            }
        );


    const url =
        URL.createObjectURL(
            blob
        );


    const link =
        document.createElement("a");


    link.href =
        url;


    link.download =
        "matematik-shalgalt-dun.csv";


    document.body.appendChild(
        link
    );


    link.click();


    link.remove();


    URL.revokeObjectURL(
        url
    );

}


/* =====================================================
   LOCAL RESULTS УСТГАХ
   ===================================================== */

function clearResults() {

    const confirmDelete =
        confirm(
            "Энэ төхөөрөмж дээр хадгалагдсан бүх дүнг устгах уу?\n\nGoogle Sheets дэх дүн устахгүй."
        );


    if (!confirmDelete) {

        return;

    }


    localStorage.removeItem(
        "mathExamResults"
    );


    loadDashboard();

}


/* =====================================================
   HTML SECURITY
   ===================================================== */

function escapeHTML(value) {

    return String(value)
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );

}


/* =====================================================
   PAGE LOAD
   ===================================================== */

loadDashboard();
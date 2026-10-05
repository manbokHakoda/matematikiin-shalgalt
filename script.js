/* =========================================================
   GOOGLE APPS SCRIPT WEB APP URL
========================================================= */

const WEB_APP_URL =
    "https://script.google.com/macros/s/AKfycbyriwDILHXlqF2TOU62MFRW_bTxWL8C3QrwWM9wWXWx2V_nsD9SZtsqcdZlJzktfG-r/exec";


/* =========================================================
   QUESTIONS
========================================================= */

const questions = [

    {
        topic: "Алгебр",
        question: "x² − 5x + 6 = 0 тэгшитгэлийн шийд аль вэ?",
        options: [
            "x = 1, 2",
            "x = 2, 3",
            "x = 3, 4",
            "x = 1, 3"
        ],
        answer: 1
    },

    {
        topic: "Алгебр",
        question: "(a + b)² -ийн зөв задлал аль вэ?",
        options: [
            "a² + b²",
            "a² − 2ab + b²",
            "a² + 2ab + b²",
            "a² + ab + b²"
        ],
        answer: 2
    },

    {
        topic: "Алгебр",
        question: "2x + 7 = 15 бол x хэд вэ?",
        options: [
            "2",
            "4",
            "6",
            "8"
        ],
        answer: 1
    },

    {
        topic: "Алгебр",
        question: "x / 3 = 5 бол x хэд вэ?",
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
        question: "|x| = 7 тэгшитгэл хэдэн шийдтэй вэ?",
        options: [
            "0",
            "2",
            "7",
            "1"
        ],
        answer: 1
    },

    {
        topic: "Тэгшитгэл",
        question: "3(x − 2) = 12 бол x хэд вэ?",
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
        question: "f(x) = 2x + 1 бол f(4) хэд вэ?",
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
        question: "y = 3x − 2 функцийн налалт хэд вэ?",
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
        question: "y = x² функцийн график ямар хэлбэртэй вэ?",
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
        question: "f(x) = x − 5 бол f(5) хэд вэ?",
        options: [
            "0",
            "1",
            "5",
            "10"
        ],
        answer: 1
    },


    {
        topic: "Геометр",
        question: "Гурвалжны дотоод өнцгүүдийн нийлбэр хэд вэ?",
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
        question: "Тэгш өнцөгтийн урт 8 см, өргөн 5 см бол талбай хэд вэ?",
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
        question: "Тойргийн радиус 4 см бол диаметр хэд вэ?",
        options: [
            "2 см",
            "4 см",
            "6 см",
            "8 см"
        ],
        answer: 2
    },

    {
        topic: "Геометр",
        question: "Пифагорын теоремийн зөв хэлбэр аль вэ?",
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
        question: "Шоо нэг удаа орхиход 6 гарах магадлал хэд вэ?",
        options: [
            "1/2",
            "1/3",
            "1/6",
            "1/4"
        ],
        answer: 2
    },

    {
        topic: "Магадлал",
        question: "Зоос нэг удаа шидэхэд сүлд гарах магадлал хэд вэ?",
        options: [
            "1",
            "1/2",
            "1/3",
            "1/4"
        ],
        answer: 1
    },


    {
        topic: "Статистик",
        question: "4, 6, 8, 10 тоонуудын арифметик дундаж хэд вэ?",
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
        question: "2, 3, 3, 5, 8 тоонуудын медиан хэд вэ?",
        options: [
            "2",
            "3",
            "5",
            "8"
        ],
        answer: 1
    },


    {
        topic: "Логик",
        question: "2, 4, 8, 16, ? дарааллын дараагийн тоо хэд вэ?",
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
        question: "3, 6, 11, 18, ? дарааллын дараагийн тоо хэд вэ?",
        options: [
            "25",
            "27",
            "29",
            "31"
        ],
        answer: 1
    }

];


const TOTAL_QUESTIONS = 20;

const POINTS_PER_QUESTION = 5;

const TOTAL_SCORE = 100;


/* =========================================================
   STATE
========================================================= */

let currentQuestion = 0;

let selectedAnswers =
    new Array(TOTAL_QUESTIONS).fill(null);

let timerSeconds = 40 * 60;

let timerInterval = null;

let barChartInstance = null;

let pieChartInstance = null;

let studentChartInstance = null;


/* =========================================================
   HELPER
========================================================= */

function get(id) {
    return document.getElementById(id);
}


/* =========================================================
   START EXAM
========================================================= */

function startExam() {

    const name =
        get("studentName").value.trim();

    const className =
        get("studentClass").value.trim();

    const code =
        get("studentCode").value.trim();


    if (!name || !className || !code) {

        alert(
            "Нэр, анги, сурагчийн кодоо бүрэн оруулна уу."
        );

        return;
    }


    get("studentSection")
        .classList.add("hidden");

    get("examSection")
        .classList.remove("hidden");


    currentQuestion = 0;

    selectedAnswers =
        new Array(TOTAL_QUESTIONS).fill(null);


    timerSeconds = 40 * 60;


    renderQuestion();

    startTimer();
}


/* =========================================================
   RENDER QUESTION
========================================================= */

function renderQuestion() {

    const q =
        questions[currentQuestion];


    get("questionNumber")
        .textContent =
        `Асуулт ${currentQuestion + 1} / ${TOTAL_QUESTIONS}`;


    const progress =
        ((currentQuestion + 1) /
            TOTAL_QUESTIONS) * 100;


    get("progressBar")
        .style.width =
        `${progress}%`;


    let html = `

        <div class="question-card">

            <h3>
                ${currentQuestion + 1}. 
                ${escapeHTML(q.question)}
            </h3>

            <p>
                <strong>Сэдэв:</strong>
                ${escapeHTML(q.topic)}
            </p>

            <br>

    `;


    q.options.forEach(
        (option, index) => {

            const selected =
                selectedAnswers[currentQuestion] === index
                    ? "selected"
                    : "";


            html += `

                <label
                    class="option ${selected}"
                    onclick="selectAnswer(${index})"
                >

                    <input
                        type="radio"
                        name="answer"
                        ${
                            selectedAnswers[currentQuestion] === index
                                ? "checked"
                                : ""
                        }
                    >

                    <span>
                        ${String.fromCharCode(65 + index)}.
                        ${escapeHTML(option)}
                    </span>

                </label>

            `;
        }
    );


    html += `</div>`;


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


/* =========================================================
   SELECT ANSWER
========================================================= */

function selectAnswer(index) {

    selectedAnswers[currentQuestion] =
        index;

    renderQuestion();
}


/* =========================================================
   NEXT
========================================================= */

function nextQuestion() {

    if (
        selectedAnswers[currentQuestion] === null
    ) {

        alert(
            "Энэ асуултад хариулна уу."
        );

        return;
    }


    if (
        currentQuestion <
        TOTAL_QUESTIONS - 1
    ) {

        currentQuestion++;

        renderQuestion();
    }
}


/* =========================================================
   PREVIOUS
========================================================= */

function previousQuestion() {

    if (currentQuestion > 0) {

        currentQuestion--;

        renderQuestion();
    }
}


/* =========================================================
   TIMER
========================================================= */

function startTimer() {

    clearInterval(timerInterval);


    updateTimer();


    timerInterval =
        setInterval(() => {

            timerSeconds--;

            updateTimer();


            if (timerSeconds <= 0) {

                clearInterval(timerInterval);

                alert(
                    "⏰ Таны шалгалтын хугацаа дууслаа."
                );

                finishExam(true);
            }

        }, 1000);
}


/* =========================================================
   UPDATE TIMER
========================================================= */

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


    if (timerSeconds <= 300) {

        get("timer")
            .style.background =
            "#dc2626";

        get("timer")
            .style.color =
            "white";
    }
}


/* =========================================================
   GRADE
========================================================= */

function getGrade(score) {

    if (score >= 90) {
        return "A";
    }

    if (score >= 80) {
        return "B";
    }

    if (score >= 70) {
        return "C";
    }

    if (score >= 60) {
        return "D";
    }

    return "F";
}


/* =========================================================
   FINISH EXAM
========================================================= */

function finishExam(autoFinish = false) {

    clearInterval(timerInterval);


    let correctAnswers = 0;


    const topicResults = {};


    questions.forEach(
        (q, index) => {

            if (!topicResults[q.topic]) {

                topicResults[q.topic] = {
                    correct: 0,
                    total: 0
                };
            }


            topicResults[q.topic].total++;


            if (
                selectedAnswers[index] ===
                q.answer
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
                .toLocaleString("mn-MN"),

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


    saveResult(result);


    get("examSection")
        .classList.add("hidden");


    get("resultSection")
        .classList.remove("hidden");


    showResult(result);


    /*
       GOOGLE SHEETS РҮҮ
       СЭДЭВ ТУС БҮРИЙН
       ГРАФИКИЙН ӨГӨГДӨЛ ИЛГЭЭНЭ
    */

    sendResultToTeacher(result);


    loadDashboard();


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    if (autoFinish) {

        get("sendStatus")
            .textContent =
            "⏰ Хугацаа дууссан тул шалгалт автоматаар дууслаа.";
    }
}


/* =========================================================
   SAVE LOCAL RESULT
========================================================= */

function saveResult(result) {

    const results =
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


/* =========================================================
   TOPIC PERCENTAGES
========================================================= */

function getTopicPercentages(result) {

    const percentages = {};


    Object.entries(
        result.topics
    ).forEach(
        ([topic, data]) => {

            percentages[topic] =
                data.total > 0
                    ? Math.round(
                        (data.correct /
                            data.total) * 100
                    )
                    : 0;

        }
    );


    return percentages;
}


/* =========================================================
   SEND RESULT TO TEACHER
========================================================= */

function sendResultToTeacher(result) {

    if (
        !WEB_APP_URL ||
        WEB_APP_URL.includes(
            "ЭНД_GOOGLE_APPS_SCRIPT_URL"
        )
    ) {

        get("sendStatus")
            .textContent =
            "⚠️ Google Apps Script URL тохируулаагүй байна.";

        return;
    }


    const topicPercentages =
        getTopicPercentages(result);


    /*
       GOOGLE SHEETS РҮҮ ЯВАХ ӨГӨГДӨЛ
    */

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
            result.grade,


        /*
           СЭДЭВ ТУС БҮРИЙН %
        */

        algebra:
            topicPercentages["Алгебр"] || 0,

        equations:
            topicPercentages["Тэгшитгэл"] || 0,

        functions:
            topicPercentages["Функц"] || 0,

        geometry:
            topicPercentages["Геометр"] || 0,

        probability:
            topicPercentages["Магадлал"] || 0,

        statistics:
            topicPercentages["Статистик"] || 0,

        logic:
            topicPercentages["Логик"] || 0

    };


    get("sendStatus")
        .textContent =
        "⏳ Дүн болон сэдвийн графикийн мэдээллийг багш руу илгээж байна...";


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
    .then(() => {

        get("sendStatus")
            .textContent =
            "✅ Дүн болон сэдэв тус бүрийн графикийн мэдээлэл Google Sheets рүү илгээгдлээ.";

    })
    .catch(error => {

        console.error(error);

        get("sendStatus")
            .textContent =
            "❌ Дүн илгээхэд алдаа гарлаа. Google Apps Script URL болон deployment-ээ шалгана уу.";

    });
}


/* =========================================================
   SHOW RESULT
========================================================= */

function showResult(result) {

    get("resultSummary")
        .innerHTML = `

        <div class="result-summary">

            <div class="result-box">
                <span>Сурагч</span>
                <strong>
                    ${escapeHTML(result.name)}
                </strong>
            </div>


            <div class="result-box">
                <span>Зөв хариулт</span>
                <strong>
                    ${result.correct} / 20
                </strong>
            </div>


            <div class="result-box">
                <span>Оноо</span>
                <strong>
                    ${result.score} / 100
                </strong>
            </div>


            <div class="result-box">
                <span>Үнэлгээ</span>
                <strong>
                    ${result.grade}
                </strong>
            </div>

        </div>
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


/* =========================================================
   TOPIC TABLE
========================================================= */

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

                const percentage =
                    data.total > 0
                        ? Math.round(
                            (data.correct /
                                data.total) * 100
                        )
                        : 0;


                html += `

                    <tr>

                        <td>
                            ${escapeHTML(topic)}
                        </td>

                        <td>
                            ${data.correct}
                        </td>

                        <td>
                            ${data.total}
                        </td>

                        <td>
                            ${percentage}%
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


/* =========================================================
   BAR CHART
========================================================= */

function drawBarChart(topics) {

    const labels =
        Object.keys(topics);


    const data =
        Object.values(topics)
            .map(topic => {

                return topic.total > 0
                    ? Math.round(
                        (topic.correct /
                            topic.total) * 100
                    )
                    : 0;
            });


    if (barChartInstance) {

        barChartInstance.destroy();
    }


    barChartInstance =
        new Chart(
            get("barChart"),
            {
                type: "bar",

                data: {

                    labels: labels,

                    datasets: [

                        {
                            label:
                                "Сэдвийн гүйцэтгэл (%)",

                            data: data
                        }

                    ]

                },

                options: {

                    responsive: true,

                    scales: {

                        y: {

                            beginAtZero: true,

                            max: 100,

                            ticks: {

                                callback:
                                    value =>
                                        value + "%"
                            }

                        }

                    }

                }

            }
        );
}


/* =========================================================
   PIE CHART
========================================================= */

function drawPieChart(score) {

    if (pieChartInstance) {

        pieChartInstance.destroy();
    }


    const wrong =
        TOTAL_SCORE - score;


    pieChartInstance =
        new Chart(
            get("pieChart"),
            {

                type: "pie",

                data: {

                    labels: [
                        "Зөв",
                        "Алдсан"
                    ],

                    datasets: [

                        {
                            data: [
                                score,
                                wrong
                            ]
                        }

                    ]

                },

                options: {

                    responsive: true

                }

            }
        );
}


/* =========================================================
   DASHBOARD
========================================================= */

function loadDashboard() {

    const results =
        JSON.parse(
            localStorage.getItem(
                "mathExamResults"
            ) || "[]"
        );


    const total =
        results.length;


    get("totalStudents")
        .textContent =
        total;


    if (total === 0) {

        get("averageScore")
            .textContent = "0";

        get("highestScore")
            .textContent = "0";

        get("passRate")
            .textContent = "0%";

        get("dashboardTable")
            .innerHTML = "";

        return;
    }


    const scores =
        results.map(
            result =>
                Number(result.score) || 0
        );


    const average =
        scores.reduce(
            (a, b) => a + b,
            0
        ) / total;


    const highest =
        Math.max(...scores);


    const passed =
        results.filter(
            result =>
                result.score >= 60
        ).length;


    const passRate =
        Math.round(
            (passed / total) * 100
        );


    get("averageScore")
        .textContent =
        Math.round(average);


    get("highestScore")
        .textContent =
        highest;


    get("passRate")
        .textContent =
        `${passRate}%`;


    createDashboardTable(
        results
    );


    drawStudentChart(
        results
    );
}


/* =========================================================
   DASHBOARD TABLE
========================================================= */

function createDashboardTable(results) {

    let html = "";


    results.forEach(
        (result, index) => {

            html += `

                <tr>

                    <td>
                        ${index + 1}
                    </td>

                    <td>
                        ${escapeHTML(result.name)}
                    </td>

                    <td>
                        ${escapeHTML(result.className)}
                    </td>

                    <td>
                        ${escapeHTML(result.code)}
                    </td>

                    <td>
                        ${result.correct}
                    </td>

                    <td>
                        ${result.score}
                    </td>

                    <td>
                        ${result.percentage}%
                    </td>

                    <td>
                        ${result.grade}
                    </td>

                </tr>

            `;
        }
    );


    get("dashboardTable")
        .innerHTML = html;
}


/* =========================================================
   STUDENT CHART
========================================================= */

function drawStudentChart(results) {

    const labels =
        results.map(
            (result, index) =>
                `${index + 1}. ${result.name}`
        );


    const scores =
        results.map(
            result =>
                result.score
        );


    if (studentChartInstance) {

        studentChartInstance.destroy();
    }


    studentChartInstance =
        new Chart(
            get("studentChart"),
            {

                type: "bar",

                data: {

                    labels: labels,

                    datasets: [

                        {
                            label:
                                "Оноо",

                            data: scores
                        }

                    ]

                },

                options: {

                    responsive: true,

                    scales: {

                        y: {

                            beginAtZero: true,

                            max: 100

                        }

                    }

                }

            }
        );
}


/* =========================================================
   CSV EXPORT
========================================================= */

function exportCSV() {

    const results =
        JSON.parse(
            localStorage.getItem(
                "mathExamResults"
            ) || "[]"
        );


    if (results.length === 0) {

        alert(
            "Экспорт хийх дүн алга байна."
        );

        return;
    }


    let csv =
        "Огноо,Нэр,Анги,Код,Зөв,Оноо,Хувь,Үнэлгээ,Алгебр %,Тэгшитгэл %,Функц %,Геометр %,Магадлал %,Статистик %,Логик %\n";


    results.forEach(result => {

        const topics =
            getTopicPercentages(
                result
            );


        csv += [

            result.date,

            result.name,

            result.className,

            result.code,

            result.correct,

            result.score,

            result.percentage,

            result.grade,

            topics["Алгебр"] || 0,

            topics["Тэгшитгэл"] || 0,

            topics["Функц"] || 0,

            topics["Геометр"] || 0,

            topics["Магадлал"] || 0,

            topics["Статистик"] || 0,

            topics["Логик"] || 0

        ]
        .map(value =>
            `"${String(value)
                .replace(/"/g, '""')}"`
        )
        .join(",") + "\n";

    });


    const blob =
        new Blob(
            ["\ufeff" + csv],
            {
                type:
                    "text/csv;charset=utf-8;"
            }
        );


    const url =
        URL.createObjectURL(blob);


    const link =
        document.createElement("a");


    link.href = url;

    link.download =
        "math_exam_results.csv";


    link.click();


    URL.revokeObjectURL(url);
}


/* =========================================================
   CLEAR LOCAL RESULTS
========================================================= */

function clearResults() {

    const confirmDelete =
        confirm(
            "Орон нутагт хадгалагдсан бүх дүнг устгах уу?"
        );


    if (!confirmDelete) {
        return;
    }


    localStorage.removeItem(
        "mathExamResults"
    );


    loadDashboard();


    alert(
        "Орон нутгийн дүн устгагдлаа."
    );
}


/* =========================================================
   RESTART
========================================================= */

function restartExam() {

    location.reload();
}


/* =========================================================
   ESCAPE HTML
========================================================= */

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


/* =========================================================
   INITIAL DASHBOARD
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        loadDashboard();

    }
);
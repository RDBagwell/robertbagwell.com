/*
    ProgressBar
    Created by: Robert Bagwell
    Date: 05-17-2019
*/
/****************** Start Test Data ******************/
let GraphData = [
    { title: "HTML/CSS", score: 100 },
    { title: "PHP", score: 100 },
    { title: "JavaScript", score: 99 },
    { title: "Jquery", score: 95 },
    { title: "NodeJS", score: 90 },
    { title: "SQL/MySQL", score: 80 },
    { title: "React", score: 65 },
    { title: "C#", score: 13 },
    { title: ".NET", score: 10 },
    { title: "Python", score: 10 }

];
/****************** End Test Data ******************/
function Graphs(container, graphObj) {
    if (typeof container != "string")
        throw new Error('container is not string.');

    if (typeof graphObj != "object")
        throw new Error('graphObj needs to be an Object.');

    let _graphDivHTML = "";
    let _graphData = graphObj;
    let _graphDiv = $(container);

    let makeGraph = function () {
        _graphData.forEach(function (data) {
            _graphDivHTML += `
            <div class="graphcontent">
                <div class="progress-circle">
                    <span class="percentage-numbers">${data.score}%</span>
                    <div class="left-half-clipper">
                        <div class="first50-bar"></div>
                        <div class="value-bar"></div>
                    </div>
                </div>
                <div class="graph-title">${data.title}</div>
            </div>`;
        });
        _graphDiv[0].innerHTML = _graphDivHTML;
        fillGraph();
    }

    let fillGraph = function () {
        let percentage_number = $(".percentage-numbers");
        let progress_circle = $(".progress-circle");
        let first50 = $(".first50-bar");
        let valueBar = $(".value-bar");
        let font = $(".progress-circle span");
        for (let i = 0; i < percentage_number.length; i++) {
            const element = percentage_number[i];
            let percentage = element.innerHTML.replace("%", "");
            progress_circle[i].classList.add('p' + percentage);
            if (percentage > 50) {
                progress_circle[i].classList.add('over50');
            }
            if (percentage > 33) {
                first50[i].style.backgroundColor = "#ffeb00";
                valueBar[i].style.borderColor = "#ffeb00";
                font[i].style.color = "#ffeb00";
            }
            if (percentage > 66) {
                first50[i].style.backgroundColor = "#28a745";
                valueBar[i].style.borderColor = "#28a745";
                font[i].style.color = "#28a745";
            }
        }
    }

    this.drawGraphs = function () {
        makeGraph();
    }
}

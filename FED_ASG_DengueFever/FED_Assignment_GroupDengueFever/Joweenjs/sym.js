// JavaScript source code
var Ques1 = new Array();
Ques1["1"] = 0;
Ques1["2"] = 0;
Ques1["3"] = 20;

var Ques2 = new Array();
Ques2["1"] = 0;
Ques2["2"] = 0;
Ques2["3"] = 20;

var Ques3 = new Array();
Ques3["1"] = 0;
Ques3["2"] = 20;
Ques3["3"] = 0;

var Ques4 = new Array();
Ques4["1"] = 20;
Ques4["2"] = 0;
Ques4["3"] = 0;

var Ques5 = new Array();
Ques5["1"] = 0;
Ques5["2"] = 0;
Ques5["3"] = 20;

function scoreq1() {
    var q1score = 0;
    var theForm = document.forms["form1"];
    var q1ans = theForm.elements["q1"];
    for (var i = 0; i < q1ans.length; i++) {
        if (q1ans[i].checked) {
            q1score = Ques1[q1ans[i].value];
            break;
        }
    }
    return q1score;
}

function scoreq2() {
    var q2score = 0;
    var theForm = document.forms["form1"];
    var q2ans = theForm.elements["q2"];
    for (var i = 0; i < q2ans.length; i++) {
        if (q2ans[i].checked) {
            q2score = Ques2[q2ans[i].value];
            break;
        }
    }
    return q2score;
}

function scoreq3() {
    var q3score = 0;
    var theForm = document.forms["form1"];
    var q3ans = theForm.elements["q3"];
    for (var i = 0; i < q3ans.length; i++) {
        if (q3ans[i].checked) {
            q3score = Ques3[q3ans[i].value];
            break;
        }
    }
    return q3score;
}

function scoreq4() {
    var q4score = 0;
    var theForm = document.forms["form1"];
    var q4ans = theForm.elements["q4"];
    for (var i = 0; i < q4ans.length; i++) {
        if (q4ans[i].checked) {
            q4score = Ques4[q4ans[i].value];
            break;
        }
    }
    return q4score;
}

function scoreq5() {
    var q5score = 0;
    var theForm = document.forms["form1"];
    var q5ans = theForm.elements["q5"];
    for (var i = 0; i < q5ans.length; i++) {
        if (q5ans[i].checked) {
            q5score = Ques5[q5ans[i].value];
            break;
        }
    }
    return q5score;
}

function calculateTotal() {
    var score_q1 = scoreq1();
    var score_q2 = scoreq2();
    var score_q3 = scoreq3();
    var score_q4 = scoreq4();
    var score_q5 = scoreq5();

    var totalscore = score_q1 + score_q2 + score_q3 + score_q4 + score_q5;

    var divObj = document.getElementById("result");
    divObj.style.display = "block";
    divObj.innerHTML = "Total score:" + totalscore + "/100";
}

function reset() {

    document.getElementById("form1").reset();

}



/**
 * Created by mwq on 2015/3/28.
 */
function analyze() {
    var base     = "http://ltpapi.voicecloud.cn/analysis/?";
    var api_key  = "r3V2w3W9bXtZNXDIbqqlbY0IOPZpQh2bdhOupgcK";
    var element  = document.getElementById("pattern");
    var pattern  = 'all';
    var text     = removeBrace(document.getElementById("text").value);
    var format   = "json";
    var uri      = (base
    + "api_key="   + api_key   + "&text="   + text
    + "&pattern="  + pattern   + "&format=" + format
    + "&callback=" + "successCallBack");
    $('#hgdApi').remove();
    var script = document.createElement('script');
    script.setAttribute('src', uri);
    script.setAttribute('id','hgdApi');
    document.getElementsByTagName('head')[0].appendChild(script);
    $('#originText').html('分析中，请耐心等候');
    $('#questions').html('');
}

function successCallBack(d) {
    $('#originText').html('');
    var paragraph = d[0];
    for(var sentenceIndex = 0; sentenceIndex<paragraph.length; sentenceIndex++){
        var sentence = paragraph[sentenceIndex];
        var p = document.createElement('p');
        p.className = "sentence";
        p.innerHTML = getSentenceContent(sentence);
        //console.log(JSON.stringify(sentence));
        $('#originText').append(p);
        (function(){
            var s = sentence;
            p.onclick = function(e) {
                questions = generateQuestionBySentence(s);
                showQuestions(questions);
                $('p.sentence').removeClass('sentence-selected');
                e.target.className = "sentence sentence-selected"
            };
        })();
        $('.sentence')[0].click();
    }
}

function generateQuestionBySentence(sentence) {
    var questions = [];
    var srlQuestions = srlGenerateQuestionsBySentence(sentence);
    var posQuestions = posGenerateQuestionsBySentence(sentence);
    var lastQuestions = lastQuestionsBySentence(sentence);
    var mqQuestions = mqQuestion(sentence);
    for(var i = 0; i<srlQuestions.length; i++){
        questions = pushQuestion(questions,srlQuestions[i]);
    }
    for(i = 0; i<posQuestions.length; i++) {
        questions = pushQuestion(questions,posQuestions[i]);
    }
    for(i = 0; i<lastQuestions.length; i++) {
        questions = pushQuestion(questions,lastQuestions[i]);
    }
    for(i = 0; i<mqQuestions.length; i++) {
        questions = pushQuestion(questions,mqQuestions[i]);
    }
    return questions;
}

function showQuestions(questions) {
    $('#questions').html('');
    if(questions.length==0) {
        var alertDiv = $('<div></div>');
        alertDiv.addClass('alert');
        alertDiv.addClass('alert-warning');
        alertDiv.html('抱歉，该句不能产生问题');
        $('#questions').append(alertDiv);
    }
    for(var i = 0; i<questions.length; i++){
        var question = questions[i];
       var p = document.createElement('p');
        p.innerHTML = question.text;
        var label = document.createElement('span');
        label.innerHTML = question.label;
        label.className = "label label-info";
        p.appendChild(label);
        $("#questions").append(p);
    }
}

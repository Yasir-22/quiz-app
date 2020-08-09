function check () {
    var score=0;
    var answere1=document.getElementById('q1-a3');
    var q1_ans1=document.getElementById('q1-a1');
    var q1_ans2=document.getElementById('q1-a2');
    var q1_ans4=document.getElementById('q1-a4');
    if(answere1.checked===true){
        score++
        alert('your answere 1 is right');
    }
    else{
        alert('your ansere is wrong');

    }
    var answere2=document.getElementById('q2-a2');
    var q2_ans1=document.getElementById('q1-a1');
    var q2_ans3=document.getElementById('q2-a3');
    var q2_ans4=document.getElementById('q1-a4');
    if(answere2.checked===true){
        score++
        alert('your answere 2 is right');
    }
    else{
        alert('your ansere is wrong');

    }
    var answere3=document.getElementById('q3-a4');
    var q3_ans1=document.getElementById('q3-a1');
    var q3_ans2=document.getElementById('q3-a2');
    var q3_ans3=document.getElementById('q3-a3');
    if(answere3.checked===true){
        score++
        alert('your answere 3 is right');
    }
    else{
        alert('your ansere is wrong');

    }
    alert("your score is "+score);


}

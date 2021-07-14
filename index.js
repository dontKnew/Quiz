
// trying to made Firebase Configraution Security themeselves:| 
eval(function(m,c,h){function z(i){return(i< 62?'':z(parseInt(i/62)))+((i=i%62)>35?String.fromCharCode(i+29):i.toString(36))}for(var i=0;i< m.length;i++)h[z(i)]=m[i];function d(w){return h[w]?h[w]:w;};return c.replace(/\b\w+\b/g,d);}('var||firebaseConfig|apiKey|AIzaSyCe5YGgNI5of|ETTuwswjZuoy398JqR4bs|authDomain|first|project|e37f1|firebaseapp|com|databaseURL|https|default|rtdb|firebaseio|projectId|storageBucket|appspot|messagingSenderId|1055847141483|appId|web|499093e1c47fee13af212e'.split('|'),'0 2={3:"4-5",6:"7-8-9.a.b",c:"d://7-8-9-e-f.g.b",h:"7-8-9",i:"7-8-9.j.b",k:"l",m:"1:l:n:o"};',{}))

let questionArray = [
{qTitle:"What is Synonyms of this word '<b>Slothful</b>' ?", qAnswer1:'active', qAnswer2:'lazy',qAnswer3:'stress', qAnswer4:'None of above', answer:'lazy'},
{ qTitle:"Meaning of word '<b> Slander </b>' ? ", qAnswer1:'defamation', qAnswer2:'praise',qAnswer3:'reputation', qAnswer4:'nothing', answer:'defamation'},
{ qTitle:"What is Antonyms  of this word '<b>Slacken </b>'? ", qAnswer1:'quicken', qAnswer2:'relax',qAnswer3:'loose', qAnswer4:'steering', answer:'quicken'},
{ qTitle:"What is meaning of <b> 'Skeptic' </b>? ", qAnswer1:'optimist', qAnswer2:'devotee',qAnswer3:'doubter', qAnswer4:'i dont knew yaar', answer:'devotee'},
{ qTitle:"What is Synonyms of this word <b> 'cynic'</b>?", qAnswer1:'believer', qAnswer2:'skeptic',qAnswer3:'mate', qAnswer4:'seek', answer:'skeptic'},
{ qTitle:"What is meaning of   <b> 'Reckless'</b>?", qAnswer1:'careful', qAnswer2:'careless',qAnswer3:'trust', qAnswer4:'prudent', answer:'carelss'},
{ qTitle:"What is  the same meaning of this word <b> 'Obscure'</b>?", qAnswer1:'Recondite', qAnswer2:'familier',qAnswer3:'rectitude', qAnswer4:'nothing', answer:'Recondite'},
{ qTitle:"What is mean of  <b> 'Resist'</b>?", qAnswer1:'comply', qAnswer2:'captures',qAnswer3:'combat', qAnswer4:'unknown', answer:'combat'},
];
let userName = document.getElementById('user_name').value;
let userEmail = document.getElementById('user_email').value;
let startPage = document.querySelector('.startPage');
let nexBtn = document.querySelector('.nextBtn');
let createDiv = document.createElement('div');
var endPage = document.querySelector('.endPageBody');
var clearTime;
let dateFunction = new Date();
let date = `${dateFunction.getUTCDay()}-${dateFunction.getMonth()}-${dateFunction.getFullYear()}`;
let RandomNumber = Math.floor(Math.random()*10000)

let user_nameQuiz = document.querySelector('#user_name').value;
let user_emailQuiz = document.querySelector('#user_email').value;
let questionArray1 = [];
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
var userRef  = database.ref(`English_Quiz/${user_nameQuiz+RandomNumber}`);
function startQuiz(){
    let user_nameQuiz = document.querySelector('#user_name').value;
    let user_emailQuiz = document.querySelector('#user_email').value;
    if(user_nameQuiz == "" || user_emailQuiz == ""){
        alert('do not leave blank field.');
        return false;
    }
    // firebase
    userRef.set({
        user_nameQuiz:user_nameQuiz,
        user_emailQuiz:user_emailQuiz,
        user_scoreQuiz : "",
        user_dateQuiz : date,
    });
    if(questionArray.length > 0){          
        let randomNum = Math.floor(Math.random()*questionArray.length);
    createDiv.setAttribute('class', 'questionPage');
    // createDiv.appendChild(createNode);
    document.body.appendChild(createDiv);
    createDiv.innerHTML = `<h3>${questionArray[randomNum].qTitle}</h2>
            <div class="answerBody">
                <p class="timeLeft">Time Left : <span>25</span></p>
                <div class="answerBox">
                    <div>
                        <input type="radio" name="answer" onclick="selectAnswer(this)" value='${questionArray[randomNum].qAnswer1}' data-answer='${questionArray[randomNum].answer}' data-questionIndex='${randomNum}'><span class="answer1" id ="answer">${questionArray[randomNum].qAnswer1}</span></input>
                    </div>
                    <div>
                        <input type="radio" name="answer" onclick="selectAnswer(this)" value='${questionArray[randomNum].qAnswer2}' data-answer='${questionArray[randomNum].answer}'><span class="answer2" id="answer">${questionArray[randomNum].qAnswer2}</span></input>
                    </div>
                    <div>
                        <input type="radio" name="answer" onclick="selectAnswer(this)" value='${questionArray[randomNum].qAnswer3}' data-answer='${questionArray[randomNum].answer}'><span class="answer3" id="answer">${questionArray[randomNum].qAnswer3}</span></input>
                    </div>
                    <div>
                        <input type="radio" name="answer " onclick="selectAnswer(this)" value='${questionArray[randomNum].qAnswer4}' data-answer='${questionArray[randomNum].answer}'><span class="answer4 id="answer">${questionArray[randomNum].qAnswer4}</span></input>
                    </div>
                </div>
            </div>
            <div class="nextBtn1">
                <input type="button" value="Next" class="nextBtn next" onclick="startQuiz()">
                <input type="hidden" value="Finish" onclick="finish()"  class="nextBtn finish" >
            </div>`;
        let questionPage = document.querySelector('.questionPage');
        let countNumber  = document.querySelector('.timeLeft');
        startPage.style.display = "none";
        questionPage.style.display = "block";
        setTimeout(function(){questionPage.style.marginLeft = "0";},1)
        //    TimeLeft Start
        var timeLeft = 25;
            counting = ()=>{
                if (timeLeft>0){
                    timeLeft--;  
                }
                if(timeLeft==10){
                    countNumber.style.color = 'rgb(193, 7, 7)';
                }
                // console.log(timeLeft);
                countNumber.innerHTML = `Time left : <span>${timeLeft} </span>`;
            };
            clearTime = setInterval(counting,1000);
            let ok = questionArray.splice(randomNum,1);
            questionArray1.push(ok);
            if(questionArray.length == 0 ){
            let next = document.querySelector('.next');
            let finish = document.querySelector('.finish');
            next.setAttribute('type','hidden');
            finish.setAttribute('type','button');
            }
        }else {
        alert("no question available\nplease the page for again play quiz"); 
    } 
    let btnStyle  = {"opacity":"0","color":"red"};
    Object.assign(document.querySelector('.nextBtn').style,btnStyle);
}

let countMarks  = 0;
let score1 = [];
function selectAnswer(getAnswer){
     let countNumber  = document.querySelector('.timeLeft');
     let answerBox = document.querySelector('.answerBox');
     let  userAnswer = getAnswer.value; 
     let allRadioInput = document.querySelectorAll('input[type=radio]');
     let  correctAnswer= getAnswer.getAttribute('data-answer');
    //  let  questionIndex= getAnswer.getAttribute('data-questionIndex');
    //  console.log(`this is your answer ${userAnswer.toLowerCase()} and question id : ${correctAnswer.toLowerCase()}`);
     if(userAnswer.toLowerCase()!==correctAnswer.toLowerCase()){
         answerBox.style.boxShadow = '-2px -2px 5px red, 2px 2px 5px red';
        countNumber.innerHTML= `<br>Correct Answer : <span>${correctAnswer} </span>`;
        score1.push(countMarks++);
     }else {
        answerBox.style.boxShadow = '2px 2px 5px green, -2px -2px 5px green';
     }
     clearInterval(clearTime);
     for(i=0; i < allRadioInput.length; i++){
           allRadioInput[i].disabled = true;
     }
     let btnStyle  = {"opacity":"1","color":"green"};
     Object.assign(document.querySelector('.nextBtn').style,btnStyle);
}
let increment = 0;
function userTable(name,score,date){
    document.querySelector('.userTable').innerHTML += 
             `<tr>
                <td>${1+increment++}</td>
                <td>${name}</td>
                <td>${score}</td>
                <td>${date}</td>
            </tr>`;
    }
let cheerArray = ['Good Job','Try to get 100% :p ', 'wahh janeman tum bhout padhuke nikale','I thought, tere bas ki nhi hai, but tum to... mind blowing:D ','good score, keep it up  my darling, <br> One Day you will speak english like angreji ka baccha ;p','ohh hoo tum bade heavy english driver nikale :O','try again broh, <br>may be you will be get to much score more then yet :)']
function finish(){
    document.querySelector('.questionPage').style.display = "none";
    endPage.style.display ='block';
    setTimeout(function (){
        endPage.style.marginLeft ='0';
    },100)
    userRef.update({
            user_scoreQuiz:score1.length,
    });
    document.querySelector('.score').innerHTML = `You Score : ${score1.length*2}`;
    document.querySelector('.cheer').innerHTML = `${cheerArray[Math.floor(Math.random()*cheerArray.length)]}`;
    /*database.ref('English_Quiz').once('value', function(snapshot){
        snapshot.forEach(function(ChildSnapshot){
            let name = ChildSnapshot.val().user_nameQuiz;
            let score = ChildSnapshot.val().user_scoreQuiz;
            let date = ChildSnapshot.val().user_dateQuiz;
            userTable(name,score,date);
        });
    });*/
}

function homePage(){
    console.log(`new  array : ${questionArray1.length}`);
    console.log(`old  array : ${questionArray.length}`);
    startPage.style.marginLeft = "-500vw";
    endPage.style.display ='none';
    setTimeout(function(){
        startPage.style.display = "block";
        startPage.style.marginLeft = "0";
    },200)
    // for (let i=0; i < questionArray1.length; i++){
    //     questionArray.push(questionArray1[i]);
    //     questionArray1.shift();
    //     console.log(i);
    // }
    // console.log(`new  array after shift to old array : ${questionArray1.length}`);
    // console.log(` old array after shift from new array : ${questionArray.length}`);
    // console.log(questionArray1[0]);
    // console.log(questionArray[0]);
}

onload  =   database.ref('English_Quiz').once('value', function(snapshot){
            snapshot.forEach(function(ChildSnapshot){
            let name = ChildSnapshot.val().user_nameQuiz;
            let score = ChildSnapshot.val().user_scoreQuiz;
            let date = ChildSnapshot.val().user_dateQuiz;
            userTable(name,score,date);
        });
    });

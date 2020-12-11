const questionSection = document.getElementById("question-section")
const intro =document.getElementById("intro")
const body =document.querySelector("body")
const container = document.getElementById("container")
const btnNext = document.getElementById("btn-next")
const btnSubmit = document.getElementById("btn-submit")
const timerBox = document.getElementById("timer-box")
const minute = document.getElementById("minute")
const secondTenth = document.getElementById("second-tenth")
const secondUnit = document.getElementById("second-unit")
const btnStart = document.getElementById("btn-start")


const q1 = `
    <h1 id="quest-num" class="quest-num">Question 1</h1>
    <p id="question" class="question">What is the coldest country in Africa?</p>
    <ol id="option-box" class="option-box">
        <li id="opt1" class="option">A<input onclick="updateAnswer()" name="choice" type="radio" value="wrong">Kenya</li>
        <li id="opt2" class="option">B<input onclick="updateAnswer()" name="choice" type="radio" value="wrong">South Africa</li>
        <li id="opt3" class="option">C<input onclick="updateAnswer()" name="choice" type="radio" value="correct">Lesotho</li>
        <li id="opt4" class="option">D<input onclick="updateAnswer()" name="choice" type="radio" value="wrong">Namibia</li>
    </ol>          

`

const q2 = `
<h1 id="quest-num" class="quest-num">Question 2</h1>
<p id="question" class="question">What year did the second world war start and when did it end</p>
<ol id="option-box" class="option-box">
    <li id="opt1" class="option">A<input onclick="updateAnswer()" name="choice" type="radio" value="wrong">1925 - 1931</li>
    <li id="opt2" class="option">B<input onclick="updateAnswer()" name="choice" type="radio" value="correct">1939 - 1945</li>
    <li id="opt3" class="option">C<input onclick="updateAnswer()" name="choice" type="radio" value="wrong">1947 - 1953</li>
    <li id="opt4" class="option">D<input onclick="updateAnswer()" name="choice" type="radio" value="wrong">1960 - 1966</li>
</ol>
`

const q3 = `
<h1 id="quest-num" class="quest-num">Question 3</h1>
<p id="question" class="question">In the movie Money heist, what names were the robbers given?</p>
<ol id="option-box" class="option-box">
    <li id="opt1" class="option">A<input onclick="updateAnswer()" name="choice" type="radio" value="wrong">names of villages</li>
    <li id="opt2" class="option">B<input onclick="updateAnswer()" name="choice" type="radio" value="wrong">names of countries</li>
    <li id="opt3" class="option">C<input onclick="updateAnswer()" name="choice" type="radio" value="wrong">names of cars</li>
    <li id="opt4" class="option">D<input onclick="updateAnswer()" name="choice" type="radio" value="correct">names of cities</li>
</ol>
`

const q4 = `
<h1 id="quest-num" class="quest-num">Question 4</h1>
<p id="question" class="question">What is the largest Carnivorous animal on land?</p>
<ol id="option-box" class="option-box">
    <li id="opt1" class="option">A<input onclick="updateAnswer()" name="choice" type="radio" value="wrong">Grizzly bear</li>
    <li id="opt2" class="option">B<input onclick="updateAnswer()" name="choice" type="radio" value="wrong">African Lion</li>
    <li id="opt3" class="option">C<input onclick="updateAnswer()" name="choice" type="radio" value="correct">Polar bear</li>
    <li id="opt4" class="option">D<input onclick="updateAnswer()" name="choice" type="radio" value="wrong">Siberian Tiger</li>
</ol>
`

const q5 = `
<h1 id="quest-num" class="quest-num">Question 5</h1>
<p id="question" class="question">What is the longest river in the world?</p>
<ol id="option-box" class="option-box">
    <li id="opt1" class="option">A<input onclick="updateAnswer()" name="choice" type="radio" value="correct">Nile River</li>
    <li id="opt2" class="option">B<input onclick="updateAnswer()" name="choice" type="radio" value="wrong">Yangtze River</li>
    <li id="opt3" class="option">C<input onclick="updateAnswer()" name="choice" type="radio" value="wrong">Amazon River</li>
    <li id="opt4" class="option">D<input onclick="updateAnswer()" name="choice" type="radio" value="wrong">Mississippi River</li>
</ol>
`

const q6 = `
<h1 id="quest-num" class="quest-num">Question 6</h1>
<p id="question" class="question">What's the name of the first man that walked on the moon?</p>
<ol id="option-box" class="option-box">
    <li id="opt1" class="option">A<input onclick="updateAnswer()" name="choice" type="radio" value="wrong">David Scott</li>
    <li id="opt2" class="option">B<input onclick="updateAnswer()" name="choice" type="radio" value="wrong">James Irwin</li>
    <li id="opt3" class="option">C<input onclick="updateAnswer()" name="choice" type="radio" value="wrong">Alan Shepard</li>
    <li id="opt4" class="option">D<input onclick="updateAnswer()" name="choice" type="radio" value="correct">Neil Armstrong</li>
</ol>
`

const q7 = `
<h1 id="quest-num" class="quest-num">Question 7</h1>
<p id="question" class="question">Who won the most awards in the 2020 grammy awards ceremony?</p>
<ol id="option-box" class="option-box">
    <li id="opt1" class="option">A<input onclick="updateAnswer()" name="choice" type="radio" value="wrong">Taylor Swift</li>
    <li id="opt2" class="option">B<input onclick="updateAnswer()" name="choice" type="radio" value="correct">Billie Eilish</li>
    <li id="opt3" class="option">C<input onclick="updateAnswer()" name="choice" type="radio" value="wrong">Adele</li>
    <li id="opt4" class="option">D<input onclick="updateAnswer()" name="choice" type="radio" value="wrong">Ed Sheeran</li>
</ol>
`

const q8 = `
<h1 id="quest-num" class="quest-num">Question 8</h1>
<p id="question" class="question">What is the fastest animal in the world?</p>
<ol id="option-box" class="option-box">
    <li id="opt1" class="option">A<input onclick="updateAnswer()" name="choice" type="radio" value="wrong">Cheetah</li>
    <li id="opt2" class="option">B<input onclick="updateAnswer()" name="choice" type="radio" value="correct">Peregrine falcon</li>
    <li id="opt3" class="option">C<input onclick="updateAnswer()" name="choice" type="radio" value="wrong">Sail fish</li>
    <li id="opt4" class="option">D<input onclick="updateAnswer()" name="choice" type="radio" value="correct">Gazzel</li>
</ol>
`

const q9 = `
<h1 id="quest-num" class="quest-num">Question 9</h1>
<p id="question" class="question">Which of these countries is known as the land of the midnight sun?</p>
<ol id="option-box" class="option-box">
    <li id="opt1" class="option">A<input onclick="updateAnswer()" name="choice" type="radio" value="correct">Iceland</li>
    <li id="opt2" class="option">B<input onclick="updateAnswer()" name="choice" type="radio" value="wrong">England</li>
    <li id="opt3" class="option">C<input onclick="updateAnswer()" name="choice" type="radio" value="wrong">Switzerland</li>
    <li id="opt4" class="option">D<input onclick="updateAnswer()" name="choice" type="radio" value="wrong">Poland</li>
</ol>
`

const q10 = `
    <h1 id="quest-num" class="quest-num">Question 10</h1>
    <p id="question" class="question">In What year did Nelson Mandela die?</p>
    <ol id="option-box" class="option-box">
        <li id="opt1" class="option">A<input onclick="updateAnswer()" name="choice" type="radio" value="wrong">2014</li>
        <li id="opt2" class="option">B<input onclick="updateAnswer()" name="choice" type="radio" value="wrong">2011</li>
        <li id="opt3" class="option">C<input onclick="updateAnswer()" name="choice" type="radio" value="correct">2013</li>
        <li id="opt4" class="option">D<input onclick="updateAnswer()" name="choice" type="radio" value="wrong">2010</li>
    </ol>
`

const q11 = `
    <h1 id="quest-num" class="quest-num">Question 11</h1>
    <p id="question" class="question">What Youtube video has the most views?</p>
    <ol id="option-box" class="option-box">
        <li id="opt1" class="option">A<input onclick="updateAnswer()" name="choice" type="radio" value="correct">Baby shark by Pinkfong</li>
        <li id="opt2" class="option">B<input onclick="updateAnswer()" name="choice" type="radio" value="wrong">Despacito by Luis Fonsi</li>
        <li id="opt3" class="option">C<input onclick="updateAnswer()" name="choice" type="radio" value="wrong">Shape of You by Ed Sheeran</li>
        <li id="opt4" class="option">D<input onclick="updateAnswer()" name="choice" type="radio" value="wrong">See you again by Wiz Khalifa</li>
    </ol>
`

const q12 = `
    <h1 id="quest-num" class="quest-num">Question 12</h1>
    <p id="question" class="question">What dog breed has the best sense of smell?</p>
    <ol id="option-box" class="option-box">
        <li id="opt1" class="option">A<input onclick="updateAnswer()" name="choice" type="radio" value="wrong">German Shepherd</li>
        <li id="opt2" class="option">B<input onclick="updateAnswer()" name="choice" type="radio" value="wrong">Pit Bull</li>
        <li id="opt3" class="option">C<input onclick="updateAnswer()" name="choice" type="radio" value="wrong">Rottweiler</li>
        <li id="opt4" class="option">D<input onclick="updateAnswer()" name="choice" type="radio" value="correct">Bloodhound</li>
    </ol>
`

const q13 = `
    <h1 id="quest-num" class="quest-num">Question 13</h1>
    <p id="question" class="question">Which of These European country has won the most worldcup titles?</p>
    <ol id="option-box" class="option-box">
        <li id="opt1" class="option">A<input onclick="updateAnswer()" name="choice" type="radio" value="wrong">Spain</li>
        <li id="opt2" class="option">B<input onclick="updateAnswer()" name="choice" type="radio" value="correct">Italy</li>
        <li id="opt3" class="option">C<input onclick="updateAnswer()" name="choice" type="radio" value="wrong">France</li>
        <li id="opt4" class="option">D<input onclick="updateAnswer()" name="choice" type="radio" value="wrong">England</li>
    </ol>
`

const q14 = `
    <h1 id="quest-num" class="quest-num">Question 14</h1>
    <p id="question" class="question">Who is the vice president of the united states under Donald Trump?</p>
    <ol id="option-box" class="option-box">
        <li id="opt1" class="option">A<input onclick="updateAnswer()" name="choice" type="radio" value="wrong">Al Gore</li>
        <li id="opt2" class="option">B<input onclick="updateAnswer()" name="choice" type="radio" value="wrong">Dick Cheney</li>
        <li id="opt3" class="option">C<input onclick="updateAnswer()" name="choice" type="radio" value="correct">Mike Pence</li>
        <li id="opt4" class="option">D<input onclick="updateAnswer()" name="choice" type="radio" value="wrong">Jon Kerry</li>
    </ol>
`

const q15 = `
    <h1 id="quest-num" class="quest-num">Question 15</h1>
    <p id="question" class="question">Which of the following is the finest?<br> If dem born you well, no choose option C, you go just fail woefully</p>
    <ol id="option-box" class="option-box">
        <li id="opt1" class="option">A<input onclick="updateAnswer()" name="choice" type="radio" value="wrong"><img src="img/JB.jpeg"></li>
        <li id="opt2" class="option">B<input onclick="updateAnswer()" name="choice" type="radio" value="wrong"><img src="img/TJ.jpeg"></li>
        <li id="opt3" class="option">C<input onclick="updateAnswer()" name="choice" type="radio" value="correct"><img src="img/Adriel.jpg"></li>
        <li id="opt4" class="option">D<input onclick="updateAnswer()" name="choice" type="radio" value="wrong"><img src="img/guy.jpeg"></li>
    </ol>
`

const questArr = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15]
let num = 0
let finalAnswer;
let score = 0
let minVal = 6
let secTenth = 2
let secUnit = 5
let activateInterval = false


questionSection.style.display = "none"

btnStart.addEventListener("click", ()=>{
    intro.style.display = "none"
    questionSection.style.display = "flex"
    activateInterval = true
   
})

let timer = setInterval(()=>{

    if(!activateInterval){
        return
    }
   
    if(minute.innerText === "0" && secondTenth.innerText === "0" && secondUnit.innerText === "0"){
        
        computeResult()
        return
    }
    
    if(secUnit === -1){
        secUnit = 9
        secTenth -= 1
        
    }
    if(secTenth === -1){
        minVal -= 1
        secTenth = 5
    }

    if(minVal === 0){
        timerBox.style.color = "red"
    }
    
    minute.innerText = minVal
    secondTenth.innerText = secTenth
    secondUnit.innerText = secUnit
    secUnit -= 1
}, 1000)


container.innerHTML = questArr[num]


btnNext.addEventListener("click", changeQuestion)
btnSubmit.addEventListener("click", computeResult)

function changeQuestion(){
    if(num === questArr.length-1){
        computeResult()
        return
    }
    updateScore()   
    num += 1
    container.innerHTML = questArr[num]
   
}


function updateAnswer(){
    finalAnswer = event.target.value
    
}

function updateScore(){
    if(finalAnswer === "correct"){
        score += 1
    }
    else{score += 0}

    finalAnswer = undefined
}

function computeResult(){
    clearInterval(timer)

    let result = `
        <section>
            <div>
                <h1 class="result-heading">Total Score</h1>
                <div class="result-score"><span id="user-score">${score}</span>/15</div>
            </div>
            <div>
                <h1 class="result-heading">Answers</h1>
                <div class="result-text-div">
                    <p class="result-text">What is the coldest country in Africa? = Lesotho</p>
                    <p class="result-text">What year did the second world war start and when did it end? = 1939 - 1945</p>
                    <p class="result-text">In the movie Money heist, what names were the robbers given? = names of cities</p>
                    <p class="result-text">What is the largest Carnivorous animal on land? = Polar bear</p>
                    <p class="result-text">What is the longest river in the world? = Nile River</p>
                    <p class="result-text">What's the name of the first man that walked on the moon? = Neil Armstrong</p>
                    <p class="result-text">Who won the most awards in the 2020 grammy awards ceremony? = Billie Eilish</p>
                    <p class="result-text">What is the fastest animal in the world? = Peregrine falcon</p>
                    <p class="result-text">Which of these countries is known as the land of the midnight sun? = Iceland</p>
                    <p class="result-text">In What year did Nelson Mandela die? = 2013</p>
                    <p class="result-text">What Youtube video has the most views? = Baby shark by Pinkfong</p>
                    <p class="result-text">What dog breed has the best sense of smell? = Bloodhound</p>
                    <p class="result-text">Which of these European country has won the most worldcup titles? = Italy</p>
                    <p class="result-text">Who is the vice president of the united states under Donald Trump? = Mike Pence</p>
                    <p class="result-text">Which of the following is the finest? = &nbsp; <img src="img/Adriel.jpg"> </p>

                </div>

            </div>
        </section>
    `
    

    body.innerHTML = result
}
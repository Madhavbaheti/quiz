const questions = [
      {
        'que' : "Which one of the following is a markup language?",
        'a': "HTML",
        'b': "CSS",
        'c' : "JavaScript",
        'd' : "PHP",
        'correct' : "a",
      },
      {
        'que' : "Which one of the following is a  language?",
        'a': "head",
        'b': "bottle",
        'c' : "bag",
        'd' : "Hindi",
        'correct' : "d",
      },
      {
        'que' : "Which one of the following is a country?",
        'a': "Jaipur",
        'b': "Rajasthan",
        'c' : "India",
        'd' : "Goa",
        'correct' : "c",
      }
]
let index=0;
let total = questions.length;
let right =0;
let wrong = 0;
const quebox = document.getElementById("quebox");
const questioninputs = document.querySelectorAll('.options')
const loadquestion = () => {
  if(index===total) {
    end();
  }else {
  reset();
  }
  const data = questions[index];
  quebox.innerText = `${index+1}) ${data.que}`;
  questioninputs[0].nextElementSibling.innerText= data.a;
  questioninputs[1].nextElementSibling.innerText= data.b;
  questioninputs[2].nextElementSibling.innerText= data.c;
  questioninputs[3].nextElementSibling.innerText= data.d;
  
}

const submitquiz = () => {
  const data = questions[index]
  const ans = getAnswer()
  if(ans == data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadquestion();
  return
}
const getAnswer = () => {
  let answer;
  questioninputs.forEach (
    (input) => {
      if(input.checked) {
        answer= input.value; 
      }
    }
  )
  return answer
}
const reset = () => {
  questioninputs.forEach(
    (input)=> {
      input.checked=false;
    }
  )
}
const end = () => {
  document.getElementById("box").innerHTML = `<h3> THANK YOU FOR PLAYING THE QUIZ
  <h2> ${right}/${total} are correct`
}
loadquestion();
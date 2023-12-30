let user = 0;
let comp = 0;
var yourscore = document.querySelector("#userscore");
var compscore = document.querySelector("#computerscore");
var y = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const drawgame = ()=>{
  console.log("it's draw");
  msg.innerText = "MATCH DRAW";
}
let shoewinner= (userwin)=>{
  if(userwin){
    user = user+1;
    yourscore.innerText = user;

    console.log("you win");
    msg.innerText = "YOU WON";
    msg.style.backgroundColor = "green";

  }
  else{
    comp=comp+1;
    compscore.innerText = comp;
    console.log("you loose");
    msg.innerText = "YOU LOOSE";
    msg.style.backgroundColor = "red";
  }
}

const comprandomchoice=()=>{
  let arr = ["stone","paper","scissor"];
  const idx = Math.floor(Math.random()*3);
return arr[idx];
}

const playgame = (userchoice)=>{
  console.log("user choose =",userchoice);
  console.log("computer choice=",comprandomchoice());
  let compchoose = comprandomchoice();
  if(compchoose ===  userchoice){
drawgame();
  }
else{
  let userwin = true;
  if(userchoice === "rock"){
    userwin = compchoose === "paper"?false:true;
  }
  else if(userchoice === "paper"){
     userwin = compchoose === "scissor"?false:true;
  }
  else{
    userwin = compchoose === "rock"?false:true;
  }
shoewinner(userwin);
}
};







y.forEach((x)=>{
  x.addEventListener("click",()=>{
    var xid = x.getAttribute("id");
    playgame(xid);
  })
})

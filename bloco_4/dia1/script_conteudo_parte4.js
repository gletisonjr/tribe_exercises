let score = Math.floor(Math.random() * 100) + 1; 
let message = '';

if (score >= 80) {
  message = "Parabéns, voce foi aprovada(o)!";
} else{  
    if (score < 80 && score >= 60 )  {
        message = "Você está na nossa lista de espera.";
    } else {
        message = "Você foi reprovada(o)";
    }
}    
console.log(score);
console.log(message);
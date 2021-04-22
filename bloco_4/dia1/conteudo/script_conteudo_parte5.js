let score = Math.floor(Math.random() * 100) + 1;
let status = ''; 
let message = '';

if (score >= 80) {
  status = "aprovada";
} else{  
    if (score < 80 && score >= 60 )  {
      status = "lista";  
    } else {
        status = "reprovada";
    }
}

switch (status) {
    case 'aprovada':
      message = "Parabéns, voce foi aprovada(o)!";  
      break;
    case 'reprovada':
      message = "Você foi reprovada(o)";
      break;
    case 'lista':
      message = "Você está na nossa lista de espera.";
      break;
    default:
        message = "não se aplica";
        break;
}
console.log(score);
console.log(status);
console.log(message);
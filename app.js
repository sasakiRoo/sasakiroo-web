function randomWords(){
    const rdm = ['  hello may God bless you!', '  have a great day!', '  you\'ll be okay'];

    const targetH = document.querySelector('.random-quotes');
    const ganti = rdm[Math.floor(Math.random()*rdm.length)];
    targetH.innerText = ganti;
}
setInterval(randomWords, 2500);

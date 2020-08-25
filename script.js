


let clickheader = document.querySelectorAll('.dropdown h3');
for (i = 0; i < clickheader.length; i++) {
    let test1 = clickheader[i];
    test1.onclick = togDisplay;
}


function togDisplay(e) {
    console.log(e.target.parentElement.querySelector('.skills'), this)
    e.target.parentElement.querySelector('.skills').classList.toggle('display')


}
let typing = false
document.querySelector('#qualifications').addEventListener('click', function () {
    console.log('test', !typing);
    if (!typing){
        typeWriter();
        typing = true  
    } 
})
let txt = 'Junior Cloud Engineer with a focus on infrastructure, system architecture and operations. A strong interest in networking, web technologies, cybersecurity, process innovation, and business management. Nearly a decade of experience maintaining information systems including engagements at multinational corporations and small businesses with a focus on cloud architecture, system administration, technical writing, project management, and business administration. Responsible, self-directed, and able to quickly learn and apply complex concepts and processes.'
let speed = 8;


let letter = 0
function typeWriter() {
    if (letter < txt.length) {
        document.querySelector('.dropdown p').innerHTML += txt.charAt(letter);
        letter++;
        setTimeout(typeWriter, speed);
    }
}



let clickheader = document.querySelectorAll('.dropdown h3');
for (i=0; i< clickheader.length; i++) {
    let test1 = clickheader[i];
   test1.onclick = togDisplay;
    }


function togDisplay(e) {
    console.log(e.target.parentElement.querySelector('.skills'), this)
    e.target.parentElement.querySelector('.skills').classList.toggle('display')
}

let txt = 'Junior Cloud Engineer with a focus on infrastructure, system architecture and operations. A strong interest in networking, web technologies, cybersecurity, process innovation, and business management. Nearly a decade of experience maintaining information systems including engagements at multinational corporations and small businesses with a focus on cloud architecture, system administration, technical writing, project management, and business administration. Responsible, self-directed, and able to quickly learn and apply complex concepts and processes.'
let speed = 50;

function typeWriter() {
    for (i=0; i< txt.length; i++) {
            document.querySelector('.dropdown p').innerHTML += txt.charAt(i);
            setTimeout(typeWriter, speed);
        }
    }
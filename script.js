


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
    if (!typing) {
        typeWriter();
        typing = true
    }
})
let txt = 'Junior Cloud Engineer with a focus on infrastructure, system architecture and operations. A strong interest in networking, web technologies, cybersecurity, process innovation, and business management. Nearly a decade of experience maintaining information systems including engagements at multinational corporations and small businesses with a focus on cloud architecture, system administration, technical writing, project management, and business administration. Responsible, self-directed, and able to quickly learn and apply complex concepts and processes.'
let speed = 3;


let letter = 0
function typeWriter() {
    if (letter < txt.length) {
        document.querySelector('.dropdown p').innerHTML += txt.charAt(letter);
        letter++;
        setTimeout(typeWriter, speed);
    }
}

document.querySelector('#clickButton').onclick = getrandomVid;
function getrandomVid() {
    axios.get('https://www.googleapis.com/youtube/v3/search?q=violin%20concerto&part=snippet&key=AIzaSyAFhCTNcd8nEJtkP7rrWwOJI8l5SxpiDjI&maxResults=1000&pageToken')
        .then(res => {
            console.log(res.data)
            showVideo(res.data.items)
        })
}


function showVideo(items) {
    let randomVideo = items[Math.floor(Math.random() * items.length)]
    console.log(randomVideo.id.videoId)


    document.querySelector('#videoLocation').innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${randomVideo.id.videoId}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
}


axios
    .get(`https://ironrest.herokuapp.com/mia-aug2020-webdevs`)
    .then((res) => {
        for (let i of res.data)
            console.log(i.first_name)
    })

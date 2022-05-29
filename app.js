const kick = document.querySelector('#kick');
const snare = document.querySelector('#snare');
const closedHat = document.querySelector('#hiHatClosed');
const openHat = document.querySelector('#hiHatOpen');



const drumKit = {
    kickSound: new Audio('/drumkit_files/kick.wav'),
    snareSound: new Audio('/drumkit_files/snare.wav'),
    closedHatSound: new Audio('/drumkit_files/closedhat.wav'),
    openHatSound: new Audio('/drumkit_files/openHat.wav'),
}

window.addEventListener('keydown', function (e) {
    switch (e.key) {
        case 'a':
            drumKit.kickSound.play();
            drumKit.kickSound.currentTime = 0;
            kick.classList.add('playing');
            break;
        case 's':
            drumKit.snareSound.play();
            drumKit.snareSound.currentTime = 0;
            snare.classList.add('playing');
            break;
        case 'd':
            drumKit.closedHatSound.play();
            drumKit.closedHatSound.currentTime = 0;
            closedHat.classList.add('playing');
            break;
        case 'f':
            drumKit.openHatSound.play();
            drumKit.openHatSound.currentTime = 0;
            openHat.classList.add('playing');
            break;
    }
})

window.addEventListener('keyup', function (e) {
    switch (e.key) {
        case 'a':
            kick.classList.remove('playing')
            break;
        case 's':
            snare.classList.remove('playing')
            break;
        case 'd':
            closedHat.classList.remove('playing')
            break;
        case 'f':
            openHat.classList.remove('playing')
            break;
    }
});

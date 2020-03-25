let play = (soundID)=> {
    sound = document.getElementById(soundID)
    sound.play();

}
let buttonClickCallback = () => {
    console.log(event.key);
    switch(event.key){
        case 'a':
        case 'A':
            play('clap-audio');
        case 's':
        case 'S':
            play('hihat-audio');
        case 'd':
        case 'D':
            play('kick-audio');
        case 'f':
        case 'F':
            play('openhat-audio');
        case 'g':
        case 'G':
            play('boom-audio');
        case 'h':
        case 'H':
            play('ride-audio');
        case 'j':
        case 'J':
            play('snare-audio');
        case 'k':
        case 'K':
            play('tom-audio');
        case 'l':
        case 'L':
            play('tink-audio');
    }
}
document.addEventListener("keydown",buttonClickCallback)
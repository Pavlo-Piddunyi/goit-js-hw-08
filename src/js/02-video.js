import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe')
const vimeoPlayer = new Player(iframe);

const onPlay = function(data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
};

vimeoPlayer.on('timeupdate', throttle(onPlay, 1000));

const carrentTime = Number(localStorage.getItem('videoplayer-current-time'))

vimeoPlayer.setCurrentTime(carrentTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;
        default:
            // some other error occurred
            break;
    }
});
'use strict';

import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const STORAGE_KEY = 'videoplayer-current-time';

player.on('play', onPlay => player.on('timeupdate', throttle(setCurrentTimeToStorage, 1000)));

function setCurrentTimeToStorage(event) {
  localStorage.setItem(STORAGE_KEY, event.seconds);
}

getCurrentTimeFromStorage();

function getCurrentTimeFromStorage() {
  const storedTimeVideo = localStorage.getItem(STORAGE_KEY);
  if (storedTimeVideo) {
    player.setCurrentTime(storedTimeVideo);
  }
}

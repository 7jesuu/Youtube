const ytdl = require('ytdl-core');
const fs = require('fs');

const videoUrl = 'https://www.youtube.com/watch?v=l3QdCo4Z-98';

ytdl(videoUrl)
  .pipe(fs.createWriteStream('video.mp4'))
  .on('finish', () => {
    console.log('Видео загружено!');
  })
  .on('error', (err) => {
    console.error('Ошибка загрузки видео:', err);
  });
/*
1. Render songs
2. Scroll top
3. Play / pause / seek
4. CD rotate
5. Next / prev
6. Random
7. Next / Repeat when ended
8. Active song
9. Scroll active song into view
10. Play song when click
* */

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = {
  songs: [
    {
      name: 'Nevada',
      singer: 'Vicetone',
      path: './assets/music/song1.mp3',
      img: './assets/music/song1.png'
    },
    {
      name: 'SumnerTime',
      singer: 'K-391',
      path: './assets/music/song2.mp3',
      img: './assets/music/song2.png'
    },
    {
      name: 'Monody',
      singer: 'TheFatRat',
      path: './assets/music/song3.mp3',
      img: './assets/music/song3.png'
    },
    {
      name: 'Reality',
      singer: 'Lost Frequencies',
      path: './assets/music/song4.mp3',
      img: './assets/music/song4.png'
    }
  ],

  render: function () {
    const htmls = this.songs.map((song) => {
      return `
        <div class="song">
          <div class="thumb" style="background-image: url('${song.img}')">
          </div>
          <div class="body">
            <h3 class="title">${song.name}e</h3>
            <p class="author">${song.singer}</p>
          </div>
          <div class="option">
            <i class="fas fa-ellipsis-h"></i>
          </div>
        </div>
      `
    })
    $('.playlist').innerHTML = htmls.join('');
  },

  start: function () {
    this.render();
  }
}

app.start();
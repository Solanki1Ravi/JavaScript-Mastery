console.log("spotify clone");

async function getSongs() {
  let a = await fetch("http://127.0.0.1:5500/Media/songs/");
  //   let a = await fetch("https://www.youtube.com/watch?v=4DfVxVeqk2o");
  let response = await a.text();

  let div = document.createElement("div");
  div.innerHTML = response;
  let as = div.getElementsByTagName("a");

  //   console.log(as);

  let songs = [];
  for (let index = 1; index < as.length; index++) {
    const element = as[index];
    if (element.href.endsWith(".mp3")) {
      songs.push(element.href.split("/songs/")[1]);
    }
  }

  return songs;
}

async function mySongs() {
  let songs = await getSongs();
  console.log(songs);

  let songUL = document
    .querySelector(".songList")
    .getElementsByTagName("ul")[0];
  for (const song of songs) {
    songUL.innerHTML =songUL.innerHTML+ `<li>
    
    <img class="invert" src="img.svg" alt="">
    <div class="info">

      <div>${song.slice(0, -10).slice(0,13).replaceAll("-", " ")}</div>
      <div>Ravi Solanki</div>
    </div>
    <div class="playNow">

      <span>Play Now</span>
    </div>
    <img class="invert" src="play.svg" alt="">
    
    
    
    
                          </li>`;
  }

  var audio = new Audio(songs[0]);
    // audio.play();

  audio.addEventListener("loadeddata", () => {
    let duration = audio.duration;
    console.log(duration);
  });
}

mySongs();

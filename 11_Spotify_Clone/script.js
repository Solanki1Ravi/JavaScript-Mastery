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
      songs.push(element.href);
    }
  }

  return songs;
}

async function mySongs() {
  let songs = await getSongs();
  console.log(songs);

  let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0]
  for (const song of songs) {
    songUL.innerHTML+=`<li>${song}</li>`
    
  }

  var audio = new Audio(songs[0]);
//   audio.play();

  audio.addEventListener("loadeddata", () => {
    let duration = audio.duration;
    console.log(duration);
  });
}


mySongs();

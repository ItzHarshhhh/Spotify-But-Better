function embedPlaylist() {
  var playlistUrl = document.getElementById("playlistInput").value;
  var embedCode =
    '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/' +
    playlistUrl +
    '" width="100%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen="true"; picture-in-picture" loading="lazy"></iframe>';

  // if the playlist value in nothing then print nothing
  if (playlistUrl == "") {
    //hide the playlist embed
    document.getElementById("playlistEmbed").style.display = "none";
    document.getElementById("OutputText").innerHTML = "Invalid URL";
  } else {
    //show the playlist embed
    document.getElementById("playlistEmbed").style.display = "block";
    //print the embed code
    document.getElementById("playlistEmbed").innerHTML = embedCode;
  }
}

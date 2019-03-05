var playlist = {Usher: 'Yeah'}

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, artistName, songTitle)
}

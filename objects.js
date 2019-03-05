var playlist = {Usher: 'Yeah'}

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign(playlist, { [artistName]: songTitle })
}

function removeFromPlaylist(playlist, artistName){
  return  delete playlist.['artistName']
}

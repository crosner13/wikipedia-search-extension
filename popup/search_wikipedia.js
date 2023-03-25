
// Get the search term from the input and send the window to the created URL
function search_wikipedia() {
    searchTerm = document.getElementById('searchbar');
    searchTerm.addEventListener('keyup', function onEvent(e) {
      if (e.keyCode === 13) {
        searchTerm = searchTerm.value
        location.assign(`https://en.wikipedia.org/wiki/${searchTerm}`);
      }
    })
  }
  
  search_wikipedia()
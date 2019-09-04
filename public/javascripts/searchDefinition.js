
// HANDLES SEARCHES AND PASSES QUERY PARAMS INTO THE URL
// FOR MORE INFO GO TO INDEX.JS AND SEE THE ROUTE FOR MORE INFO
function search() {
    var word = document.getElementById('search').value
    var url = "/dictionary/" + word
    window.location = url;
}
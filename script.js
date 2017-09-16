var wordList = [];

$(document).ready(function () {

  $("#submitNew").click(submitNew)


})

//save input in wordList
function submitNew() {
  wordList.push($('#inputNew').val());
  $('#inputNew').val("");
  console.log(wordList);
  chrome.storage.sync.set({ "wordList": wordList }, function() {});
  displayList();
}

//display updated list
function displayList() {
  $(".warningList").html("");
  for (var i = 0; i < wordList.length; i++) {
    $(".warningList").append('<li>' + wordList[i]);
  }
  console.log("printout here:");
  chrome.storage.sync.get("wordList", function(obj) {
    wordList = obj["wordList"];
  });
  chrome.storage.sync.get("nope", function(obj) {
    if (obj) {
      console.log("true");
    } else {
      console.log("false");
    }
  })des
  console.log(wordList[0]);

}

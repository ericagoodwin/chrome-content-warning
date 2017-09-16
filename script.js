var wordList = [];
var empty = 1;
// check if this is first time saving to storage
chrome.storage.sync.getBytesInUse("myValue", function(val) {
  if (val != 0) {
    empty = 0;
  }
});

// sync with storage
if (empty) {
  chrome.storage.sync.set({listKey: wordList}, function() {});
} else {
  chrome.storage.sync.get("listKey", function(result) {
    wordList = result.myValue;
    //console.log("list is not empty");
  })
}
//console.log(wordList);

$(document).ready(function () {

  if (!empty) {
    displayList();
  }
  $("#submitNew").click(submitNew)
})

//save input in wordList
function submitNew() {
  empty = 0;
  wordList.push($('#inputNew').val());
  $('#inputNew').val("");
  //console.log(wordList);
  chrome.storage.sync.set({ myValue : wordList }, function() {
  //  console.log("word list:" + wordList);
  //  console.log(wordList[0]);
  });
  displayList();
}

//display updated list
function displayList() {
chrome.storage.sync.get("myValue", function(result) {
    wordList = result.myValue;
  //  console.log("result here:" + result.myValue);
  //  console.log("first element here:" + result.myValue[0]);
});
$(".warningList").html("");
for (var i = 0; i < wordList.length; i++) {
  $(".warningList").append('<li>' + wordList[i]);
}
  // chrome.storage.sync.get("nope", function(obj) {
  //   if (obj) {
  //     console.log("true");
  //   } else {
  //     console.log("false");
  //   }
  // })
  //console.log(wordList[0]);


}

/**
TODO:
- option to show or not show words list
- clear all
- delete individual
- styling of course
- the actual part of course
**/

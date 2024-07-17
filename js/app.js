function capitals () {
  let og = document.getElementById("original").value;
  document.getElementById("correction").value = og.toUpperCase();
}

function smalls () {
  let original = document.getElementById("original").value;
  document.getElementById("correction").value = original.toLowerCase();
}

function copied(){
  var copyText = document.getElementById("correction");

  copyText.select();
  navigator.clipboard.writeText(copyText.value);
}

function pasted(){
  var pasteText = document.getElementById("original");
  navigator.clipboard.readText().then(function (text){pasteText.value = text;})
}

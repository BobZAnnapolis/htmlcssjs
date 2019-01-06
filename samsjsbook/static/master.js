//
function showMsg(msg) {
  alert(msg);
}

function cube(x) {
  var cubed = (x * x * x);
  showMsg("\nResult is :\n\t" + cubed);
}

function buttonReport(buttonId, buttonName, buttonValue) {
  var msg1 = "Button    id: " + buttonId + "\n";
  var msg2 = "Button  name: " + buttonName + "\n";
  var msg3 = "Button value: " + buttonValue;
  var msg = msg1 + msg2 + msg3;
  showMsg(msg);
}

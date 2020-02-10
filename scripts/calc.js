var display = document.getElementById("textview");

function press(num){
  display.value = display.value+num;
}

function clr(){
  display.value = "";
}

function del(){
  if(display.value.length > 0 )
    display.value = display.value.slice(0,display.value.length-1);
}

function ans(){
  display.value = eval(display.value);
}

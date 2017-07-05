function modal(image, title, subtitle, text){
  var glasses = document.querySelector("#glasses");

  var newModalImage = new modal(image, title, subtitle, text);
  var newModalWithoutImage = new modal(title, subtitle, text);

  while (newModalImage.contains(image) || newModalWithoutImage.contains(image)) {
    glasses.style.display="none";
  }

  var appearImage =
  this.image = glasses;
  this.title = title;
  this.subtitle = subtitle;
  this.text = text;
}

modal.prototype.showModal = function(){
  return this.image;
  return this.title;
  return this.subtitle;
}


var popUp = document.querySelector(".pop-up");

var close = document.getElementById("button-instructions");
close.onclick = function(){
  popUp.style.display = "none";
};

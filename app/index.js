(function(window){
  const button = ({container = 'and-ds', invoiceNumber, qr_string, qr_link, amount, description})=> {
    require('./../public/style.css')

    var element = document.createElement("div");
    var text = document.createTextNode("Төлөх");

    element.classList.add('button-and-ds');
    element.appendChild(text);

    element.addEventListener("click", function(){
      window.location = qr_link;
    });

    var parent = document.getElementById(container);
    if (parent === null)
      document.getElementById("body").appendChild(element);
    else
      parent.appendChild(element);
  }
  window.ANDDS = {
    button:button
  }
})(window)
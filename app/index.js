(function(window){
  const button = ({container = 'and-ds', invoiceNumber, qr_string, qr_link, amount, description})=> {
    require('./../public/style.css')

    var element = document.getElementById(container);
    var created = false;

    if (element === null) {
      element = document.createElement("div");
      created = true;
    }

    var text = document.createTextNode("Төлөх");

    element.classList.add('button-and-ds');
    element.appendChild(text);

    element.addEventListener("click", function(){
      window.location = qr_link;
    });

    if (created)
      document.body.appendChild(element);
  }
  window.ANDDS = {
    button:button
  }
})(window)
document.getElementById("changebtn").addEventListener("click", function () {
  let para = document.getElementById("myParagraph");
  para.textContent = "new paragraph";
});

document.getElementById("changecity").addEventListener("click", function () {
  let city = document.getElementById("cities");
  city.firstElementChild.classList.add("highlight");
});

document.getElementById("changeOrder").addEventListener("click", function () {
  let hold = document.getElementById("coffeType");
  hold.textContent = "Expresso";
  hold.style.backgroundColor = "white";
  hold.style.color = "black";
  hold.style.padding = "5px";
  hold.style.borderRadius = "3px";
});

document.getElementById("shoppinglist").addEventListener("click", function () {
  let store = document.createElement("li");
  store.textContent = "Eggs";
  document.getElementById("list").appendChild(store);
});

document.getElementById("list1").addEventListener("click", function () {
  let task = document.getElementById("Tasklist");
  task.lastElementChild.remove();
});

document.getElementById("clickMe").addEventListener("mouseover", function () {
  //   alert("soham");
});

document.getElementById("tea").addEventListener("click", function (event) {
  //   console.log(event.target);
  if (event.target.tagName == "LI") {
    event.target.classList.add("highlight");
  }
});

document
  .getElementById("feedback")
  .addEventListener(
    "click" /* submit can also be possible */,
    function (event) {
      event.preventDefault();
      let feedback = document.getElementById("holder").value;
      let score = document.querySelector("label[for=holder]");
      console.log(score);

      document.getElementById("feedbackDisplay").textContent = feedback;
    }
  );

document
  .getElementById("togglehighlight")
  .addEventListener("click", function () {
    let store = document.getElementById("descriptionText");
    store.classList.toggle("highlight");
  });

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domstatus").textContent = "Hello Soham";
});

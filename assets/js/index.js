const shadowDB = async () => {
  const URL = `${window.location.origin}/assets/js/shadow_data.json`;
  const jsonData = await fetch(URL);
  const data = await jsonData.json();
  shadowAllItems(data);
};

shadowDB();

// shadow item
function shadowItem(shadow) {
  const li = document.createElement("li");
  li.className = "shadow__item";
  li.style.boxShadow = shadow.slice(0, -1);

  // copied li box shadow
  li.addEventListener("click", function () {
    navigator.clipboard
      .writeText(shadow)
      .then(() => {
        li.innerHTML = `<span class="copied">Copied</span>`;
        setTimeout(() => (li.innerHTML = ""), 400);
      })
      .catch(() => alert("Failed to copy."));
  });

  return li;
}

// print all shadow items
function shadowAllItems(data) {
  const shadowArea = document.querySelector(".shadow");
  data.forEach((shadow) => {
    shadowArea.appendChild(shadowItem(shadow));
  });
}

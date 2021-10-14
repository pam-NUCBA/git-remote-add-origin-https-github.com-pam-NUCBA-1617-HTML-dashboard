//panel del costado:

const panel = document.getElementById("panel");
const panelBtn = document.getElementById("showPanel");

//hamburguesa:
const list = document.getElementById("list");
const listBtn = document.getElementById("showList");

//titulo
const title = document.getElementById("title");

//panel del costado:
panelBtn.onclick = function () {
  if (panel.style.display === "none") {
    panel.style.display = "block";
  } else {
    panel.style.display = "none";
  }
};

//hamburguesa:
listBtn.onclick = function () {
  if (list.style.display === "none") {
    list.style.display = "flex";
  } else {
    list.style.display = "none";
  }
};

//cambia de color al hacer click! como no hay un else, al apretar de nuevo no cambia de color
title.onclick = function () {
  title.style.color = "red";
};

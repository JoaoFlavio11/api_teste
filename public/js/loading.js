/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
function showLoading() {
    alert('loading');
    const div = document.createElement("div");
    div.classList.add("loading", "centralize");
    document.body.appendChild(div);

    const label = document.createElement("label");
    label.innerText = "Carregando...";

    div.appendChild(label);

    document.body.appendChild(div);
}

function hideLoading() {
   const loadings = document.getElementsByClassName("loading");
   if( loadings.length ){
    loadings[0].remove();
   }
}
let modal = document.querySelector(".modal");

const modalInner = document.createElement("div");
modalInner.classList = "modal-inner";

const modalMessage = document.createElement("p");
modalMessage.innerText = "위치 정보를 알 수 없어 날씨 정보를 불러올 수가 없어요 😢";

const modalBtn = document.createElement("button");
modalBtn.innerText = "확인";

modalInner.appendChild(modalMessage);
modalInner.appendChild(modalBtn);
modal.appendChild(modalInner);

function clickedModal(){
    modal.classList.add("hidden");
}

modalBtn.addEventListener("click", clickedModal);

let modal = document.querySelector(".modal");

const modalInner = document.createElement("div");
modalInner.classList = "modal-inner";

const modalMessage = document.createElement("p");
modalMessage.innerText = "위치 정보를 알 수 없어 날씨 정보를 불러올 수가 없어요 😢";
modalMessage.classList = "modalM1";

const modalMessage2 = document.createElement("p");
modalMessage2.classList = "modalM2";
modalMessage2.innerText = "4글자 이하로 입력해주세요.";

const modalBtn = document.createElement("button");
modalBtn.innerText = "확인";

modalInner.appendChild(modalMessage);
modalInner.appendChild(modalMessage2);
modalInner.appendChild(modalBtn);
modal.appendChild(modalInner);

function clickedModal(){
    modal.classList.add("hidden");
}

modalBtn.addEventListener("click", clickedModal);
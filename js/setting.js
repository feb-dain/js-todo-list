const hamBtn = document.querySelector("#ham>i");
const file = document.getElementById("file");
const profile = document.getElementById("profile");
const preview = document.getElementById("preview");
const logout = document.getElementById("logout");
const closeBtn = document.querySelector(".close-btn");

function openLnb(){
    profile.classList.add("active");
}
function closeLnb(){
    profile.classList.remove("active");
}

// 이미지 업로드
function fileChange(e){
    const selectedFile = [...file.files];
    const img = new FileReader();

    img.readAsDataURL(selectedFile[0]); 
    
    img.onload = function(){
		preview.src = img.result;	
        localStorage.setItem("profile", img.result)
    };
}

const savedProfile = localStorage.getItem("profile");
if (savedProfile){
    preview.src = savedProfile;
}

function clearAll(){
    modalC.classList.remove("hidden");
}
function modalY(){
    modalC.classList.add("hidden")
    localStorage.clear();
    location.reload();
}
function modalN(){
    modalC.classList.add("hidden")
}

hamBtn.addEventListener("click", openLnb);
closeBtn.addEventListener("click", closeLnb);

file.addEventListener("change", fileChange);

logout.addEventListener("click", clearAll);
btnY.addEventListener("click", modalY);
btnN.addEventListener("click", modalN);


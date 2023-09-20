document.addEventListener("DOMContentLoaded", function () {
    const body = document.querySelector("body");
    const blackScreen = document.querySelector(".backdrop")
    const userIcon = document.querySelector(".user-avatar-sm");
    const btnChangeProfile = document.querySelector(".btn-change-profile");
    const myMenuProfileAvatar = document.querySelector(".my-menu-profile-avatar");
    const userName = document.querySelector(".user-name");
    const userProfileArrowDown = document.querySelector(".user-profile-arrow-down");
    const userWrapper = document.querySelector(".user-wrapper");
    const profileList = document.querySelector("#profile-list");

    // 1. 프로필 누르면 모달창 띄우기
    userIcon.addEventListener("click", (e) => {
        if(!body.classList.contains("user-menu-show")){
            body.classList.add("user-menu-show");
            console.log(body.classList);
            blackScreen.style.display = "block";
        }
    });

    // 2. 프로필 켜진 상태에서 다른 화면 누르면 모달 끄기
    blackScreen.addEventListener("click", (e) => {
        body.classList.remove("user-menu-show");
        console.log(body.classList);
        blackScreen.style.display = "none";
    });

    // 3. 유저 모달에서 프로필 컨테이너 클릭하면 프로필 리스트 띄우기 / 내리기
    function changeShow(){
        console.log("유저 래퍼 초기값: " + userWrapper.classList);
        if(!userWrapper.classList.contains("show")) {
            userWrapper.classList.add("show");
            profileList.classList.add("show");
            console.log("유저 래퍼에 show 추가: " + userWrapper.classList);
        } else {
            userWrapper.classList.remove("show");
            profileList.classList.remove("show");
            console.log("유저 래퍼 show 지우기: " + userWrapper.classList);
        }
    }
    myMenuProfileAvatar.addEventListener("click", changeShow);
    userName.addEventListener("click", changeShow);
    userProfileArrowDown.addEventListener("click", changeShow);




    document.addEventListener("click", (e) => {
        console.log(e.target);
    });
});
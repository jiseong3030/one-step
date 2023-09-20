document.addEventListener("DOMContentLoaded", function () {
    const body = document.querySelector("body");
    const blackScreen = document.querySelector(".backdrop")
    const userIcon = document.querySelector(".user-avatar-sm");
    const myMenuProfileAvatar = document.querySelector(".my-menu-profile-avatar");
    const userName = document.querySelector(".user-name");
    const userProfileArrowDown = document.querySelector(".user-profile-arrow-down");
    const userWrapper = document.querySelector(".user-wrapper");
    const profileList = document.querySelector("#profile-list");
    const bookmarkButtons = document.querySelectorAll(".fa-bookmark");
    const ellipsisButtons = document.querySelectorAll(".fa-ellipsis-h");
    const dropdownMenuRights = document.querySelectorAll(".dropdown-menu-right");

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

    // 4. 북마크 버튼 누르면 색깔 바뀌기
    bookmarkButtons.forEach((bookmarkButton) => {
        bookmarkButton.addEventListener("click", (e) => {
            const btnScrap = e.target.parentElement;
            if((e.target === bookmarkButton) && btnScrap.classList.contains("active")){
                btnScrap.classList.remove("active");
            } else if((e.target === bookmarkButton) && !btnScrap.classList.contains("active")){
                btnScrap.classList.add("active");
            }
        })
    })

    // 5. (...)버튼 누르면 추가정보 모달 띄우기
    body.addEventListener("click", (e) => {
        // ... 버튼 누를시 조건문
        if(e.target.classList.contains("fa-ellipsis-h")){
            // dropdown 컨테이너 객체로 저장
            const dropdown = e.target.parentElement.parentElement;
            // dropdown 컨테이너가 켜진 상태가 아닐 때 (모달 꺼져있는 버튼이면)
            if(!dropdown.classList.contains("show")){
                // 모든 dropdown 컨테이너에서 show flag 지우기
                dropdownMenuRights.forEach((dropdownMenuRight) => {
                    dropdownMenuRight.classList.remove("show");
                    dropdownMenuRight.parentElement.classList.remove("show");
                })
                // 누른 ... 버튼의 컨테이너에 show flag 추가
                dropdown.classList.add("show");
                // 모든 dropdown 컨테이너 중 show flag를 가진 컨테이너를 검색
                dropdownMenuRights.forEach((dropdownMenuRight) => {
                    // show flag를 가진 컨테이너의 dropdownMenuRight 컨테이너에 show 추가 (모달 띄우기)
                    if(dropdownMenuRight.parentElement === dropdown && dropdown.classList.contains("show")){
                        dropdownMenuRight.classList.add("show");
                    }
                })
            }
            // dropdown 컨테이너가 켜진 상태 일때 (모달 켜진 버튼 다시 누르면)
            else {
                // 버튼 중에서 해당 컨테이너 검색
                dropdownMenuRights.forEach((dropdownMenuRight) => {
                    if(dropdown.classList.contains("show")){
                        // 해당 컨테이너에서 show flag 삭제 (모달 끄기)
                        dropdownMenuRight.classList.remove("show");
                    }
                })
                // 해당 dropdown 컨테이너에서도 show flag 삭제
                dropdown.classList.remove("show");
            }
        }
        // ... 버튼 아닌 곳 누를시 (모든 모달 끄기: 모든 show flag 삭)
        else {
            dropdownMenuRights.forEach((dropdownMenuRight) => {
                dropdownMenuRight.classList.remove("show");
            })
            ellipsisButtons.forEach((ellipsisButton) => {
                ellipsisButton.parentElement.parentElement.classList.remove("show");
            })
        }
    })


    document.addEventListener("click", (e) => {
        console.log(e.target);
    });
});
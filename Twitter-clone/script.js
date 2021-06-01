// DOM Elements

const mainPage = document.querySelector('.main-page');
const mainPageFooter = document.querySelector('.main-page-footer');
const loginPage = document.querySelector('.login-page');
const middleContent = document.querySelector('.middle-content');
const btnTop = document.querySelector('.btn-top');
const feedsPage = document.querySelector('.feeds-page');
const loginModal = document.querySelector('.login-modal');
const loginFormBtn = document.querySelector('.login-form-btn');
const postBtn = document.querySelector(".post-btn");
const modalWrapper = document.querySelector(".modal-wrapper");
const modal = document.querySelector(".modal");
const postModalX = document.querySelector(".modal-header i");
const modalPostBtn = document.querySelector(".modal-header button");
const modalFooterPlus = document.querySelector(".modal-footer span");
const modalInput = document.querySelector(".modal-input");
const user = document.querySelector(".user");
const sidebar = document.querySelector(".sidebar");
const sidebarWrapper = document.querySelector(".sidebar-wrapper");
const xBtn = document.querySelector(".sidebar-header i");
const toggle = document.querySelector(".toggle");
const circle = document.querySelector(".circle");
/*************************************** */

//Main page

const goToLoginPage = () => {
    mainPage.style.display = 'none';
    loginPage.style.display = 'flex';
    mainPageFooter.style.display = 'none';
}

middleContent.addEventListener('click', e => {
    console.log(e.target.classList[1]);
    if (e.target.classList[1] === "main-btn") {
        goToLoginPage();
    }
})

btnTop.addEventListener('click', () => {
    const inputUserInfo = document.querySelector('.user-info');
    const inputPass = document.querySelector('.password');

    console.log(inputUserInfo.value);

    if (inputUserInfo.value !== "" && inputPass.value !== "") {
        mainPage.style.display = 'none';
        mainPageFooter.style.display = 'none';
        feedsPage.style.display = 'flex';
    } else {
        goToLoginPage();
        loginModal.style.display = 'flex';
    }
})

// Login Page

loginModal.addEventListener('click', () => {
    loginModal.style.display = 'none';
})

loginFormBtn.addEventListener('click', () => {
    const user = document.querySelector('.login-user-info');
    const passInfo = document.querySelector('.login-pass-info');

    console.log(user.value);

    if (user.value !== "" && passInfo.value !== "") {
        loginPage.style.display = 'none';
        feedsPage.style.display = 'flex';
    } else {
        loginModal.style.display = 'flex';
    }
})

// Post modal
postBtn.addEventListener("click", () => {
    modal.style.display = "block";
    modalWrapper.classList.add("modal-wrapper-display");
  });
  
  const changeOpacity = x => {
    modalPostBtn.style.opacity = x;
    modalFooterPlus.style.opacity = x;
  };
  
  postModalX.addEventListener("click", () => {
    modal.style.display = "none";
    modalWrapper.classList.remove("modal-wrapper-display");
  
    if (modalInput.value !== "") {
      modalInput.value = "";
      changeOpacity(0.5);
    }
  });
  
  modalInput.addEventListener("keypress", e => {
    if (e.target.value !== "") {
      changeOpacity(1);
    }
  });
  
  modalInput.addEventListener("blur", e => {
    if (e.target.value === "") {
      changeOpacity(0.5);
    }
  });

  // Sidebar
user.addEventListener("click", () => {
  sidebar.classList.add("sidebar-display");
  sidebarWrapper.classList.add("sidebar-wrapper-display");
});

xBtn.addEventListener("click", () => {
  sidebar.classList.remove("sidebar-display");
  sidebarWrapper.classList.remove("sidebar-wrapper-display");
});


// dark mode
const darkElements1 = document.querySelectorAll('.dark-mode-1');
const darkElements2 = document.querySelectorAll('.dark-mode-2');
const lighTexts = document.querySelectorAll('.light-text');
const borders = document.querySelectorAll('.border');

toggle.addEventListener('click', () => {
	circle.classList.toggle('move');
	Array.from(darkElements1).map(darkEl1 => darkEl1.classList.toggle('dark-1'));
	Array.from(darkElements2).map(darkEl2 => darkEl2.classList.toggle('dark-2'));
	Array.from(lighTexts).map(lighText => lighText.classList.toggle('light'));
	Array.from(borders).map(border => border.classList.toggle('border-color'));
});
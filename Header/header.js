// function hamburger() {
//   var Hamburger_Menu = document.getElementById("hamburger-menu");
//   if (Hamburger_Menu.style.display === "flex") {
//     Hamburger_Menu.style.display = "none";
//   } else {
//     Hamburger_Menu.style.display = "flex";
//   }

//   var nav = document.getElementById("nav-links");
//   if (nav.style.display === "none") {
//     nav.style.display = "flex";
//   } else {
//     nav.style.display = "none";
//   }

//   var header1 = document.getElementById("header1");
//   if (header1.style.display === "none") {
//     header1.style.display = "flex";
//   } else {
//     header1.style.display = "none";
//   }

//   var header1_content = document.getElementById("header1-content");
//   if (header1_content.style.display === "none") {
//     header1_content.style.display = "flex";
//   } else {
//     header1_content.style.display = "none";
//   }

//   var header_button = document.getElementById("book_now");
//   if (header_button.style.display === "none") {
//     header_button.style.display = "flex";
//   } else {
//     header_button.style.display = "none";
//   }
// }










// case

// function roomHover() {
//     var Header_Room_Img = document.getElementById("header-room-img");
//     if (Header_Room_Img.style.display === "block") {
//         Header_Room_Img.style.display = "none";
//     } else {
//         Header_Room_Img.style.display = "block";
//     }
// }

// function huthover() {
//     var Header_Hut_Img = document.getElementById("header-hut-img");
//     if (Header_Hut_Img.style.display === "block") {
//         Header_Hut_Img.style.display = "none";
//     } else {
//         Header_Hut_Img.style.display = "block";
//         Header_Room_Img.style.display = "none";
//     }


// }

const Header1 = document.querySelector('#header1');
const Header2 = document.querySelector('#header2');
const hamBurger = document.querySelector('.hamburger');
const hamBurger_menu = document.querySelector('#hamburger-menu');

let menuOpen = false;
hamBurger.addEventListener('click', () => {
  if(!menuOpen) {
    hamBurger.classList.add('open');
    menuOpen = true;
  } else {
    hamBurger.classList.remove('open');
    menuOpen = false;
  }
});



function hamburger() {
    if (hamBurger_menu.style.display === "flex") {
        hamBurger_menu.style.display = "none";
      } else {
        hamBurger_menu.style.display = "flex";
      }

      if (Header1.style.visibility === "hidden") {
        Header1.style.visibility = "visible";
      } else {
        Header1.style.visibility = "hidden";
      }

      
    
}
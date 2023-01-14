window.addEventListener('scroll', showBackToTopButtonOnScroll);
showBackToTopButtonOnScroll()
function showBackToTopButtonOnScroll() {
  if (scrollY > 500) {
      backToTopButton.classList.add('show')
  } else {
      backToTopButton.classList.remove('show')
  }
}

/* =======================================
========== Mudar padrão de cores =========
==========================================*/
const btColorOne = document.getElementById('btColorOne');
function colorOne() {
   /* ===== Social Icons Nav ======= */
   const iconWhats = document.getElementById('iconWhatsApp');
   iconWhats.classList.add('color-icon-1');
   iconWhats.classList.remove('color-icon-2');
   iconWhats.classList.remove('color-icon-3');

   const iconInsta = document.getElementById('iconInstagram');
   iconInsta.classList.add('color-icon-1');
   iconInsta.classList.remove('color-icon-2');
   iconInsta.classList.remove('color-icon-3');

   const iconFace = document.getElementById('iconFacebook');
   iconFace.classList.add('color-icon-1');
   iconFace.classList.remove('color-icon-2');
   iconFace.classList.remove('color-icon-3');
   
   /* ===== Background Home ======= */
   const backgroundHome = document.getElementById('home');
   backgroundHome.classList.add('backgroundHome-1');
   backgroundHome.classList.remove('backgroundHome-2');
   backgroundHome.classList.remove('backgroundHome-3');
   
   const name = document.getElementById('name');
   name.classList.add('name-1');
   name.classList.remove('name-2');
   name.classList.remove('name-3');

   const buttonHome = document.getElementById('buttonHome');
   buttonHome.classList.add('buttonHome-1');
   buttonHome.classList.remove('buttonHome-2');
   buttonHome.classList.remove('buttonHome-3');

   /* ===== Background e Title Segments ======= */
   const backgroundSegments = document.getElementById('segments');
   backgroundSegments.classList.add('backgroundSegments-1');
   backgroundSegments.classList.remove('backgroundSegments-2');
   backgroundSegments.classList.remove('backgroundSegments-3');

   const segmentsTitle = document.getElementById('segmentsTitle');
   segmentsTitle.classList.add('segmentsTitle-1');
   segmentsTitle.classList.remove('segmentsTitle-2');
   segmentsTitle.classList.remove('segmentsTitle-3');

   /* ===== Icons Segments ======= */
   const iconCasamento = document.getElementById('icon-casamento');
   iconCasamento.classList.add('icon-casamento-1');
   iconCasamento.classList.remove('icon-casamento-2');
   iconCasamento.classList.remove('icon-casamento-3');

   const iconDivorcio = document.getElementById('icon-divorcio');
   iconDivorcio.classList.add('icon-divorcio-1');
   iconDivorcio.classList.remove('icon-divorcio-2');
   iconDivorcio.classList.remove('icon-divorcio-3');

   const iconInventario = document.getElementById('icon-inventario');
   iconInventario.classList.add('icon-inventario-1');
   iconInventario.classList.remove('icon-inventario-2');
   iconInventario.classList.remove('icon-inventario-3');

   const iconTestamento = document.getElementById('icon-testamento');
   iconTestamento.classList.add('icon-testamento-1');
   iconTestamento.classList.remove('icon-testamento-2');
   iconTestamento.classList.remove('icon-testamento-3'); 

   const iconPartilha = document.getElementById('icon-partilha');
   iconPartilha.classList.add('icon-partilha-1');
   iconPartilha.classList.remove('icon-partilha-2');
   iconPartilha.classList.remove('icon-partilha-3'); 

   const iconPaternidade = document.getElementById('icon-paternidade');
   iconPaternidade.classList.add('icon-paternidade-1');
   iconPaternidade.classList.remove('icon-paternidade-2');
   iconPaternidade.classList.remove('icon-paternidade-3'); 

   const iconGuardaJudicial = document.getElementById('icon-guardaJudicial');
   iconGuardaJudicial.classList.add('icon-guardaJudicial-1');
   iconGuardaJudicial.classList.remove('icon-guardaJudicial-2');
   iconGuardaJudicial.classList.remove('icon-guardaJudicial-3'); 

   const iconMediacaoDeConflitos = document.getElementById('icon-mediacaoDeConflitos');
   iconMediacaoDeConflitos.classList.add('icon-mediacaoDeConflitos-1');
   iconMediacaoDeConflitos.classList.remove('icon-mediacaoDeConflitos-2');
   iconMediacaoDeConflitos.classList.remove('icon-mediacaoDeConflitos-3'); 

   /* ===== Buttons Segments ======= */
   const BUTTON_SEGMENTS_ONE = document.getElementById('buttonSegmentsOne');
   BUTTON_SEGMENTS_ONE.classList.add('buttonSegmentsOne-1');
   BUTTON_SEGMENTS_ONE.classList.remove('buttonSegmentsOne-2');
   BUTTON_SEGMENTS_ONE.classList.remove('buttonSegmentsOne-3');

   const COLOR_PHONE_SEGMENTS = document.getElementById('colorPhoneSegments');
   COLOR_PHONE_SEGMENTS.classList.add('color-phone-1');
   COLOR_PHONE_SEGMENTS.classList.remove('color-phone-2');
   COLOR_PHONE_SEGMENTS.classList.remove('color-phone-3');

   const BUTTON_SEGMENTS_TWO = document.getElementById('buttonSegmentsTwo');
   BUTTON_SEGMENTS_TWO.classList.add('buttonSegmentsTwo-1');
   BUTTON_SEGMENTS_TWO.classList.remove('buttonSegmentsTwo-2');
   BUTTON_SEGMENTS_TWO.classList.remove('buttonSegmentsTwo-3');

   /* ===== About img ======= */
   const ABOUT_IMG = document.getElementById('about-img');
   ABOUT_IMG.classList.add('imgPerfil-1');
   ABOUT_IMG.classList.remove('imgPerfil-2');
   ABOUT_IMG.classList.remove('imgPerfil-3');

   /* ===== About Background ======= */
   const ABOUT_BACKGROUND = document.getElementById('about');
   ABOUT_BACKGROUND.classList.add('backgroundAbount-1');
   ABOUT_BACKGROUND.classList.remove('backgroundAbount-2');
   ABOUT_BACKGROUND.classList.remove('backgroundAbount-3');

   
   /* ===== About Checks ======= */
   const ABOUT_CHECK_1 = document.getElementById("aboutCheck1").querySelector("svg").style.fill = "#7E1212";

   const ABOUT_CHECK_2 = document.getElementById("aboutCheck2").querySelector("svg").style.fill = "#7E1212";

   const ABOUT_CHECK_3 = document.getElementById("aboutCheck3").querySelector("svg").style.fill = "#7E1212";

   const ABOUT_CHECK_4 = document.getElementById("aboutCheck4").querySelector("svg").style.fill = "#7E1212";

   /* ===== About Buttons ======= */
   const ABOUT_BUTTON_ONE = document.getElementById('buttonAboutOne');
   ABOUT_BUTTON_ONE.classList.add('buttonAboutOne-1');
   ABOUT_BUTTON_ONE.classList.remove('buttonAboutOne-2');
   ABOUT_BUTTON_ONE.classList.remove('buttonAboutOne-3');

   /* ===== Contact Background ======= */
   const CONTACT = document.getElementById('contact');
   CONTACT.classList.add('backgroundContact-1');
   CONTACT.classList.remove('backgroundContact-2');
   CONTACT.classList.remove('backgroundContact-3');

   /* ===== Contact Button ======= */
   const BUTTON_CONTACT = document.getElementById('buttonContact');
   BUTTON_CONTACT.classList.add('buttonContact-1');
   BUTTON_CONTACT.classList.remove('buttonContact-2');
   BUTTON_CONTACT.classList.remove('buttonContact-3');
} 
btColorOne.addEventListener('click', colorOne);
/* 
.
.
.
.
 
*/
const btColorTwo = document.getElementById('btColorTwo');
function colorTwo() {
   /* ===== Social Icons Nav ======= */
   const iconWhats = document.getElementById('iconWhatsApp');
   iconWhats.classList.add('color-icon-2');
   iconWhats.classList.remove('color-icon-1');
   iconWhats.classList.remove('color-icon-3');

   const iconInsta = document.getElementById('iconInstagram');
   iconInsta.classList.add('color-icon-2');
   iconInsta.classList.remove('color-icon-1');
   iconInsta.classList.remove('color-icon-3');

   const iconFace = document.getElementById('iconFacebook');
   iconFace.classList.add('color-icon-2');
   iconFace.classList.remove('color-icon-1');
   iconFace.classList.remove('color-icon-3');
   
   /* ===== Background ======= */
   const backgroundHome = document.getElementById('home');
   backgroundHome.classList.add('backgroundHome-2');
   backgroundHome.classList.remove('backgroundHome-1');
   backgroundHome.classList.remove('backgroundHome-3');

   const name = document.getElementById('name');
   name.classList.add('name-2');
   name.classList.remove('name-1');
   name.classList.remove('name-3');

   const buttonHome = document.getElementById('buttonHome');
   buttonHome.classList.add('buttonHome-2');
   buttonHome.classList.remove('buttonHome-1');
   buttonHome.classList.remove('buttonHome-3');

   /* ===== Background e Title Segments ======= */
   const backgroundSegments = document.getElementById('segments');
   backgroundSegments.classList.add('backgroundSegments-2');
   backgroundSegments.classList.remove('backgroundSegments-1');
   backgroundSegments.classList.remove('backgroundSegments-3');

   const segmentsTitle = document.getElementById('segmentsTitle');
   segmentsTitle.classList.add('segmentsTitle-2');
   segmentsTitle.classList.remove('segmentsTitle-1');
   segmentsTitle.classList.remove('segmentsTitle-3');

   /* ===== Icons Segments ======= */
   const iconCasamento = document.getElementById('icon-casamento');
   iconCasamento.classList.add('icon-casamento-2');
   iconCasamento.classList.remove('icon-casamento-1');
   iconCasamento.classList.remove('icon-casamento-3');

   const iconDivorcio = document.getElementById('icon-divorcio');
   iconDivorcio.classList.add('icon-divorcio-2');
   iconDivorcio.classList.remove('icon-divorcio-1');
   iconDivorcio.classList.remove('icon-divorcio-3');

   const iconInventario = document.getElementById('icon-inventario');
   iconInventario.classList.add('icon-inventario-2');
   iconInventario.classList.remove('icon-inventario-1');
   iconInventario.classList.remove('icon-inventario-3');

   const iconTestamento = document.getElementById('icon-testamento');
   iconTestamento.classList.add('icon-testamento-2');
   iconTestamento.classList.remove('icon-testamento-1');
   iconTestamento.classList.remove('icon-testamento-3'); 

   const iconPartilha = document.getElementById('icon-partilha');
   iconPartilha.classList.add('icon-partilha-2');
   iconPartilha.classList.remove('icon-partilha-1');
   iconPartilha.classList.remove('icon-partilha-3'); 

   const iconPaternidade = document.getElementById('icon-paternidade');
   iconPaternidade.classList.add('icon-paternidade-2');
   iconPaternidade.classList.remove('icon-paternidade-1');
   iconPaternidade.classList.remove('icon-paternidade-3'); 

   const iconGuardaJudicial = document.getElementById('icon-guardaJudicial');
   iconGuardaJudicial.classList.add('icon-guardaJudicial-2');
   iconGuardaJudicial.classList.remove('icon-guardaJudicial-1');
   iconGuardaJudicial.classList.remove('icon-guardaJudicial-3'); 

   const iconMediacaoDeConflitos = document.getElementById('icon-mediacaoDeConflitos');
   iconMediacaoDeConflitos.classList.add('icon-mediacaoDeConflitos-2');
   iconMediacaoDeConflitos.classList.remove('icon-mediacaoDeConflitos-1');
   iconMediacaoDeConflitos.classList.remove('icon-mediacaoDeConflitos-3'); 

   /* ===== Buttons Segments ======= */
   const BUTTON_SEGMENTS_ONE = document.getElementById('buttonSegmentsOne');
   BUTTON_SEGMENTS_ONE.classList.add('buttonSegmentsOne-2');
   BUTTON_SEGMENTS_ONE.classList.remove('buttonSegmentsOne-1');
   BUTTON_SEGMENTS_ONE.classList.remove('buttonSegmentsOne-3');

   const COLOR_PHONE_SEGMENTS = document.getElementById('colorPhoneSegments');
   COLOR_PHONE_SEGMENTS.classList.add('color-phone-2');
   COLOR_PHONE_SEGMENTS.classList.remove('color-phone-1');
   COLOR_PHONE_SEGMENTS.classList.remove('color-phone-3');

   const BUTTON_SEGMENTS_TWO = document.getElementById('buttonSegmentsTwo');
   BUTTON_SEGMENTS_TWO.classList.add('buttonSegmentsTwo-2');
   BUTTON_SEGMENTS_TWO.classList.remove('buttonSegmentsTwo-1');
   BUTTON_SEGMENTS_TWO.classList.remove('buttonSegmentsTwo-3');

   /* ===== About img ======= */
   const ABOUT_IMG = document.getElementById('about-img');
   ABOUT_IMG.classList.add('imgPerfil-2');
   ABOUT_IMG.classList.remove('imgPerfil-1');
   ABOUT_IMG.classList.remove('imgPerfil-3');

   /* ===== About Background ======= */
   const ABOUT_BACKGROUND = document.getElementById('about');
   ABOUT_BACKGROUND.classList.add('backgroundAbount-2');
   ABOUT_BACKGROUND.classList.remove('backgroundAbount-1');
   ABOUT_BACKGROUND.classList.remove('backgroundAbount-3');

   /* ===== About Checks ======= */
   const ABOUT_CHECK_1 = document.getElementById("aboutCheck1").querySelector("svg").style.fill = "#302D58";

   const ABOUT_CHECK_2 = document.getElementById("aboutCheck2").querySelector("svg").style.fill = "#302D58";

   const ABOUT_CHECK_3 = document.getElementById("aboutCheck3").querySelector("svg").style.fill = "#302D58";

   const ABOUT_CHECK_4 = document.getElementById("aboutCheck4").querySelector("svg").style.fill = "#302D58";

   /* ===== About Buttons ======= */
   const ABOUT_BUTTON_ONE = document.getElementById('buttonAboutOne');
   ABOUT_BUTTON_ONE.classList.add('buttonAboutOne-2');
   ABOUT_BUTTON_ONE.classList.remove('buttonAboutOne-1');
   ABOUT_BUTTON_ONE.classList.remove('buttonAboutOne-3');

   /* ===== Contact Background ======= */
   const CONTACT = document.getElementById('contact');
   CONTACT.classList.add('backgroundContact-2');
   CONTACT.classList.remove('backgroundContact-1');
   CONTACT.classList.remove('backgroundContact-3');

   /* ===== Contact Button ======= */
   const BUTTON_CONTACT = document.getElementById('buttonContact');
   BUTTON_CONTACT.classList.add('buttonContact-2');
   BUTTON_CONTACT.classList.remove('buttonContact-1');
   BUTTON_CONTACT.classList.remove('buttonContact-3');
} 
btColorTwo.addEventListener('click', colorTwo);
/* 
.
.
.
.
 */

const btColorThree = document.getElementById('btColorThree');
function colorThree() {
   /* ===== Social Icons Nav ======= */
   const iconWhats = document.getElementById('iconWhatsApp');
   iconWhats.classList.add('color-icon-3');
   iconWhats.classList.remove('color-icon-1');
   iconWhats.classList.remove('color-icon-2');

   const iconInsta = document.getElementById('iconInstagram');
   iconInsta.classList.add('color-icon-3');
   iconInsta.classList.remove('color-icon-1');
   iconInsta.classList.remove('color-icon-2');

   const iconFace = document.getElementById('iconFacebook');
   iconFace.classList.add('color-icon-3');
   iconFace.classList.remove('color-icon-1');
   iconFace.classList.remove('color-icon-2');
   
   /* ===== Background ======= */
   const backgroundHome = document.getElementById('home');
   backgroundHome.classList.add('backgroundHome-3');
   backgroundHome.classList.remove('backgroundHome-1');
   backgroundHome.classList.remove('backgroundHome-2');

   const name = document.getElementById('name');
   name.classList.add('name-3');
   name.classList.remove('name-1');
   name.classList.remove('name-2');

   const buttonHome = document.getElementById('buttonHome');
   buttonHome.classList.add('buttonHome-3');
   buttonHome.classList.remove('buttonHome-1');
   buttonHome.classList.remove('buttonHome-2');

   /* ===== Background e Title Segments ======= */
   const backgroundSegments = document.getElementById('segments');
   backgroundSegments.classList.add('backgroundSegments-3');
   backgroundSegments.classList.remove('backgroundSegments-1');
   backgroundSegments.classList.remove('backgroundSegments-2');

   const segmentsTitle = document.getElementById('segmentsTitle');
   segmentsTitle.classList.add('segmentsTitle-3');
   segmentsTitle.classList.remove('segmentsTitle-1');
   segmentsTitle.classList.remove('segmentsTitle-2');

   /* ===== Icons Segments ======= */
   const iconCasamento = document.getElementById('icon-casamento');
   iconCasamento.classList.add('icon-casamento-3');
   iconCasamento.classList.remove('icon-casamento-1');
   iconCasamento.classList.remove('icon-casamento-2');

   const iconDivorcio = document.getElementById('icon-divorcio');
   iconDivorcio.classList.add('icon-divorcio-3');
   iconDivorcio.classList.remove('icon-divorcio-1');
   iconDivorcio.classList.remove('icon-divorcio-2');

   const iconInventario = document.getElementById('icon-inventario');
   iconInventario.classList.add('icon-inventario-3');
   iconInventario.classList.remove('icon-inventario-1');
   iconInventario.classList.remove('icon-inventario-2');

   const iconTestamento = document.getElementById('icon-testamento');
   iconTestamento.classList.add('icon-testamento-3');
   iconTestamento.classList.remove('icon-testamento-1');
   iconTestamento.classList.remove('icon-testamento-2'); 

   const iconPartilha = document.getElementById('icon-partilha');
   iconPartilha.classList.add('icon-partilha-3');
   iconPartilha.classList.remove('icon-partilha-1');
   iconPartilha.classList.remove('icon-partilha-2'); 

   const iconPaternidade = document.getElementById('icon-paternidade');
   iconPaternidade.classList.add('icon-paternidade-3');
   iconPaternidade.classList.remove('icon-paternidade-1');
   iconPaternidade.classList.remove('icon-paternidade-2'); 

   const iconGuardaJudicial = document.getElementById('icon-guardaJudicial');
   iconGuardaJudicial.classList.add('icon-guardaJudicial-3');
   iconGuardaJudicial.classList.remove('icon-guardaJudicial-1');
   iconGuardaJudicial.classList.remove('icon-guardaJudicial-2'); 

   const iconMediacaoDeConflitos = document.getElementById('icon-mediacaoDeConflitos');
   iconMediacaoDeConflitos.classList.add('icon-mediacaoDeConflitos-3');
   iconMediacaoDeConflitos.classList.remove('icon-mediacaoDeConflitos-1');
   iconMediacaoDeConflitos.classList.remove('icon-mediacaoDeConflitos-2'); 

   /* ===== Buttons Segments ======= */
   const BUTTON_SEGMENTS_ONE = document.getElementById('buttonSegmentsOne');
   BUTTON_SEGMENTS_ONE.classList.add('buttonSegmentsOne-3');
   BUTTON_SEGMENTS_ONE.classList.remove('buttonSegmentsOne-1');
   BUTTON_SEGMENTS_ONE.classList.remove('buttonSegmentsOne-2');

   const COLOR_PHONE_SEGMENTS = document.getElementById('colorPhoneSegments');
   COLOR_PHONE_SEGMENTS.classList.add('color-phone-3');
   COLOR_PHONE_SEGMENTS.classList.remove('color-phone-1');
   COLOR_PHONE_SEGMENTS.classList.remove('color-phone-2');

   const BUTTON_SEGMENTS_TWO = document.getElementById('buttonSegmentsTwo');
   BUTTON_SEGMENTS_TWO.classList.add('buttonSegmentsTwo-3');
   BUTTON_SEGMENTS_TWO.classList.remove('buttonSegmentsTwo-1');
   BUTTON_SEGMENTS_TWO.classList.remove('buttonSegmentsTwo-2');

   /* ===== About img ======= */
   const ABOUT_IMG = document.getElementById('about-img');
   ABOUT_IMG.classList.add('imgPerfil-3');
   ABOUT_IMG.classList.remove('imgPerfil-1');
   ABOUT_IMG.classList.remove('imgPerfil-2');

   /* ===== About Background ======= */
   const ABOUT_BACKGROUND = document.getElementById('about');
   ABOUT_BACKGROUND.classList.add('backgroundAbount-3');
   ABOUT_BACKGROUND.classList.remove('backgroundAbount-1');
   ABOUT_BACKGROUND.classList.remove('backgroundAbount-2');

   /* ===== About Checks ======= */
   const ABOUT_CHECK_1 = document.getElementById("aboutCheck1").querySelector("svg").style.fill = "#957628";

   const ABOUT_CHECK_2 = document.getElementById("aboutCheck2").querySelector("svg").style.fill = "#957628";

   const ABOUT_CHECK_3 = document.getElementById("aboutCheck3").querySelector("svg").style.fill = "#957628";

   const ABOUT_CHECK_4 = document.getElementById("aboutCheck4").querySelector("svg").style.fill = "#957628";

   /* ===== About Buttons ======= */
   const ABOUT_BUTTON_ONE = document.getElementById('buttonAboutOne');
   ABOUT_BUTTON_ONE.classList.add('buttonAboutOne-3');
   ABOUT_BUTTON_ONE.classList.remove('buttonAboutOne-1');
   ABOUT_BUTTON_ONE.classList.remove('buttonAboutOne-2');

   /* ===== Contact Background ======= */
   const CONTACT = document.getElementById('contact');
   CONTACT.classList.add('backgroundContact-3');
   CONTACT.classList.remove('backgroundContact-1');
   CONTACT.classList.remove('backgroundContact-2');

   /* ===== Contact Button ======= */
   const BUTTON_CONTACT = document.getElementById('buttonContact');
   BUTTON_CONTACT.classList.add('buttonContact-3');
   BUTTON_CONTACT.classList.remove('buttonContact-1');
   BUTTON_CONTACT.classList.remove('buttonContact-2');
} 
btColorThree.addEventListener('click', colorThree);
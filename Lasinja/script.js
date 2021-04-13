$(document).ready(function () {
    /* ----dio skripte za bocni menu---- */
            $("#sidebar").mCustomScrollbar({
                theme: "minimal"
            });

            $('#dismiss, .overlay').on('click', function () {
                $('#sidebar').removeClass('active');
                $('.overlay').removeClass('active');
            });
            
        window.addEventListener('keydown', function (event) { 
                if(event.key === 'Escape'){
                    $('#sidebar').removeClass('active');
                    $('.overlay').removeClass('active');
                }
                
            });

    
     $('#pageSubmenu').on('click', function () {
                $('#sidebar').removeClass('active');
                $('.overlay').removeClass('active');
            }); //dodano da se samostalno nakon odabira makne menu

            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').addClass('active');
                $('.overlay').addClass('active');
                $('.collapse.in').toggleClass('in');
                $('a[aria-expanded=true]').attr('aria-expanded', 'false');
            });
/* ----nadalje dio skripte za modal---- */
var modal = document.getElementsByClassName('modal');
var btns = document.getElementsByClassName("mod-btt");
var spans=document.getElementsByClassName("close");
for(let i=0;i<btns.length;i++){
   btns[i].onclick = function() {
      modal[i].style.display = "block";
   }
}
for(let i=0;i<spans.length;i++){
    spans[i].onclick = function() {
       modal[i].style.display = "none";
    }
 }      
//makni popup ako se klikne izvan njega  
window.onclick = function(event) {
    for(let i=0;i<spans.length;i++){
  if (event.target == modal[i]) {
    modal[i].style.display = "none";
  }
}}
//makni popup ako se pritisne ESC
for(let i=0;i<btns.length;i++){  
window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    modal[i].style.display = "none";
  }
})}
});
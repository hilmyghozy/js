$(document).on('click', '.toggle-password', function() {

  $(this).toggleClass("far fa-eye-slash");
  
  var input = $("#pass_log_id");
  input.attr('type') === 'password' ? input.attr('type','text') : input.attr('type','password')
});

(function($) { 
	$(function() {
	  $('html').click(function() {
		$('.nav-dropdown').hide();
	  });
	  $('#nav-toggle').click(function() {
		$('nav ul').slideToggle();
	  });
	  $('#nav-toggle').on('click', function() {
		this.classList.toggle('active');
	  });
	}); 
  })(jQuery);

function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("example");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[2];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
}

$(document).on('click', '.open-button', function() {
  $('#myForm').toggleClass("form-popup");
});



$(document).ready(function(){
  if ($(window).width() < 500) {
    var element = document.querySelector('.open-button');
    element.removeChild(element.childNodes[1]);
    $(".open-button").html('<i class="fa fa-plus"></i>');
  }else if($(window).width() > 500) {
    var element = document.querySelector('.open-button');
    element.removeChild(element.childNodes[1]);
    $(".open-button").html('<i class="fa fa-plus"></i>Add Data');
  }
    
});
$(window).resize(function () {
      if ($(window).width() < 500) {
        var element = document.querySelector('.open-button');
        element.removeChild(element.childNodes[1]);
        $(".open-button").html('<i class="fa fa-plus"></i>');
      }else if($(window).width() > 500) {
        var element = document.querySelector('.open-button');
        element.removeChild(element.childNodes[1]);
        $(".open-button").html('<i class="fa fa-plus"></i>Add Data');
      }
});
$(document).ready(function(){
	var letItBlank = "";
	$("#searchbtn").click(function(e){
		searchWithPagination(1, true);
		if($("#srcbtn").attr('class') === 'fa fa-times'){
			$("#keyword").val(letItBlank);
			searchWithPagination(1, true);
		}
	});
	$("#keyword").keypress(function(e){
		if(e.keyCode == 13){
			searchWithPagination(1, true);
			$("#srcbtn").toggleClass('fas fa-search fa fa-times');
		}
	});
	$("#keyword").keyup(function(){
		if($(this).val() == ''){
			$("#srcbtn").addClass("fas fa-search");
			$("#srcbtn").removeClass("fa fa-times");
			searchWithPagination(1, true);
		}else if($(this).val()){
			$("#srcbtn").removeClass("fas fa-search");
			$("#srcbtn").addClass("fa fa-times");
			searchWithPagination(1, true);
		}
	});
	
});

function searchWithPagination(page_number, search){
	
	$.ajax({
		url: 'search.php',
		type: 'POST',
		data: {
			keyword: $("#keyword").val(),
			page: page_number,
			search: search
		},
		dataType: "json",
		beforeSend: function(e) {
			if(e && e.overrideMimeType) {
				e.overrideMimeType("application/json;charset=UTF-8");
			}
		},
		success: function(response){
			$("#view").html(response.hasil);
			
		},
		error: function (xhr, ajaxOptions, thrownError) {
			alert(xhr.responseText);
		}
	});
}

	
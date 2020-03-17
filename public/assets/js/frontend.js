$(document).on('click', "#button-check-result", function() {
	$(".hide-check-true, .hide-check-false").each(function() {
		if(!$(this).hasClass("hidden")) $(this).addClass("hidden");
	});
	var count_all = 0;
	var count_true = 0;
	$("#button-show-result").removeClass("hidden");
	$(".input-content").each(function() {
		count_all++;
		var result = $(this).parent().find(".input-result").val();
		if($(this).val().toLowerCase() == result.toLowerCase()) {
			$(this).parents(".form-group").find(".hide-check-true").removeClass('hidden');
			count_true++;
		}
		else {
			$(this).parents(".form-group").find(".hide-check-false").removeClass('hidden');
		}
	});
	$("#show-result-total").html(count_true+' / '+count_all);
});

$(document).on('click', "#button-check-result-word", function() {
	var check = false;
	var count_all = 0;
	var count_true = 0;
	$("#button-show-result").removeClass("hidden");
	$(".quest-item").each(function() {
		count_all++;
		$(this).find('input[type="radio"]').each(function() {
			var result = $(this).parents(".quest-item").find(".input-result").val();
			if( $(this).is(':checked') && $(this).val() == result ) {
				check = true;
			}
			
		});
		if(check) {
			$(this).parents(".form-group").find(".hide-check-true").removeClass('hidden');
			count_true++;
			check = false;
		}
		else {
			$(this).parents(".form-group").find(".hide-check-false").removeClass('hidden');
		}
	});
	$("#show-result-total").html(count_true+' / '+count_all);
})

$(document).on('click', "#button-show-result", function() {
	$(".hide-result").removeClass("hidden");
	$(".open-tab-click").attr("data-toggle","tab").css('cursor', 'pointer');
})
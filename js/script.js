$(function() {
	$("#contentbox").keyup(function() {
		var contenBox=$(this).val();
		var main = contenBox.length *100;
		var value= (main / 50);
		var count= 50 - contenBox.length;

		if(contenBox.length <= 50) {
			$('#count').html(count);
			$('#bar').animate(
			{
				"width": value+'%',
			}, 1);
		}
		else {
			alert('Место закончилось!');
		}
		return false;
	});
});
$(function() {

	$('.zero__logo').on('click', function(e){
		e.preventDefault();
		
		})	

	$('.create__select').on('change', function(e) {

		var src = 'assets/img/' + $(this).val()
		$('.user-photo__image').attr('src', src);
	})	

	$('.user-photo__create').on('submit', function(e){
		e.preventDefault();

		var avatar 		=  $('.create__select').val()
		var texto 		=  $('#cuacks').val()
		var usser  		=  $('#usser').val()
		var cuack  		=

			'<div class="cuacks">' +
			'<div class="cuacks__avatar">' +
			'<img class=cuacks__img src="assets/img/' + avatar +'" alt="">' +
			'</div>' +
			'<div class="cuacks__borrar">' +
			'<a href="">' +
			'<i class="fas fa-times-circle borrar__icon">' +
			'</i>' +
			'</a>' +
			'</div>' +
			'<div class="cuacks__content">'	+
			'<p class="cuacks__name">' + usser + '</p>' +
			'<p class="cuacks__text">' + texto + '</p>' +
			'</div>' +
			'<div class="cuacks__social">' +
			'<a href=""><i class="fas fa-comment cuacks__social-icons1"></i>Comentarios <span class="comments">0</span></a>'+
			'<a href=""><i class="fas fa-feather cuacks__social-icons1"></i>Recuacks <span class="feathers">0</span></a>' +
			'<a href=""><i class="fas fa-heart cuacks__social-icons2"></i>Likes <span class="counter">0</span></a>' +
			'<a href=""><i class="fas fa-share-alt-square cuacks__social-icons1"></i>Compartir</a>' +
			'</div>' +
			'</div>'

		$('.Dos').append(cuack)
		$('.test__cuack').addClass('cuack-invisible')

		var texto 		=  $('#cuacks').val('')
		var usser  		=  $('#usser').val('')
		var avatar 		=  $('.create__select').val('usertest3.png')
		$('.user-photo__image').attr('src', 'assets/img/usertest3.png');

	})

	$('.Dos').on('click', '.cuacks__social', function (e){
			e.stopPropagation();
			e.preventDefault();
	})

	$('.Dos').on('click', '.cuacks__social-icons1', function (e){
			e.stopPropagation();
			e.preventDefault();
			$(this).toggleClass('icon-active');
	})


	$('.Dos').on('click', '.cuacks__social-icons2', function (e){
			e.stopPropagation();
			e.preventDefault();
			$(this).addClass('icon-active');

			var contador = $(this).parent().children('.counter').text()
			var contador = parseInt(contador);
			$(this).parent()
				   .children('.counter')
				   .text(contador + 1)
				   
	})

	$('.inputfile').on('click', function (e){
			e.stopPropagation();
			e.preventDefault();
			alert('Función todavía no disponible!');
	})

	$('.Dos').on('click', '.borrar__icon', function (e){
			e.stopPropagation();
			e.preventDefault();
			$(this).parent()
				   .parent()
				   .parent()
			   	   .remove();
	})

})
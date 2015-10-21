(function(window){



	// contructor
	function Desaldia()
	{

		
		init();
	}


	function init()
	{
		$('.noticias-destacados div.social').hide();
		configuraBotones();
	}



	function configuraBotones()
	{


		$('.bt-despliegue-social').each(function()
			{
				$(this).click(function(event)
				{
					event.preventDefault();
					//console.log($(this).parent().prev('.social').html());
					$(this).parent().prev('.social').show();


				});
		});


		


	}
	

	
	
	
	window.Desaldia = Desaldia;

}(window));	
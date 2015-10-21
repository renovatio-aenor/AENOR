(function(window){


	// contructor
	function Submenus()
	{



			init();

	}


	function init()
	{
		$('.submenus-container').hide();
		todosInvisibles();
		configuraBotones();


		$('.submenus-container').hover(
			  function() 
			  {
			  
			  }, 
			  function() 
			  {
			    $(this).hide();
			  }
			);
 

	}
	


	function todosInvisibles()
	{
		$('.submenu-tienda').hide();
		$('.submenu-servicios').hide();
		
	}

	
	function configuraBotones()
	{
		$('a.submenu-item-click').each(function()
		{
			$(this).click(function(event)
			{
				event.preventDefault();
				activa($(this).attr('id'));

			});
		});


	}


	function activa(cual)
	{
		
		todosInvisibles();
		$('.submenu-'+cual).show();
		$('.submenus-container').show();

	}
	
	
	window.Submenus = Submenus;

}(window));
jQuery( document ).ready(function( $ ) {
	var $user_to_hide = ["admin"]; // array user list
	
	check_current_user($user_to_hide);
	
	// function remove user from list
	function remove_users($user_to_hide){
		for ( var i = 0; i < $user_to_hide.length; i = i + 1 ) {
			var $admin_remove = $('.users').find("tr:contains('"+ $user_to_hide[ i ] +"')");
			$admin_remove.remove();
		}
	}
	
	// function check current username
	function check_current_user($user_to_hide){
		var $found_user = [];
		
		for ( var i = 0; i < $user_to_hide.length; i = i + 1 ) {
			if ( $(".display-name").text().indexOf($user_to_hide[ i ]) == 0 ){
				$found_user.push(1);			 	
			}else{
				$found_user.push(0);
			}				
		}
		
		var maxValueInArray = Math.max.apply(Math, $found_user);
		
		if (maxValueInArray != 1) {
			$('#hide-admin').remove();		
			remove_users($user_to_hide);
		};
	}
});
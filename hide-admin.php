<?php
/*
Plugin Name: Hide Admin
Plugin URI: http://aitcreation.com
Description: This plugin hides the user from the list and the plugin for all users not in the list.
Author: Tomasz Gołkowski
Version: 1.1
Author URI: http://tox.noej.pl
License: GNU GPL v2 
*/

function admin_hide_js() {
	$plugins_url = plugins_url();
    wp_register_script('admin_hide_js', $plugins_url.'/hide-admin/hide_admin.js',  array('jquery'));
    wp_enqueue_script('admin_hide_js');
}
add_action('admin_enqueue_scripts', 'admin_hide_js');
?>
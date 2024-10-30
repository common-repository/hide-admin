=== Plugin Name ===
Contributors: aitcreation, toxdg
Donate link: http://aitcreation.com
Tags: hide, admin, user
Requires at least: 3.5
Tested up to: 3.9.1
Stable tag: 1.1
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

This plugin is used to hide specific users list.

== Description ==

The plugin is used to hide the admin account on the list so that users could not modify his password or remove it from the Wordpress.
If you use other user name you can change $user_to_hide array in hide_admin.js.

== Installation ==

Plugins can be used as a plugin or integrate with the template.

/* Instalation */

1.) Upload `hide_admin` directory to the `/wp-content/plugins/` directory

2.) Add your username in 'hide_admin.js' file( $user_to_hide array ). 

3.) Activate the plugin through the 'Plugins' menu in WordPress

/* To integrate it with the template */

1.)Copy the plugin directory template

2.) Add your username in 'hide_admin.js' file( $user_to_hide array ). 

3.)In function.php file type before end file: include 'hide_admin/hide_admin.php';

4.)In the file hide_admin.php uncomment lines: $plugins_url = get_template_directory_uri();

== Frequently Asked Questions ==

= if my user name is no admin =

you can change $user_to_hide array in hide_admin.js


== Changelog ==

= 1.1 =
* Hide users on list 
* Hide plugin on list for another user

= 1.0 =
* Hide admin user on list


== Upgrade Notice ==

= 1.1 =
This version hide few user and hide plugin in plugins list.

= 1.0 =
This version hide only admin user.

That's all :)

<?php
/**
 * Plugin Name: Figma Embed Block
 * Plugin URI: https://github.com/LevinMedia/figma-embed-block
 * Description: A Gutenberg block to embed Figma frames, pages or prototypes on your WordPress site.
 * Author: levinmedia & jameslnewell
 * Author URI: https://github.com/LevinMedia/figma-embed-block
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';

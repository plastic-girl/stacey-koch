<?php
/**
 * stacey_koch functions and definitions
 *
 * @package stacey_koch
 */

include __DIR__ . '/inc/widgets/responsibilities.php';

/**
 * Set the content width based on the theme's design and stylesheet.
 */
if ( ! isset( $content_width ) ) {
	$content_width = 640; /* pixels */
}

if ( ! function_exists( 'stacey_koch_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function stacey_koch_setup() {

	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on stacey_koch, use a find and replace
	 * to change 'stacey_koch' to the name of your theme in all the template files
	 */
	load_theme_textdomain( 'stacey_koch', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link http://codex.wordpress.org/Function_Reference/add_theme_support#Post_Thumbnails
	 */
	//add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus( array(
		'primary' => __( 'Primary Menu', 'stacey_koch' ),
	) );

	// Enable support for Post Formats.
	add_theme_support( 'post-formats', array( 'aside', 'image', 'video', 'quote', 'link' ) );

	// Setup the WordPress core custom background feature.
	add_theme_support( 'custom-background', apply_filters( 'stacey_koch_custom_background_args', array(
		'default-color' => 'ffffff',
		'default-image' => '',
	) ) );

	// Enable support for HTML5 markup.
	add_theme_support( 'html5', array(
		'comment-list',
		'search-form',
		'comment-form',
		'gallery',
	) );
}
endif; // stacey_koch_setup
add_action( 'after_setup_theme', 'stacey_koch_setup' );

/**
 * Register widgetized area and update sidebar with default widgets.
 */
function stacey_koch_widgets_init() {
	register_sidebar( array(
		'name'          => __( 'Sidebar', 'stacey_koch' ),
		'id'            => 'sidebar-1',
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h1 class="widget-title">',
		'after_title'   => '</h1>',
	) );
}
add_action( 'widgets_init', 'stacey_koch_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function stacey_koch_scripts() {
	wp_enqueue_style( 'stacey_koch-style', get_stylesheet_uri() );

	wp_enqueue_style( 'stacey_koch-slider-style', get_template_directory_uri() . '/js/gaia-slider-master/css/gaia-slider-styles.css' );

	wp_enqueue_script( 'jquery', 'http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js', true );

	wp_enqueue_script( 'stacey_koch-gaia-slider', get_template_directory_uri() . '/js/gaia-slider-master/gaia-slider.js', array(), '20120206', true );

	wp_enqueue_script( 'stacey_koch-script', get_template_directory_uri() . '/js/script.js', array( 'jquery', 'stacey_koch-gaia-slider' ), '20140406', true );

	wp_enqueue_script( 'stacey_koch-colorbox', get_template_directory_uri() . '/js/jquery.colorbox-min.js', array( 'jquery' ), '20140406', true );

	wp_enqueue_script( 'stacey_koch-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20130115', true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'stacey_koch_scripts' );

	if(is_admin()){

		add_filter('image_send_to_editor', 'wrap_my_div', 10, 8);

function wrap_my_div($html, $id, $caption, $title, $align, $url, $alt){
		return '<div>'.$html.'</div>';
	}
}

/**
 * Implement the Custom Header feature.
 */
//require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Custom functions that act independently of the theme templates.
 */
require get_template_directory() . '/inc/extras.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
require get_template_directory() . '/inc/jetpack.php';

<?php
/**
 * Define the Widget.
 *
 */
class Responsibilities_Widget extends WP_Widget {

	/**
	 * Register the widget.
	 *
	 * @return  Responsibilities_Widget
	 */
	public function __construct() {
		parent::__construct( 'responsibilities_widget', 'Responsibilities List', array( 'description' => 'List of highlighted Responsibilities.' ), array( 'width' => 400 ) );
	}

	/**
	 * Render the widget output.
	 *
	 * @param 	array 		$args			Global widget variable arguments.
	 * @param 	array 		$instance		Instance field values.
	 * @return	void
	 */
	public function widget( $args, $instance ) {

		echo $args['before_widget'];

		echo '<div class="responsibilities">';
		echo '<h2><span>Responsibility</span></h2>';
		echo '<ul>';
		echo '<li class="production">Production</li>';
		echo '<li class="location">Location</li>';
		echo '<li class="casting">Casting</li>';
		echo '<ul>';
		echo '<li class="professional">Professional</li>';
		echo '<li class="non-professional">Non-Professional</li>';
		echo '</ul>';
		echo '<li class="wardrobe">Wardrobe</li>';
		echo '<li class="propping">Propping</li>';
		echo '</ul>';
		echo '</div><!-- END .responsibilities-->';

		echo $args['after_widget'];
	}

}

/**
 * Register the widget.
 *
 * @return  void
 */
function responsibilities_widget() {
	register_widget( 'Responsibilities_Widget' );
}
add_action( 'widgets_init', 'responsibilities_widget' );

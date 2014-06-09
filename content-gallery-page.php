<?php
/**
 * The template used for displaying page content in page.php
 *
 * @package stacey_koch
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

	<div class="entry-content">
		<div id="gaia-slide-wrapper">
			<?php the_content(); ?>
			<?php
				wp_link_pages( array(
					'before' => '<div class="page-links">' . __( 'Pages:', 'stacey_koch' ),
					'after'  => '</div>',
				) );
			?>
		</div><!-- #gaia-slide-wrapper -->
	</div><!-- .entry-content -->
</article><!-- #post-## -->


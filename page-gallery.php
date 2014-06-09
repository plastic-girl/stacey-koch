<?php
/*
Template Name: Gallery Page Template
*/
?>

<?php get_header(); ?>

<?php get_sidebar(); ?>
	<div id="primary" class="content-area gallery">
		<main id="main" class="site-main" role="main">

			<?php while ( have_posts() ) : the_post(); ?>

				<?php get_template_part( 'content', 'gallery-page' ); ?>

			<?php endwhile; // end of the loop. ?>

		</main><!-- #main -->
	</div><!-- #primary -->
<?php get_footer(); ?>

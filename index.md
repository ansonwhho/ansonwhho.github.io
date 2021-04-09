---
layout: home
---

<head>
	<style>

		.thumbnail-grid {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
		}

		.thumbnail-grid li {
			list-style-type: none;
			width: 350px;
		}

		.thumbnail-grid figure {
			margin-right: 5px;
		}

		.thumbnail {
			position: relative;
			width: 100%;
			height: 100%;
		}

		.thumbnail .overlay {
		    position: absolute;
		    top: 0;
		    left: 0;
		    width: 100%;
		    height: 100%;
		    display: none;
		}

		.thumbnail:hover .overlay {
		    display: block;
		    background: rgba(0,0,0,0.5);
			color: #fff;
		}

		.thumbnail:hover .overlay h2 {
			margin-left: 10px;
			margin-bottom: 0px;
		}

		.thumbnail:hover .overlay p {
			margin-left: 10px;
			font-size: 12px;
		}
	</style>
</head>

<body>

<div>
	<ul class="thumbnail-grid">
		<li>
			<a href="https://github.com/spectroscopycafe/orbital-chaos" title="Orbital chaos">
				<figure>
					<div class="thumbnail">
						<img src="/images/thumbnails/orbital-chaos.png" alt="orbital-chaos"/>
						<div class="overlay">
							<h2 style="font-weight: bold;">
								Orbital chaos
							</h2>
							<p>
								A project for the 2021 Physics Thinkathon at the University of St Andrews, where we won in the "Most Innovative" category.  
							</p>
						</div>
					</div>
				</figure>
			</a>
		</li>
		<li>
			<a href="/light/bites/2021/03/22/dynamical-billiards.html" title="Billiards on an elliptical table">
				<figure>
					<div class="thumbnail">
						<img src="/images/thumbnails/dynamical-billiards.png" alt="dynamical-billiards"/>
						<div class="overlay">
							<h2 style="font-weight: bold;">
								Billiards on an elliptical table
							</h2>
							<p>
								What happens if you play billiards on an elliptical table? (With one ball, no friction, no pockets, and a lot of free time.)
							</p>
						</div>
					</div>
				</figure>
			</a>
		</li>
		<li>
			<a href="light/bites/2021/02/04/conways-game-of-life.html" title="Conway's game of life">
				<figure>
					<div class="thumbnail">
						<img src="/images/thumbnails/conway-game-of-life.png" alt="conway-game-of-life"/>
						<div class="overlay">
							<h2 style="font-weight: bold;">
								Conway's Game of Life
							</h2>
							<p>
								A simulation of Conway’s Game of Life using Python and pygame, as a nice visualisation of cellular automata
							</p>
						</div>
					</div>
				</figure>
			</a>
		</li>
		<li>
			<a href="light/bites/2021/01/23/rainbows-and-rays.html" title="Rainbows and rays">
				<figure>
					<div class="thumbnail">
						<img src="/images/thumbnails/rainbows-and-rays.png" alt="rainbows-and-rays"/>
						<div class="overlay">
							<h2 style="font-weight: bold;">
								Rainbows and rays
							</h2>
							<p>
								A GeoGebra simulation showing how light interacts with a raindrop to form a rainbow, based on the ray optics descriptions by Newton and Descartes
							</p>
						</div>
					</div>
				</figure>
			</a>
		</li>
	</ul>
</div>

</body>


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

# **Anson Ho**
Hi! I'm Anson Ho, a recent physics graduate at the [University of St Andrews](https://www.st-andrews.ac.uk/physics-astronomy/). I'm passionate about artificial intelligence and scientific research, as well as trying to tackle [some of the world's most pressing questions](https://80000hours.org/key-ideas/) through [effective altruism](https://www.effectivealtruism.org/articles/introduction-to-effective-altruism/). This blog contains expository writings and updates about my work, and you can find more in the following links: 
- **Personal notes** that I've [written](https://spectroscopycafe.github.io/personal-notes) based on stuff that I've learnt from books, lecture notes and courses
- **Maths and physics simulations** on [Geogebra](https://www.geogebra.org/u/spectroscopycafe)
- **Programming projects** on [GitHub](https://github.com/spectroscopycafe)
- **Writings** for the [St Andrews Physics and Astronomy Magazine](https://pandamagazine.wp.st-andrews.ac.uk/)

<img align="right" style="margin-left:10px;" src="/images/oftw-pledge.jpg" width="275px"/>

## Research
Currently I'm particularly interested in conducting research in the following areas: 
- **Scientific applications of AI**
- **Reinforcement learning**
- **The mathematics of machine learning**
- **AI safety**

These are still subject to change depending on how the research landscape develops over the next few years, and as I learn more about these topics. 

My final year thesis was on the [*Design of photonic crystal waveguides using neural networks*](https://github.com/spectroscopycafe/photonic-crystals-neural-networks), as part of the [nanophotonics group](https://nanophotonics.wp.st-andrews.ac.uk/) under the supervision of Dr Sebastian Schulz. Specifically, I developed an artificial neural network to predict the performance of photonic devices directly from their structural parameters. This allowed for the space of all possible designs to be mapped out orders of magnitude more quickly than existing techniques, and is a promising way of optimising similar devices. 

At the moment I'm working on a summer research project with St Andrews' [organic semiconductor optoelectronics group](https://polyopto.wp.st-andrews.ac.uk/) and [Heriot-Watt University](https://researchportal.hw.ac.uk/en/organisations/school-of-energy-geoscience-infrastructure-and-society), supervised by Prof Graham Turnbull. The project work involves the design of Monte Carlo-based optical models to understand the high light capture efficiency of red coralline algae, as well as image analysis using [3D tomographic reconstruction software](https://github.com/Slicer/Slicer) and [convolutional neural networks](https://github.com/anthonyk91/AssistedVolumeSegmentation). 

## Effective Altruism
There are many serious problems in the world, but only finite time and resources - the focus of [effective altruism](https://www.effectivealtruism.org/articles/introduction-to-effective-altruism/) is thus to figure out how to do the most good given what we have. 

I've been a member of [Effective Altruism St Andrews](https://www.facebook.com/EASaintAndrews/) since September 2020, and helped with the [One for the World St Andrews](https://www.facebook.com/OneForTheWorldStAndrews/) tabling team. I also contributed to the writing of the data and information policy document for [Students for Global Health](https://studentsforglobalhealth.org/) UK. 

My main interest in EA is in the [development and implications of AI](https://80000hours.org/problem-profiles/positively-shaping-artificial-intelligence/), although I'm also interested in working on [science policy](https://www.eacambridge.org/improving-science) and [farmed animal welfare](https://80000hours.org/problem-profiles/factory-farming/). You can view my EA profile [here](https://eahub.org/profile/anson-ho/). 

## Contact
- Issue with code that I've written: [open an issue on GitHub](https://github.com/spectroscopycafe)
- General comments/questions, or anything about this blog: spectroscopycafe at gmail dot com
- Professional correspondence: Either (1) *anson dot ho dot work at gmail dot com*, or (2) *whah at st-andrews dot ac dot uk*
---
layout: home
---

<head>
	<script src="/assets/js/vue.min.js"></script>
	<script src="/assets/js/vue-components.js"></script>
	<style>
		.project-grid {
			display: grid;
			grid-gap: 32px;
			vertical-align: top;
			grid-template-columns: repeat(auto-fit, minmax(250px, 47.5%));
			padding-bottom: 40px;
		}
		.project {
			vertical-align: top;
			display: grid;
			color: #111;
		}
		.project h3 {
			margin-bottom: 0px;
		}
		.project p {
			color: grey;
		}
		.project img {
			max-height: 300px;
			display: block;
			border-radius: 10%;
		}
	</style>
</head>

# Projects
Some cool things that I've been working on! These are typically things that are somewhat more polished or have had more effort put into making them than usual. For rougher, unpolished work you can see my [personal notes](https://ansonwhho.github.io/personal-notes/) and [writings](/writings/). 

**Note**: some of these projects are subject to heavy edits. 

## AI Safety
<div class="project-grid" id="aiSafetyProjects">
	<project v-for="project in aiSafetyProjects" v-bind:project="project"></project>
</div>

## Mathematics
<div class="project-grid" id="mathProjects">
	<project v-for="project in mathProjects" v-bind:project="project"></project>
</div>

## Physics
<div class="project-grid" id="physicsProjects">
	<project v-for="project in physicsProjects" v-bind:project="project"></project>
</div>

## Computer Science
<div class="project-grid" id="csProjects">
	<project v-for="project in csProjects" v-bind:project="project"></project>
</div>

## Effective Altruism
<div class="project-grid" id="eaProjects">
	<project v-for="project in eaProjects" v-bind:project="project"></project>
</div>

<script src="/assets/js/projects.js"></script>
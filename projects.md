---
layout: home
permalink: /projects/
---

<head>
	<script src="/assets/js/vue.min.js"></script>
	<script src="/assets/js/vue-components.js"></script>
	<style>
		.project-grid {
			display: grid;
			grid-gap: 32px;
			vertical-align: top;
			grid-template-columns: repeat(auto-fit, minmax(150px, 47.5%));
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

		@media screen and (max-width: 800px) { .project-grid {grid-template-columns: repeat(auto-fit, minmax(150px, 90%))}
			}
	</style>
</head>

# Projects
<div class="project-grid" id="aiSafetyProjects">
	<project v-for="project in aiSafetyProjects" v-bind:project="project"></project>
</div>


<script src="/assets/js/projects.js"></script>
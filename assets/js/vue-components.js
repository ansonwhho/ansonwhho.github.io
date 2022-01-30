Vue.component("project", {
	props: ["project"],
	template: `<a :href="project.link">
	<div class="project">
	<h3>{{ project.title }}</h3>
	<p>{{ project.subtitle }}</p>
	<div><img :src="project.image"></div>
	</div>
	</a>
	`
})
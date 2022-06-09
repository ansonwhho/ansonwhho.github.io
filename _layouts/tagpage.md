---
layout: default
---
<div class="post other-pages">
	<h1>Tag: {{ page.tag }}</h1>
	<ul>
	{% for post in site.tags[page.tag] %}
	  <li><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a> ({{ post.date | date_to_string }})<br>
	    {{ post.description }}
	  </li>
	{% endfor %}
	</ul>
</div>

<hr>
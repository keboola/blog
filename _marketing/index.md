---
layout: collect
permalink: /marketing/

title: marketing

---

<h1>asdadasd</h1>

{% for post in site.marketing %}
	{% if post.tag != "" and post.tag != nil %}
		<h1>{{ post.title }}</h1>
		<h2>{{ post.desc }}</h2>
	{% endif %}
{% endfor %}

<br><br><br><br><br><br>
test
<br>
<br>
<br>
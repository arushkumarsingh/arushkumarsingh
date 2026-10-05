---
layout: page
permalink: /repositories/
title: repositories
description: GitHub repositories and open-source projects.
nav: false
nav_order: 4
---

<div class="repositories">
  {% if site.data.repositories.github_users %}
    {% for user in site.data.repositories.github_users %}
      {% include repository/repo_user.liquid username=user %}
    {% endfor %}
  {% endif %}

  {% if site.data.repositories.github_repos %}
    {% for repo in site.data.repositories.github_repos %}
      {% include repository/repo.liquid repository=repo %}
    {% endfor %}
  {% endif %}
</div>

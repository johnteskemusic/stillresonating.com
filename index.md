---
title: index
layout: layouts/default
templateEngineOverride: njk,md
---

<header class="constrain-aspect" id="splash">
<div id="splash-card">
  <img src="/assets/icon.png" height="48px" width="48px" style="align-self: flex-end"/>
  <h1><em>still resonating</em></h1>

{% include 'about.njk' %}

</div>
</header>

## postcards and responses

{% include 'postcard-links.njk' %}

<footer>

{% include 'email.njk' %}

</footer>

<template>
  <div id="escola-pre" class="bkg-purple container">
    <h1><span class="text-highlight">Excelente!</span> Agora conte um pouco mais sobre a sua escola.</h1>
    <ul class="the-arrow-container">
      <li>
        <router-link :to="{name: 'escola'}" tag="a" class="animated-arrow">
          <span class='the-arrow -left'>
            <span class='shaft'></span>
          </span>
          <span class='main'>
            <span class='the-arrow -right'>
              <span class='shaft'></span>
            </span>
          </span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  
}
</script>

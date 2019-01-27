<template>
<div>
  <article class="article-preview">
    <div class="article-preview-info">
      <h1 class="article-preview-title">{{title}}</h1>
      <h4 v-if="subtitle" class="article-preview-subtitle">{{subtitle}}</h4>
      <h6 class="article-preview-date"><i>{{date}}</i></h6>
    </div>
  </article>
</div>
</template>

<script>
export default {
  props: ['title', 'subtitle', 'date', 'content'],
  data: function() {
    return {}
  }

}
</script>

<style>
.article-preview {
  font-family: 'Open Sans', sans-serif;
  display: flex;
  flex-direction: row;
  align-items: left;
  margin-left: 5vw;
  margin-right: 5vw;
  margin-top: 3vh;
  margin-bottom: 3vh;
}

.article-preview-info {
  flex: 3;
  display: flex;
  flex-direction: column;
}

.article-preview-img {
  flex: 1;
}

.article-preview-title {
  margin-bottom: 1vh;
}

.article-preview-subtitle {
  color: #999;
  margin-top: 1vh;
  margin-bottom: 2vh;
}

.article-preview-date {
  margin-top: 1vh;
  margin-bottom: 1vh;
}
</style>

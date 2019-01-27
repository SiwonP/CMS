<template>
<div>
  <article class="article">
    <h1 class="article-title">{{title}}</h1>
    <h3 v-if="subtitle" class="article-subtitle">{{subtitle}}</h3>
    <div class="article-content" v-for="content in contents">
      <p v-if="content.type=='text'">{{content.value}}</p>
      <img class="article-img" v-if="content.type=='img'" :src="content.value">
      <video class="article-video" v-if="content.type=='video'">
        <source :src="content.value">
      </video>
      <h4 v-if="content.type=='subtitle'">{{content.value}}</h4>
    </div>
  </article>
</div>
</template>

<script>
export default {
  props: ['title', 'content', 'subtitle'],
  data: function() {
    return {
      contents: this.content
    }
  }

}
</script>

<style>
.article {
  font-family: 'Open Sans', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 5vw;
  margin-right: 5vw;
}

.article-content {
  text-align: justify;
}

.article-title {

}

.article-img {

}
</style>

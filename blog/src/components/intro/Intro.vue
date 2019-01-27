<template>
<div>
  <div>
    <h1 class="main-title">blog</h1>
    <ArticlePreview v-for='article in articles' :key=article.id :title='article.title'
    :subtitle='article.subtitle' :content='article.content' :date='article.date'></ArticlePreview>
  </div>
</div>
</template>

<script>
import Article from '../article/Article.vue';
import ArticlePreview from '../article-preview/ArticlePreview.vue';

export default {
  data: function() {
    return {
      articles: [{
        id: 1,
        title: 'Article 1',
        date: '19-01-2018',
        subtitle: 'Subtitle 1',
        content: [{
          type: "img",
          value: "https://humancoders-formations.s3.amazonaws.com/uploads/course/logo/104/thumb_bigger_formation-vue-js.png"
        },{
          type: "text",
          value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac nisl consectetur consectetur.,Lorem ipsum dolor tomsit amet, consectetur adipiscing elit. Etiam ac nisl consectetur consectetur."
        },{
          type: "text",
          value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac nisl consectetur consectetur.,Lorem ipsum dolor tomsit amet, consectetur adipiscing elit. Etiam ac nisl consectetur consectetur."
        }]
      }, {
        id: 2,
        title: 'Article 2',
        date: '19-01-2018',
        subtitle: 'Subtitle 2',
        content: [{
          type: "text",
          value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac nisl consectetur consectetur.,Lorem ipsum dolor tomsit amet, consectetur adipiscing elit. Etiam ac nisl consectetur consectetur."
        }]
      }]
    }
  },
  components: {
    Article,
    ArticlePreview
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

.main-title {
  font-family: 'Open Sans'
}
</style>

<template>
    <div class="article">
        <article
                class="article-item"
                v-for="article in articles"
                :key="article.title"
        >
            <h3>
                <a href="">{{ article.title }}</a>
            </h3>
            <small>{{ article.date }} &#183; {{ article.author }}</small>
            <p>Lorem Ipsum</p>
            <a class="read-more" href="">Read More</a>
        </article>
    </div>
</template>

<script>
  export default {
    name: "Articles",
    data: () => {
      return {
        articles: [
          {
            title: "What Are the React Team Principles?",
            content: "UI Before API.",
            date: "11.01.2020",
            author: "Nezih Tartilaci"
          },
          {
            title: "What Is JavaScript Made Of?",
            content: "Getting a closure on JavaScript.",
            date: "11.01.2020",
            author: "Nezih Tartilaci"
          },
          {
            title: "test 2",
            content: "deneme 2",
            date: "11.01.2020",
            author: "Nezih Tartilaci"
          }
        ]
      };
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .article {
        padding: 25px 15px;
    }

    .article-item {
        text-align: left;
        max-width: 600px;
        left: 0;
        right: 0;
        margin: 0 auto;
    }

    .article-item h3 {
        font-weight: 900;
        font-size: 25px;
        line-height: 1.3em;
        margin-bottom: 0;
    }

    .article-item h3 a {
        font-size: 25px;
        line-height: 1.3em;
        font-weight: 900;
        text-decoration: none;
        color: #8130d0;
    }

    .article-item small {
        font-size: 13px;
        color: #222;
    }

    .article-item p {
        margin-top: 0.3em;
        font-size: 15px;
        color: #222;
    }

    .article-item .read-more {
        font-size: 15px;
        color: #5a189a;
        font-weight: bold;
    }

    @media screen and (max-width: 550px) {
        .article-item h3 a {
            font-size: 20px;
        }
    }
</style>

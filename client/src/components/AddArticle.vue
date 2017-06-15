<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-md-3">

      </div>
      <div class="col-md-6">
        <h1>ADD ARTICLE</h1>
        <br>
        <b-input-group left="Title">
          <b-form-input v-model="dataArticle.title" placeHolder="add your title here .."></b-form-input>
        </b-input-group>
        <br>
        <b-input-group left="Content">
          <b-form-input textarea v-model="dataArticle.content" placeHolder="add your content here .." ></b-form-input>
        </b-input-group>
        <br>
        <b-input-group left="Category">
          <b-form-input cols="5" v-model="dataArticle.category" placeHolder="add your category here .." ></b-form-input>
        </b-input-group>
        <br>
         <button class="col-md-12" type="button" name="button" @click="post()">SUBMIT</button>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dataArticle: {
        title: '',
        content: '',
        category: '',
        author: ''
      }
    }
  },
  methods: {
    post () {
      if (localStorage.getItem('token')) {
        this.axios.post('http://localhost:3000/articles', {
          title: this.dataArticle.title,
          content: this.dataArticle.content,
          category: this.dataArticle.category,
          author: this.dataArticle.author
        }, {
          headers: {
            token: localStorage.getItem('token')
          }
        })
        .then(response => {
          console.log(response.data)
          this.dataArticle.title = ''
          this.dataArticle.content = ''
          this.dataArticle.category = ''
          this.dataArticle.author = ''
        })
        .catch(err => {
          console.log('this is an error ', err)
        })
      }
    }
  },
  created () {
    if (localStorage.getItem('token')) {
      this.islogin = true
      this.author = localStorage.getItem('user')
    }
  }
}
</script>

<style lang="css">
</style>

<template lang="html">
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-3">

        </div>
        <div class="col-md-6">
          <b-card no-block>
            <b-tabs small card ref="tabs" >
              <b-tab title="Sign In">

                <b-input-group left="Username">
                  <b-form-input v-model="dataUserLogin.user" ></b-form-input>
                </b-input-group>
                <br>
                <b-input-group left="Passoword">
                  <b-form-input v-model="dataUserLogin.password" type="password"></b-form-input>
                </b-input-group>
                <br>
                <button class="col-md-12" type="button" name="button" @click="login()">LOGIN</button>

              </b-tab>
              <b-tab title="Sign Up">
                <b-input-group left="Username">
                  <b-form-input v-model="dataUserRegis.user" ></b-form-input>
                </b-input-group>
                <br>
                <b-input-group left="Passoword">
                  <b-form-input type="password" v-model="dataUserRegis.password"></b-form-input>
                </b-input-group>
                <br>
                <button class="col-md-12" type="button" name="button" @click="regis()">SIGN UP</button>
              </b-tab>
            </b-tabs>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dataUserLogin: {
        user: '',
        password: ''
      },
      dataUserRegis: {
        user: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.axios.post('http://localhost:3000/users/signin', {
        user: this.dataUserLogin.user,
        password: this.dataUserLogin.password
      })
      .then(response => {
        console.log(response.data)
        this.dataUserLogin.user = ''
        this.dataUserLogin.password = ''
        if (response.data) {
          var token = response.data.token
          localStorage.setItem('token', token)
          localStorage.setItem('user', response.data.user)
          this.$router.push('/')
        }
      })
      .catch(err => {
        console.log('this is an error ', err)
      })
    }
  }
}

</script>

<style lang="css">
</style>

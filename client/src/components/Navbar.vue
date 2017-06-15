<template lang="html">
  <div id="app">
    <b-navbar v-if="nilailogin == true" toggleable type="inverse" variant="success">

      <b-nav-toggle target="nav_collapse"></b-nav-toggle>

      <b-link class="navbar-brand" to="#">
        <span>Hacktivpress</span>
      </b-link>

      <b-collapse is-nav id="nav_collapse">

        <b-nav is-nav-bar>

          <b-nav-item>Welcome, {{ nama }}</b-nav-item>
        </b-nav>

        <b-nav is-nav-bar class="ml-auto">

          <!-- Navbar dropdowns -->
          <b-nav-item-dropdown text="Menu" right>
            <b-dropdown-item to='./add'>+ ADD</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>

            <!-- Using text slot -->
            <template slot="text">
              <span style="font-weight: bold;">User</span>
            </template>

            <b-dropdown-item @click="logout()">Logout</b-dropdown-item>
          </b-nav-item-dropdown>

        </b-nav>
      </b-collapse>
    </b-navbar>
    <b-navbar v-else toggleable type="inverse" variant="success">

      <b-nav-toggle target="nav_collapse"></b-nav-toggle>

      <b-link class="navbar-brand" to="#">
        <span>BootstrapVue</span>
      </b-link>

      <b-collapse is-nav id="nav_collapse">

        <b-nav is-nav-bar>
          <b-nav-item>Support</b-nav-item>
          <b-nav-item>Docs</b-nav-item>
          <b-nav-item>Contact Us</b-nav-item>
        </b-nav>

        <b-nav is-nav-bar class="ml-auto">

          <!-- Navbar dropdowns -->
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item to="#">EN</b-dropdown-item>
            <b-dropdown-item to="#">ES</b-dropdown-item>
            <b-dropdown-item to="#">RU</b-dropdown-item>
            <b-dropdown-item to="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>

            <!-- Using text slot -->
            <template slot="text">
              <span style="font-weight: bold;">User</span>
            </template>

            <b-dropdown-item to='./auth'>Sign In</b-dropdown-item>
          </b-nav-item-dropdown>

        </b-nav>
      </b-collapse>
    </b-navbar>

  </div>
</template>

<script>
import Login from '@/components/Login'
import AddArticle from '@/components/AddArticle'
export default {
  props: ['nilailogin'],
  data () {
    return {
      nama: ''
    }
  },
  components: {
    Login,
    AddArticle
  },
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/login')
      // location.reload()
    }
  },
  created () {
    if (localStorage.getItem('token')) {
      this.islogin = true
      this.nama = localStorage.getItem('user')
    }
  }
}
</script>

<style lang="css">
</style>

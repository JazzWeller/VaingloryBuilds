<template>
  <div class="about">
    <div v-if="this.user != ''">
    <div id="loadImages" v-if="false">
      <img src='@/images/adagio.png' />
      <img src='@/images/alpha.png' />
      <img src='@/images/amael.png' />
      <img src='@/images/anka.png' />
      <img src='@/images/ardan.png' />
      <img src='@/images/baptiste.png' />
      <img src='@/images/baron.png' />
      <img src='@/images/blackfeather.png' />
      <img src='@/images/caine.png' />
      <img src='@/images/catherine.png' />
      <img src='@/images/celeste.png' />
      <img src='@/images/churnwalker.png' />
      <img src='@/images/flicker.png' />
      <img src='@/images/fortress.png' />
      <img src='@/images/glaive.png' />
      <img src='@/images/grace.png' />
      <img src='@/images/grumpjaw.png' />
      <img src='@/images/gwen.png' />
      <img src='@/images/idris.png' />
      <img src='@/images/inara.png' />
      <img src='@/images/ishtar.png' />
      <img src='@/images/joule.png' />
      <img src='@/images/karas.png' />
      <img src='@/images/kensei.png' />
      <img src='@/images/kestrel.png' />
      <img src='@/images/kinetic.png' />
      <img src='@/images/koshka.png' />
      <img src='@/images/krul.png' />
      <img src='@/images/lance.png' />
      <img src='@/images/leo.png' />
      <img src='@/images/lorelai.png' />
      <img src='@/images/lyra.png' />
      <img src='@/images/magnus.png' />
      <img src='@/images/malene.png' />
      <img src='@/images/miho.png' />
      <img src='@/images/ozo.png' />
      <img src='@/images/petal.png' />
      <img src='@/images/phinn.png' />
      <img src='@/images/reim.png' />
      <img src='@/images/reza.png' />
      <img src='@/images/ringo.png' />
      <img src='@/images/rona.png' />
      <img src='@/images/samuel.png' />
      <img src='@/images/san-feng.png' />
      <img src='@/images/saw.png' />
      <img src='@/images/shin.png' />
      <img src='@/images/silvernail.png' />
      <img src='@/images/skaarf.png' />
      <img src='@/images/skye.png' />
      <img src='@/images/taka.png' />
      <img src='@/images/tony.png' />
      <img src='@/images/varya.png' />
      <img src='@/images/viola.png' />
      <img src='@/images/vox.png' />
      <img src='@/images/warhawk.png' />
      <img src='@/images/yates.png' />
      <img src='@/images/ylva.png' />
    </div>
    <div id="head">
      <h1>Select a Hero</h1>
    </div>
    <div id="imagesDiv">
    <div class="images">
      <div class="image" v-for="hero in heroes" :key="hero.id" @click="heroSelect(hero._id)">
        <p><b> {{hero.name}} </b></p>
        <router-link to="/build" >
          <img :src="hero.path" />
        </router-link>
      </div>
    </div>
    </div>
    </div>
    <Login v-else />
  </div>
</template>

<script>
import axios from 'axios';
import Login from '@/components/Login.vue';
export default {
  data() {
    return {
      heroes: [],
      user: '',
      selectedHeroId: "",
    }
  },
  components: {
    Login,
  },
  created() {
    document.title = "Select Hero";
    this.getHeroes();
  },
  async mounted() {
    try {
      let response = await axios.get('/api/users');
      this.$root.$data.user = response.data.user;
      this.user = this.$root.$data.user;
    } catch (error) {
      this.$root.$data.user = null;
    }
  },
  methods: {
    async getHeroes() {
      try {
        let response = await axios.get("/api/heroes");
        this.heroes = response.data;
        return true;
      } catch (error) {
        //console.log(error);
      }
    },
    heroSelect(id) {
      this.$root.$data.selectedHeroId = id;
    },
  }
}
</script>

<style scoped>
.build {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.item {
  display: flex;
}

/* Masonry */
*,
*:before,
*:after {
  box-sizing: inherit;
}

.images {
  column-gap: 1em;
}

.image {
  margin: 0 0 1.5em 0;
  display: inline-block;
  width: 100%;
}

.image img {
  width: 150px;
}

/* Masonry on largest screens */
@media only screen and (min-width: 1920px) {
  .images {
    column-count: 6;
  }
  .image img {
    width: 220px;
  }
  p {
    font-size: 30px;
  }
  h1 {
    font-size: 70px;
  }
}

/* Masonry on larger screens */
@media only screen and (max-width: 1920px) and (min-width: 1440px) {
  .images {
    column-count: 5;
  }
}

/* Masonry on large screens */
@media only screen and (max-width: 1439px) and (min-width: 1024px) {
  .images {
    column-count: 4;
  }
}

/* Masonry on medium-sized screens */
@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .images {
    column-count: 3;
  }
}

/* Masonry on small screens */
@media only screen and (max-width: 767px) and (min-width: 540px) {
  .images {
    column-count: 2;
  }
}
</style>

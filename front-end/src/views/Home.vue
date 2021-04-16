<template>
  <div class="home">
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
      <img src='@/images/items/aegis.png' />
      <img src='@/images/items/aftershock.png' />
      <img src='@/images/items/alternating-current.png' />
      <img src='@/images/items/atlas-pauldron.png' />
      <img src='@/images/items/bonesaw.png' />
      <img src='@/images/items/breaking-point.png' />
      <img src='@/images/items/broken-myth.png' />
      <img src='@/images/items/capacitor-plate.png' />
      <img src='@/images/items/celestial-shroud.png' />
      <img src='@/images/items/clockwork.png' />
      <img src='@/images/items/contraption.png' />
      <img src='@/images/items/crucible.png' />
      <img src='@/images/items/dragons-eye.png' />
      <img src='@/images/items/eve-of-harvest.png' />
      <img src='@/images/items/fountain-of-renewal.png' />
      <img src='@/images/items/frostburn.png' />
      <img src='@/images/items/halcyon-chargers.png' />
      <img src='@/images/items/journey-boots.png' />
      <img src='@/images/items/metal-jacket.png' />
      <img src='@/images/items/poisoned-shiv.png' />
      <img src='@/images/items/pulseweave.png' />
      <img src='@/images/items/rooks-decree.png' />
      <img src='@/images/items/serpent-mask.png' />
      <img src='@/images/items/shatterglass.png' />
      <img src='@/images/items/shiversteel.png' />
      <img src='@/images/items/slumbering-husk.png' />
      <img src='@/images/items/sorrowblade.png' />
      <img src='@/images/items/spellfire.png' />
      <img src='@/images/items/spellsword.png' />
      <img src='@/images/items/stormcrown.png' />
      <img src='@/images/items/superscout-2000.png' />
      <img src='@/images/items/teleport-boots.png' />
      <img src='@/images/items/tension-bow.png' />
      <img src='@/images/items/tornado-trigger.png' />
      <img src='@/images/items/tyrants-monocle.png' />
      <img src='@/images/items/war-treads.png' />
    </div>
    <div id="images">
      <div class="image" v-for="build in builds" :key="build.id">
        <div class="heroDiv">
          <img class="hero" :src=getHeroPath(build.heroe) />
          <p v-if="getHero(build.heroe) != null">{{getHero(build.heroe).name}}</p>
        </div>
        <div>
          <p><b> {{build.name}} </b></p>
          <div class="itemHolder"> 
          <div class="item">
          <img class="itemImg" :src=getItemPath(build.items[0]) />
          <span class="tooltiptext" v-if="getItem(build.items[0]) != null">
            <h2><b> {{getItem(build.items[0]).name}} </b></h2>
            <p> {{getItem(build.items[0]).cost}}g </p>
            <p> {{getItem(build.items[0]).firststat}}: {{getItem(build.items[0]).firststatvalue}} </p>
            <p v-if="getItem(build.items[0]).secondstat != ''"> {{getItem(build.items[0]).secondstat}}: {{getItem(build.items[0]).secondstatvalue}} </p>
            <p v-if="getItem(build.items[0]).thirdstat != ''"> {{getItem(build.items[0]).thirdstat}}: {{getItem(build.items[0]).thirdstatvalue}} </p>
            <p v-if="getItem(build.items[0]).fourthstat != ''"> {{getItem(build.items[0]).fourthstat}}: {{getItem(build.items[0]).fourthstatvalue}} </p>
            <p v-if="getItem(build.items[0]).fifthstat != ''"> {{getItem(build.items[0]).fifthstat}}: {{getItem(build.items[0]).fifthstatvalue}} </p>
            <p> {{getItem(build.items[0]).desc}} </p><br>
          </span>
          </div>
          <div class="item">
          <img class="itemImg" :src=getItemPath(build.items[1]) />
          <span class="tooltiptext" v-if="getItem(build.items[0]) != null">
            <h2><b> {{getItem(build.items[1]).name}} </b></h2>
            <p> {{getItem(build.items[1]).cost}}g </p>
            <p> {{getItem(build.items[1]).firststat}}: {{getItem(build.items[1]).firststatvalue}} </p>
            <p v-if="getItem(build.items[1]).secondstat != ''"> {{getItem(build.items[1]).secondstat}}: {{getItem(build.items[1]).secondstatvalue}} </p>
            <p v-if="getItem(build.items[1]).thirdstat != ''"> {{getItem(build.items[1]).thirdstat}}: {{getItem(build.items[1]).thirdstatvalue}} </p>
            <p v-if="getItem(build.items[1]).fourthstat != ''"> {{getItem(build.items[1]).fourthstat}}: {{getItem(build.items[1]).fourthstatvalue}} </p>
            <p v-if="getItem(build.items[1]).fifthstat != ''"> {{getItem(build.items[1]).fifthstat}}: {{getItem(build.items[1]).fifthstatvalue}} </p>
            <p> {{getItem(build.items[1]).desc}} </p><br>
          </span>
          </div>
          <div class="item">
          <img class="itemImg" :src=getItemPath(build.items[2]) />
          <span class="tooltiptext" v-if="getItem(build.items[0]) != null">
            <h2><b> {{getItem(build.items[2]).name}} </b></h2>
            <p> {{getItem(build.items[2]).cost}}g </p>
            <p> {{getItem(build.items[2]).firststat}}: {{getItem(build.items[2]).firststatvalue}} </p>
            <p v-if="getItem(build.items[2]).secondstat != ''"> {{getItem(build.items[2]).secondstat}}: {{getItem(build.items[2]).secondstatvalue}} </p>
            <p v-if="getItem(build.items[2]).thirdstat != ''"> {{getItem(build.items[2]).thirdstat}}: {{getItem(build.items[2]).thirdstatvalue}} </p>
            <p v-if="getItem(build.items[2]).fourthstat != ''"> {{getItem(build.items[2]).fourthstat}}: {{getItem(build.items[2]).fourthstatvalue}} </p>
            <p v-if="getItem(build.items[2]).fifthstat != ''"> {{getItem(build.items[2]).fifthstat}}: {{getItem(build.items[2]).fifthstatvalue}} </p>
            <p> {{getItem(build.items[2]).desc}} </p><br>
          </span>
          </div>
          <div class="item">
          <img class="itemImg" :src=getItemPath(build.items[3]) />
          <span class="tooltiptext" v-if="getItem(build.items[0]) != null">
            <h2><b> {{getItem(build.items[3]).name}} </b></h2>
            <p> {{getItem(build.items[3]).cost}}g </p>
            <p> {{getItem(build.items[3]).firststat}}: {{getItem(build.items[3]).firststatvalue}} </p>
            <p v-if="getItem(build.items[3]).secondstat != ''"> {{getItem(build.items[3]).secondstat}}: {{getItem(build.items[3]).secondstatvalue}} </p>
            <p v-if="getItem(build.items[3]).thirdstat != ''"> {{getItem(build.items[3]).thirdstat}}: {{getItem(build.items[3]).thirdstatvalue}} </p>
            <p v-if="getItem(build.items[3]).fourthstat != ''"> {{getItem(build.items[3]).fourthstat}}: {{getItem(build.items[3]).fourthstatvalue}} </p>
            <p v-if="getItem(build.items[3]).fifthstat != ''"> {{getItem(build.items[3]).fifthstat}}: {{getItem(build.items[3]).fifthstatvalue}} </p>
            <p> {{getItem(build.items[3]).desc}} </p><br>
          </span>
          </div>
          <div class="item">
          <img class="itemImg" :src=getItemPath(build.items[4]) />
          <span class="tooltiptext" v-if="getItem(build.items[0]) != null">
            <h2><b> {{getItem(build.items[4]).name}} </b></h2>
            <p> {{getItem(build.items[4]).cost}}g </p>
            <p> {{getItem(build.items[4]).firststat}}: {{getItem(build.items[4]).firststatvalue}} </p>
            <p v-if="getItem(build.items[4]).secondstat != ''"> {{getItem(build.items[4]).secondstat}}: {{getItem(build.items[4]).secondstatvalue}} </p>
            <p v-if="getItem(build.items[4]).thirdstat != ''"> {{getItem(build.items[4]).thirdstat}}: {{getItem(build.items[4]).thirdstatvalue}} </p>
            <p v-if="getItem(build.items[4]).fourthstat != ''"> {{getItem(build.items[4]).fourthstat}}: {{getItem(build.items[4]).fourthstatvalue}} </p>
            <p v-if="getItem(build.items[4]).fifthstat != ''"> {{getItem(build.items[4]).fifthstat}}: {{getItem(build.items[4]).fifthstatvalue}} </p>
            <p> {{getItem(build.items[4]).desc}} </p><br>
          </span>
          </div>
          <div class="item">
          <img class="itemImg" :src=getItemPath(build.items[5]) />
          <span class="tooltiptext" v-if="getItem(build.items[0]) != null">
            <h2><b> {{getItem(build.items[5]).name}} </b></h2>
            <p> {{getItem(build.items[5]).cost}}g </p>
            <p> {{getItem(build.items[5]).firststat}}: {{getItem(build.items[5]).firststatvalue}} </p>
            <p v-if="getItem(build.items[5]).secondstat != ''"> {{getItem(build.items[5]).secondstat}}: {{getItem(build.items[5]).secondstatvalue}} </p>
            <p v-if="getItem(build.items[5]).thirdstat != ''"> {{getItem(build.items[5]).thirdstat}}: {{getItem(build.items[5]).thirdstatvalue}} </p>
            <p v-if="getItem(build.items[5]).fourthstat != ''"> {{getItem(build.items[5]).fourthstat}}: {{getItem(build.items[5]).fourthstatvalue}} </p>
            <p v-if="getItem(build.items[5]).fifthstat != ''"> {{getItem(build.items[5]).fifthstat}}: {{getItem(build.items[5]).fifthstatvalue}} </p>
            <p> {{getItem(build.items[5]).desc}} </p><br>
          </span>
          </div>
          </div>
          <div v-if="user != null">
          <div class="functions" v-if="build.user == user._id" >
            <a href="#" @click="setupEdit(build)"><router-link to="/edit"> edit </router-link></a>
            <a href="#" @click="deleteBuild(build)"> delete </a>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      builds: [],
      heroes: [],
      items: [],
      user: '',
    }
  },
  created() {
    document.title = "Vainglory Builds";
    this.getBuilds();
    this.getHeroes();
    this.getItems();
    this.user = this.$root.$data.user;
  },
  updated() {
    this.getBuilds();
  },
  methods: {
    async getBuilds() {
      try {
        let response = await axios.get("/api/builds");
        this.builds = response.data;
        return true;
      } catch (error) {
        //console.log(error);
      }
    },
    async getHeroes() {
      try {
        let response = await axios.get("/api/heroes");
        this.heroes = response.data;
        return true;
      } catch (error) {
        //console.log(error);
      }
    },
    async getItems() {
      try {
        let response = await axios.get("/api/items");
        this.items = response.data;
        return true;
      } catch (error) {
        //console.log(error);
      }
    },
    getHero(id) {
      var i;
      for (i=0; i < this.heroes.length; i++) {
	if (this.heroes[i]._id == id) {
          return this.heroes[i];
        }
      }
    },
    getItem(id) {
      var i;
      for (i=0; i < this.items.length; i++) {
	if (this.items[i]._id == id) {
          return this.items[i];
        }
      }
    },
    getHeroPath(id) {
      var i;
      for (i=0; i < this.heroes.length; i++) {
	if (this.heroes[i]._id == id) {
          return this.heroes[i].path;
        }
      }
    },
    getItemPath(id) {
      var i;
      for (i=0; i < this.items.length; i++) {
	if (this.items[i]._id == id) {
          return this.items[i].path;
        }
      }
    },
    async deleteBuild(build) {
      try {
        scroll(0, 0);
        await axios.delete(`/api/builds/${build._id}`);
        return true;
      } catch (error) {
        //console.log(error);
      }
    },
    setupEdit(build) {
      this.$root.$data.buildToEdit = build;
    },
  },
}
</script>

<style scoped>
.images {
  column-gap: 1em;
}

.image {
  margin: 1.5em auto 1.5em auto;
  padding: 1.5em 0 0 0;
  display: flex;
  justify-content: center;
  border: 5px solid black;
  border-radius: 25px;
  color: white;
  background-color: #404040;
  width: 60%;
}

.itemHolder {
  display: flex;
}

.hero {
  width: 130px;
  border-radius: 15px;
}

.itemImg {
  width: 100px;
}

p {
  padding-bottom: 1em;
}

.heroDiv {
  margin-right: 2em;
}

.item .tooltiptext {
  visibility: hidden;
  width: 500px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
}

.item:hover .tooltiptext {
  visibility: visible;
}

a {
  color: white;
  text-decoration: none;
  margin-left: 5px;
  font-size: 13px;
}

a:hover {
  color: #C20000;
}

.functions {
  text-align: right;
  margin-right: .8em;
}

@media only screen and (min-width: 1920px) {
  .itemHolder {
    display: flex;
    flex-direction: row;
  }
  .image {
    width: 43%;
    margin: 1.5em auto 1.5em auto;
  }
}

@media only screen and (max-width: 1920px) and (min-width: 1440px) {
  .itemHolder {
    display: flex;
    flex-direction: row;
  }
  .image {
    width: 60%;
    margin: 1.5em auto 1.5em auto;
  }
}

@media only screen and (max-width: 1439px) and (min-width: 1024px) {
  .itemHolder {
    display: flex;
    flex-direction: row;
  }
  .image {
    width: 80%;
    margin: 1.5em auto 1.5em auto;
  }
}

@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .itemHolder {
    display: flex;
    flex-direction: column;
  }
  .image {
    width: 50%;
    margin: 1.5em auto 1.5em auto;
  }
}

@media only screen and (max-width: 767px) and (min-width: 540px) {
  .itemHolder {
    display: block;
  }
  .image {
    width: 100%;
    margin: 1.5em auto 1.5em auto;
  }
  
}

@media only screen and (max-width: 540px) {
  .itemHolder {
    display: block;
  }
  .image {
    width: 100%;
    margin: 1.5em auto 1.5em auto;
  }
}
</style>

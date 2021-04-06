<template>
  <div class="about">
    <div id="loadImages" v-if="false">
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
    <div id="head">
      <h1>Select your Items</h1>
      <div id='build'>
        <div>
          <input v-model="name" type="text" placeholder="Enter Build Name Here">
        </div>
        <div class="break"></div>
        <div class="break"></div>
        <div class='item'>
          <p id='itemOneText'>Blank</p>
          <a href="#" @click="itemRemove(1)">
          <img class='itemImage' id='itemOne' src='@/images/blank.png' />
          <span class="tooltiptext" v-if="this.selectedItemOne != ''">
            <h2><b> {{this.selectedItemOne.name}} </b></h2>
            <p> {{this.selectedItemOne.cost}}g </p>
            <p> {{this.selectedItemOne.firststat}}: {{this.selectedItemOne.firststatvalue}} </p>
            <p v-if="this.selectedItemOne.secondstat != ''"> {{this.selectedItemOne.secondstat}}: {{this.selectedItemOne.secondstatvalue}} </p>
            <p v-if="this.selectedItemOne.thirdstat != ''"> {{this.selectedItemOne.thirdstat}}: {{this.selectedItemOne.thirdstatvalue}} </p>
            <p v-if="this.selectedItemOne.fourthstat != ''"> {{this.selectedItemOne.fourthstat}}: {{this.selectedItemOne.fourthstatvalue}} </p>
            <p v-if="this.selectedItemOne.fifthstat != ''"> {{this.selectedItemOne.fifthstat}}: {{this.selectedItemOne.fifthstatvalue}} </p>
            <p> {{this.selectedItemOne.desc}} </p><br>
          </span>
          </a>
        </div>
        <div class='item'>
          <p id='itemTwoText'>Blank</p>
          <a href="#" @click="itemRemove(2)">
          <img class='itemImage' id='itemTwo' src='@/images/blank.png' />
          <span class="tooltiptext" v-if="this.selectedItemTwo != ''">
            <h2><b> {{this.selectedItemTwo.name}} </b></h2>
            <p> {{this.selectedItemTwo.cost}}g </p>
            <p> {{this.selectedItemTwo.firststat}}: {{this.selectedItemTwo.firststatvalue}} </p>
            <p v-if="this.selectedItemTwo.secondstat != ''"> {{this.selectedItemTwo.secondstat}}: {{this.selectedItemTwo.secondstatvalue}} </p>
            <p v-if="this.selectedItemTwo.thirdstat != ''"> {{this.selectedItemTwo.thirdstat}}: {{this.selectedItemTwo.thirdstatvalue}} </p>
            <p v-if="this.selectedItemTwo.fourthstat != ''"> {{this.selectedItemTwo.fourthstat}}: {{this.selectedItemTwo.fourthstatvalue}} </p>
            <p v-if="this.selectedItemTwo.fifthstat != ''"> {{this.selectedItemTwo.fifthstat}}: {{this.selectedItemTwo.fifthstatvalue}} </p>
            <p> {{this.selectedItemTwo.desc}} </p><br>
          </span>
          </a>
        </div>
        <div class='item'>
          <p id='itemThreeText'>Blank</p>
          <a href="#" @click="itemRemove(3)">
          <img class='itemImage' id='itemThree' src='@/images/blank.png' />
          <span class="tooltiptext" v-if="this.selectedItemThree != ''">
            <h2><b> {{this.selectedItemThree.name}} </b></h2>
            <p> {{this.selectedItemThree.cost}}g </p>
            <p> {{this.selectedItemThree.firststat}}: {{this.selectedItemThree.firststatvalue}} </p>
            <p v-if="this.selectedItemThree.secondstat != ''"> {{this.selectedItemThree.secondstat}}: {{this.selectedItemThree.secondstatvalue}} </p>
            <p v-if="this.selectedItemThree.thirdstat != ''"> {{this.selectedItemThree.thirdstat}}: {{this.selectedItemThree.thirdstatvalue}} </p>
            <p v-if="this.selectedItemThree.fourthstat != ''"> {{this.selectedItemThree.fourthstat}}: {{this.selectedItemThree.fourthstatvalue}} </p>
            <p v-if="this.selectedItemThree.fifthstat != ''"> {{this.selectedItemThree.fifthstat}}: {{this.selectedItemThree.fifthstatvalue}} </p>
            <p> {{this.selectedItemThree.desc}} </p><br>
          </span>
          </a>
        </div>
        <div class='item'>
          <p id='itemFourText'>Blank</p>
          <a href="#" @click="itemRemove(4)">
          <img class='itemImage' id='itemFour' src='@/images/blank.png' />
          <span class="tooltiptext" v-if="this.selectedItemFour != ''">
            <h2><b> {{this.selectedItemFour.name}} </b></h2>
            <p> {{this.selectedItemFour.cost}}g </p>
            <p> {{this.selectedItemFour.firststat}}: {{this.selectedItemFour.firststatvalue}} </p>
            <p v-if="this.selectedItemFour.secondstat != ''"> {{this.selectedItemFour.secondstat}}: {{this.selectedItemFour.secondstatvalue}} </p>
            <p v-if="this.selectedItemFour.thirdstat != ''"> {{this.selectedItemFour.thirdstat}}: {{this.selectedItemFour.thirdstatvalue}} </p>
            <p v-if="this.selectedItemFour.fourthstat != ''"> {{this.selectedItemFour.fourthstat}}: {{this.selectedItemFour.fourthstatvalue}} </p>
            <p v-if="this.selectedItemFour.fifthstat != ''"> {{this.selectedItemFour.fifthstat}}: {{this.selectedItemFour.fifthstatvalue}} </p>
            <p> {{this.selectedItemFour.desc}} </p><br>
          </span>
          </a>
        </div>
        <div class='item'>
          <p id='itemFiveText'>Blank</p>
          <a href="#" @click="itemRemove(5)">
          <img class='itemImage' id='itemFive' src='@/images/blank.png' />
          <span class="tooltiptext" v-if="this.selectedItemFive != ''">
            <h2><b> {{this.selectedItemFive.name}} </b></h2>
            <p> {{this.selectedItemFive.cost}}g </p>
            <p> {{this.selectedItemFive.firststat}}: {{this.selectedItemFive.firststatvalue}} </p>
            <p v-if="this.selectedItemFive.secondstat != ''"> {{this.selectedItemFive.secondstat}}: {{this.selectedItemFive.secondstatvalue}} </p>
            <p v-if="this.selectedItemFive.thirdstat != ''"> {{this.selectedItemFive.thirdstat}}: {{this.selectedItemFive.thirdstatvalue}} </p>
            <p v-if="this.selectedItemFive.fourthstat != ''"> {{this.selectedItemFive.fourthstat}}: {{this.selectedItemFive.fourthstatvalue}} </p>
            <p v-if="this.selectedItemFive.fifthstat != ''"> {{this.selectedItemFive.fifthstat}}: {{this.selectedItemFive.fifthstatvalue}} </p>
            <p> {{this.selectedItemFive.desc}} </p><br>
          </span>
          </a>
        </div>
        <div class='item'>
          <p id='itemSixText'>Blank</p>
          <a href="#" @click="itemRemove(6)">
          <img class='itemImage' id='itemSix' src='@/images/blank.png' />
          <span class="tooltiptext" v-if="this.selectedItemSix != ''">
            <h2><b> {{this.selectedItemSix.name}} </b></h2>
            <p> {{this.selectedItemSix.cost}}g </p>
            <p> {{this.selectedItemSix.firststat}}: {{this.selectedItemSix.firststatvalue}} </p>
            <p v-if="this.selectedItemSix.secondstat != ''"> {{this.selectedItemSix.secondstat}}: {{this.selectedItemSix.secondstatvalue}} </p>
            <p v-if="this.selectedItemSix.thirdstat != ''"> {{this.selectedItemSix.thirdstat}}: {{this.selectedItemSix.thirdstatvalue}} </p>
            <p v-if="this.selectedItemSix.fourthstat != ''"> {{this.selectedItemSix.fourthstat}}: {{this.selectedItemSix.fourthstatvalue}} </p>
            <p v-if="this.selectedItemSix.fifthstat != ''"> {{this.selectedItemSix.fifthstat}}: {{this.selectedItemSix.fifthstatvalue}} </p>
            <p> {{this.selectedItemSix.desc}} </p><br>
          </span>
          </a>
        </div>
        <div class="break"></div>
        <div class="break"></div>
        <div @click="submitBuild()">
          <router-link to="/" >
            <button>
              <h2>Submit Build</h2>
            </button>
          </router-link>
        </div>
      </div>
    </div>
    <div id="imagesDiv">
    <div class="images">
      <div class="image" v-for="item in items" :key="item.id">
        <a href="#" @click="itemSelect(item)">
          <img class="selectableItem" :src="item.path" style="width:70px;"/>
        </a>
        <h2><b> {{item.name}} </b></h2>
        <p> {{item.cost}}g </p>
        <p> {{item.firststat}}: {{item.firststatvalue}} </p>
        <p v-if="item.secondstat != ''"> {{item.secondstat}}: {{item.secondstatvalue}} </p>
        <p v-if="item.thirdstat != ''"> {{item.thirdstat}}: {{item.thirdstatvalue}} </p>
        <p v-if="item.fourthstat != ''"> {{item.fourthstat}}: {{item.fourthstatvalue}} </p>
        <p v-if="item.fifthstat != ''"> {{item.fifthstat}}: {{item.fifthstatvalue}} </p>
        <p> {{item.desc}} </p><br>
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
      items: [],
      name: "",
      selectedItemIdOne: "",
      selectedItemIdTwo: "",
      selectedItemIdThree: "",
      selectedItemIdFour: "",
      selectedItemIdFive: "",
      selectedItemIdSix: "",
      selectedItemOne: "",
      selectedItemTwo: "",
      selectedItemThree: "",
      selectedItemFour: "",
      selectedItemFive: "",
      selectedItemSix: "",
    }
  },
  created() {
    document.title = 'Create Build';
    this.getItems();
  },
  methods: {
    async getItems() {
      try {
        let response = await axios.get("/api/items");
        this.items = response.data;
        return true;
      } catch (error) {
        //console.log(error);
      }
    },
    itemSelect(itemz) {
      if (this.selectedItemIdOne == "") {
        this.selectedItemOne = itemz;
	this.selectedItemIdOne = itemz._id;
        document.getElementById("itemOneText").innerHTML = itemz.name;
        document.getElementById("itemOne").src = itemz.path;
      }
      else if (this.selectedItemIdTwo == "") {
        this.selectedItemTwo = itemz;
	this.selectedItemIdTwo = itemz._id;
        document.getElementById("itemTwoText").innerHTML = itemz.name;
        document.getElementById("itemTwo").src = itemz.path;
      }
      else if (this.selectedItemIdThree == "") {
        this.selectedItemThree = itemz;
	this.selectedItemIdThree = itemz._id;
        document.getElementById("itemThreeText").innerHTML = itemz.name;
        document.getElementById("itemThree").src = itemz.path;
      }
      else if (this.selectedItemIdFour == "") {
        this.selectedItemFour = itemz;
	this.selectedItemIdFour = itemz._id;
        document.getElementById("itemFourText").innerHTML = itemz.name;
        document.getElementById("itemFour").src = itemz.path;
      }
      else if (this.selectedItemIdFive == "") {
        this.selectedItemFive = itemz;
	this.selectedItemIdFive = itemz._id;
        document.getElementById("itemFiveText").innerHTML = itemz.name;
        document.getElementById("itemFive").src = itemz.path;
      }
      else if (this.selectedItemIdSix == "") {
        this.selectedItemSix = itemz;
	this.selectedItemIdSix = itemz._id;
        document.getElementById("itemSixText").innerHTML = itemz.name;
        document.getElementById("itemSix").src = itemz.path;
      }
    },
    itemRemove(num) {
      var imgSrc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADr8AAA6/ATgFUyQAAAN0SURBVHhe7ZnbctpAEERhuQhWkv//U50np7tnK3ZSjuxO3qQ+gLQXUJVOzQ6zcD59xqVdlnVZ16VeLzi9LGxoZGZvrVl20NLIXKPzPK6yO9o4f6Cd2wwWPHDnkDYvbOswrx0jfbTxhCKc0ek4Ln3HpsAnsuAJMhAyM24ed08zaqnNyFlnWuF7Oocwh3G0+jousVP+lCU7ZQDnssUwkzF1dISyMsUH5/imc/t8Ue+G32R1RgxuHUsNwMVaK06SBDocYRgxwJC2ytSytMtlXGW/vMvqz6es4Oa51LQQO7XgqVFlMHrR8f2Mx/UApsCQ9Xg8eONg5OmhDaGGTMSO5OhZs7/c9dv1VhfZPZQ1PSbdtkSxJWFocBDADtebVuBwpB7P99tUFzoC7X6/SUJpKhFoyxhyllooCzBVJ/rjkVXWNB3IFEBJRSs0wJBhDcUI4lhJUT5XSNEV2hrCFOJxXOMwNNx36VBYddaWVCRZeFEhZ9jnCEFQPftzXOBINIpgsNAWF1cd6YnCGEjq6MmYw2DvfXz6YDTePWuFWnissOiIEVWt8eIkx/llOD56PLAMKQUeYIugUKAf5SdNlSrWXIq7086r9C1a7e6oC2tMq4w5SYoYUjIp0Om739Bs0xRIPCzzi8RAEfNXLcuhSun/0g5Rpm+gBE8l2NnUVyEEcUUyqtjTPDc01/GJA6MEX4r0em/KGB6oqq63o2xotqEsSaKz4akyF49UNt1jajDqLCYmVRDUNbY3nJnuhyvTN4AsxU8Jo6sSRnuPx2O8K4imH9VLlMJp5Pj5+Tzihmabxo1y/TQqS8znqNJ3/b/DP9MUSihDGU5D1XzcDc02tTdEbNEZl2Fi6u9AFjOW";
      imgSrc += "6nhE1XLwDc02kKWspe+/1v78Zyx8BKUDf0uAqcsx/qH5HxhZKEOvt2z9vub8+uM1Zfo3Ob+9vY1m+IpkdIPIMogsg8gyiCyDyDKILIPIMogsg8gyiCyDyDKILIPIMogsg8gyiCyDyDKILIPIMogsg8gyiCyDyDKILIPIMogsg8gyiCyDyDKILIPIMogsg8gyiCyDyDKILIPIMogsg8gyiCyDyDKILIPIMogsg8gyiCyDyDKILIPIMogsg8gyiCyDyDKILIPIMogsg8gyiCyDyDKILIPIMogsg8gyiCyDyDKILIPIMoisb3M6/QSh0j1WNvwQQQAAAABJRU5ErkJggg==";
      switch(num) {
        case 1:
          this.selectedItemOne = "",
	  this.selectedItemIdOne = "";
          document.getElementById("itemOneText").innerHTML = "Blank";
          document.getElementById("itemOne").src = imgSrc;
          break;
        case 2:
          this.selectedItemTwo = "",
	  this.selectedItemIdTwo = "";
          document.getElementById("itemTwoText").innerHTML = "Blank";
          document.getElementById("itemTwo").src = imgSrc;
          break;
        case 3:
          this.selectedItemThree = "",
          this.selectedItemIdThree = "";
          document.getElementById("itemThreeText").innerHTML = "Blank";
          document.getElementById("itemThree").src = imgSrc;
          break;
        case 4:
          this.selectedItemFour = "",
          this.selectedItemIdFour = "";
          document.getElementById("itemFourText").innerHTML = "Blank";
          document.getElementById("itemFour").src = imgSrc;
          break;
        case 5:
          this.selectedItemFive = "",
          this.selectedItemIdFive = "";
          document.getElementById("itemFiveText").innerHTML = "Blank";
          document.getElementById("itemFive").src = imgSrc;
          break;
        case 6:
          this.selectedItemSix = "",
          this.selectedItemIdSix = "";
          document.getElementById("itemSixText").innerHTML = "Blank";
          document.getElementById("itemSix").src = imgSrc;
          break;
      }
    },
    async submitBuild() {
      try {
        await axios.post('/api/builds', {
          name: this.name,
          heroID: this.$root.$data.selectedHeroId,
          itemOneID: this.selectedItemIdOne,
          itemTwoID: this.selectedItemIdTwo,
          itemThreeID: this.selectedItemIdThree,
          itemFourID: this.selectedItemIdFour,
          itemFiveID: this.selectedItemIdFive,
          itemSixID: this.selectedItemIdSix,
        });
      } catch (error) {
        //console.log(error);
      }
    },
  }
}
</script>

<style scoped>
#build {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 20px;
}

input {
  margin: 1em 1em 1em 1em;
  font-size: 25px;
  border: 2px solid black;
}

.break {
  flex-basis: 100%;
  height: 0px;
}

.image {
  border: 3px solid black;
}

p {
  margin: 1em .5em 0 .5em;
}

button {
  margin-top: 3em;
  margin-bottom: 8em;
}

h2 {
  font-size: 30px;
}

.itemImage {
  width: 150px;
  height: 150px;
  border: 2px solid black;
  margin: 1em 1em 1em 1em;
}

.images {
  justify-content: center;
  columnCount: 4;
  font-size: 20px;
  margin: 1em 1em 4em 1em;
}

.item {

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

/* Masonry */
*,
*:before,
*:after {
  box-sizing: inherit;
}

.images {
  column-gap: 2em;
}

.image {
  margin: 0 0 1.5em 0;
  display: inline-block;
  width: 100%;
}

.image img {
  width: 150px;
}

.selectableItem {
  margin-top: 1em;
  height: auto;
}

/* Masonry on largest screens */
@media only screen and (min-width: 1920px) {
  .images {
    column-count: 5;
  }
  .image img {
    width: 220px;
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
  #build {
    flex-wrap: wrap;
    margin: 0 15% 0 15%;
  }
}

/* Masonry on medium-sized screens */
@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .images {
    column-count: 2;
  }
}

/* Masonry on small screens */
@media only screen and (max-width: 767px) and (min-width: 540px) {
  .images {
    column-count: 2;
  }
}
</style>

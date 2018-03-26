<template>
  <div class="cryptoart">
    <section class="banner">
      <div class="bouncing-img"><canvas id="canvas"></canvas></div>
      <div class="page-title">
        THE ART OF
        <div>
          <div class="text-shadow" data-text='CRYPTO'>CRYPTO</div>
          <div class="text-shadow" data-text='ASSETS'>ASSETS</div>
        </div>
        <small>MAY 10 @ THE WILLIAMSBURG HOTEL</small>
      </div>
    </section>
    <section class="description">
      <div class="section-title">DEMOCRATIZED ART OWNERSHIP IN A BLOCKCHAIN WORLD</div>
      <div class="text-wrapper">
        <p class="paragraph">Byzantine will be hosting the Crypto/Art event of the year (to date!) in the Ballroom at the Williamsburg Hotel during blockchain week in NYC. We are very excited to welcome to our panels not only some of the leaders in the NYC art scene from the Met Museum & New Museum but also leaders of the crypto and blockchain world and those few innovators already bringing these two worlds together! You will hear about the fractionalization of art ownership of art, how defining ownership in blockchain works today and thoughts on the vision of democratizing and reformulating art investment. Cross pollinating art and crypto through booze, snacks, and conversation will be the highlight of the night, but in addition you will get access to two star studded panels, and a specially curated art exhibit by the end of the night.</p>
        <p class="side-paragraph">Expect crypto whales 🐳 underground brooklyn artists 🎨, blockchain developers, art dealers, and collectors to make appearances. Ticket sales go toward funding the Liminal Art Residency program which supports artists experimenting in VR, AR & Blockchain. Get your tickets soon! There are only 300 🎟️ and we expect them to go quickly. As an added bonus each ticket holder that comes to the event can redeem their ticket for a unique ERC-721 tokenized art piece made for the event by Dada.NYC artists!</p>
      </div>
    </section>
    <section class="speakers">
      <div class="section-title">SPEAKERS</div>
      <div class="cards-wrapper">
        <div class="speaker-card">
          <img class="img" src="~/assets/vaporwave_bk.png" alt="New Museum">
          <div class="text">New Museum</div>
        </div>
        <div class="speaker-card">
          <img class="img" src="~/assets/vaporwave_bk.png" alt="New Museum">
          <div class="text">New Museum</div>
        </div>
        <div class="speaker-card">
          <img class="img" src="~/assets/vaporwave_bk.png" alt="New Museum">
          <div class="text">New Museum</div>
        </div>
        <div class="speaker-card">
          <img class="img" src="~/assets/vaporwave_bk.png" alt="New Museum">
          <div class="text">New Museum</div>
        </div>
        <div class="speaker-card">
          <img class="img" src="~/assets/vaporwave_bk.png" alt="New Museum">
          <div class="text">New Museum</div>
        </div>
        <div class="speaker-card">
          <img class="img" src="~/assets/vaporwave_bk.png" alt="New Museum">
          <div class="text">New Museum</div>
        </div>
        <div class="speaker-card">
          <img class="img" src="~/assets/vaporwave_bk.png" alt="New Museum">
          <div class="text">New Museum</div>
        </div>
        <div class="speaker-card">
          <img class="img" src="~/assets/vaporwave_bk.png" alt="New Museum">
          <div class="text">New Museum</div>
        </div>
      </div>
    </section>
    <section class="organazations">
      <div class="org-wrapper ">
        <div class="logo-card">
          <img class="img" src="~/assets/logo_wbh.png" alt="">
        </div>
        <div class="logo-card">
          <img class="img" src="~/assets/logo_dispatch.png" alt="">
        </div>
        <div class="logo-card">
          <img class="img" src="~/assets/bureau-icon-small.png" alt="">
        </div>
      </div>
    </section>
    <section class="location">
      <div class="deets">THE DEETS</div>
      <p class="location-text">The Ballroom at The Williamsburg Hotel</p>
      <p class="location-text">May 10, 2018</p>
      <div class="get-tickets">
        <!-- <script src="https://www.universe.com/embed2.js" data-state=""></script> -->
        <a class="ticket-btn unii-listing-button unii-custom unii-medium Light" href="https://www.universe.com/events/the-art-of-crypto-assets-tickets-FXY5T6?buttonColor=#ff1bf3&buttonText=Get Tickets">
          GET TICKETS
        </a>
      </div>
    </section>
    <div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Footer
  },
  data () {
    return {
      canvash: 0,
      canvasw: 0,
    }
  },
  methods: {
    draw () {
      const vm = this
      const el = document.querySelector('.banner')
      vm.canvash = el.clientHeight
      vm.canvasw = el.clientWidth
      vm.imagew = vm.canvasw / 2
      vm.imageh = vm.imagew * 0.66

      vm.canvas = document.querySelector('#canvas')
      vm.ctx = canvas.getContext('2d')
      vm.canvas.height = vm.canvash
      vm.canvas.width = vm.canvasw

      vm.image = new Image()
      vm.image.src = require('~/assets/vaporwave_bk.png')

      vm.image.onload = function() {
        vm.posX = (vm.canvasw - vm.imagew) / 2
        vm.posY = (vm.canvash - vm.imageh) / 2
        vm.moveX = 1
        vm.moveY = 1
        vm.interval = setInterval(vm.imgAnimation, 20)

      }
    },
    imgAnimation () {
      const vm = this
      vm.ctx.clearRect(0, 0, vm.canvasw, vm.canvash)
      if (vm.posX <= 0 || vm.posX >= (vm.canvasw - vm.imagew)) { vm.moveX = -vm.moveX }
      if (vm.posY <= 0 || vm.posY >= (vm.canvash - vm.imageh)) { vm.moveY = -vm.moveY }
      vm.posX += vm.moveX
      vm.posY += vm.moveY
      vm.ctx.drawImage(vm.image, vm.posX, vm.posY, vm.imagew, vm.imageh)
    },
    onResize () {

      const vm = this
      if (vm.timeout) clearTimeout(vm.timeout)
      if (vm.interval) clearInterval(vm.interval)
      vm.ctx.clearRect(0, 0, vm.canvasw, vm.canvash)
      vm.timeout = setTimeout(function() {
        const el = document.querySelector('.banner')
        vm.canvash = el.clientHeight
        vm.canvasw = el.clientWidth
        vm.imagew = vm.canvasw / 2
        vm.imageh = vm.imagew * 0.66
        vm.canvas.height = vm.canvash
        vm.canvas.width = vm.canvasw
        vm.posX = (vm.canvasw - vm.imagew) / 2
        vm.posY = (vm.canvash - vm.imageh) / 2
        vm.interval = setInterval(vm.imgAnimation, 20)
      }, 500)

    }
  },
  mounted () {
    this.draw()
    window.addEventListener('resize', this.onResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  }
}
</script>

<style scoped>
.banner {
  height: 100vh;
  background: #feff00;
}
.page-title {
  position: absolute;
  top: 50%;
  padding: 0 20px;
  width: 100%;
  font-family: arame-regular, sans-serif;
  font-size: 2.8em;
  color: #ff1bf3;
  text-align: center;
  transform: translateY(-50%);
}
.text-shadow {
  display: inline-block;
  position: relative;
  margin: 0 .2em;
  font-size: 3.4em;
  color: #feff00;
  z-index: 1;
}
.text-shadow:after {
  content: attr(data-text);
  position: absolute;
  top: .05em;
  left: .05em;
  width: 100%;
  background: -webkit-linear-gradient(180deg, rgba(1, 238, 255, .8) 20%, rgba(255, 27, 243, .8));
  background: -o-linear-gradient(180deg, rgba(1, 238, 255, .8) 20%, rgba(255, 27, 243, .8));
  background: linear-gradient(180deg, rgba(1, 238, 255, .8) 20%, rgba(255, 27, 243, .8));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  z-index: -1;
}
.page-title small {
  font-size: .6em;
  letter-spacing: .2em;
}

.section-title {
  padding: 30px 0;
  font-size: 1.4em;
  font-family: arame-regular, sans-serif;
  letter-spacing: .3em;
  line-height: 1.6em;
}

.description {
  margin: auto;
  padding: 40px 24px;
  max-width: 1000px;
}
.text-wrapper {
  display: flex;
  justify-content: space-between;
  font-family: rational-light, sans-serif;
}
.paragraph {
  flex: 2;
  max-width: 604px;
  line-height: 1.6em;
}
.side-paragraph {
  flex: 1;
  margin-left: 40px;
  max-width: 284px;
  font-size: .8em;
  line-height: 1.5em;
}

.speakers {
  margin: 0 auto 40px;
  padding: 40px 24px;
  max-width: 1000px;
}
.cards-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 40px;
}
.speaker-card .img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.speaker-card .text {
  padding: 20px 0;
  font-family: rational-light, sans-serif;
  font-size: .9em;
}

.organazations {
  background: linear-gradient(180deg, #02efff, #fff);
}
.org-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: auto;
  padding: 40px 24px;
  max-width: 1000px;
}
.logo-card {
  flex: 1;
  margin: 20px;
  min-width: 200px;
  max-width: 200px;
}
.logo-card .img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.logo-card:last-child .img {
  transform: scale(0.7);
}

.location {
  margin: 0 auto 40px;
  padding: 40px 24px;
  max-width: 1000px;
  text-align: center;
}
.deets {
  padding: 30px 0;
  font-size: 1.8em;
  font-family: arame-regular, sans-serif;
  letter-spacing: .2em;
  line-height: 1.6em;
}
.location-text {
  font-family: rational-light, sans-serif;
  color: #ff1bf3;
}
.get-tickets {
  margin: 40px 0;
}
.ticket-btn {
  display: inline-block;
  padding: 14px 0 12px;
  width: 100%;
  max-width: 200px;
  background: #ff1bf3;
  border: none;
  font-family: arame-regular, sans-serif;
  font-size: 1.2em;
  line-height: 1em;
  color: #fff;
  text-decoration: none;
  letter-spacing: 1px;
  cursor: pointer;
}
.ticket-btn:hover {
  opacity: .8;
}

@media (max-width: 767px) {
  .text-shadow {
    font-size: 20vw;
  }
  .text-wrapper {
    flex-wrap: wrap;
  }
  .paragraph {
    flex: none;
    max-width: 100%;
  }
  .side-paragraph {
    flex: none;
    margin-top: 30px;
    margin-left: 0;
    max-width: 100%;
  }
}
</style>

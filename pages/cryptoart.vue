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
        <small>MAY 15 @ THE WILLIAMSBURG HOTEL</small>
      </div>
    </section>
    <section class="description">
      <div class="mobile-icon"><img src="~/assets/computer-mail-mobile.png" alt="computer icon for mobile"></div>
      <div class="section-title">DEMOCRATIZED ART OWNERSHIP IN A BLOCKCHAIN WORLD</div>
      <div class="text-wrapper">
        <div class="computer-mail">
          <p class="paragraph">
            Byzantine is proud to host the Crypto/Art event of the year (to date!)at the Williamsburg Hotel on May 15th, 2018, during Blockchain Week in NYC.
            <span class="hidden-on-mobile">
              <br>
              <br>
              We are very excited to welcome to our panels not only leaders in the global art scene but also crypto luminaries from around the world, and those few innovators already bringing these together!
            </span>
          </p>
        </div>
        <div class="cursor-pink">
          <div class="cursor-pink-bg"></div>
          <p class="paragraph detail">
            <!-- 6pm: Check-in / Mingling<br>
            7pm: Panel Discussion / Q&A<br>
            8pm: Fireside Chat / Q&A
            <br>
            <br> -->
            You will hear about the fractionalization of ownership in art, and how it defines the exchange and appreciation of value when everything is tokenized. <span class="hidden-on-mobile">The cross pollination of art and crypto through booze, snacks, and conversation will be the highlight of our day, but you will also get access to two star studded panels navigating very complex new terrains.

          </span>
          </p>
          <p class="paragraph hidden-on-mobile">Expect crypto whales 🐳 underground brooklyn artists 🎨, blockchain developers, art dealers, and collectors to make appearances.</p>
          <p class="paragraph show-on-mobile"><span>Stay for a specially curated art exhibit and ERC-721 exclusive token release for ticket holders only at the end of the show.</span></p>
        </div>
      </div>
    </section>
    <!-- <section class="fireside-chat">
      <div class="section-title">FIRESIDE CHAT</div>
      <div class="section-subtitle">Recreating the Bottom Line</div>
      <div class="cards-wrapper">
        <div class="speaker-card">
          <div class="image-wrapper">
            <canvas id="stephanieCanvas"></canvas>
            <img id="stephanie" class="img" src="~/assets/stephanie.jpg" alt="Stephanie French">
          </div>
          <div class="text">
            <div class="name">
              Stephanie French
            </div>
            Responsible for the flow of more than $1.5B in corporate arts sponsorships since ‘81. Will be leading an exploration of how to sustain the magic of creation in a commercial world, and how our new tools will inform the future of art, sponsorship, and valuation.
          </div>
        </div>
        <div class="speaker-card">
          <div class="image-wrapper">
            <canvas id="nadiaCanvas"></canvas>
            <img id="nadia" class="img" src="~/assets/nadia-profile.png" alt="Steven Waterhouse">
          </div>
          <div class="text">
            <div class="name">
              Nadia Chilmonik
            </div>
            Byzantine CDO, focused on Machine Learning algorithms and data. Painter [IRL and VR], NASA Datanaut, futurist, AI Philosopher, vegan — not necessarily in that order. Also: retired ballerina because, ya know...all the other stuff.
          </div>
        </div>
      </div>
    </section> -->
    <section class="speakers flower1">
      <canvas id="flowerCanvas1"></canvas>
      <div class="section-title">SPEAKERS</div>
      <div class="cards-wrapper">
        <div class="speaker-card">
          <img class="img" src="~/assets/judy.png" alt="Judy Mam">
          <div class="text">
            <div class="name">
              Judy Mam
            </div>
            Film blogger, writer, and cofounder of dada.nyc — a social network where people speak through drawings that can be collected on the Ethereum blockchain.
          </div>
        </div>
        <div class="speaker-card">
          <img class="img" src="~/assets/stevenf.jpg" alt="Steven Fragale">
          <div class="text">
            <div class="name">
              Steven Fragale
            </div>
            Artist & dad in NYC. A craftsman with a love of materials and techniques working in chalk, dry erase, VR, CAD, oil paint, jewelry and more.
          </div>
        </div>
        <div class="speaker-card">
          <img class="img" src="~/assets/jessica.png" alt="Jessica Angel">
          <div class="text">
            <div class="name">
              Jessica Angel
            </div>
            Transmedia visual artist whose work reveals the many universes accessible through ceilings and walls.
          </div>
        </div>
        <div class="speaker-card">
          <img class="img" src="~/assets/jonathan.jpg" alt="Jonathan mann">
          <div class="text">
            <div class="name">Jonathan Mann</div>
            Singer-songwriter who’s released a song a day for over 3300 days, or nine years. Recently started Digitally Rare, a Youtube channel exploring the influence of blockchain on art and value. [Bacon pancakes available upon request.]
          </div>
        </div>
        <div class="speaker-card">
          <img class="img" src="~/assets/jacob2.jpg" alt="Jacob Coley">
          <div class="text">
            <div class="name">
              Jacob Coley
            </div>
            10+ years in the art world as buyer, seller, and collector. Has worked at Sotheby's, The Met, Ralph Lauren art acquisitions, and currently manages the old masters gallery Colnaghi: the oldest commercial gallery in the world, est. 1760
          </div>
        </div>
        <div class="speaker-card">
          <img class="img" src="~/assets/seth.jpg" alt="Seth Goldstein">
          <div class="text">
            <div class="name">Seth Goldstein</div>
            Artist. Gallerist. Entrepreneur. Angel investor. Father of two. Recent cofounder of a nomadic layover lounge meant to accelerate humanity in welcoming spaces.
          </div>
        </div>
        <div class="speaker-card">
          <img class="img" src="~/assets/sean.jpg" alt="Sean Hoge">
          <div class="text">
            <div class="name">
              Sean Hoge
            </div>
            As the founder of Venture Coin, Sean focuses on uncovering the best up-and-coming currencies and tokens. His personal holdings have ranked among the top 1000 ERC-20 token holders in the world.
          </div>
        </div>
        <div class="speaker-card">
          <img class="img" src="~/assets/cryptograffiti.jpg" alt="cryptograffiti">
          <div class="text">
            <div class="name">
              cryptograffiti
            </div>
            First artist to utilize a public-facing wallet to receive crypto donations for street art. His current work is comprised of tangible materials from industries being disrupted by the blockchain.
          </div>
        </div>
        <div class="speaker-card">
          <img class="img" src="~/assets/nanu.jpg" alt="Nanu Berks">
          <div class="text">
            <div class="name">
              Nanu Berks
            </div>
            Full-time artist & crypto cultural arts ambassador with a writing background in Tech/AI/Communication, and enjoys “sharing information about the blockchain evolution through experiential art”
          </div>
        </div>
        <div class="speaker-card">
          <img class="img" src="~/assets/louis.png" alt="Louis Parker">
          <div class="text">
            <div class="name">
              Louis Parker
            </div>
            Native NYC blockchain entrepreneur and digital meme artist. Co-Founder of Archetype.mx, helping content creators benefit from decentralized networks. Maker of Rare Pepes (on the blockchain).
          </div>
        </div>
        <div class="speaker-card">
          <img class="img" src="~/assets/nadia-profile.png" alt="Nadia Chilmonik">
          <div class="text">
            <div class="name">
              Nadia Chilmonik
            </div>
            Byzantine CDO, focused on Machine Learning algorithms and data. Painter [IRL and VR], NASA Datanaut, futurist, AI Philosopher, vegan — not necessarily in that order. Also: retired ballerina because, ya know...all the other stuff.
          </div>
        </div>
      </div>
    </section>

    <section class="artists flower2">
      <canvas id="flowerCanvas2"></canvas>
      <div class="section-title">Artists</div>
      <div class="cards-wrapper">
        <div class="speaker-card">
          <img class="img" src="~/assets/dada.png" alt="dada.nyc">
          <div class="text">
            <div class="name">
              dada.nyc
            </div>
              speak through drawings, collect art with crypto
          </div>
        </div>
        <div class="speaker-card">
          <img class="img" src="~/assets/armoni.jpg" alt="Armoni Boone">
          <div class="text">
            <div class="name">
              Armoni Boone
            </div>
            AI poet and artist
          </div>
        </div>
        <div class="speaker-card">
          <img class="img" src="~/assets/nadia-profile.png" alt="Jessica Angel">
          <div class="text">
            <div class="name">
              Nadia Chilmonik
            </div>
            Painter + VR artist
          </div>
        </div>
        <div class="speaker-card">
          <img class="img" src="~/assets/nanu.jpg" alt="Nanu Berks">
          <div class="text">
            <div class="name">
              Nanu Berks
            </div>
            Artist & crypto cultural arts ambassador
          </div>
        </div>
        <div class="speaker-card">
          <img class="img" src="~/assets/alexa.jpg" alt="Alexa Rae Coppola">
          <div class="text">
            <div class="name">
              Alexa Rae Coppola
            </div>
            Painter exploring patterns as they occur in technology and nature
          </div>
        </div>
        <div class="speaker-card">
          <img class="img" src="~/assets/leah.jpg" alt="Leah Goldensohn">
          <div class="text">
            <div class="name">
              Leah Goldensohn
            </div>
            Plein air painter and bartender in Brooklyn
          </div>
        </div>
        <div class="speaker-card">
          <img class="img" src="~/assets/oliver.jpg" alt="Oliver Levine">
          <div class="text">
            <div class="name">
              Oliver Levine
            </div>
            Multimedia artist. Worked on the production staff for Takashi Murakami, and for the artist  Kevin Mccoy on his Blockchain startup Monegraph at New Inc.
          </div>
        </div>
      </div>
    </section>

    <section class="organazations">
      <div class="org-wrapper ">
        <div class="logo-card">
          <img class="img" src="~/assets/logo_wbh.png" alt="">
        </div>
        <!-- <div class="logo-card">
          <img class="img" src="~/assets/logo_dispatch.png" alt="">
        </div>
        <div class="logo-card">
          <img class="img" src="~/assets/bureau-icon-small.png" alt="">
        </div> -->
        <div class="logo-card">
          <img class="img" src="~/assets/Byzantine-Logo.png" alt="">
        </div>
      </div>
    </section>
    <section class="location">
      <!-- <div class="ticket-text"> Get your tickets soon! Profits will fund the Liminal Artist Residency.</div> -->
      <div class="ticket-text"></div>
      <p class="location-text">The Williamsburg Hotel</p>
      <p class="location-text">May 15, 2018</p>
      <p class="location-text">6pm - 9pm</p>
      <div class="get-tickets">
        <a class="ticket-btn unii-listing-button unii-custom unii-medium Light" href="https://www.universe.com/events/the-art-of-crypto-assets-tickets-P921L3?buttonColor=#ff1bf3&buttonText=Get Tickets">
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
import SimplexNoise from 'simplex-noise'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Footer
  },
  head () {
    return {
      meta: [
        { hid: 'og_title', property: 'og:title', content: 'The Art of Crypto Assets' },
        { hid: 'og_description', property: 'og:description', content: 'MAY 15 @ THE WILLIAMSBURG HOTEL' },
        { hid: 'og_image', property: 'og:image', content: require('~/assets/social_media_cryptoart.png')},
        { hid: 'og_url', property: 'og:url', content: 'https://liminal.network/cryptoart/' },
        { hid: 'twitter_title', property: 'twitter:title', content: 'The Art of Crypto Assets' },
        { hid: 'twitter_description', property: 'twitter:description', content: 'MAY 15 @ THE WILLIAMSBURG HOTEL' },
        { hid: 'twitter_image', property: 'twitter:image', content: require('~/assets/social_media_cryptoart.png')},
        { hid: 'twitter_url', property: 'twitter:url', content: 'https://liminal.network/cryptoart/' }
      ]
    }
  },
  data () {
    return {
      canvash: 0,
      canvasw: 0,
      counter: 0,
    }
  },
  methods: {
    drawImage () {
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

      this.drawFlower('flower1', 'flowerCanvas1')
      // this.drawFlower('flower2', 'flowerCanvas2')

      if (window.innerWidth < 768) {
        document.querySelector('.flower1').removeEventListener('mousemove', this.onMove)
        // document.querySelector('.flower2').removeEventListener('mousemove', this.onMove)
        window.cancelAnimationFrame(vm.bgMove)
      } else {
        document.querySelector('.flower1').addEventListener('mousemove', this.onMove)
        // document.querySelector('.flower2').addEventListener('mousemove', this.onMove)
      }

    },
    drawFlower (className, canvasId) {
      const vm = this
      const el = document.querySelector('.' + className)
      vm.flowerh = el.clientHeight * 1.5
      vm.flowerw = (el.clientWidth - 48) * 1.5
      vm.radius =  Math.min(vm.flowerw, vm.flowerh) * 0.4
      vm.mx = vm.flowerw / 2
      vm.my = vm.flowerh / 2

      vm.flower = document.querySelector('#' + canvasId)

      vm.fctx = vm.flower.getContext('2d')
      vm.flower.height = vm.flowerh
      vm.flower.width = vm.flowerw

      vm.counter += 0.1
      // requestAnimationFrame(vm.drawFlower)
      vm.fctx.fillStyle = "white"
      vm.fctx.fillRect(0, 0, vm.flowerw, vm.flowerh)
      vm.fctx.strokeStyle = "#02efff"
      vm.fctx.lineWidth = 2
      for(let i = vm.radius; i > 50 ; i -= 8) {
        vm.drawCircle(i, vm.fctx)
      }
    },
    drawCircle (r, ctx) {
      const vm = this
      ctx.beginPath()
      let point, x, y
      for(let angle = 0; angle <= Math.PI * 2; angle += 0.01) {
        point = vm.calcPoint(angle, r)
        x = point[0]
        y = point[1]
        ctx.lineTo(x, y)
      }
      ctx.stroke()
      ctx.fill()

    },
    calcPoint (angle, r) {
      const vm = this
      const noiseFactor = 50
      const zoom = 100
      let x = Math.cos(angle) * r + vm.flowerw / 2
      let y = Math.sin(angle) * r + vm.flowerh / 2
      const n = (vm.simplex.noise3D(x / zoom, y / zoom, vm.counter)) * noiseFactor
      x = Math.cos(angle) * (r + n) + vm.flowerw / 2
      y = Math.sin(angle) * (r + n) + vm.flowerh / 2
      return [x, y]
    },
    onMove (e) {
      const num = e.target.className.replace(/[^1-9]/g, '')
      this.drawFlower(`flower${num}`, `flowerCanvas${num}`)
    },
    drawPixel (name) {
      const vm = this
      const canvas = document.querySelector('#' + name + 'Canvas')
      const ctx = canvas.getContext('2d')
      const img = document.querySelector('#' + name)

      if (img.complete) vm.processImage(canvas, ctx, img)
      else img.onload = () => { vm.processImage(canvas, ctx, img) }
    },
    processImage(canvas, ctx, img) {
      const w = img.width
      const h = img.height

      canvas.width = w
      canvas.height = h
      ctx.drawImage(img, 0, 0, w, h)

      const data = ctx.getImageData(0, 0, w, h)
      if (window.innerWidth >= 768) this.animate(ctx, w, data)
    },
    animate (ctx, w, data) {
      const vm = this

      vm.bgMove = requestAnimationFrame(function() {
        vm.animate(ctx, w, data)
      })

      for (let i = data.data.length - 5; i > 0; i -= 4) {
        let temp = i * 0.25
        let y = Math.floor(temp / w)
        let x = Math.random() > 0.1 ? temp + 1 : temp

        x = ((x % w) + w * y) * 4

        data.data[x    ] = data.data[i    ];
        data.data[x + 1] = data.data[i + 1];
        data.data[x + 2] = data.data[i + 2];
        data.data[x + 3] = data.data[i + 3];
      }
      ctx.putImageData(data, 0, 0);
    },
    onscroll (top, bottom) {
      if (window.scrollY > top && window.scrollY < bottom) {
        this.drawFlower('flower1', 'flowerCanvas1')
      }
    }
  },
  mounted () {
    const vm = this
    vm.drawImage()
    //vm.drawPixel('stephanie')
    //vm.drawPixel('nadia')
    vm.simplex = new SimplexNoise()
    window.addEventListener('resize', vm.onResize)
    if (window.innerWidth >= 768) {
      vm.drawFlower('flower1', 'flowerCanvas1')
      // vm.drawFlower('flower2', 'flowerCanvas2')
      document.querySelector('.flower1').addEventListener('mousemove', vm.onMove)
      // document.querySelector('.flower2').addEventListener('mousemove', vm.onMove)
    }

    const top = vm.flower.getBoundingClientRect().top
    const bottom = vm.flower.getBoundingClientRect().bottom
    document.body.onscroll = function() {
      vm.onscroll(top, bottom)
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
    if (window.innerWidth >= 768) {
      document.querySelector('.flower1').removeEventListener('mousemove', this.onMove)
      // document.querySelector('.flower2').removeEventListener('mousemove', this.onMove)
    }
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
.fireside-chat .section-title {
  padding: 0 20px 30px;
  background: linear-gradient(0deg, #fff 70%, rgba(255, 255, 255, .01));
  font-size: 4em;
  font-family: arame-regular, sans-serif;
  letter-spacing: .3em;
  line-height: 1em;
  color: #fff;
  text-shadow: -3px -3px #ff1bf3;
}
.fireside-chat .section-subtitle {
  font-size: 1.2em;
  margin-top: -20px;
  margin-bottom: 40px;
  padding: 0 20px;
  font-family: arame-regular, sans-serif;
  color: #ff1bf3;
  letter-spacing: .3em;
}
.speakers .section-title,
.artists .section-title {
  padding: 30px 0;
  font-size: 4em;
  font-family: arame-regular, sans-serif;
  letter-spacing: .3em;
  line-height: 1.6em;
  color: #fff;
  text-shadow: -3px -3px #ff1bf3;
}


.description {
  margin: auto;
  padding: 40px 24px 0;
  max-width: 1000px;
}
.text-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: rational-light, sans-serif;
}

.description .section-title {
  padding: 0 4%;
  max-width: 1000px;
  font-size: 1.6em;
}

.computer-mail {
  background: url('~/assets/computer-mail.png') no-repeat;
  background-size: contain;
}
.cursor-pink {
  position: relative;
}
.cursor-pink-bg {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  margin-top: -24%;
  width: 100%;
  background: url('~/assets/cursor-pink.png') no-repeat;
  background-size: 100% 100%;
}
.paragraph {
  position: relative;
  line-height: 1.6em;
  z-index: 2;
}
.computer-mail .paragraph {
  padding: 5% 30% 30% 4%;
}
.paragraph.detail {
  padding: 0 0 20% 42%;
}
.cursor-pink .paragraph:not(.detail) {
  padding: 0 40% 20% 8%;
}

.fireside-chat,
.speakers,
.artists {
  position: relative;
  margin: 0 auto 40px;
  padding: 0 24px 40px;
  max-width: 1000px;
}
.artists{
  padding-bottom: 100px;
}
.fireside-chat {
  margin-top: -25px;
}

.cards-wrapper {
  position: relative;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-gap: 40px;
}
.speaker-card .img {
  width: 100%;
}
.fireside-chat .img {
  position: relative;
  transform: scale(.6);
  z-index: 2;
}
.speaker-card .name {
  font-size: 1.3em;
  font-family: arame-regular, sans-serif;
  letter-spacing: .4em;
  padding-bottom: 10px;
}
.speaker-card .text {
  padding: 20px 0;
  font-family: rational-light, sans-serif;
  font-size: .9em;
}

.speaker-card .image-wrapper {
  position: relative;
}
.speaker-card canvas {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: .6;
}

/* .moderator {
  margin: auto;
  max-width: 220px;
}

.moderator-title {
  margin: 60px 0 40px;
  font-size: 1.6em;
  font-family: arame-regular, sans-serif;
  text-align: center;
  letter-spacing: .2em;
  color: #ff1bf3;
} */

.flower1,
.flower2 {
  position: relative;
}

.flower1:after ,
.flower2:after  {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
}

.flower1 canvas,
.flower2 canvas {
  position: absolute;
  z-index: -1;
  width: 100%;
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
  min-width: 180px;
  max-width: 180px;
}
.logo-card .img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.logo-card:nth-child(3) .img {
  transform: scale(0.7);
}

.location {
  margin: 0 auto 40px;
  padding: 40px 24px;
  max-width: 1000px;
  text-align: center;
}
.ticket-text {
  max-width: 1000px;
  margin: auto;
  padding: 50px 0 100px 0;
  font-size: 1.2em;
  font-family: rational-light, sans-serif;
  letter-spacing: 0em;
  line-height: 1.6em;
  text-align: left;
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

.mobile-icon,
.show-on-mobile {
  display: none;
}

@media (max-width: 944px) {
  .description .section-title {
    padding: 0 24px;
  }
  .computer-mail .paragraph {
    padding: 2% 14% 30% 2%;
  }
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
  .speaker-card .img {
    max-height: none;
  }

  .computer-mail {
    background: none;
  }
  .cursor-pink-bg {
    display: none;
    position: static;
    background: none;
  }
  .computer-mail .paragraph {
    padding: 24px 10% 24px 24px;
  }
  .paragraph.detail {
    padding: 80px 24px 24px 20%;
    text-align: right;
  }
  .cursor-pink .paragraph:not(.detail) {
    margin: -60px 0 0 0;
    padding: 60% 24px 20% 24px;
    background: url('~/assets/cursor-pink.png') no-repeat;
    background-size: contain;
    max-width: 600px;
  }
  .fireside-chat .section-title,
  .speakers .section-title,
  .artists .section-title {
    font-size: 10vw;
  }
  .hidden-on-mobile {
    display: none;
  }
  .show-on-mobile {
    display: block;
  }

  .mobile-icon {
    display: block;
    margin: 20px 0 30px;
    text-align: center;
  }
  .mobile-icon img {
    height: 80px;
  }
}

@media (max-width: 487px) {

  .description {
    margin: auto;
    padding: 40px 0 0 0;
    max-width: 1000px;
  }
  .paragraph.detail {
    padding: 40px 24px 50px 20%;
    text-align: right;
  }
  .cursor-pink .paragraph:not(.detail) {
    margin: -60px auto 0;
    /* padding: 60% 24px 20% 24px; */
    padding: 30% 24px 800px 24px;
    background: url('~/assets/cursor-pink-mobile.png') no-repeat;
    background-size: cover;
    max-width: 600px;
  }
  .show-on-mobile span{
    position: absolute;
    bottom: 25%;
    margin-right: 30px;
  }
  .fireside-chat .section-title,
  .speakers .section-title,
  .artists .section-title  {
    padding: 50px 0 10px 5px;
    margin: auto;
    text-align: center;
    font-size: 3.3em;
    font-family: arame-regular, sans-serif;
    letter-spacing: .2em;
    line-height: 1.6em;
  }
  .ticket-text {
    max-width: 1200px;
    padding: 50px 0 80px 0;
    font-size: 1em;
    font-family: rational-light, sans-serif;
    letter-spacing: 0em;
    line-height: 1.6em;
    text-align: left;
  }
  .location-text {
    width: 80%;
    margin: auto;
    font-family: rational-light, sans-serif;
    color: #ff1bf3;
    /* text-align: left; */
  }
  /* .ticket-btn {
    display: inline-block;
    padding: 14px 0 12px;
    width: 100%;
    max-width: 200px;
  } */

  .flower1 canvas,
  .flower2 canvas {
    display: none;
  }

}

@media (max-width: 374px) {
  .fireside-chat .section-title,
  .speakers .section-title,
  .artists .section-title {
    font-size: 14vw;
    text-align: center;
  }
}
</style>

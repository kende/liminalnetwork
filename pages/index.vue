<template>
  <div class='landing'>
    <div class='thumbnail'><img src='~/assets/liminal.png'></div>
    <section class='landing-header'>
      <img class='background-img' src='~/assets/featured.png' alt='featured'>
      <!-- <div class='title'>THE LIMINAL NETWORK</div>
      <div class='subtitle'>decentralized creative space</div> -->
      <div class='background-mobile'>
        <img src='~/assets/featured_mobile.png' alt='featured'>
        <div class='page-text'>
          <div class='page-title'><small>THE</small><br/>LIMINAL<br/>NETWORK</div>
          <div class='page-subtitle'>DECENTRALIZED CREATIVE STUDIOS</div>
        </div>
      </div>
      
    </section>


    <!-- <section class='images-grid'>
      <div class='image rowspan3 colspan3'><img src='~/assets/1.png' alt='image gallerty'></div>
      <div class='image rowspan4 colspan2'><img src='~/assets/2.png' alt='image gallerty'></div>
      <div class='image rowspan2'><img src='~/assets/3.png' alt='image gallerty'></div>
      <div class='image rowspan2'><img src='~/assets/4.png' alt='image gallerty'></div>
      <div class='image rowspan2'><img src='~/assets/5.png' alt='image gallerty'></div>
      <div class='image rowspan2 colspan2'><img src='~/assets/6.png' alt='image gallerty'></div>
      <div class='image rowspan3 colspan3'><img src='~/assets/7.png' alt='image gallerty'></div>
      <div class='image rowspan2 colspan2'><img src='~/assets/8.png' alt='image gallerty'></div>
      <div class='image rowspan2'><img src='~/assets/9.png' alt='image gallerty'></div>
    </section> -->

    <section class='opening-section'>
      <div class='title'>OPENING IN BUSHWICK</div>
      <div class='feature-grid'>
        <div class='item'>
          <img class='feature-icon' src='~/assets/icon/1.png' alt='feature icon'>
          <div class='feature-text'>crypto/blockchain dev</div>
        </div>
        <div class='item'>
          <img class='feature-icon' src='~/assets/icon/2.png' alt='feature icon'>
          <div class='feature-text'>24/7 access</div>
        </div>
        <div class='item'>
          <img class='feature-icon' src='~/assets/icon/3.png' alt='feature icon'>
          <div class='feature-text'>gigabit internet</div>
        </div>
        <div class='item'>
          <img class='feature-icon' src='~/assets/icon/4.png' alt='feature icon'>
          <div class='feature-text'>movement studios</div>
        </div>
        <div class='item'>
          <img class='feature-icon' src='~/assets/icon/5.png' alt='feature icon'>
          <div class='feature-text'>audio production</div>
        </div>
        <div class='item'>
          <img class='feature-icon' src='~/assets/icon/6.png' alt='feature icon'>
          <div class='feature-text'>film &amp; livestreaming</div>
        </div>
        <div class='item'>
          <img class='feature-icon' src='~/assets/icon/7.png' alt='feature icon'>
          <div class='feature-text'>AR/VR creative production</div>
        </div>
        <div class='item'>
          <img class='feature-icon' src='~/assets/icon/8.png' alt='feature icon'>
          <div class='feature-text'>wireless mesh R&amp;D</div>
        </div>
        <div class='item'>
          <div class='feature-icon'></div>
          <div class='feature-text'>and more ...</div>
        </div>
      </div>
    </section>

    <section class='apply-section'>
      <div class='title'>LOOKING FOR A PLAYGROUND <br /> TO CALL HOME?</div>
      <div class='price-row'>
        <div class='price-card event-pass'>
          <div class='card-title'>EVENT PASS</div>
          <div class='price'>$125 / month</div>
          <div class='detail'>2 event + 3 guest passes</div>
        </div>
        <div class='price-card early-bird'>
          <div class='card-title'>FIRST 100</div>
          <div class='price'>$300 / month</div>
          <div class='detail'>Early access on April 1st</div>
        </div>
        <div class='price-card grand-opening'>
          <div class='card-title'>GRAND OPENING</div>
          <div class='price'>$1000 / month</div>
          <div class='detail'>Opening on May 10th</div>
        </div>
      </div>
      <div><a class='apply-btn' href='https://byzantine.typeform.com/to/T7O1TA' target='_blank'>APPLY</a></div>
    </section>

    <section class='event-section'>
      <div class='title'>UPCOMING EVENTS</div>
      <div class='event'>
        <div class='event-name'>The Art of Crypto Assets</div>
        <div class='event-time'>April 12th</div>
        <div class='event-place'>@ The Williamsburg Hotel</div>
      </div>
      <div class='event'>
        <div class='event-name'>The Rise of Crypto Games</div>
        <div class='event-time'>May 10th</div>
        <div class='event-place'>@ The Generator</div>
      </div>
      <div class='event'>
        <div class='event-name'>Blockparty</div>
        <div class='event-time'>May 12th</div>
        <div class='event-place'>@ The Williamsburg Hotel</div>
      </div>
    </section>

    <section class='landing-footer'>
      <div class='footer-item'><a href='http://byzantine.network/' target='_blank'>a byzantine thing</a> 🦄</div>
      <div class='footer-item'><a href='https://app.termly.io/document/privacy-policy-for-website/c596a054-bb10-4bc0-b04d-d582f48ee43e' target='_blank'>privacy policy</a> &amp; <a href='https://app.termly.io/document/terms-of-use-for-website/afc96613-61ec-4c6d-89fa-c6720e93ffa1' target='_blank'>terms</a></div>
    </section>
  </div>
</template>

<script>
</script>

<style scoped>
.landing-header {
  margin-bottom: 40px;
  text-align: center;
}
.title {
  font-family: arame-regular, sans-serif;
  font-size: 24px;
  line-height: 1.4em;
  letter-spacing: 5px;
}
.subtitle {
  margin-top: 8px;
  font-family: rational-light, sans-serif;
  font-size: 16px;
  line-height: 1em;
}
.background-img,
.background-mobile img {
  width: 100%;
}
.background-mobile {
  display: none;
  position: relative;
}
.page-text {
  position: absolute;
  top: 28vh;
  width: 100%;
  font-family: arame-regular, sans-serif;
  color: #fff;
  text-align: center;
  letter-spacing: 10px;
}
.page-title {
  font-size: 16vw;
}
.page-title small {
  font-size: 7vw;
}
.page-subtitle {
  margin-top: 20px;
  padding: 0 20px;
}

/*
.images-grid {
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px;
}

.image {
  position: relative;
  padding-top: 66%;
  background: #eee;
  overflow: hidden;
}
.image img {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  animation: blurin 1s;
}

.rowspan2 {
  grid-row: span 2;
}
.rowspan3 {
  grid-row: span 3;
}
.rowspan4 {
  grid-row: span 4;
}

.colspan2 {
  grid-column: span 2;
}
.colspan3 {
  grid-column: span 3;
}
*/

.apply-section {
  padding: 100px 24px;
  text-align: center;
}
.apply-btn {
  display: inline-block;
  padding: 0 40px;
  height: 40px;
  background: #D32DF8;
  border: none;
  font-family: arame-regular, sans-serif;
  font-size: 16px;
  color: #fff;
  line-height: 40px;
  letter-spacing: 2px;
  text-decoration: none;
  cursor: pointer;
}

.landing-footer {
  display: flex;
  padding:  24px 0;
  background: #fafafa;
  text-align: right;
  flex-flow: wrap;
  justify-content: flex-end;
}
.footer-item {
  margin: 10px 24px;
  font-size: .8em;
  font-family: rational-light, sans-serif;
  text-align: center;
}
.footer-item a {
  text-decoration: none;
  color: #424242;
  word-spacing: 0px;
}
.footer-item a:hover {
  text-decoration: underline;
}

.thumbnail {
  position: fixed;
  top: 110%;
  left: 110%;
  z-index: -100;
  opacity: 0;
  transform: scale(0);
}

.opening-section {
  padding: 60px 0 20px;
  text-align: center;
  font-family: rational-light, sans-serif;
}
.feature-grid {
  margin: 20px auto 0;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(3, 1fr);
  max-width: 960px;
}
.feature-grid .item {
  padding: 30px;
}
.feature-icon {
  display: inline-block;
  margin: 10px;
  height: 30px;
  width: 30px;
  object-fit: contain;
}
.feature-text {
  font-size: 14px;
}

.price-row {
  display: flex;
  justify-content: space-around;
  margin: 40px auto;
  font-family: rational-light, sans-serif;
  max-width: 1000px;
}
.price-card {
  margin: 10px;
  padding: 40px 20px;
  min-width: 278px;
  border: 1px solid transparent;
  font-size: 18px;
}
.event-pass {
  border-color: #06C3FF;
  color: #06C3FF;
}
.early-bird {
  border-color: #D32DF8;
  color: #D32DF8;
}
.grand-opening {
  background: #f5f5f5;
  border-color: #a5a5a5;
}

.card-title {
  letter-spacing: 4px;
}
.price-card .price {
  margin: 40px 0;
  color: #212121;
}
.price-card .detail {
  font-size: 14px;
  color: #212121;
}
.grand-opening,
.grand-opening .price,
.grand-opening .detail {
  color: #a5a5a5;
}

.event-section {
  margin: 30px 0 80px;
  text-align: center;
}
.event {
  margin: 30px 0;
  font-family: rational-light, sans-serif;
  font-size: 14px;
  color: #D32DF8;
}

@keyframes blurin {
  from {
    filter: blur(4px);
  }
  to {
    filter: blur(0px);
  }
}

@media screen and (max-width: 963px) {
  .images-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .price-row {
    flex-wrap: wrap;
    max-width: 600px;
  }
  .price-card {
    flex: none;
  }
}
@media screen and (max-width: 767px) {
  .feature-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .background-img {
    display: none;
  }
  .background-mobile {
    display: block;
  }
}
@media screen and (max-width: 425px) {
  .feature-grid {
    grid-template-columns: 1fr;
  }
  .feature-grid .item {
    display: flex;
    padding: 0 24px;
    line-height: 50px;
  }
  
}
</style>

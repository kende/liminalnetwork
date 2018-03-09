<template>
  <div class='landing'>
    <div class="thumbnail"><img src="~/assets/liminal.png"></div>
    <section class='landing-header'>
      <div class='title'>THE LIMINAL NETWORK</div>
      <div class='subtitle'>decentralized creative space</div>
    </section>


    <section class='images-grid'>
      <div class='image rowspan3 colspan3'><img src="~/assets/1.png" alt="image gallerty"></div>
      <div class='image rowspan4 colspan2'><img src="~/assets/2.png" alt="image gallerty"></div>
      <div class='image rowspan2'><img src="~/assets/3.png" alt="image gallerty"></div>
      <div class='image rowspan2'><img src="~/assets/4.png" alt="image gallerty"></div>
      <div class='image rowspan2'><img src="~/assets/5.png" alt="image gallerty"></div>
      <div class='image rowspan2 colspan2'><img src="~/assets/6.png" alt="image gallerty"></div>
      <div class='image rowspan3 colspan3'><img src="~/assets/7.png" alt="image gallerty"></div>
      <div class='image rowspan2 colspan2'><img src="~/assets/8.png" alt="image gallerty"></div>
      <div class='image rowspan2'><img src="~/assets/9.png" alt="image gallerty"></div>
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

    <section class='landing-footer'>
      <span class='footer-item'><a href='http://byzantine.network/' target='_blank'>a byzantine thing</a> 🦄</span>
      <span class='footer-item'><a href='https://app.termly.io/document/privacy-policy-for-website/c596a054-bb10-4bc0-b04d-d582f48ee43e' target='_blank'>privacy policy</a> &amp; <a href='https://app.termly.io/document/terms-of-use-for-website/afc96613-61ec-4c6d-89fa-c6720e93ffa1' target='_blank'>terms</a></span>
    </section>
  </div>
</template>

<script>
</script>

<style scoped>
.landing-header {
  padding: 40px 24px;
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

.apply-section {
  padding: 100px 24px;
  text-align: center;
}
.apply-btn {
  display: inline-block;
  margin-top: 20px;
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
  padding:  24px 0;
  background: #fafafa;
  text-align: right;
}
.footer-item {
  margin: 24px;
  font-size: .8em;
  font-family: rational-light, sans-serif;
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
  border:  1px solid transparent;
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
</style>

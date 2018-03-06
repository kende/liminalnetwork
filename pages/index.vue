<template>
  <div class='landing'>
    <section class='landing-header'>
      <div class='title'>THE LIMINAL NETWORK</div>
      <div class='subtitle'>a decentralized creative studio</div>
    </section>
    

    <section class='images-grid'>
      <div class='image rowspan3 colspan3'><img src="~/assets/nadia.png" alt="image gallerty"></div>
      <div class='image rowspan4 colspan2'><img src="~/assets/nadia.png" alt="image gallerty"></div>
      <div class='image rowspan2'><img src="~/assets/nadia.png" alt="image gallerty"></div>
      <div class='image rowspan2'><img src="~/assets/nadia.png" alt="image gallerty"></div>
      <div class='image rowspan2'><img src="~/assets/nadia.png" alt="image gallerty"></div>
      <div class='image rowspan2 colspan2'><img src="~/assets/nadia.png" alt="image gallerty"></div>
      <div class='image rowspan3 colspan3'><img src="~/assets/nadia.png" alt="image gallerty"></div>
      <div class='image rowspan2 colspan2'><img src="~/assets/nadia.png" alt="image gallerty"></div>
      <div class='image rowspan2'><img src="~/assets/nadia.png" alt="image gallerty"></div>
    </section>
   
    <section class='apply-section'>
      <div class='title'>APPLY TO JOIN LIMINAL</div>
      <div><a class='apply-btn' href='https://byzantine.typeform.com/to/T7O1TA' target='_blank'>apply</a></div>
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
  line-height: 1em;
  letter-spacing: 8px;
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
  padding: 100px 0;
  text-align: center;
}
.apply-btn {
  display: inline-block;
  margin-top: 20px;
  padding: 0 40px;
  height: 40px;
  background: linear-gradient(90deg, #D028E8, #5F70FA);
  border: none;
  font-family: rational-light, sans-serif;
  font-size: 20px;
  line-height: 36px;
  color: #fff;
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

@keyframes blurin {
  from {
    filter: blur(4px);
  }
  to {
    filter: blur(0px);
  }
}

@media screen and (max-width: 960px) {
  .images-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>

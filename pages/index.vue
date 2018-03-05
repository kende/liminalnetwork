<template>
  <div class='landing'>
    <section class='landing-header'>
      <div class='title'>THE LIMINAL NETWORK</div>
      <div class='subtitle'>a decentralized creative studio</div>
    </section>
    

    <section class='grid-wrapper'>
      <div class='images-grid'>
        <div class='image rowspan3 colspan3'>1</div>
        <div class='image rowspan4 colspan2'>2</div>
        <div class='image rowspan2'>3</div>
        <div class='image rowspan2'>4</div>
        <div class='image rowspan2'>5</div>
        <div class='image rowspan2 colspan2'>6</div>
        <div class='image rowspan3 colspan3'>7</div>
        <div class='image rowspan2 colspan2'>8</div>
        <div class='image rowspan2'>9</div> 
      </div>
    </section>
   
    <section class='apply-section'>
      <div class='title'>APPLY TO JOIN LIMINAL</div>
      <div><a class='apply-btn' href='https://byzantine.typeform.com/to/T7O1TA' target='_blank'>apply</a></div>
    </section>  

    <section class='landing-footer'>
      <span class='footer-item'><a href='http://byzantine.network/' targt='_blank'>a byzantine thing</a> 🦄</span>  
      <span class='footer-item'><a href='' targt='_blank'>privacy policy & terms</a></span> 
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

.grid-wrapper {
  position: relative;
  padding-top: 80%;
}
.images-grid {
  display: grid;
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  grid-template-rows: repeat(7, 1fr);
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px;
}

.image {
  background: #eee;
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
</style>

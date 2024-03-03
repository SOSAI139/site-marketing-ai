//$('#content').load('commonContent.html');

window.onload = (event) => {

    document.getElementById("header").innerHTML=`
<a class="logo" href="index.html" target="_self">
<div class="logo-image"></div>
<div class="marque"></div>
</a>
<div class="menu">
<a href="index.html#services" target="_self">SERVICES</a>
<a href="article.html" target="_self">BLOG</a>
<a href="a-propos.html" target="_self">A PROPOS</a>
</div>`;

document.getElementById("footer").innerHTML=`
<div class="footercontent">
<div class="logo2">
  <div class="logo-image"></div>
  <div class="marque"></div>
</div>
<div class="termes-et-conditions-container">
  <p class="termes-et-conditions">Termes et conditions</p>
  <p class="termes-et-conditions">Politique de confidentialité</p>
</div>
</div>
<div class="ai-marketing-droits">
tous droits réservés 2023
</div>`;

};
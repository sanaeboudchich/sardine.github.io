<template>
  <div class="titi">
    <h3 class="text-center">Rejoins notre communautée en quelques clics</h3>
    <p class="text1 text text-center">
      Seulement 4 étapes pour trouver les profils les plus pertinents
    </p>

    <div class="crousel" id="crousel">
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background=""
        img-width="70%"
        img-height="50%"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Text slides with image  style="text-shadow: 1px 1px 2px #333;" -->

        <!-- Slides with custom text -->

        <!-- Slides with image only -->

        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide>
          <template #img>
            <div class="img1 content">
              <div class="row">
                <div class="col-5">
                  <img
                    class="d-block img-fluid w-100"
                    width="300"
                    height="480"
                    src="../assets/slide.png"
                    caption="hi"
                    alt="image slot"
                  />
                </div>
                <div class="text col-7">
                  <h1>Étape 1</h1>
                  <h4>Mieux qu’un bon free, le meilleur free</h4>
                  <p>
                    Grâce à Kea, perfectionne tes compétences et développe ton
                    réseau professionnel à travers un canal Slack partagé. Sois
                    mentoré par un freelance à l’écoute !
                  </p>
                  <div class="boutton row">
                    <div class="col-6"></div>
                    <div class="col-6">
                      <button class="bton btn" type="button" href="#img3">
                        Rejoindre le slack
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </b-carousel-slide>

        <b-carousel-slide>
          <template #img>
            <div class="img2 content">
              <div class="row">
                <div class="col-5">
                  <img
                    class="d-block img-fluid w-100"
                    width="350"
                    height="480"
                    src="../assets/slide22.png"
                    caption="hi"
                    alt="image slot"
                  />
                </div>
                <div class="text col-7">
                  <h1>Étape 2</h1>
                  <h4>Prêt à intégrer la communauté ?</h4>
                  <p>
                    Inscris-toi sur Kea et remplis ton profil. Déscris-toi en
                    quelques lignes et renseigne tes expériences et tes
                    compétences.
                  </p>
                  <div class="boutton row">
                    <div class="col-6">
                      <button class="btun btn" type="button" href="#img3">
                        Retour
                      </button>
                    </div>
                    <div class="col-6">
                      <button class="bton btn" type="button" href="#img3">
                        Rejoindre le slack
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template #img>
            <div class="img3 content">
              <div class="row">
                <div class="col-5">
                  <img
                    class="d-block img-fluid w-100"
                    width="350"
                    height="480"
                    src="../assets/slide3.png"
                    caption="hi"
                    alt="image slot"
                  />
                </div>
                <div class="text col-7">
                  <h1>Étape 3</h1>
                  <h4>Le bon parternaire en fonction du besoin</h4>
                  <p>
                    Après avoir finalisé ton inscription tu pourras désormais
                    échanger avec la meilleure communauté de freelances (et oui
                    rien que ça !).
                  </p>
                  <div class="boutton row">
                    <div class="col-6">
                      <button class="btun btn" type="button" href="#img3">
                        Retour
                      </button>
                    </div>
                    <div class="col-6">
                      <button class="bton btn" type="button" href="#img3">
                        Rejoindre le slack
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template #img>
            <div class="img4 content">
              <div class="row">
                <div class="col-5">
                  <img
                    class="d-block img-fluid w-100"
                    width="350"
                    height="480"
                    src="../assets/slide4.png"
                    caption="hi"
                    alt="image slot"
                  />
                </div>
                <div class="text col-7">
                  <h1>Étape 4</h1>
                  <h4>Travailler en collaboration</h4>
                  <p>
                    Trouve la mission qui te correspond et collabore avec un
                    autre freelance. Tu gagnes en compétence et tu élargis ton
                    réseau pro !
                  </p>
                  <div class="boutton row">
                    <div class="col-6">
                      <button class="btun btn" type="button" href="#img3">
                        Retour
                      </button>
                    </div>
                    <div class="col-6">
                      <button class="bton btn" type="button" href="#img3">
                        Rejoindre le slack
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </b-carousel-slide>

        <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      </b-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>
<style>
p {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  padding-right:3.5em;
  /* COULEURS PRIMAIRE/BLACK */

  color: #1f1f1f;
}
@media screen and (max-width: 1300px) {
  h1{
    padding-top: 0px !important;

  }
  .crousel p{
    font-size: 0.5em !important;
    padding: 0px !important;
  }
  .crousel h1{
    font-size: 1em !important;
  }
  .crousel h4{
    font-size: 0.7em !important;
  }
  .crousel h3{
    font-size: 1.7em !important;
  }
  .crousel .boutton{
   display: none !important;
  }
}
h1 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 60px;
  padding-top: 101px;

  color: #1f1f1f;
}
.bton {
  width: 207px;
  height: 42px;
  left: 1008px;
  top: 402px;
  color: #ffffff;

  /* COULEURS PRIMAIRE/ROSE */

  background: #fe007a;
  /* BLUR CARD */

  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.1);
  border-radius: 27.5px;
}
.btun {
  width: 120px;
  height: 42px;
  left: 796px;
  top: 402px;
  padding: 9px 34px;

  border: 1px solid #000000;
  box-sizing: border-box;
  /* BLUR CARD */

  filter: drop-shadow(0px 1px 8px rgba(0, 0, 0, 0.1));
  border-radius: 27.5px;
}
.boutton {
  padding: 30px 0px 40px 50px;
}
.botton {
  padding: 30px 0px 40px 50px;
}
h3 {
  color: #fe007a;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  padding: 100px 0px 0px;
}
h4{
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
}
.text1 {
  color: #000000;
  font-family: "Poppins";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  padding: 20px 90px 100px 50px;
}
</style>


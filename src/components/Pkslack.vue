<template>
  <div class="team container-fluid" id="team">
    <div class="container overflow-hidden">
      <div class="row gx-5">
        <div class="col-sm-6 px-5 mb-5">
          <div class="p-3 border rounded bg-warning text-center">
            <h3>Je suis Junior</h3>
            <h4>Apprends avec un mentor</h4>
            <p> Intègre une communauté de talents. Sois entouré d’entrepreneurs
              d’exception. Développe tes compétences auprès d’un mentor à
              l’écoute.</p>
            <b-nav-item to="/Junior" exact-active-class=" active">
              <button class="btn" type="button" to="/Junior">
                Pourquoi nous utiliser
              </button></b-nav-item
            >
          </div>
        </div>
        <div class="col-sm-6 px-5 mb-5">
          <div class="p-3 border rounded bg-purple text-center">
            <h3>Je suis Senior</h3>
            <h4>Partage ton savoir</h4>
            <p>Diffuse tes connaisances auprès d’indépendants motivés. Rejoins
              une communauté de mentors et continue d’enrichir tes compétences.</p>
            <b-nav-item to="/Senior" exact-active-class=" active">
              <button class="btn" type="button" to="/Junior">
                Pourquoi nous utiliser
              </button></b-nav-item
            >
          </div>
        </div>
      </div>
    </div>

    <!--<div class="cn container">
      <div class="row container">
        <div class="icon col-md-6">
          <img
            v-bind:src="require('../assets/orange.png')"
            width="500"
            class="center-block"
            alt="service-image"
          />
          <div class="card-img-overlay text-center">
            <h3 class="card-title text-center">Je suis Junior<br /></h3>
            <h4>Apprend avec un mentor</h4>

            <p>
              Intègre une communauté de talents. Sois entouré d’entrepreneurs
              d’exception. Développe tes compétences auprès d’un mentor à
              l’écoute.
            </p>
            <div class="gap-2 col-12 mx-auto text-center">
              <b-nav-item to="/Junior" exact-active-class=" active">
                <button class="btn" type="button" to="/Junior">
                  Pourquoi nous utiliser
                </button></b-nav-item
              >
            </div>
          </div>
        </div>

        <div class="icon col-md-6">
          <img
            v-bind:src="require('../assets/violé.png')"
            width="500"
            class="center-block"
            alt="service-image"
          />
          <div class="card-img-overlay text-center">
            <h3 class="card-title text-center">Je suis Senior<br /></h3>
            <h4>Partage ton savoir</h4>
            <p>
              Diffuse tes connaisances auprès d’indépendants motivés. Rejoins
              une communauté de mentors et continue d’enrichir tes compétences.
            </p>
            <div class="col-12 mx-auto text-center">
              <b-nav-item to="/Senior" exact-active-class=" active">
                <button class="btn" type="button" to="/Senior">
                  Pourquoi nous utiliser
                </button></b-nav-item
              >
            </div>
          </div>
        </div>
      </div> 
    </div>-->
  </div>
</template>


<script>
export default {
  name: "Services",
};
</script>


<style scoped>
@media screen and (max-width: 1300px) {
  .icon {
    padding-top: 15px;
    padding-bottom: 15px;
  }
  img {
    width: 100%;
  }
  .card-img-overlay {
    padding: 0 !important;
  }
  p {
    font-size: 0.7rem !important;
    margin: 0px !important;
  }
  h4 {
    margin: 0px !important;
    font-size: 1.2rem !important;
  }
  h3 {
    margin-bottom: 0px !important;
    font-size: 1.3rem !important;
  }
}

.service .container {
  background-color: #444444;
}

#services {
  padding-top: 70px;
  padding-bottom: 70px;
  background-color: #ffffff;
}

h3 {
  margin: 20px;
  font-weight: bold;
  color: #000000;
}
span {
  background-color: #ffb600;
  background-size: 3.2em;
  background-position: 30px;
  margin-bottom: 50px;
  padding: -5px 10px 10px 0;
}

p {
  padding: 0px 40px 0px 40px;
  color: #ffffff;
  font-family: "Poppins";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
}
.liste {
  margin: 15%;
}
.liste2 {
  margin: 15%;
}

.btn {
  background-color: #ffffff;
  color: #000;
  border-radius: 20px;
  padding: 90 70px;
  line-height: 1.5;
}
h4 {
  margin: 20px;

  color: #ffffff;
}
h2 {
  margin: 20px;

  color: #fe007a;
}
.text {
  color: #000;
}
.cn {
  padding: 0px 0px 0px 0;
}
.rounded {
    border-radius: 1rem!important;
}


.bg-purple{
  background-color: #A163FF;
}
</style>

<template>
  <section class="banner-section container">
    <div class="row align-items-center">
      <div class="col-lg-6 col-md-12">
        <h1 class="fw-bold display-6 text-white mb-2">{{ $t('banner.heading1') }}</h1>
        <h2 class="fw-bold display-5" style="color:#2196f3; font-size:26px;">{{ $t('banner.heading2') }}</h2>
        <p class="text-light mt-4 fs-5" style="max-width: 500px;">
          {{ $t('banner.paragraph1') }}<br>
          {{ $t('banner.paragraph2') }}<br>
          {{ $t('banner.paragraph3') }}<br>
          {{ $t('banner.paragraph4') }}<br>
          {{ $t('banner.paragraph5') }}
        </p>
      </div>
      <div class="col-lg-6 col-md-12 banner-pic position-relative" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="400" >
        <img src="../assets/logo-ks2.png" alt="Profile" class="rounded-circle img-fluid banner-image" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n({
  messages: {
    en: {
      banner: {
            "heading1": "HEY! WE'RE WEB DEVELOPERS",
            "heading2": "BUILDING DIGITAL SOLUTIONS",
            "paragraph1": "With a combined experience of 14 years in web development,",
            "paragraph2": "we specialize in crafting modern, effective websites and web applications.",
            "paragraph3": "From WordPress to Vue.js, Angular, .NET, Drupal, and PrestaShop,",
            "paragraph4": "deliver results that help freelancers and businesses grow.",
            "paragraph5": "Let us turn your ideas into reality with creative and reliable web solutions."
        }
    },
    fr: {
      banner: {
    "heading1": "HEY ! NOUS SOMMES DÉVELOPPEURS WEB",
    "heading2": "CONSTRUISONS DES SOLUTIONS DIGITALES",
    "paragraph1": "Avec une expérience combinée de 14 ans en développement web,",
    "paragraph2": "nous sommes spécialisés dans la création de sites et applications web modernes et performants.",
    "paragraph3": "De WordPress à Vue.js, Angular, .NET, Drupal et PrestaShop,",
    "paragraph4": "nous fournissons des résultats aidant freelances et entreprises à croître.",
    "paragraph5": "Laissez-nous transformer vos idées en réalité avec des solutions web créatives et fiables."
      }
    }
    // Add more languages here...
  },
  locale: 'en', // default locale for this component
})
</script>


<style lang="scss">
.banner-section {
    min-height: 75vh;
    // background: linear-gradient(90deg,#07233B 1.67%,#041D34 39.95%,#04192D 58.24%,#040E18 80.28%,#050C16 101.48%);
}

.banner-pic {
    min-width: 320px;
    min-height: 320px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.banner-image {
  width: 320px;
    height: 320px !important;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 0 100px 10px #00000080;
    padding: 40px;
}
</style>

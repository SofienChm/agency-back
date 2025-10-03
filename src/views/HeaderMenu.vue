<template>
<!-- <nav v-if="!isdashbordPage" :class="['menu', { 'scrolled': isScrolled }]"> -->
<nav :class="['menu', { scrolled: isScrolled }]">
    <div class="container desk-menu d-none d-md-block">
        <div class="logo" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="400">
           <router-link class="custom-link" to="/" @click.prevent="scrollToTop"><img src="./../assets/logo-ks2.png" alt="" srcset=""></router-link> 

        </div>

         <!-- Modal Wrapper -->
        

        <ul class="list">
            <li data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500" class="aos-init aos-animate">

                <router-link class="custom-link" to="/" @click.prevent="scrollToTop">{{ $t('menu.home') }}</router-link>

            </li>
            <li data-aos="fade-down" data-aos-easing="linear" data-aos-duration="300" class="aos-init aos-animate">
                <router-link class="custom-link" to="/" @click.prevent="scrollToSection('#about')">{{ $t('menu.aboutMe') }}</router-link>

            </li>
            <li data-aos="fade-down" data-aos-easing="linear" data-aos-duration="400" class="aos-init aos-animate">
                <router-link class="custom-link" to="/" @click.prevent="scrollToSection('#services')">{{ $t('menu.services') }}</router-link>

            </li>
            <li data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500" class="aos-init aos-animate">
                <router-link class="custom-link" to="/" @click.prevent="scrollToSection('#projects')">{{ $t('menu.projects') }}</router-link>

            </li>
            <li data-aos="fade-down" data-aos-easing="linear" data-aos-duration="600" class="aos-init aos-animate">
                <router-link class="custom-link" to="/" @click.prevent="scrollToSection('#contact')">{{ $t('menu.contact') }}</router-link>

            </li>
        </ul>
        <a href="javascript:;" class="lets-talk-btn" @click.prevent="showModal">
            {{ $t("menu.letsTalk") }}
        </a>
        <!-- LANGUAGE DROPDOWN, FINAL VERSION -->
          <div class="dropdown-menu_main">
           <div class="dropdown-menu_selector">
            <button class="dropdown-toggle btn btn-light" @click="toggleDropdown">
                <span v-if="$i18n.locale === 'en'"><img src="./../assets/united-kingdom.png" alt="" srcset="" /></span>
                <span v-else-if="$i18n.locale === 'fr'"><img src="./../assets/france.png" alt="" srcset="" /></span>
                <span v-else-if="$i18n.locale === 'it'"><img src="./../assets/italy.png" alt="" srcset="" /></span>
            
              </button>
           </div>
           <ul :class="['listlange', { 'toggled': isToggled }]" ref="dropdown" v-if="dropdownVisible">
            <li @click="closeDropdown">
              <button class="dropdown-item" @click="changeLanguage('en')"><img src="./../assets/united-kingdom.png" class="prettydrop__flag" >English</button>
            </li>
            <li @click="closeDropdown">
                <button class="dropdown-item" @click="changeLanguage('fr')">
                    <img src="./../assets/france.png" class="prettydrop__flag" >Frensh
                </button>
            </li>
            <li @click="closeDropdown">
                <button class="dropdown-item" @click="changeLanguage('it')">
                    <img src="./../assets/italy.png" class="prettydrop__flag" >Italien
                </button>
            </li>
           </ul>
         </div>
        
    </div>
    <div class="burger-menu">
        <div class="logo logo-mobile">KS</div>

        <!-- Hidden Checkbox to Control Menu -->
        <input type="checkbox" id="burger-toggle" />
        <!-- Burger Icon -->
        <label for="burger-toggle" class="burger-container">
            <div class="burger-line"></div>
            <div class="burger-line"></div>
            <div class="burger-line"></div>
        </label>
        <!-- Navigation Menu -->
        <nav class="nav-menu">
            <ul class="">
                <li>
                    <router-link class="custom-link" to="/" @click.native.prevent="scrollToTop">{{ $t('menu.home') }}</router-link>
                </li>
                <li>
                    <router-link class="custom-link" to="/" @click.prevent="scrollToSection('#about')">{{ $t('menu.aboutMe') }}</router-link>
                </li>
                <li>
                    <router-link class="custom-link" to="/" @click.prevent="scrollToSection('#services')">{{ $t('menu.services') }}</router-link>
                </li>
                <li>
                    <router-link class="custom-link" to="/" @click.prevent="scrollToSection('#projects')">{{ $t('menu.projects') }}</router-link>
                </li>
                <li>
                    <router-link class="custom-link" to="/" @click.prevent="scrollToSection('#contact')">{{ $t('menu.contact') }}</router-link>
                </li>
            </ul>
            <ul class="langue-mobile" aria-labelledby="langDropdown">
                <li>
                    <button class="dropdown-item" @click="changeLanguage('en')">
                        EN
                    </button>
                </li>
                <li>
                    <button class="dropdown-item" @click="changeLanguage('fr')">
                        FR
                    </button>
                </li>
                <li>
                    <button class="dropdown-item" @click="changeLanguage('it')">
                        IT
                    </button>
                </li>
            </ul>
        </nav>
    </div>
</nav>
<!-- Button replaced by your lets-talk-btn already -->
<!-- Modal -->
<div class="modal fade" id="contactModal" tabindex="-1" aria-labelledby="contactModalLabel" aria-hidden="true" ref="contactModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="contactModalLabel">{{ $t('menu.ContactUs') }}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="hideModal"></button>
            </div>
            <div class="modal-body">
                <!-- Your contact form or content here -->
                <div class="row">
                    <div class="col-lg-5">
                        <div class="thumb">
                            <img class="img-fluid" src="../assets/logo-dark.jpg">
                        </div>
                    </div>
                    <div class="col-lg-7">
                        <div class="contact-info">
                            <div class="contact-info-in">
                                <label>{{ $t('menu.Write') }}</label>
                                <a href="mailto:ks-solution@gmail.com">ks-solution@gmail.com</a>
                            </div>
                            <div class="contact-info-in">
                                <label>Contact us on Facebook</label>
                                <a href="tel:+044969696963636">https://fb.com/ks.solution1/</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    ref,
    onMounted,
    onBeforeUnmount
} from "vue";
import {
    useRoute
} from "vue-router";
import {
    computed
} from "vue";
import Contact from './Contact.vue'
import {
    Modal
} from "bootstrap";

export default {
    name: "HeaderComponent",
    data() {
        return {
            isToggled: false,
            dropdownVisible: true
        };
    },
    methods: {
        changeLanguage(lang) {
            this.$i18n.locale = lang;
        },
        showModal() {
            const modalEl = this.$refs.contactModal;
            this.bsModal = new Modal(modalEl);
            this.bsModal.show();
        },
        hideModal() {
            if (this.bsModal) this.bsModal.hide();
        },
        scrollToSection(sectionId) {
            const el = document.querySelector(sectionId);
            if (el) {
                el.scrollIntoView({
                    behavior: "smooth"
                });
            }
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        },
        toggleDropdown() {
            this.isToggled = !this.isToggled;
            if (this.isToggled) {
              document.addEventListener('click', this.handleClickOutside);
            } else {
              document.removeEventListener('click', this.handleClickOutside);
            }
        },
        closeDropdown() {
          this.isToggled = false;
          document.removeEventListener('click', this.handleClickOutside);
        },
    },
    setup() {
        const openMenu = ref(false);

        const showContactModal = ref(false);

        function toggleContactModal() {
            showContactModal.value = !showContactModal.value;
        }

        const route = useRoute();
        // const isdashbordPage = computed(() => route.path.startsWith('/dashbord'));
        const isScrolled = ref(false);
        const activeSection = ref("home");
        const updateActiveSection = () => {
            const hash = window.location.hash;
            if (hash === "#about") activeSection.value = "about";
            else if (hash === "#services") activeSection.value = "services";
            else if (hash === "#projects") activeSection.value = "projects";
            else if (hash === "#contact") activeSection.value = "contact";
            else activeSection.value = "home";
        };
        const onScroll = () => {
            isScrolled.value = window.scrollY > 50; // change 50 to your scroll threshold
        };

        onMounted(() => {
            window.addEventListener("scroll", onScroll);
            window.addEventListener("hashchange", updateActiveSection);
            updateActiveSection(); // Check initial hash
        });

        onBeforeUnmount(() => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("hashchange", updateActiveSection);
        });

        return {
            isScrolled,
            // isdashbordPage,
            activeSection,
            openMenu,
            showContactModal,
            toggleContactModal,
        };
    },
};
</script>

<style lang="scss" scoped>
.menu {
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
    color: white;
    transition: background-color 0.3s, box-shadow 0.3s;
    z-index: 1000;
    box-shadow: 0 8px 40px 0 rgba(83, 206, 250, 0.08);

    ul.list {
        display: flex;
        list-style: none;
        gap: 2rem;
        margin: 0;
        padding: 0;
    }

    @media screen and (max-width: 768px) {
        background: rgba(0, 0, 0, 0.9);
        min-height: 65px;
    }

    @media screen and (min-width: 768px) {
        display: flex !important;
    }

    .desk-menu {
        @media screen and (min-width: 768px) {
            display: flex !important;
        }
    }
}

.menu>.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.menu.scrolled {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    z-index: 1000;
}

.logo {
    font-weight: bold;
    font-size: 2rem;

    img {
        max-width: 50px;
    }
}

li a,
.lets-talk-btn {
    color: white;
    text-decoration: none;
    font-weight: 600;
}

.lets-talk-btn {
    background-color: #2196f3;
    padding: 0.5rem 1.5rem;
    border-radius: 20px;
    white-space: nowrap;
}

.custom-link {
    color: white;
    text-decoration: none;
    font-weight: 600;
}

/* Add this at the end of your style block */
.dropdown-menu {
    flex-direction: column !important;
    min-width: 10rem;
    /* default Bootstrap, adjust if needed */
    padding: 0.5rem 0;
}

.dropdown-item {
    width: 100%;
}

.dropdown-langue {
    position: absolute;
    right: 30px;
    max-width: 30px;
    margin-left: 0 !important;

    img {
        max-width: 30px;
    }

    .dropdown-toggle {
        background: transparent;
        border: none;
        padding: 0;
    }

    .dropdown-toggle {
        &:after {
            color: white;
        }
    }

    .dropdown-menu {
        min-width: max-content !important;
    }
}

.burger-menu {
    @media (min-width: 768px) {
        display: none;
    }

    @media (min-width: 768px) {
        .nav-menu {
            width: 750px;
        }
    }

    /*Medium Screens */
    @media (min-width: 922px) {
        .nav-menu {
            width: 970px;
        }
    }

    /*Large Screens */
    @media (min-width: 1200px) {
        .nav-menu {
            width: 1170px;
        }
    }

    .logo-mobile {
        margin-left: 20px;
        position: absolute;
        left: 0;
        z-index: 999;
        top: 7px;
    }

    /* Burger Icon Container */
    .burger-container {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 1000;
        cursor: pointer;
        width: 40px;
        height: 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 5px;
        border-radius: 5px;
        background: hwb(0 100% 0% / 0.1);
        backdrop-filter: blur(10px);
        box-shadow: 0 4px 6px #0000001a;
    }

    /* Burger Icon Lines */
    .burger-line {
        width: 100%;
        height: 2px;
        background-color: var(--primary-color);
        border-radius: 5px;
        transform-origin: center;
        transition: all 0.4s ease-in-out;
        background-color: #fff;
    }

    /* Checkbox Hack */
    #burger-toggle {
        display: none;
    }

    /* Navigation Styles */
    .nav-menu {
        position: fixed;
        top: 0;
        right: -100%;
        width: 100%;
        max-width: 100%;
        height: 100%;
        background: black;
        transition: right 0.4s cubic-bezier(0.77, 0.2, 0.05, 1);
        box-shadow: -4px 0 15px #00000033;
        overflow-y: auto;
        padding-top: 100px;

        .langue-mobile {
            display: flex;
        }
    }

    .nav-menu::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 65px;
        background: #ffffff0d;
        backdrop-filter: blur(10px);
    }

    .nav-menu ul {
        list-style-type: none;
    }

    .nav-menu ul li {
        margin: 0 15px;
        border-bottom: 1px solid #ffffff1a;
    }

    .nav-menu ul li a {
        color: white;
        text-decoration: none;
        display: block;
        padding: 15px;
        font-weight: 500;
        position: relative;
        overflow: hidden;
    }

    .nav-menu ul li a::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: -100%;
        width: 100%;
        height: 2px;
        background-color: var(--secondary-color);
        transition: left 0.3s ease;
    }

    .nav-menu ul li a:hover::after {
        left: 0;
    }

    /* Burger Icon Animation on Checkbox Checked */
    #burger-toggle:checked~.burger-container .burger-line:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }

    #burger-toggle:checked~.burger-container .burger-line:nth-child(2) {
        opacity: 0;
    }

    #burger-toggle:checked~.burger-container .burger-line:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -5px);
    }

    /* Navigation Slide In */
    #burger-toggle:checked~.nav-menu {
        right: 0;
    }
}

#contactModal {
    .contact-info {
        .contact-info-in {
            display: flex;
            flex-direction: column;
            padding-top: 20px;

            a {
                color: #050d19;
                font-weight: 700;
                text-decoration: none;
            }
        }
    }
}
.dropdown-menu_main{
  position: absolute;
  right: 30px;
  .dropdown-menu_selector{
    img{
      max-width: 30px;
    }
    button{
      z-index: 999;
      position: relative;
      background: transparent;
      border: none;
      &:hover{
         background: transparent;
      }
      &::after{
        color:#fff;
      }
    }
  }
  .listlange{
    background: #fff;
    border-radius: 3px;
    height: 0;
    max-height: 20.5em;
    opacity: 0;
    overflow: auto;
    position: absolute;
   
    width: max-content;
    padding: 10px;
    left: 50%;
    top: 0;
    transform: translate(-50%, 40%);
    &.toggled{
      list-style: none;
      box-shadow: 0 10px 40px 5px rgba(0, 0, 0, 0.2);
      height: auto;
      opacity: 1;
      transition: 0.5s 
      ease-in-out;
    }
    li{
      color:#050d19;
      cursor: pointer;
      display: flex;
      align-items: center;
      padding-bottom: 8px;
      img{
        display: inline-block;
        margin-right: 10px;
        vertical-align: middle;
        max-width: 20px;
      }
    }
  }
}
</style>

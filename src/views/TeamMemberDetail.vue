<template>
<section class="container detail-team">
    <div class="team-details-wrapper">
        <div v-if="person" class="team-details-items">
            <div class="row">
                <div class="col-lg-4 pt-4 pt-lg-0">
                    <div class="thumb">    
                        <img class="img-fluid" :src="person.photo" />
                    </div>
                </div>
                <div class="col-lg-8">
                <div class="content">
                    <div class="title">
                        <h2>{{ person.name }}</h2>
                        <div>{{ person.role }}</div>
                    </div>
                    <div class="description">
                        {{ $t(person.description) }}
                    </div>
                    
                    <div class="social">
                        <div class="icon-items">
                            <div class="icon">
                                <a href="https://wa.me/3342720160"><i class="bi bi-whatsapp"></i></a>    
                            </div>
                        </div>
                        <div class="icon-items">
                            <div class="icon">
                                <a :href="person.socials.facebook" target="_blank"><i class="bi bi-facebook"></i></a>
                            </div>
                        </div>
                        <div class="icon-items">
                            <div class="icon">
                                <a :href="person.socials.linkedin" target="_blank"><i class="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div v-else>
            {{ $t('team.memberNotFound') }}
        </div>
    </div>
</section> 
<Footer />
</template>

<script>
import Footer from './Footer.vue';
import {
    useI18n
} from 'vue-i18n';
export default {
    components: {
    Footer
  },
  
  props: ['id'],
  data() {
    return {
      person: null,
      people: [
        {
          id: 1,
          name: "Sofien Cheikh mohamed",
          role: this.$t ? this.$t("team.frontendDeveloper") : "Frontend Developer",
          photo: new URL('../assets/profile-pic.png', import.meta.url).href,
          description: "team.sofienDescription",
          socials: {
            facebook: "https://facebook.com/sofien.dk",
            linkedin: "https://linkedin.com/in/sofien-chm/"
          }
        },
        {
          id: 2,
          name: "Khalil hemessi",
          role: this.$t ? this.$t("team.fullStackDeveloper") : "Full Stack Developer",
          photo: new URL('../assets/khalil-1.png', import.meta.url).href,
          description: "team.khalilDescription",
          socials: {
            facebook: "https://facebook.com/khalilhemissi",
            linkedin: "https://linkedin.com/in/khalil-hemissi-331977144/"
          }
        }
      ]
    };
  },
  created() {
    this.person = this.people.find(p => p.id === Number(this.id));
  }
}
</script>

<style lang="scss">
.detail-team{
    .team-details-wrapper{
        .team-details-items{
            padding: 30px;
            border-radius: 10px;
            background: rgba(10, 25, 47, 0.93);
            border: 1px solid #23283c;
            box-shadow: 0 8px 40px 0 rgba(83, 206, 250, 0.08);
            .thumb{
                img{
                    border-radius: 10px;
                }
            }
            .content{
                .title{
                    color:#fff;
                    border-bottom: 1px solid #23283c;
                    padding-bottom: 10px;
                    margin-bottom: 20px;
                    h2{
                        margin-bottom: 0;
                    }
                }
                .description{
                    color:#fff;
                }
                .social{
                    border-top: 1px solid var(--border);
                    border-bottom: 1px solid var(--border);
                     display: flex;
                    align-items: center;
                    gap:5px;
                    margin-top: 20px;
                    .icon-items{
                        display: flex;
                        align-items: center;
                        gap: 12px;
                        .icon{
                            width: 36px;
                            height: 36px;
                            line-height: 36px;
                            border-radius: 50%;
                            text-align: center;
                            background-color: #F6F3FE;
                            margin-bottom: 0;
                        }
                        h5{
                            margin-bottom: 0;
                            a{
                                color: #fff;
                                font-size: 16px;
                                text-decoration: none;
                            }
                        }
                    }

                }
            }
        }
    }
}
</style>

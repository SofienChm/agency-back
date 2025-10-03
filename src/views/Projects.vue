<template>
<section class="projects-section" id="projects">
    <div class="container">
        <span class="badge rounded-pill bg-primary fs-6 px-3 py-2 mb-3">{{ $t('project.myWork') }}</span>
        <h2 class="fw-bold display-5 text-white mb-4">{{ $t('project.title') }}</h2>
        <div class="row g-4">
            <div class="col-md-3 aos-init aos-animate" data-aos="fade-top" data-aos-easing="linear" data-aos-duration="400" v-for="(project, idx) in projects" :key="idx">
                <div class="card h-100 project-card" @click="openProjectModal(project)" style="cursor:pointer;">
                    <img :src="project.image" class="card-img-top" :alt="project.title" />
                    <div class="card-body">
                        <h5 class="card-title fw-bold">{{ project.title }}</h5>
                        <p class="card-text text-secondary">{{ project.subtitle }}</p>
                        <button class="btn btn-primary rounded-circle float-end" @click.stop="openProjectModal(project)">
                            <i class="bi bi-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="showModal" class="modal-backdrop fade show" style="background: rgba(0,0,0,0.7); position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; z-index: 1050;">
            <div class="modal-dialog modal-lg modal-dialog-centered px-modal" style="z-index: 1060; margin: auto;">
                <div class="modal-content">
                    <div class="modal-body">
                        <button type="button" class="btn-close" aria-label="Close" @click="closeProjectModal"></button>

                        <a v-if="selectedProject?.liveurl" :href="selectedProject.liveurl" target="_blank" rel="noopener" class="btn btn-primary">{{ $t('project.livePreview') }}</a>
                        <div class="single-project-box">
                            <div class="row align-items-start">
                                <div class="col-lg-7">
                                    <img v-if="selectedProject?.imageURL || selectedProject?.image" :src="selectedProject.imageURL || selectedProject.image" class="img-fluid mb-3" alt="Project Image" />
                                </div>
                                <div class="col-lg-5 pt-4 pt-lg-0">
                                    <h4>
                                        <p class="fw-bold">{{ selectedProject?.tags || selectedProject?.subtitle }}</p>
                                    </h4>
                                    <div class="mb-3">
                                        <p v-if="selectedProject?.description">{{ selectedProject.description }}</p>
                                    </div>
                                    <div class="about-content">
                                        <ul>
                                            <li class="d-flex">
                                                <span v-if="selectedProject?.type" class="col-4 col-lg-3">{{ $t('project.type') }}:</span>
                                                <span>{{ selectedProject.type }}</span>
                                            </li>
                                            <li class="d-flex">
                                                <span v-if="selectedProject?.Langages" class="col-4 col-lg-3">{{ $t('project.langages') }}:</span>
                                                <span>{{ selectedProject.Langages }}</span>
                                            </li>
                                            <li class="d-flex">
                                                <span v-if="selectedProject?.Platform" class="col-4 col-lg-3">{{ $t('project.platform') }}:</span>
                                                <span>{{ selectedProject.Platform }}</span>
                                            </li>
                                            <li class="d-flex">
                                                <span v-if="selectedProject?.Country" class="col-4 col-lg-3">{{ $t('project.country') }}:</span>
                                                <span>{{ selectedProject.Country }}</span>
                                            </li>
                                            <li class="d-flex">
                                                <span v-if="selectedProject?.liveurl" class="col-4 col-lg-3">{{ $t('project.liveURL') }}:</span>
                                                <span>{{ selectedProject.liveurl }}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</section>
</template>

<script>
import {
    ref,
    onMounted
} from "vue";
import {
    useI18n
} from 'vue-i18n';

export default {
    name: "projects",
    setup() {

        const projet = ref([]);
        const {
            t
        } = useI18n();

        const projects = [{
                image: new URL('../assets/pizzafina.jpg',
                    import.meta.url).href,
                title: t('project.project1.title'),
                subtitle: t('project.project1.subtitle'),
                description: t('project.project1.description'),
                type: 'Website',
                Langages: 'PHP, HTML, CSS, JS',
                Platform: 'WordPress',
                Country: 'Canada ',
                liveurl: 'https://pizzafina.ca/',
            },
            {
                image: new URL('../assets/sge.jpg',
                    import.meta.url).href,
                title: t('project.project2.title'),
                subtitle: t('project.project2.subtitle'),
                description: t('project.project2.description'),
                type: 'Website',
                Langages: 'PHP, HTML, CSS, JS',
                Platform: 'WordPress',
                Country: 'France',
                liveurl: 'https://sgeieg.fr/',
            },
            {
                image: new URL('../assets/hockey.jpg',
                    import.meta.url).href,
                title: t('project.project3.title'),
                subtitle: t('project.project3.subtitle'),
                description: t('project.project3.description'),
                type: 'Website',
                Langages: 'PHP, HTML, CSS, JS',
                Platform: 'WordPress',
                Country: 'France',
                liveurl: 'https://www.hockey-chambery.com/',
            },
            {
                image: new URL('../assets/najen.jpg',
                    import.meta.url).href,
                title: t('project.project4.title'),
                subtitle: t('project.project4.subtitle'),
                description: t('project.project4.description'),
                type: 'Website',
                Langages: 'PHP, HTML, CSS, JS',
                Platform: 'Prestashop',
                Country: 'Tunisie',
                liveurl: 'https://najen-nature.com/',
            }
        ];

        const selectedProject = ref(null);
        const showModal = ref(false);

        function openProjectModal(project) {
            selectedProject.value = project;
            showModal.value = true;
        }

        function closeProjectModal() {
            showModal.value = false;
            selectedProject.value = null;
        }

        // onMounted(fetchProjects);

        return {
            projet,
            projects,
            selectedProject,
            showModal,
            openProjectModal,
            closeProjectModal
        };
    }
};
</script>

<style lang="scss">
.projects-section {
    min-height: 70vh;

    .modal-backdrop {
        opacity: 1 !important;

        .modal-dialog {
            background: white;
            max-width: 1200px;
            margin: 30px auto;
            padding: 30px;
            position: relative;

            .modal-content {
                position: relative;

                .btn-close {
                    position: absolute;
                    right: 0;
                    top: 0;

                    @media screen and (max-width:768px) {
                        right: -25px;
                        top: -25px;
                    }
                }

                .about-content {
                    ul {
                        padding: 0;
                        margin: 0;
                        list-style: none;

                        li {
                            padding: 5px 0;
                        }
                    }
                }
            }
        }
    }
}

.project-card {
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 2px 14px 0 rgba(20, 48, 96, 0.12);
    background: #fff;
    cursor: pointer;

    .card-title {
        color: #0c1745;
    }

    .rounded-circle_custom {
        display: flex;
        align-items: anchor-center;
    }

    .btn {
        background: #2196f3;
        border: none;
        width: 40px;
        height: 40px;

        i {
            color: #fff;
            font-size: 1.2rem;
        }
    }

    .card-img-top {
        transition: ease all .35s;
        transform: scale(1);
    }

    &:hover {

        .card-img-top {
            transform: scale(1.05);
        }

    }
}

.modal-backdrop {
    background: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1050;
    display: flex;
    align-items: center;
    justify-content: center;

    .show {
        opacity: 1;
    }
}

.modal-dialog {
    z-index: 1060;
    margin: auto;
    max-width: 800px;
    width: 90vw;
}
</style>

<template>
    <v-container fluid >
        <v-row align="center" justify="center" class="mb-0">
            <v-col cols="12" md="12" lg="12" sm="12" class="mb-0">
                <p class="google-font mb-1" style="font-weight: 350;font-size:200%"><b>Our
                    <span style="color: #1a73e8;">Curriculum</span> </b> 
                </p>
                <p class="google-font mt-1 mb-0" style="font-size:100%">{{config.curriculumConfig.curriculumDescription}}</p>
            </v-col>
        </v-row>

    <v-row align="center" class="fill-height">

      <v-col md="12" sm="12" cols="12" class>
        <v-img
          :src="config.curriculumConfig.curriculumImage"
          width="100%"
        >
        </v-img>
      </v-col>
      
      <v-col md="9" sm="6" cols="12" class="px-0">
        <p
          class="google-font mb-1"
          :class="$vuetify.theme.dark == true?'dark-font-color':'light-font-color'"
          style="font-weight: 350;font-size:230%"
        >
        </p>

      </v-col>
    </v-row>

        <v-row align="center" justify="start" class="mt-0">
            <v-col cols="12" md="12" lg="12" sm="12" class="mx-1 mt-5">
                <p class="google-font mb-0" style="font-size:130%">Main Study</p>
            </v-col>
            <!-- <v-col cols="12" md="3" lg="3" xl="2" sm="4" v-for="(item, i) in config.curriculumConfig.studyImages" :key="i">
                <div class="client-logo ma-0">
                    <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                        <v-img 
                        :src=item
                        :lazy-src=item
                        class="white"
                        contain
                        style="height:9em"
                        v-on="on"
                        >
                            <v-layout
                                slot="placeholder"
                                fill-height
                                align-center
                                justify-center
                                ma-0
                            >
                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-layout>
                        </v-img>
                    </template>
                    <span class="google-font">Android</span>
                    </v-tooltip>
                </div>
            </v-col> -->

            <v-col cols="12" md="3" lg="3" xl="2" sm="4">
                <div class="client-logo ma-0">
                    <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                        <v-img
                        :src= "config.curriculumConfig.studyImages.study1Image"
                        :lazy-src="require('@/assets/img/main-study/android.png')"
                        class="white"
                        contain
                        style="height:9em"
                        v-on="on"
                        >
                            <v-layout
                                slot="placeholder"
                                fill-height
                                align-center
                                justify-center
                                ma-0
                            >
                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-layout>
                        </v-img>
                    </template>
                    <span class="google-font">Android</span>
                    </v-tooltip>
                </div>
            </v-col>


            <v-col cols="12" md="3" lg="3" xl="2" sm="4">
                <div class="client-logo ma-0">
                    <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                        <v-img
                        :src= "config.curriculumConfig.studyImages.study2Image"
                        :lazy-src="require('@/assets/img/main-study/kotlin-icon.png')"
                        class="white"
                        contain
                        style="height:9em"
                        v-on="on"
                        >
                            <v-layout
                                slot="placeholder"
                                fill-height
                                align-center
                                justify-center
                                ma-0
                            >
                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-layout>
                        </v-img>
                    </template>
                    <span class="google-font">Kotlin</span>
                    </v-tooltip>
                </div>
            </v-col>

            <v-col cols="12" md="3" lg="3" xl="2" sm="4">
                <div class="client-logo ma-0">
                    <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                        <v-img
                        :src= "config.curriculumConfig.studyImages.study3Image"
                        :lazy-src="require('@/assets/img/main-study/TensorFlowLogo.png')"
                        class="white"
                        contain
                        style="height:9em"
                        v-on="on"
                        >
                            <v-layout
                                slot="placeholder"
                                fill-height
                                align-center
                                justify-center
                                ma-0
                            >
                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-layout>
                        </v-img>
                    </template>
                    <span class="google-font">TensorFlow</span>
                    </v-tooltip>
                </div>
            </v-col>

            <v-col cols="12" md="3" lg="3" xl="2" sm="4">
                <div class="client-logo ma-0">
                    <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                        <v-img
                        :src= "config.curriculumConfig.studyImages.study4Image"
                        :lazy-src="require('@/assets/img/main-study/gcp.gif')"
                        class="white"
                        contain
                        style="height:9em"
                        v-on="on"
                        >
                            <v-layout
                                slot="placeholder"
                                fill-height
                                align-center
                                justify-center
                                ma-0
                            >
                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-layout>
                        </v-img>
                    </template>
                    <span class="google-font">Google Cloud</span>
                    </v-tooltip>
                </div>
            </v-col>

            <v-col cols="12" md="6" lg="6" xl="2" sm="4">
                <p class="google-font mt-1 mb-0" style="font-size:100%">{{config.curriculumConfig.study1Description}}</p>
                <p class="google-font mt-1 mb-0" style="font-size:100%">{{config.curriculumConfig.study2Description}}</p>

            </v-col>

        </v-row>
     
    </v-container>
</template>

<script>
import service from '@/services/appservices'
import { mapState } from "vuex";
export default {
    data:()=>({
    }),
    computed:{
        ...mapState(["config"])
    },
    mounted(){
    },
    methods:{
    }
}
</script>

<style scoped>
.client-logo{
    height: 180px;
    padding: 12px 12px;
    border-radius: 7px;
    background: white;
    border: 1px solid #ebebeb;
    text-align: center;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

}
</style>
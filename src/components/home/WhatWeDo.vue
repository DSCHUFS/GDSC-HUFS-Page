<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="3" lg="3" sm="4" class>
        <p class="google-font mb-0" style="font-size:150%">What we do?</p>
        <p
          class="google-font mt-0"
          style="font-size:95%"
        >Google Developer Student Clubs (GDSCs) are for student developers who are interested in Google's developer technology.</p>
        <p class="google-font" style="font-size:95%">About different Google technologies</p>
        <span v-for="(item,i) in whatwedodata" :key="i">
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <a :href="item.link" target="_blank" class="ma-0 mx-3" rel="noreferrer">
                <img :src="getImgUrl(item.image)" width="25vh" alt srcset dark v-on="on" />
              </a>
              &nbsp;&nbsp;&nbsp;
            </template>
            <span>{{item.TechName}}</span>
          </v-tooltip>
        </span>
      </v-col>
      <v-col cols="12" md="9" lg="9" sm="8">
        <v-container fluid>
          <v-row>
            <v-col md="3" lg="3" sm="6" cols="6" class="text-center pa-2">
              <v-icon large style="font-size:300%">mdi-comment</v-icon>
              <p class="google-font mt-2" style="font-size:130%">Talks</p>
              <p
                class="google-font"
                style="font-size:95%"
              >커뮤니티 멤버들과 함께 기술적인 교류와 소통, 네트워킹 기회를 가져봐요!</p>
            </v-col>
            <v-col md="3" lg="3" sm="6" cols="6" class="text-center pa-2">
              <v-icon large style="font-size:300%">mdi-code-tags</v-icon>
              <p class="google-font mt-2" style="font-size:130%">Codelabs</p>
              <p
                class="google-font"
                style="font-size:95%"
              >함께 프로젝트와 실습을 진행하면서 실무 역량을 강화하고 다양한 기술들을 경험해봐요!</p>
            </v-col>
            <v-col md="3" lg="3" sm="6" cols="6" class="text-center pa-2">
              <v-icon large style="font-size:300%">mdi-school</v-icon>
              <p class="google-font mt-2" style="font-size:130%">Campus Roadshows</p>
              <p
                class="google-font"
                style="font-size:95%"
              >다양한 여러 대학교, 회사, 커뮤니티, 그룹들과 지식을 공유해요!</p>
            </v-col>
            <v-col md="3" lg="3" sm="6" cols="6" class="text-center pa-2">
              <v-icon large style="font-size:300%">mdi-chart-bubble</v-icon>
              <p class="google-font mt-2" style="font-size:130%">Live Viewing Parties</p>
              <p
                class="google-font"
                style="font-size:95%"
              >다양한 구글 개발 커뮤니티의 행사, 이벤트, 세션, 워크샵 등을 함께 즐겨요!</p>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import whatwedodata from "@/assets/data/whatwedo.json";
export default {
  name: "App",
  data: () => ({
    whatwedodata: whatwedodata
  }),
  methods: {
    getImgUrl(url) {
      if (url.length > 0) {
        return require("@/assets/img/what-we-do/" + url);
      } else {
        return require("@/assets/img/what-we-do/notFound.png");
      }
    }
  }
};
</script>
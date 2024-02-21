<template>
  <div id="homepage">
    <v-container>
      <v-layout column>
        <v-carousel>
          <v-carousel-item
            src="../../public/miles-burke-idhx-MOCDSk-unsplash.jpg"
            cover
          ></v-carousel-item>

          <v-carousel-item
            src="../../public/paolo-nicolello-umUfeLXPB_I-unsplash.jpg"
            cover
          ></v-carousel-item>

          <v-carousel-item
            src="../../public/julian-hochgesang-Dkn8-zPIbwo-unsplash.jpg"
            cover
          ></v-carousel-item>
        </v-carousel>
      </v-layout>
      <v-layout>
        <v-container>
          <v-row align="center" justify="center">
            <div class="d-flex align-center flex-column">
              <div class="text-subtitle-2">With props</div>

              <v-card
                width="400"
                title="Contact Us"
                subtitle="We would like to hear from you"
                text="For course inquiries, check out the courses page or
Call: 0703 034 203/ 232 / 297"
              ></v-card>

              <div class="mt-4 text-subtitle-2">With slots</div>

              <v-card width="400">
                <template v-slot:title>Contact Us</template>

                <template v-slot:subtitle>Career Development Services</template>

                <template v-slot:text
                  >To recruit SU talent for jobs and internships Email:
                  careerservices@strathmore.edu Call: 0703 034 216 /
                  317</template
                >
              </v-card>

              <div class="mt-4 text-subtitle-2">With markup</div>

              <v-card width="400">
                <v-card-item>
                  <v-card-title>Contact Us</v-card-title>

                  <v-card-subtitle
                    >How to reach us from Nairobi Town by Public
                    means</v-card-subtitle
                  >
                </v-card-item>

                <v-card-text
                  >Nairobi Central, Nairobi, Kenya Strathmore University, Karen
                  Ole Sangale Rd</v-card-text
                >
              </v-card>
            </div>
          </v-row>
        </v-container>
      </v-layout>
    </v-container>
  </div>
</template>
<script setup>
const variants = ["elevated", "flat", "tonal", "outlined"];
</script>

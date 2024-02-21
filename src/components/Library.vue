<template>
  <div id="homepage">
    <v-container>
      <v-layout column>
        <v-carousel>
          <v-carousel-item
            src="../../public/pexels-element-digital-1370295.jpg"
            cover
          ></v-carousel-item>

          <v-carousel-item
            src="../../public/pexels-tima-miroshnichenko-9572622.jpg"
            cover
          ></v-carousel-item>

          <v-carousel-item
            src="../../public/pexels-ricky-esquivel-1907785.jpg"
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
                title="School Library"
                subtitle="Main Library Operating Times"
                text="08:00 - 21:00 (Monday-Friday)

09:00 - 18:00 (Saturday)

Closed (Sunday / Public Holidays)"
              ></v-card>

              <div class="mt-4 text-subtitle-2">With slots</div>

              <v-card width="400">
                <template v-slot:title> Online Resources</template>

                <template v-slot:subtitle>Off-Campus Access Services</template>
                <template v-slot:text
                  >To Use of this page and all subscription databases is limited
                  to currently registered students, staff/faculty, alumni and
                  selected affiliates. to use our online library regiter and
                  login using your campus network credentials at
                  https://ezproxy.library.strathmore.edu/login
                </template>
              </v-card>

              <div class="mt-4 text-subtitle-2">With markup</div>

              <v-card width="400">
                <v-card-item>
                  <v-card-title>Help and Assistance</v-card-title>

                  <v-card-subtitle>Research Consultation</v-card-subtitle>
                </v-card-item>

                <v-card-text>
                  Strathmore University offers comprehensive research
                  consultation services tailored to individuals' needs. From
                  proposal development to manuscript preparation, our
                  experienced team provides support at every stage. Whether
                  you're a student, faculty, or professional, we help you
                  overcome research challenges and achieve your academic or
                  professional goals. Contact us at 0789510827 to schedule a
                  consultation today!</v-card-text
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

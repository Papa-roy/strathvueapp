<template>
  <div id="homepage">
    <v-container>
      <v-layout column>
        <v-carousel>
          <v-carousel-item
            src="../../public/pexels-pavel-danilyuk-7942441.jpg"
            cover
          ></v-carousel-item>

          <v-carousel-item
            src="../../public/pexels-pavel-danilyuk-7944234.jpg"
            cover
          ></v-carousel-item>

          <v-carousel-item
            src="../../public/pexels-pavel-danilyuk-7944240.jpg"
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
                title="Strathmore Alumni"
                subtitle="Alumni Association"
                text="Welcome to the Strathmore University Alumni Association. Join our community to access exclusive events, career resources, networking opportunities, and discounts on education courses. Stay connected by attending alumni events, workshops, and reunions. Check the calendar for upcoming gatherings. Stay informed about alumni achievements, initiatives, and upcoming projects. Connect with fellow graduates worldwide through our online directory. Access career resources, library facilities, discounts, and special offers. Give back to Strathmore University through mentorship programs, volunteering, or donations. Reach out for assistance or questions about the alumni association. Find answers to common questions about membership, events, and benefits."
              ></v-card>

              <div class="mt-4 text-subtitle-2">With slots</div>

              <v-card width="400">
                <template v-slot:title> Alumni news </template>

                <template v-slot:subtitle
                  >What's with the alumni's now?
                </template>

                <template v-slot:text>
                  Alumni Spotlight: John Mwangi ('09) Appointed Managing
                  Director of Leading Banking Institution We are delighted to
                  announce that John Mwangi, a distinguished graduate of
                  Strathmore University's class of 2009, has been appointed as
                  the new Managing Director of ABC Bank. John's extensive
                  experience in finance and his commitment to excellence make
                  him an outstanding choice for this role. Join us in
                  congratulating John on his well-deserved achievement
                </template>
              </v-card>

              <div class="mt-4 text-subtitle-2">With markup</div>

              <v-card width="400">
                <v-card-item>
                  <v-card-title>Alumni Association</v-card-title>

                  <v-card-subtitle>Benefits and Services</v-card-subtitle>
                </v-card-item>

                <v-card-text>
                  The strathmore alumni association allows one to
                  Connect and network with fellow alumni, access
                  career resources, discounts on continuing education, library
                  access, special offers, alumni events, volunteer
                  opportunities, alumni news updates, travel and leisure
                  benefits, health and wellness services, alumni association
                  membership, and support services</v-card-text
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

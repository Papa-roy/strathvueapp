<template>
  <div id="homepage">
    <v-container>
      <v-layout column>
        <v-carousel>
          <v-carousel-item
            src="../../public/pexels-tima-miroshnichenko-9572622.jpg"
            cover
          ></v-carousel-item>

          <v-carousel-item
            src="../../public/md-duran-rE9vgD_TXgM-unsplash.jpg"
            cover
          ></v-carousel-item>

          <v-carousel-item
            src="../../public/pexels-element-digital-1370295.jpg"
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
                title="Strathmore University"
                subtitle="Where Knowledge Meets Opportunity"
                text="At Strathmore University, we are proud to be at the forefront of higher education, empowering students to pursue their passions, unlock their potential, and make a positive impact on the world. With a rich history of academic excellence, a vibrant campus community, and a commitment to innovation and inclusivity, we strive to provide an unparalleled educational experience that prepares students for success in an ever-changing global landscape.
Academic Excellence."
                Comfortable
                Living
                Spaces
              ></v-card>

              <div class="mt-4 text-subtitle-2">With slots</div>

              <v-card width="400">
                <template v-slot:title> Life at Starth Uni</template>

                <template v-slot:subtitle>
                  Accomodation at Strath Uni
                </template>

                <template v-slot:text>
                  At Strathmore University, we believe that where you live plays
                  a crucial role in your overall university experience. That's
                  why we're proud to offer a diverse range of on-campus
                  accommodation options tailored to suit every student's needs.
                  Whether you're an incoming freshman eager to embrace the
                  college lifestyle or a returning student seeking a supportive
                  community, our campus residences provide a comfortable and
                  convenient place to call home. Comfortable Living Spaces
                </template>
              </v-card>

              <div class="mt-4 text-subtitle-2">With markup</div>

              <v-card width="400">
                <v-card-item>
                  <v-card-title> Co-cirricular Activities</v-card-title>

                  <v-card-subtitle>Sports and Games</v-card-subtitle>
                </v-card-item>

                <v-card-text
                  >At Strathmore University, we believe in the power of sports to
                  enhance physical fitness, foster teamwork, and create
                  unforgettable experiences. That's why we offer a wide range of
                  games and sports facilities to cater to athletes of all levels
                  and interests. Whether you're a seasoned competitor or just
                  looking to stay active and have fun, our state-of-the-art
                  facilities and vibrant sports community have something for
                  everyone. Cutting-Edge Facilities
                </v-card-text>
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

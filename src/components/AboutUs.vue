<template>
  <div id="homepage">
    <v-container>
      <v-layout column>
        <v-carousel>
          <v-carousel-item
            src="../../public/volodymyr-hryshchenko-V5vqWC9gyEU-unsplash.jpg"
            cover
          ></v-carousel-item>

          <v-carousel-item
            src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
            cover
          ></v-carousel-item>

          <v-carousel-item
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
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
                subtitle="History"
                text="Strathmore University is a leading private university in Kenya, known for its high academic standards and commitment to excellence in education, research, and community service. Here's a summary of its history:
Foundation: Strathmore University was founded in 1961 as an Advanced-level Sixth Form College offering science and arts subjects. It was established by a group of professionals inspired by St. Josemaría Escrivá, the founder of Opus Dei, with the aim of providing quality education based on ethical principles."
              ></v-card>

              <div class="mt-4 text-subtitle-2">With slots</div>
              <v-card width="400">
                <template v-slot:title>About Strathmore</template>

                <template v-slot:subtitle> Where it is now </template>

                <template v-slot:text>
                  Strathmore University remains a leading private university
                  located in Nairobi, Kenya. It is known for its high academic
                  standards, particularly in business, finance, information
                  technology, law, humanities, and social sciences. The
                  university has a reputation for producing graduates who are
                  highly sought after by employers in Kenya and beyond.
                  Strathmore University is committed to excellence in education,
                  research, and community service, and it continues to play a
                  significant role in shaping the future of higher education in
                  Kenya and Africa. For the most up-to-date information about
                  the university, I recommend visiting their official website or
                  contacting them directly.
                </template>
              </v-card>

              <div class="mt-4 text-subtitle-2">With markup</div>

              <v-card width="400">
                <v-card-item>
                  <v-card-title>Location</v-card-title>

                  <v-card-subtitle>Main Campus</v-card-subtitle>
                </v-card-item>

                <v-card-text
                  >Strathmore University is located in Nairobi, the capital city
                  of Kenya. Specifically, it is situated in the suburb of
                  Madaraka, approximately 5 kilometers southwest of Nairobi's
                  central business district. The university's campus is easily
                  accessible from various parts of the city and is
                  well-connected by road networks.</v-card-text
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

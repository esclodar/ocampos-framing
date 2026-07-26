<template>
  <div>
    <section class="hero d-flex align-center">
      <v-container max-width="1100">
        <v-row align="center">
          <v-col cols="12" md="8">
            <div class="text-overline text-primary mb-2">Nacogdoches, Texas</div>

            <h1 class="text-h3 text-md-h2 font-weight-bold mb-4">
              Framing Built to Last, for East Texas Homes
            </h1>

            <p class="text-body-1 mb-6" style="max-width: 640px;">
              Ocampos Framing has put up the bones of custom homes, barndominiums, and
              additions across Nacogdoches and the surrounding area. We show up on time,
              frame it square, and treat every job like it's our own house.
            </p>

            <div class="d-flex flex-wrap ga-3">
              <v-btn
                color="primary"
                prepend-icon="mdi-image-multiple-outline"
                size="large"
                to="/portfolio"
                variant="flat"
              >
                View Our Work
              </v-btn>

              <v-btn prepend-icon="mdi-phone-outline" size="large" to="/contact" variant="outlined">
                Get a Quote
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <v-container class="py-12" max-width="1100">
      <h2 class="text-h4 font-weight-bold text-center mb-8">Why Homeowners Choose Us</h2>

      <v-row>
        <v-col
          v-for="feature in features"
          :key="feature.title"
          cols="12"
          md="3"
          sm="6"
        >
          <v-card class="pa-4 h-100 text-center" rounded="lg" variant="tonal">
            <v-icon class="mb-3" color="primary" :icon="feature.icon" size="40" />
            <div class="text-subtitle-1 font-weight-bold mb-2">{{ feature.title }}</div>
            <div class="text-body-2">{{ feature.description }}</div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <section class="cta-banner py-12">
      <v-container class="text-center" max-width="800">
        <h2 class="text-h4 font-weight-bold mb-3">Ready to Start Framing?</h2>

        <p class="text-body-1 mb-6">
          Tell us about your project and we'll get back to you with a straightforward quote.
        </p>

        <v-btn color="primary" size="large" to="/contact" variant="flat">Contact Us</v-btn>
      </v-container>
    </section>
  </div>
</template>

<script setup lang="ts">
  const features = [
    {
      icon: 'mdi-account-hard-hat-outline',
      title: 'Experienced Crew',
      description: 'Framing crews who know East Texas builds, from slab-on-grade homes to steep metal roofs.',
    },
    {
      icon: 'mdi-home-city-outline',
      title: 'Custom Homes',
      description: 'From modest floor plans to large custom builds, framed to spec and to code.',
    },
    {
      icon: 'mdi-barn',
      title: 'Barndominiums',
      description: 'Post-frame and stick-framed barndominiums, workshops, and shop houses.',
    },
    {
      icon: 'mdi-hammer-wrench-outline',
      title: 'Remodels & Additions',
      description: 'Room additions, reworked load-bearing walls, and storm-damage rebuilds.',
    },
  ]
</script>

<style scoped>
.hero {
  min-height: 60vh;
  background: linear-gradient(180deg, rgba(107, 66, 38, 0.08), transparent);
}

.cta-banner {
  background-color: rgb(var(--v-theme-tertiary));
  color: white;
}
</style>

<template>
  <v-container class="py-12" max-width="1000">
    <h1 class="text-h3 font-weight-bold mb-6">About Ocampos Framing</h1>

    <v-row>
      <v-col cols="12" md="7">
        <p class="text-body-1 mb-4">
          Ocampos Framing is a framing company based in Nacogdoches, Texas, building the
          structural bones of custom homes, barndominiums, additions, and outbuildings
          across East Texas.
        </p>

        <p class="text-body-1 mb-4">
          We work directly with homeowners, builders, and contractors to frame projects
          that hold up — square walls, solid trusses, and work that passes inspection the
          first time.
        </p>

        <p class="text-body-1 mb-4">
          Whether it's a ground-up custom home or reframing a wall after storm damage, we
          treat every job with the same attention to detail.
        </p>

        <h2 class="text-h5 font-weight-bold mt-8 mb-3">Our Mission</h2>

        <p class="text-body-1">
          To deliver dependable, quality framing for East Texas homeowners and builders,
          on schedule and built to last.
        </p>
      </v-col>

      <v-col cols="12" md="5">
        <v-card class="pa-4" rounded="lg" variant="tonal">
          <div class="text-subtitle-1 font-weight-bold mb-3">Service Area</div>

          <v-list bg-color="transparent" density="compact">
            <v-list-item
              v-for="town in serviceArea"
              :key="town"
              prepend-icon="mdi-map-marker-outline"
              :title="town"
            />
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  const serviceArea = [
    'Nacogdoches, TX',
    'Lufkin, TX',
    'Center, TX',
    'Timpson, TX',
    'San Augustine, TX',
    'Surrounding East Texas communities',
  ]
</script>

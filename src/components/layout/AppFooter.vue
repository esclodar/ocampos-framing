<template>
  <v-footer class="flex-column" color="tertiary">
    <v-container class="py-8" max-width="1100">
      <v-row>
        <v-col cols="12" md="4">
          <div class="text-h6 font-weight-bold mb-2">Ocampos Framing</div>

          <p class="text-body-2 opacity-80">
            Custom home &amp; structural framing serving Nacogdoches, Texas
            and the surrounding East Texas area.
          </p>
        </v-col>

        <v-col cols="12" md="4">
          <div class="text-subtitle-1 font-weight-bold mb-2">Contact</div>

          <div class="text-body-2 mb-1">
            <v-icon icon="mdi-phone" size="small" start />
            <a class="footer-link" href="tel:+19365550123">(936) 555-0123</a>
          </div>

          <div class="text-body-2 mb-1">
            <v-icon icon="mdi-email" size="small" start />
            <a class="footer-link" href="mailto:info@ocamposframing.com">info@ocamposframing.com</a>
          </div>

          <div class="text-body-2">
            <v-icon icon="mdi-map-marker" size="small" start />
            Nacogdoches, TX
          </div>
        </v-col>

        <v-col cols="12" md="4">
          <div class="text-subtitle-1 font-weight-bold mb-2">Quick Links</div>
          <v-btn class="d-block mb-1" to="/portfolio" variant="text">Portfolio</v-btn>
          <v-btn class="d-block mb-1" to="/about" variant="text">About Us</v-btn>
          <v-btn class="d-block" to="/contact" variant="text">Contact</v-btn>
        </v-col>
      </v-row>
    </v-container>

    <v-divider class="w-100" />

    <div class="text-body-2 py-4 text-center opacity-70">
      &copy; {{ year }} Ocampos Framing. All rights reserved.
    </div>
  </v-footer>
</template>

<script setup lang="ts">
  const year = new Date().getFullYear()
</script>

<style scoped>
.footer-link {
  color: inherit;
  text-decoration: none;
}

.footer-link:hover {
  text-decoration: underline;
}
</style>

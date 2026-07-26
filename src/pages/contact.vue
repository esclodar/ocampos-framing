<template>
  <v-container class="py-12" max-width="1000">
    <h1 class="text-h3 font-weight-bold mb-6">Contact Us</h1>

    <v-row>
      <v-col cols="12" md="5">
        <v-card class="pa-4 mb-4" rounded="lg" variant="tonal">
          <div class="text-subtitle-1 font-weight-bold mb-3">Get in Touch</div>

          <div class="text-body-2 mb-3">
            <v-icon icon="mdi-phone" size="small" start />
            <a class="contact-link" href="tel:+19365550123">(936) 555-0123</a>
          </div>

          <div class="text-body-2 mb-3">
            <v-icon icon="mdi-email" size="small" start />
            <a class="contact-link" href="mailto:info@ocamposframing.com">info@ocamposframing.com</a>
          </div>

          <div class="text-body-2">
            <v-icon icon="mdi-map-marker" size="small" start />
            Nacogdoches, TX
          </div>
        </v-card>

        <p class="text-body-2 text-medium-emphasis">
          Prefer to talk it through? Give us a call and we're happy to discuss your project
          over the phone.
        </p>
      </v-col>

      <v-col cols="12" md="7">
        <v-alert v-if="!endpointConfigured" class="mb-4" type="info" variant="tonal">
          The contact form isn't connected to an email service yet. Add a Formspree endpoint
          to <code>VITE_FORMSPREE_ENDPOINT</code> in <code>.env</code> to enable submissions.
        </v-alert>

        <v-alert v-if="submitStatus === 'success'" class="mb-4" type="success" variant="tonal">
          Thanks! Your message has been sent. We'll get back to you soon.
        </v-alert>

        <v-alert v-if="submitStatus === 'error'" class="mb-4" type="error" variant="tonal">
          Something went wrong sending your message. Please try again or call us directly.
        </v-alert>

        <v-form ref="formRef" @submit.prevent="submit">
          <v-text-field
            v-model="form.name"
            class="mb-2"
            label="Name"
            required
            :rules="[rules.required]"
            variant="outlined"
          />

          <v-text-field
            v-model="form.email"
            class="mb-2"
            label="Email"
            required
            :rules="[rules.required, rules.email]"
            variant="outlined"
          />

          <v-text-field
            v-model="form.phone"
            class="mb-2"
            label="Phone (optional)"
            variant="outlined"
          />

          <v-textarea
            v-model="form.message"
            class="mb-2"
            label="Tell us about your project"
            required
            rows="5"
            :rules="[rules.required]"
            variant="outlined"
          />

          <v-btn
            color="primary"
            :disabled="!endpointConfigured"
            :loading="submitting"
            size="large"
            type="submit"
            variant="flat"
          >
            Send Message
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  import { reactive, ref } from 'vue'

  const formRef = ref()
  const submitting = ref(false)
  const submitStatus = ref<'idle' | 'success' | 'error'>('idle')

  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT
  const endpointConfigured = Boolean(endpoint)

  const form = reactive({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const rules = {
    required: (value: string) => Boolean(value?.trim()) || 'This field is required.',
    email: (value: string) => /^[^\s@]+@[^\s@][^\s.@]*\.[^\s@]+$/.test(value) || 'Enter a valid email address.',
  }

  async function submit () {
    const { valid } = await formRef.value.validate()
    if (!valid || !endpoint) return

    submitting.value = true
    submitStatus.value = 'idle'

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!response.ok) throw new Error('Request failed')

      submitStatus.value = 'success'
      form.name = ''
      form.email = ''
      form.phone = ''
      form.message = ''
      formRef.value.resetValidation()
    } catch {
      submitStatus.value = 'error'
    } finally {
      submitting.value = false
    }
  }
</script>

<style scoped>
.contact-link {
  color: inherit;
  text-decoration: none;
}

.contact-link:hover {
  text-decoration: underline;
}
</style>

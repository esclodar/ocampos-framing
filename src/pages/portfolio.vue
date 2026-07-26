<template>
  <v-container class="py-12" max-width="1100">
    <div class="text-center mb-8">
      <h1 class="text-h3 font-weight-bold mb-3">Our Portfolio</h1>

      <p class="text-body-1 mx-auto" style="max-width: 640px;">
        A sample of the homes and structures we've framed around Nacogdoches and East Texas.
        Photos for these projects are being gathered — check back soon, or ask us for examples
        when you reach out.
      </p>
    </div>

    <v-row>
      <v-col
        v-for="project in projects"
        :key="project.id"
        cols="12"
        md="4"
        sm="6"
      >
        <ProjectCard :project="project" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  import ProjectCard from '@/components/portfolio/ProjectCard.vue'
  import { projects } from '@/data/projects'
</script>

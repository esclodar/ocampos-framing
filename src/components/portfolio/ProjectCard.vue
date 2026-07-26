<template>
  <v-card class="h-100 d-flex flex-column" rounded="lg" variant="elevated">
    <div v-if="project.image" class="project-photo">
      <v-img :alt="project.title" cover height="220" :src="project.image" />
    </div>

    <div v-else class="project-placeholder d-flex align-center justify-center" :style="placeholderStyle">
      <v-icon color="white" :icon="categoryIcon" size="56" />

      <v-chip
        class="placeholder-badge"
        color="white"
        label
        size="small"
        variant="flat"
      >
        Photos coming soon
      </v-chip>
    </div>

    <v-card-item>
      <v-card-title>{{ project.title }}</v-card-title>
      <v-card-subtitle>{{ project.location }}</v-card-subtitle>
    </v-card-item>

    <v-card-text class="flex-grow-1">
      <v-chip class="mb-3" color="primary" size="small" variant="tonal">
        {{ project.category }}
      </v-chip>

      <p class="text-body-2">{{ project.blurb }}</p>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
  import type { Project } from '@/data/projects'
  import { computed } from 'vue'

  const props = defineProps<{ project: Project }>()

  const categoryIcons: Record<string, string> = {
    'Custom Home Framing': 'mdi-home-city-outline',
    'Barndominium': 'mdi-barn',
    'Remodel & Addition': 'mdi-hammer-wrench-outline',
    'Shop & Outbuilding': 'mdi-warehouse',
  }

  const categoryIcon = computed(() => categoryIcons[props.project.category] ?? 'mdi-image-outline')

  const gradients = [
    'linear-gradient(135deg, #6B4226, #8C6239)',
    'linear-gradient(135deg, #8C6239, #C9962C)',
    'linear-gradient(135deg, #5C3A21, #6B4226)',
  ]

  const placeholderStyle = computed(() => {
    const index = Math.abs(hashCode(props.project.id)) % gradients.length
    return { backgroundImage: gradients[index] }
  })

  function hashCode (value: string) {
    let hash = 0
    for (let i = 0; i < value.length; i++) {
      hash = (hash << 5) - hash + (value.codePointAt(i) ?? 0)
      hash = Math.trunc(hash)
    }
    return hash
  }
</script>

<style scoped>
.project-placeholder {
  position: relative;
  height: 220px;
}

.placeholder-badge {
  position: absolute;
  bottom: 12px;
  right: 12px;
}
</style>

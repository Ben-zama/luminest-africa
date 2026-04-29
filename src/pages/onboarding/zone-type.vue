<template>
  <q-page class="column q-px-md q-pt-xl q-pb-xl">

    <!-- Header Section -->
    <div class="q-mb-lg">
      <h1 class="text-h5 text-weight-bold q-mt-none q-mb-xs">
        What is {{ areaName }} to you?
      </h1>
      <p class="text-body1 text-opaque q-ma-none">
        Helps us show you the right updates
      </p>
    </div>

    <!-- Zone Type Selection List -->
    <div class="column q-gutter-y-sm q-mb-xl">
      <q-card
        v-for="(option, index) in zoneOptions"
        :key="index"
        flat
        bordered
        v-ripple
        class="cursor-pointer transition-colors"
        :class="selectedType === option.value ? 'selected-card' : 'unselected-card'"
        @click="selectedType = option.value"
      >
        <q-item class="q-py-md">
          <q-item-section avatar>
            <q-radio
              v-model="selectedType"
              :val="option.value"
              color="positive"
              class="q-ma-none"
            />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-weight-bold text-body1">
              {{ option.label }}
            </q-item-label>
            <q-item-label caption class="text-opaque text-body2">
              {{ option.description }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-card>
    </div>

    <q-space />

    <!-- Private Transformer Toggle -->
    <div class="q-mb-xl q-px-sm">
      <q-item tag="label" class="q-pa-none rounded-borders q-pa-md">
        <q-item-section>
          <q-item-label class="text-weight-bold text-body1">
            Private transformer?
          </q-item-label>
          <q-item-label caption class="text-opaque">
            My building has its own supply
          </q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-toggle v-model="hasPrivateTransformer" color="primary" size="lg" />
        </q-item-section>
      </q-item>
    </div>

    <!-- Action Button -->
    <div class="column q-mt-auto">
      <q-btn
        unelevated
        no-caps
        color="positive"
        label="Done"
        class="full-width text-weight-bold text-body1 q-py-sm"
        style="border-radius: 12px;"
        :disable="!selectedType"
        @click="finishOnboarding"
      />
    </div>

  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// In a real app, this would be passed via route params or state management
// based on the selection from the previous "Pick Your Area" screen.
const areaName = ref('Odenigwe')

const selectedType = ref('home') // Default selection matches the wireframe
const hasPrivateTransformer = ref(false)

const zoneOptions = [
  { label: 'Home', value: 'home', description: 'Where I live' },
  { label: 'School', value: 'school', description: 'Where I study' },
  { label: 'Work', value: 'work', description: 'Where I work' },
  { label: 'Other', value: 'other', description: 'Another location' }
]

const finishOnboarding = () => {
  // Save the user's preferences to your backend/state management here.
  // Note: If 'School' is selected and it matches a known campus grid,
  // ensure your backend handles the auto-isolation logic mentioned in the spec.

  // Navigate to the main app feed
  router.push('/feed')
}
</script>

<style lang="scss" scoped>
.transition-colors {
  transition: all 0.3s ease;
  border-radius: 12px;
}

.unselected-card {
  border-color: #e0e0e0;
  background-color: transparent;
}

.selected-card {
  border-color: $positive;
  background-color: rgba($positive, 0.05); /* Slight green tint */
}

/* Custom styling to make the radio button fit perfectly inside the card layout */
:deep(.q-radio__inner) {
  font-size: 40px;
}
</style>

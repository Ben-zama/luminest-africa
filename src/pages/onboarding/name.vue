<template>
  <q-page class="column q-px-md q-pt-xl q-pb-xl">

    <!-- Header Section -->
    <div class="q-mb-md">
      <h1 class="text-h5 text-weight-bold q-mt-none q-mb-xs">
        What's your name?
      </h1>
      <p class="text-body1 text-opaque q-ma-none">
        So we know what to call you
      </p>
    </div>

    <!-- Name Input Form -->
    <div class="column q-mb-md">
      <q-input
        v-model="userName"
        outlined
        dense
        placeholder="Kanayo o. Kanayo"
        class="text-body1 q-mb-sm"
        color="positive"
        bg-color="grey-1"
        hide-bottom-space
      />

      <!-- Privacy Note -->
      <div class="text-caption text-opaque" style="line-height: 1.4;">
        Only visible to you and the admin.<br>
        Not shown publicly.
      </div>
    </div>

    <q-space />

    <!-- Action Button -->
    <div class="column q-mt-auto">
      <q-btn
        unelevated
        no-caps
        color="positive"
        label="Continue"
        class="full-width text-weight-bold text-body1 q-py-sm"
        style="border-radius: 12px;"
        @click="submitName"
      />
    </div>

  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const userName = ref('')

const submitName = () => {
  // Save the name to your state management (Pinia/Vuex) or local storage here.
  // Note: The developer spec says this step "Can be skipped if needed",
  // so we do not strictly validate for empty strings before routing.

  // Proceed to the "Pick Your Area" step of onboarding
  router.push('/onboarding/area')
}
</script>

<style lang="scss" scoped>

:deep(.q-field__control) {
  height: 56px;
  border-radius: 8px;
  input {
    color: black;
  }
}

:deep(.q-field__native) {
  font-size: 1.1rem;
}
</style>

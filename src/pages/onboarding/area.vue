<template>
  <q-page class="column q-px-md q-pt-xl q-pb-xl">

    <!-- Header Section -->
    <div class="q-mb-md">
      <h1 class="text-h5 text-weight-bold q-mt-none">
        Where do you live?
      </h1>
    </div>

    <!-- Cascading Selection Form -->
    <div class="column q-gutter-y-md q-mb-md">

      <!-- State Selection -->
      <q-select
        v-model="selectedState"
        :options="states"
        option-label="name"
        option-value="id"
        outlined
        dense
        color="positive"
        label="Select State"
        :loading="loadingStates"
        @update:model-value="handleStateChange"
        class="text-body1"
      />

      <!-- LGA Selection -->
      <q-select
        v-model="selectedLGA"
        :options="lgas"
        option-label="name"
        option-value="id"
        outlined
        dense
        color="positive"
        label="Select LGA"
        :disable="!selectedState"
        :loading="loadingLGAs"
        class="text-body1"
      />

      <!-- City/Area Selection -->
      <q-select
        v-model="selectedArea"
        :options="cities"
        option-label="name"
        option-value="id"
        outlined
        dense
        color="positive"
        label="Select City/Neighbourhood"
        :disable="!selectedState"
        :loading="loadingCities"
        class="text-body1"
      >
        <!-- Custom slot to handle missing areas based on the MVP spec -->
        <template v-slot:no-option>
          <q-item>
            <q-item-section class="text-grey-7 text-caption">
              Can't find your area?
              <span class="text-weight-bold text-positive cursor-pointer">Request it</span>
            </q-item-section>
          </q-item>
        </template>
      </q-select>

    </div>

    <q-space />

    <!-- Action Button -->
    <div class="column q-mt-auto">
      <q-btn
        unelevated
        no-caps
        color="positive"
        :label="selectedArea ? `Continue with ${selectedArea.name || selectedArea}` : 'Continue'"
        class="full-width text-weight-bold text-body1 q-py-sm"
        style="border-radius: 12px;"
        :disable="!selectedArea"
        @click="submitArea"
      />
    </div>

  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Replace with your actual environment variable
const apiKey = process.env.API_KEY

// State Management
const selectedState = ref(null)
const states = ref([])
const loadingStates = ref(false)

const selectedLGA = ref(null)
const lgas = ref([])
const loadingLGAs = ref(false)

const selectedArea = ref(null)
const cities = ref([])
const loadingCities = ref(false)

// Fetch States using your provided snippet
const fetchStates = async () => {
  loadingStates.value = true
  const headers = new Headers()
  headers.append("X-Api-Key", apiKey)
  headers.append("Accept", "application/json")

  const options = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  }

  try {
    const response = await fetch("https://naija-places.toneflix.com.ng/api/v1/states", options)
    const result = await response.json()
    states.value = result.data || result
  } catch (error) {
    console.error("error fetching states", error)
  } finally {
    loadingStates.value = false
  }
}

// Handler to trigger both LGA and City fetches when a State is selected
const handleStateChange = (state) => {
  fetchLGAs(state)
  fetchCities(state)
}

// Fetch LGAs dynamically when a State is selected
const fetchLGAs = async (state) => {
  selectedLGA.value = null
  if (!state) return

  loadingLGAs.value = true
  const headers = new Headers()
  headers.append("X-Api-Key", apiKey)
  headers.append("Accept", "application/json")

  const options = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  }

  try {
    const stateIdentifier = state.slug || state.name || state.id
    const response = await fetch(`https://naija-places.toneflix.com.ng/api/v1/states/${stateIdentifier}/lgas`, options)
    const result = await response.json()
    lgas.value = result.data || result
  } catch (error) {
    console.error("error fetching LGAs", error)
  } finally {
    loadingLGAs.value = false
  }
}

// Fetch Cities dynamically when a State is selected
const fetchCities = async (state) => {
  selectedArea.value = null
  if (!state) return

  loadingCities.value = true
  const headers = new Headers()
  headers.append("X-Api-Key", apiKey)
  headers.append("Accept", "application/json")

  const options = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  }

  try {
    const stateIdentifier = state.slug || state.name || state.id
    const response = await fetch(`https://naija-places.toneflix.com.ng/api/v1/states/${stateIdentifier}/cities`, options)
    const result = await response.json()
    cities.value = result.data || result
  } catch (error) {
    console.error("error fetching cities", error)
  } finally {
    loadingCities.value = false
  }
}

// Load states immediately when the component mounts
onMounted(() => {
  fetchStates()
})

const submitArea = () => {
  // Proceed to the Zone Type step of onboarding
  router.push('/onboarding/zone-type')
}
</script>

<style lang="scss" scoped>
/* Ensure the Quasar input borders match the clean wireframe look */
:deep(.q-field__control) {
  border-radius: 8px;
  padding: 8px 16px;
}

:deep(.q-field__native) {
  font-size: 1.1rem;
}
</style>

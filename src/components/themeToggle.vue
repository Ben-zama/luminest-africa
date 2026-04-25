<template>
  <q-btn
    flat
    round
    dense
    :icon="$q.dark.isActive ? 'light_mode' : 'dark_mode'"
    @click="toggleTheme"
    aria-label="Toggle Theme"
  />
</template>

<script setup>
import { useQuasar } from 'quasar'

const $q = useQuasar()

const toggleTheme = () => {
  $q.dark.toggle()
}
</script>

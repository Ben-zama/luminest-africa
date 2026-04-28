<template>
  <q-page class="q-pb-xl">

    <q-card flat class="bg-transparent">
      <q-toolbar class="q-py-md border-bottom">
        <div class="text-h5 text-weight-bold">Notifications</div>
        <q-space />
        <q-btn
          flat
          dense
          no-caps
          rounded
          to="/profile"
          color="primary"
          label="< Back"
          class="text-weight-medium q-px-sm self-end"
        />
      </q-toolbar>
    </q-card>

    <q-list class="q-mt-sm">

      <q-item-label header class="text-body1 text-weight-medium q-pb-sm">
        For Odenigwe (home)
      </q-item-label>

      <q-item tag="label" v-ripple class="q-py-md">
        <q-item-section>
          <q-item-label class="text-weight-bold text-body1">Light expected soon</q-item-label>
          <q-item-label caption class="text-opaque">Alert ~30 mins before light is due</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-toggle v-model="settings.odenigwe.expected" color="positive" size="lg" />
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple class="q-py-md">
        <q-item-section>
          <q-item-label class="text-weight-bold text-body1">Light came on</q-item-label>
          <q-item-label caption class="text-opaque">Alert when community reports light up</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-toggle v-model="settings.odenigwe.cameOn" color="positive" size="lg" />
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple class="q-py-md">
        <q-item-section>
          <q-item-label class="text-weight-bold text-body1">Light went off</q-item-label>
          <q-item-label caption class="text-opaque">Alert when community reports light off</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-toggle v-model="settings.odenigwe.wentOff" color="positive" size="lg" />
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple class="q-py-md">
        <q-item-section>
          <q-item-label class="text-weight-bold text-body1">Low data warning</q-item-label>
          <q-item-label caption class="text-opaque">Alert if area has too few reports</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-toggle v-model="settings.odenigwe.lowData" color="positive" size="lg" />
        </q-item-section>
      </q-item>

      <q-item-label header class="text-body1 text-weight-medium q-pt-xl q-pb-sm">
        For UNN Main Campus (school)
      </q-item-label>

      <q-item tag="label" v-ripple class="q-py-md">
        <q-item-section>
          <q-item-label class="text-weight-bold text-body1">All campus alerts</q-item-label>
          <q-item-label caption class="text-opaque">On/off for all campus notifications</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-toggle v-model="settings.campus.allAlerts" color="positive" size="lg" />
        </q-item-section>
      </q-item>

    </q-list>

    <div class="column items-center text-center q-px-xl q-mt-xl">
      <div class="text-caption text-opaque" style="max-width: 280px; line-height: 1.4;">
        Notifications work when browser is open or app is bookmarked on home screen.
      </div>
    </div>

  </q-page>
</template>

<script setup>
import { reactive } from 'vue'

// State managing all the toggles matching the mockups exactly
const settings = reactive({
  odenigwe: {
    expected: true,
    cameOn: true,
    wentOff: false, // Explicitly false to match the grayed out toggle in the mock
    lowData: true
  },
  campus: {
    allAlerts: true
  }
})
</script>

<style lang="scss" scoped>
.border-bottom {
  border-bottom: 1px solid var(--q-line-color) !important;
}
</style>

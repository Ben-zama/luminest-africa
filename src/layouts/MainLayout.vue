<template>
  <q-layout view="hhh lpr fFf">
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer bordered class="bg-transparent text-grey-8 dark-bg">
      <q-tabs
        no-caps
        active-color="positive"
        indicator-color="transparent"
        align="justify"
        class="q-py-xs"
      >
        <q-route-tab
          to="/"
          icon="dynamic_feed"
          label="Feed"
          exact
        />
        <q-route-tab
          to="/schedule"
          icon="schedule"
          label="Schedule"
          exact
        />
        <q-route-tab
          to="/report"
          icon="bolt"
          label="Report"
          exact
        />
        <q-route-tab
          to="/profile"
          icon="person"
          label="Profile"
          exact
        />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
// QRouteTab relies entirely on Vue Router, so no additional script logic is needed here.
</script>

<style lang="scss">

</style>

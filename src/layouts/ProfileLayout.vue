<template>
  <q-layout view="hhh lpR fFf">

    <q-header>

    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer bordered class="bg-transparent">
      <q-tabs
        no-caps
        active-color="primary"
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

<style lang="scss" scoped>
.q-tabs {
  color: var(--q-text-color);
  a {
    opacity: 0.5;
  }
  .q-router-link--exact-active {
    opacity: 1;
  }
}
</style>

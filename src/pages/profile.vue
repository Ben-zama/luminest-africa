<template>
  <q-page class="col q-pb-xl">

    <section class="profile-card row items-center q-gutter-md q-px-md q-py-md">
      <q-item to="/profile-settings" class="q-mx-none q-pa-none">
        <q-avatar size="54px" class="q-ml-sm bg-info text-white text-weight-bold">
        <div class="text-h5">K</div>
      </q-avatar>
      </q-item>
      <div class="col">
        <div class="text-h6 text-weight-bold">Kanayo O. Kanayo</div>
        <p class="text-body2 text-opaque q-ma-none">+234 0812 345 6788</p>
      </div>
      <ThemeToggle />
    </section>

    <section class="stats row justify-evenly q-py-md q-mb-md">
      <div class="col items-center text-center">
        <div class="text-h4 text-weight-bold text-positive">47</div>
        <div class="text-caption text-opaque">Reports</div>
      </div>
      <div class="col items-center text-center">
        <div class="text-h4 text-weight-bold">2</div>
        <div class="text-caption text-opaque">Zones</div>
      </div>
      <div class="col items-center text-center">
        <div class="text-h4 text-weight-bold">14</div>
        <div class="text-caption text-opaque">Days</div>
      </div>
    </section>

    <section class="q-px-md q-mb-md">
      <div class="text-subtitle1 text-opaque q-pb-md">My zones</div>

      <q-list class="q-gutter-y-md">
        <q-card flat bordered class="zone-card primary-zone">
          <q-item>
            <q-item-section>
              <q-item-label class="text-weight-bold text-body1">Odenigwe</q-item-label>
              <q-item-label caption class="text-opaque">Home - Primary zone</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-badge rounded class="badge-tinted q-px-sm text-weight-medium">active</q-badge>
            </q-item-section>
          </q-item>
        </q-card>

        <q-card flat bordered class="zone-card">
          <q-item>
            <q-item-section>
              <q-item-label class="text-weight-bold text-body1">UNN Main Campus</q-item-label>
              <q-item-label caption class="text-opaque">School - Campus grid</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-badge rounded class="badge-tinted q-px-sm text-weight-medium">active</q-badge>
            </q-item-section>
          </q-item>
        </q-card>
      </q-list>

      <div class="row justify-center q-mt-md q-mb-lg">
        <q-btn flat no-caps rounded color="primary" class="text-weight-medium text-body1">
          + Add another zone
        </q-btn>
      </div>
    </section>

    <q-list separator class="q-px-sm q-mt-md">
      <q-item clickable v-ripple to="/notification-settings">
        <q-item-section class="text-body1">Notification settings</q-item-section>
      </q-item>
      <q-item clickable v-ripple to="/privacy-policy">
        <q-item-section class="text-body1">Privacy policy</q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section class="text-body1 text-negative">Delete account</q-item-section>
      </q-item>
    </q-list>

  </q-page>
</template>

<script setup>
import ThemeToggle from "src/components/themeToggle.vue";
</script>

<style lang="scss" scoped>
.profile-card {
  border-bottom: 1px solid var(--q-line-color);
}

.stats {
  border-bottom: 1px solid var(--q-line-color);
}

.zone-card {
  padding: 8px 0;
  border-radius: 8px;
  border-color: var(--q-line-color);
}

.primary-zone {
  background-color: rgba($positive, 0.1);
  border-color: rgba($positive, 0.5);
}

.badge-tinted {
  background-color: rgba($positive, 0.1) !important;
  color: $positive !important;
}
</style>

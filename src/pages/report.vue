<template>
  <q-page class="col q-pb-xl">

    <q-card flat class="q-mt-md">
      <q-toolbar>
        <div class="text-body1">Reporting for:</div>
        <q-space />
        <q-btn
        flat
        dense
        no-caps
        rounded
        color="primary"
        label="Odenigwe (home)"
        class="text-weight-medium q-px-sm"
      />
      </q-toolbar>
    </q-card>

    <div class="column q-gutter-y-lg q-px-md q-mt-md q-mb-xl">
      <q-card
        v-ripple flat
        class="report-btn btn-on shadow-1 cursor-pointer q-py-lg column items-center justify-center"
      >
        <div
          class="icon-circle bg-positive text-white q-mb-sm row items-center justify-center"
        >
          <q-icon name="keyboard_arrow_up" size="md" />
        </div>
        <div class="text-h6 text-weight-bold">Light just came on</div>
        <div class="text-subtitle2 text-positive">Tap to report</div>
      </q-card>

      <q-card
        v-ripple flat
        class="report-btn btn-off shadow-1 cursor-pointer q-py-lg column items-center justify-center"
      >
        <div
          class="icon-circle bg-negative text-white q-mb-sm row items-center justify-center"
        >
          <q-icon name="close" size="md" />
        </div>
        <div class="text-h6 text-weight-bold">
          Light just went off
        </div>
        <div class="text-subtitle2 text-negative">Tap to report</div>
      </q-card>
    </div>

    <div class="column items-center text-center q-px-lg">
      <div class="text-body2 text-opaque q-mb-sm">
        Just got home? Tell us what you met.<br />
        Even a check-in helps.
      </div>
      <div class="text-caption">
        Reports are anonymous. Offline reports saved automatically.
      </div>
    </div>
  </q-page>
</template>

<script setup>
// Logic for handling the report submission and offline queueing
// will go here as per MVP spec: "If network is unavailable, report is saved locally"
</script>

<style lang="scss" scoped>
/* Base button styles */
.report-btn {
  border-radius: 16px;
  transition: transform 0.1s ease, box-shadow 0.2s ease;

  &:active {
    transform: scale(0.98);
  }
}

/* Specific styling for the 'ON' button */
.btn-on {
  background-color: rgba($positive, 0.1);
  border: 2px solid $positive;
}

/* Specific styling for the 'OFF' button */
.btn-off {
  background-color: rgba($negative, 0.1);
  border: 2px solid $negative;
}

/* Circular icon container */
.icon-circle {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
}
</style>

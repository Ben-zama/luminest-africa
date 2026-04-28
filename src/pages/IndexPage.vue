<template>
  <q-page class="col q-pb-xl">

    <q-card flat :class="['q-mt-md q-mx-sm q-mb-lg shadow-2 top-status-card', isLightOn ? 'bg-positive-tint' : 'bg-negative-tint']">
      <q-card-section class="column q-py-md">
        <div class="text-h4 text-weight-bold q-mb-sm">{{ isLightOn ? 'Light is up' : 'Light is off' }}</div>
        <div class="text-caption text-weight-medium text-opaque">
          Last reported 4 mins ago &nbsp; &bull; &nbsp; 3 reports this hr
        </div>
      </q-card-section>
    </q-card>

    <section class="q-px-md">
      <div class="text-subtitle1 text-weight-bold text-opaque q-mb-sm">Recent reports</div>

      <q-list class="q-gutter-y-sm">
        <q-item
          v-for="(report, index) in recentReports"
          :key="index"
          class="q-px-none q-py-sm"
        >
          <q-item-section avatar style="min-width: auto" class="q-pr-md">
            <div :class="['status-circle', report.isOn ? 'bg-positive' : 'bg-negative']"></div>
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-body1 text-weight-medium">
              {{ report.title }}
            </q-item-label>
            <q-item-label caption class="text-weight-medium text-opaque">
              {{ report.time }}
            </q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-badge
              outline
              rounded
              :color="getPillColor(report)"
              :label="report.type"
              :class="['q-px-md q-py-xs text-caption', getPillBgClass(report)]"
            />
          </q-item-section>
        </q-item>
      </q-list>
    </section>

  </q-page>
</template>

<script setup>
import { ref } from 'vue'

// Top card state (Mocked as true for this example)
const isLightOn = ref(true)

// Mock data reflecting the exact feed items from the MVP screen spec
const recentReports = [
  { title: 'Light came on', time: '4 mins ago', type: 'realtime', isOn: true },
  { title: 'Light came on', time: '6 mins ago', type: 'realtime', isOn: true },
  { title: 'Light came on', time: '18 mins ago', type: 'checkin', isOn: true },
  { title: 'Light went off', time: '1 hr ago', type: 'realtime', isOn: false },
  { title: 'Light went off', time: '2 hrs ago', type: 'realtime', isOn: false }
]

// Helper to determine text/outline color for the pill
const getPillColor = (report) => {
  if (report.type === 'checkin') return 'grey-6' // Neutral
  return report.isOn ? 'positive' : 'negative'
}

// Helper to determine the subtle background fill for the pill
const getPillBgClass = (report) => {
  if (report.type === 'checkin') return 'pill-bg-neutral'
  return report.isOn ? 'pill-bg-positive' : 'pill-bg-negative'
}
</script>

<style lang="scss" scoped>
/* Top Status Card Styles */
.top-status-card {
  border-radius: 12px;
  transition: background-color 0.3s ease;
}

.bg-positive-tint {
  background: rgba($positive, 0.15) !important;
}

.bg-negative-tint {
  background: rgba($negative, 0.15) !important;
}

/* List Item Styles */
.status-circle {
  width: 14px;
  height: 14px;
  border-radius: 50%;
}

/* Pill Background Styles */
.pill-bg-positive {
  background: rgba($positive, 0.15);
}

.pill-bg-negative {
  background: rgba($negative, 0.15);
}

.pill-bg-neutral {
  background: rgba(#9e9e9e, 0.15);
}
</style>

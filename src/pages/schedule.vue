<template>
  <q-page class="q-px-md q-pt-md q-pb-xl col q-gutter-y-lg">

    <q-card flat class="average-card q-pa-md">
      <div class="row justify-between items-center">
        <div class="column">
          <div class="text-caption text-weight-bold text-positive text-uppercase">
            7-day average
          </div>
          <div class="text-h4 text-weight-bold q-mt-xs">
            8.5 hrs / day
          </div>
          <div class="text-caption text-weight-medium text-positive text-opaque">
            134 reports
          </div>
        </div>
      </div>
    </q-card>

    <section>
      <div class="text-subtitle1 text-weight-bold text-opaque q-mb-md">
        This week's pattern
      </div>

      <div class="column q-gutter-y-sm">
        <div
          v-for="day in scheduleData"
          :key="day.day"
          class="row items-center"
        >
          <div class="text-body2 text-weight-medium q-mr-sm" style="width: 36px;">
            {{ day.day }}
          </div>

          <div class="col bar-track overflow-hidden relative-position">
            <div
              class="bar-fill absolute-left bg-positive"
              :style="{ width: `${(day.hours / 12) * 100}%` }"
            ></div>
          </div>

          <div class="text-body2 text-opaque text-right q-ml-sm" style="width: 28px;">
            {{ day.hours }}h
          </div>
        </div>
      </div>
    </section>

    <q-card flat class="q-pa-md q-mt-xl" style="border-radius: 12px;">
      <div class="text-subtitle2 text-weight-bold q-mb-xs">
        Today — expected windows
      </div>
      <div class="text-body2 text-opaque q-mb-sm">
        6:00am – 1:30pm &nbsp; &bull; &nbsp; 6:00pm – 11:00pm
      </div>
      <div class="text-caption text-weight-bold text-positive">
        Next light expected in ~2 hrs
      </div>
    </q-card>

  </q-page>
</template>

<script setup>
// Mock data reflecting the exact bar chart hours from the MVP screen spec
const scheduleData = [
  { day: 'Mon', hours: 6 },
  { day: 'Tue', hours: 4 },
  { day: 'Wed', hours: 7 },
  { day: 'Thu', hours: 5 },
  { day: 'Fri', hours: 8 },
  { day: 'Sat', hours: 10 },
  { day: 'Sun', hours: 6 }
]
</script>

<style lang="scss" scoped>
/* 7-Day Average Card */
.average-card {
  background-color: rgba($positive, 0.15);
  border-radius: 12px;
}

/* Custom Bar Chart Styles */
.bar-track {
  height: 24px;
  border-radius: 12px;
  background: rgba($positive, 0.1);
}

.bar-fill {
  height: 100%;
  border-radius: 12px;
  transition: width 0.4s ease-in-out;
}
</style>

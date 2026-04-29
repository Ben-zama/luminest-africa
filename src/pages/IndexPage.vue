<template>
  <q-page class="column q-px-lg q-pb-xl" style="height: 100vh;">

    <q-space />

    <div class="column items-center q-mb-xl">
      <div class="logo-box flex flex-center">
            <img src="/logo.svg" alt="">
      </div>

      <h1 class="text-h5 text-weight-bold text-center q-mt-none q-mb-sm">
        Know when light is coming
      </h1>

      <p class="text-body2 text-center text-opaque q-px-sm">
        Community-powered schedules for your area
      </p>
    </div>

    <q-space />

    <div class="column items-center w-full q-mt-auto">
      <q-btn
        unelevated
        no-caps
        color="positive"
        label="Get started"
        class="full-width text-weight-bold text-body1 q-py-sm"
        style="border-radius: 12px;"
        @click="goToNextStep"
      />

      <div class="text-caption text-opaque q-mt-md">
        Free. Works on any Android phone.
      </div>
    </div>

  </q-page>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToNextStep = () => {
  // Navigate to the Phone Number Entry screen (Page 2 of Onboarding)
  router.push('/onboarding/phone')
}
</script>

<style lang="scss" scoped>
.w-full {
  width: 100%;
}

/* Custom logo styling based on the mockup */
.logo-box {
  width: 192px;
  height: 192px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

.logo-circle {
  width: 44px;
  height: 44px;
}
</style>

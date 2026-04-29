<template>
  <q-page class="column q-px-md q-pt-xl q-pb-xl">

    <div class="q-mb-xl">
      <h1 class="text-h5 text-weight-bold q-mt-none q-mb-xs">
        Enter the code
      </h1>
      <p class="text-body1 text-opaque q-ma-none">
        Sent to +234 0812 345 6789
      </p>
    </div>

    <div class="row justify-between q-mb-xl q-px-sm">
      <q-input
        v-for="(digit, index) in otp"
        :key="index"
        ref="otpInputs"
        v-model="otp[index]"
        outlined
        dense
        maxlength="1"
        type="tel"
        :color="otp[index] ? 'positive' : 'grey-4'"
        :bg-color="otp[index] ? 'positive-tint' : 'white'"
        class="otp-box text-center text-h6"
        @update:model-value="moveToNext(index)"
        @keyup.delete="moveToPrevious(index)"
      />
    </div>

    <div class="column q-mt-auto">
      <q-btn
        unelevated
        no-caps
        color="positive"
        label="Verify"
        class="full-width text-weight-bold text-body1 q-py-sm q-mb-lg"
        style="border-radius: 12px;"
        :disable="!isOtpComplete"
        @click="verifyCode"
      />

      <div class="column items-center text-center">
        <div class="text-body2 text-grey-8 q-mb-xs">
          Didn't get it? <span class="text-weight-bold cursor-pointer">Resend in 0:47</span>
        </div>
        <div class="text-caption text-grey-6">
          Code expires in 5 minutes
        </div>
      </div>
    </div>

  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Standard OTP pattern: 6 separate digits
const otp = ref(['', '', '', '', '', ''])
const otpInputs = ref([])

// Verify button is only active when all 6 digits are entered
const isOtpComplete = computed(() => {
  return otp.value.every(digit => digit !== '')
})

// Auto-advance focus to the next input box
const moveToNext = (index) => {
  if (otp.value[index] && index < 5) {
    otpInputs.value[index + 1].focus()
  }
}

// Auto-revert focus to the previous input box on delete
const moveToPrevious = (index) => {
  if (!otp.value[index] && index > 0) {
    otpInputs.value[index - 1].focus()
  }
}

const verifyCode = () => {
  // Proceed to the "Your Name" step of onboarding
  router.push('/onboarding/name')
}
</script>

<style lang="scss" scoped>
/* Force input text to center and style the specific dimensions */
.otp-box {
  width: 48px;

  :deep(.q-field__control) {
    height: 56px;
    border-radius: 8px;
  }

  :deep(.q-field__native) {
    text-align: center;
    font-weight: bold;
    font-size: 1.25rem; /* text-h6 equivalent */
  }
}

/* Custom subtle background tint for active boxes to match the green "turn green" spec */
:deep(.bg-positive-tint) {
  background-color: rgba($positive, 0.05) !important;
}
</style>

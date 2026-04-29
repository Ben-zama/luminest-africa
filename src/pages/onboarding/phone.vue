<template>
  <q-page class="column q-px-md q-pt-xl q-pb-xl">
    <div class="q-mb-xl">
      <h1 class="text-h5 text-weight-bold q-mt-none q-mb-xs">
        Enter your number
      </h1>
      <p class="text-body1 text-opaque q-ma-none">
        We'll send you a one-time code
      </p>
    </div>

    <div class="column q-mb-md">
      <div class="row q-gutter-x-sm q-mb-sm">
        <div
          class="country-code-box bg-grey-1 text-black flex flex-center text-weight-medium"
        >
          +234
        </div>

        <q-input
          v-model="phoneNumber"
          outlined
          dense
          type="tel"
          placeholder="812 3456 789"
          class="phone-number-box col text-body1"
          bg-color="grey-1"
          :rules="[(val) => !!val || 'Phone number is required']"
          hide-bottom-space
        />
      </div>

      <div class="text-caption text-grey-6" style="line-height: 1.4">
        We use your number to verify your account.<br />
        We never share it.
      </div>
    </div>

    <q-space />

    <div class="column q-mt-auto">
      <q-btn
        unelevated
        no-caps
        color="positive"
        label="Send code"
        class="full-width text-weight-bold text-body1 q-py-sm"
        style="border-radius: 12px"
        :disable="!phoneNumber"
        @click="submitNumber"
      />
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const phoneNumber = ref("");

const submitNumber = () => {
  // In a real app, you would trigger the Termii SMS API call here
  // then push to the OTP verification screen.
  router.push("/onboarding/otp");
};
</script>

<style lang="scss" scoped>
/* Styling to match the side-by-side input boxes in the wireframe */
.country-code-box {
  width: 72px;
  height: 40px; /* matches Quasar dense outlined input height */
  border: 1px solid rgba(0, 0, 0, 0.24);
  border-radius: 8px;
}

.phone-number-box {
  color: black !important;
}

/* Ensure the Quasar input borders match the clean wireframe look */
:deep(.q-field__control) {
  border-radius: 8px;
  input {
    color: black !important;
  }
}
</style>

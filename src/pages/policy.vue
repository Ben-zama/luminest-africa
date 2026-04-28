<template>
  <q-page class="q-pb-xl">

    <q-card flat class="bg-info sticky-header z-top">
      <q-toolbar class="q-py-md border-bottom">
        <q-btn
          flat
          dense
          no-caps
          to="/profile"
          color="black"
          label="< Back"
          class="text-weight-medium"
        />
        <q-space />
        <div class="text-h6 text-black text-weight-bold">Privacy Policy</div>
        <q-space />
        <div style="width: 50px;"></div>
      </q-toolbar>
    </q-card>

    <div class="q-px-md q-pt-md q-pb-xl text-body1" style="line-height: 1.6;">

      <p class="text-caption q-mb-lg">Last updated: April 2026</p>

      <section class="q-mb-lg">
        <div class="text-h6 text-weight-bold q-mb-sm">1. Introduction</div>
        <p class="text-opaque">
          Welcome to the Power Schedule App. We respect your privacy and are committed to protecting your personal data. This policy explains how we collect, use, and safeguard your information when you use our web application.
        </p>
      </section>

      <section class="q-mb-lg">
        <div class="text-h6 text-weight-bold q-mb-sm">2. Information We Collect</div>
        <p class="q-mb-sm text-opaque">We only collect the minimum amount of information required to make the app function:</p>
        <ul class="q-pl-md q-mb-none text-opaque">
          <li class="q-mb-xs"><strong>Phone Number:</strong> We use your number solely to verify your account via OTP[cite: 51, 56]. We never share it[cite: 51].</li>
          <li class="q-mb-xs"><strong>Display Name:</strong> Your name is only visible to you and the system administrator. It is not shown publicly[cite: 94, 103].</li>
          <li class="q-mb-xs"><strong>Location Zones:</strong> We record the neighbourhoods (zones) you select so we can show you relevant power updates[cite: 127].</li>
        </ul>
      </section>

      <section class="q-mb-lg">
        <div class="text-h6 text-weight-bold q-mb-sm">3. Anonymity of Reports</div>
        <p class="text-opaque">
          When you tap to report that the light just came on or went off, that data is submitted anonymously[cite: 220]. No name is attached to your report in the public area feed[cite: 221]. Your reports are used strictly to calculate the schedule patterns for your community[cite: 152].
        </p>
      </section>

      <section class="q-mb-lg">
        <div class="text-h6 text-weight-bold q-mb-sm">4. Data Deletion and NDPR Compliance</div>
        <p class="text-opaque">
          In compliance with the Nigeria Data Protection Regulation (NDPR), you have the right to request the deletion of your personal data. You can permanently delete your account and all associated personal identifiers at any time directly from the Profile screen[cite: 294, 299].
        </p>
      </section>

      <section class="q-mb-lg">
        <div class="text-h6 text-weight-bold q-mb-sm">5. Push Notifications</div>
        <p class="text-opaque">
          We use the Web Push API to deliver timely alerts to your device[cite: 331]. We do not track your background location. Notifications only function based on the explicit preferences you toggle in your settings[cite: 315].
        </p>
      </section>

      <section class="q-mb-lg">
        <div class="text-h6 text-weight-bold q-mb-sm">6. Contact Us</div>
        <p class="text-opaque">
          If you have any questions about this Privacy Policy or how your data is handled, please contact the system administrator (Uncle Dee)[cite: 10, 100].
        </p>
      </section>

    </div>
  </q-page>
</template>

<script setup>
// Minimal script logic required for a static content page
</script>

<style lang="scss" scoped>
.sticky-header {
  position: sticky;
  top: 0;
}

.border-bottom {
  border-bottom: 1px solid var(--q-line-color, rgba(0, 0, 0, 0.05));
}

ul {
  list-style-type: disc;
}
</style>

<template>
  <q-page class="q-pb-xl">
    <q-card flat class="bg-transparent">
      <q-toolbar class="q-py-md border-bottom">
        <q-btn
          flat
          dense
          no-caps
          rounded
          to="/profile"
          color="primary"
          label="< Back"
          class="text-weight-medium q-px-sm"
        />
        <q-space />
        <div class="text-h6 text-weight-bold">Edit Profile</div>
        <q-space />
        <q-btn
          flat
          dense
          no-caps
          rounded
          color="primary"
          label="Save"
          class="text-weight-bold q-px-sm"
        />
      </q-toolbar>
    </q-card>

    <div class="column items-center q-pt-lg q-pb-md">
      <div class="relative-position q-mb-md">
        <q-avatar size="100px" class="bg-grey-3 text-weight-bold shadow-2">
          <img
            v-if="user.avatarUrl"
            :src="user.avatarUrl"
            alt="Profile Picture"
          />
          <div v-else class="text-h3 tetx-black">{{ user.name.charAt(0) || "U" }}</div>
        </q-avatar>

        <q-btn
          round
          color="primary"
          icon="camera_alt"
          size="sm"
          class="absolute-bottom-right shadow-3"
          style="transform: translate(-10%, -10%)"
        />
      </div>
      <div class="text-caption text-grey-6">Tap to change picture</div>
    </div>

    <div class="q-px-md q-gutter-y-lg q-mt-sm">
      <section>
        <div class="text-subtitle1 q-mb-sm text-weight-medium">Full Name</div>
        <q-input
          v-model="user.name"
          outlined
          color="positive"
          placeholder="What should we call you?"
          hint="Only visible to you and the admin. Not shown publicly."
          class="text-body1"
        />
      </section>

      <section>
        <div class="row items-center justify-between q-pb-sm">
          <div class="text-subtitle1 text-weight-medium">Registered Zones</div>
          <q-btn
            flat
            dense
            no-caps
            rounded
            color="primary"
            class="text-weight-medium q-px-sm"
          >
            + Add zone
          </q-btn>
        </div>

        <q-list class="q-gutter-y-md">
          <q-card
            v-for="(zone, index) in user.zones"
            :key="index"
            flat
            bordered
            :class="['zone-card', zone.isPrimary ? 'primary-zone' : '']"
          >
            <q-item>
              <q-item-section>
                <q-item-label class="text-weight-bold text-body1">{{
                  zone.name
                }}</q-item-label>
                <q-item-label caption>{{ zone.description }}</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-badge
                  v-if="zone.isActive"
                  rounded
                  class="badge-tinted q-px-sm text-weight-medium"
                >
                  active
                </q-badge>
              </q-item-section>
            </q-item>
          </q-card>
        </q-list>
      </section>
    </div>
  </q-page>
</template>

<script setup>
import { reactive } from "vue";

// Mock user data state
const user = reactive({
  name: "Kanayo O. Kanayo",
  avatarUrl: "", // Leave empty to fall back to the initial, or provide an image URL
  zones: [
    {
      name: "Odenigwe",
      description: "Home - Primary zone",
      isActive: true,
      isPrimary: true,
    },
    {
      name: "UNN Main Campus",
      description: "School - Campus grid",
      isActive: true,
      isPrimary: false,
    },
  ],
});
</script>

<style lang="scss" scoped>
.border-bottom {
  border-bottom: 1px solid var(--q-line-color, rgba(0, 0, 0, 0.05));
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
  background-color: rgba($positive, 0.15) !important;
  color: $positive !important;
}
</style>

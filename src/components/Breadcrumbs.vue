<template>
  <div>
    <!-- BREADCRUMB -->
    <nav id="breadcrumbs" class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <v-breadcrumbs
              divider=">"
              :items="breadcrumbs"
              class="py-0 font-size-xs text-gray-400"
            >
              <template v-slot:divider>
                <v-icon size="0.6rem">fas fa-chevron-right</v-icon>
              </template>
            </v-breadcrumbs>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumbs',

  components: {}
}
</script>

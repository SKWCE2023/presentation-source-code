<template>
  <div class="modal">
    <div class="modal-header">
      <span class="modal-icon close" @click="closeHomeModal()"></span>
      <span class="modal-icon"></span>
      <span class="modal-icon"></span>
    </div>
    <div class="modal-body">
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeHomeModal: function () {
      this.$parent.$data.isHomeOpen = false;
    },
  },
};
</script>

<style scoped src="../styles/Modal.scss" lang="scss"></style>
<style scoped src="../styles/HomeModal.scss" lang="scss"></style>

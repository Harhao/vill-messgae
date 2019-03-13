<template>
    <div class="con">
        <button @click="show">click</button>
    </div>
</template>

<script>
export default {
  methods: {
    show() {
      this.$message.success("success");
    }
  }
};
</script>

<style>
</style>

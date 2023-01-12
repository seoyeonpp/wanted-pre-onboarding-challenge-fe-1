<template>
  <div>
    <h1 @click="clickEv">{{ title }}</h1>
    <!-- <h1>{{ changeTitle }}</h1> -->
  </div>
</template>

<script>
export default {
  data: () => ({
    title: 'Login'
  }),
  methods: {
    clickEv(){
      // this.$emit('update');
      // this.title = 'Click h1'
      this.$set(this.$data, 'title', new Date().toTimeString())
    }
  },
  computed: {
    changeTitle () {
      return this.title;
    }
  },
  // vue instance life cycle
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
    // this.$set(this.$data, 'title', 'mounted될때 타이틀 바뀜');
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
}
</script>

<style>

</style>
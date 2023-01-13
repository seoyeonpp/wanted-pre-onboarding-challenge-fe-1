<template>
  <div>
    <table>
      <thead>
        <tr>
          <td>이름</td>
          <td>휴대폰번호</td>
          <td>회원번호</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data: () => ({
    
  }),
  methods: {
    
  },
  computed: {
    
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
<template>
  <div>
    <input type="text" placeholder="이름" v-model="name">
    <input type="text" placeholder="휴대폰번호" v-model="phone">
    <input type="text" placeholder="회원번호" v-model="number">
    <button @click="addMember">추가</button>
    <table>
      <thead>
        <tr>
          <td>이름</td>
          <td>휴대폰번호</td>
          <td>회원번호</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(member, i) in members" v-bind:key="i" >
          <td>{{ member.name }}</td>
          <td>{{ member.phone }}</td>
          <td>{{ member.number }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data: () => ({
    members: [
      {name: '', phone: '', number: ''}
    ],
    name: null,
    phone: null,
    number: null
  }),
  methods: {
    addMember() {
      const obj = {
        name: this.$data.name,
        phone: this.$data.phone,
        number: this.$data.number,
      }
      console.log(obj.name, obj.phone,obj.number)

      this.$set(this.$data.members, this.$data.members.length, obj)
      this.$data.name = '';
      this.$data.phone = '';
      this.$data.number = '';
    }
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
<template>
  <div class="header-right-wrapper">
    <div class="dropdown">
      <button
        class="btn btn-default my-btn dropdown-toggle"
        type="button"
        id="dropdownMenu1"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="true"
      >
        选择语言
        <span class="caret"></span>
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
        <li>
          <router-link tag="a" to="/home">中文</router-link>
        </li>
        <li>
          <router-link tag="a" to="/Japanese">日语</router-link>
        </li>
        <li>
          <router-link tag="a" to="/English">英文</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script >

<style scoped>
.header-right-wrapper .dropdown{
  float: right;
  margin-top: 16px;
}
</style>

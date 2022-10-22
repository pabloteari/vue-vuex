<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a
        class="navbar-brand mx-1"
        style="width: 200px"
        href="#"
        @click="goToLeading"
      >
        <img id="logo" alt="Vue logo" src="../assets/logo.png" width="70" height="70"/>
      </a>

      <button
        class="navbar-toggler btn btn-primary"
        type="button"
        role="tab"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item" :class="{ active: isActiveTab1 }">
            <a class="nav-link" aria-current="page" @click="goToTab1" href="#"
              >Tab 1</a
            >
          </li>
          <li class="nav-item" :class="{ active: isActiveTab2 }">
            <a class="nav-link" href="#" @click="goToTab2">Tab 2</a>
          </li>
          <li class="nav-item" :class="{ active: isActiveTab3 }">
            <a class="nav-link" href="#" @click="goToTab3">Tab 3</a>
          </li>
          <li class="nav-item" :class="{ active: isActiveTab4 }">
            <a class="nav-link" href="#" @click="goToTab4">Tab 4</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Action
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action 1</a></li>
              <li><a class="dropdown-item" href="#">Action 2</a></li>
              <li><a class="dropdown-item" href="#">Action 3</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Other action</a></li>
            </ul>
          </li>
        </ul>
        <span class="navbar-text"> Logo Client </span>
      
      </div>
    </div>
  </nav>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "NavBar",
  props: {
    sameThingsProps: String,
  },

  setup() {
    const store = useStore();

    return {
      isActiveTab1: computed(() => store.state.module1.isActiveTab1),
      isActiveTab2: computed(() => store.state.module1.isActiveTab2),
      isActiveTab3: computed(() => store.state.module1.isActiveTab3),
      isActiveTab4: computed(() => store.state.module1.isActiveTab4),

      goToTab1: () => store.commit("goToTab1"),
      goToTab2: () => store.commit("goToTab2"),
      goToTab3: () => store.commit("goToTab3"),
      goToTab4: () => store.commit("goToTab4"),
      goToLeading: () => store.commit("goToLeading"),
      // this.$router.push("/tab1")
    };
  },
};
</script>

<style scoped>
.nav-item {
  margin: 10px;
  font-weight: 700;
}
.nav-item.active {
  background-color: #2a5caa;
  border-radius: 5px;
}
.navbar-light .nav-item.active .nav-link {
  color: rgb(255, 255, 255);
}
</style>

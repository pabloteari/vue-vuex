import router from "../../router";

const mutations = {
  goToTab1(state) {
    state.module1.isActiveTab1 = true;
    state.module1.isActiveTab2 = false;
    state.module1.isActiveTab3 = false;
    state.module1.isActiveTab4 = false;
    router.push("/tab1");
  },

  goToTab2(state) {
    state.module1.isActiveTab1 = false;
    state.module1.isActiveTab2 = true;
    state.module1.isActiveTab3 = false;
    state.module1.isActiveTab4 = false;
    router.push("/tab2");
  },

  goToTab3(state) {
    state.module1.isActiveTab1 = false;
    state.module1.isActiveTab2 = false;
    state.module1.isActiveTab3 = true;
    state.module1.isActiveTab4 = false;
    router.push("/tab3");
  },

  goToTab4(state) {
    state.module1.isActiveTab1 = false;
    state.module1.isActiveTab2 = false;
    state.module1.isActiveTab3 = false;
    state.module1.isActiveTab4 = true;
    router.push("/tab4");
  },

  goToLeading(state) {
    state.module1.isActiveTab1 = false;
    state.module1.isActiveTab2 = false;
    state.module1.isActiveTab3 = false;
    state.module1.isActiveTab4 = false;
    router.push("/");
  },
};

export default mutations;

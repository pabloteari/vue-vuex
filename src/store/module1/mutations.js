const mutations = {
  goToTab1(state) {
    state.module1.isActiveTab1 = true;
    state.module1.isActiveTab2 = false;
    state.module1.isActiveTab3 = false;
    state.module1.isActiveTab4 = false;
  },

  goToTab2(state) {
    state.module1.isActiveTab1 = false;
    state.module1.isActiveTab2 = true;
    state.module1.isActiveTab3 = false;
    state.module1.isActiveTab4 = false;
  },

  goToTab3(state) {
    state.module1.isActiveTab1 = false;
    state.module1.isActiveTab2 = false;
    state.module1.isActiveTab3 = true;
    state.module1.isActiveTab4 = false;
  },

  goToTab4(state) {
    state.module1.isActiveTab1 = false;
    state.module1.isActiveTab2 = false;
    state.module1.isActiveTab3 = false;
    state.module1.isActiveTab4 = true;
  },

  goToLeading(state) {
    state.module1.isActiveTab1 = false;
    state.module1.isActiveTab2 = false;
    state.module1.isActiveTab3 = false;
    state.module1.isActiveTab4 = false;
  },
};

export default mutations;

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    deck: [],
    dealerDeck: [],
    playerDeck: [],
    dealerDeckSum: 0,
    playerDeckSum: 0,
    gameMode: "player",
  },
  getters: {
    actualDeck: (state) => {
      return state.deck;
    },
    actualDealerDeck: (state) => {
      return state.dealerDeck;
    },
    actualPlayerDeck: (state) => {
      return state.playerDeck;
    },
    actualGameMode: (state) => {
      return state.gameMode;
    },
    actualDealerDeckSum: (state) => {
      return state.dealerDeckSum;
    },
    actualPlayerDeckSum: (state) => {
      return state.playerDeckSum;
    },
  },
  mutations: {
    createDeck(state, payload) {
      state.deck = payload;
    },
    pullCardToDealer(state) {
      const lastCard = state.deck.splice(-1);
      state.dealerDeck.push(lastCard[0]);
    },
    pullCardToPlayer(state) {
      const lastCard = state.deck.splice(-1);
      state.playerDeck.push(lastCard[0]);
    },
    changeGameMode(state, payload) {
      state.gameMode = payload;
    },
    setDealerDeckSum(state, payload) {
      state.dealerDeckSum = payload;
    },
    setPlayerDeckSum(state, payload) {
      state.playerDeckSum = payload;
    },
    emptyDealerDeck(state) {
      state.dealerDeck = [];
    },
    emptyPlayerDeck(state) {
      state.playerDeck = [];
    },
  },
  actions: {
    createDeck(context, payload) {
      context.commit("createDeck", payload);
    },
    pullCardToDealer(context) {
      context.commit("pullCardToDealer");
    },
    pullCardToPlayer(context) {
      context.commit("pullCardToPlayer");
    },
    changeGameMode(context, payload) {
      context.commit("changeGameMode", payload);
    },
    setDealerDeckSum(context, payload) {
      context.commit("setDealerDeckSum", payload);
    },
    setPlayerDeckSum(context, payload) {
      context.commit("setPlayerDeckSum", payload);
    },
    emptyDealerDeck(context) {
      context.commit("emptyDealerDeck");
    },
    emptyPlayerDeck(context) {
      context.commit("emptyPlayerDeck");
    },
  },
  modules: {},
});

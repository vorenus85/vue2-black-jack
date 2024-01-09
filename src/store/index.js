import Vue from "vue";
import Vuex from "vuex";
import { deck, shuffle } from "@/utils/cardLogic";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    deck: [],
    dealerDeck: [],
    playerDeck: [],
  },
  getters: {
    actualDeck(state) {
      return state.deck;
    },
    actualDealerDeck(state) {
      return state.dealerDeck;
    },
    actualPlayerDeck(state) {
      return state.playerDeck;
    },
  },
  mutations: {
    createDeck(state) {
      const starterDeck = deck();
      const shuffledDeck = shuffle(starterDeck);
      state.deck = shuffledDeck;
    },
    pullCardToDealer(state) {
      const lastCard = state.deck.splice(-1);
      state.dealerDeck.push(lastCard[0]);
    },
    pullCardToPlayer(state) {
      const lastCard = state.deck.splice(-1);
      state.playerDeck.push(lastCard[0]);
    },
  },
  actions: {
    createDeck(context) {
      context.commit("createDeck");
    },
    pullCardToDealer(context) {
      context.commit("pullCardToDealer");
    },
    pullCardToPlayer(context) {
      context.commit("pullCardToPlayer");
    },
  },
  modules: {},
});

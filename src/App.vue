<script setup>
import Heading from './components/Heading.vue';
import SearchBar from './components/SearchBar.vue';
import SortPicker from './components/SortPicker.vue';
import TableView from './components/TableView.vue';
import ModalAddTodo from './components/ModalAddTodo.vue';
import BtnAddTodo from './components/BtnAddTodo.vue';
import { computed, onBeforeMount } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const newTodoModalIsOpen = computed(() => store.state.newTodoModalIsOpen);
onBeforeMount(() => {
  if (localStorage.getItem('state')) {
    store.commit('initialiseState', JSON.parse(localStorage.getItem('state')));
  }
})
</script>

<template>
  <header>
    <div class="top-bar">
      <Heading />
      <BtnAddTodo />
    </div>
    <div class="tool-bar">
      <SearchBar />
      <SortPicker />
    </div>
    
  </header>

  <main>
    <TableView />
    <ModalAddTodo v-show="newTodoModalIsOpen"/>
  </main>
</template>

<style scoped>
  .top-bar, .tool-bar {
    display: flex;
    margin-top: 30px;
    justify-content: center;
    margin-left: 40px;
  }
</style>

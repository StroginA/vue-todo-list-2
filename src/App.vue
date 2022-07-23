<script setup>
import Heading from './components/Heading.vue';
import BtnAddTask from './components/BtnAddTask.vue';
import SearchBar from './components/SearchBar.vue';
import SortPicker from './components/SortPicker.vue';
import TableView from './components/TableView.vue';
import ModalAddTask from './components/ModalAddTask.vue';
</script>

<template>
  <header>
    <div class="top-bar">
      <Heading />
      <BtnAddTask />
    </div>
    <div class="tool-bar">
      <SearchBar />
      <SortPicker />
    </div>
    
  </header>

  <main>
    <TableView />
  </main>
</template>

<style scoped>
  .top-bar, .tool-bar {
    display: flex;
    margin-top: 30px;
    justify-content: center;
  }
</style>

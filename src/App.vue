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
    <Heading />
    <BtnAddTask />
    <SearchBar />
    <SortPicker />
  </header>

  <main>
    <TableView />
    <ModalAddTask />
  </main>
</template>

<style scoped>

</style>

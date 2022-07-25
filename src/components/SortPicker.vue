<template>
    <div class="sort-picker_wrapper">
        <div>Сортировать по:</div>
        <select class="sort-picker">
            <option value="dateDESC">Дата</option>
            <option value="dateASC">Дата</option>
            <option value="statusDESC">Статус</option>
            <option value="statusASC">Статус</option>
        </select>
    </div>
</template>

<style scoped>
    .sort-picker_wrapper {
        margin-left: auto;
        display: flex;
        align-items: center;
        
    }
    .sort-picker {
        font-family: 'Vela Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        color: #16191D;
        border: 0;
        background-color: inherit;
        margin-left: 15px;
    }
</style>
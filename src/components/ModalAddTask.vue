<template>
    <div class="modal-backdrop">
        <div class="modal-window">
            <div class="heading-wrapper">
                <div class="modal-heading">
                    Создать новую задачу
                </div>
                <button class="btn-close-modal">
                    <img src="../assets/white_cross.svg" class="white-cross">
                </button>
            </div>


            <div class="modal-label">
                Описание:
            </div>
            <div class="modal-textfield">
                Введите описание
            </div>
        </div>
    </div>
</template>

<style scoped>
@font-face {
    font-family: 'AGAvantGardeCyr Book';
    src: url('../fonts/agavantgardecyr-book_[allfont.net].ttf')
}

.modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.01);
    backdrop-filter: blur(4px);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-window {
    box-sizing: border-box;
    width: 400px;
    height: 281px;
    padding-left: 40px;
    padding-top: 40px;
    padding-right: 40px;
    background: #FFFFFF;
    border: 1px solid #DDE2E4;
    box-shadow: 0px 25px 50px -12px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
}
.heading-wrapper {
    display: flex;
}
.modal-heading {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 132%;
    margin-bottom: 30px;
}

.btn-close-modal {
    height: 22px;
    width: 22px;
    justify-content: center;
    background: #314B99;
    border-radius: 5px;
    border: 0;
    display: flex;
    margin-left: auto;
}

.btn-close-modal:hover {
    background: #213B89;
}

.btn-close-modal .white-cross {
    justify-self: center;
    align-self: center;
}

.modal-label {
    font-family: 'AGAvantGardeCyr Book';
    margin-bottom: 5px;
}
.modal-textfield {
    margin-bottom: 30px;
}
</style>
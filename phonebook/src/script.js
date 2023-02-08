import * as render from './script/modules/render';
const {
  renderPhoneBook,
  renderContacts,
} = render;

import {getStorage} from './script/modules/storage';

import {
  modalControl,
  deleteControl,
  onTableHeaderClick,
  formControl,
  hoverRow,
} from './script/modules/control';

// import './css/style.css';
import './scss/index.scss';
// import './index.html';

{
  // const keyPhonebook = 'key';

  const init = (selectorApp, title) => {
    const app = document.querySelector(selectorApp);

    const {
      list,
      thead,
      logo,
      btnAdd,
      formOverlay,
      form,
      btnDel} = renderPhoneBook(app, title);

    // Функционал

    const data = getStorage('key');

    const allRow = renderContacts(list, data);
    const {closeModal} = modalControl(btnAdd, formOverlay);

    hoverRow(allRow, logo);
    deleteControl(btnDel, list, 'key');
    formControl(form, list, closeModal, 'key');
    onTableHeaderClick(thead, list);
  };

  window.phoneBookInit = init;
}


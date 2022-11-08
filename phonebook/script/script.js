import * as render from './modules/render.js';
//  Так можно сразу деструктурировать?
const {
  renderPhoneBook,
  renderContacts,
} = render;

import {getStorage} from './modules/storage.js';

import {
  modalControl,
  deleteControl,
  onTableHeaderClick,
  formControl,
  hoverRow,
} from './modules/control.js';

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


import createElements from './createElements';
const {
  createHeader,
  createLogo,
  createMain,
  createButtonsGroup,
  createTable,
  createRow,
  createForm,
  createFooter,
} = createElements;

import {createImageLogo} from './createElements';

export const renderPhoneBook = (app, title) => {
  const header = createHeader();
  const imageLogo = createImageLogo();
  const logo = createLogo(title);
  const main = createMain();
  const buttonGroup = createButtonsGroup([
    {
      className: 'btn btn-primary mr-3 js-add',
      type: 'button',
      text: 'Добавить',
    },
    {
      className: 'btn btn-danger',
      type: 'button',
      text: 'Удалить',
    },
  ]);
  const table = createTable();

  const {form, overlay} = createForm();
  const footer = createFooter(title);

  header.headerContainer.append(imageLogo, logo);
  main.mainContainer.append(buttonGroup.btnWrapper, table, overlay);

  app.append(header, main, footer);

  return {
    list: table.tbody,
    thead: table.thead,
    logo,
    btnAdd: buttonGroup.btns[0],
    btnDel: buttonGroup.btns[1],
    formOverlay: overlay,
    form,
  };
};

export const renderContacts = (elem, data) => {
  const allRow = data.map(createRow);

  elem.innerHTML = '';

  elem.append(...allRow);

  return allRow;
};

import createElements from './createElements.js';
const {
  createRow,
} = createElements;

import * as render from './render.js';
//  Так можно сразу деструктурировать?
const {
  renderContacts,
} = render;

import {getStorage, setStorage, removeStorage} from './storage.js';

const modalControl = (btnAdd, formOverlay) => {
  const openModal = () => {
    formOverlay.classList.add('is-visible');
  };

  const closeModal = () => {
    formOverlay.classList.remove('is-visible');
  };

  btnAdd.addEventListener('click', () => {
    openModal();
  });

  formOverlay.addEventListener('click', e => {
    const target = e.target;
    if (target === formOverlay ||
        target.classList.contains('close')) {
      closeModal();
    }
  });
  return {closeModal};
};

const deleteControl = (btnDel, list, key) => {
  btnDel.addEventListener('click', () => {
    document.querySelectorAll('.delete').forEach(del => {
      del.classList.toggle('is-visible');
    });
  });

  list.addEventListener('click', e => {
    const target = e.target;
    if (target.closest('.del-icon')) {
      const numberPhone = target.closest('.contact').
          querySelector('a').textContent;
      target.closest('.contact').remove();

      const data = getStorage(key);
      removeStorage(data, numberPhone, key);
    }
  });
};

const addContactPage = (contact, list) => {
  list.append(createRow(contact));
};


const sortContactsByField = (field) => {
  const data = getStorage('key');

  const newData = data.sort((a, b) => (a[field] > b[field] ? 1 :
      a[field] < b[field] ? -1 :
      0));

  localStorage.setItem('key', JSON.stringify(newData));

  return newData;
};

const onTableHeaderClick = (thead, list) => {
  thead.addEventListener('click', ({target}) => {
    if (target.closest('.name')) {
      renderContacts(list, sortContactsByField('name'));
    }

    if (target.closest('.surname')) {
      renderContacts(list, sortContactsByField('surname'));
    }
  });
};

const formControl = (form, list, closeModal, key) => {
  form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const newContact = Object.fromEntries(formData);

    addContactPage(newContact, list);

    // addContactData(newContact);
    setStorage(key, newContact);

    form.reset();
    closeModal();
  });
};

const hoverRow = (allRow, logo) => {
  const text = logo.textContent;
  allRow.forEach(contact => {
    contact.addEventListener('mouseenter', () => {
      logo.textContent = contact.phoneLink.textContent;
    });
    contact.addEventListener('mouseleave', () => {
      logo.textContent = text;
    });
  });
};

export {
  modalControl,
  deleteControl,
  addContactPage,
  sortContactsByField,
  onTableHeaderClick,
  formControl,
  hoverRow,
};


const defaultState = {
  booksStorage: [],
};

const loadBooks = (currentState, newBooksState) => {
  const newState = {
    booksStorage: newBooksState,
  };
  return newState;
};

const likeBook = (currentState, payload) => {
  const state = currentState;
  const bookId = payload.booksId;
  const { author } = payload;
  let bookToUpdate = {};
  let bookIndex = 0;

  for (let i = 0; i < state[author].length; i += 1) {
    if (state[author][i].books_id === bookId) {
      bookToUpdate = state[i];
      bookIndex = i;
      break;
    }
  }
  bookToUpdate.like = 1;
  state[author][bookIndex] = bookToUpdate;

  return {
    booksStorage: state,
  };
};

const dislikeBook = (currentState, payload) => {
  const state = currentState;
  const bookId = payload.booksId;
  const { author } = payload;
  let bookToUpdate = {};
  let bookIndex = 0;

  for (let i = 0; i < state[author].length; i += 1) {
    if (state[author][i].books_id === bookId) {
      bookToUpdate = state[i];
      bookIndex = i;
      break;
    }
  }
  bookToUpdate.like = 0;
  state[author][bookIndex] = bookToUpdate;

  return {
    booksStorage: state,
  };
};

const booksState = (state = defaultState, actions) => {
  switch (actions.type) {
    case 'LOAD':
      return (loadBooks(state, actions.payload));
    case 'LIKE':
      return (likeBook(state, actions.payload));
    case 'DISLIKE':
      return (dislikeBook(state, actions.payload));
    default:
      return state;
  }
};

export default booksState;

/*
  action = {
    type: 'CREATE_EVENT',
    title: '2020年東京オリンピックのお知らせ',
    body: '2020年の東京オリンピックは延期となりました。'
  }

  # before
  state = []
  # after
  state = []

  state = [
    { id: 1, title: 'タイトル1', body: 'ボディー1'},
    { id: 2, title: 'タイトル2', body: 'ボディー2'},
    { id: 3, title: 'タイトル3', body: 'ボディー3'},
  ]
*/
const events = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_EVENT':
      const event = { title: action.title, body: action.body };
      const length = state.length;
      const id = length === 0 ? 1 : state[length - 1].id + 1;
      return [...state, { id, ...event }];
    case 'DELETE_EVENT':
      return state.filter((event) => event.id !== action.id);
    case 'DELETE_ALL_EVENTS':
      return [];
    default:
      return state;
  }
};

export default events;

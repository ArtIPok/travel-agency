/* SELECTORS */

export const getAllFilters = ({filters}) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
// TODO - add other action types
export const ADD_TAGS = createActionName('ADD_TAGS');
export const REMOVE_TAGS = createActionName('REMOVE_TAGS');

// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
// TODO - add other action creators
export const addTags = payload => ({payload, type: ADD_TAGS });
export const removeTags = payload => ({payload, type: REMOVE_TAGS});

// reducer
export default function reducer(statePart = [], action = {}) {

  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    // TODO - handle other action types
    case ADD_TAGS:
      // if(state tag) {
      return {
        ...statePart,
        // tags: [...statePart.tags, action.payload],
      };
      // } else break;
    case REMOVE_TAGS:
      return {
        ...statePart,
        // tags: 
      };
    default:
      return statePart;
  }
}

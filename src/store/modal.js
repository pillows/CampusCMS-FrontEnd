/**
 * Action types
 */

const SHOW_MODAL = "SHOW_MODAL";
const HIDE_MODAL = "HIDE_MODAL";

/**
 * Action Creators
 */

// export const showModal = () => ({type: SHOW_MODAL});
// export const hideModal = () => ({type: HIDE_MODAL});
export const handleOpenModal = () => ({type: SHOW_MODAL});
export const handleCloseModal = () => ({type: HIDE_MODAL});

/**
 * Reducer
 */
export default function(state = false, action) {
    switch (action.type) {
    case SHOW_MODAL:
        return true;
    case HIDE_MODAL:
        return false;
    default:
        return state;
    }
}
// redux store: {modal: false}

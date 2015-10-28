export const OPEN_SHORTCUTS = 'OPEN_SHORTCUTS'
export const OPEN_UPLOAD    = 'OPEN_UPLOAD'
export const OPEN_FEEDBACK  = 'OPEN_FEEDBACK'
export const CLOSE_MODAL    = 'CLOSE_MODAL'

export const view = {
  SEARCH: 'SEARCH',
  SHORTCUTS: 'SHORTCUTS',
  FEEDBACK: 'FEEDBACK',
  UPLOAD: 'UPLOAD'
}

export default function (state = view.SEARCH, action) {
  switch (action.type) {
  case OPEN_SHORTCUTS:
    return view.SHORTCUTS
  case OPEN_UPLOAD:
    return view.UPLOAD
  case OPEN_FEEDBACK:
    return view.FEEDBACK
  case CLOSE_MODAL:
    return view.SEARCH
  default:
    return state
  }
}

export function closeModals() {
  return { type: CLOSE_MODAL };
}

export function openShortcuts() {
  return { type: OPEN_SHORTCUTS };
}

export function openUpload() {
  return { type: OPEN_UPLOAD };
}

export function openFeedback() {
  return { type: OPEN_FEEDBACK };
}

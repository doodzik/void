export const STOP_ANIMATION  = 'STOP_ANIMATION'
export const START_ANIMATION = 'START_ANIMATION'

export const logo = {
  READY:   'READY',  
  RUNNING: 'RUNNING',
  ENDED:   'ENDED'
}

export default function (state = logo.READY, action) {
  switch (action.type) {
  case START_ANIMATION:
    return (state != logo.READY) ? state : logo.RUNNING
  case STOP_ANIMATION:
    return logo.ENDED
  default:
    return state
  }
}

export function startAnimation() {
  return { type: START_ANIMATION };
}

export function stopAnimation() {
  return { type: STOP_ANIMATION };
}

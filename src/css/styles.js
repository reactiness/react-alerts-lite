export const defaultStyle = (pos) => ({
  position: 'fixed',
  width: '100%',
  height: '35px',
  bottom: `${pos * 40}px`,
  left: '0px',
  border: '1px grey black',
  verticalAlign: 'middle',
  display: 'inline-block',
  lineHeight: '35px',
})

export const errorStyle = {
  backgroundColor: 'red'
}

export const basicStyle = {
  backgroundColor: 'grey'
}

export const successStyle = {
  backgroundColor: 'green'
}

export const warningStyle = {
  backgroundColor: 'yellow'
}

export const infoStyle = {
  backgroundColor: 'blue'
}
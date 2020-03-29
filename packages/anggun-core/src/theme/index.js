import colors from './colors'
import typography from './typography'
import radii from './sizes'

// const sizes = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]

const sizes = [
  '0',
  '0.25rem',
  '0.5rem',
  '1rem',
  '1.25rem',
  '1.5rem',
  '1.75rem',
  '2rem',
  '2.25rem',
  '2.5rem',
  '2.75rem',
  '3rem',
  '3.25rem',
  '3.5rem',
  '3.75rem',
  '4rem'
]

const space = sizes

// const breakpoints = [] // TODO  define type breakpoints size  (e.g: xl, xxl, xyz)
const breakpoints = ['40em', '52em', '64em']

const theme = {
  sizes,
  space,
  colors,
  breakpoints,
  radii,
  ...typography
}

export default theme

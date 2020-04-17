/** @jsx jsx */
import { jsx, css, Global } from '@emotion/core'

const CSSReset = () => (
  <Global
    styles={theme => css`
      body {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        line-height: 1.5;
      }

      html {
        font-family: ${theme.fonts.body};
      }

      samp,
      code,
      kbd {
        font-family: ${theme.fonts.mono};
      }

      p {
        margin: 0;
      }
    `}
  />
)

CSSReset.displayName = 'CSSReset'

export default CSSReset
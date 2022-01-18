import * as React from 'react'
import Link from '@mui/material/Link'

 const ButtonLink = () => {
  return (
    <Link
      component="button"
      variant="body2"
      onClick={() => {
        console.info("I'm a button.")
      }}>
      Button Link
    </Link>
  )
}

export default ButtonLink
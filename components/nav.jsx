import { AppBar, Avatar, Typography, useScrollTrigger, Toolbar, Container } from "@mui/material"
import Link from "next/link"

const Nav = () => {
  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 500,
  })
  return (
    <AppBar elevation={0} sx={{ backgroundColor: "transparent", top: scrollTrigger ? '0vw' : '-10vw', transition: '1s' }}>
      {/* <Container sx={{ borderRadius: {md: 2, xs: 0}, mt: {md: 2, xs: 0}, backdropFilter: "blur(10px)", px: "0 !important" }} maxWidth="md">
        <Link href="/" style={{color:'inherit',textDecoration:"none",width:'fit-content'}}>
          <Toolbar>
            <Avatar src="/assets/images/logo.webp" alt="logo" sx={{mx: 3}} />
            <Typography variant="h6" component="div">Noufal Rahman</Typography>
          </Toolbar>
        </Link>
      </Container> */}
    </AppBar>
  )
}

export default Nav

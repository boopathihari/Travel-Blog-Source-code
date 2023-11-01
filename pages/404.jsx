import Layout from "@/components/layout";
import { Box, Button, Typography } from "@mui/material";
import Head from "next/head";

export default function Error() {
  return (
    <>
      <Head>
        <title>404 | Noufal Rahman</title>
        <meta name="description" content="This page cannot be found" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Box className="bg-teal ms" sx={{height:'100vh',width:'100%', display:'flex', justifyContent:'center',alignItems:'center'}}>
          <Box className="bg-blue" sx={{ p: 5, borderRadius: 3 }}>
            <Box sx={{display:'flex'}}>
              <Typography variant="h2" className="mwi text-teal" sx={{lineHeight:0.9}} component="span">B</Typography>
              <Box sx={{display:'flex',justifyContent:'end',flexDirection:'column'}}>
                <Typography variant="h6" className="mwi">y the gods old and new, I swear on </Typography>
              </Box>
            </Box>
            <Typography variant="h6" className="mwi">to thee. This is not 101 and it&apos;s not 303</Typography>
            <Typography variant="h6" className="mwi">It is but the cruelest of numbers around</Typography>
            <Typography variant="h6" className="mwi">It is 404, the page cannot be found</Typography>
            <Typography variant="h6" className="mwi" sx={{mt:2}}>So, what you can do now?</Typography>
            <Button variant="outlined" component="a" href="/" sx={{borderColor:'#b2fff4',color:'#b2fff4',mt:1}}>Back you go</Button>
          </Box>
        </Box>
      </Layout>
    </>
  )
}
import { SignIn } from "@clerk/nextjs";
import { Box, Grid } from "@mui/material";
import SlideBar from "src/@core/components/slidebar";
import BlankLayout from "src/@core/layouts/BlankLayout";
 
const Signin = () => {
  return (
    <Grid container>
      <Grid md={6} sm={12} xs={12}>
        <Box
          component={'div'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          height={'100vh'}
        >
          <SignIn />
        </Box>
      </Grid>
      <Grid md={6} sm={12} xs={12}>
        <Box
          component={'div'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          width={'100%'}
          height={'100%'}
          backgroundColor={'purple'}
        >
          <SlideBar />
        </Box>
      </Grid>
    </Grid>
  );
}

Signin.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default Signin;
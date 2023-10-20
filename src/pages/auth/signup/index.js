import { SignUp } from "@clerk/nextjs";
import { Box, Grid } from "@mui/material";
import BlankLayout from "src/@core/layouts/BlankLayout";
 
const Signup = () => {
  return (
    <Grid container>
      <Grid item md={6} sm={12} xs={12}>
        <Box
          component={'div'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          height={'100vh'}
        >
          <SignUp />
        </Box>
      </Grid>
      <Grid item md={6} sm={12} xs={12}>
        <Box
          width={'100%'}
          height={'100%'}
          backgroundColor={'purple'}
        />
      </Grid>
    </Grid>
  );
}

Signup.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default Signup;
import React from "react";
import { Grid } from "@mui/material";
import styles from "./Auth.module.scss";
import FormSignIn from "./Forms/FormSignIn";

const Auth = () => {
  return (
    <Grid className={styles.auth} container>
      <Grid className={styles.auth__left} item xs={0} sm={6}>
        <div className={styles.auth__bg}></div>
      </Grid>
      <Grid className={styles.auth__right} item xs={12} sm={6}>
        <FormSignIn />
      </Grid>
    </Grid>
  );
};

export default Auth;

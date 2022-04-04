// import React from "react";
// import styled from "styled-components";
// import { PageHero } from "../components";
// import FooterPagePro from "./Footer";

// const AboutPage = () => {
//   return (
//     <div>
//       <main>
//         <PageHero title="about" />
//         <Wrapper className="page section section-center">
//           <img src={"fblusidb"} alt="nice desk" />
//           <article>
//             <div className="title">
//               <h2>our Mission</h2>
//               <div className="underline"></div>
//             </div>
//             <p>
//               To give all renters the opportunity to afford to live in the
//               custom designed fully-furnished apartment of their dreams. Born in
//               response to modern lifestyles, NICKSON serves to deliver
//               distinctive living to all. We aim to simplify lives through
//               installing design. To accomplish this, we use our knowledge of
//               real estate, interior design, procurement, and logistics.
//             </p>
//           </article>
//         </Wrapper>
//         <FooterPagePro />
//       </main>
//     </div>
//   );
// };

// const Wrapper = styled.section`
//   display: grid;
//   gap: 4rem;
//   img {
//     width: 100%;
//     display: block;
//     border-radius: var(--radius);
//     height: 500px;
//     object-fit: cover;
//   }
//   p {
//     line-height: 2;
//     max-width: 45em;
//     margin: 0 auto;
//     margin-top: 2rem;
//     color: var(--clr-grey-5);
//   }
//   .title {
//     text-align: left;
//   }
//   .underline {
//     margin-left: 0;
//   }
//   @media (min-width: 992px) {
//     grid-template-columns: 1fr 1fr;
//   }
// `;
// export default AboutPage;

// ----

// import React from "react";
// import PropTypes from "prop-types";
// import withStyles from "@material-ui/core/styles/withStyles";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Paper from "@material-ui/core/Paper";
// import Stepper from "@material-ui/core/Stepper";
// import Step from "@material-ui/core/Step";
// import StepLabel from "@material-ui/core/StepLabel";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
// import AddressForm from "./AddressForm";
// import PaymentForm from "./PaymentForm";
// import Review from "./Review";

// const styles = (theme) => ({
//   appBar: {
//     position: "relative",
//   },
//   layout: {
//     width: "auto",
//     marginLeft: theme.spacing.unit * 2,
//     marginRight: theme.spacing.unit * 2,
//     [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
//       width: 600,
//       marginLeft: "auto",
//       marginRight: "auto",
//     },
//   },
//   paper: {
//     marginTop: theme.spacing.unit * 3,
//     marginBottom: theme.spacing.unit * 3,
//     padding: theme.spacing.unit * 2,
//     [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
//       marginTop: theme.spacing.unit * 6,
//       marginBottom: theme.spacing.unit * 6,
//       padding: theme.spacing.unit * 3,
//     },
//   },
//   stepper: {
//     padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
//   },
//   buttons: {
//     display: "flex",
//     justifyContent: "flex-end",
//   },
//   button: {
//     marginTop: theme.spacing.unit * 3,
//     marginLeft: theme.spacing.unit,
//   },
// });

// const steps = ["Shipping address", "Payment details", "Review your order"];

// function getStepContent(step) {
//   switch (step) {
//     case 0:
//       return <AddressForm />;
//     case 1:
//       return <PaymentForm />;
//     case 2:
//       return <Review />;
//     default:
//       throw new Error("Unknown step");
//   }
// }

// class Checkout extends React.Component {
//   state = {
//     activeStep: 0,
//   };

//   handleNext = () => {
//     this.setState((state) => ({
//       activeStep: state.activeStep + 1,
//     }));
//   };

//   handleBack = () => {
//     this.setState((state) => ({
//       activeStep: state.activeStep - 1,
//     }));
//   };

//   handleReset = () => {
//     this.setState({
//       activeStep: 0,
//     });
//   };

//   render() {
//     const { classes } = this.props;
//     const { activeStep } = this.state;
//     console.log(activeStep);
//     return (
//       <React.Fragment>
//         <CssBaseline />
//         <AppBar position="absolute" color="default" className={classes.appBar}>
//           <Toolbar>
//             <Typography variant="h6" color="inherit" noWrap>
//               Company name
//             </Typography>
//           </Toolbar>
//         </AppBar>
//         <main className={classes.layout}>
//           <Paper className={classes.paper}>
//             <Typography component="h1" variant="h4" align="center">
//               Checkout
//             </Typography>
//             <Stepper activeStep={activeStep} className={classes.stepper}>
//               {steps.map((label) => (
//                 <Step key={label}>
//                   <StepLabel>{label}</StepLabel>
//                 </Step>
//               ))}
//             </Stepper>
//             <React.Fragment>
//               {activeStep === steps.length ? (
//                 <React.Fragment>
//                   <Typography variant="h5" gutterBottom>
//                     Thank you for your order.
//                   </Typography>
//                   <Typography variant="subtitle1">
//                     Your order number is #2001539. We have emailed your order
//                     confirmation, and will send you an update when your order
//                     has shipped.
//                   </Typography>
//                 </React.Fragment>
//               ) : (
//                 <React.Fragment>
//                   {getStepContent(activeStep)}
//                   <div className={classes.buttons}>
//                     {activeStep !== 0 && (
//                       <Button
//                         onClick={this.handleBack}
//                         className={classes.button}
//                       >
//                         Back
//                       </Button>
//                     )}
//                     <Button
//                       variant="contained"
//                       color="primary"
//                       onClick={this.handleNext}
//                       className={classes.button}
//                     >
//                       {activeStep === steps.length - 1 ? "Place order" : "Next"}
//                     </Button>
//                   </div>
//                 </React.Fragment>
//               )}
//             </React.Fragment>
//           </Paper>
//         </main>
//       </React.Fragment>
//     );
//   }
// }

// Checkout.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(Checkout);

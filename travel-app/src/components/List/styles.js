// // import { makeStyles } from '@mui/styles';

// // export default makeStyles((theme) => ({
// //   formControl: {
// //     margin: theme.spacing(1), minWidth: 120, marginBottom: '30px',
// //   },
// //   selectEmpty: {
// //     marginTop: theme.spacing(2),
// //   },
// //   loading: {
// //     height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
// //   },
// //   container: {
// //     padding: '25px',
// //   },
// //   marginBottom: {
// //     marginBottom: '30px',
// //   },
// //   list: {
// //     height: '75vh', overflow: 'auto',
// //   },
// // }));


// import { makeStyles } from '@mui/styles';

// export default makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(1, 0), // vertical spacing only
//     minWidth: 200,
//     width: '100%',
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
//   loading: {
//     height: '600px',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   container: {
//     padding: theme.spacing(2),
//     display: 'flex',
//     flexDirection: 'column',
//     gap: theme.spacing(2),
//   },
//   marginBottom: {
//     marginBottom: theme.spacing(2),
//   },
//   list: {
//     height: '75vh',
//     overflowY: 'auto',
//     paddingRight: theme.spacing(1),
//   },
// }));


import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
  },
  formControl: {
    minWidth: 200,
    width: '100%',
  },
  list: {
    // height: '75vh',
    // overflowY: 'auto',
    // paddingRight: theme.spacing(1),
    maxHeight: '75vh',
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
  },
}));


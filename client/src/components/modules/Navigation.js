// import React from "react";
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import GoogleLogin, { GoogleLogout } from "react-google-login";
// import { Link } from "@reach/router";


// const GOOGLE_CLIENT_ID = "810319868270-g5a4qu2k272mtcdu5b374h2qo1lrlm7p.apps.googleusercontent.com";

// const Navigation = ({ userId, handleLogin, handleLogout }) => {
//     return (
//         <>
//         <Navbar collapseOnSelect fixed = 'top' expand = 'sm' bg = 'dark' variant = 'dark'>
//             <Container>
//                 <Navbar.Toggle aria-controls = 'responsive-navbar-nav' />
//                 <Navbar.Collapse id = "responsive-navbar-nav" >
//                     <Nav>

//                     <Link to="/" className="NavBar-link">
//           home
//         </Link>
//         {userId && (
//           // <Link to={`/profile/${userId}`} className="NavBar-link">
//           <Link to={`/profile/`} className="NavBar-link">
//             profile
//           </Link>
//         )}
//         {userId && (
//           <Link to={`/edit-profile/`} className="NavBar-link">
//             edit profile
//           </Link>
//         )}
//         {userId && (
//           <Link to={`/bubblepage/`} className="NavBar-link">
//             bubble page
//           </Link>
//         )}
//         {userId ? (
//           <Link to={"/logout/"} className="NavBar-link">
//             <GoogleLogout
//               clientId={GOOGLE_CLIENT_ID}
//               buttonText="Logout"
//               onLogoutSuccess={handleLogout}
//               onFailure={(err) => console.log(err)}
//               className="NavBar-link NavBar-login"
//             />
//           </Link>
//         ) : (
//           <GoogleLogin
//             clientId={GOOGLE_CLIENT_ID}
//             buttonText="Login"
//             onSuccess={handleLogin}
//             onFailure={(err) => console.log(err)}
//             className="NavBar-link NavBar-login"
//           />
//         )}
//       {/* </div>

//                         <Nav.Link href = '/'> Home </Nav.Link>
//                         {userId && ( <Nav.Link href = '/profile/'> Profile </Nav.Link> )}
//                         {userId && ( <Nav.Link href = '/edit-profile/'> Edit Profile </Nav.Link> )}
//                         {userId && ( <Nav.Link href = '/bubblepage/'> Bubble Page </Nav.Link> )}
//                         { userId ? (
//                             <Nav.Link href = '/logout/'>
//                                 <GoogleLogout
//                                     clientId={GOOGLE_CLIENT_ID}
//                                     buttonText="Logout"
//                                     onLogoutSuccess={handleLogout}
//                                     onFailure={(err) => console.log(err)}
//                                     />
//                             </Nav.Link>
//                         ) : (
//                             <GoogleLogin
//                                 clientId={GOOGLE_CLIENT_ID}
//                                 buttonText="Login"
//                                 onSuccess={handleLogin}
//                                 onFailure={(err) => console.log(err)}
//                             />
//                         )} */}
//                         </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//         </>
//     );
// }

// export default Navigation;
// import React from "react";
// import SocialCard from "./SocialCard.js";
// import { NewSocial } from "./NewPostInput.js";

// /**
//  * @typedef ContentObject
//  * @property {string} _id of story/comment
//  * @property {string} creator_name
//  * @property {string} content of the story/comment
//  */

// /**
//  * Component that holds all the comments for a story
//  *
//  * Proptypes
//  * @param {ContentObject[]} comments
//  * @param {ContentObject} story
//  */
// const SocialBlock = (props) => {
//   return (
//     <div>
//       <div>
//         {props.socials.map((social) => (
//           <SocialCard
//             key={`SingleSocial_${social._id}`}
//             _id={social._id}
//             userId = { props.userId }
//             content = { social.content }
//             type = { social.type }
//           />
//         ))}
//         {props.userId && (
//           <NewComment storyId={props.story._id} addNewComment={props.addNewComment} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default CommentsBlock;
import React from "react";
import Banksy from "../../images/banksy.png";
import './MoviesCard.css'
export default function MoviesCard() {
  //   const isOwn = card.owner === currentUser._id;
  //   const isLiked = card.likes.some(id => id === currentUser._id);

  //   const cardLikeButtonClassName = `card__like ${
  //     isLiked && "card__like_active"
  //   }`;

  // const movies = [
  //   { id: 1, title: "В погоне за Бенкси", duration: "1ч17м" },
    
  // ];

  return (
    <div className="card">
      <img className="card__photo" src={Banksy} alt="banksy" />
      <div className="card__table">
        <h2 className="card__name">В погоне за Бенкси</h2>
        <p className="card__duration">1ч17м</p>
      </div>
    </div>
  );
}

// return (
//     <div className="card">
//       <img
//         className="card__photo"
//         src={card.link}
//         alt={card.name}
//         onClick={handleClick}
//       />
//       <div className="card__table">
//         <h2 className="card__name">{props.card.name}</h2>
//         <div className="card__like-container">
//           <button
//             className={cardLikeButtonClassName}
//             aria-label="Нравится"
//             type="button"
//             onClick={handleLikeClick}
//             src={props.card.link}
//           />
//           <p className="card__like-counter">{props.card.likes.length}</p>
//         </div>
//       </div>
//       {isOwn && (
//         <button
//           className="card__delete"
//           aria-label="Удалить"
//           type="button"
//           onClick={handleDeleteClick}
//         />
//       )}
//     </div>
//   );

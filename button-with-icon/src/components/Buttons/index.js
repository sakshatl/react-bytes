import { useState } from "react";
import { CircleNotch, Trash as TrashIcon } from "phosphor-react";
import './button.css';


function Button() {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleClick = () => {
    setIsDeleting(true);
    setTimeout(() => setIsDeleting(false), 3000);
  }

  return (
    <button onClick={handleClick} className="button">
      <span className="button-text">
        {
          isDeleting ? "Deleting" : "Delete"
        }
      </span>
      {
        isDeleting ? 
          <CircleNotch size={20} className="button-icon button-icon-loading" /> : 
          <TrashIcon size={20} className="button-icon" />
      }
    </button>
  )
}

export default Button;
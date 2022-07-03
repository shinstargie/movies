import React from "react";
import Modal from "react-modal";
import { modalStyles } from "./styles/customStyles";

interface Props {
  toggleModal: boolean;
  closeModal: () => void;
  content: JSX.Element;
}

const CustomModal: React.FC<Props> = ({ toggleModal, closeModal, content }) => {
  return (
    <>
      <Modal
        style={modalStyles}
        isOpen={toggleModal}
        onRequestClose={closeModal}
        onAfterOpen={() => null}
      >
        {content}
      </Modal>
    </>
  );
};

export default CustomModal;

/* 

loading?: boolean;  
  movie?: Movie | null | undefined;
  matchedGenres?: Genre[] | null;
  data?: Movie | null | undefined;  
  children?: JSX.Element;

 loading,
  movie,
  data,
  matchedGenres,
  children,

  {movie && (
          <>
            <TrailerModal
              movie={movie}
              loading={loading}
               trailerGenres={matchedGenres}
              closeModal={closeModal}
            />
          </>
        )}

*/

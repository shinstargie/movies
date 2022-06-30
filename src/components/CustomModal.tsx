import React, { useContext } from "react";
import { Movie, Genre } from "./_types";
import Modal from "react-modal";
import { modalStyles } from "./styles/customStyles";
import TrailerModal from "./TrailerModal";

interface Props {
  loading: boolean;
  toggleModal: boolean;
  closeModal: () => void;
  movie: Movie | null | undefined;
  matchedGenres: Genre[] | null;
}

const CustomModal: React.FC<Props> = ({
  loading,
  toggleModal,
  closeModal,
  movie,
  matchedGenres,
}) => {
  return (
    <>
      <Modal
        style={modalStyles}
        isOpen={toggleModal}
        onRequestClose={closeModal}
      >
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
      </Modal>
    </>
  );
};

export default CustomModal;

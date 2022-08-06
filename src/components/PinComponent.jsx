import { useState } from "react";
import Modal from "react-modal";
import PinInput from "react-pin-input";
import { useDispatch } from "react-redux";
import { startModifyPrestamo } from "../store/slices/prestamos/prestamoThunks";

export const PinComponent = ({ isModalOpen, setIsModalOpen, data }) => {

  const [pin, setPin] = useState("")
  const dispatch = useDispatch()

  const handleCloseModal = () => {
      setIsModalOpen( false )
  }

  const handleConfirm = () => {
    if( !pin ) return

    data.pin = pin

    dispatch( startModifyPrestamo( data ) )
    setIsModalOpen(false)

  }

  return (
    <Modal isOpen={isModalOpen} ariaHideApp={false} id="modal-pin">
        <h4>Ingrese el pin</h4>
      <PinInput
        length={4}
        initialValue=""
        secret
        onChange={(value, index) => setPin( value )}
        type="numeric"
        inputMode="number"
        style={{ padding: "10px" }}
        inputStyle={{ borderColor: "white" }}
        inputFocusStyle={{ borderColor: "lightgreen" }}
        autoSelect={true}
        regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
      />
      <div className="row p-3">
        <div className="col-md-6 col-sm-6">
          <button className="btn btn-danger" onClick={handleCloseModal}>Cancelar</button>
        </div>
        <div className="col-md-6 col-sm-6">
          <button className="btn btn-success" onClick={ handleConfirm }>Confirmar</button>
        </div>
      </div>
    </Modal>
  );
};

import Modal from "react-modal";
import PinInput from "react-pin-input";

export const PinComponent = ({ isModalOpen }) => {

  return (
    <Modal isOpen={isModalOpen} ariaHideApp={false} id="modal-pin">
        <h4>Ingrese el pin</h4>
      <PinInput
        length={4}
        initialValue=""
        secret
        onChange={(value, index) => {}}
        type="numeric"
        inputMode="number"
        style={{ padding: "10px" }}
        inputStyle={{ borderColor: "white" }}
        inputFocusStyle={{ borderColor: "lightgreen" }}
        onComplete={(value, index) => {}}
        autoSelect={true}
        regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
      />
      <div className="row p-3">
        <div className="col-md-6 col-sm-6">
          <button className="btn btn-danger">Cancelar</button>
        </div>
        <div className="col-md-6 col-sm-6">
          <button className="btn btn-success">Confirmar</button>
        </div>
      </div>
    </Modal>
  );
};

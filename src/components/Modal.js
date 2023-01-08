function Modal(props) {

    function CancelHandler() {
        props.onDefault();
    }

    
    function ConfirmHandler() {
        props.onConfirm();
    }

    return <div className="modal">
        <p>Are you sure?</p>
        <button className="btn btn-alt" onClick={CancelHandler}>Cancel</button>
        <button className="btn" onClick={ConfirmHandler}>Confirm</button>
    </div>
}

export default Modal;
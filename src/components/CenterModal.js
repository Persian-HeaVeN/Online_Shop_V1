
import { Modal, Button } from "react-bootstrap";
import { faShoppingCart as shoppingIcon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux"


export function CenteredModal(props) {

    const selector = useSelector((state)=> state.modal);

    return (
      <Modal
        {...props}
        size="lmd"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
        <FontAwesomeIcon className="mx-auto mb-4" icon={shoppingIcon} style={{color:"#7CFC00", fontSize:"3rem", display:"flex"}} />
          <p style={{textAlign:"center"}}>
            {selector.text}
          </p>
          <Button style={{display:"flex"}} className="mx-auto mt-4" onClick={props.onHide}>Ok</Button>
        </Modal.Body>
      </Modal>
    );
  }
  
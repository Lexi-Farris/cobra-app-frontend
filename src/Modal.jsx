import "./Modal.css";

export function Modal(props) {
  if (props.show) {
    return (
      <div className="modal-background">
        <section className="modal-main">
          {props.children}
          <button
            className="close text-sm text-interesting-orange-200 p-2 bg-none border-none absolute top-0 right-0.2em"
            type="button"
            onClick={props.onClose}
          >
            &times;
          </button>
        </section>
      </div>
    );
  }
}

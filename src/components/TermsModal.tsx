import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ReactMarkdown from "react-markdown";

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
  hasScrolledToBottom: boolean;
  onScroll: (event: React.UIEvent<HTMLElement>) => void;
  onAccept: () => void;
}

const TermsModal = ({
  isOpen,
  onClose,
  hasScrolledToBottom,
  onScroll,
  onAccept,
}: TermsModalProps) => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch("/Contributor-Agreement.md")
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <Modal
      show={isOpen}
      onHide={onClose}
      aria-labelledby="contributor-agreement"
      size="lg"
      centered
      scrollable
    >
      <Modal.Body
        onScroll={onScroll}
        style={{ maxHeight: "60vh", overflowY: "auto", padding: "1.8rem" }}
      >
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            onClose();
            onAccept();
          }}
          disabled={!hasScrolledToBottom}
          variant="primary"
        >
          Accept Terms
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TermsModal;

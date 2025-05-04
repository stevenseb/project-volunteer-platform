import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { mockDB } from "../utils/mockDB";

interface FormData {
  name: string;
  skills: string;
  phone: string;
  slackHandle: string;
  languages: string;
  timezone: string;
}

const SignupPage: React.FC = () => {
  const { user, isLoading } = useAuth0();
//   const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    skills: "",
    phone: "",
    slackHandle: "",
    languages: "",
    timezone: "",
  });
  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState<boolean>(false);
  const [hasReadTerms, setHasReadTerms] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);

  // Redirect if user already completed signup (using mockDB)
  useEffect(() => {
    if (!isLoading && user?.sub && mockDB.getSignupStatus(user.sub)) {
      navigate("/dashboard", { replace: true });
    }
  }, [user, isLoading, navigate]);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setSubmitting(true);
    try {
      if (user?.sub) {
        mockDB.setSignupStatus(user.sub, true);
        mockDB.storeUserData(user.sub, formData);
      }
      navigate("/dashboard", { replace: true });
    } catch (error) {
      setSubmitting(false);
      console.error("Error saving user data:", error);
      alert("There was an error completing your signup. Please try again.");
    }
  };

  const validateForm = (): boolean => {
    // Add form validation logic here
    return true;
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const { scrollTop, scrollHeight, clientHeight } = target;
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      setHasScrolledToBottom(true);
    }
  };

  return (
    <div style={{ marginTop: "200px", maxWidth: "600px", marginLeft: "auto", marginRight: "auto", padding: "20px" }}>
      <h1>Complete Your Signup</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name (First Last):</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            pattern="^[A-Za-z]+ [A-Za-z]+$"
            required
          />
        </div>
        <div>
          <label htmlFor="skills">Skills:</label>
          <input
            type="text"
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="slackHandle">Slack Handle:</label>
          <input
            type="text"
            id="slackHandle"
            name="slackHandle"
            value={formData.slackHandle}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="languages">Languages Spoken:</label>
          <input
            type="text"
            id="languages"
            name="languages"
            value={formData.languages}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="timezone">Time Zone:</label>
          <select
            id="timezone"
            name="timezone"
            value={formData.timezone}
            onChange={handleInputChange}
          >
            <option value="">Select a time zone</option>
            {/* ...all your timezone options... */}
            <option value="America/Los_Angeles">(UTC-08:00) America/Los_Angeles</option>
            <option value="America/New_York">(UTC-05:00) America/New_York</option>
            <option value="Europe/London">(UTC+00:00) Europe/London</option>
            {/* ...add the rest as needed... */}
          </select>
        </div>
        <div>
          <p>Sample summary of terms/agreement.</p>
          <Button variant="link" type="button" onClick={() => setModalIsOpen(true)}>
            Read Full Terms
          </Button>
        </div>
        <div>
          <input
            type="checkbox"
            id="termsAccepted"
            checked={termsAccepted}
            onChange={() => setTermsAccepted(!termsAccepted)}
            disabled={!hasReadTerms}
          />
          <label htmlFor="termsAccepted">I accept the terms and conditions</label>
        </div>
        <Button type="submit" disabled={!termsAccepted || submitting} variant="primary">
          {submitting ? "Completing..." : "Complete Signup"}
        </Button>
      </form>

      <Modal
        show={modalIsOpen}
        onHide={() => setModalIsOpen(false)}
        aria-labelledby="terms-and-conditions"
        size="lg"
        centered
        scrollable
      >
        <Modal.Header closeButton>
          <Modal.Title id="terms-and-conditions">Terms and Conditions</Modal.Title>
        </Modal.Header>
        <Modal.Body onScroll={handleScroll} style={{ maxHeight: "60vh", overflowY: "auto" }}>
          {/* Add terms content here */}
          <div style={{ height: "1000px" }}>
            {/* Placeholder content to enable scrolling */}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              setModalIsOpen(false);
              setHasReadTerms(true);
            }}
            disabled={!hasScrolledToBottom}
            variant="primary"
          >
            Close Terms
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SignupPage;

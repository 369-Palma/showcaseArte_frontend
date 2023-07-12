import { Form, Button, Col } from "react-bootstrap";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import CustomNav from "./CustomNav";

const ContactForm = () => {
  const inviaEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        `service_uf2isy6`,
        `template_j8faovd`,
        e.target,
        `3cG7_5IGDFHm5po4E`
      )
      .then(
        (result) => {
          toast.success("Email inviata con successo");
          console.log(result.text);
        },
        (error) => {
          toast.error("Invio Email non riuscito");
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <Col className="titolo w-50 mx-auto mt-3">
        <h2 className="text-center p-3 margineH2 mx-auto w-100">
          {" "}
          Contact me{" "}
        </h2>
      </Col>

      <Form
        onSubmit={inviaEmail}
        className="formBox p-5 mx-auto border rounded-2"
      >
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            required
            placeholder="Insert your name"
            autoComplete="off"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            required
            placeholder="Insert your email"
            autoComplete="off"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message:</Form.Label>
          <Form.Control
            type="textarea"
            name="message"
            required
            placeholder="Write here your message"
            autoComplete="off"
            rows={5}
          />
        </Form.Group>
        <Button className="bottone mt-3" variant="primary" type="submit">
          SEND
        </Button>
      </Form>
    </>
  );
};

export default ContactForm;

import { Col, Form } from "react-bootstrap";

export default function TextField({
  text,
  placeholder,
  type,
  size,
  Component = Form.Control,
  value,
  onChange,
}) {
  let id = `input${text}`;
  return (
    <Col md={size}>
      <Form.Label htmlFor={id} column="sm-2">
        {text}
      </Form.Label>
      <Component 
      type={type} 
      id={id} 
      placeholder={placeholder}
      value={value}
      onChange={(event)=>{
        onChange(event.target.value)
      }} />
    </Col>
  );
}
//Now any time the value of this Component changes, the onChange event will trigger a call 
//to the function we accept as a prop of onChange passing in the current value of the field
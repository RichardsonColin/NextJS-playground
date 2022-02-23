import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
// components
import Card from '../ui/Card';
// style
import styled from 'styled-components';

NewMeetupForm.propTypes = {
  onAddMeetup: PropTypes.func.isRequired,
};

export default function NewMeetupForm(props) {
  const [disabled, setDisabled] = useState(false);
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    // prevent multiple submits
    setDisabled(true);

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <Form onSubmit={submitHandler}>
        <InputWrapper>
          <Label htmlFor='title'>Meetup Title</Label>
          <Input type='text' required id='title' ref={titleInputRef} />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor='image'>Meetup Image</Label>
          <Input type='url' required id='image' ref={imageInputRef} />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor='address'>Address</Label>
          <Input type='text' required id='address' ref={addressInputRef} />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor='description'>Description</Label>
          <TextArea
            id='description'
            required
            rows='5'
            ref={descriptionInputRef}
          ></TextArea>
        </InputWrapper>
        <ButtonWrapper>
          <Button disabled={disabled}>Add Meetup</Button>
        </ButtonWrapper>
      </Form>
    </Card>
  );
}

const Form = styled.form`
  padding: 1rem;
`;
const InputWrapper = styled.div`
  margin-bottom: 0.5rem;
`;
const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;
const Input = styled.input`
  display: block;
  font: inherit;
  border-radius: 4px;
  border: 1px solid #ccc;
  padding: 0.25rem;
  width: 100%;
`;
const TextArea = styled.textarea`
  display: block;
  font: inherit;
  border-radius: 4px;
  border: 1px solid #ccc;
  padding: 0.25rem;
  width: 100%;
`;
const ButtonWrapper = styled.div`
  margin-top: 1rem;
  text-align: right;
`;
const Button = styled.button`
  font: inherit;
  cursor: pointer;
  background-color: #77002e;
  color: white;
  padding: 0.5rem 1.5rem;
  border: 1px solid #77002e;
  border-radius: 4px;
  font-weight: bold;

  &:hover,
  &:active {
    background-color: #a50e48;
    border-color: #a50e48;
  }
`;

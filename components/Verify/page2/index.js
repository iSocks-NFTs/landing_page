import React,{ useState, useMemo } from "react";
import {
  FormContainer,
  Form,
  Label,
  FormGroup,
  Input,
  Button,
} from "../style";
import { motion } from "framer-motion";
import countryList from "react-select-country-list";
import CountrySelector from "../../CountrySelector";

const Step2 = ({ page, setPage, formData, setFormData }) => {
  const inputRef = React.useRef();
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
    setFormData({...formData,countryOfResidence:value})
  };

  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <FormContainer
      marginTop="1rem"
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Form>
        <FormGroup>
          <Label htmlFor="emailAddress" fontWeight="400">
            Email
          </Label>
          <Input
            id="emailAddress"
            value={formData.emailAddress}
            onChange={(e) =>
              setFormData({ ...formData, emailAddress: e.target.value })
            }
            ref={inputRef}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="firstName" fontWeight="400">
            First Name
          </Label>
          <Input
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            id="firstName"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="lastName" fontWeight="400">
            Last Name
          </Label>
          <Input
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="countryOfResidence" fontWeight="400">
            Country of Residence
          </Label>
          <CountrySelector options={options} value={value} changeHandler={changeHandler} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="nationality" fontWeight="400">
            Nationality
          </Label>
          <Input
            id="nationality"
            value={formData.nationality}
            onChange={(e) =>
              setFormData({ ...formData, nationality: e.target.value })
            }
          />
        </FormGroup>
        <Button marginTop="1rem" onClick={() => setPage(page + 1)}>
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default Step2;

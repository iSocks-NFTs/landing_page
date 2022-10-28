import React from "react";
import {
  FormContainer,
  Form,
  CheckBoxContainer,
  CheckBox,
  Label,
  FormGroup,
  Input,
  Button,
} from "../style";
import { motion } from "framer-motion";
import { UD } from "../../Form";
import NonSSRWrapper from "../../no-ssr-wrapper";
import * as UAuthWeb3Modal from '@uauth/web3modal'
import UAuthSPA from '@uauth/js'
import WalletConnectProvider from '@walletconnect/web3-provider'
import Web3Modal from 'web3modal'
import { AuthContext } from "../../../context/authContext";

// These options are used to construct the UAuthSPA instance.
const uauthOptions = {
  clientID: "8d942179-0841-496c-a1d4-a6c87b19636b",
  redirectUri: "https://isocksv2.netlify.app/verify",
  scope: "openid"
}

const providerOptions = {
  // Currently the package isn't inside the web3modal library. For now,
  // users must use this libary to create a custom web3modal provider.

  // All custom `web3modal` providers must be registered using the "custom-"
  // prefix.
  "custom-uauth": {
    // The UI Assets
    display: UAuthWeb3Modal.display,

    // The Connector
    connector: UAuthWeb3Modal.connector,

    // The SPA libary
    package: UAuthSPA,

    // The SPA libary options
    options: uauthOptions,
  },

  // For full functionality we include the walletconnect provider as well.
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: "24a33794805b4a2c962e674f31277ba4",
    },
  },

  // Include any other web3modal providers here
};

const Step3 = ({ page, setPage, formData, setFormData }) => {
  const inputRef = React.useRef();
  const {udUsername} = React.useContext(AuthContext);
  const web3modal = new Web3Modal({ providerOptions });


  // Register the web3modal so the connector has access to it.
  UAuthWeb3Modal.registerWeb3Modal(web3modal);


  async function handleLogin() {
    const provider = await web3modal.connect();
  }

  async function handleLogout() {
    if (web3modal.cachedProvider === "custom-uauth") {
      await uauth.logout();
    }
    setProvider({})
    web3modal.clearCachedProvider();
  }

  React.useEffect(() =>{
    console.log(udUsername)
  },[])
  

  return (
    <NonSSRWrapper>
      <FormContainer
        marginTop="1rem"
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Form>
          <FormGroup>
            <Label htmlFor="username" fontWeight="400">
              Choose a username
            </Label>
            <Input
              id="username"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              ref={inputRef}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="ud" fontWeight="400">
              Use your UD as a Username
            </Label>
            <UD src="/img/icons/ud.png" alt="UD Logo" />
            <Input
              id="ud"
              value={udUsername ? udUsername : ''}
              paddingLeft="15rem"
              cursor="pointer"
              onClick={handleLogin}
              readonly
            />
          </FormGroup>
          <Label htmlFor="ud" fontWeight="bolder">
            Get a UD domain here
          </Label>
          <Button onClick={() => setPage(page + 1)}>Continue</Button>
        </Form>
      </FormContainer>
    </NonSSRWrapper>
  );
};

export default Step3;

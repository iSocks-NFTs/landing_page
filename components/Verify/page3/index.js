import React from "react";
import {
  FormContainer,
  Form,
  Label,
  FormGroup,
  Input,
} from "../style";
import { Button } from "../../Form";
import { motion } from "framer-motion";
import { UD } from "../../Form";
import { useWeb3React } from "@web3-react/core";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import UAuth from "@uauth/js";
import { UAuthConnector } from "@uauth/web3-react";
import {InjectedConnector} from '@web3-react/injected-connector'
import { useAccount } from "@web3modal/react";

export const injected = new InjectedConnector({supportedChainIds: [1]})

export const walletconnect = new WalletConnectConnector({
  infuraId: "24a33794805b4a2c962e674f31277ba4",
  qrcode: true,
})

const uauth = new UAuthConnector({
  uauth: new UAuth({
    clientID: "8d942179-0841-496c-a1d4-a6c87b19636b",
    redirectUri: "https://isocksv2.netlify.app/verify",
    postLogoutRedirectUri: "https://isocksv2.netlify.app/verify",
    scope: "openid wallet",
  }),
  connectors: { injected, walletconnect },
});

const Step3 = ({ page, setPage, formData, setFormData }) => {
  const inputRef = React.useRef();
  const [ud, setUd] = React.useState("");
  const { activate,deactivate } = useWeb3React();
  const { account } = useAccount()

  async function handleLogin() {
    await activate(uauth);
  }

  async function handleLogout() {
    setUd("");
    window.localStorage.clear();
  }

  React.useEffect(() => {
    const ud = window.localStorage.getItem("username");
    if (ud !== null) {
      let domain = JSON.parse(ud);
      setUd(domain.value);
    }
  }, [account]);

  return (
    <>
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
          <FormGroup onClick={handleLogin}>
            <Label htmlFor="ud" fontWeight="400">
              Use your UD as a Username
            </Label>
            <UD src="/img/icons/ud.png" alt="UD Logo" />
            <Input
              cursorColor="transparent"
              id="ud"
              value={ud}
              paddingLeft="9rem"
              cursor="pointer"
            />
          </FormGroup>
          <Label htmlFor="ud" fontWeight="bolder">
            Get a UD domain here
          </Label>
          <Button
            type="button"
            color="var(--primary-brand)"
            borderColor="#E3E5E8"
            backgroundColor="transparent"
            hoverBorderColor="#fff"
            hoverBackgroundColor="#E3E5E8"
            onClick={() => handleLogout()}
          >
            Clear Domain
          </Button>
          <Button type="button">Continue</Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default Step3;

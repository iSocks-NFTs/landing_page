import React from "react";
import Head from "next/head";
import Router from "next/router";
import Layout from "../../../layouts/admin_layout";
import { Container, Heading, Span } from "../../../components/Dashboard/style";
import {
  Card,
  CardContainer,
  OptionDescription,
  Option,
  Circle,
  Image,
} from "../../../components/BuyOption/style";
import { GrMoney } from "react-icons/gr";
import { AiOutlineQrcode } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { useEffect } from "react";
import {useCookies} from 'react-cookie';



const Dashboard = () => {
  const router = Router;
  const [id,setId] = React.useState();
  const [cookie,setCookie,removeCookie] = useCookies(["users"]);

  useEffect(() =>{
    setId(cookie.user)
  },[])


  return (
    <Layout>
      <Head>
        <title>iSocks | Admin Dashboard</title>
      </Head>
      <Container height="fit-content">
        <Heading>
          <Span>Welcome</Span> Admin
        </Heading>
        <Heading fontWeight="300">Manage iSocks NFT Systems</Heading>
        <CardContainer>
          <Card
            justifyContent="center"
            bgColor="var(--primary-brand)"
            color="#fff"
            cursor="pointer"
          >
            <Circle>
              <Image src="/img/logo/isock.svg" alt="Binance" />
            </Circle>
            <Option>Verified Users</Option>
            <OptionDescription>
              View list of Verified iSocks Users to review & manage them.
            </OptionDescription>
          </Card>
          <Card
            justifyContent="center"
            cursor="pointer"
            onClick={() => router.push("/dashboard/admin/transactions")}
          >
            <Circle>
              <GrMoney />
            </Circle>
            <Option>Transactions</Option>
            <OptionDescription>
              Review and Confirm payment of NFTs
            </OptionDescription>
          </Card>
          <Card
            justifyContent="center"
            bgColor="var(--primary-brand)"
            color="#fff"
            cursor="pointer"
            onClick={() => Router.push("/dashboard/admin/qr")}
          >
            <Circle>
              <AiOutlineQrcode color="var(--primary-brand)" />
            </Circle>
            <Option>QR Code Generation</Option>
            <OptionDescription>
              Generate, Edit & Delete QR Codes
            </OptionDescription>
          </Card>
          <Card justifyContent="center" cursor="pointer" onClick={() => router.push(`/dashboard/admin/account/${id}`) }>
            <Circle>
              <FiSettings />
            </Circle>
            <Option>Manage Account</Option>
            <OptionDescription>
              Review and Change Account Settings
            </OptionDescription>
          </Card>
        </CardContainer>
      </Container>
    </Layout>
  );
};

export default Dashboard;

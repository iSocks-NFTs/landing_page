import Router from "next/router";
import {
  Container,
  Heading,
  Text,
} from "../../../../components/Dashboard/style";
import Table from "../../../../components/Dashboard/Table";
import { Button, ButtonContainer } from "../../../../components/Form";
import Layout from "../../../../layouts/admin_layout";

export async function getServerSideProps() {
  // Fetch Data
  const response = await fetch("http://localhost:1337/api/find/transaction");
  let data = await response.json();
  return {
    props: { data }, // will be passed to the page component as props
  };
}

const Transaction = ({ data }) => {
  const router = Router;
  return (
    <Layout>
      <Container height="100vh">
        <Heading>Transaction Data Feed</Heading>
        {data.length !== 0 ? (
          <Table transactions={data} />
        ) : (
          <Text textAlign="center">No Transactions Available</Text>
        )}
        <ButtonContainer>
          <Button onClick={() => router.back()}>Back</Button>
        </ButtonContainer>
      </Container>
    </Layout>
  );
};

export default Transaction;
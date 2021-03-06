import { useEffect, useState } from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import { Fade } from ".";

const Default = ({ page }) => {
  const [isFetching, setIsFetching] = useState(true);
  const [Page, setPage] = useState(null);

  useEffect(() => {
    void (async function () {
      const _Page = await import(`./../pages/${page}`);
      const Page = _Page.default;
      setPage(() => {
        return (
          <Fade page={page}>
            <Row>
              <Col className="bg-primary p-3 rounded-3" lg="12">
                <h1 className="h1 text-capitalize text-light">{page}</h1>
              </Col>
              <Page />
            </Row>
          </Fade>
        );
      });
      setIsFetching(false);
    })();
  }, [page]);

  return isFetching ? (
    <Row>
      <Col className="text-center" lg="12">
        <Spinner size='lg' animation="border" variant="primary" />
      </Col>
    </Row>
  ) : (
    Page
  );
};

export default Default;

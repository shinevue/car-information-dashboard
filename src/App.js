import React, { useEffect, useState } from 'react';
import './App.css';
import Tabletop from 'tabletop';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import AppBar from './Components/NavBar';
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import TotalValue from './Components/TotalValue';
import AveLeaseRate from './Components/AveLeaseRate';
import TotalOutstandingLeases from './Components/TotalOutstandingLeases';
import ProfitPotential from './Components/ProfitPotential';
import BrandSaleType from './Components/BrandSaleType';
import LeaseType from './Components/LeaseType';
import ExpiringTable from './Components/ExpiringTable';
import BarchartMonthly from './Components/BarchartMonthly'; 

const publicSpreadsheetUrl =
  'https://docs.google.com/spreadsheets/d/1J7kQMOyQqGg1OYPu9b1qKzJ9Naq7vUppG93JUdSdOAQ/edit?usp=sharing';

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    function init() {
      Tabletop.init({
        key: publicSpreadsheetUrl,
        simpleSheet: true
      }).then(function(data, tabletop) {
        setItems(data);
      });
    }
    init();
  }, []);

  return (
    <div className='App'>
      <AppBar />
      <Container fluid={true} className='mt-4'>
        <Row>
          <Col lg='3' sm='6'>
            <Card>
              <CardHeader>
                <div>Total Value of Leases Outstanding</div>
              </CardHeader>
              <CardBody>
                <span>
                  $
                  <TotalValue items={items} />
                </span>
              </CardBody>
            </Card>
          </Col>
          <Col lg='3' sm='6'>
            <Card>
              <CardHeader>
                <div>Average Lease Rate Outstanding</div>
              </CardHeader>
              <CardBody>
                <span>
                  <AveLeaseRate items={items} />
                </span>
              </CardBody>
            </Card>
          </Col>
          <Col lg='3' sm='6'>
            <Card>
              <CardHeader>
                <div>Total # of Leases Outstanding</div>
              </CardHeader>
              <CardBody>
                <span>
                  {' '}
                  <TotalOutstandingLeases items={items} />{' '}
                </span>
              </CardBody>
            </Card>
          </Col>
          <Col lg='3' sm='6'>
            <Card>
              <CardHeader>
                <div> Potential Lease Portfolio Profit </div>
              </CardHeader>
              <CardBody>
                <span>
                  $<ProfitPotential items={items} />
                </span>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container fluid={true} className='mt-4'>
        <Row>
          <Col lg='6' sm='12'>
            <Card>
              <CardHeader>
                <div>Lease Summary By Brand</div>
              </CardHeader>
              <CardBody>
                <span>
                  {' '}
                  <BrandSaleType items={items} />{' '}
                </span>
              </CardBody>
            </Card>
          </Col>
          <Col lg='6' sm='12'>
            <Card>
              <CardHeader>
                <div>Lease Summary By Type</div>
              </CardHeader>
              <CardBody>
                <span>
                  {' '}
                  <LeaseType items={items} />{' '}
                </span>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container fluid={true} className='mt-4'>
        <Row>
          <Col lg='12' sm='12'>
          <Card>
            <CardHeader>
              <div>Lease Sales By Month</div>
            </CardHeader>
            <CardBody>
              <span> <BarchartMonthly items={items}/> </span>
            </CardBody>
            </Card>
            </Col>
        </Row>
      </Container>
      <Container fluid={true} className='mt-4'>
        <Row>
          <Col lg='12' sm='12'>
            <Card>
              <CardHeader>
                <div>Expiring Leases</div>
              </CardHeader>
              <CardBody>
                <span>
                  {' '}
                  <ExpiringTable items={items} />{' '}
                </span>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;

import { Container, Row, Col, Accordion } from 'react-bootstrap'

import { faq } from '../data/index'
import { useNavigate } from 'react-router-dom';

const ProjectComponent = () => {
    let navigate = useNavigate();
    return (
        <div className='faq'>
            <Container>
                <Row>
                    <Col>
                        <h1 className='text-center fw-bold'>Project <span className='turu'>XI PPLG 2</span></h1>
                        <p className='prjk text-center'>
                            Ayo kita lihat semua project kelas XI PPLG 2 yang bermacam-macam,<br />
                            Berikut merupakan project yang telah diselesaikan.<br />
                            <span>Pertanyaan yang sering ditanyakan :</span>
                        </p>
                    </Col>
                </Row>
                <Row className='row-cols-lg-2 row-cols-1 g-4 pt-5'>
                    {faq.map((data) => {
                        return (
                            <Col key={data.id}>
                                <Accordion className='shadow-sm'>
                                    <Accordion.Item eventKey={data.eventKey}>
                                        <Accordion.Header>{data.title}</Accordion.Header>
                                        <Accordion.Body>
                                            {data.desc}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Col>
                        );
                    })}
                </Row>
                <Row>
                    <Col className='buton'>
                        <button className='btn btn-success rounded-5 btn-lg' onClick={() => navigate('/Project')}>
                            Lihatlah project kami <i className='fa-solid fa-chevron-right ms-1'></i>
                        </button>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default ProjectComponent
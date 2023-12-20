import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import { ProjectItems } from '../data/index';

const ProjectPage = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState({});
    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [modalSlideIndex, setModalSlideIndex] = useState(1);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleOpenModal = (projectId) => {
        const project = ProjectItems.find((item) => item.id === projectId);
        setSelectedProject(project);
        setShowModal(true);
        setModalSlideIndex(1);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleModalSlideChange = (n) => {
        setModalSlideIndex((prevIndex) => {
            let newIndex = prevIndex + n;
            if (newIndex < 1) {
                newIndex = selectedProject.images.length;
            } else if (newIndex > selectedProject.images.length) {
                newIndex = 1;
            }
            return newIndex;
        });
    };

    const groupedImages = {};
    ProjectItems.forEach((item) => {
        if (!groupedImages[item.category]) {
            groupedImages[item.category] = [];
        }
        groupedImages[item.category].push(item);
    });

    const totalPages = Math.ceil(
        Object.keys(groupedImages).reduce(
            (total, category) => total + Math.ceil(groupedImages[category].length / itemsPerPage),
            0
        )
    );

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const renderSlideshowImages = () => {
        if (!selectedProject || !selectedProject.images || selectedProject.images.length === 0) {
            return null;
        }

        return (
            <div>
                <div className="mySlides">
                    <img src={selectedProject.images[modalSlideIndex - 1]} alt={`Gambar ${selectedProject.caption}`} style={{ width: '100%' }} />
                    <div className="w3-center w3-container w3-section w3-large w3-text-white w3-display-bottommiddle">
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            {/* Slideshow navigation controls */}
                            <button className="btn btn-primary" onClick={() => handleModalSlideChange(-1)}>
                                Previous
                            </button>
                            <button className="btn btn-primary" onClick={() => handleModalSlideChange(1)}>
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="ProjectPage">
            <header className="w-100 min-vh-100 d-flex align-items-center">
                <Container>
                    <Row className='judul'>
                        <Col>
                            <h1 className='text-center fw-bold'>ALL Project <span className='turu'>PPLG 2 ANGKATAN 15</span></h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="cari">
                                <input type="text" placeholder="Cari Nama Sertifikat" value={searchTerm} onChange={handleSearchChange} />
                                <button className="btn btn-success rounded-end rounded-0">Search</button>
                            </div>
                        </Col>
                    </Row> 
                    <>
                        {Object.keys(groupedImages).map((category, index) => (
                            <div key={index}>
                                <h2 className="text-center pt-4">{category}</h2>
                                <Row className='pt-4'>
                                    {groupedImages[category]
                                        .filter((data) => {
                                            const searchRegex = new RegExp(searchTerm, 'i');
                                            return searchRegex.test(data.caption) || searchRegex.test(data.description) || searchRegex.test(data.name);
                                        })
                                        .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                                        .map((data) => (
                                            <Col key={data.id} md={4} className="mb-4">
                                                <div className="card-container">
                                                    <div className="card">
                                                        <img src={data.images ? data.images[0] : data.image} alt={`Gambar ${data.caption}`} />
                                                        <div className="card-body">
                                                            <div className="card-text fw-bold">{data.caption}</div>
                                                            <h5>{data.name}</h5>
                                                            <button className="btn btn-primary " onClick={() => handleOpenModal(data.id)}>Lihat</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        ))}
                                </Row>
                            </div>
                        ))}
                    </>

                    {/* Pagination */}
                    <div className='pagina'>
                        <Row className="justify-content-center">
                            <Col>
                                <Button
                                    variant="primary"
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    disabled={currentPage === 1}
                                >
                                    {'< Sebelumnya'}
                                </Button>{' '}

                                {Array.from({ length: totalPages }, (_, index) => (
                                    <Button
                                        key={index + 1}
                                        variant={currentPage === index + 1 ? 'primary' : 'outline-primary'}
                                        onClick={() => handlePageChange(index + 1)}
                                    >
                                        {index + 1}
                                    </Button>
                                ))}

                                <Button
                                    variant="primary"
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                >
                                    {'Berikutnya >'}
                                </Button>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </header>

            {/* Modal */}
            <Modal show={showModal} onHide={handleCloseModal} dialogClassName="modal-lg">
                <Modal.Header closeButton>
                    <Modal.Title>{selectedProject.caption}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="w3-content w3-display-container" style={{ maxWidth: '800px' }}>
                        {renderSlideshowImages()}
                    </div>
                    <p>{selectedProject.description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="btn btn-primary" onClick={handleCloseModal}>
                        Tutup
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ProjectPage;

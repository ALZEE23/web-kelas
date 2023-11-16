import { Container, Row, Col } from 'react-bootstrap'
import { Items } from '../data/index'

const ProjectPage1 = () => {
    // const ProjectItems = [
    //     { id: 1, image: '/src/image/web.png', caption: 'Website penghasil cuan (Tuyul)' },
    //     { id: 2, image: '/src/image/web.png', caption: 'Judul website' },
    //     { id: 3, image: '/src/image/web.png', caption: 'Judul website' },
    //     { id: 4, image: '/src/image/web.png', caption: 'Judul website' },
    //     { id: 5, image: '/src/image/web.png', caption: 'Judul website' },
    //     { id: 6, image: '/src/image/web.png', caption: 'Judul website' },
    //     { id: 7, image: '/src/image/web.png', caption: 'Judul website' },
    //     { id: 8, image: '/src/image/web.png', caption: 'Judul website' },
    //     { id: 9, image: '/src/image/web.png', caption: 'Judul website' },
    //     // Tambahkan item galeri sesuai kebutuhan Anda
    // ];
    // Group images by category
    const groupedImages = {};
    Items.forEach((item) => {
        if (!groupedImages[item.category]) {
            groupedImages[item.category] = [];
        }
        groupedImages[item.category].push(item);
    });
    return (
        <div className="ProjectPage">
            <header className="w-100 min-vh-100 d-flex align-items-center">
                <Container>
                    <Row className='judul'>
                        <Col>
                            <h1 className='text-center fw-bold'>ALL Project <span className='turu'>XI PPLG 2</span></h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="cari">
                                <input type="text" placeholder="Cari judul project, deskripsi, nama pembuat...." />
                                <button className="btn btn-success rounded-end rounded-0">Search</button>
                            </div>
                        </Col>
                    </Row>
                    <>
                        {Object.keys(groupedImages).map((category, index) => (
                            <div key={index}>
                                <h2 className="semester text-center pt-4">{category}</h2>
                                <Row className='pt-4'>
                                    {groupedImages[category].map((data) => (
                                        <Col key={data.id} md={4} className="mb-4">
                                            <div className="card-container">
                                                <div className="card">
                                                    <img src={data.image} alt={`Gambar ${data.image}`} />
                                                    <div className="card-body">
                                                        <div className="card-text fw-bold">{data.caption}</div>
                                                        <h5>{data.name}</h5>
                                                        <p>{data.description}</p>
                                                        <button className="btn btn-primary">Lihat</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        ))}
                    </>

                </Container>
            </header>
        </div>
    )
}

export default ProjectPage1
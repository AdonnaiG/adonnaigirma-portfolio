import { Col } from "react-bootstrap";

export const ProjectCard = ({title, description, imgUrl}) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx"></div>
            <img src={imgUrl}></img>
            <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
        </Col>
    )
}
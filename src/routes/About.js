import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const About = () => {
    return (
        <Container style={{ marginTop: "50px" }}>
            <strong>회사</strong>
            <p style={{ marginTop: "20px", fontSize:"12px", lineHeight: "2" }}>
                MYmSHOP은 세계 최대 규모의 패션 그룹인 Inditex의 대표 브랜드로 전세계에서 가장 큰 패션 브랜드 중 하나입니다.
                <br />
                고객은 디자인, 생산, 유통 및 판매를 모두 총괄하는 MYmSHOP의 비지니스 모델의 핵심입니다.
                <br />더 많은 정보를 원하시면 이메일로 문의주시기 바랍니다.
            </p>
            <Outlet></Outlet>
        </Container>
    );
};

export default About;

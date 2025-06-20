import { useContext } from "react";
import { Card, Col, Container, Modal, Row, Spinner, Table, Alert } from "react-bootstrap";
import { StateControll } from "../Context/StateControl";
import LevelEspresso from "./LevelEspresso";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";
import FavoriChoise from "./FavariChoise";

function Favoriler() {

    const { favoriteEspressoBeans, loadingFavoriteBeans, errorFavoriteBeans, favoriteEspressoIds, theme } = useContext(StateControll)
    if (loadingFavoriteBeans) {
        <Container className="mt-3 mb-3 p-3 shadow">
            <Spinner variant="grow" />
        </Container>
    }
    if (errorFavoriteBeans) {
        <Container className="mt-3 mb-3 p-3 shadow">
            <Alert variant={"danger"}>{errorFavoriteBeans}</Alert>
        </Container>
    }

    return (
        <>

            <Container className={`mt-3 p-3 mb-3 shadow ${theme ? 'bg-dark' : 'bg-ligth'}`} style={{ border: "2px solid #FED8B1" }}>
                <Row className="">
                    {favoriteEspressoBeans.length !== 0 ? <Col lg="12" md="6" sm="4">
                        <h2 className="text-center mb-2">Favori Espresso Çekirdeklerin</h2>
                        <Table variant={theme ? "dark" : "ligth"} className="m-2">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Espresso Çekirdekleri</th>
                                    <th>Kavrum dereceleri</th>
                                    <th>Tadım Notları</th>
                                    <th>Sil</th>

                                </tr>

                            </thead>
                            <tbody>
                                {favoriteEspressoBeans.map((favor, index) => {
                                    const isFavorite = favoriteEspressoIds.includes(favor.id);
                                    return (
                                        <tr key={favor.id}>
                                            <th>{index + 1} </th>
                                            <th>{favor.name} </th>
                                            <td>
                                                <th>{favor.roastLevels[0].level}</th>
                                                <LevelEspresso rating={favor.roastLevels[0].scale} />
                                                <th>{favor.roastLevels[1].level} </th>
                                                <LevelEspresso rating={favor.roastLevels[1].scale} />
                                            </td>
                                            <td>
                                                <td>
                                                    <th>
                                                        {favor.roastLevels[0].level}
                                                    </th>
                                                    {favor.roastLevels[0].tastingNotes}
                                                    <th> {favor.roastLevels[1].level}</th>
                                                    {favor.roastLevels[1].tastingNotes}

                                                </td>


                                            </td>
                                            <th >
                                                <FavoriChoise isFavorite={isFavorite} bean={favor.id} />
                                            </th>

                                        </tr>
                                    )

                                })}
                            </tbody>
                        </Table>
                    </Col> :
                        <Col>

                            <Alert variant={theme ? "dark" : "success"}>Henüz Favori Seçimin Yok...<br /> <Alert.Link href="/espressos">Espreeso </Alert.Link>Çekirdeklerine bak</Alert>

                        </Col>
                    }

                </Row>
            </Container>
        </>

    );
}
export default Favoriler;
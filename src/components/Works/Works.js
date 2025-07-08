import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Particle from "../Particle";
import "./Works.css";
import uptech1 from "../../Assets/Projects/P1-arch.png";
import uptech2 from "../../Assets/Projects/P1-arch-p.png";
import uptech3 from "../../Assets/Projects/P1-liste-stock.png";
import uptech4 from "../../Assets/Projects/P1-low-stock.png";
import uptech5 from "../../Assets/Projects/P1-eurika.png";
import uptech6 from "../../Assets/Projects/P1-zipkin.png";
import pfa1 from "../../Assets/Projects/pfa-1.png";
import pfa2 from "../../Assets/Projects/pfa-2.png";
import digi1 from "../../Assets/Projects/digi1.png";
import digi2 from "../../Assets/Projects/digi2.png";
import digi3 from "../../Assets/Projects/digi3.png";
import digi4 from "../../Assets/Projects/digi4.png";
import free1 from "../../Assets/Projects/free1.jpg";
import free2 from "../../Assets/Projects/free2.png";
import free3 from "../../Assets/Projects/free3.png";
import free4 from "../../Assets/Projects/free4.jpg";

function Works() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    <strong className="purple">Expérience</strong> Professionnelle
                </h1>

                {/* UPTECH */}
                <Row className="my-5">
                    <Col>
                        <h5>
                            <strong>Full Stack Java/Angular Developer at </strong>
                            <span className="purple">Uptech</span>
                        </h5>
                        <p className="location-date">
                            📍 Tunis, Tunisia &nbsp;&nbsp;&nbsp; 📅 Mars 2024 – Oct 2024
                        </p>
                        <ul>
                            <li>Développement d'une <strong>application web de gestion de stock et de commandes</strong> pour suivre les produits en temps réel.</li>
                            <li>Mise en place d’une <strong>architecture microservices</strong> avec Spring Boot (services : produits, utilisateurs, commandes, notifications, etc.).</li>
                            <li>Intégration de <strong>Keycloak</strong> pour l’authentification, la gestion des rôles (admin, gestionnaire, utilisateur) et la sécurisation des services via OAuth2/JWT.</li>
                            <li>Utilisation de <strong>RabbitMQ</strong> pour la communication asynchrone entre microservices (notifications, mise à jour des états).</li>
                            <li>Création d’une interface utilisateur responsive en <strong>Angular</strong> pour la gestion des produits, visualisation des stocks, commandes, et alertes.</li>
                            <li>Détection automatique de la position des produits via <strong>technologie RFID</strong> et visualisation sur interface Angular.</li>
                            <li>Déploiement de l’ensemble du système avec <strong>Docker</strong> et orchestration via <strong>Kubernetes</strong>.</li>
                            <li>Surveillance et analyse des logs avec <strong>ELK Stack</strong> (Elasticsearch, Logstash, Kibana).</li>
                            <li>Mise en place d’un pipeline <strong>CI/CD avec GitLab</strong> pour automatiser les tests, l’analyse de qualité (SonarQube), le build et le déploiement.</li>
                        </ul>
                        <p><strong>Technologies :</strong> Spring Boot, Angular, Keycloak, RabbitMQ, PostgreSQL, Docker, Kubernetes, ELK Stack, GitLab, SonarQube</p>
                        <div className="image-row">
                            <img src={uptech1} className="zoom-image" alt="Uptech PFE Project" />
                            <img src={uptech2} className="zoom-image" alt="Uptech PFE Project" />
                            <img src={uptech3} className="zoom-image" alt="Uptech PFE Project" />
                            <img src={uptech4} className="zoom-image" alt="Uptech PFE Project" />
                            <img src={uptech5} className="zoom-image" alt="Uptech PFE Project" />
                            <img src={uptech6} className="zoom-image" alt="Uptech PFE Project" />
                        </div>


                    </Col>
                </Row>


                {/* Freelance */}
                <Row className="my-5">
                    <Col>
                        <h5>
                            <strong>Développeur Full Stack </strong>
                            <span className="purple">Freelance</span>
                        </h5>
                        <p className="location-date">
                            📅 Janv 2024 – Présent
                        </p>
                        <p>
                            Conception et réalisation de solutions web sur mesure pour divers clients, allant de petites entreprises à des professionnels indépendants.
                        </p>
                        <ul>
                            <li>Développement de <strong>plateformes e-commerce</strong> avec gestion des paiements, paniers et espaces clients sécurisés.</li>
                            <li>Création d’applications de <strong>gestion immobilière</strong> (biens, contrats, rendez-vous, interface admin).</li>
                            <li>Implémentation de <strong>dashboards personnalisés</strong> pour la visualisation de données métier en temps réel.</li>
                            <li><strong>Frontend</strong> développé en React ou Angular selon les préférences du client (UI/UX responsive et dynamique).</li>
                            <li><strong>Backend</strong> en Node.js (Express) , Java , connecté à des bases de données MongoDB ou PostgreSQL selon les besoins du projet.</li>
                            {/*<li>Mise en place de solutions <strong>CI/CD</strong> , et documentation technique pour livraison professionnelle.</li>*/}
                        </ul>
                        <p><strong>Technologies :</strong> Angular, React, Java, Node.js, MongoDB, PostgreSQL</p>
                        <div  xs={2} sm={2} md={1}  className="image-row">
                            {[free1, free2, free3, free4].map((free, index) => (
                                <img key={index} src={free} className="zoom-image" alt={`Project ${index + 1}`}  />
                            ))}
                        </div>
                    </Col>
                </Row>


                {/* Digi Smart */}
                <Row className="my-5">
                    <Col>
                        <h5>
                            <strong>Stage Développeur Full Stack chez </strong>
                            <span className="purple">Digi Smart Solutions</span>
                        </h5>
                        <p className="location-date">
                            📅 Juin 2023 – Août 2023
                        </p>
                        <p>
                            Conception et développement d’un dashboard intelligent permettant la surveillance en temps réel de plus de 100 capteurs IoT dans un environnement industriel.
                        </p>
                        <ul>
                            <li>Développement d’un <strong>frontend Angular</strong> dynamique et réactif, avec affichage en temps réel des mesures (latence &lt; 1s).</li>
                            <li>Implémentation d’un <strong>backend Spring Boot</strong> exposant des API REST sécurisées, connectées à une base <strong>MongoDB</strong>.</li>
                            <li><strong>Gestion intelligente des événements</strong> : détection d’anomalies, génération d’alertes, enregistrement d’historique des alarmes.</li>
                            <li>Visualisation de données par capteur, filtrage avancé, et vues personnalisées pour les techniciens et les superviseurs.</li>
                        </ul>
                        <p><strong>Technologies :</strong> Angular, Spring Boot, MongoDB, Git, REST API, WebSocket</p>
                        <div className="image-row">
                            <img src={digi1} className="zoom-image" alt="PFA" />
                            <img src={digi2} className="zoom-image" alt="PFA" />
                            <img src={digi3} className="zoom-image" alt="PFA" />
                            <img src={digi4} className="zoom-image" alt="PFA" />
                        </div>
                        <Image
                            src="../../Assets/Projects/ecommerce.png"
                            fluid
                            rounded
                            className="mt-3"
                            alt="Digi Smart Internship"
                        />
                    </Col>
                </Row>


                {/* Tunisie Telecom */}
                <Row className="my-5">
                    <Col>
                        <h5>
                            <strong>Stage Réseau chez </strong>
                            <span className="purple">Tunisie Telecom</span>
                        </h5>
                        <p className="location-date">
                            📅 Juil 2022 – Août 2022
                        </p>
                        <p>
                            Contribution aux campagnes de mesure et à l’optimisation des performances des réseaux mobiles (2G, 3G, 4G) dans différentes zones géographiques.
                        </p>
                        <ul>
                            <li><strong>Collecte de données radio</strong> sur le terrain à l’aide de l’outil professionnel <strong>Nemo Outdoor</strong>.</li>
                            <li><strong>Analyse des KPIs réseaux</strong>  à l’aide de <strong>scripts Python</strong> pour identifier les zones à faible couverture ou interférences.</li>
                            <li>Préparation de <strong>rapports de performance</strong> pour appuyer les décisions de l’équipe optimisation radio.</li>
                        </ul>
                        <p><strong>Technologies :</strong> Python, Nemo Outdoor, Excel</p>
                        {/*<Image*/}
                        {/*    src="/images/tunisie_telecom.png"*/}
                        {/*    fluid*/}
                        {/*    rounded*/}
                        {/*    className="mt-3"*/}
                        {/*    alt="Tunisie Telecom Stage"*/}
                        {/*/>*/}
                    </Col>
                </Row>

                {/* 2021 Final Year Project (PFA) */}
                <Row className="my-5">
                    <Col>
                        <h5>
                            <strong>Projet de Fin d'Année (PFA) chez </strong>
                            <span className="purple">FSM</span>
                        </h5>
                        <p className="location-date">
                            📅 2021
                        </p>
                        <p>
                            Conception et développement d'un système embarqué complet de surveillance et d’assistance à la conduite, intégrant la détection de voies, de véhicules, et la surveillance de la fatigue du conducteur, avec implémentation sur des cartes Pynq Z1 et Jetson Xavier NX.
                        </p>
                        <ul>
                            <li><strong>Détection de voies</strong> : Utilisation de techniques de vision par ordinateur et de filtrage de bordures pour détecter et suivre les lignes de la route, même dans des conditions de faible luminosité. Implémentation avec <strong>OpenCV</strong>.</li>
                            <li><strong>Détection de véhicules</strong> : Application d'un réseau de neurones convolutifs (CNN) avec <strong>TensorFlow</strong> et <strong>Keras</strong> pour détecter et classifier les véhicules présents dans l’image capturée en temps réel à partir d'une caméra embarquée.</li>
                            <li><strong>Détection de la fatigue</strong> : Implémentation d'un modèle d’apprentissage automatique basé sur l’analyse des expressions faciales et des mouvements oculaires à l’aide de <strong>Scikit-Learn</strong>. Le modèle détecte les signes de fatigue tels que les clignements excessifs et l’absence de regard sur la route.</li>
                            <li>Intégration des systèmes sur deux plateformes embarquées : <strong>Pynq Z1</strong> (pour la détection de voies et véhicules via des algorithmes légers) et <strong>Jetson Xavier NX</strong> (pour les modèles de Deep Learning plus complexes et la gestion de la caméra en haute résolution).</li>
                            <li><strong>Optimisation des performances</strong> pour assurer un traitement en temps réel, avec un taux de détection minimal de 30 images par seconde, en utilisant des techniques de traitement parallèle et des optimisations matérielles sur les cartes embarquées.</li>
                        </ul>
                        <p><strong>Technologies :</strong> Python, OpenCV, TensorFlow, Keras, Scikit-Learn, Pynq Z1, Jetson Xavier NX, Deep Learning, Vision par ordinateur</p>
                        <div className="image-row">
                            <img src={pfa1} className="zoom-image" alt="PFA" />
                            <img src={pfa2} className="zoom-image" alt="PFA" />
                        </div>
                    </Col>
                </Row>


            </Container>
        </Container>
    );
}

export default Works;

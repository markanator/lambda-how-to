import React from 'react';
import ArticleCard       from '../../components/FP_ArticleCard';
import {Jumbotron, Row, Col} from 'reactstrap';
import './FrontPageContent.css';



export default function FrontPageContent({fpData}) {

    return (
        <div className='fp-container-main'>
            {/* Call to action */}
            <div className='fp-hero'>
                <Jumbotron>
                    <h1 className="display-3 text-left">"How-To" life hacks!</h1>
                    <hr className="my-2"/>
                    <p className="lead text-left">Have a life hack? Share it on how-to. Posts with the most likes / reviews will be at the top of the feed, simplifying life for everyone.</p>
                </Jumbotron>
            </div>
            <div className='fp-three-blurbs'>
                {/* Reasons to continue using our site */}
                <Row className='blurbs-container-row'>
                    <Col sm='4'>
                        <h4>Easy To Learn</h4>
                        <p>Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at.</p>
                    </Col>
                    <Col sm='4'>
                        <h4>Everything by Everyone</h4>
                        <p>Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at.</p>
                    </Col>
                    <Col sm='4'>
                        <h4>A Safe Place</h4>
                        <p>Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at.</p>
                    </Col>
                </Row>
            </div>
            <hr/>
            <div className='fp-explore-container text-left'>
                {/* A small selection of quality guides */}
                <h3>Explore User Guides</h3>
                <div className='fp-guides-container'>
                    {/* MAP through imported data ?? */}
                            {fpData.length !== 0 ? CardWrapper(fpData) : (<p>Sorry couldn't load data from server...</p>)}
                </div>
            </div>
        </div>
    );
}

function CardWrapper(article) {
    return (
        <div className="article-wrapper-fp">
            {/* map through the data and render cards */}
            {/* LIMIT TO THREE ARTICLES (.slice(0,3))*/}
            {article.map(eClass => {
                    return (
                        <ArticleCard
                            key={eClass.id}
                            data={eClass}
                        />
                        );
                })}
        </div>
    );
}
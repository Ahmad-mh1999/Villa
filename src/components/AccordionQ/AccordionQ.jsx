import Accordion from 'react-bootstrap/Accordion';
import './AccordionQ.css';
function AccordionQ() {
    return (
        <div className="accordion">
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>How I Can Buy A Villa in Best Price ?</Accordion.Header>
                    <Accordion.Body>
                        Get your <strong>dream villa</strong> at
                        the best price and  location by reviewing
                        our special offers and the search and filter
                        feature, as we strive to be the best in this field.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Do you want to rent the villa for vacation ?</Accordion.Header>
                    <Accordion.Body>
                        We provide you with many options at the
                        best price and places of stunning nature
                        with all amenities, in addition to insurance
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Who are we ?</Accordion.Header>
                    <Accordion.Body>
                        We, Villa Company, are a company that
                        seeks to give the best experience with
                        the best service with reasonable costs
                        for everyone
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default AccordionQ
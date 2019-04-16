import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';

import { Section } from '../models/section.interface';
import { fetchSections } from '../config/service';
import { SectionsDropdown } from './SectionsDropdown';

interface Props {
  onSelect(s: string): void;
}

export const Header = (props: Props) => {
  const [sections, setSections] = useState<Section[]>([]);

  useEffect(() => {
    fetchSections().then(response => {
      console.log(response);

      setSections(response.results);
    });
  }, ['']);

  return (
    <div className="header">
      <Container>
        <Row>
          <Col xs="6">
            <input />
          </Col>

          <Col xs="6">
            <SectionsDropdown sections={sections} onSelect={props.onSelect} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

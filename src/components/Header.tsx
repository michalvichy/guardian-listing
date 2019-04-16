import React, { useState, useEffect } from 'react';
import { Row, Col, Input } from 'reactstrap';

import { Section } from '../models/section.interface';
import { SectionsDropdown } from './SectionsDropdown';

import { fetchSections } from '../config/service';
import { useDebounce } from '../helpers/useDebounce';

interface Props {
  onSelect(s: string): void;
}

export const Header = (props: Props) => {
  const [sections, setSections] = useState<Section[]>([]);
  const [name, setName] = useState('');
  const delayedName = useDebounce(name, 500);

  useEffect(() => {
    if (name.length > 3 || name.length === 0) {
      fetchSections(name).then(response => {
        setSections(response.results);
      });
    }
  }, [delayedName]);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value.trim());
  }

  return (
    <div className="header">
      <Row>
        <Col xs="6">
          <Input id="input" type="text" onChange={handleInputChange} />
        </Col>

        <Col xs="6">
          <SectionsDropdown sections={sections} onSelect={props.onSelect} />
        </Col>
      </Row>
    </div>
  );
};

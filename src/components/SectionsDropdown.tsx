import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import { Section } from '../models/section.interface';

interface Props {
  sections: Section[];
  onSelect(s: string): void;
}

export const SectionsDropdown = (props: Props) => {
  const [opened, setOpen] = useState<boolean>(false);

  function toggle() {
    setOpen(!opened);
  }

  return (
    <Dropdown isOpen={opened} toggle={toggle}>
      <DropdownToggle caret>Sections</DropdownToggle>

      <DropdownMenu>
        {props.sections.map(section => (
          <DropdownItem
            key={section.id}
            onClick={() => props.onSelect(section.id)}
          >
            {section.webTitle}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};
